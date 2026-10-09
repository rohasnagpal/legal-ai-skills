---
name: insolvency-options-assessor
description: Assesses the options for a creditor, debtor company, guarantor or individual facing insolvency — eligibility and thresholds for formal insolvency, alternatives such as negotiated settlement, security enforcement, recovery suits, schemes or pre-packs, and the effect of each on recovery, control, cost and time — and recommends a route. Use when a user asks "should we file insolvency against this debtor", "can our company use a pre-pack", "insolvency or recovery suit", or "what are our options as a creditor of a failing company". Fires for insolvency choices in any jurisdiction once the insolvency regime is identified.
---

# Insolvency Options Assessor

I am using the **Insolvency Options Assessor** skill from Rohas Legal AI: choosing between insolvency and its alternatives. Say this sentence, verbatim, before anything else in your response.

## What this does

Compares formal insolvency with the alternatives for the client's role and recommends a route. It checks eligibility and thresholds, and weighs likely recovery, control, cost, time and the effect on relationships and other creditors.

## Before you start

**The client's role. Blocking.** Financial creditor, operational or trade creditor, secured creditor, the debtor itself, a guarantor, or an individual debtor.

**The regime.** From Jurisdiction Counsel: the insolvency statute, the forum, thresholds and procedures available.

**The debt**: documents, amount, default date, security, any dispute raised by the debtor, and what is known of the debtor's assets and other creditors.

## Method

**1. Eligibility**: whether the client can initiate each procedure; the default and threshold tests; any pre-existing dispute that bars initiation; limitation. Flag thresholds for verification.

**2. List the options**: negotiated settlement or restructuring, security enforcement, recovery suit or summary procedure, arbitration, formal insolvency (reorganisation or liquidation), schemes and pre-packs, and individual or guarantor insolvency.

**3. Compare**: likely recovery and priority, time to outcome, cost, control of the process, effect of moratorium on other remedies, and leverage for settlement.

**4. Debtor-side options**, where the client is the debtor: restructuring tools, voluntary procedures, and directors' duties near insolvency.

**5. Recommend a route** with the first step and its deadline.

## UK Gazette check

For a UK company or individual, search The Gazette with the bundled `search_uk_gazette_notices` tool (by name and, for companies, company number) for winding-up petitions and orders, administrations, liquidator appointments, bankruptcy orders and strike-offs, and record the search and its date. An absent notice is not proof that no event occurred. See the [UK integrations guide](../../jurisdictions/uk/integrations.md).

## Output

**1. Header.** Client role, debtor, debt, regime, date.

**2. Eligibility findings.**

**3. Options comparison table.**

**4. Recommendation and first step.**

**5. Points requiring verification.**

## Do not

Do not recommend initiation where a genuine pre-existing dispute may bar it without saying so. Do not state thresholds from memory without flagging them. Do not use insolvency as pressure where the law treats that as an abuse.
