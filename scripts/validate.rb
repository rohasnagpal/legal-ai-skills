#!/usr/bin/env ruby
# Validates the repo's structure: SKILL.md frontmatter, plugin manifests,
# marketplace catalogs, and README links. Run locally with
# `ruby scripts/validate.rb` before pushing, or let CI run it on every
# push and pull request (see .github/workflows/validate.yml).
require 'yaml'
require 'json'

Dir.chdir(File.expand_path('..', __dir__))

errors = []
warnings = []

NAME_RE = /\A[a-z0-9]+(-[a-z0-9]+)*\z/

# ---- 1. SKILL.md frontmatter ----
skill_files = Dir.glob('plugins/*/skills/*/SKILL.md').sort
skill_files.each do |f|
  folder = File.basename(File.dirname(f))
  content = File.read(f)
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

  errors << "#{f}: missing name field" if name.nil?
  if name
    errors << "#{f}: name '#{name}' does not match folder '#{folder}'" if name != folder
    errors << "#{f}: name '#{name}' is not kebab-case" unless NAME_RE.match?(name)
    errors << "#{f}: name too long (#{name.length}, max 64)" if name.length > 64
  end

  errors << "#{f}: missing description field" if desc.nil?
  if desc
    errors << "#{f}: description too long (#{desc.length}, max 1024)" if desc.length > 1024
    warnings << "#{f}: description suspiciously short (#{desc.length} chars)" if desc.length < 100
  end

  body = parts[2..].join('---')
  errors << "#{f}: contains an unresolved [TODO placeholder" if body.include?('[TODO')
  errors << "#{f}: empty body after frontmatter" if body.strip.empty?
end

# ---- 2. .codex-plugin/plugin.json ----
Dir.glob('plugins/*/.codex-plugin/plugin.json').sort.each do |f|
  begin
    data = JSON.parse(File.read(f))
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
  data = YAML.safe_load(File.read(f))
  iface = data['interface']
  unless iface && iface['display_name'] && iface['short_description'] && iface['default_prompt']
    errors << "#{f}: missing a required interface key (display_name, short_description, default_prompt)"
  end
rescue => e
  errors << "#{f}: YAML parse error -- #{e.message}"
end

# ---- 4. Marketplace manifests ----
def load_json(path, errors)
  JSON.parse(File.read(path))
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

# ---- 5. README links to plugins/ resolve, and every skill is linked ----
readme = File.read('README.md')
readme.scan(%r{\]\((plugins/[^)]+)\)}).flatten.each do |link|
  errors << "README.md: broken link to #{link}" unless File.exist?(link)
end
skill_files.each do |f|
  warnings << "README.md: #{f} is not linked anywhere" unless readme.include?("(#{f})")
end

# ---- Report ----
puts "Checked #{skill_files.length} skills across #{Dir.glob('plugins/*/').length} categories."
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
