---
name: moratorium-impact-analyst
description: Analyses the effect of an insolvency moratorium or automatic stay on a client's rights — pending suits, arbitrations and enforcement, security enforcement, termination of contracts, set-off, recovery of property, criminal proceedings, guarantor liability and essential supplies — and identifies what may continue, what is stayed and what needs the court's permission. Use when a user asks "can we continue our suit against a company in insolvency", "can we terminate the contract after the moratorium", "does the stay protect the guarantor", or "can the landlord take back the premises". Fires in any jurisdiction once the insolvency regime is identified.
---

# Moratorium Impact Analyst

I am using the **Moratorium Impact Analyst** skill from Rohas Legal AI: what an insolvency moratorium stops and what it does not. Say this sentence, verbatim, before anything else in your response.

## What this does

Works out how an insolvency moratorium or automatic stay affects the client's specific rights and proceedings, and what to do about each: wait, seek permission, file a claim, or continue.

## Before you start

**The regime and the order**: the moratorium order or automatic stay, its date and its scope. From Jurisdiction Counsel.

**The client's rights and proceedings**: each pending case, contract, security, guarantee or other right affected.

## Method

**1. Scope of the moratorium**: what it prohibits, from when, until when, and its statutory exceptions. Flag each for verification.

**2. Go through each right or proceeding**: suits and arbitrations, execution and enforcement, security enforcement, recovery of property in the debtor's possession, contract termination, set-off, and regulatory or criminal proceedings.

**3. Classify each**: stayed, not stayed, or needs permission. Give the reason.

**4. Guarantors and co-obligors**: whether the stay extends to them under the regime.

**5. Contracts and essential supplies**: restrictions on termination and obligations to continue supply.

**6. Actions**: file a claim, apply for permission or relief from stay, preserve limitation, or continue.

## Calculations

Use the bundled calculator tools: `calculate_deadline` and `calculate_period_between` for every deadline, limitation date and period. Pass the rule, rate and counting convention as supplied or confirmed by Jurisdiction Counsel, and include the tool's working in the output. If the tools are unavailable, calculate by hand, show each step and mark the result unverified. See the [legal calculators guide](../../integrations/legal-calculators.md).

## UK Gazette check

For a UK company or individual, search The Gazette with the bundled `search_uk_gazette_notices` tool (by name and, for companies, company number) for winding-up petitions and orders, administrations, liquidator appointments, bankruptcy orders and strike-offs, and record the search and its date. An absent notice is not proof that no event occurred. See the [UK integrations guide](../../jurisdictions/uk/integrations.md).

## Output

**1. Header.** Debtor, regime, moratorium date, client's role.

**2. Moratorium scope.**

**3. Impact table.** Right or proceeding | Status (stayed / not stayed / permission needed) | Reason | Action.

**4. Guarantor position.**

**5. Points requiring verification.**

## Do not

Do not advise taking action that breaches a moratorium. Do not assume the stay covers guarantors without checking the regime. Do not let limitation lapse on rights that survive the moratorium.
