# Tax Assessment and Appeal

## Trigger and objective

Use when a taxpayer receives a tax notice, assessment, demand or adverse order. Protect the deadline, quantify exposure, respond on the record, and plan any appeal.

## Required inputs

Taxpayer details and registrations; jurisdiction; the tax and period; the notice or order with dates of issue and service; returns, books and reconciliations; prior replies and orders; amounts in dispute; deadlines.

## Branches

- **Direct tax** or **indirect tax** (GST, VAT, customs).
- **Response stage:** reply to a notice or show cause.
- **Appeal stage:** first appeal or higher, with pre-deposit and stay.
- **Settlement:** amnesty or dispute-resolution schemes where available.

The Matter Owner chooses the branch and records it in the matter record.

## Matter Owner and team

The [Tax Lawyer](../agents/tax-lawyer.md) is Matter Owner. The relevant Jurisdiction Counsel confirms the statute, procedure, limitation and forum. Request the [Public Law & Regulatory Lawyer](../agents/public-law-lawyer.md) if a writ is considered and the [Legal Research Lawyer](../agents/legal-research-lawyer.md) for contested points of law.

Core skills: [tax-notice-analyst](../skills/tax-notice-analyst/SKILL.md), [tax-litigation-strategy-planner](../skills/tax-litigation-strategy-planner/SKILL.md), and for India `legal-ai-skills:tax-assessment-reply-drafter`, `legal-ai-skills:tax-appeal-grounds-drafter`, `legal-ai-skills:gst-compliance-analyst` and `legal-ai-skills:input-tax-credit-dispute-analyst`.

## Helpful capability categories

Use [document sources](../integrations/document-sources.md) for returns and records and [legal research](../integrations/legal-research.md) for provisions, circulars and rulings in force for the period.

## Execution sequence

1. **Notice analysis** (tax-notice-analyst): power, issues, exposure, deadline, validity. Output: issues and exposure table.
2. **Records** (Tax Lawyer): reconciliations and documents for each issue. Output: evidence pack.
3. **Route** (tax-litigation-strategy-planner): reply, settlement, appeal or writ. Output: route and sequence.
4. **Branch work**: reply (tax-assessment-reply-drafter in India); appeal grounds and stay (tax-appeal-grounds-drafter in India); settlement application.
5. **Consolidation**: documents, deadline table and payment or deposit decisions.

## Review checkpoints

1. After step 1: response deadline confirmed and, if needed, an extension requested.
2. After step 3: client confirms the route and any payment under protest or pre-deposit.
3. Before filing: figures in the reply or appeal reconcile with the records.

## Verification

Jurisdiction Counsel verifies the provisions, rates, circulars and limitation for the period. Use [authority-validator](../skills/authority-validator/SKILL.md) for rulings cited.

## Escalation to human review

Escalate to the client or a qualified representative: imminent deadlines, recovery or attachment action, penalty and prosecution exposure, payment decisions, and filing.

## Deliverable

Issues and exposure table, deadline table, route recommendation, reply or appeal documents, stay application where needed, gaps and verification status.

## Fallback behaviour

Without records, respond with a holding reply and extension request where the law allows, and list the documents needed. Never miss a deadline to perfect the analysis.
