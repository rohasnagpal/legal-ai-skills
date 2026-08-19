---
name: settlement-strategy-planner
description: Builds a settlement negotiation strategy before any offer is on the table — BATNA and WATNA for both sides, an opening-to-walkaway negotiation range, litigation economics (cost and time to a result versus settling now), non-monetary terms worth trading, negotiating authority, and the sequencing of concessions. Use this whenever a user wants to prepare for settlement negotiations generally, not evaluate one specific offer — including phrasings like "what's our BATNA here", "build our settlement negotiating range", "what should we open with and where's our walkaway", "map out how we should sequence concessions in this negotiation", or "prepare our settlement strategy before talks start". Distinct from settlement-evaluator, which tests one specific offer already on the table against continuing to litigate — this builds the strategy before an offer exists. Fires ahead of any settlement negotiation, mediation, or conciliation, ahead of or independent of any concrete offer.
---

# Settlement Strategy Planner

## Purpose

Prepare a party to enter settlement negotiations with a clear-eyed view of their own best and worst alternatives to a negotiated agreement, a defensible negotiating range, and a plan for how concessions will be sequenced — before any specific offer exists to react to.

## Required inputs

Obtain the dispute's current position (claims, defences, evidence strength, procedural stage), the client's litigation alternative if talks fail (cost and time to a result, and the range of realistic outcomes), the client's actual priorities (recovery, certainty, time, relationship, confidentiality, precedent), any non-monetary terms that could be part of a deal, and who holds negotiating authority and its limits.

Ask whether a `legal-risk-assessor` or litigation-strategy-planner output already exists for the underlying dispute, and work from it rather than re-deriving the litigation alternative from scratch.

## Method

1. Build the client's BATNA (best alternative to a negotiated agreement) — the most favourable realistic outcome if negotiations fail and the matter proceeds, net of the cost and time to get there.
2. Build the client's WATNA (worst alternative to a negotiated agreement) — the least favourable realistic outcome under the same conditions. Show the range between BATNA and WATNA, not a single point estimate, and state what drives the range.
3. Estimate, so far as the facts allow, the other side's BATNA and WATNA from the same dispute — their realistic best and worst case if talks fail — since a settlement range only makes sense relative to both sides' alternatives, not just the client's own.
4. Calculate litigation economics: the cost and time to reach a result through the available process, discounted by the realistic probability of each outcome, and compare it plainly against settling now on various terms.
5. Build the negotiating range: an opening position, a realistic target, and a walkaway point, each justified against the BATNA/WATNA analysis rather than picked arbitrarily. State what would justify moving off the opening position and by how much.
6. Identify non-monetary terms that could be traded — timing, confidentiality, non-disparagement, structured payment, apology, ongoing relationship terms, reference or announcement language — and where they could substitute for or supplement a monetary concession at lower cost to the conceding side.
7. Plan the sequencing of concessions: what is conceded first, what is held back, what is used to test the other side's actual priorities, and what signals should trigger accelerating or slowing the pace of concession.
8. Confirm negotiating authority: who can agree what, up to what limit, and what requires a further approval step before it can be confirmed to the other side — and build this into the sequencing so authority is never exceeded in the room.

## Output

1. **Header.** Matter, client's stated priorities, process (litigation, mediation, conciliation, direct negotiation), date.
2. **BATNA/WATNA analysis.** Both parties' realistic best and worst alternatives, with the reasoning shown.
3. **Litigation economics.** Cost and time to a result, discounted by outcome probability, compared against settling now.
4. **Negotiating range.** Opening position, target, and walkaway point, each justified.
5. **Non-monetary trade options.** What could substitute for or supplement money, and at what value to each side.
6. **Concession sequencing plan.** What moves first, what is held back, and what triggers a change of pace.
7. **Authority map.** Who can agree what, and what needs further approval.
8. **Points requiring verification.** Anything the litigation-economics estimate depends on that has not yet been independently assessed (limitation, forum, evidence strength).

## Guardrails

- Do not set the negotiating range without grounding it in the BATNA/WATNA analysis. An arbitrary opening figure is not a strategy.
- Do not present a single-point litigation outcome estimate. Range it, and show what drives the spread.
- Do not assume the other side's BATNA/WATNA with more confidence than the facts support — flag it as an estimate, not a known fact.
- Do not build a sequencing plan that risks exceeding confirmed negotiating authority. Authority limits are blocking, not aspirational.
- Do not treat this as a substitute for settlement-evaluator once an actual offer is on the table — hand off to that skill at that point rather than continuing to reason in the abstract.
