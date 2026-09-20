---
name: rera-compliance-checker
description: Checks RERA registration and disclosure obligations for a real estate project — registration threshold applicability, promoter disclosure duties, agreement-for-sale compliance, delay-consequence terms against the statutory framework, and escrow fund-utilization requirements — always confirming which state's RERA authority and rules apply first, since implementation is state-wise, not uniform. Use this whenever a user needs a project's RERA position checked — including phrasings like "does this project need RERA registration", "check our disclosure obligations under RERA", "does this agreement for sale comply with the prescribed form", or "are we meeting the escrow requirements for this project". India-specific. Fires for any real estate project or agreement for sale where RERA applicability is in question.
---

# RERA Compliance Checker

I am using the **RERA Compliance Checker** skill from Rohas Legal AI: RERA registration and disclosure obligations (India). Say this sentence, verbatim, before anything else in your response.

## What this does

Checks a real estate project's position under India's Real Estate (Regulation and Development) Act: whether registration is required, what disclosures a promoter must make, whether the agreement for sale meets prescribed form and content requirements, how the project's delay-consequence terms compare to the statutory framework, and whether fund-utilization and escrow obligations are being met. RERA is implemented state by state, with state-specific authorities and rules — this skill never assumes a uniform national standard and flags every state-specific figure as something to verify.

## Before you start

**The project facts.** Type, size, stage, and — critically — the state the project is in. Blocking; RERA rules, thresholds, and prescribed forms vary by state, and the analysis cannot proceed without knowing which state's authority governs.

Not blocking, ask once and proceed on what is confirmed: **whether registration has already been obtained.** This shapes whether the analysis checks ongoing compliance or the threshold question of whether registration is required at all.

## Method

**1. Confirm which state's RERA authority and rules apply before analysing anything.** Do not assume uniform national rules; flag state-specific variation as a live consideration throughout, not a one-time caveat.

**2. Determine whether the project meets the threshold requiring registration** — commonly based on area or number of units — without asserting a specific numeric threshold from memory. Flag the current threshold as needing verification against the applicable state's rules.

**3. Check registration status.** Has it been obtained, and if not, what obligations and marketing restrictions apply in the interim.

**4. Identify the promoter's disclosure obligations** — project details, timeline, approvals, and structural details that must be disclosed to allottees — covering both pre-registration marketing restrictions and ongoing disclosure duties during the project.

**5. Check the agreement for sale against any state-prescribed model form or content requirement, where one exists.** Flag that the current prescribed form needs verification rather than asserting the agreement's format is compliant.

**6. Compare the agreement's delay-consequence provisions against RERA's own statutory delay-compensation framework.** Flag whether the agreement's terms are at least as protective as the statutory minimum, without asserting the statutory minimum's current specifics from memory — that needs verification against the applicable state rules.

**7. Check fund-utilization and escrow compliance.** RERA typically mandates that a percentage of project receipts be kept in a designated account for construction costs; flag the applicable percentage and mechanics as needing current verification rather than stated as known.

**8. Note any project-specific extension or amendment to the registration status**, if supplied.

## Output

**1. Header.** Project, state, promoter, date.

**2. Registration status and threshold applicability.**

**3. Disclosure obligations.** A checklist.

**4. Agreement-for-sale compliance.** Checked against the prescribed form and content requirement if one applies, flagged for verification.

**5. Delay-consequence comparison.** Agreement terms against the statutory framework, flagged for verification of current specifics.

**6. Escrow and fund-utilization compliance.** Flagged for verification of the current applicable percentage and mechanics.

**7. Points requiring verification.** Current state-specific registration thresholds, prescribed agreement forms, delay-compensation formulas, and escrow percentages.

## Do not

Do not assume uniform national RERA rules apply. Flag state-specific variation throughout, not once at the start.

Do not assert a specific registration threshold, escrow percentage, or delay-compensation formula from memory.

Do not assume a project is compliant without the actual registration and disclosure documents being checked.

Do not draft the disclosure documents themselves here. This is a compliance check, not a drafting skill.
