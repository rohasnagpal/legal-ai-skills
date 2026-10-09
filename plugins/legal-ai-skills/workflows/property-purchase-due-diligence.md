# Property Purchase Due Diligence

## Trigger and objective

Use when a client is buying, financing or leasing property and needs title, encumbrances, approvals and the transaction documents checked before committing. Deliver a diligence report with red flags and the conditions to complete safely.

## Required inputs

Property description and location including State; seller and their chain of title; type of property (resale, under-construction or land); title documents, land and revenue records, encumbrance records; approvals and certificates; draft agreement; price and payment plan; financing; deadlines.

## Branches

- **Resale:** title chain, encumbrances, society or association records, tax and dues.
- **Under-construction:** developer title and approvals, project registration, builder-buyer agreement.
- **Land:** land-use classification, conversion, access and survey boundaries.

The Matter Owner chooses the branch and records it in the matter record.

## Matter Owner and team

The [Real Estate Lawyer](../agents/real-estate-lawyer.md) is Matter Owner. The relevant Jurisdiction Counsel confirms local title, registration and stamp rules. Request the [Banking & Finance Lawyer](../agents/banking-finance-lawyer.md) where the purchase is financed, and the [Tax Lawyer](../agents/tax-lawyer.md) for tax on the transaction.

Core skills: `legal-ai-skills:title-diligence-analyst`, `legal-ai-skills:encumbrance-analyst`, `legal-ai-skills:stamp-duty-analyst`, `legal-ai-skills:rera-compliance-checker`, [land-use-zoning-advisor](../skills/land-use-zoning-advisor/SKILL.md), [builder-buyer-agreement-reviewer](../skills/builder-buyer-agreement-reviewer/SKILL.md), [sale-deed-drafter](../skills/sale-deed-drafter/SKILL.md) and [contract-reviewer](../skills/contract-reviewer/SKILL.md).

## Helpful capability categories

Use [document sources](../integrations/document-sources.md) and official land, registration and regulator portals where accessible. Use [legal research](../integrations/legal-research.md) for local rules.

## Execution sequence

1. **Scope** (Real Estate Lawyer): property, branch, lookback period and documents. Output: request list.
2. **Title** (title-diligence-analyst or local equivalent): chain of title and gaps. Output: title findings.
3. **Encumbrances** (encumbrance-analyst): charges, litigation and dues. Output: encumbrance findings.
4. **Approvals and use** (land-use-zoning-advisor, rera-compliance-checker where applicable). Output: approvals checklist.
5. **Agreement** (builder-buyer-agreement-reviewer or contract-reviewer). Output: issues and changes.
6. **Costs** (stamp-duty-analyst): stamp duty and registration. Output: cost computation.
7. **Report** (Real Estate Lawyer): red flags, conditions precedent, and drafts such as the sale deed.

## Review checkpoints

1. After step 1: scope and lookback agreed.
2. After steps 2–4: red flags reported to the client before the agreement is negotiated.
3. Before delivery: conditions precedent cover every red flag.

## Verification

Jurisdiction Counsel verifies registration, stamp and approval requirements. Mark every record that could not be checked against an official source.

## Escalation to human review

Escalate to the client or a qualified lawyer: broken title, fraud indicators, pending litigation, unauthorised construction, and the decision to proceed.

## Deliverable

Diligence report with title, encumbrance and approvals findings, red flags, cost computation, agreement changes, conditions precedent, draft documents, gaps and verification status.

## Fallback behaviour

Without official record access, rely on supplied certified copies and mark searches as outstanding. Never describe title as clear beyond the documents and searches actually reviewed.
