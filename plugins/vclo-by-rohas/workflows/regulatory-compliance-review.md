# Regulatory Compliance Review

## Trigger and objective

Use to assess whether an entity, product, activity or control environment meets applicable regulatory requirements. Convert current legal duties into operational obligations, evidence, gaps and remediation.

## Required inputs

Entity and group structure, jurisdictions, activities, sector, products or services, relevant data flows, review period and intended scope. Optional inputs include policies, licences, filings, control evidence, audits, regulator correspondence, incidents, risk appetite and target completion dates.

## Agents and skills

The [Compliance Agent](../agents/compliance-agent.md) leads with the [Legal Research Agent](../agents/legal-research-agent.md). Other agents participate only for material employment, contract, corporate, IP, dispute or investigation issues.

Use [regulatory-applicability-analyst](../skills/regulatory-applicability-analyst/SKILL.md), [compliance-obligations-mapper](../skills/compliance-obligations-mapper/SKILL.md), [regulatory-change-monitor](../skills/regulatory-change-monitor/SKILL.md), [licence-application-drafter](../skills/licence-application-drafter/SKILL.md), [regulatory-filing-preparer](../skills/regulatory-filing-preparer/SKILL.md) and the relevant existing privacy or sector skill.

## Helpful capability categories

[Document sources](../integrations/document-sources.md) may retrieve policies and control evidence. [Email and calendar](../integrations/email-and-calendar.md) may support filing and remediation deadlines. [Legal research](../integrations/legal-research.md) should use current official regulator and government sources.

## Execution sequence

1. Confirm entity, activity, geography, sector and review period.
2. Determine applicable regimes, exclusions, thresholds and responsible entities.
3. Build an obligation register with source, applicability rationale, action, frequency, deadline and owner.
4. Map each obligation to control design and evidence of operation.
5. Classify compliant, partial, non-compliant, not applicable and not evidenced items.
6. Assess legal exposure, operational impact and remediation priority.
7. Identify upcoming regulatory changes and transition dates relevant to the scoped activity.
8. Prepare a sequenced remediation plan with owners, evidence and deadlines.

Applicability, evidence review and specialist regulatory workstreams may run in parallel once scope and terminology are fixed.

## Verification

Verify material obligations and effective dates against current primary sources. Use [consistency-checker](../skills/consistency-checker/SKILL.md), [assumption-flagger](../skills/assumption-flagger/SKILL.md) and [authority-validator](../skills/authority-validator/SKILL.md) proportionately.

## Deliverable

Provide an executive assessment, applicability map, obligation-control-evidence register, prioritised gaps, remediation plan, owners and deadlines, unavailable evidence and verification status.

## Fallback behaviour

Without subagents, perform the same workstreams sequentially. Without connected sources, request exported policies and evidence. If live official sources are unavailable, do not state that the law is current; identify provisions requiring verification and continue with supported document analysis.
