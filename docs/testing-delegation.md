# Delegation evaluation

The [suite](../plugins/legal-ai-skills/tests/delegation-evaluations.yaml) evaluates actual dispatch, scoped inputs, dependency handling, contribution acceptance, authority checks, conflict reconciliation, failure handling, revised evidence and sequential fallback. It does not assume that having agent files proves delegation works.

## Run protocol

1. Record host, host version, plugin revision, date, available capabilities and the supplied fixture documents. Use synthetic client records. Never upload real confidential material merely to test isolation.
2. Run every case for the selected mode in a fresh matter. For document/source-dependent cases, prepare controlled synthetic records containing the stated conflict, missing source, changed version or injection; retain their content/version with the trace. Deliberately withhold sources or simulate failures in a controlled test environment where required. Do not substitute an ordinary successful run for the failure case.
3. For native mode, retain actual dispatch/tool traces, scoped input records, contributions, correction requests and final work. A claim in the final answer that a lawyer reviewed something is not execution evidence. If the host cannot expose dispatch/input traces, mark that criterion unproven rather than passing it.
4. For sequential mode, disable native delegation and run its fallback case. Retain separately labelled role work. A sequential pass does not establish native performance, or conversely.
5. A reviewer assesses every criterion from the trace and work product. Record a locator (trace event, contribution section or file/line) and the specific observation. Mark unobserved criteria false, including where evidence is unavailable. Never score by keyword presence alone. Every criterion is required; do not average away a failure involving authority, disclosure or fictitious execution.
6. Save results as JSON and score with `ruby scripts/score-delegation-evaluations.rb /absolute/path/results.json`. Exit 0 means all selected-mode criteria passed reviewer assessment; 1 means a criterion failed; 2 means incomplete or invalid results.

## Result format

Top-level fields: `host`, `version` (include plugin revision), `reviewer`, `run_date`, `mode` (`native` or `sequential`) and `cases`. Include every case for the chosen mode exactly once. Each case has `id` and `checks`; each check has the criterion `id`, boolean `pass` and nonempty `evidence` containing a locator and observation. Example shape for one case (not a complete native result):

```json
{
  "host": "Host name",
  "version": "Host version / plugin revision",
  "reviewer": "Reviewer",
  "run_date": "YYYY-MM-DD",
  "mode": "native",
  "cases": [{
    "id": "quick-no-team",
    "checks": [{"id": "C1", "pass": false, "evidence": "trace event 4: no skill selection recorded"}]
  }]
}
```

The scorer validates completeness and aggregates reviewer decisions; it does not run an LLM, inspect the trace itself, verify legal accuracy or certify the reviewer. Report host/mode-specific results and material failures. Repository validation and scorer tests are structural checks, not live delegation results.

## Tort coverage evaluation

Run the [tort cases](../plugins/legal-ai-skills/tests/torts-behavioral-evals.yaml) with sourced local-law fixtures, including a civil-law jurisdiction, no-source fallback and the named adverse-evidence situations. Inspect the element/evidence matrix, local authority, contrary case and remedy analysis; a correct skill route alone is insufficient. Use the [workflow scenario](../plugins/legal-ai-skills/tests/firm/civil-liability-and-torts-assessment.md) for end-to-end review.
