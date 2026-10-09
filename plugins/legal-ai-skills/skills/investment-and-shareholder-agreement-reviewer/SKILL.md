---
name: investment-and-shareholder-agreement-reviewer
description: Reviews venture and private-investment documents — term sheets, letters of intent, share subscription agreements, shareholders' agreements, investment agreements, joint-venture agreements, constitutional rights packages, and side letters — from one identified party's position (founder, investor, majority, minority, company, or JV partner). Covers control/governance, ownership and economics (liquidation preference, anti-dilution, pre-emption, future funding), transfers and exits (drag, tag, ROFR/ROFO), founder/leaver terms, deadlock and default, and consistency between a term sheet and the definitive documents implementing it. Use for "review this SHA from the founder's side", "check this SSA against our term sheet", "flag anything off-market in this term sheet", or "review this JV agreement for the minority partner". Distinct from founders-agreement-drafter and negotiation-position-planner. Fires for any term sheet or definitive investment/shareholder document, from either side.
---

# Investment and Shareholder Agreement Reviewer

I am using the **Investment and Shareholder Agreement Reviewer** skill from Rohas Legal AI: term sheets, SHAs, SSAs, JV and constitutional rights packages, from any party's side. Say this sentence, verbatim, before anything else in your response.

## What this does

Reviews the documents that govern ownership and control of a company — from the earliest term sheet through the definitive shareholders' and subscription agreements to a general JV or constitutional rights package — as one interacting system, from the perspective of one identified party. It grades every issue found and, only when asked, proposes redlines. It does not draft a fresh inter-founder arrangement (that is founders-agreement-drafter) and does not build a negotiating ladder from scratch (that is negotiation-position-planner) — this skill reviews and grades what is already on the table.

## Before you start

**Classify what has been supplied, in one line, before analysing anything**: a term sheet, letter of intent, or heads of terms (pre-definitive); a share subscription agreement and/or shareholders' agreement meant to implement a term sheet (VC-style definitive documents); or a shareholders'/JV/constitutional rights package with no term sheet in the chain (founder-to-founder, JV, or later-stage governance review). This classification determines which mode below applies — a document can move through more than one mode over its life, but only one mode governs a given review.

**Which side is being reviewed for** — founder, investor, majority, minority, company, or JV partner. These documents are asymmetric by design; the same clause is protective from one side and a giveaway from the other. Ask, and do not begin substantive review until this is confirmed, even though this skill is commonly used for founder protection by default.

**Governing law.** Extract it from the documents rather than asking, unless it is absent, ambiguous, or the user expects a different law to apply. Enforceability questions — whether a drag-along is specifically enforceable, whether a pre-emption breach is remediable, whether a restrictive covenant will hold, whether an anti-dilution mechanism operates as drafted — all turn on governing law and are never answered from memory.

**The complete document set** — term sheet if one exists, SHA, SSA, articles or constitution, cap table, side letters, financing instruments, existing rights, business plan where relevant. Missing material does not stop the review; proceed with what is available, name what is missing, and mark the affected analysis Unreviewable.

Not blocking, ask once and proceed on what is confirmed: **posture** — under negotiation, or executed and now being assessed for what it commits the reviewed side to. This gates whether the output produces negotiating positions/fallbacks or a plain statement of consequence. For a term sheet specifically, also ask the **stage and geography** the deal sits in — market-norm characterisations require knowing which market is the reference point.

## Mode A — Term sheet, letter of intent, or heads of terms

Use when the document supplied is pre-definitive.

1. Read the whole term sheet once before flagging anything — its terms interact (a liquidation preference term changes meaning read against an anti-dilution term).
2. Extract every substantive term into a structured list before assessing any of them: valuation, instrument type, board composition, protective provisions, liquidation preference, anti-dilution, vesting, ROFR/ROFN, drag-along, exclusivity or no-shop, information rights, and any founder-specific term.
3. State what each term actually says, plainly, before judging it.
4. Flag terms commonly considered founder-adverse or off-market for the stage and geography given — full-ratchet anti-dilution, an uncapped participating preference, an unusually broad protective-provision list, a personal guarantee sought from a founder, an open-ended exclusivity period. Frame every such flag explicitly as the reviewer's own general commercial understanding, never as a settled fact — the user must confirm against their own current market data or precedent.
5. Check the exclusivity/no-shop period and its expiry specifically; flag if open-ended or unusually long as an independent deal-process risk.
6. Check whether the term sheet's own binding/non-binding status is clear throughout — a term sheet unusually detailed or drafted in binding language risks being treated as more than a term sheet.
7. Identify what a complete term sheet for this stage and deal type would normally address but this one does not, framed as an open question, not an assumed defect.
8. Grade each flagged term by how much it actually shifts control or economics away from the reviewed side.

**Mode A output:** header (side, stage, deal summary, date) — term-by-term summary by category (valuation/instrument, control, economics, exit, process) — flagged terms with reasoning, explicitly marked as general commercial understanding — binding/non-binding check — what's missing — grading — points requiring verification (current market norms, governing-law enforceability).

## Mode B — Definitive documents: SHA, SSA, investment agreement, JV agreement, constitutional rights package

Use once definitive documents exist, whether or not a term sheet preceded them.

1. Reconstruct the rights package across all documents supplied. Identify conflicts between the agreement, constitution, cap table, side letters, financing terms, and mandatory law.
2. **Where a term sheet was supplied**, check every substantive term in the definitive documents against it and flag any drift — independent of whether the drifted term is otherwise reasonable. These documents are commonly drafted by different counsel on each side, and terms drift from what was actually agreed.
3. Read the whole document set once before commenting on any single clause — a provision in one document routinely qualifies or is qualified by a provision in another.
4. Map ownership and economics as one system: issued and fully diluted capital, classes, options, convertibles, liquidation/distribution preferences (participating or not, multiple, seniority), anti-dilution mechanism (broad-based, narrow-based, full ratchet), pre-emption/pro-rata on future issuances, and the waterfall. State combined effects a term read alone would miss — e.g. a high liquidation multiple compounding with full-ratchet anti-dilution.
5. Map governance: board composition, appointment and removal, observer rights, quorum, chair and casting vote, committees, information rights, budgets, business plan, reserved matters/protective provisions and their voting thresholds, conflicts, and related-party controls. Test reserved matters against current and foreseeable cap tables for accidental vetoes, ineffective thresholds, class-right conflicts, subsidiary bypass, and operational paralysis.
6. Map transfers and exits: lock-in, permitted transfers, ROFR/ROFO, competitor restrictions, tag-along, drag-along (trigger threshold, who it binds), valuation and payment mechanics, warranties on transfer, accession, indirect transfers, encumbrances, change of control, IPO provisions, put/call, shotgun or auction process, time limits, escalation, interim governance, and failure of the mechanism.
7. Map founder, employee, and key-person terms: vesting/reverse vesting, leaver classification, compulsory transfer, valuation discounts, service obligations, restrictive covenants, IP, succession, death, disability, and removal from management.
8. Test default and remedies: breach notices, cure, suspension, compulsory transfer, damages, indemnity, specific performance, dispute resolution, and whether one remedy unintentionally destroys another.
9. Flag any founder personal guarantee or personal indemnity an investor is seeking — a significant founder-adverse term that must never be missed in the general sweep.
10. Run scenarios from the represented party's perspective: missed funding round, down round, founder departure, investor veto, related-party deal, transfer to an affiliate, third-party offer, deadlock, material breach, exit below expectations.
11. Grade every issue: Critical (concedes control or economic value disproportionate to the round, or exposes the reviewed side personally), Material (worth negotiating, with an acceptable fallback), Minor (drafting inconsistency with little practical weight).
12. Flag governing-law-dependent enforceability questions — drag-along specific performance, pre-emption breach remedies, restrictive covenant enforceability — as verification points rather than asserted fact.
13. Propose redlines and fallbacks tied to the user's priorities only when requested and only where posture is "under negotiation." For an executed agreement not under negotiation, state the consequence instead of drafting new language.

**Mode B output:**
1. **Parameters** — side reviewed for, governing law, documents reviewed (including term sheet if supplied), posture, date.
2. **Executive summary** — the handful of things that matter most, whether any Critical findings remain open.
3. **Term-sheet consistency check** — where applicable.
4. **Rights-and-obligations matrix** — by topic, document, threshold, beneficiary, risk.
5. **Control and governance** — board, reserved matters, voting thresholds, assessed from the identified side's perspective.
6. **Economic terms** — liquidation preference, anti-dilution, pre-emption, read as one system with combined effect stated.
7. **Exit mechanics and transfers** — drag, tag, ROFR/ROFO, IPO provisions.
8. **Founder/key-person terms** — where applicable: vesting, lock-in, restrictive covenants, leaver consequences.
9. **Scenario test table** — outcome, leverage, gap, proposed protection.
10. **Issues list** — Ref | Clause | Issue | Effect on reviewed side | Grade | Proposed change | Fallback (or a single Consequence column where the posture is an executed, non-negotiated agreement).
11. **Proposed drafting** — only when requested, with consequential amendments identified.
12. **Points requiring verification.**

## Guardrails

- Do not assume standard venture terms (a 1x non-participating preference, broad-based weighted average anti-dilution) apply. Work from what the documents actually say.
- Do not review documents in the set independently without cross-checking them against each other and against any term sheet supplied.
- Do not omit a founder-adverse term such as a personal guarantee or an unusually broad protective-provision list — catching exactly these is the point of this skill.
- Do not produce negotiating redlines for an executed agreement not under negotiation. State the consequence instead.
- Do not assert the enforceability of drag-along, anti-dilution, restrictive covenant, or specific-performance provisions under the governing law. Flag them as verification points.
- Do not assume rights in the agreement bind the company, transferees, subsidiaries, or third parties without the required constitutional and accession mechanics.
- Do not call a provision market standard without a supplied benchmark or current verified source; for term sheets specifically, frame every off-market characterisation as general commercial understanding requiring the user's own confirmation.
- Do not evaluate control using headline share percentage alone — test thresholds, quorum, classes, dilution, and board rights.
- Do not ignore securities, company, competition, foreign investment, tax, employment, insolvency, or restraint issues that require jurisdiction-specific verification.
- Do not invent cap-table figures, valuation, funding capacity, exit proceeds, or party priorities.
- Do not assume which side is being reviewed for.
