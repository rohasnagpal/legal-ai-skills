---
name: gst-compliance-analyst
description: Analyses a supply for its GST treatment — classification as goods or services, place and time of supply, applicable rate, reverse charge, input tax credit eligibility, and registration and compliance obligations — flagging current rate notifications and thresholds for verification rather than asserting them from memory. Use this whenever a user needs the GST position on a transaction — including phrasings like "what's the GST treatment of this supply", "does reverse charge apply here", "can we claim input tax credit on this", "do we need to register for GST because of this transaction", or "check the place of supply on this cross-state contract". India-specific. Fires for any supply of goods or services, or a composite or mixed supply, under India's GST regime.
---

# GST Compliance Analyst

I am using the **GST Compliance Analyst** skill from Rohas Legal AI: GST treatment and compliance obligations (India). Say this sentence, verbatim, before anything else in your response.

## What this does

Analyses a supply of goods or services for its GST treatment: classification, place and time of supply, applicable rate and reverse charge position, input tax credit eligibility, and any registration or compliance obligation the transaction triggers. GST rates, HSN and SAC classifications, reverse charge coverage, and registration thresholds are all set by notifications that change periodically and can vary by state or category, so this skill treats their current content as a verification point rather than something to assert from memory.

## Before you start

**The supply facts.** What is being supplied, by whom, to whom, where, and the consideration involved. This is blocking; the analysis cannot proceed without it.

Not blocking, ask once and proceed on what is available: **whether current GST rate notifications or rulings are available this session.** If they are, cite only what is retrieved or supplied, specifically. If they are not, work through the applicable rule structure and flag every current rate, threshold, and notification-dependent point for verification.

## Method

**1. Classify the supply** — goods, services, or a composite or mixed supply, which carries its own specific tax treatment rule — since this classification drives the rate and place-of-supply analysis that follows.

**2. Determine the place of supply**, working through the specific rule structure for the transaction type (which differs for goods versus services, and for intra-state, inter-state, and export or import transactions). Where the facts are genuinely borderline, say so rather than resolving the question with false confidence, and flag it for verification.

**3. Determine the time of supply** — the trigger, whether invoice, payment, or completion of performance, that fixes when the liability to pay tax arises.

**4. State the applicable rate and HSN or SAC classification only if sourced this session or supplied by the user.** Otherwise flag it as requiring verification against the current rate notification — misclassification here is a common and material risk, not a detail to guess at.

**5. Check reverse charge applicability** — whether the recipient rather than the supplier is liable to pay tax under the specific category of transaction — and flag current reverse-charge notification coverage as a verification point rather than asserting it from memory.

**6. Assess input tax credit eligibility for the recipient**, noting any specific block that might apply without asserting the current blocked-credit list exhaustively from memory. Flag it for verification.

**7. Check whether the facts trigger a registration obligation**, flagging the current threshold as needing verification — thresholds differ by state and category and have changed over time.

**8. Identify the specific compliance obligations the transaction triggers** — invoicing requirements, e-way bill, e-invoicing — flagging current applicability thresholds for verification rather than assuming them.

## Output

**1. Header.** Supply summarised, parties, date.

**2. Classification.** Goods, services, or composite/mixed, with the reasoning stated.

**3. Place and time of supply.** Determined, with any genuinely borderline point flagged rather than resolved with false confidence.

**4. Rate and classification.** Stated if sourced this session or supplied; otherwise flagged for verification.

**5. Reverse charge.** Applicability assessed, with current notification coverage flagged for verification.

**6. Input tax credit.** Eligibility assessed, with blocked-credit risk flagged.

**7. Registration and compliance obligations.** Triggered obligations listed, with current thresholds flagged for verification.

**8. Points requiring verification.** Current rate notifications, reverse charge notification coverage, registration thresholds, and the blocked-credit list.

## Do not

Do not assert a specific current GST rate or HSN/SAC code from memory. Flag it for verification.

Do not assume a standard registration threshold without flagging it as needing current verification — thresholds vary by state and category.

Do not assert the current reverse charge or blocked-credit list exhaustively from memory.

Do not resolve a genuinely borderline place-of-supply question with false confidence. Flag it.
