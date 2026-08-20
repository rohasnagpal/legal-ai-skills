#!/usr/bin/env ruby
# Validates the repo's structure: SKILL.md frontmatter, plugin manifests,
# marketplace catalogs, and README links. Run locally with
# `ruby scripts/validate.rb` before pushing, or let CI run it on every
# push and pull request (see .github/workflows/validate.yml).
#
# The repo ships one plugin -- plugins/rohas-legal-ai -- containing the
# complete skill library. This script fails loudly if a second top-level
# plugin directory reappears, since that would mean the single-plugin
# architecture has regressed.
require 'yaml'
require 'json'
require 'set'

Dir.chdir(File.expand_path('..', __dir__))

errors = []
warnings = []

NAME_RE = /\A[a-z0-9]+(-[a-z0-9]+)*\z/
EXPECTED_PLUGIN = 'rohas-legal-ai'

# ---- 0. Exactly one plugin directory ----
plugin_dirs = Dir.glob('plugins/*/').map { |d| d.chomp('/').split('/').last }.sort
if plugin_dirs != [EXPECTED_PLUGIN]
  unexpected = plugin_dirs - [EXPECTED_PLUGIN]
  errors << "plugins/: expected only '#{EXPECTED_PLUGIN}', found unexpected plugin director#{unexpected.length == 1 ? 'y' : 'ies'}: #{unexpected.join(', ')}" unless unexpected.empty?
  errors << "plugins/: '#{EXPECTED_PLUGIN}' directory is missing" unless plugin_dirs.include?(EXPECTED_PLUGIN)
end

# ---- 1. SKILL.md frontmatter ----
skill_files = Dir.glob('plugins/*/skills/*/SKILL.md').sort
skill_names = []
skill_files.each do |f|
  folder = File.basename(File.dirname(f))
  content = File.read(f, encoding: 'UTF-8')
  parts = content.split(/^---\s*$/m)
  if parts.length < 3
    errors << "#{f}: malformed frontmatter delimiters"
    next
  end

  begin
    data = YAML.safe_load(parts[1])
  rescue => e
    errors << "#{f}: YAML parse error in frontmatter -- #{e.message}"
    next
  end

  unless data.is_a?(Hash)
    errors << "#{f}: frontmatter did not parse to a mapping"
    next
  end

  name = data['name']
  desc = data['description']
  unexpected_keys = data.keys - %w[name description]
  errors << "#{f}: unexpected frontmatter keys: #{unexpected_keys.join(', ')}" unless unexpected_keys.empty?

  errors << "#{f}: missing name field" if name.nil?
  if name
    errors << "#{f}: name '#{name}' does not match folder '#{folder}'" if name != folder
    errors << "#{f}: name '#{name}' is not kebab-case" unless NAME_RE.match?(name)
    errors << "#{f}: name too long (#{name.length}, max 64)" if name.length > 64
    skill_names << [name, f]
  end

  errors << "#{f}: missing description field" if desc.nil?
  if desc
    errors << "#{f}: description too long (#{desc.length}, max 1024)" if desc.length > 1024
    errors << "#{f}: description must not contain angle brackets" if desc.include?('<') || desc.include?('>')
    warnings << "#{f}: description suspiciously short (#{desc.length} chars)" if desc.length < 100
  end

  body = parts[2..].join('---')
  errors << "#{f}: contains an unresolved [TODO placeholder" if body.include?('[TODO')
  errors << "#{f}: empty body after frontmatter" if body.strip.empty?

  body.scan(/\[[^\]]+\]\(([^)]+)\)/).flatten.each do |link|
    next if link.match?(%r{\A(?:https?://|mailto:|#)})

    target = File.expand_path(link.sub(/#.*\z/, ''), File.dirname(f))
    errors << "#{f}: broken relative link to #{link}" unless File.exist?(target)
  end
end

# With every skill now sharing one skills/ directory, a duplicate `name` field
# is exactly what the folder-name check above can no longer catch on its own
# if two folders were ever merged carelessly -- so check it explicitly here.
skill_names.group_by { |name, _f| name }.each do |name, occurrences|
  next if occurrences.length <= 1

  errors << "duplicate skill name '#{name}' in: #{occurrences.map { |_n, f| f }.join(', ')}"
end

# Flag near-identical descriptions for manual review -- not a hard failure,
# since two skills can legitimately share most of their wording while
# differing in the one clause that actually distinguishes them.
def description_tokens(desc)
  desc.to_s.downcase.scan(/[a-z0-9]+/).to_set
end

descriptions = skill_files.map do |f|
  content = File.read(f, encoding: 'UTF-8')
  parts = content.split(/^---\s*$/m)
  next if parts.length < 3

  data = YAML.safe_load(parts[1]) rescue nil
  next unless data.is_a?(Hash) && data['description']

  [f, data['description'], description_tokens(data['description'])]
end.compact

descriptions.combination(2).each do |(file_a, desc_a, tokens_a), (file_b, desc_b, tokens_b)|
  next if tokens_a.empty? || tokens_b.empty?

  overlap = (tokens_a & tokens_b).size.to_f / (tokens_a | tokens_b).size
  next if overlap < 0.6

  warnings << "#{file_a} and #{file_b}: descriptions are #{(overlap * 100).round}% similar by word overlap -- review for routing ambiguity"
end

# ---- 2. .codex-plugin/plugin.json ----
Dir.glob('plugins/*/.codex-plugin/plugin.json').sort.each do |f|
  begin
    data = JSON.parse(File.read(f, encoding: 'UTF-8'))
  rescue => e
    errors << "#{f}: invalid JSON -- #{e.message}"
    next
  end

  plugin_root = File.expand_path('../..', f)
  folder_name = File.basename(plugin_root)
  name = data['name']
  version = data['version']
  iface = data['interface']

  errors << "#{f}: name '#{name}' does not match folder '#{folder_name}'" unless name == folder_name
  errors << "#{f}: version '#{version}' is not strict semver" unless version.to_s.match?(/\A\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?\z/)

  skills_path = data['skills']
  if skills_path.to_s.empty? || !skills_path.start_with?('./')
    errors << "#{f}: skills must be a relative path beginning with ./"
  else
    resolved_skills_path = File.expand_path(skills_path, plugin_root)
    errors << "#{f}: skills path does not resolve to a directory" unless Dir.exist?(resolved_skills_path)
  end

  unless iface.is_a?(Hash)
    errors << "#{f}: missing interface object"
    next
  end

  {
    'displayName' => 30,
    'shortDescription' => 30,
    'longDescription' => 4000,
    'developerName' => 80
  }.each do |key, limit|
    value = iface[key]
    errors << "#{f}: interface.#{key} is required" if value.to_s.strip.empty?
    errors << "#{f}: interface.#{key} too long (#{value.length}, max #{limit})" if value.is_a?(String) && value.length > limit
  end

  prompts = iface['defaultPrompt']
  unless prompts.is_a?(Array) && !prompts.empty?
    errors << "#{f}: interface.defaultPrompt must be a non-empty array"
  else
    errors << "#{f}: interface.defaultPrompt has #{prompts.length} entries (max 3)" if prompts.length > 3
    prompts.each_with_index do |prompt, index|
      errors << "#{f}: interface.defaultPrompt[#{index}] must be a string" unless prompt.is_a?(String)
      errors << "#{f}: interface.defaultPrompt[#{index}] too long (#{prompt.length}, max 128)" if prompt.is_a?(String) && prompt.length > 128
    end
  end

  %w[composerIcon logo].each do |key|
    relative_path = iface[key]
    if relative_path.to_s.empty?
      errors << "#{f}: interface.#{key} is required"
      next
    end

    unless relative_path.start_with?('./')
      errors << "#{f}: interface.#{key} must begin with ./"
      next
    end

    asset_path = File.expand_path(relative_path, plugin_root)
    unless asset_path.start_with?("#{plugin_root}#{File::SEPARATOR}") && File.file?(asset_path)
      errors << "#{f}: interface.#{key} does not reference a file inside the plugin"
      next
    end

    extension = File.extname(asset_path).downcase
    errors << "#{f}: interface.#{key} uses unsupported image type '#{extension}'" unless %w[.png .jpg .jpeg .webp .svg].include?(extension)
    errors << "#{f}: interface.#{key} exceeds 5 MiB" if File.size(asset_path) > 5 * 1024 * 1024

    next unless extension == '.svg'

    svg = File.read(asset_path, encoding: 'UTF-8')
    unless svg.match?(/<svg\b/i)
      errors << "#{f}: interface.#{key} is not a valid SVG document"
      next
    end

    width = svg[/<svg\b[^>]*\bwidth=["']([0-9.]+)["']/i, 1]&.to_f
    height = svg[/<svg\b[^>]*\bheight=["']([0-9.]+)["']/i, 1]&.to_f
    view_box = svg[/<svg\b[^>]*\bviewBox=["']([^"']+)["']/i, 1]&.split&.map(&:to_f)
    if width && height
      errors << "#{f}: interface.#{key} must be square" unless width == height
      errors << "#{f}: interface.#{key} must be at least 48x48" if width < 48 || height < 48
    elsif view_box&.length == 4
      errors << "#{f}: interface.#{key} viewBox must be square" unless view_box[2] == view_box[3]
      errors << "#{f}: interface.#{key} viewBox must be at least 48x48" if view_box[2] < 48 || view_box[3] < 48
    else
      errors << "#{f}: interface.#{key} needs numeric width/height or a viewBox"
    end
  end
end

# ---- 3. agents/openai.yaml, where present ----
Dir.glob('plugins/*/skills/*/agents/openai.yaml').sort.each do |f|
  data = YAML.safe_load(File.read(f, encoding: 'UTF-8'))
  iface = data['interface']
  unless iface && iface['display_name'] && iface['short_description'] && iface['default_prompt']
    errors << "#{f}: missing a required interface key (display_name, short_description, default_prompt)"
  end
rescue => e
  errors << "#{f}: YAML parse error -- #{e.message}"
end

# ---- 4. Routing and behaviour fixtures, where present ----
Dir.glob('plugins/*/tests/*.{yaml,yml}').sort.each do |f|
  begin
    data = YAML.safe_load(File.read(f, encoding: 'UTF-8'))
  rescue => e
    errors << "#{f}: YAML parse error -- #{e.message}"
    next
  end

  cases = data.is_a?(Hash) ? data['cases'] : nil
  unless cases.is_a?(Array) && !cases.empty?
    errors << "#{f}: cases must be a non-empty array"
    next
  end

  ids = []
  cases.each_with_index do |test_case, index|
    unless test_case.is_a?(Hash)
      errors << "#{f}: case #{index + 1} must be a mapping"
      next
    end

    %w[id prompt expected_behavior].each do |key|
      errors << "#{f}: case #{index + 1} missing #{key}" if test_case[key].to_s.strip.empty?
    end
    ids << test_case['id'] if test_case['id']
  end
  ids.group_by { |id| id }.each { |id, occ| errors << "#{f}: duplicate case id '#{id}'" if occ.length > 1 }

  # Fixture files are namespaced by their origin category (e.g.
  # criminal-behavioral-evals.yaml, contracts-routing-behavior.yaml) now that
  # they all live under the single plugin's tests/ directory, so a file's own
  # `plugin:` field -- not its path -- is what has to match the one plugin.
  all_skills = Dir.glob("plugins/#{EXPECTED_PLUGIN}/skills/*/SKILL.md").map { |path| File.basename(File.dirname(path)) }

  if File.basename(f).end_with?('-behavioral-evals.yaml')
    errors << "#{f}: version must be 1" unless data['version'] == 1
    errors << "#{f}: plugin '#{data['plugin']}' must be '#{EXPECTED_PLUGIN}'" unless data['plugin'] == EXPECTED_PLUGIN
    errors << "#{f}: risk_tier must be high" unless data['risk_tier'] == 'high'

    positive_count = 0
    negative_count = 0

    cases.each_with_index do |test_case, index|
      next unless test_case.is_a?(Hash)

      errors << "#{f}: case #{index + 1} must declare expected_skill (use null for a negative case)" unless test_case.key?('expected_skill')
      expected_skill = test_case['expected_skill']
      if expected_skill.nil?
        negative_count += 1
      else
        positive_count += 1
        errors << "#{f}: case #{test_case['id']} references unknown skill '#{expected_skill}'" unless all_skills.include?(expected_skill)
      end

      %w[must_include must_not_include].each do |key|
        value = test_case[key]
        errors << "#{f}: case #{test_case['id']} #{key} must be a non-empty string array" unless value.is_a?(Array) && !value.empty? && value.all? { |item| item.is_a?(String) && !item.strip.empty? }
      end
    end

    errors << "#{f}: needs at least 5 positive cases" if positive_count < 5
    errors << "#{f}: needs at least 1 negative case" if negative_count < 1
  elsif File.basename(f) == 'contracts-routing-behavior.yaml'
    covered_skills = cases.map { |test_case| test_case['expected_skill'] }.compact.uniq
    covered_skills.each do |skill|
      errors << "#{f}: case references unknown skill '#{skill}'" unless all_skills.include?(skill)
    end
    positive_count = cases.count { |test_case| !test_case['expected_skill'].nil? }
    negative_count = cases.count { |test_case| test_case.key?('expected_skill') && test_case['expected_skill'].nil? }
    errors << "#{f}: needs at least 5 positive cases" if positive_count < 5
    errors << "#{f}: needs at least 3 negative cases" if negative_count < 3
  elsif File.basename(f) == 'contracts-submission-cases.yaml'
    positive_cases = cases.select { |test_case| test_case['kind'] == 'positive' }
    negative_cases = cases.select { |test_case| test_case['kind'] == 'negative' }
    errors << "#{f}: needs at least 5 positive cases" if positive_cases.length < 5
    errors << "#{f}: needs at least 3 negative cases" if negative_cases.length < 3

    positive_cases.each do |test_case|
      %w[expected_skill expected_result_shape fixture_data].each do |key|
        errors << "#{f}: positive case #{test_case['id']} missing #{key}" if test_case[key].to_s.strip.empty?
      end
      expected_skill = test_case['expected_skill']
      errors << "#{f}: positive case #{test_case['id']} references unknown skill '#{expected_skill}'" if expected_skill && !all_skills.include?(expected_skill)
    end
    negative_cases.each do |test_case|
      %w[reason fixture_data].each do |key|
        errors << "#{f}: negative case #{test_case['id']} missing #{key}" if test_case[key].to_s.strip.empty?
      end
    end

    invalid_kinds = cases.reject { |test_case| %w[positive negative].include?(test_case['kind']) }
    errors << "#{f}: every case needs kind positive or negative" unless invalid_kinds.empty?
  end
end

# ---- 5. Marketplace manifests ----
def load_json(path, errors)
  JSON.parse(File.read(path, encoding: 'UTF-8'))
rescue => e
  errors << "#{path}: invalid JSON -- #{e.message}"
  nil
end

claude_mp = load_json('.claude-plugin/marketplace.json', errors)
agents_mp = load_json('.agents/plugins/marketplace.json', errors)

if claude_mp && agents_mp
  claude_names = claude_mp['plugins'].map { |p| p['name'] }
  agents_names = agents_mp['plugins'].map { |p| p['name'] }

  claude_names.group_by { |n| n }.each { |n, occ| errors << ".claude-plugin/marketplace.json: duplicate plugin '#{n}'" if occ.length > 1 }
  agents_names.group_by { |n| n }.each { |n, occ| errors << ".agents/plugins/marketplace.json: duplicate plugin '#{n}'" if occ.length > 1 }

  only_claude = claude_names.uniq - agents_names.uniq
  only_agents = agents_names.uniq - claude_names.uniq
  errors << "plugins in .claude-plugin but not .agents: #{only_claude.join(', ')}" unless only_claude.empty?
  errors << "plugins in .agents but not .claude-plugin: #{only_agents.join(', ')}" unless only_agents.empty?

  # Every declared plugin must actually have committed skill files behind it --
  # this is the exact class of bug that broke the mediation release earlier.
  claude_mp['plugins'].each do |p|
    path = p['source'].to_s.sub(%r{\A\./}, '')
    count = Dir.glob(File.join(path, 'skills', '*', 'SKILL.md')).length
    errors << "plugin '#{p['name']}': source '#{path}' has zero SKILL.md files" if count.zero?
  end
end

# ---- 6. README links to plugins/ resolve, and every skill is linked ----
readme = File.read('README.md', encoding: 'UTF-8')
readme.scan(%r{\]\((plugins/[^)]+)\)}).flatten.each do |link|
  errors << "README.md: broken link to #{link}" unless File.exist?(link)
end
skill_files.each do |f|
  warnings << "README.md: #{f} is not linked anywhere" unless readme.include?("(#{f})")
end

# ---- Report ----
puts "Checked #{skill_files.length} skills in #{plugin_dirs.length} plugin (#{plugin_dirs.join(', ')})."
puts

unless warnings.empty?
  puts "#{warnings.length} warning(s):"
  warnings.each { |w| puts "  - #{w}" }
  puts
end

if errors.empty?
  puts '✔ All checks passed.'
  exit 0
else
  puts "✘ #{errors.length} error(s):"
  errors.each { |e| puts "  - #{e}" }
  exit 1
end
