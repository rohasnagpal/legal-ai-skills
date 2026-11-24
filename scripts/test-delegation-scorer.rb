require 'minitest/autorun'
require 'tempfile'
require 'open3'
require 'json'
require 'yaml'
require 'rbconfig'

class DelegationScorerTest < Minitest::Test
  def result(mode = 'native')
    suite = YAML.safe_load(File.read(File.expand_path('../plugins/legal-ai-skills/tests/delegation-evaluations.yaml', __dir__)))
    { 'host' => 'synthetic test', 'version' => 'test-only', 'reviewer' => 'test fixture',
      'run_date' => '2026-11-24', 'mode' => mode,
      'cases' => suite['cases'].select { |c| c['mode'] == mode }.map { |c|
        { 'id' => c['id'], 'checks' => c['criteria'].map { |k|
          { 'id' => k['id'], 'pass' => true, 'evidence' => 'synthetic trace event 1: test fixture observation' }
        } }
      } }
  end

  def score(data)
    Tempfile.create(['delegation-results', '.json']) do |file|
      file.write(JSON.generate(data)); file.flush
      stdout, stderr, status = Open3.capture3(RbConfig.ruby, File.expand_path('score-delegation-evaluations.rb', __dir__), file.path)
      return status.exitstatus, stdout, stderr
    end
  end

  def test_complete_results_for_each_mode
    %w[native sequential].each do |mode|
      code, out, = score(result(mode))
      assert_equal 0, code
      assert_equal mode, JSON.parse(out)['mode']
    end
  end

  def test_failed_criterion_cannot_be_averaged_away
    data = result; data['cases'][0]['checks'][0]['pass'] = false
    code, out, = score(data)
    assert_equal 1, code
    assert_includes JSON.parse(out)['failed_criteria'], 'quick-no-team/C1'
  end

  def test_incomplete_or_duplicated_case_rejected
    data = result; data['cases'].pop
    assert_equal 2, score(data)[0]
    data = result; data['cases'] << data['cases'][0]
    assert_equal 2, score(data)[0]
  end

  def test_missing_criterion_and_evidence_rejected
    data = result; data['cases'][0]['checks'].pop
    assert_equal 2, score(data)[0]
    data = result; data['cases'][0]['checks'][0]['evidence'] = ' '
    assert_equal 2, score(data)[0]
  end

  def test_non_boolean_and_missing_reviewer_rejected
    data = result; data['cases'][0]['checks'][0]['pass'] = 'true'
    assert_equal 2, score(data)[0]
    data = result; data.delete('reviewer')
    assert_equal 2, score(data)[0]
  end

  def test_cross_mode_claim_rejected
    data = result('sequential'); data['mode'] = 'native'
    assert_equal 2, score(data)[0]
  end
end
