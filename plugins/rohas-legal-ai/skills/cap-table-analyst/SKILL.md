---
name: cap-table-analyst
description: Works through dilution and ownership on a cap table using only the share counts, valuations, and round terms actually supplied — showing the arithmetic for every calculation and flagging option-pool timing, conversion order, or preference terms that were not specified rather than assuming a standard treatment. Use this whenever a user needs a cap table calculation worked through — including phrasings like "what does this round do to our ownership", "model the dilution from this SAFE conversion", "work out the post-money cap table", "how much does the option pool top-up dilute existing holders", or "run the liquidation waterfall on these preference terms". A quantification tool, not a fairness assessment — it does not judge whether the round terms are good; pair it with term-sheet-reviewer or investment-agreement-reviewer for that. Fires for any priced round, conversion, or waterfall calculation on a startup cap table.
---

# Cap Table Analyst

## What this does

Works through the arithmetic of a cap table: ownership before and after a financing round, dilution to each existing holder, option pool effects, conversion of SAFEs or convertible notes, and — where asked — a liquidation waterfall. Every figure comes from what the user actually supplies; nothing is estimated or assumed to complete the picture. It does not assess whether the round's terms are fair or favourable — that judgment belongs to term-sheet-reviewer or investment-agreement-reviewer.

## Before you start

**The starting cap table.** Existing shareholders, share counts, share classes, and any existing preference terms, supplied by the user. Blocking — there is no dilution calculation without a starting point.

**The new round terms.** Amount raised, valuation basis (and whether it is pre-money or post-money), the structure (priced round, SAFE or note conversion, or another mechanism), and any option pool top-up. Blocking.

Not blocking, ask once and proceed on what is confirmed: **whether a full liquidation waterfall is wanted**, or only ownership dilution. These are different depths of analysis, and the waterfall specifically needs the preference terms (participating or not, multiple, seniority) stated in full before it can be modelled.

## Method

**1. Establish the starting cap table precisely from what is supplied.** Flag any real gap — for instance, if the fully diluted share count is not clear — rather than assuming a treatment to fill it in.

**2. Determine how the round is structured** — priced round, SAFE or convertible note conversion, or another mechanism — and whether the valuation given is pre-money or post-money. Work from the terms as stated; do not assume a standard structure.

**3. Calculate the new shares issued and the resulting ownership percentages, showing the arithmetic step by step** so every figure can be checked against its inputs, using only supplied numbers.

**4. Handle the option pool precisely.** A pre-money option pool top-up dilutes existing shareholders differently than a post-money one — this is a common and consequential point of confusion. Work through whichever the terms actually specify, and if it is not clear, flag the ambiguity rather than picking one, since it materially changes every downstream number.

**5. Calculate the dilution to each existing shareholder** — before and after percentage, and the actual change in share count, not just the percentage shift.

**6. Where multiple prior instruments (SAFEs, notes, earlier rounds) convert simultaneously, work through the conversion mechanics in the order the actual terms specify.** Do not assume a standard order; if the terms do not specify one and the order affects the outcome, flag that explicitly.

**7. If a liquidation waterfall is wanted, model the preference stack only as given** — participating or non-participating, the multiple, and seniority between classes. Do not assume a standard 1x non-participating structure; these vary significantly deal to deal and the assumption would misstate the result.

**8. Flag anti-dilution provisions only if the user has specified which mechanism applies to a prior round** — broad-based weighted average, narrow-based, or full ratchet. Do not assume a standard mechanism; each produces a materially different adjustment.

## Output

**1. Header.** Company, transaction, date.

**2. Starting cap table.** As supplied, in table form.

**3. Round mechanics.** Structure, amount, valuation basis, and option pool treatment exactly as specified.

**4. Post-round cap table.** Resulting ownership, share counts, and percentages, with the arithmetic shown so it can be audited.

**5. Dilution summary.** Before and after percentage for each existing shareholder.

**6. Liquidation waterfall**, only if requested, modelled strictly on the preference terms actually given.

**7. Gaps and assumptions.** Anything not specified that had to be flagged rather than assumed — option pool timing, conversion order, anti-dilution mechanism.

## Do not

Do not invent a share count, valuation, or round term that was not supplied.

Do not assume standard option pool timing (pre- or post-money) without it being specified. Flag the ambiguity — it materially changes the answer.

Do not assume a standard liquidation preference structure without confirmation.

Do not assess whether the round's terms are fair or favourable. That is term-sheet-reviewer's or investment-agreement-reviewer's job; this skill only calculates.

Do not round figures for presentation in a way that makes the calculation impossible to audit.
