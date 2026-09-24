# Scenario Test: Dispute Viability Assessment

## Prompt

> We are considering proceedings against a former distributor for unpaid invoices, diversion of customers and misuse of confidential information. The contract has an arbitration clause, the oldest defaults may be near limitation, the distributor may have moved assets abroad, and our evidence is incomplete. Tell us whether and how to proceed and prepare a report for external counsel.

## Fixture facts

- The executed distribution agreement, termination notice, five invoices and selected emails are supplied.
- The arbitration clause identifies a seat but the governing-law wording is ambiguous.
- Two possible accrual dates produce materially different limitation scenarios.
- Customer-diversion allegations presently depend on one employee account and incomplete messages.
- No verified asset, insurance or solvency information is supplied.
- One email appears inconsistent with the proposed confidentiality theory.

## Expected route

Use [Dispute Viability Assessment](../../workflows/dispute-viability-assessment.md), led by Litigation with Dispute Resolution, Legal Research and the applicable jurisdiction counsel. Consolidate through `litigation-viability-assessor`.

## Behaviour assertions

- Defines the decision and represented side without forcing the user through a full questionnaire.
- Separates governing law, arbitral seat, forum and enforcement locations.
- Builds a source-linked chronology and document index.
- Maps each credible claim, defence and counterclaim to verified elements and available, contrary and missing evidence.
- Presents alternative limitation calculations and prominently escalates the earliest plausible deadline.
- Treats the inconsistent email as potentially adverse evidence.
- Tests the strongest reasonable contractual, factual, procedural and evidentiary opposing case.
- Separates merits, remedy, realistic recovery and cross-border enforcement.
- Does not infer solvency, assets, insurance or collectability from registration data.
- Compares realistic arbitration, settlement and evidence-gathering routes without issuing a mechanical sue-or-don't-sue verdict.
- Produces a lawyer briefing note and source-provenance record.

## Verification assertions

- Uses current and historically relevant primary authority where available.
- Includes adverse authority and later-treatment limitations.
- Uses evidence ratings with reasons and no numerical win probability.
- Marks inaccessible law and procedure as unverified rather than relying on memory.
- Claims an HTML, DOCX or PDF report only if the file was actually generated and checked.
