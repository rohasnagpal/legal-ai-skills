# Cheque Dishonour (Section 138)

## Trigger and objective

Use for a dishonoured cheque under Section 138 of India's Negotiable Instruments Act, for the payee (complainant) or the drawer (accused). Protect the statutory deadlines and deliver the notice, complaint or defence plan.

## Required inputs

Represented role; the cheque, its date and amount; the return memo and its date and reason; the underlying debt or liability and its documents; any notice sent or received, with dates of dispatch and service; payments after notice; place of presentation and the payee's bank branch; deadlines.

## Branches

- **Complainant (payee):** statutory notice, then complaint within time.
- **Accused (drawer):** reply to the notice, defences, compounding and settlement.
- **Notice stage** or **complaint filed**, for either side.

The Managing Partner sets the Matter Owner by role, and the Matter Owner records the branch.

## Matter Owner and team

For the complainant, the [Litigation Lawyer](../agents/litigation-lawyer.md) is Matter Owner. For the accused, the [Criminal Defence Lawyer](../agents/criminal-defence-lawyer.md) is Matter Owner. [India Counsel](../agents/india-counsel.md) confirms the provisions, territorial jurisdiction and deadlines. Request the [Banking & Finance Lawyer](../agents/banking-finance-lawyer.md) for wider recovery against the debtor.

Core skills: `legal-ai-skills:cheque-dishonour-notice-drafter`, `legal-ai-skills:cheque-dishonour-complaint-drafter`, [limitation-checker](../skills/limitation-checker/SKILL.md), [notice-reply-drafter](../skills/notice-reply-drafter/SKILL.md), [defence-strategy-planner](../skills/defence-strategy-planner/SKILL.md) and [settlement-strategy-planner](../skills/settlement-strategy-planner/SKILL.md).

## Helpful capability categories

Use [document sources](../integrations/document-sources.md) for the cheque, memo and correspondence, and [legal research](../integrations/legal-research.md) for current law on jurisdiction and defences.

## Execution sequence

1. **Dates first** (India Counsel, limitation-checker): return memo date, notice deadline, service date, payment window, complaint deadline. Output: deadline table with calculations.
2. **Liability** (Matter Owner): the legally enforceable debt or liability and its evidence.
3. **Complainant branch:** draft the statutory notice (cheque-dishonour-notice-drafter); after the payment window, draft the complaint (cheque-dishonour-complaint-drafter) for the court with territorial jurisdiction.
4. **Accused branch:** reply to the notice (notice-reply-drafter); defence strategy on liability, notice defects and limitation (defence-strategy-planner); settlement and compounding options.
5. **Consolidation:** documents, deadline table and next steps.

## Review checkpoints

1. After step 1: no drafting until every date is verified and the deadline table is approved.
2. Before delivery: the notice or complaint matches the cheque, memo and debt documents exactly.

## Verification

India Counsel verifies the notice and complaint periods, territorial jurisdiction and current authority. Run [consistency-checker](../skills/consistency-checker/SKILL.md) on amounts, dates and names.

## Escalation to human review

Escalate to the client or a qualified lawyer: any deadline within seven days, disputed liability, multiple cheques or accused, settlement terms, and filing.

## Deliverable

Deadline table, notice or reply, complaint or defence plan, settlement options, evidence list, gaps and verification status.

## Fallback behaviour

Without verified service dates, show the deadline range and the evidence needed to fix it. Never present a complaint as within time on an unverified date.
