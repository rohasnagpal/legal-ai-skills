---
name: family-court-procedure-checker
description: Checks the procedure for a family case — which court has jurisdiction, where to file, filing requirements and documents, service, mandatory counselling or mediation, interim applications, hearings, evidence, decree, appeal and enforcement — against the rules confirmed by jurisdiction counsel, and builds the procedural timeline. Use when a user asks "which family court do I file in", "what documents do I need to file for divorce", "is mediation compulsory", "how long will the case take", or "how do I enforce a maintenance order". Fires for any family case in any jurisdiction once the governing law and court are identified.
---

# Family Court Procedure Checker

I am using the **Family Court Procedure Checker** skill from Rohas Legal AI: forum, filing, steps and timeline for a family case. Say this sentence, verbatim, before anything else in your response.

## What this does

Sets out how a family case runs in the court that has jurisdiction: territorial jurisdiction, filing requirements, service, mandatory counselling or mediation, interim relief, evidence, hearings, the final order or decree, appeal, and enforcement of orders. It builds a procedural timeline and a filing checklist.

## Before you start

**Governing law and court. Blocking.** From Jurisdiction Counsel. Family procedure varies by country, by State and by the court's own rules.

**The case.** The relief sought, where each spouse lives and where they last lived together, where the marriage took place, children's residence, and any existing proceedings anywhere.

## Method

**1. Identify the courts with territorial jurisdiction** and the basis for each. Note any choice the client has and what turns on it.

**2. Check for parallel proceedings** in another court or country, and their effect.

**3. Filing checklist**: petition or application, affidavits, financial disclosure, marriage evidence, identity and address proof, fees and copies. Mark each as a requirement to verify against current rules.

**4. Service**: how the other party must be served, including service abroad.

**5. Mandatory steps**: counselling, conciliation or mediation, waiting periods, and attendance requirements.

**6. Interim applications** available while the case runs: maintenance, custody, protection, restraint on disposing of assets.

**7. Hearing and evidence stages**, and what each requires from the client.

**8. Final order, appeal and enforcement**: time limits to appeal and how orders for money, custody and property are enforced.

**9. Timeline.** Stage-by-stage, with dates only where trigger dates are known, and the remainder marked as estimates.

## Calculations

Use the bundled calculator tools: `calculate_deadline` and `calculate_period_between` for every deadline, limitation date and period. Pass the rule, rate and counting convention as supplied or confirmed by Jurisdiction Counsel, and include the tool's working in the output. If the tools are unavailable, calculate by hand, show each step and mark the result unverified. See the [legal calculators guide](../../integrations/legal-calculators.md).

## Output

**1. Header.** Relief, governing law, court, date.

**2. Jurisdiction options.**

**3. Filing checklist.**

**4. Procedural steps and timeline.**

**5. Interim applications.**

**6. Appeal and enforcement.**

**7. Points requiring verification.** Current court rules, fees and time limits.

## Do not

Do not give a filing deadline or appeal period from memory without flagging it for verification. Do not predict how long a case will take as a fact. Do not ignore proceedings already pending elsewhere.
