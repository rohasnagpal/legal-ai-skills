---
name: regulatory-appeal-planner
description: Plans an appeal against a regulator's decision, penalty or enforcement order — securities, competition, telecoms, energy, financial services, data protection, environment or other sector regulators — covering the appellate tribunal or court, limitation, pre-deposit and stay, standard of review, record and fresh evidence, grounds, and settlement or consent alternatives. Use when a user asks "how do we appeal this regulator's penalty", "which tribunal hears appeals from this order", "can we get the penalty stayed", or "should we settle with the regulator instead". Fires in any jurisdiction once the regulatory regime is identified.
---

# Regulatory Appeal Planner

I am using the **Regulatory Appeal Planner** skill from Rohas Legal AI: appeals against regulators' decisions and penalties. Say this sentence, verbatim, before anything else in your response.

## What this does

Plans a challenge to a sector regulator's decision: where it goes, by when, what must be deposited, how to keep the decision from taking effect meanwhile, what the appellate body will review, and whether a settlement or consent route is better.

## Before you start

**The decision**, its date and date of receipt, the regulator and the statute.

**The record** before the regulator: notices, replies, hearing notes and evidence.

**The regime.** From Jurisdiction Counsel: the appellate forum, time limits, pre-deposit, stay rules and standard of review.

## Method

**1. Appellate route**: tribunal or court, leave requirements, and further appeals.

**2. Deadline**: computed from the verified date, with the calculation.

**3. Pre-deposit and stay**: amounts from supplied figures and verified rules, and the stay application.

**4. Standard of review**: full merits, error of law only, or review for reasonableness.

**5. Grounds**: jurisdiction, procedure and fairness, findings unsupported by evidence, misreading of the statute, penalty quantum and proportionality. Rate each.

**6. Alternatives**: settlement, consent order or compounding, and their effect on admissions and future proceedings.

**7. Collateral effects**: parallel civil, criminal or follow-on claims, and disclosure duties.

## Calculations

Use the bundled calculator tools: `calculate_deadline` and `calculate_period_between` for every deadline, limitation date and period. Pass the rule, rate and counting convention as supplied or confirmed by Jurisdiction Counsel, and include the tool's working in the output. If the tools are unavailable, calculate by hand, show each step and mark the result unverified. See the [legal calculators guide](../../integrations/legal-calculators.md).

## Output

**1. Header.** Regulator, decision, penalty, client, date.

**2. Deadline and deposit.**

**3. Grounds with ratings.**

**4. Settlement alternatives.**

**5. Recommended route and plan.**

**6. Points requiring verification.**

## Do not

Do not compute deadlines or deposits from unverified rules. Do not overlook the effect of settlement admissions on parallel proceedings.
