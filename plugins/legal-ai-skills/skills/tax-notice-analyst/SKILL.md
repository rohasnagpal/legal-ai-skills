---
name: tax-notice-analyst
description: Reads a tax notice, show-cause notice, demand, scrutiny or audit query, or assessment order — income tax, GST, VAT, customs or other taxes — and sets out its legal basis, what is alleged, the period, the amounts of tax, interest and penalty, the response deadline, validity and limitation issues, the documents needed, and the response options. Use when a user says "we got a GST show-cause notice", "what does this income tax notice mean", "how much are we exposed to under this demand", or "is this notice time-barred". Stops before drafting the reply. Fires for any tax notice in any jurisdiction.
---

# Tax Notice Analyst

I am using the **Tax Notice Analyst** skill from Rohas Legal AI: understanding a tax notice, the exposure and the options. Say this sentence, verbatim, before anything else in your response.

## What this does

Takes a notice or order from a tax authority and turns it into a clear picture: what the authority is alleging and under which power, the period and amounts, the deadline, whether the notice is valid and in time, what documents will answer it, and what the taxpayer can do. It does not draft the reply; India replies go to tax-assessment-reply-drafter.

## Before you start

**The notice**, complete, with its date, the date of service, the issuing officer, and any annexures.

**Jurisdiction and the tax.** From Jurisdiction Counsel: the statute, the rules and the procedure as in force for the period.

**The taxpayer's records** for the period, if available.

## Method

**1. Identify the notice type and its legal power**: information request, scrutiny, show cause, demand, assessment or penalty. Note the provision cited and whether it matches the action taken.

**2. Allegations**: list each issue the authority raises, with the facts and figures it relies on.

**3. Exposure**: tax, interest and penalty for each issue, computed from the notice and the taxpayer's figures. Show the arithmetic and mark any rate used as verified or unverified.

**4. Deadline**: the response date, and how to seek more time.

**5. Validity and limitation**: the time limit for the action, jurisdiction of the officer, required approvals, service, and natural-justice requirements. Flag each for verification.

**6. Merits by issue**: whether the issue is one of law, fact or computation, and the taxpayer's likely position.

**7. Documents and reconciliations** needed to respond.

**8. Options**: comply and pay, respond on merits, settlement or amnesty schemes where available, or challenge validity. Note pre-deposit requirements for any appeal.

## Calculations

Use the bundled calculator tools: `calculate_deadline` and `calculate_period_between` for every deadline, limitation date and period and `calculate_interest` for every interest figure. Pass the rule, rate and counting convention as supplied or confirmed by Jurisdiction Counsel, and include the tool's working in the output. If the tools are unavailable, calculate by hand, show each step and mark the result unverified. See the [legal calculators guide](../../integrations/legal-calculators.md).

## Output

**1. Header.** Taxpayer, tax, period, notice type and date, authority.

**2. Deadline.**

**3. Issues and exposure table.** Issue | Basis | Amount (tax, interest, penalty) | Merits.

**4. Validity and limitation points.**

**5. Documents needed.**

**6. Options and recommendation.**

**7. Points requiring verification.**

## Do not

Do not miss or soften the response deadline. Do not compute exposure from rates stated from memory without flagging them. Do not advise ignoring a notice because it may be invalid.
