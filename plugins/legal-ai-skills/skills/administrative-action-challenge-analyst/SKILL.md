---
name: administrative-action-challenge-analyst
description: Analyses whether a government, regulator or public body's decision, order, notice or failure to act can be challenged — source and limits of the power, jurisdiction, procedural fairness and the right to be heard, reasons, irrelevant considerations, bad faith, irrationality, proportionality, legitimate expectation, delay, alternative remedies, standing and the remedies a court can grant — and recommends the route. Use when a user asks "can we challenge this government order", "was this licence cancellation lawful", "the authority didn't hear us before deciding", or "what are the judicial review grounds here". Fires in any jurisdiction once the public law framework is identified.
---

# Administrative Action Challenge Analyst

I am using the **Administrative Action Challenge Analyst** skill from Rohas Legal AI: grounds and routes to challenge public decisions. Say this sentence, verbatim, before anything else in your response.

## What this does

Tests a public body's decision against the grounds on which courts review administrative action, and works out the best route: internal review, a statutory appeal, judicial review or a writ, or a fresh representation. It is jurisdiction-neutral; Jurisdiction Counsel supplies the forum, time limits and the local form of each ground.

## Before you start

**The decision**: the document, its date, the decision-maker, the power relied on, and the date the client received it.

**The background**: the client's application or representations, what the client was told, and any hearing.

**Jurisdiction.** From Jurisdiction Counsel: the court with review or writ jurisdiction, time limits, and alternative remedies.

## Method

**1. Source and limits of power**: the statute or rule relied on, conditions for its exercise, and whether the decision-maker had authority.

**2. Grounds**: test each:
- illegality: acting without or beyond power, misdirection in law, irrelevant considerations, improper purpose;
- procedural unfairness: no notice, no hearing, bias, no reasons where required;
- irrationality or unreasonableness, and proportionality where the law uses it;
- legitimate expectation and consistency;
- rights-based grounds, for constitutional-rights-analyst.

**3. Alternative remedies**: appeal, revision or review under the statute; whether the court will require them to be used first.

**4. Standing, delay and timing.**

**5. Remedies available**: quashing, mandatory or prohibiting orders, declarations, interim relief, and damages where available.

**6. Recommend a route** with the first step and its deadline.

## Output

**1. Header.** Decision, decision-maker, date, client.

**2. Grounds table.** Ground | Facts | Strength.

**3. Alternative remedies and their effect.**

**4. Recommended route, forum and deadline.**

**5. Interim relief needed.**

**6. Points requiring verification.**

## Do not

Do not argue the merits as if the court will substitute its own decision. Do not ignore an effective alternative remedy. Do not state time limits from memory without flagging them.
