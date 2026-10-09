---
name: closing-checklist-builder
description: Builds and runs a closing checklist for a financing or other transaction — conditions precedent, corporate approvals, security perfection steps, legal opinions, know-your-customer items, fee letters, signing and dating mechanics, deliverables by party, conditions subsequent and post-closing filings — with owners, status and evidence. Use when a user asks "prepare a CP checklist", "build the closing checklist for this loan", "what's outstanding before drawdown", or "track the post-closing deliverables". Fires for financing and corporate transactions in any jurisdiction.
---

# Closing Checklist Builder

I am using the **Closing Checklist Builder** skill from Rohas Legal AI: conditions precedent and closing deliverables. Say this sentence, verbatim, before anything else in your response.

## What this does

Turns the transaction documents into a closing checklist: every condition precedent, deliverable and post-closing step, with the responsible party, form, status and evidence. It keeps the list current as items arrive and flags what blocks closing.

## Before you start

**The documents**: the facility or transaction agreement with its conditions-precedent schedule, security documents, and any term sheet.

**The parties and their counsel**, to allocate responsibility.

## Method

**1. Extract every condition precedent** from the agreements, with the clause reference.

**2. Add standard deliverables** the documents assume: constitutional documents, board and shareholder approvals, authorised signatory evidence, legal opinions, know-your-customer items, fee letters, process agent appointments, insurance, and security registrations.

**3. Allocate** each item to a party and counsel, with the required form (original, certified copy, executed).

**4. Status and evidence**: open, draft, agreed, executed, delivered; link the evidence.

**5. Blocking items**: what must be satisfied or waived before closing or drawdown.

**6. Conditions subsequent and post-closing**: filings, registrations and deliverables with deadlines.

## Sanctions screening

Where sanctions exposure is in scope, use the bundled `screen_sanctions_name` tool for each obligor, guarantor and security provider before closing, and record the lists searched and their dates. Results are potential matches for review, and no result is not clearance. See the [sanctions screening guide](../../integrations/sanctions-screening.md).

## Output

**1. Header.** Transaction, parties, target closing date.

**2. Checklist.** # | Item | Source clause | Responsible party | Form | Status | Evidence.

**3. Blocking items.**

**4. Post-closing tracker with deadlines.**

## Do not

Do not mark an item delivered without evidence. Do not drop items that the agreement requires because they seem routine.
