# Debt Recovery

## Trigger and objective

Use when a creditor needs to recover money from a debtor or guarantor. Choose the fastest realistic route, protect limitation, and prepare the first steps.

## Required inputs

Creditor and debtor; jurisdiction; the debt documents and amount; default date; security and guarantees; payments and acknowledgements; the debtor's known assets; prior demands; any dispute raised; deadlines.

## Branches

- **Secured:** enforcement of security, including SARFAESI in India for eligible lenders.
- **Unsecured:** demand, summary or ordinary suit, or arbitration under the contract.
- **Guarantor:** recovery against guarantors in parallel.
- **Insolvency route:** where the debtor is likely insolvent, assessed with the Insolvency Lawyer.
- **Cheque dishonour:** where a dishonoured cheque supports criminal remedies, using the cheque dishonour workflow.

The Matter Owner chooses the branch and records it in the matter record.

## Matter Owner and team

The [Banking & Finance Lawyer](../agents/banking-finance-lawyer.md) is Matter Owner. The relevant Jurisdiction Counsel confirms limitation and forum. Request the [Litigation Lawyer](../agents/litigation-lawyer.md) for suits and execution, the [Dispute Resolution Lawyer](../agents/dispute-resolution-lawyer.md) for arbitration, and the [Insolvency Lawyer](../agents/insolvency-lawyer.md) for the insolvency route.

Core skills: [recovery-strategy-planner](../skills/recovery-strategy-planner/SKILL.md), [loan-default-analyst](../skills/loan-default-analyst/SKILL.md), [guarantee-analyst](../skills/guarantee-analyst/SKILL.md), [secured-creditor-priority-analyst](../skills/secured-creditor-priority-analyst/SKILL.md), [demand-notice-drafter](../skills/demand-notice-drafter/SKILL.md), [limitation-checker](../skills/limitation-checker/SKILL.md), [insolvency-options-assessor](../skills/insolvency-options-assessor/SKILL.md), and for India `legal-ai-skills:sarfaesi-advisor` and `legal-ai-skills:plaint-drafter`.

## Helpful capability categories

Use [company registries](../integrations/company-registries.md) for the debtor and registered charges, [document sources](../integrations/document-sources.md) for the debt file, and [legal research](../integrations/legal-research.md) for enforcement procedure.

## Execution sequence

1. **Debt verification** (Banking & Finance Lawyer): documents, amount, default and any dispute. Output: debt summary.
2. **Limitation** (limitation-checker): from verified dates, including acknowledgements. Output: limitation position.
3. **Security and guarantees** (secured-creditor-priority-analyst, guarantee-analyst). Output: security map.
4. **Route** (recovery-strategy-planner, insolvency-options-assessor). Output: route comparison and recommendation.
5. **Notices** (demand-notice-drafter, or the statutory notice for secured enforcement). Output: notice.
6. **Proceedings** for the branch: enforcement, suit, arbitration or insolvency application.

## Review checkpoints

1. After step 2: limitation confirmed before any notice.
2. After step 4: client confirms the route and budget.
3. Before filing: amounts reconcile with the statement of account.

## Verification

Jurisdiction Counsel verifies limitation, forum and enforcement procedure. Run [consistency-checker](../skills/consistency-checker/SKILL.md) on amounts and dates.

## Escalation to human review

Escalate to the client or a qualified lawyer: limitation within 30 days, debtor insolvency signals, settlement offers, and filing.

## Deliverable

Debt summary, limitation position, security map, route recommendation, notices and first-stage documents, gaps and verification status.

## Fallback behaviour

Without a statement of account, prepare a reconciliation request and do not state the claim amount as final.
