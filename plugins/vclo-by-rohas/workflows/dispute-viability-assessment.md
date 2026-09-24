# Dispute Viability Assessment

## Trigger and objective

Use when a client or lawyer asks whether and how to pursue, defend, settle or further investigate a threatened or existing civil, commercial, regulatory or arbitral dispute. Produce a source-backed, evidence-aware and adversarially tested decision-support report without reducing the answer to “sue” or “do not sue.”

## Required inputs

Represented side and objective; opponents and relevant third parties; jurisdiction candidates and event locations; governing-law, forum and dispute-resolution clauses; key event, knowledge and notice dates; dispute value and desired relief; current procedural posture; available documents and evidence; known deadlines; settlement position; and likely recovery or enforcement locations.

Begin on the available record. Request only missing information that could materially alter jurisdiction, limitation, claim viability, evidence, remedy, recovery, enforcement or the immediate action required.

## Agents and skills

The [Litigation Agent](../agents/litigation-agent.md) leads court-dispute assessments. The [Dispute Resolution Agent](../agents/dispute-resolution-agent.md) joins where arbitration, mediation or another ADR route is material. The [Legal Research Agent](../agents/legal-research-agent.md) verifies substantive and procedural law. Use the applicable jurisdiction counsel before applying local rules.

The consolidating skill is [litigation-viability-assessor](../skills/litigation-viability-assessor/SKILL.md). It may coordinate [chronology-builder](../skills/chronology-builder/SKILL.md), [forum-jurisdiction-analyst](../skills/forum-jurisdiction-analyst/SKILL.md), [issue-spotter](../skills/issue-spotter/SKILL.md), [evidence-organizer](../skills/evidence-organizer/SKILL.md), [limitation-checker](../skills/limitation-checker/SKILL.md), [case-law-analyst](../skills/case-law-analyst/SKILL.md), [damages-quantifier](../skills/damages-quantifier/SKILL.md), [recovery-strategy-planner](../skills/recovery-strategy-planner/SKILL.md), [settlement-evaluator](../skills/settlement-evaluator/SKILL.md), [adversarial-reviewer](../skills/adversarial-reviewer/SKILL.md), [authority-validator](../skills/authority-validator/SKILL.md), [citation-integrity-checker](../skills/citation-integrity-checker/SKILL.md) and [legal-document-producer](../skills/legal-document-producer/SKILL.md) where each is genuinely needed.

## Helpful capability categories

[Document sources](../integrations/document-sources.md) may retrieve the authorised record. [Legal research](../integrations/legal-research.md) supports current and historical primary-law verification. [Company registries](../integrations/company-registries.md) may assist entity identification but do not prove solvency or asset availability. [Document production](../integrations/document-production.md) may create the final HTML, DOCX or PDF report when the required tools are available.

## Execution sequence

1. Define the decision, represented side, scope, record cutoff and material uncertainties.
2. Build a source inventory, document index and chronology; distinguish facts, allegations, disputes, assumptions and missing material.
3. Resolve governing-law, forum, subnational jurisdiction, arbitration and conflicts questions as far as the record permits.
4. Select the applicable jurisdiction sources; verify current and historically relevant law, procedure and authority level.
5. For each credible claim, defence and counterclaim, map legal elements to supporting, contrary and missing evidence.
6. Analyse limitation, notices, pre-action duties, exhaustion, arbitration preconditions, service, filing and urgent interim relief using alternative date scenarios where necessary.
7. Analyse remedies, supported quantum, causation, mitigation, caps and proof.
8. Assess practical benefit separately: opponent solvency, assets, insurance, enforcement route, cross-border issues, cost, time, complexity, reputation and commercial relationships.
9. Build the strongest reasonable opposing case and test material adverse authority, evidentiary weaknesses and procedural objections.
10. Compare only realistic litigation, arbitration, ADR, regulatory and investigation routes; identify the facts or decisions that would change the preferred route.
11. Verify material authorities, citations, assumptions, dates and internal consistency.
12. Produce a concise preliminary assessment and consolidated Litigation Viability Report with a lawyer briefing note and source-provenance record.

Independent fact, law, evidence, procedure and enforcement workstreams may run in parallel only after a common scope, chronology, jurisdiction hypothesis and source inventory are fixed. The lead must reconcile contradictions rather than concatenate outputs.

## Verification and quality gate

Confirm jurisdiction and relevant date; verify material legislation, cases, procedure and limitation against authoritative sources; consider adverse authority; trace each factual conclusion to the record; identify contrary and missing evidence; test counterclaims and the strongest opposing case; separate remedy from recovery; and avoid unsupported cost, duration, solvency, insurance or asset assertions.

Use evidence labels—Strong, Moderate, Weak, Missing and Potentially Adverse—with reasons, not numerical win probabilities. Use urgent flags only where supported. Set report metadata `sources_verified` to true only when every material authority relied upon was checked.

## Deliverable

Provide:

1. a concise preliminary litigation assessment;
2. a full Litigation Viability Report covering scope, chronology, jurisdiction, credible claims and defences, law, evidence, opposing case, limitation, procedure, remedies, practicality, recovery, enforcement, alternatives, missing information and next steps;
3. a lawyer briefing note;
4. a bibliography and source-provenance record; and
5. HTML, DOCX or PDF only when the requested format was actually generated and checked.

## Fallback behaviour

Without subagents, execute the same workstreams sequentially. Without connected documents, work from supplied files and identify the missing record. Without live research, organise facts, review documents, map evidence and prepare research questions, but label current law, authority, procedure and limitation as unverified. Without a document renderer, deliver structured editable content and do not claim that a formatted report file exists.
