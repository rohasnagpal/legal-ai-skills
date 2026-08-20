---
name: startup-compliance-checker
description: Checks the compliance obligations applicable to a startup given its entity structure, stage, and sector — post-incorporation and structural filings, DPIIT recognition considerations, funding-triggered compliance, and ESOP-related requirements — flagging current specific forms, deadlines, and fees for verification rather than asserting them from memory. Use this whenever a user needs a startup's compliance position checked — including phrasings like "what compliance do we need at our stage", "check our post-funding filing obligations", "does raising this round trigger any FEMA reporting", "what does DPIIT recognition actually require of us", or "build a compliance checklist for our current stage". India-specific. Fires for any private limited company or LLP startup checking its obligations by stage.
---

# Startup Compliance Checker

## What this does

Checks the compliance obligations applicable to a startup given its entity structure, incorporation stage, funding history, and sector — as a structured checklist, not a fully resolved answer. Startup compliance in India runs through administratively prescribed forms, deadlines, and fees that change periodically, and through DPIIT recognition conditions that depend on facts specific to the company, so this skill treats the current specifics as something to verify rather than something to state from memory.

## Before you start

**The entity structure and incorporation date.** Private limited company, LLP, or another structure — the compliance framework differs significantly between them. Blocking.

**The funding stage and history, and the sector.** Blocking — funding-triggered and sector-specific obligations cannot be identified without this.

Not blocking, ask once and proceed on what is confirmed: **whether DPIIT startup recognition has been obtained.** Do not assume it has — eligibility for startup-specific exemptions and benefits depends on this status, and assuming it would misstate the company's actual position.

## Method

**1. Confirm the entity structure and incorporation date first.** The compliance framework for a private limited company differs substantially from an LLP or another structure, and everything that follows depends on getting this right.

**2. Identify stage-specific obligations** — post-incorporation filings, statutory registers, first board meeting and AGM timelines — as a general framework. Flag current specific timelines and forms for verification, since these are procedurally prescribed and updated administratively.

**3. Check DPIIT recognition status, and if relevant, the obligations or relaxations tied to it.** Do not assume recognition has been obtained, and do not assume a specific tax or compliance benefit applies without that being confirmed against the company's actual status.

**4. Identify funding-round-triggered compliance** — filings triggered by allotment of shares, valuation requirements for share issuance, and whether foreign investment is involved. Where FEMA reporting is triggered, flag that it applies and point to fema-analyst for the substantive analysis rather than duplicating it here.

**5. Identify ESOP-related compliance if an option pool exists or is being created** — board and shareholder approval requirements, and any specific filing this triggers.

**6. Flag sector-specific licenses or registrations that may apply based on the business activity, without asserting a specific list exhaustively.** This is highly fact-specific; flag the need for a sector-specific check rather than presenting an incomplete list as complete.

**7. Note ongoing periodic compliance** — annual filings, statutory audits, tax filings — at a checklist level, flagging current specific deadlines and forms for verification rather than stating them as settled.

**8. Never state a current specific form number, fee amount, or deadline from memory.** These are exactly the kind of administratively-set details that change and must be verified against the current requirement.

## Output

**1. Header.** Entity, structure, incorporation date, stage, sector, date of check.

**2. Post-incorporation and structural compliance.** Checklist, with current specifics flagged for verification.

**3. DPIIT recognition status and related considerations.**

**4. Funding-triggered compliance.** Filings, a flag for FEMA reporting if triggered (pointing to fema-analyst for the substantive analysis), and valuation requirements.

**5. ESOP-related compliance**, if relevant.

**6. Sector-specific licensing.** Flagged as needing a specific check, not presented as an exhaustive list.

**7. Ongoing periodic compliance checklist.**

**8. Points requiring verification.** Current forms, deadlines, fees, and the conditions attached to any DPIIT-linked benefit.

## Do not

Do not state a current specific form number, deadline, or fee from memory.

Do not assume DPIIT recognition has been obtained without confirming it.

Do not assert a sector-specific license list exhaustively. Flag the need for a sector-specific check instead.

Do not perform the substantive FEMA analysis here. Flag that it is triggered and point to fema-analyst.

Do not apply one entity structure's compliance framework to a different structure.
