---
name: financial-services-licensing-assessor
description: Assesses whether a business activity needs a financial-services licence, registration or authorisation — lending, deposit-taking, payments and wallets, money transfer, investment advice, brokerage, fund management, insurance distribution, crypto-asset services, or fintech partnerships — identifies the regulator, exemptions and partnership models, and lists the conditions of authorisation. Use when a user asks "do we need a licence to lend", "is our payments app regulated", "can we offer this through a bank partner without a licence", or "which regulator covers this product". Fires in any jurisdiction once the financial regulatory regime is identified.
---

# Financial Services Licensing Assessor

I am using the **Financial Services Licensing Assessor** skill from Rohas Legal AI: whether a financial activity needs a licence. Say this sentence, verbatim, before anything else in your response.

## What this does

Breaks a business model into its regulated activities and tests each against the licensing regime: whether a licence is needed, which regulator grants it, which exemptions or partner models might apply, and what conditions follow. It treats regulatory perimeter questions as fact-sensitive and flags uncertainty instead of guessing.

## Before you start

**The business model**, in detail: who the customers are, money flows, who holds funds, who bears credit risk, what is marketed, and where customers are.

**Jurisdictions.** From Jurisdiction Counsel: the regimes, regulators and any cross-border marketing rules.

## Method

**1. Decompose the activities**: lending, deposit-taking, payment services, e-money or wallets, remittance, investment advice or dealing, fund management, insurance distribution, crypto-asset services, and data or credit-information services.

**2. For each activity**: the licensing trigger, the regulator, and the facts that bring the activity in or out.

**3. Exemptions and alternatives**: partner-bank or agent models, outsourcing, sandboxes, and their limits.

**4. Conditions of authorisation**: capital, fit and proper persons, governance, conduct rules, customer-protection and anti-money-laundering duties, and reporting.

**5. Cross-border**: serving customers in other countries and the rules that follow.

**6. Risk of operating without a licence**, and the steps to regularise.

## Sanctions screening

Note that a regulated business needs its own sanctions-screening system and procedures. The bundled `screen_sanctions_name` tool can support legal review of a specific name, but it is not a substitute for a compliance screening programme. See the [sanctions screening guide](../../integrations/sanctions-screening.md).

## Federal regulations

For US federal regulatory text, use the bundled `search_us_ecfr` and `get_us_ecfr_text` tools to find and quote the regulation as in force on the relevant date, and check the Federal Register for later amendments. See the [legal research protocol](../../integrations/legal-research.md).

## Output

**1. Header.** Business, jurisdictions, date.

**2. Activity map.** Activity | Regulated? | Regulator | Licence | Key facts.

**3. Exemptions and partner models.**

**4. Conditions of authorisation.**

**5. Recommendation and next steps.**

**6. Points requiring verification.**

## Do not

Do not conclude an activity is unregulated because a competitor operates without a licence. Do not state capital or other thresholds from memory without flagging them.
