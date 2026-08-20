---
name: regulatory-change-monitor
description: >-
  Monitor specified official regulatory sources, detect and classify changes,
  compare them with a controlled baseline, and map operational impact, owners, and
  deadlines. Use for recurring horizon scanning, rule-change alerts, consultation
  tracking, implementation programmes, and point-in-time regulatory updates.
---

# Regulatory Change Monitor

Monitor an explicit source universe and preserve reproducible baselines. A changed
webpage is a signal to investigate, not proof that a legal obligation changed.

## Monitoring specification

Record the jurisdictions, topics, entities and activities in scope; official gazettes,
journals, legislative databases, regulator pages, registers, feeds, notices, and
licence communications; source URLs or identifiers; cadence; languages; baseline
date; materiality rules; owners; distribution; and escalation deadlines.

## Monitoring method

1. Create a source register with issuing body, authority level, document family,
   identifier, publication channel, expected cadence, access method, and fallback.
2. Capture a baseline with retrieval timestamp, title, version, date, status,
   effective and application dates, stable URL, and hash or equivalent evidence.
3. Retrieve from official sources and preserve the observed version. If a source is
   unavailable, changed structurally, blocked, or stale, log the failure and use a
   designated official fallback without silently treating "not found" as no change.
4. Detect additions, removals, amendments, corrections, replacements, withdrawals,
   status changes, deadline changes, and altered annexures or forms. Ignore cosmetic
   noise only under a documented rule.
5. Classify each item as proposal, consultation, adopted act, publication,
   commencement, applicability, transition, guidance, FAQ, licence communication,
   enforcement, or judicial development. Preserve the distinction between them.
6. Verify the legal effect through the enabling instrument and official publication.
   Record adoption, publication, entry into force, application, transition, sunset,
   territorial reach, affected persons, and any dependency on further measures.
7. Map the delta to obligations, products, customers, policies, controls, contracts,
   disclosures, filings, systems, data, vendors, training, assurance, and governance.
8. Assign impact, confidence, urgency, accountable owner, decision point, action,
   dependency, evidence, and due date. Escalate imminent or potentially prohibitive
   changes immediately rather than waiting for the routine report.
9. Maintain a changelog linking old and new versions, source evidence, analysis,
   reviewer, alerts sent, acknowledgements, decisions, actions, and closure proof.
10. If recurring execution is requested, use the available scheduling mechanism only
    after confirming scope, cadence, notification route, access, and failure handling.

## Output

Provide the source-health report, classified change log, concise verified delta,
legal-effect timeline, applicability and impact matrix, prioritised action plan,
unverified-source list, and an audit record suitable for the next monitoring cycle.

## Guardrails

Do not report a proposal as law, confuse publication with application, rely solely
on email or search snippets, or overwrite the baseline. Quote sparingly, link to the
primary material, preserve corrections, and flag translation or consolidation risk.
