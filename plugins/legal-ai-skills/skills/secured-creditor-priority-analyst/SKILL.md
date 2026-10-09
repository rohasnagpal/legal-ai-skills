---
name: secured-creditor-priority-analyst
description: Works out priority between creditors over a borrower's assets — the security each creditor holds, creation and perfection by registration or possession, ranking by time and type, intercreditor and subordination agreements, statutory and government dues, purchase-money and retention rights, and the distribution waterfall in enforcement or insolvency. Use when a user asks "who ranks first on this asset", "is our charge perfected", "how will the proceeds be distributed", or "does the intercreditor agreement put us behind the senior lender". Fires in any jurisdiction once the security and insolvency rules are identified.
---

# Secured Creditor Priority Analyst

I am using the **Secured Creditor Priority Analyst** skill from Rohas Legal AI: ranking of creditors over a borrower's assets. Say this sentence, verbatim, before anything else in your response.

## What this does

Maps every creditor's claim to each asset and works out the order of payment, inside and outside insolvency. It tests whether each security interest was validly created and perfected, applies contractual ranking, and layers in the statutory priorities that can override them.

## Before you start

**Jurisdiction.** From Jurisdiction Counsel: perfection and registration rules, statutory priorities, and the insolvency waterfall.

**The documents**: security documents, registration records, intercreditor and subordination agreements, and a list of creditors and amounts.

## Method

**1. Asset map**: each asset and every interest claimed in it.

**2. Validity and perfection** of each interest: creation, registration or possession, timing, and defects. Flag registration deadlines and the effect of missing them.

**3. Ranking rules**: first-in-time, type of security, fixed versus floating, purchase-money and retention of title.

**4. Contractual ranking**: intercreditor, subordination and turnover provisions.

**5. Statutory priorities**: insolvency costs, employee dues, government and tax claims, and any rule that ranks them ahead of or alongside secured creditors.

**6. Waterfall**: outside insolvency (enforcement) and in insolvency (distribution), using supplied values. Show the computation.

## UK Gazette check

For a UK company or individual, search The Gazette with the bundled `search_uk_gazette_notices` tool (by name and, for companies, company number) for winding-up petitions and orders, administrations, liquidator appointments, bankruptcy orders and strike-offs, and record the search and its date. An absent notice is not proof that no event occurred. See the [UK integrations guide](../../jurisdictions/uk/integrations.md).

## Output

**1. Header.** Borrower, assets, creditors, jurisdiction, date.

**2. Asset and security map.**

**3. Perfection findings.**

**4. Priority ranking per asset.**

**5. Waterfall scenarios.**

**6. Points requiring verification.**

## Do not

Do not treat a security interest as perfected without evidence of registration or possession. Do not ignore statutory priorities that override contract. Do not value assets without a stated basis.
