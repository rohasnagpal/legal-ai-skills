---
name: input-tax-credit-dispute-analyst
description: Analyses an Indian GST input tax credit dispute — denial, reversal or blocking of credit, mismatches with supplier returns, supplier non-payment or cancellation, ineligible or blocked credits, time limits for claiming credit, and fake-invoice allegations — and builds the taxpayer's position, reconciliation and response. Use when a user says "our ITC has been denied", "the department wants us to reverse input tax credit", "our supplier didn't file returns", or "is this credit blocked". India-specific. Fires for GST input tax credit disputes in India.
---

# Input Tax Credit Dispute Analyst

Read and apply the [India Counsel instructions](../../agents/india-counsel.md) before substantive analysis or drafting.

## Jurisdiction gate

This skill applies Indian law and procedure only. Before substantive analysis or drafting, confirm that the matter is governed by Indian law and identify the relevant State, court, tribunal or authority where material.

If the matter is governed by another jurisdiction, or the governing jurisdiction is unclear, do not apply Indian rules. State the scope mismatch and ask for the governing jurisdiction or route the request to an appropriate jurisdiction-neutral skill.

I am using the **Input Tax Credit Dispute Analyst** skill from Rohas Legal AI: GST input tax credit disputes (India). Say this sentence, verbatim, before anything else in your response.

## What this does

Works through a dispute about input tax credit under Indian GST: why the credit is being denied or reversed, whether the conditions for credit were met, how the taxpayer's records reconcile with supplier and auto-generated statements, and what the taxpayer can argue and must produce. It quantifies the exposure and sets up the reply or appeal.

## Before you start

**The notice or order**, the period, and the credit amounts in dispute.

**The records**: purchase register, invoices, payment proof, goods receipt and transport records, and the relevant GST return and statement data.

**Law as in force for the period.** Credit conditions and time limits have been amended; India Counsel confirms the version.

## Method

**1. Classify the ground of denial**: conditions for credit not met, mismatch with supplier filings, supplier non-payment or cancelled registration, blocked credit category, time limit, or fake or non-existent supply.

**2. Conditions for credit**: for each, the evidence that it was met: tax invoice, receipt of goods or services, tax paid to the government, return filed, payment to the supplier within the allowed time. Flag each statutory condition for verification.

**3. Reconciliation**: match purchase records with supplier-reported data; list differences by supplier and invoice with their explanation.

**4. Supplier default**: the taxpayer's position where the supplier did not deposit tax, and the evidence of a genuine transaction.

**5. Blocked credits and time limits**: whether the credit falls in a blocked category and whether it was claimed in time.

**6. Exposure**: credit, interest and penalty, computed from the records with the arithmetic shown.

**7. Response plan**: documents, reconciliation statement, legal points, and whether to pay under protest. Hand the drafting to tax-assessment-reply-drafter.

## Calculations

Use the bundled calculator tools: `calculate_interest` for every interest figure. Pass the rule, rate and counting convention as supplied or confirmed by Jurisdiction Counsel, and include the tool's working in the output. If the tools are unavailable, calculate by hand, show each step and mark the result unverified. See the [legal calculators guide](../../integrations/legal-calculators.md).

## Output

**1. Header.** Taxpayer, GSTIN, period, notice, amounts.

**2. Ground of denial and legal basis.**

**3. Conditions-for-credit table.** Condition | Evidence | Met?

**4. Reconciliation summary.**

**5. Exposure computation.**

**6. Response plan.**

**7. Points requiring verification.**

## Do not

Do not state a condition, time limit or rate from memory without flagging it. Do not assume supplier default defeats the claim without testing the evidence of a genuine supply. Do not advise fabricating supporting documents.
