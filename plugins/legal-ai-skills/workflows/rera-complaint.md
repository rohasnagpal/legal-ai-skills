# RERA Complaint

## Trigger and objective

Use when a homebuyer in India seeks relief against a promoter for delayed possession, refund, compensation, defects or other breaches of the real estate regulatory regime. Deliver a relief decision, computation and a complaint ready for counsel review.

## Required inputs

Buyer and promoter; project name, address, State and RERA registration number; agreement for sale or allotment letter; promised possession date and any extension; payments with dates; correspondence; occupancy or completion certificate status; whether the buyer wants to exit or stay; deadlines.

## Branches

- **Refund with interest:** the buyer wants to exit.
- **Possession with delay interest:** the buyer wants to stay.
- **Compensation:** claims for loss beyond interest, usually before the adjudicating officer.
- **Defects after possession:** rectification or compensation.
- **Developer insolvent:** stop and assess the moratorium with the Insolvency Lawyer before filing.

The Matter Owner chooses the branch and records it in the matter record.

## Matter Owner and team

The [Real Estate Lawyer](../agents/real-estate-lawyer.md) is Matter Owner. [India Counsel](../agents/india-counsel.md) confirms the State rules, forum and rates. Request the [Insolvency Lawyer](../agents/insolvency-lawyer.md) if the developer is in insolvency, the [Consumer Protection Lawyer](../agents/consumer-protection-lawyer.md) if a consumer forum is a better route, and the [Litigation Lawyer](../agents/litigation-lawyer.md) for execution of orders.

Core skills: `legal-ai-skills:rera-compliance-checker`, `legal-ai-skills:rera-complaint-drafter`, [builder-buyer-agreement-reviewer](../skills/builder-buyer-agreement-reviewer/SKILL.md), [evidence-organizer](../skills/evidence-organizer/SKILL.md) and [chronology-builder](../skills/chronology-builder/SKILL.md).

## Helpful capability categories

Use [document sources](../integrations/document-sources.md) for the property file and [legal research](../integrations/legal-research.md) for State RERA rules. State RERA portals may confirm project registration where accessible.

## Execution sequence

1. **Project review** (Real Estate Lawyer, rera-compliance-checker): registration, promised dates, extensions and certificates. Output: project status note.
2. **Agreement review** (builder-buyer-agreement-reviewer): possession, delay and cancellation terms. Output: breach findings.
3. **Insolvency check**: confirm whether the promoter is in insolvency. If so, switch to the insolvency branch.
4. **Relief decision** with the client: refund, delay interest, compensation or defects. Output: branch chosen.
5. **Evidence and chronology** (evidence-organizer, chronology-builder). Output: evidence index and timeline.
6. **Computation** (rera-complaint-drafter): amounts from supplied payments; rate verified by India Counsel. Output: computation schedule.
7. **Draft complaint** (rera-complaint-drafter) in the State's prescribed form. Output: complaint and filing checklist.

## Review checkpoints

1. After step 3: no complaint is drafted against an insolvent promoter without the moratorium analysis.
2. After step 4: client confirms the relief.
3. Before delivery: computation reconciles with receipts and bank records.

## Verification

India Counsel verifies the State's forum split, prescribed form, fees and interest rate. Run [consistency-checker](../skills/consistency-checker/SKILL.md) on dates and amounts.

## Escalation to human review

Escalate to the client or a qualified lawyer: the exit-or-stay decision, developer insolvency, settlement offers, and filing.

## Deliverable

Project status note, breach findings, relief recommendation, computation schedule, draft complaint, evidence index, filing checklist, gaps and verification status.

## Fallback behaviour

Without the agreement or payment records, provide a document request list and a provisional relief analysis only. Without verified State rates, show the computation with the rate as a variable.
