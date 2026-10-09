# Data Breach Response

## Trigger and objective

Use for an actual or suspected compromise of personal data or regulated information. Preserve evidence, establish facts, assess legal obligations, manage notifications and create a defensible response record.

## Required inputs

Incident reporter, discovery time, systems and data potentially affected, jurisdictions, entities and processors involved, containment status, known evidence, decision-makers and immediate deadlines. Optional inputs include incident logs, contracts, policies, data maps, prior assessments and regulator or individual communications.

## Branches

- **Suspected incident:** containment and fact-finding first.
- **Confirmed personal-data breach:** notification analysis and clock management.
- **Post-incident:** remediation and lessons learned.

The Matter Owner chooses the branch and records it in the matter record.

## Matter Owner and team

The [Compliance Lawyer](../agents/compliance-lawyer.md) leads legal obligations. The [Investigations Lawyer](../agents/investigations-lawyer.md) leads fact-finding and evidence integrity. The [Contracts Lawyer](../agents/contracts-lawyer.md) addresses notification and allocation terms, and the [Legal Research Lawyer](../agents/legal-research-lawyer.md) verifies current legal requirements.

Use [breach-response-planner](../skills/breach-response-planner/SKILL.md), [digital-evidence-reviewer](../skills/digital-evidence-reviewer/SKILL.md), [chain-of-custody-documenter](../skills/chain-of-custody-documenter/SKILL.md), [regulatory-applicability-analyst](../skills/regulatory-applicability-analyst/SKILL.md), [cross-border-transfer-analyst](../skills/cross-border-transfer-analyst/SKILL.md) and [contract-reviewer](../skills/contract-reviewer/SKILL.md) as the facts require.

## Helpful capability categories

[Document sources](../integrations/document-sources.md) may retrieve policies, contracts and data maps. [Email and calendar](../integrations/email-and-calendar.md) may support authorised incident correspondence and deadline tracking. [Legal research](../integrations/legal-research.md) should verify current notification rules and regulator guidance.

## Execution sequence

1. Establish command, privilege approach, decision rights and a live incident chronology.
2. Preserve relevant logs and records without interfering with technical containment.
3. Identify affected systems, data categories, individuals, geography, duration, recipients and processors using confidence labels.
4. Review controller/processor roles, contract notices, insurance and third-party dependencies.
5. Assess applicable regulatory, contractual and individual-notification duties and calculate deadlines from supported trigger facts.
6. Prepare decision records, notifications and communications only after required facts and approvals are established.
7. Track containment, remediation, evidence, notifications and post-incident actions.

Technical fact-finding, contractual review and jurisdictional notification analysis may run in parallel, with a shared chronology and fact register.

## Review checkpoints

1. Notification clocks identified at the outset and tracked.
2. Facts confirmed before any notification is drafted.
3. Notifications checked for consistency across regulators and individuals.

## Verification

Use [consistency-checker](../skills/consistency-checker/SKILL.md) across dates, affected populations and communications; [assumption-flagger](../skills/assumption-flagger/SKILL.md) for uncertain incident facts; and [authority-validator](../skills/authority-validator/SKILL.md) for notification law.

## Escalation to human review

Escalate to the client or a qualified lawyer: Whether and when to notify regulators and individuals, law-enforcement contact, ransom questions, and public statements.

## Deliverable

Provide an executive incident status, verified and unverified facts, legal applicability and deadline matrix, evidence and decision log, notification recommendations, action owners, open questions and verification status.

## Fallback behaviour

Without subagents, maintain separate sequential fact, contract and law workstreams. Without integrations, request exported logs and documents through an approved channel. Missing facts must not be guessed; use alternative notification scenarios and state what fact changes each outcome.
