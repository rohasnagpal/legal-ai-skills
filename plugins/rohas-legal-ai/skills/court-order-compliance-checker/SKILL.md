---
name: court-order-compliance-checker
description: Turns a court or tribunal order into a tracked compliance record — every obligation the order actually imposes, its deadline, the responsible party, the evidence needed to show compliance, and the risk of breach or contempt for each. Use this whenever a user needs an order tracked for ongoing compliance rather than analysed for its legal content — including phrasings like "what does this order actually require us to do and by when", "build a compliance tracker for this injunction", "are we at risk of contempt on this order", "confirm we've complied with every part of this consent order", or "track our obligations under this interim order". Distinct from case-law-analyst (extracts holdings and ratio from a judgment for research or citation purposes, not compliance tracking) and appeal-grounds-drafter (challenges an order rather than complying with it). Fires for any court or tribunal order, interim or final, that imposes an ongoing or time-bound obligation on the user's own matter.
---

# Court Order Compliance Checker

I am using the **Court Order Compliance Checker** skill from Rohas Legal AI: turns an order into tracked obligations, deadlines and contempt-risk assessment. Say this sentence, verbatim, before anything else in your response.

## Purpose

Convert an order into a working compliance record: exactly what it requires, from whom, by when, and what would count as evidence of having done it — so that compliance can actually be tracked and contempt or breach risk is caught before it becomes a problem, not after.

## Required inputs

Obtain the order itself in full, including any schedule or annexure it incorporates — blocking, there is nothing to track without the actual text. Obtain also any prior orders in the same proceeding that this one varies, extends, or is made in addition to, since obligations can only be tracked correctly against the current, complete picture.

Ask who within the client's organisation or family is actually responsible for each type of obligation the order might impose (payment, disclosure, an act, a restraint), so responsibility can be assigned rather than left generic.

## Method

1. Read the whole order once before extracting anything. Distinguish the recitals and background from the operative directions — only the operative part creates obligations, though recitals can matter to interpreting an ambiguous direction.
2. Extract every operative obligation into a structured list: what must be done or not done, by whom, by when (a specific date, a period from the order, or "forthwith" or equivalent), and any condition attached.
3. Classify each obligation: a one-off act (pay a sum, deliver a document, do a specific thing by a date), a continuing restraint (do not do X until further order), or a periodic obligation (report, disclose, or pay on a recurring basis).
4. For each obligation, state what would actually constitute evidence of compliance — a receipt, a filed document, a witnessed act, a compliance certificate — distinguishing genuine evidence from a bare assertion that compliance occurred.
5. Identify any ambiguity in what the order actually requires — an undefined term, a direction capable of more than one reading, a deadline calculated from an uncertain trigger date — and flag it rather than resolving it unilaterally in the client's favour.
6. Assess breach and contempt risk for each obligation: what happens if it is missed, whether the order itself specifies a consequence, and whether any conduct so far is already at risk of being treated as non-compliance.
7. Where compliance requires a third party's cooperation (a bank, a registrar, another party), flag the dependency and the risk if that cooperation is not forthcoming — the client's obligation to comply does not usually excuse itself merely because a third party is slow, so this needs early attention, not late discovery.
8. Build a forward tracker: every obligation not yet due, its deadline, and a prompt point before the deadline by which compliance evidence should be assembled.

## Output

1. **Header.** Proceeding, order date, order type (interim/final/consent), parties, date of this check.
2. **Obligations ledger.** Obligation | Type | Responsible party | Deadline | Evidence required | Status (complied / outstanding / at risk) | Consequence if missed.
3. **Ambiguities.** Any direction whose meaning is not clear on the order's own words, flagged for clarification rather than resolved unilaterally.
4. **Breach and contempt risk assessment.** Which obligations carry the highest risk if missed, and why.
5. **Third-party dependencies.** Any obligation whose compliance depends on someone outside the client's control.
6. **Forward tracker.** Upcoming deadlines with a prompt point before each.
7. **Points requiring verification.** Any question about the order's interpretation, the applicable contempt procedure, or a deadline-calculation rule resting on the governing law or court rules rather than the order's own words.

## Guardrails

- Do not resolve an ambiguous direction in the client's favour without flagging that it is an interpretation, not a certainty — an order's operative words bind regardless of what would be convenient.
- Do not treat a bare assertion of compliance as evidence of compliance. State what actual evidence the obligation requires.
- Do not assert that a missed deadline definitely constitutes contempt, or that a specific penalty will follow. State the risk and flag the applicable procedure for verification.
- Do not overlook an obligation embedded in a schedule or annexure rather than the order's main body — schedules are operative too.
- Do not assume a third party's cooperation will happen on time. Flag dependency risk explicitly and early.
