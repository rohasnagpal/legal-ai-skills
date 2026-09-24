# Scenario Test: Data Breach Response

## Prompt

> A processor reported unauthorised access to customer records. The affected systems, dates, individuals and jurisdictions are still being investigated. Build the legal response plan without guessing notification duties.

## Expected route

Use [Data Breach Response](../../workflows/data-breach-response.md) with Compliance, Investigations, Contracts, Legal Research and applicable jurisdiction counsel.

## Behaviour assertions

- Creates a live chronology and separates confirmed, disputed and unknown facts.
- Preserves evidence while allowing technical containment.
- Maps controller, processor, contract, regulator and individual-notification questions by jurisdiction.
- Uses alternative deadline scenarios until trigger facts are confirmed.
- Produces decision, evidence, notification and remediation logs.
- Does not send a notice, claim completeness or invent an affected population.

## Verification assertions

- Checks current primary notification rules and contract clauses.
- Reconciles dates and populations across all communications.
- Labels unavailable live-law checks.
