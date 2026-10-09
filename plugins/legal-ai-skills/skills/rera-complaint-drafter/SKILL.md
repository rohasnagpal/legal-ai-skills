---
name: rera-complaint-drafter
description: Prepares an allottee's complaint to the State Real Estate Regulatory Authority or adjudicating officer for delayed possession, refund with interest, compensation, defects or other promoter breaches — choosing the relief and forum, computing amounts from supplied payment records, organising evidence and drafting the complaint in the State's prescribed form. Use when a homebuyer says "my builder is late on possession", "I want a refund with interest", "file a RERA complaint", or "claim delay interest". India-specific. Fires for any allottee claim against a promoter of a RERA-registrable project in India.
---

# RERA Complaint Drafter

Read and apply the [India Counsel instructions](../../agents/india-counsel.md) before substantive analysis or drafting.

## Jurisdiction gate

This skill applies Indian law and procedure only. Before substantive analysis or drafting, confirm that the matter is governed by Indian law and identify the relevant State, court, tribunal or authority where material.

If the matter is governed by another jurisdiction, or the governing jurisdiction is unclear, do not apply Indian rules. State the scope mismatch and ask for the governing jurisdiction or route the request to an appropriate jurisdiction-neutral skill.

I am using the **RERA Complaint Drafter** skill from Rohas Legal AI: allottee complaints to the State RERA authority. Say this sentence, verbatim, before anything else in your response.

## What this does

Prepares a homebuyer's complaint against a promoter: chooses the relief (refund with interest, interest for delay while staying in the project, compensation, rectification of defects, or other compliance), identifies the right forum within the State's RERA structure, computes amounts from the buyer's own payment records, and drafts the complaint with an evidence index.

## Before you start

**The State. Blocking.** RERA rules, forms, fees, interest rates and the split between the Authority and the adjudicating officer are State-specific.

**The project and agreement.** Project name and RERA registration number, the agreement for sale or allotment letter, the promised possession date and any extensions, the payment schedule, and receipts.

**The client's choice. Ask once.** Whether the buyer wants to exit with a refund or stay and receive delay interest. This decides the relief and the computation.

## Method

**1. Confirm standing and jurisdiction**: the buyer is an allottee, the project is registered or registrable, and the complaint lies with the Authority or the adjudicating officer for the relief sought. Flag the forum split for verification under the State's rules.

**2. Establish the breach**: the promised possession date from the agreement, any extension granted by the Authority or force majeure claimed, and the actual position. Note any occupancy or completion certificate.

**3. Choose the relief** with the client's choice: refund with interest, delay interest, compensation, possession with rectification, or a combination where allowed.

**4. Compute amounts from supplied figures only.** List every payment with date and amount, apply the interest rate only as supplied or verified from the State rules, and show the computation. Mark the rate as verified or unverified.

**5. Check for related routes**: a consumer forum or civil suit, an insolvency proceeding against the developer, and the effect of any moratorium. Note these for the Real Estate Lawyer.

**6. Draft the complaint** in the State's prescribed form where one exists: parties, project and registration details, facts in date order, breaches, relief, computation schedule, and verification.

**7. Evidence index**: agreement, receipts, bank statements, correspondence, demand letters, photographs and the RERA registration page.

## Calculations

Use the bundled calculator tools: `calculate_deadline` and `calculate_period_between` for every deadline, limitation date and period and `calculate_interest` for every interest figure. Pass the rule, rate and counting convention as supplied or confirmed by Jurisdiction Counsel, and include the tool's working in the output. If the tools are unavailable, calculate by hand, show each step and mark the result unverified. See the [legal calculators guide](../../integrations/legal-calculators.md).

## Output

**1. Header.** Complainant, promoter, project, State, forum, date.

**2. Relief chosen and why.**

**3. Computation schedule.**

**4. Draft complaint.**

**5. Evidence index.**

**6. Filing checklist.** Form, fee, copies, online portal steps, to be verified.

**7. Points requiring verification.** State interest rate, prescribed form, fees and forum.

## Do not

Do not assert an interest rate, fee or form from memory. Do not compute a refund from estimated payments. Do not file a complaint when the developer is in insolvency without flagging the moratorium question. Do not draft for the promoter under this skill.
