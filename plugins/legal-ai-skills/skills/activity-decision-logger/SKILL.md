---
name: activity-decision-logger
description: "Maintain a matter activity and decision record with source provenance, actions, recorded reasons, uncertainty, revisions and approvals; review logging gaps without claiming hidden thought capture."
---

# Activity and Decision Logger

## Scope

Keep an auditable record of observed work and stated decisions, not a transcript of private internal thoughts. Generated explanations are recorded reasons, not proof of the model's internal process. This skill does not capture every host event automatically or create tamper-resistant storage.

For an existing saved/logged matter, continue its record. When the user requests logging or a saved matter, use the authorised matter directory; otherwise keep a proportionate record in chat under the firm's matter-file rules. Do not create persistent sensitive logs for an unrelated quick question.

## Record entries as work occurs

Use `activity-log.jsonl` for structured entries and `decision-log.md` for a readable decision index where file tools are available. Each entry includes:

- unique event ID, matter ID, timestamp with offset, actor/role and event type;
- task/instruction and actual action or decision, including success/failure;
- document IDs, versions and reviewed locators or actual tool/query/source references;
- evidence basis, authority pinpoints, verification dates and status;
- recorded reasons, material alternatives considered, assumptions and uncertainties for decisions;
- output references, next step/owner and actual user approval where relevant;
- related or superseded event IDs and retrospective status.

Distinguish observed tool events, user statements and model-reported summaries. Do not manufacture event timestamps, tool calls, lawyer participation, approvals or searches. Mark reconstructed entries retrospective and give event time as unknown when unavailable.

Append corrections and superseding decisions; do not silently replace earlier entries. A logging failure must be reported, not treated as a successful write. Review coverage against available actions and disclose gaps; never claim completeness beyond observable host data.

## Confidentiality and output

Use document references and minimal necessary excerpts. Never log passwords, tokens or unnecessary sensitive data. Follow matter scope, access and retention instructions; an append-only working convention does not prevent authorised deletion, redact retained copies or supply access control. Do not call the record legally privileged or immutable merely because it is labelled so.

Provide the record location, decisions and unresolved issues, corrections and known coverage gaps. If file tools are unavailable, deliver an exportable record in chat and say it has not been saved. See the shared [language and logging protocol](../../assets/firm/language-and-logging.md).


## Local append helper

When Node.js 18+ and local file tools are available, use [scripts/append-log.mjs](scripts/append-log.mjs) to append structured entries to the authorised matter directory. Read an entry JSON file on stdin:

```text
node <skill-directory>/scripts/append-log.mjs <authorised-matter-directory> < entry.json
```

Required fields: `matter_id`, `actor`, `event_type`, `summary`, `provenance` (`observed`, `user_statement` or `model_reported`), `retrospective` (boolean), `references` (array) and `uncertainties` (array). Decisions also require `recorded_reasons`. Optional fields: `event_time` (ISO timestamp with timezone, or null), `alternatives`, `related_event_ids`, `output_refs`, `next_step` and `status`. The helper supplies a unique `event_id` and actual `recorded_at`; unknown event time remains null. Use related IDs to identify corrections/supersession.

The helper preserves earlier lines, prevents cross-matter appends and fails on a writer lock or damaged log. Report failures. A crash can leave a lock: establish that no writer is running before removing a stale lock. Do not repair damaged records silently. The helper does not capture tools automatically, validate the truth of reasons, enforce retention, redact secrets or generate the readable index; apply the protocol above. Update `decision-log.md` with linked event IDs after successful appends.
