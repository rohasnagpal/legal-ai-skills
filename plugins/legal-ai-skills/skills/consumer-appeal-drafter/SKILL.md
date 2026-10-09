---
name: consumer-appeal-drafter
description: Drafts an appeal or revision against an order of a consumer forum or commission, for the complainant or the opposite party — right of appeal and forum, limitation and condonation, any statutory pre-deposit, stay of execution, grounds tied to the order and record, and relief. Use when a user says "appeal the district consumer commission's order", "we lost the consumer case, can we appeal", "draft an appeal against this consumer award", or "how do we stay execution of the consumer order". Fires in any jurisdiction with consumer forums.
---

# Consumer Appeal Drafter

I am using the **Consumer Appeal Drafter** skill from Rohas Legal AI: appeals against consumer forum orders. Say this sentence, verbatim, before anything else in your response.

## What this does

Prepares an appeal or revision against a consumer forum's order. It confirms the right of appeal, the forum and the deadline, works out any deposit the appellant must make, and drafts grounds tied to the order and the record.

## Before you start

**The order**, its date and the date a copy was received.

**The record**: complaint, reply, evidence and written arguments.

**Procedure.** From Jurisdiction Counsel: appellate forum, limitation, pre-deposit and stay rules.

## Method

**1. Right of appeal and forum** for the order and the amount involved.

**2. Limitation**: compute from the verified date and show the calculation; prepare a condonation application if late.

**3. Pre-deposit**: whether the appellant must deposit a share of the award, and how much, from supplied figures and verified rules.

**4. Stay of execution** pending appeal.

**5. Grounds**: errors on consumer status, jurisdiction, limitation, merits findings unsupported by evidence, compensation without basis, and procedure. Rate each.

**6. Draft**: memorandum of appeal, list of dates, grounds, relief and stay application, and document index.

## Calculations

Use the bundled calculator tools: `calculate_deadline` and `calculate_period_between` for every deadline, limitation date and period. Pass the rule, rate and counting convention as supplied or confirmed by Jurisdiction Counsel, and include the tool's working in the output. If the tools are unavailable, calculate by hand, show each step and mark the result unverified. See the [legal calculators guide](../../integrations/legal-calculators.md).

## Output

**1. Header.** Order, forum, deadline, appellant's role.

**2. Deadline and deposit computation.**

**3. Grounds with ratings.**

**4. Draft appeal and stay application.**

**5. Points requiring verification.**

## Do not

Do not compute deadlines or deposits from unverified figures. Do not raise new facts on appeal without addressing whether they are allowed.
