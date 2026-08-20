---
name: transaction-document-checker
description: Checks a transaction closing set against the term sheet, definitive agreement, and conditions-precedent checklist — which documents are executed, which conditions precedent and approvals are satisfied, which filings and registrations remain, whose signature is missing, and what deliverable is outstanding. Use this whenever a user needs a closing checked or tracked — including phrasings like "check this closing set against our CP checklist", "are we ready to close", "what's still missing before signing", "confirm every condition precedent is satisfied", or "audit this bible against the definitive agreement". Distinct from m-and-a-diligence-checker, which scopes and runs diligence before a deal is agreed — this works after terms are agreed, tracking execution and closing mechanics through to completion. Fires for any transaction closing set, in any practice area (M&A, finance, real estate, corporate, JV).
---

# Transaction Document Checker

## Purpose

Confirm, document by document and condition by condition, whether a transaction is actually ready to close or has actually closed — catching the missing signature page, the unsatisfied condition precedent, and the filing nobody scheduled, before they surface as a completion failure or a post-closing dispute.

## Required inputs

Obtain the term sheet or definitive agreement setting out what closing requires, the current closing checklist or conditions-precedent list if one exists, the document set actually assembled (the "closing bible" or data room), and the target closing or signing date.

Ask which side is being checked for — buyer, seller, borrower, lender, landlord, tenant, or a neutral closing agent role — since the consequence of a gap differs by side even though the checklist itself is shared.

Treat the definitive agreement or term sheet's own conditions-precedent and deliverables list as blocking. Do not build a generic closing checklist from memory where the actual agreement specifies what closing requires — extract it from the document.

## Method

1. Extract every condition precedent, approval, consent, deliverable, and closing action from the definitive agreement or term sheet, in one structured list, before checking anything against the supplied document set.
2. Classify each item: document to be executed, approval or consent to be obtained, filing or registration to be made, payment to be made, or other action to be completed.
3. Check the supplied document set against that list item by item. For each executed document, confirm it is actually signed (not just drafted), by the correct signatory, in the correct capacity, dated, and internally consistent with the definitive agreement's defined terms and figures.
4. For approvals and consents, confirm the actual approval or consent document is present, not merely referenced — a board resolution recited as obtained is not evidence it was obtained.
5. For filings and registrations, state what has been filed, what remains outstanding, and the statutory or contractual deadline for each, if one exists.
6. Identify sequencing dependencies: a condition that must be satisfied before another can be, a document that must be executed before a filing can be made. Flag any dependency that appears to have been completed out of order.
7. Build a gap list: every item not yet satisfied, who is responsible for it, and what blocks closing versus what can follow post-closing as a completion undertaking (only where the definitive agreement actually permits deferred completion of that item).
8. Do not assert that closing has legally occurred, or that a condition has been validly waived, without the specific waiver mechanism the agreement requires. Flag any purported waiver that does not follow the agreement's own waiver formalities.

## Output

1. **Header.** Transaction, side checked for, target closing date, date of this check.
2. **Conditions-precedent and deliverables ledger.** Item | Category | Required by | Status (satisfied / outstanding / disputed) | Evidence located | Responsible party.
3. **Gap list.** Every outstanding item, blocking or non-blocking, with responsible party and deadline.
4. **Execution-quality findings.** Any document present but defectively executed, dated, or inconsistent with the definitive agreement.
5. **Sequencing flags.** Any dependency completed out of order or at risk of being so.
6. **Points requiring verification.** Any waiver mechanism, statutory filing deadline, or registration requirement resting on the governing law rather than the document set.

## Guardrails

- Do not mark an item satisfied on the strength of a recital or a cross-reference. The actual signed document, approval, or filing evidence has to be in the set.
- Do not invent a standard closing checklist where the definitive agreement specifies its own conditions precedent and deliverables — work from what the document actually requires.
- Do not assert that a condition has been waived without identifying the specific waiver mechanism the agreement requires and confirming it was followed.
- Do not assert that closing has legally completed. State what the documents show and flag legal-completion questions for verification.
- Do not omit a missing signature, an unsigned counterpart, or a document present in draft only, even where the gap looks minor.
