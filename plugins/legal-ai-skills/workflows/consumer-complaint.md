# Consumer Complaint

## Trigger and objective

Use when a consumer wants redress for a defective product, deficient service or unfair trade practice, or when a business must respond to such a complaint. Deliver an eligibility and merits assessment, quantified relief and the documents for the chosen route.

## Required inputs

Represented party; country and State; what was bought, from whom, when and for how much; purpose of purchase; invoices, warranties, terms and communications; the problem and when it arose; losses; prior notices or complaints; deadlines.

## Branches

- **Notice and settlement:** a demand notice and negotiation before any complaint.
- **Complaint:** filing before the consumer forum.
- **Defence:** the client is the opposite party.
- **Appeal:** challenging a forum's order.

The Matter Owner chooses the branch and records it in the matter record.

## Matter Owner and team

The [Consumer Protection Lawyer](../agents/consumer-protection-lawyer.md) is Matter Owner. The relevant Jurisdiction Counsel confirms the consumer statute, forum limits and limitation. Request the [Real Estate Lawyer](../agents/real-estate-lawyer.md) for homebuyer disputes where a real-estate regulator may be better, and the [Litigation Lawyer](../agents/litigation-lawyer.md) for execution.

Core skills: [consumer-complaint-eligibility-checker](../skills/consumer-complaint-eligibility-checker/SKILL.md), [deficiency-analyst](../skills/deficiency-analyst/SKILL.md), [product-liability-analyst](../skills/product-liability-analyst/SKILL.md), [compensation-quantifier](../skills/compensation-quantifier/SKILL.md), [demand-notice-drafter](../skills/demand-notice-drafter/SKILL.md), [consumer-pleading-drafter](../skills/consumer-pleading-drafter/SKILL.md) and [consumer-appeal-drafter](../skills/consumer-appeal-drafter/SKILL.md).

## Helpful capability categories

Use [document sources](../integrations/document-sources.md) for purchase and complaint records and [legal research](../integrations/legal-research.md) for current limits and rules.

## Execution sequence

1. **Eligibility** (consumer-complaint-eligibility-checker): consumer status, forum, limitation, blocks. Output: eligibility table.
2. **Merits** (deficiency-analyst or product-liability-analyst). Output: threshold assessment.
3. **Relief** (compensation-quantifier). Output: quantified relief with basis.
4. **Branch**: notice (demand-notice-drafter), complaint or reply (consumer-pleading-drafter), or appeal (consumer-appeal-drafter).
5. **Consolidation**: documents, evidence index and filing checklist.

## Review checkpoints

1. After step 1: stop if consumer status, forum or limitation fails, and advise on alternatives.
2. After step 3: client confirms the relief claimed.
3. Before delivery: pleadings match the evidence and computation.

## Verification

Jurisdiction Counsel verifies pecuniary limits, fees and limitation. Run [consistency-checker](../skills/consistency-checker/SKILL.md) on amounts and dates.

## Escalation to human review

Escalate to the client or a qualified lawyer: safety-related defects, group or class claims, regulator reporting duties, settlement offers, and filing.

## Deliverable

Eligibility and merits findings, quantified relief, the notice, complaint, reply or appeal for the branch, evidence index, filing checklist, gaps and verification status.

## Fallback behaviour

Without purchase records, give a provisional view and a document request list. Without verified limits, show the forum choice as depending on the current threshold.
