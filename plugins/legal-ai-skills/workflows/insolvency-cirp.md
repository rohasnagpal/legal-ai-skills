# Insolvency and CIRP

## Trigger and objective

Use for a corporate insolvency matter for a creditor, debtor, resolution applicant or guarantor: choosing whether to initiate, initiating, filing claims, participating in the process, and appeals. In India this follows the corporate insolvency resolution process (CIRP); other regimes use the same stages through their own counsel.

## Required inputs

Client role; debtor details; debt documents, default and demand records; security and guarantees; any dispute raised by the debtor; the procedural stage, orders and public announcements; claims, plans or committee papers; deadlines.

## Branches

- **Initiation:** the client wants to start the process.
- **Claim filing:** the process has started and the client is a creditor.
- **Committee and plan:** the client votes on or challenges decisions or plans.
- **Guarantor:** proceedings against personal guarantors.
- **Liquidation:** the process has failed or liquidation is ordered.

The Matter Owner chooses the branch and records it in the matter record.

## Matter Owner and team

The [Insolvency Lawyer](../agents/insolvency-lawyer.md) is Matter Owner. The relevant Jurisdiction Counsel confirms the regime and timelines ([India](../agents/india-counsel.md) for IBC). Request the [Banking & Finance Lawyer](../agents/banking-finance-lawyer.md) for security and priority, the [Corporate Lawyer](../agents/corporate-lawyer.md) for resolution applicants, and the [Employment Lawyer](../agents/employment-lawyer.md) for workforce claims.

Core skills: [insolvency-options-assessor](../skills/insolvency-options-assessor/SKILL.md), [creditor-claim-preparer](../skills/creditor-claim-preparer/SKILL.md), [moratorium-impact-analyst](../skills/moratorium-impact-analyst/SKILL.md), [insolvency-appeal-drafter](../skills/insolvency-appeal-drafter/SKILL.md), [secured-creditor-priority-analyst](../skills/secured-creditor-priority-analyst/SKILL.md), and for India `legal-ai-skills:operational-creditor-application-drafter`, `legal-ai-skills:cirp-timeline-checker`, `legal-ai-skills:claim-verification-analyst`, `legal-ai-skills:coc-decision-analyst`, `legal-ai-skills:resolution-plan-reviewer`, `legal-ai-skills:avoidance-transaction-analyst`, `legal-ai-skills:personal-guarantor-insolvency-analyst` and `legal-ai-skills:liquidation-documenter`.

## Helpful capability categories

Use [company registries](../integrations/company-registries.md) to verify the debtor and charges, [document sources](../integrations/document-sources.md) for the debt file, and [legal research](../integrations/legal-research.md) for current regulations.

## Execution sequence

1. **Options** (insolvency-options-assessor): eligibility and alternatives. Output: route recommendation.
2. **Moratorium and timeline** (moratorium-impact-analyst, cirp-timeline-checker in India). Output: impact table and timeline from verified dates.
3. **Branch work**: initiation application; claim (creditor-claim-preparer); committee and plan review (coc-decision-analyst, resolution-plan-reviewer); guarantor analysis; or liquidation.
4. **Priority and recovery** (secured-creditor-priority-analyst). Output: expected recovery scenarios.
5. **Challenges and appeals** (insolvency-appeal-drafter) where needed.
6. **Consolidation**: position, documents, timeline and next decisions.

## Review checkpoints

1. After step 1: client confirms the route.
2. After step 2: every deadline confirmed from verified trigger dates.
3. Before filing or voting: documents and positions checked against the record.

## Verification

Jurisdiction Counsel verifies regulations and timelines as amended for the relevant dates. Run [consistency-checker](../skills/consistency-checker/SKILL.md) on amounts, dates and parties.

## Escalation to human review

Escalate to the client or a qualified professional: claim and appeal deadlines, voting decisions, related-party concerns, moratorium breaches, and filing.

## Deliverable

Route recommendation, moratorium impact, timeline, claim or application, committee and plan analysis, recovery scenarios, appeal where needed, gaps and verification status.

## Fallback behaviour

Without the public announcement or orders, ask for them and give a provisional timeline only. Never compute claim or appeal deadlines from unverified dates.
