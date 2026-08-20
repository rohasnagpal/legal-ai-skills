---
name: compensation-quantifier
description: Builds a compensation or damages claim head by head, using only the figures actually supplied, showing the arithmetic and flagging any head that is claimed without a supporting figure. Use this whenever a user wants a claim quantified rather than assessed on the merits — including phrasings like "work out what we can claim for this defective product", "quantify the compensation head by head", "add up the loss including refund, replacement cost and mental agony", "build the damages claim from these receipts", or "what does this claim total if we include litigation costs". This is a quantification tool, not a merits assessment — it does not decide whether the underlying claim succeeds; pair it with deficiency-analyst or product-liability-analyst for that. Fires for any compensation or damages claim, consumer or otherwise, wherever loss needs to be built up head by head from supplied figures.
---

# Compensation Quantifier

I am using the **Compensation Quantifier** skill from Rohas Legal AI: builds a compensation claim head by head from supplied figures. Say this sentence, verbatim, before anything else in your response.

## What this does

Builds a compensation claim as a set of individual heads — cost of the defective good or service, consequential loss, mental agony or harassment, litigation costs, interest, and any other head the claimant wants included — using only the figures actually supplied, with the arithmetic shown for anything calculated rather than given as a flat sum. It does not assess whether the claim succeeds; it quantifies what the claim totals if each head is allowed.

## Before you start

**The facts and the loss actually suffered**, and which heads of claim the user wants included. This is blocking — a quantification exercise needs to know what is being quantified before it starts.

**Actual figures for each head.** Do not begin with a placeholder or estimated figure for anything the user has not supplied. Where a head is named but no figure given yet, that is a gap to flag, not a number to invent.

Not blocking, ask once and proceed on what is confirmed: **the forum or law the claim will be brought under.** Certain heads — punitive or exemplary damages, litigation cost recovery, a specific interest rate or basis — are often forum- or law-dependent in whether they are even recoverable. Extract or ask; treat recoverability of any such head as a verification point rather than an assumption.

## Method

**1. List every head of claim the user wants included before assigning a single figure.** Building the list and the figures in the same pass tends to let heads get added ad hoc without the same scrutiny as the ones identified up front.

**2. For each head, use only the figure actually supplied.** Where a calculation is needed — interest on a principal sum over a period, for instance — show the arithmetic step by step, using only the rate and basis the user has given; do not assume a rate.

**3. Separate heads that are precisely quantifiable — a receipt, an invoice, a documented cost — from heads that are inherently a matter of judgment, such as mental agony or harassment.** For the latter, do not manufacture a specific figure to make the total look complete. State that the amount is discretionary and ask the user what figure, if any, they want claimed for it.

**4. Check for double-counting across heads.** Claiming both the cost of replacement and the difference in value for the same defect, for example, can overlap. Flag a potential overlap rather than letting the total absorb it silently.

**5. Total the claim, showing every head's individual figure alongside the sum**, so the arithmetic is fully auditable rather than presented as a single number to be trusted.

**6. Flag any head whose recoverability itself is uncertain or forum-dependent** — punitive damages, litigation costs, a specific interest basis — as a verification point. Do not assume a head is recoverable because the user asked for it to be included.

**7. Stop at quantification.** Do not assess whether the underlying deficiency, defect, or unfair trade practice is actually established — that is a different skill's job. This one quantifies on the assumption the claim succeeds.

## Output

**1. Header.** Claimant, respondent, matter, forum (if known), date.

**2. Heads of claim.** A table: Head | Basis or description | Figure supplied | Calculation shown (where applicable) | Status — Quantified, Discretionary (needs a figure from the claimant), or Recoverability uncertain.

**3. Total claimed.** The sum, broken down by head so it can be checked line by line.

**4. Discretionary heads.** A short list of heads where the amount is a matter of judgment, each flagged for the claimant or counsel to propose a specific figure.

**5. Potential overlaps.** Any heads that might double-count the same underlying loss.

**6. Points requiring verification.** Recoverability of specific heads, and the interest rate or basis used, under the applicable law or forum.

## Do not

Do not invent a figure the user has not supplied.

Do not assess whether the underlying claim succeeds on the merits. Quantify only.

Do not manufacture a specific number for an inherently discretionary head. Flag it as needing the claimant's own figure.

Do not assume a head of claim is recoverable — punitive damages, litigation costs, a specific interest basis — without flagging it as forum- or law-dependent.

Do not let the total include a double-counted head without flagging the overlap first.
