# Divorce and Matrimonial Proceedings

## Trigger and objective

Use when a client wants a divorce or other matrimonial relief, or is responding to one, together with the maintenance, custody, protection and property issues that travel with it. Deliver a route recommendation and the documents for the chosen branch.

## Required inputs

Represented spouse; country and State; domicile and residence of both spouses; date, place and form of marriage and any registration; religion or personal law where legally relevant; children and their ages; separation date; the client's objective; income, assets and liabilities; any violence; prior proceedings, orders or agreements; deadlines.

## Branches

- **Safety first:** if violence or abuse is alleged, run the protection stage before anything else.
- **Mutual consent:** both spouses agree to divorce; focus on settlement terms and the joint petition.
- **Contested:** one spouse does not agree; focus on grounds, evidence and interim relief.
- **Other relief:** judicial separation, restitution or nullity where the analysis points there.
- **Children:** add the custody stage when there are minor children.

The Matter Owner chooses the branch and records it in the matter record.

## Matter Owner and team

The [Family Lawyer](../agents/family-lawyer.md) is Matter Owner. The relevant Jurisdiction Counsel ([India](../agents/india-counsel.md), [US](../agents/us-counsel.md) or [UK](../agents/uk-counsel.md)) confirms the governing family law and the court. Request the [Real Estate Lawyer](../agents/real-estate-lawyer.md) for property transfers, the [Tax Lawyer](../agents/tax-lawyer.md) for tax on settlements, the [Dispute Resolution Lawyer](../agents/dispute-resolution-lawyer.md) for mediation, and the [Criminal Defence Lawyer](../agents/criminal-defence-lawyer.md) if the client faces criminal allegations.

Core skills: [divorce-grounds-assessor](../skills/divorce-grounds-assessor/SKILL.md), [domestic-violence-remedies-advisor](../skills/domestic-violence-remedies-advisor/SKILL.md), [maintenance-calculator](../skills/maintenance-calculator/SKILL.md), [child-custody-planner](../skills/child-custody-planner/SKILL.md), [matrimonial-property-analyst](../skills/matrimonial-property-analyst/SKILL.md), [family-court-procedure-checker](../skills/family-court-procedure-checker/SKILL.md), [settlement-deed-drafter](../skills/settlement-deed-drafter/SKILL.md), and for India `legal-ai-skills:matrimonial-petition-drafter`.

## Helpful capability categories

Use [document sources](../integrations/document-sources.md) for marriage, income and property records and [legal research](../integrations/legal-research.md) for current family law, within the authorised scope. Minimise access to children's and health information.

## Execution sequence

1. **Intake and safety** (Family Lawyer, domestic-violence-remedies-advisor): confirm safety; if at risk, plan urgent protection now. Output: safety plan.
2. **Law and forum** (Jurisdiction Counsel, family-court-procedure-checker): governing law, personal law, competent court. Output: intake assessment.
3. **Grounds and route** (divorce-grounds-assessor): mutual consent or contested, or other relief. Output: route recommendation; branch chosen.
4. **Money** (maintenance-calculator): interim and final maintenance, child support. Output: maintenance scenarios.
5. **Children** (child-custody-planner), when applicable. Output: custody position and schedule.
6. **Property** (matrimonial-property-analyst, with Real Estate Lawyer if needed). Output: asset schedule and division or return position.
7. **Settlement or litigation**: mutual branch — settlement-deed-drafter and the joint petition; contested branch — petition, interim applications and evidence plan.
8. **Consolidation** (Family Lawyer): one report and the drafts for the branch.

## Review checkpoints

1. After step 1: no other step proceeds while a safety risk is unaddressed.
2. After step 2: governing law and court confirmed before any drafting.
3. After step 3: client confirms the branch.
4. Before delivery: maintenance, custody and property positions are consistent with each other and with the draft documents.

## Verification

Run [consistency-checker](../skills/consistency-checker/SKILL.md) on dates, amounts and names across the drafts. Have Jurisdiction Counsel verify statutory periods, grounds, forms and court rules. Mark every unverified period or rate.

## Escalation to human review

Escalate to the client or a qualified lawyer: immediate safety or child-protection risks, international relocation or abduction concerns, recognition of a foreign divorce, settlement terms before signature, and any filing or court appearance.

## Deliverable

Route recommendation, safety plan where relevant, maintenance and custody positions, property schedule, draft settlement or petition for the chosen branch, filing checklist and timeline, gaps and verification status.

## Fallback behaviour

Without confirmed governing law, give only a neutral overview of possible routes and ask for the missing facts. Without financial disclosure, model maintenance as ranges with stated assumptions. Never present a draft petition as ready to file without counsel verification.
