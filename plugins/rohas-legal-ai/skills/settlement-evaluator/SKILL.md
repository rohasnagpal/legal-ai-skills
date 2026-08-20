---
name: settlement-evaluator
description: Tests a specific settlement offer against the realistic alternative of continuing to litigate — an expected-value comparison with the arithmetic shown, layered with what pure expected value misses — certainty, the client's actual risk tolerance, and hidden costs in the offer's own conditions. Use this whenever a user has a concrete offer to evaluate — including phrasings like "is this settlement offer better than continuing to litigate", "run the numbers on this offer against our litigation risk", "should we take this deal or fight on", or "what's this offer actually worth once you account for the conditions attached". Distinct from legal-risk-assessor, which compares general decision options — this is narrower and offer-specific — given this offer, on the table now, how does it compare. Fires whenever a concrete settlement offer needs to be weighed against continuing a dispute.
---

# Settlement Evaluator

## What this does

Tests one specific settlement offer against the realistic alternative of continuing to litigate or arbitrate: an expected-value comparison with the arithmetic shown, then layered with what the raw numbers miss — the certainty a settlement buys, the client's actual risk tolerance and priorities, and any hidden cost in the offer's own conditions. It supports the client's decision on this offer; it does not make the decision for them.

## Before you start

**The settlement offer's actual terms.** Amount, payment terms, conditions, any non-monetary terms, and the deadline to accept if one exists. Blocking.

**The realistic litigation alternative.** The likely range of outcomes if the dispute continues, the estimated cost to reach a conclusion, and the estimated time to conclusion. Blocking — where a `legal-risk-assessor`-style analysis already exists, work from it; where it does not, say plainly that this input is needed before a meaningful comparison can be run, rather than inventing a probability of success.

Not blocking, ask once and proceed on what is confirmed: **the client's risk tolerance and priorities** — certainty versus upside, cost sensitivity, time sensitivity, reputational considerations. These determine how the comparison should be weighted, not just what the raw numbers say.

## Method

**1. State the settlement offer precisely** — amount, payment terms, conditions, non-monetary terms such as confidentiality or non-disparagement, and the acceptance deadline if any.

**2. State the realistic litigation alternative as a range** — best case, likely case, worst case — grounded in supplied analysis. Do not invent a probability of success that is not otherwise supported; if the range is not yet established, say that a risk assessment is needed first rather than filling the gap with an assumption.

**3. Calculate the expected value of continuing, where the facts support it** — the probability-weighted outcome range, less the cost of continuing (fees, disbursements, management time and distraction), with a note on time-value or discounting if the client cares about time to resolution. Show the arithmetic in full, and flag every input that rests on an estimate rather than a hard figure.

**4. Compare the settlement offer against this calculated alternative**, stating plainly whether the offer is better or worse in pure expected-value terms, and by how much.

**5. Layer in what pure expected value does not capture.** Settlement removes litigation risk immediately — a client with a strong preference for certainty may rationally accept an offer below expected value, and the expected-value number alone will not show why that is still a reasonable decision. Weigh the client's actual stated priorities, and any reputational or relationship considerations, explicitly rather than leaving them as an unstated afterthought.

**6. Check the offer's conditions and non-monetary terms for hidden costs** — a confidentiality clause, an admission requirement, a non-disparagement term — that affect the offer's true value beyond its headline figure.

**7. Note the acceptance deadline and any consequence of letting it lapse.** Where a procedural cost-consequence rule might apply — for instance, a costs-shifting rule for rejecting an offer that turns out to beat the eventual result — flag this as specific to the governing procedural law, and do not assert that such a rule applies without that being confirmed.

**8. State a conclusion framed as input to the client's decision, not a directive.** The client decides whether to accept; this skill's job is to make sure they are deciding with the full picture in view.

## Output

**1. Header.** Matter, the offer being evaluated, date.

**2. The offer.** Terms stated precisely.

**3. Litigation alternative.** The range of outcomes, cost and time to continue, with every assumption and its source flagged.

**4. Expected value comparison.** The arithmetic shown in full, offer against calculated alternative.

**5. Beyond expected value.** Certainty, the client's actual risk tolerance and priorities, and reputational or relationship factors, layered onto the pure numbers.

**6. Hidden costs.** Any condition in the offer that carries real value or cost beyond the headline figure.

**7. Deadline and consequences of lapse**, with any procedural cost-consequence rule flagged for verification.

**8. Observation.** Framed as input to the client's decision, not an instruction.

## Do not

Do not invent a probability of litigation success that is not otherwise supported by analysis.

Do not present pure expected value as the whole answer. Layer in certainty and the client's actual priorities.

Do not assume a procedural cost-consequence rule — such as costs-shifting for a rejected offer that beats the eventual outcome — applies without flagging it as governing-law-specific.

Do not overlook a non-monetary condition in the offer that carries real value or cost.

Do not make the decision for the client. Frame the conclusion as input, not an instruction.
