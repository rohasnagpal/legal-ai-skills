# Employment Dispute

## Trigger and objective

Use for a dispute between an employer and an employee or worker: dismissal, discrimination or harassment complaints, unpaid wages or benefits, restrictive covenants, or disciplinary outcomes. Deliver a position, a negotiation plan and the documents for the chosen route.

## Required inputs

Represented side; jurisdiction and place of work; worker status; contract, policies and handbook; chronology; communications; pay and benefits records; disciplinary or grievance records; the client's objective; deadlines.

## Branches

- **Employee side** or **employer side**.
- **Pre-claim:** grievance, negotiation or settlement agreement.
- **Claim:** tribunal, labour court or civil court.
- **Restrictive covenants:** enforcement or defence of non-compete and non-solicit terms.

The Matter Owner chooses the branch and records it in the matter record.

## Matter Owner and team

The [Employment Lawyer](../agents/employment-lawyer.md) is Matter Owner. The relevant Jurisdiction Counsel confirms the employment law, forum and time limits. Request the [Litigation Lawyer](../agents/litigation-lawyer.md) for court procedure, the [Investigations Lawyer](../agents/investigations-lawyer.md) for serious misconduct investigations, and the [Dispute Resolution Lawyer](../agents/dispute-resolution-lawyer.md) for mediation.

Core skills: [disciplinary-documenter](../skills/disciplinary-documenter/SKILL.md), [separation-documenter](../skills/separation-documenter/SKILL.md), [whistleblower-report-analyst](../skills/whistleblower-report-analyst/SKILL.md), [chronology-builder](../skills/chronology-builder/SKILL.md), [evidence-organizer](../skills/evidence-organizer/SKILL.md), [limitation-checker](../skills/limitation-checker/SKILL.md), [settlement-strategy-planner](../skills/settlement-strategy-planner/SKILL.md), and through counsel `legal-ai-skills:labour-compliance-checker`, `legal-ai-skills:posh-compliance-advisor`, `legal-ai-skills:uk-employment-law-applicability-checker` and `legal-ai-skills:us-employment-law-applicability-checker`.

## Helpful capability categories

Use [document sources](../integrations/document-sources.md) and [email](../integrations/email-and-calendar.md) only within the authorised scope, minimising personal data. Use [legal research](../integrations/legal-research.md) for current employment law.

## Execution sequence

1. **Facts** (chronology-builder, evidence-organizer). Output: chronology and evidence index.
2. **Applicable law** (Jurisdiction Counsel and the applicability checkers). Output: rights, claims and time limits.
3. **Merits** (Employment Lawyer): each claim or defence rated. Output: claims table.
4. **Exposure and value**: compensation ranges from supplied figures. Output: exposure estimate.
5. **Route** (settlement-strategy-planner): negotiate, settle or litigate. Output: plan.
6. **Documents** for the branch: grievance letter, response, settlement agreement (separation-documenter) or claim.

## Review checkpoints

1. After step 2: time limits confirmed; urgent claims protected first.
2. After step 5: client confirms the route and settlement range.
3. Before delivery: documents consistent with the chronology.

## Verification

Jurisdiction Counsel verifies time limits, forum and statutory caps. Run [consistency-checker](../skills/consistency-checker/SKILL.md) on dates and figures.

## Escalation to human review

Escalate to the client or a qualified lawyer: claim deadlines, retaliation risk, harassment or safety concerns, senior or group exits, and settlement terms.

## Deliverable

Chronology, claims table, exposure estimate, route and negotiation plan, documents for the branch, gaps and verification status.

## Fallback behaviour

Without the contract or policies, work from the client's account, label it unverified, and list the documents needed. Protect time limits first.
