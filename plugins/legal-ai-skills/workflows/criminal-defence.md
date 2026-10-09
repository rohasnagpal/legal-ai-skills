# Criminal Defence

## Trigger and objective

Use when the client is a suspect or accused in a criminal matter, from the first contact with police through trial and appeal. Protect liberty first, then build the defence.

## Required inputs

Jurisdiction and State; the client's status and custody position; the FIR, complaint, notice, chargesheet or indictment; dates of arrest and remand; evidence disclosed; witnesses; prior record if relevant; deadlines and next hearing date.

## Branches

- **Pre-arrest:** anticipatory bail, response to notices, cooperation with investigation.
- **In custody:** rights, production deadline, regular bail.
- **Charge stage:** discharge or quashing.
- **Trial:** evidence, cross-examination and defence case.
- **After conviction:** sentencing, appeal and suspension of sentence.

The Matter Owner chooses the branch and records it in the matter record.

## Matter Owner and team

The [Criminal Defence Lawyer](../agents/criminal-defence-lawyer.md) is Matter Owner. The relevant Jurisdiction Counsel confirms the code in force for the offence date, the court and procedure. Request the [Investigations Lawyer](../agents/investigations-lawyer.md) for digital evidence and tracing, and the [Legal Research Lawyer](../agents/legal-research-lawyer.md) for contested points of law.

Core skills: [arrest-rights-advisor](../skills/arrest-rights-advisor/SKILL.md), [criminal-complaint-analyst](../skills/criminal-complaint-analyst/SKILL.md), [offence-ingredients-analyst](../skills/offence-ingredients-analyst/SKILL.md), [criminal-evidence-admissibility-analyst](../skills/criminal-evidence-admissibility-analyst/SKILL.md), [defence-strategy-planner](../skills/defence-strategy-planner/SKILL.md), [cross-examination-planner](../skills/cross-examination-planner/SKILL.md), [trial-readiness-checker](../skills/trial-readiness-checker/SKILL.md), [criminal-appeal-planner](../skills/criminal-appeal-planner/SKILL.md), and for India `legal-ai-skills:bail-advisor-and-drafter`, `legal-ai-skills:chargesheet-analyst`, `legal-ai-skills:discharge-application-drafter`, `legal-ai-skills:quashing-petition-drafter` and `legal-ai-skills:sentencing-analyst`.

## Helpful capability categories

Use [document sources](../integrations/document-sources.md) for the case file and [legal research](../integrations/legal-research.md) for offences, procedure and recent authority. Court portals may confirm listing and status where accessible.

## Execution sequence

1. **Liberty** (arrest-rights-advisor, bail skill): custody status, production deadline, bail. Output: liberty plan with deadlines.
2. **Allegations** (criminal-complaint-analyst): what is alleged and against whom. Output: allegations summary and early options.
3. **Offences** (offence-ingredients-analyst): ingredient-by-ingredient assessment. Output: offences table.
4. **Evidence** (criminal-evidence-admissibility-analyst; chargesheet-analyst in India). Output: admissibility challenges.
5. **Strategy** (defence-strategy-planner): defence theory, early exit routes, plea options. Output: strategy and action plan.
6. **Branch work**: discharge or quashing application; trial preparation with cross-examination-planner and trial-readiness-checker; or appeal with criminal-appeal-planner.

## Review checkpoints

1. Step 1 is reviewed immediately; liberty steps are not delayed for the rest of the analysis.
2. After step 3: the offence analysis is checked against the code in force on the offence date.
3. Before any filing: draft checked against the record.

## Verification

Jurisdiction Counsel verifies the code, provisions, classification and deadlines. Use [authority-validator](../skills/authority-validator/SKILL.md) for every authority cited.

## Escalation to human review

Escalate immediately: custody and production deadlines, imminent arrest, remand hearings, plea decisions, and every filing or appearance, which require an authorised advocate.

## Deliverable

Liberty plan, allegations and offences analysis, evidence challenges, defence strategy, draft applications for the branch, deadlines, gaps and verification status.

## Fallback behaviour

Without the charging document, work from the client's account, label it unverified, and request the document. Never advise on concealing evidence, influencing witnesses or misleading the court.
