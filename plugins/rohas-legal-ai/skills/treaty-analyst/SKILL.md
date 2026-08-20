---
name: treaty-analyst
description: Analyses treaty entitlement and relief on given facts — treaty residency, the applicable income article, beneficial ownership and limitation-of-benefits conditions, and the relief potentially available — flagging every substantive term for verification against the actual treaty text rather than assuming a generic model convention applies. Use this whenever a user needs the double tax treaty position on a cross-border payment or transaction — including phrasings like "are we entitled to treaty relief on this royalty payment", "what's the withholding position under this DTAA", "check our treaty residency here", "does this payment qualify for the reduced treaty rate", or "walk through the limitation of benefits test on these facts". Jurisdiction-neutral — never assumes which two countries' treaty applies or what it says. Fires for any cross-border payment or transaction where treaty relief is in question.
---

# Treaty Analyst

## What this does

Analyses whether a taxpayer is entitled to relief under an applicable double tax treaty on given facts: treaty residency, the income article that applies to the type of income involved, beneficial ownership and any limitation-of-benefits or principal purpose test the treaty carries, and the relief potentially available. Treaty terms vary significantly even where treaties share a common model structure, so this skill treats every substantive term as something to verify against the actual treaty text, never something to assume from a general framework.

## Before you start

**The facts.** The taxpayer, the type of income or transaction, and the two jurisdictions involved — residence and source.

**Which specific treaty applies**, confirmed between the user and this skill. Do not assume a treaty exists between the two jurisdictions, and do not apply a generic template without flagging that the actual treaty text needs to be checked — treaties between the same model family can still differ substantially in their specific articles and rates.

Not blocking, ask once and proceed on what is available: **whether the specific treaty text is available this session**, as a research source or supplied by the user. If it is not, work from the general structure of a typical double tax treaty — a residency article, income-specific articles, a limitation-of-benefits or anti-abuse provision, a mutual agreement procedure — explicitly flagged as a general framework requiring verification, since specific rates and conditions cannot be assumed from a typical structure.

## Method

**1. Identify the two jurisdictions and confirm which treaty governs.** Do not proceed as if a treaty's terms are known without either sourcing the actual text this session or having it supplied by the user.

**2. Determine treaty residency.** Work out which jurisdiction's residency test the taxpayer satisfies. If dual residency is possible on the facts, work through the tie-breaker structure — permanent home, centre of vital interests, habitual abode, nationality, mutual agreement — as a general framework, flagged for verification against the actual treaty's specific tie-breaker article, since not every treaty applies these in the same order or with the same content.

**3. Identify the income article that would typically apply to the type of income involved** — business profits, dividends, interest, royalties, capital gains, or personal services — stating the article structure that would ordinarily be relevant, flagged for verification against the actual treaty, since not every treaty includes every article or defines its terms identically.

**4. Check treaty entitlement conditions beyond residency.** A beneficial ownership requirement commonly attaches to passive income articles, and many treaties now carry a limitation-of-benefits clause or a principal purpose test. Flag these as requiring verification against the specific treaty text and its current interpretation — anti-abuse provisions have been the subject of significant recent change across many treaty networks and should never be assumed static.

**5. State the relief potentially available** — exemption, a reduced withholding rate, or a credit mechanism — without asserting a specific rate from memory. Flag the applicable article's actual rate as requiring verification against the treaty text.

**6. Note the domestic procedural requirements for claiming treaty relief** — such as a tax residency certificate or a specific form — as jurisdiction-specific and requiring verification, since these sit outside the treaty text itself and vary independently of it.

**7. Flag interaction with domestic general anti-avoidance rules, where relevant on the facts, as a verification point rather than a resolved conclusion.**

## Output

**1. Header.** Taxpayer, income type, the two jurisdictions involved, the treaty being analysed, date.

**2. Residency analysis.** Treaty residency determined, with the tie-breaker analysis if dual residency is possible, flagged for verification against the actual treaty article.

**3. Applicable article.** The income article structure that would typically apply, flagged for verification against the actual treaty text.

**4. Entitlement conditions.** Beneficial ownership and limitation-of-benefits or principal purpose test considerations, flagged for verification.

**5. Relief available.** The exemption, reduced-rate, or credit mechanism described, with the specific rate flagged for verification.

**6. Procedural requirements.** Domestic requirements for claiming relief, flagged for jurisdiction-specific verification.

**7. Points requiring verification.** The actual treaty text and its specific articles, current anti-abuse interpretation, and domestic procedural requirements.

## Do not

Do not assume a treaty's specific terms from a generic model structure. Flag every substantive term for verification against the actual treaty text.

Do not state a specific withholding rate or relief mechanism from memory.

Do not assume the taxpayer satisfies beneficial ownership or passes a limitation-of-benefits or principal purpose test without analysing the facts against the framework and flagging the specific test for verification.

Do not assume a treaty exists between the two jurisdictions without confirming it.

Do not omit the tie-breaker analysis where the facts suggest potential dual residency.
