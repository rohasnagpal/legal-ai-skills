# Builds the machine-readable skill registry from the repository itself.
# Ownership comes from the lawyer, counsel and Managing Partner files and the
# jurisdiction skill maps, so the registry never needs hand editing. Used by
# scripts/build-skill-registry.rb (writes the file) and scripts/validate.rb
# (checks the committed file is current).
require 'yaml'

module SkillRegistry
  PLUGIN_ROOT = 'plugins/legal-ai-skills'
  REGISTRY_PATH = "#{PLUGIN_ROOT}/skill-registry.yaml"

  # When several lawyers list a skill, the first lawyer in this order owns it
  # and the rest share it. Narrow practice areas come before broad ones.
  OWNER_PRIORITY = %w[
    family-lawyer real-estate-lawyer criminal-defence-lawyer tax-lawyer
    insolvency-lawyer banking-finance-lawyer consumer-protection-lawyer
    public-law-lawyer employment-lawyer ip-lawyer compliance-lawyer
    investigations-lawyer dispute-resolution-lawyer litigation-lawyer
    corporate-lawyer contracts-lawyer legal-research-lawyer
    india-counsel us-counsel uk-counsel managing-partner
  ].freeze

  PRACTICE_AREAS = {
    'family-lawyer' => 'family', 'real-estate-lawyer' => 'real-estate',
    'criminal-defence-lawyer' => 'criminal', 'tax-lawyer' => 'tax',
    'insolvency-lawyer' => 'insolvency', 'banking-finance-lawyer' => 'banking-finance',
    'consumer-protection-lawyer' => 'consumer', 'public-law-lawyer' => 'public-law',
    'employment-lawyer' => 'employment', 'ip-lawyer' => 'ip',
    'compliance-lawyer' => 'compliance', 'investigations-lawyer' => 'investigations',
    'dispute-resolution-lawyer' => 'dispute-resolution', 'litigation-lawyer' => 'litigation',
    'corporate-lawyer' => 'corporate', 'contracts-lawyer' => 'contracts',
    'legal-research-lawyer' => 'research', 'india-counsel' => 'jurisdiction',
    'us-counsel' => 'jurisdiction', 'uk-counsel' => 'jurisdiction',
    'managing-partner' => 'firm-operations'
  }.freeze

  # Entry points and gateways: not counted as legal skills.
  ENTRY_SKILLS = %w[hello-rohas ask-vclo india-counsel us-counsel uk-counsel].freeze

  CATEGORY_BY_SUFFIX = [
    [/-(drafter|documenter|builder|preparer)\z/, 'drafting'],
    [/-(reviewer|checker|validator|monitor|flagger)\z/, 'review'],
    [/-(analyst|analyser|assessor|interpreter|mapper|tracer|comparator|calculator|quantifier|estimator|extractor|evaluator|spotter)\z/, 'analysis'],
    [/-(planner|strategist|advisor)\z/, 'advice-and-planning'],
    [/-(synthesiser|summariser|explainer|collector|organizer|producer)\z/, 'research-and-documents']
  ].freeze

  module_function

  def skill_names
    Dir.glob("#{PLUGIN_ROOT}/skills/*/SKILL.md").map { |f| File.basename(File.dirname(f)) }.sort
  end

  def references_by_agent
    Dir.glob("#{PLUGIN_ROOT}/agents/*.md").sort.to_h do |path|
      content = File.read(path, encoding: 'UTF-8')
      refs = content.scan(%r{\.\./skills/([a-z0-9-]+)/SKILL\.md}).flatten +
             content.scan(/legal-ai-skills:([a-z0-9-]+)/).flatten
      [File.basename(path, '.md'), refs.uniq]
    end
  end

  def jurisdiction_of
    Dir.glob("#{PLUGIN_ROOT}/jurisdictions/*/skill-map.yaml").each_with_object({}) do |path, map|
      data = YAML.safe_load(File.read(path, encoding: 'UTF-8'))
      data.fetch('skills').values.flatten.each { |skill| map[skill] = data.fetch('jurisdiction') }
    end
  end

  def frontmatter(name)
    content = File.read("#{PLUGIN_ROOT}/skills/#{name}/SKILL.md", encoding: 'UTF-8')
    meta = YAML.safe_load(content.split(/^---\s*$/m)[1]) || {}
    title = content[/^# (.+)$/, 1].to_s.strip
    [meta, title]
  end

  def category(name)
    return 'firm-operations' if ENTRY_SKILLS.include?(name)

    CATEGORY_BY_SUFFIX.each { |pattern, label| return label if name.match?(pattern) }
    'other'
  end

  def build
    refs = references_by_agent
    jurisdictions = jurisdiction_of
    counsel_by_jurisdiction = { 'india' => 'india-counsel', 'us' => 'us-counsel', 'uk' => 'uk-counsel' }

    skills = skill_names.map do |name|
      meta, title = frontmatter(name)
      listing = OWNER_PRIORITY.select { |agent| refs.fetch(agent, []).include?(name) }
      jurisdiction = jurisdictions[name] || (counsel_by_jurisdiction.value?(name) ? name.sub('-counsel', '') : 'neutral')
      counsel = counsel_by_jurisdiction[jurisdictions[name]]
      listing << counsel if counsel && !listing.include?(counsel)
      listing.unshift(name) if counsel_by_jurisdiction.value?(name) && !listing.include?(name)
      owner = listing.first
      description = meta['description'].to_s.strip
      {
        'skill_id' => name,
        'name' => title,
        'category' => category(name),
        'practice_area' => owner ? PRACTICE_AREAS.fetch(owner, 'other') : nil,
        'jurisdiction' => jurisdiction,
        'owner' => owner,
        'shared_with' => listing.drop(1),
        'counts_as_legal_skill' => !ENTRY_SKILLS.include?(name),
        'review_required' => !%w[learn-law-with-rohas legal-exam-prep-with-rohas hello-rohas ask-vclo].include?(name),
        'summary' => description[/\A.*?[.!?](?=\s|\z)/m].to_s.gsub(/\s+/, ' ')
      }
    end

    {
      'version' => 1,
      'generated_by' => 'scripts/build-skill-registry.rb',
      'counts' => counts(skills),
      'skills' => skills
    }
  end

  def counts(skills)
    {
      'legal_skills' => skills.count { |skill| skill['counts_as_legal_skill'] },
      'specialist_lawyers' => Dir.glob("#{PLUGIN_ROOT}/agents/*-lawyer.md").length,
      'jurisdiction_counsel' => Dir.glob("#{PLUGIN_ROOT}/agents/*-counsel.md").length,
      'workflows' => Dir.glob("#{PLUGIN_ROOT}/workflows/*.md").length,
      'jurisdiction_specific_skills' => skills.count { |skill| skill['jurisdiction'] != 'neutral' && skill['counts_as_legal_skill'] }
    }
  end

  def render(registry = build)
    "# Generated by scripts/build-skill-registry.rb. Do not edit by hand.\n" + registry.to_yaml(line_width: -1)
  end
end
