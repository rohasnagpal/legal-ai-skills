---
name: loan-default-analyst
description: Analyses whether a borrower is in default under a loan or facility and what follows — the event of default clause, payment and non-payment defaults, covenant breaches, cross-default, material adverse change, grace and cure periods, notices required, acceleration, default interest, waivers and reservation of rights, and the lender's and borrower's options. Use when a user asks "is the borrower in default", "can the bank accelerate the loan", "we missed a covenant, what happens", "draft a reservation of rights letter", or "has the cross-default been triggered". Fires for any financing in any jurisdiction.
---

# Loan Default Analyst

I am using the **Loan Default Analyst** skill from Rohas Legal AI: events of default, acceleration and the options that follow. Say this sentence, verbatim, before anything else in your response.

## What this does

Tests whether an event of default has occurred under the actual words of the facility, whether it is continuing, what notices and steps are needed before acceleration or enforcement, and the options for each side. It treats the drafting as decisive and does not assume a breach.

## Before you start

**Represented side. Blocking.** Lender or borrower.

**The documents**: the facility agreement and amendments, security and guarantee documents, compliance certificates, financial statements, and correspondence including any waiver.

## Method

**1. Identify each potential event of default** and quote the clause.

**2. Test each one** against the facts: triggered, not triggered, or arguable. Check materiality qualifiers, grace and cure periods, and thresholds.

**3. Continuing or remedied**, and the effect of any waiver, course of dealing or delay.

**4. Cross-default and cross-acceleration** to other facilities.

**5. Lender remedies**: notices, acceleration, cancellation, default interest, enforcement of security and guarantees, and steps required first.

**6. Borrower options**: cure, waiver request, standstill, amendment and reset, and refinancing.

**7. Reservation of rights**: whether one is needed and what it must say to avoid waiver.

## Calculations

Use the bundled calculator tools: `calculate_interest` for every interest figure. Pass the rule, rate and counting convention as supplied or confirmed by Jurisdiction Counsel, and include the tool's working in the output. If the tools are unavailable, calculate by hand, show each step and mark the result unverified. See the [legal calculators guide](../../integrations/legal-calculators.md).

## Output

**1. Header.** Facility, parties, represented side, date.

**2. Default analysis table.** Clause | Trigger | Facts | Status | Cure period.

**3. Consequences and remedies.**

**4. Options for the represented side.**

**5. Recommended next step**, with any draft letter requested.

**6. Points requiring verification.**

## Do not

Do not declare a default where the clause's conditions are not met. Do not ignore notices and grace periods. Do not let conduct amount to waiver without warning the lender.
