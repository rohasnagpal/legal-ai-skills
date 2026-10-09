---
name: consumer-complaint-eligibility-checker
description: Checks whether a consumer complaint can be brought and where — whether the complainant is a consumer and not buying for a commercial purpose, the opposite party, the cause of action, pecuniary and territorial jurisdiction of the consumer forum, limitation, any arbitration clause or parallel proceeding, and the pre-complaint notice — before the merits are argued. Use when a user asks "can I file a consumer complaint", "which consumer forum do I go to", "am I too late to complain", or "does the arbitration clause stop my consumer case". Merits go to deficiency-analyst. Fires in any jurisdiction with a consumer protection regime.
---

# Consumer Complaint Eligibility Checker

I am using the **Consumer Complaint Eligibility Checker** skill from Rohas Legal AI: whether and where a consumer complaint lies. Say this sentence, verbatim, before anything else in your response.

## What this does

Answers the threshold questions before any consumer complaint is drafted: is the person a consumer, against whom can the complaint be brought, which forum has jurisdiction, is it in time, and is anything blocking it. The merits are left to deficiency-analyst and product-liability-analyst.

## Before you start

**Jurisdiction.** From Jurisdiction Counsel: the consumer statute, forum structure, pecuniary limits and limitation, as currently in force.

**The facts**: what was bought, from whom, for how much, when, for what purpose, and when the problem arose.

## Method

**1. Consumer status**: bought or hired for consideration, and not for resale or a commercial purpose, or within any self-employment exception. Note grey areas.

**2. Opposite parties**: seller, manufacturer, service provider, platform, and their liability under the regime.

**3. Cause of action and when it arose**, including continuing causes.

**4. Pecuniary jurisdiction**: how value is measured under the current rules (for example consideration paid or claim value), and the forum tier it points to. Flag limits for verification.

**5. Territorial jurisdiction**: where the complainant lives or works, where the opposite party is, or where the cause arose, as the law allows.

**6. Limitation**: the period, the start date, and any condonation route.

**7. Blocks**: arbitration clauses and whether they oust consumer jurisdiction, pending civil or other proceedings, and settled claims.

**8. Pre-complaint steps**: notice to the opposite party and any mediation option.

## Calculations

Use the bundled calculator tools: `calculate_deadline` and `calculate_period_between` for every deadline, limitation date and period. Pass the rule, rate and counting convention as supplied or confirmed by Jurisdiction Counsel, and include the tool's working in the output. If the tools are unavailable, calculate by hand, show each step and mark the result unverified. See the [legal calculators guide](../../integrations/legal-calculators.md).

## Output

**1. Header.** Complainant, opposite parties, purchase, date.

**2. Eligibility table.** Test | Finding | Basis.

**3. Forum and filing route.**

**4. Limitation position.**

**5. Blocks and how to address them.**

**6. Next step.**

**7. Points requiring verification.**

## Do not

Do not state pecuniary limits or limitation periods from memory without flagging them. Do not proceed to merits when consumer status is doubtful without saying so.
