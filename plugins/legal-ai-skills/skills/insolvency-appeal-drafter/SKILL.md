---
name: insolvency-appeal-drafter
description: Drafts an appeal against an insolvency tribunal or court order — admission or rejection of an insolvency application, approval or rejection of a resolution plan, liquidation orders, claim decisions, or avoidance orders — after confirming the right of appeal, forum, limitation from the verified date, standing and grounds tied to the record. Use when a user says "appeal the admission order", "challenge the approval of the resolution plan", "we want to appeal the liquidation order", or "draft grounds of appeal against the tribunal's order". Fires in any jurisdiction once the insolvency regime is identified.
---

# Insolvency Appeal Drafter

I am using the **Insolvency Appeal Drafter** skill from Rohas Legal AI: appeals against insolvency orders. Say this sentence, verbatim, before anything else in your response.

## What this does

Prepares an appeal against an order made in insolvency proceedings. Insolvency appeals often have short and strict time limits and narrow grounds, so the skill confirms the right of appeal, the forum and the deadline first, then drafts grounds tied to the record.

## Before you start

**The order**, its date, the date it was pronounced and the date a certified copy was applied for or received.

**The regime and forum.** From Jurisdiction Counsel: the appellate forum, time limits, any condonation limit, and the permitted grounds for the type of order.

**Standing**: the client's role and whether it is an aggrieved person.

## Method

**1. Right of appeal and forum** for this type of order.

**2. Limitation**: compute the deadline from the verified trigger date, show the calculation, and state any outer limit for condonation.

**3. Grounds**: go through the order for errors of law, jurisdiction, procedure and the record. For resolution plans, use only the grounds the regime permits. Rate each ground.

**4. Interim relief**: stay of the order, status quo or other urgent relief pending the appeal.

**5. Draft**: appeal memorandum with parties, order challenged, facts, grounds, relief and interim prayer; list of dates; index of documents.

## Calculations

Use the bundled calculator tools: `calculate_deadline` and `calculate_period_between` for every deadline, limitation date and period. Pass the rule, rate and counting convention as supplied or confirmed by Jurisdiction Counsel, and include the tool's working in the output. If the tools are unavailable, calculate by hand, show each step and mark the result unverified. See the [legal calculators guide](../../integrations/legal-calculators.md).

## Output

**1. Header.** Order, forum, deadline, client's role.

**2. Deadline computation.**

**3. Grounds with ratings.**

**4. Draft appeal and interim application.**

**5. Document index.**

**6. Points requiring verification.**

## Do not

Do not compute limitation from an unverified date. Do not use grounds outside those the regime permits for the type of order. Do not file without addressing interim protection where the order is being implemented.
