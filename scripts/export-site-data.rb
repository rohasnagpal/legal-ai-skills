#!/usr/bin/env ruby
# frozen_string_literal: true

# Exports the firm's lawyers, skills and workflows as JSON for the directory on
# rohasnagpal.com/legal-ai-skills.php.
#
#   ruby scripts/build-skill-registry.rb
#   ruby scripts/export-site-data.rb ../rohasnagpal.com/assets/legal-ai-skills-data.json
#
# Reads plugins/legal-ai-skills/skill-registry.yaml, agents/*.md and workflows/*.md.

require 'json'
require 'yaml'
require 'time'

Encoding.default_external = Encoding::UTF_8

ROOT = File.expand_path('../plugins/legal-ai-skills', __dir__)
out = ARGV[0] or abort 'usage: ruby scripts/export-site-data.rb OUTPUT.json'

def frontmatter(path)
  text = File.read(path)
  m = text.match(/\A---\s*\n(.*?)\n---\s*\n/m)
  m ? YAML.safe_load(m[1]) || {} : {}
end

def heading(path)
  line = File.foreach(path).find { |l| l.start_with?('# ') }
  line ? line.sub(/^# /, '').strip : File.basename(path, '.md')
end

# First paragraph under a "## <title>" heading.
def section_text(path, title)
  text = File.read(path)
  m = text.match(/^## #{Regexp.escape(title)}\s*\n+(.+?)(?:\n\n|\n## |\z)/m)
  m ? m[1].gsub(/\[([^\]]+)\]\([^)]*\)/, '\1').gsub(/\s+/, ' ').strip : ''
end

registry = YAML.load_file(File.join(ROOT, 'skill-registry.yaml'))

skills = registry['skills'].select { |s| s['counts_as_legal_skill'] }.map do |s|
  {
    id: s['skill_id'],
    name: s['name'],
    area: s['practice_area'],
    type: s['category'],
    jurisdiction: s['jurisdiction'],
    owner: s['owner'],
    summary: s['summary'].to_s.strip
  }
end

# Specialists and the Managing Partner: skills they own. Counsel: their jurisdiction's local skills.
owned = Hash.new(0)
local = Hash.new(0)
skills.each do |s|
  owned[s[:owner]] += 1
  local["#{s[:jurisdiction]}-counsel"] += 1 unless s[:jurisdiction] == 'neutral'
end

lawyers = Dir.glob(File.join(ROOT, 'agents', '*.md')).sort.map do |path|
  id = File.basename(path, '.md')
  kind = if id == 'managing-partner' then 'managing'
         elsif id.end_with?('-counsel') then 'counsel'
         else 'specialist'
         end
  {
    id: id,
    name: heading(path),
    kind: kind,
    summary: frontmatter(path)['description'].to_s.strip,
    skills: kind == 'counsel' ? local[id] : owned[id]
  }
end
order = { 'managing' => 0, 'specialist' => 1, 'counsel' => 2 }
lawyers.sort_by! { |l| [order[l[:kind]], l[:name]] }
names = lawyers.map { |l| [l[:id], l[:name]] }.to_h

workflows = Dir.glob(File.join(ROOT, 'workflows', '*.md')).sort.map do |path|
  team = File.read(path)[/^## Matter Owner and team\s*\n+(.+?)\n/m, 1].to_s
  lead = team[%r{\(\.\./agents/([a-z0-9-]+)\.md\)}, 1]
  {
    id: File.basename(path, '.md'),
    name: heading(path),
    lead: lead ? names.fetch(lead, lead) : nil,
    summary: section_text(path, 'Trigger and objective')
  }
end

counts = registry['counts']
data = {
  generated_at: Time.now.utc.iso8601,
  counts: {
    managing_partner: 1,
    specialist_lawyers: counts['specialist_lawyers'],
    jurisdiction_counsel: counts['jurisdiction_counsel'],
    legal_skills: counts['legal_skills'],
    workflows: counts['workflows']
  },
  lawyers: lawyers,
  skills: skills,
  workflows: workflows
}

abort "skill count #{skills.size} does not match registry #{counts['legal_skills']}" if skills.size != counts['legal_skills']

File.write(out, JSON.generate(data))
puts "Wrote #{out}: #{lawyers.size} lawyers, #{skills.size} skills, #{workflows.size} workflows"
