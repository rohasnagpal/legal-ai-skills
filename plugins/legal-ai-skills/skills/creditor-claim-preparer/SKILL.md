---
name: creditor-claim-preparer
description: Prepares a creditor's proof of claim in an insolvency, liquidation or restructuring — class of creditor, principal, interest and charges computed to the cut-off date, security and its value, guarantees, set-off, supporting documents, and the prescribed form and deadline — and checks it against the verification standard. Use when a user says "file our claim in the insolvency", "prepare our proof of debt", "how much can we claim against the company in liquidation", or "what documents does the resolution professional need". Fires in any jurisdiction once the insolvency regime is identified.
---

# Creditor Claim Preparer

I am using the **Creditor Claim Preparer** skill from Rohas Legal AI: proofs of claim in insolvency and liquidation. Say this sentence, verbatim, before anything else in your response.

## What this does

Prepares the creditor's claim so that it is admitted in full: the right class, an accurate amount computed to the correct date, security and guarantees disclosed properly, and a complete document set, filed in the right form before the deadline.

## Before you start

**The procedure and its dates**: the insolvency commencement date, the claim deadline, the form prescribed, and the office-holder's details. From the public announcement and Jurisdiction Counsel.

**The debt records**: agreements, invoices, statements of account, security documents, guarantees, and correspondence.

## Method

**1. Class**: financial, operational or trade, secured, employee, government or other, under the governing regime. The class drives voting and distribution.

**2. Amount**: principal, interest and charges computed to the cut-off date, with the arithmetic shown. Exclude amounts the regime does not allow.

**3. Security**: the asset, the document, registration or perfection, and the value. Decide with the client whether to rely on security or relinquish it, where the regime gives that choice.

**4. Guarantees and co-obligors**, and parallel recovery against them.

**5. Set-off and mutual dealings.**

**6. Documents**: list every supporting document, with gaps.

**7. Form and filing**: the prescribed form, the deadline, late-filing consequences, and how to update the claim later.

**8. Self-verification**: test the claim against the office-holder's likely queries.

## Calculations

Use the bundled calculator tools: `calculate_deadline` and `calculate_period_between` for every deadline, limitation date and period and `calculate_interest` for every interest figure. Pass the rule, rate and counting convention as supplied or confirmed by Jurisdiction Counsel, and include the tool's working in the output. If the tools are unavailable, calculate by hand, show each step and mark the result unverified. See the [legal calculators guide](../../integrations/legal-calculators.md).

## UK Gazette check

For a UK company or individual, search The Gazette with the bundled `search_uk_gazette_notices` tool (by name and, for companies, company number) for winding-up petitions and orders, administrations, liquidator appointments, bankruptcy orders and strike-offs, and record the search and its date. An absent notice is not proof that no event occurred. See the [UK integrations guide](../../jurisdictions/uk/integrations.md).

## Output

**1. Header.** Creditor, debtor, procedure, cut-off date, deadline.

**2. Claim summary.** Class, amount, security.

**3. Computation schedule.**

**4. Document index.**

**5. Draft claim in the prescribed form.**

**6. Points requiring verification.**

## Do not

Do not inflate the claim or include amounts without documents. Do not compute interest past the cut-off date. Do not miss the claim deadline; say how to file late if it has passed.
