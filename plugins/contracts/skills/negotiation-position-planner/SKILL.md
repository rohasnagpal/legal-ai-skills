---
name: negotiation-position-planner
description: Builds an opening position, fallback, minimum acceptable position, walk-away line and concession logic for one or more open contract-negotiation points. Use for prompts such as "what should our opening position be on the indemnity cap", "where can we give ground", "build a negotiation ladder for exclusivity", or "plan the open points and trades". For one issue, produces an issue-specific ladder; for several, also covers priority, sequencing, tradeable points, package proposals and dependencies. Distinct from redline-proposer, which drafts replacement clause text, and contract-reviewer, which grades agreement risk.
---

# Negotiation Position Planner

## What this does

Takes one or more open negotiation points and builds a usable ladder for each: opening, fallback, minimum acceptable position and walk-away line, tied to the client's priorities and alternative to the deal. For several issues it also builds the trade and sequencing plan. It does not draft clause wording unless the user expressly asks for both strategy and wording; replacement text belongs primarily in redline-proposer.

## Before you start

**The client's actual priorities, not just their positions.** For several issues, identify which are must-win, genuinely negotiable or available to trade. For one issue, identify the underlying interest and how strongly it is held. If the user has not ranked multiple points, ask; do not substitute your own priorities.

**The client's alternative if no deal is reached — their walk-away option.** Whether that is another counterparty, doing without, or no real alternative at all. This is what a walk-away line is actually anchored to, and it cannot be invented. If it has not been supplied, say plainly that the walk-away lines in the plan are placeholders pending that input, rather than picking a number to fill the gap.

**The list of open points itself.** These can come directly from the user, or from another skill's output — a contract-reviewer issues list, a clause-comparator change history. Either is fine; this skill's job starts once the list exists, not with generating a fresh review of a contract from scratch.

Not blocking, ask once and proceed on what is known or admit the gap if not: **what is known about the counterparty** — their timeline pressure, their alternatives, and any signals from the negotiation so far. This is often genuinely incomplete; work with the uncertainty rather than inventing counterparty psychology to fill it.

**External benchmarks.** If the user asks for public examples, market evidence, comparable positions or model-form benchmarking, read [references/public-contract-sources.md](references/public-contract-sources.md) in full and follow its source, attribution and non-inference controls. Do not load that reference for a strategy based only on the user's open points and priorities.

## Method

**1. Classify what has been supplied as open points** — specific unresolved clauses in an existing draft, term-sheet-level open items, or a mixed list — and note which document, if any, each point attaches to.

**2. For several points, sort each into must-win, negotiable, or give-away**, based on the client's stated priorities. For one point, state its priority and underlying interest without inventing a portfolio ranking.

**3. For each point, separate the client's stated position from the underlying interest behind it.** A position that looks rigid on its face often has room once you know why the client wants it — a different form of wording, or a different mechanism entirely, can sometimes satisfy the same interest at lower cost to the negotiation as a whole.

**4. Draft four positions for each point.** Opening — the strongest credible ask. Fallback — a realistic concession that preserves the underlying interest. Minimum acceptable — the lowest position the client can accept while still doing the deal on this point. Walk-away — the point beyond which the overall deal is worse than the client's stated alternative. Do not collapse minimum acceptable and walk-away into the same concept unless the client expressly treats them as identical.

**5. Identify trades when there are several points.** State which points can be conceded to win movement on a must-win point elsewhere, which points should not be traded away, dependencies between concessions, and any package proposal that makes the exchange explicit. For one issue, state the concession sequence within its ladder instead of inventing cross-issue trades.

**6. Sequence the points.** Which should be raised early, to signal good faith or clear low-cost items out of the way, and which should be held back as leverage until the shape of the rest of the deal is clearer. State the reasoning, not just the order.

**7. Where a walk-away line cannot be set without more information** — the alternative was not supplied, or the value of the deal to the client is itself uncertain — mark that point as open rather than filling it with an assumed number.

**8. State what is known or assumed about the counterparty's position on each point**, labelled explicitly as an assumption where it is one, and say what would change the plan if the assumption turns out to be wrong.

**9. Check the plan as a whole, not point by point.** A plan where every opening position is set at the most aggressive extreme with no coherent trade logic is a wish list, not a strategy. Check that the fallback positions across different points are collectively affordable — the same concession should not be planned to be spent twice against two different asks.

**10. Note process considerations that shape tactics** — a deadline, whether this is a single session or several rounds, and anything from the negotiation so far that bears on timing.

## Output

**1. Parameters.** Client and counterparty identified, the deal, the alternative to a deal as supplied, source of the open points list, date.

**2. Priority map.** Each point sorted into must-win, negotiable or give-away, with the underlying interest stated in one line.

**3. Position table.** Ref | Issue | Opening | Fallback | Minimum acceptable | Walk-away | Concession or trade notes.

**4. Trade map.** For multiple issues only: "give X to get Y" pairings, package proposals, dependencies and matters not to trade away.

**5. Sequencing and tactics.** What to raise early, what to hold back, and why.

**6. Assumptions about the counterparty.** Clearly labelled as assumptions, with what would change the plan if an assumption is wrong.

**7. Open points requiring more client input.** Missing alternative-to-a-deal information, unranked priorities, and any point where a walk-away line could not be set as a result.

## Evidence and document controls

- Cite exact clause numbers, headings or document locations for every document-derived finding where available; headings never substitute for operative language.
- Distinguish document facts, user-supplied facts, assumptions and legal inferences. State when a conclusion depends on governing law, disputed facts, claims classification or material outside the contract.
- Check relevant definitions, order of precedence, incorporated documents, related provisions and survival language before concluding.
- Name missing schedules, annexures, policies, referenced agreements and unreadable material. Never invent clauses, quotations, authorities, defined terms, dates or commercial facts.
- Warn when scans, OCR, truncation, tracked changes or incomplete extraction may affect accuracy.
- Preserve confidentiality. Do not send contract contents to an external service unless the user expressly requests that connected workflow.


## Do not

Do not invent the client's priorities or their alternative to a deal. Ask. A plan built on assumed priorities is worse than one that admits the gap.

Do not present an assumption about the counterparty's position as fact. Label it, and say what would change if it is wrong.

Do not draft clause wording. That is redline-proposer's or contract-drafter's job; this skill's output is positions and strategy, not text.

If the user asks for both strategy and replacement wording, produce the strategy first and clearly separate any redline-proposer wording; do not blur drafting instructions, negotiating positions and actual clause text.

Do not set every opening position at the most aggressive extreme without regard to credibility. An opening the other side dismisses outright wastes the first move.

Do not treat legal risk severity and negotiating priority as the same axis. A point graded Critical for legal exposure is not automatically a must-win in the negotiation, and the reverse also happens.

Do not build a plan that spends the same concession against two different trades.

Do not fill a missing walk-away line with an arbitrary number. Flag it as missing.
