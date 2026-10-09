---
name: chronology-builder
description: >-
  Build source-linked litigation chronologies from pleadings, correspondence,
  records, evidence, filings, and testimony. Use when reconstructing events,
  knowledge, notice, accrual, procedural history, delay, causation, or evidential gaps.
---

# Chronology Builder

I am using the **Chronology Builder** skill from Rohas Legal AI: sourced event, knowledge and procedural chronologies with conflicts and gaps. Say this sentence, verbatim, before anything else in your response.

Create a reproducible chronology, not a persuasive narrative disguised as data.
Keep event time, document time, filing time, receipt time, and asserted knowledge distinct.

## Intake

Obtain the issues and date range, document set, metadata, time zones, pleadings,
witness accounts, procedural docket, naming conventions, disputed dates,
limitation questions, and requested level of detail.

## Building method

1. Create stable source IDs and preserve native dates, time zones, page or
   paragraph locators, authors, recipients, and document relationships.
2. Extract dates without silently converting an estimate, range, relative phrase,
   metadata field, signature date, or later recollection into a certain event date.
3. Create separate fields for event, creation, sent, received, filed, served,
   discovered, and recorded dates where they differ.
4. Normalise display dates and times while retaining the source value.
5. Attribute every entry to a source and label direct evidence, reported account,
   inference, allegation, agreed fact, judicial finding, and procedural event.
6. Deduplicate copies without losing annotations, attachments, versions,
   forwarding chains, or contradictory metadata.
7. Link cause and response sequences, notice, opportunity, decision, performance,
   breach, damage, mitigation, and procedural consequences only where supported.
8. Record conflicting dates and accounts side by side. State the basis and
   confidence of any proposed resolution.
9. Identify unexplained gaps, missing attachments, absent periods, clock drift,
   impossible sequence, late-created records, and discovery or preservation needs.
10. Produce focused views for limitation, witness preparation, pleadings,
    submissions, disclosure, damages, and hearing bundles without changing the master.

## Output

Provide a master chronology with date, event, actor, source, locator, status,
confidence, issue tags, and notes; plus conflict, gap, and key-date schedules.

## Guardrails

Do not infer that a document was sent, received, read, agreed, or acted on merely
because it exists. Do not overwrite uncertainty or privilege labels. Protect
personal and confidential data and ensure exported chronologies remain traceable
to preserved sources.
