---
name: termination-analyst
description: Reads every termination, notice, cure and survival clause in a contract as one system, for one identified party, and reports how each party can actually get out, on what notice, and what happens next — including whether a client's live intent to terminate right now would actually satisfy the trigger as drafted. Use this whenever a user wants the exit position worked through in depth rather than as one part of a full review — including phrasings like "can we terminate this for breach", "what notice do we need to give to get out of this MSA", "does this failure count as a material breach under the contract", "what survives if we terminate", "is our termination right weaker than theirs", or "can they walk away from this with no notice at all". Distinct from contract-reviewer, which covers exit as one part of a whole-agreement review — this goes deep on termination alone. Fires for any contract with termination, expiry or exit provisions.
---

# Termination Analyst

## What this does

Reads the termination, notice, cure and survival provisions in a contract as one system, for one identified party, and reports exactly how each party can get out, on what notice, subject to what conditions, and what happens once they do. Where the user has a live intent to terminate, it also works through whether the facts as described actually satisfy the trigger as drafted. It does not review the whole agreement; it goes deep on the exit alone.

## Before you start

**Which side's position is being analysed.** Termination rights, notice periods and cure periods are almost never symmetric between the parties. Ask, and do not begin until you know.

**Governing law.** Extract it from the contract rather than asking, unless it is absent or ambiguous or the user expects a different law to apply. Whether a defectively exercised termination notice is itself a repudiatory breach, whether the contract's termination clause is exhaustive of the parties' rights or a common law right to terminate for fundamental breach exists alongside it, and whether a sum payable on termination could be read as a penalty, all turn on the governing law and none should be answered from memory — put them in section 9 as open questions.

**The complete document set**, including schedules — a statement of work or service schedule commonly carries its own termination trigger distinct from the master agreement's. Missing material does not stop the analysis; proceed with what you have and mark the affected part Unreviewable.

Not blocking, ask once and proceed on what is answered: **posture** — negotiation or executed — which gates whether the output proposes fallback positions or states plain consequences, the same distinction used throughout this practice pack. **Whether there is a live intent to terminate right now**, and if so, the facts the client believes justify it. This changes the analysis from a general mapping exercise into a fact-specific application, and it matters enough to ask for directly rather than assume.

## Method

**1. Classify what you have been given**, in one line, before mapping anything.

**2. Read the whole document once before analysing any single termination route.** Termination provisions interact with definitions — "Cause", "Material Breach", "Insolvency Event" — with other clauses (a termination-for-convenience right is often disapplied during an initial minimum term), and with schedules that carry their own exit mechanics.

**3. Map every route out for every party separately.** Termination for convenience, and any minimum term or notice that qualifies it. Termination for breach, and whether a cure period is offered, for which breaches, and of what length. Termination for insolvency, checking the insolvency events are defined with the precision the document claims — vague or superseded company-law language here is common and matters. Termination for change of control. Termination for force majeure persisting beyond a stated period. Expiry — a fixed term with no renewal, or auto-renewal absent notice, in which case name the deadline to prevent an unwanted renewal. Any right tied to a specific named event: a missed milestone, a data breach, departure of named key personnel.

**4. For each route, extract precisely:** who holds it, what triggers it, whether it operates automatically or requires exercise by notice, the notice period and how it is calculated (from what date, calendar or business days, by what delivery method), whether a cure period applies and its length, and any condition precedent to exercise such as a prior written warning.

**5. Check the mechanics of exercise against the general notices clause.** A termination notice sent to an address, or by a method, that the notices clause does not authorise risks being ineffective — a serious practical problem if termination is imminent rather than theoretical.

**6. Work out the consequences of termination for each route, separately where they differ.** What must be returned or destroyed, which licences terminate and which survive, what fees remain payable or become immediately due, whether a wind-down or transition assistance obligation applies and at whose cost, and for how long. A termination for cause and a termination for convenience frequently carry different consequences under the same document; do not assume they match.

**7. Cross-check the survival clause.** List what the document says survives termination, then separately identify what obviously needs to survive for the agreement to make commercial sense — confidentiality, IP ownership, accrued payment obligations, the limitation of liability, dispute resolution — and flag anything on the second list missing from the first.

**8. Compare the parties' exit positions side by side, deliberately.** State plainly where one party's route out is faster, less conditional, or less encumbered by notice and cure requirements than the other's, rather than leaving the asymmetry to be inferred from the individual route descriptions.

**9. Where there is a live intent to terminate, work through whether the facts the client has described actually satisfy the trigger as drafted** — for instance, whether the described failure meets the contract's own definition of "Material Breach". Keep this fact-specific application visibly separate from the general mapping in steps 3–4, and state plainly that it rests on the client's account of the facts, not on independent verification.

**10. Grade the findings** using the same three grades used elsewhere in this practice pack — Critical, Material, Minor — applied to the exit position specifically: a one-sided termination right or a missing survival of confidentiality typically grades Critical or Material; an ambiguous cure period grades Material; a drafting inconsistency with little practical weight grades Minor.

## Output

**1. Parameters.** Side analysed, governing law, documents reviewed, posture, whether a live termination scenario was supplied, date.

**2. Executive summary.** The overall exit position — balanced or asymmetric — the single biggest concern, and, if a live scenario was given, a one-line statement of whether the facts appear to satisfy the trigger as drafted.

**3. Exit routes.** A table, one row per route per party: Route | Holder | Trigger | Notice and cure | Conditions | Clause reference.

**4. Consequences of termination.** A table or, where consequences vary too much for a table to stay readable, prose per route: what is returned or destroyed, licence survival, fees, wind-down obligations, clause reference.

**5. Survival cross-check.** What the survival clause names, and what is missing that obviously should be there.

**6. Symmetry assessment.** Prose comparing each party's actual exit position side by side.

**7. Live scenario analysis**, only if a live intent to terminate was supplied. The fact-specific application from Method step 9, explicitly labelled as resting on the client's account of the facts.

**8. Issues and grading.** A table: Ref | Clause | Issue | Effect on the analysed party | Grade | Proposed change | Fallback. Where the posture is an executed contract not under negotiation, replace the last two columns with a single Consequence column.

**9. Points requiring verification.** Every question that turns on the governing law rather than the document's words — the effect of a defective notice, whether the termination clause is exhaustive of the parties' rights, penalty-doctrine exposure on a termination payment, and whether the insolvency definitions track current company law. Name the question; do not answer it here.

## Evidence and document controls

- Cite exact clause numbers, headings or document locations for every document-derived finding where available; headings never substitute for operative language.
- Distinguish document facts, user-supplied facts, assumptions and legal inferences. State when a conclusion depends on governing law, disputed facts, claims classification or material outside the contract.
- Check relevant definitions, order of precedence, incorporated documents, related provisions and survival language before concluding.
- Name missing schedules, annexures, policies, referenced agreements and unreadable material. Never invent clauses, quotations, authorities, defined terms, dates or commercial facts.
- Warn when scans, OCR, truncation, tracked changes or incomplete extraction may affect accuracy.
- Preserve confidentiality. Do not send contract contents to an external service unless the user expressly requests that connected workflow.


## Do not

Do not read the termination clause apart from the cure period, notices clause and survival clause. They function as one system.

Do not assume a termination notice sent by any method is effective. Check it against the notices clause.

Do not assert that a described set of facts satisfies a contractual trigger as an established fact. It is the client's account; say so.

Do not state that accrued rights automatically survive termination as a universal rule. That is a governing-law point, not a document finding.

Do not produce fallback wording or a negotiating position for an executed contract not under negotiation. State the consequence instead.

Do not invent an insolvency or company-law definition not stated in the contract. Where the drafting looks outdated or vague, flag it for verification against current law rather than filling the gap yourself.

Do not review the whole agreement. If that is actually wanted, say so and point to contract-reviewer.
