# Contract Review and Negotiation

## Trigger and objective

Use when the user needs a commercial agreement reviewed and negotiated from a specified party's perspective. Deliver prioritised risks, concrete drafting and a usable negotiation plan.

## Required inputs

Agreement and schedules, represented party, jurisdiction or governing law, business objective and desired review depth. Useful optional inputs are the playbook, prior draft, commercial term sheet, risk tolerances, must-haves, alternatives and negotiation deadline.

## Agents and skills

The [Contracts Agent](../agents/contracts-agent.md) leads. Use the [Legal Research Agent](../agents/legal-research-agent.md) only for material legal questions and other specialists only where the agreement raises a genuine subject-matter issue.

Use [contract-reviewer](../skills/contract-reviewer/SKILL.md), then as needed [indemnity-liability-analyst](../skills/indemnity-liability-analyst/SKILL.md), [termination-analyst](../skills/termination-analyst/SKILL.md), [redline-proposer](../skills/redline-proposer/SKILL.md), [clause-comparator](../skills/clause-comparator/SKILL.md), [obligations-extractor](../skills/obligations-extractor/SKILL.md) and [negotiation-position-planner](../skills/negotiation-position-planner/SKILL.md).

## Helpful capability categories

[Document sources](../integrations/document-sources.md) may retrieve drafts, schedules and standards. [Email and calendar](../integrations/email-and-calendar.md) may locate authorised instructions or agreed positions. [Legal research](../integrations/legal-research.md) may verify mandatory law.

## Execution sequence

1. Confirm represented party, objective, governing law and review depth.
2. Confirm that the complete operative draft and referenced schedules are available; list missing material.
3. Review the agreement as an interdependent system, including definitions and cross-references.
4. Rank risks by legal exposure, commercial impact, likelihood and negotiating importance.
5. Draft complete proposed changes for priority issues, including consequential changes.
6. Prepare opening, fallback, minimum acceptable and walk-away positions from supplied commercial priorities. Do not invent a walk-away line.
7. Check the redlines and negotiation plan against each other and against the business objective.

Independent specialist questions may run in parallel, but the Contracts Agent must reconcile their advice into one contract position.

## Verification

Use [consistency-checker](../skills/consistency-checker/SKILL.md) for definitions, dates, amounts, cross-references and redline interactions. Use [assumption-flagger](../skills/assumption-flagger/SKILL.md) where instructions are incomplete, and verify material legal propositions against current primary authority.

## Deliverable

Provide an executive summary, prioritised risk table with clause locators, proposed replacement language, negotiation priorities and trades, information gaps and verification status.

## Fallback behaviour

Without subagents, perform the same sequence directly. Without connected sources, use uploaded files and request missing schedules or standards. If governing law or the represented party is unknown, do not issue directional legal conclusions or redlines until clarified; a neutral factual summary may still be possible.
