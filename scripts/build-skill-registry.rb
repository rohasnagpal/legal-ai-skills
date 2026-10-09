#!/usr/bin/env ruby
# Regenerates plugins/legal-ai-skills/skill-registry.yaml from the repository.
# Run after adding a skill, lawyer or jurisdiction mapping:
#   ruby scripts/build-skill-registry.rb
require_relative 'skill_registry'

Dir.chdir(File.expand_path('..', __dir__))
File.write(SkillRegistry::REGISTRY_PATH, SkillRegistry.render)
counts = SkillRegistry.build['counts']
puts "wrote #{SkillRegistry::REGISTRY_PATH}: #{counts.map { |k, v| "#{k}=#{v}" }.join(', ')}"
