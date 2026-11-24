#!/usr/bin/env ruby
# Scores human-reviewed observations; does not run a model or judge legal accuracy.
require 'yaml'
require 'json'

begin
  raise 'Usage: ruby scripts/score-delegation-evaluations.rb RESULTS.json' unless ARGV.length == 1
  suite_path = File.expand_path('../plugins/legal-ai-skills/tests/delegation-evaluations.yaml', __dir__)
  suite = YAML.safe_load(File.read(suite_path)).fetch('cases')
  data = JSON.parse(File.read(ARGV.first))
  %w[host version reviewer run_date].each do |key|
    raise "missing #{key}" unless data[key].is_a?(String) && !data[key].strip.empty?
  end
  mode = data.fetch('mode')
  raise 'mode must be native or sequential' unless %w[native sequential].include?(mode)
  expected = suite.select { |c| c.fetch('mode') == mode }
  results = data.fetch('cases')
  raise 'cases must be an array' unless results.is_a?(Array)
  ids = results.map { |c| c.fetch('id') }
  raise 'duplicate case IDs' unless ids.uniq == ids
  raise 'case IDs must match every case for the selected mode' unless ids.sort == expected.map { |c| c.fetch('id') }.sort
  failed = []
  expected.each do |test|
    observed = results.find { |c| c['id'] == test['id'] }
    checks = observed.fetch('checks')
    raise "#{test['id']}: checks must be an array" unless checks.is_a?(Array)
    check_ids = checks.map { |c| c.fetch('id') }
    raise "#{test['id']}: missing, duplicate or unexpected criterion" unless check_ids.sort == test.fetch('criteria').map { |c| c.fetch('id') }.sort
    checks.each do |check|
      raise "#{test['id']}/#{check['id']}: pass must be boolean" unless [true, false].include?(check['pass'])
      evidence = check['evidence']
      raise "#{test['id']}/#{check['id']}: evidence locator and observation required" unless evidence.is_a?(String) && !evidence.strip.empty?
      failed << "#{test['id']}/#{check['id']}" unless check['pass']
    end
  end
  puts JSON.pretty_generate(host: data['host'], mode: mode, cases: expected.length,
                            status: failed.empty? ? 'pass' : 'fail', failed_criteria: failed,
                            limitation: 'Scores reviewer observations only; does not establish legal accuracy or performance in other hosts or modes.')
  exit(failed.empty? ? 0 : 1)
rescue StandardError => e
  warn "Invalid evaluation results: #{e.message}"
  exit 2
end
