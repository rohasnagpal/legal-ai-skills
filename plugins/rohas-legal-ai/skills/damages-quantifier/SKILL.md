---
name: damages-quantifier
description: Builds a general civil or commercial damages claim head by head, using only the figures actually supplied — contractual damages (expectation and reliance loss), lost profits, wasted expenditure, interest, and mitigation adjustments — showing the arithmetic and flagging any head claimed without a supporting figure. Use for "quantify our lost profits from this breach", "work out the damages including interest and mitigation credit", "build the claim for wasted expenditure on this failed project", or "what does this damages claim total once we deduct what was mitigated". Distinct from compensation-quantifier, which is scoped to consumer claims — this is the general commercial/civil counterpart. A quantification tool, not a merits assessment; it does not decide whether liability is established.
---

# Damages Quantifier

## Purpose

Build the quantum of a civil or commercial damages claim head by head, showing the arithmetic for every figure, using only what the user actually supplies — never inventing a rate, a profit margin, or a mitigation figure to fill a gap.

## Required inputs

Obtain the basis of the claim (breach of contract, tort, or other cause of action — as instructed, not independently established by this skill), the heads of loss claimed, the figures supporting each head (invoices, financial statements, projections, expenditure records), the date loss accrued or the breach occurred, any interest basis claimed, and any mitigation steps taken or losses avoided.

Ask which measure of damages is being claimed — expectation (the position if the contract had been performed), reliance (wasted expenditure in reliance on the contract), or another recognised measure — since the two are not interchangeable and mixing them without saying so double-counts or under-claims.

Treat the actual supporting figures as blocking for any head claimed. Do not quantify a head of loss for which no figure has been supplied — list it as claimed but unquantified instead.

## Method

1. Classify the measure of damages being claimed for each head — expectation, reliance, or another recognised measure — in one line before building the numbers. Flag if the user has not specified this and proceed on the measure that best fits the facts given, stating the assumption.
2. Build each head of loss separately: state the formula, the inputs, the source of each input, and the resulting figure. Never present a total without showing the components that produce it.
3. For lost profits specifically, distinguish gross revenue lost from net profit lost — the recoverable measure is ordinarily net profit, after deducting costs that would have been incurred to earn that revenue. Do not present a lost-revenue figure as though it were lost profit without confirming which is claimed.
4. For wasted expenditure, list each item of expenditure claimed, its date, its source document, and whether it has any residual value that should be credited against the claim.
5. Apply interest only using the basis actually supplied — a contractual interest rate, a statutory rate, or a rate the user specifies. Do not assume a specific statutory interest rate or default commercial rate from memory; flag the applicable rate as a verification point where not supplied.
6. Apply mitigation: identify any loss the claimant avoided or could reasonably have avoided, and deduct it from the relevant head, showing the deduction and its source. Do not assume mitigation occurred or was required without a fact basis; flag mitigation as an open question where the facts are silent.
7. Check for double recovery across heads — the same loss claimed twice under different labels (for example, lost profits and wasted expenditure covering the same period without an offset) — and flag any overlap found.
8. Total the claim, reconciling every head against its own workings, and state which heads are fully evidenced, partially evidenced, and unquantified.

## Output

1. **Header.** Claimant, basis of claim as instructed, measure of damages, date loss accrued, date of this quantification.
2. **Quantum schedule.** Head | Measure | Formula | Inputs | Source | Figure.
3. **Interest calculation.** Basis, rate, period, and resulting figure, or flagged as unresolved.
4. **Mitigation adjustment.** What was deducted, why, and its source.
5. **Double-recovery check.** Any overlap identified between heads.
6. **Total.** Reconciled against the schedule, with fully evidenced, partially evidenced, and unquantified heads distinguished.
7. **Points requiring verification.** Applicable interest rate or statute, any remoteness or causation question resting on the governing law, and any head claimed without a supporting figure.

## Guardrails

- Do not quantify a head of loss without a supplied figure. List it as claimed but unquantified, with what is needed to quantify it.
- Do not invent an interest rate, profit margin, discount rate, or valuation figure. Use only what is supplied, and flag the gap where it is not.
- Do not assume the expectation measure applies without checking against reliance or another measure the facts might better fit.
- Do not present gross revenue as lost profit without confirming the costs deduction.
- Do not assume mitigation occurred, was adequate, or was required without a fact basis — flag it as an open question.
- Do not decide whether liability is established. This skill quantifies the claim as instructed; it does not test whether the underlying cause of action succeeds.
