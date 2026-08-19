---
name: legal-research-planner
description: Turns a broad legal question into a research plan — the specific sub-questions it breaks into, the source hierarchy to work through (primary legislation, binding authority, persuasive authority, secondary commentary), the jurisdictional boundaries, and a search strategy — before any substantive research is carried out. Use for "how should we research this question", "plan out our research before we start", "what sources should we actually be checking for this", or "scope this research question before we dive in". Distinct from issue-spotter (works from a fact pattern to spot live issues, not a research question to a methodology). Precedes precedent-mapper, statutory-interpreter, comparative-analyst, and legislative-history-analyst, which execute the tasks this skill scopes.
---

# Legal Research Planner

## Purpose

Turn a broad question into a workable research plan before time is spent on it — breaking the question into sub-questions, establishing which sources actually matter and in what order of authority, fixing the jurisdictional scope, and setting a search strategy — so the substantive research that follows is targeted rather than exploratory.

## Required inputs

Obtain the broad question as the user has framed it, the purpose the research is for (a client opinion, an internal memo, a court submission, general knowledge-building), and any jurisdiction already known to be relevant.

Ask whether there is an attached fact pattern or live matter — if so, note that issue-spotter may be the better starting point for identifying what is actually live on those facts, and this skill is better suited to a research question that does not yet have (or does not need) a specific fact pattern attached.

## Method

1. Restate the broad question precisely, and confirm it with the user if the brief is genuinely too vague to scope — a question like "what's the law on this" is not precise enough to plan research against.
2. Break the question into the specific sub-questions it actually depends on. A single broad question is rarely one research task; identify each component that needs its own answer before the whole question can be addressed.
3. For each sub-question, identify the type of research task it is — statutory interpretation, case-law mapping, legislative history, cross-jurisdictional comparison, or general legal research — and note which specialist skill (statutory-interpreter, precedent-mapper, legislative-history-analyst, comparative-analyst) is suited to execute it, rather than attempting to answer it here.
4. Establish the jurisdictional boundary of the research explicitly — which jurisdiction or jurisdictions are actually in scope, and flag where the user has not specified this and it needs confirming before research starts, since research scoped to the wrong jurisdiction wastes the effort that follows.
5. Build the source hierarchy for this question: primary legislation and its current official text, binding judicial or administrative authority, persuasive authority from other jurisdictions or lower courts, and secondary commentary — in that order of weight, and noting which levels are actually likely to matter for this particular question.
6. Build a search strategy: what to search for, in what order, using what sources (official legislative databases, court reporting systems, regulator guidance, recognised secondary sources) — general enough to guide the work, not a substitute for actually doing it.
7. Identify what would count as a complete answer to the original question — so the person executing the research plan (or this skill's own later hand-off) knows when the research is actually done, not just when it has produced some results.
8. Flag any sub-question that looks likely to hit a research dead end — an area with sparse authority, contested law, or unavailable primary sources — so that risk is visible before time is spent rather than discovered partway through.

## Output

1. **Header.** Original question, purpose, jurisdiction(s) if confirmed, date.
2. **Sub-questions.** Each component question, in the order they should be tackled, with dependencies noted where one depends on another's answer.
3. **Task-to-skill map.** Sub-question | Research task type | Suited specialist skill.
4. **Jurisdictional scope.** Confirmed jurisdiction(s), or flagged as needing confirmation.
5. **Source hierarchy.** The levels of authority relevant to this question, in order of weight.
6. **Search strategy.** What to search, where, and in what order.
7. **Definition of complete.** What answering the original question actually requires.
8. **Risk flags.** Any sub-question likely to hit sparse or contested authority.

## Guardrails

- Do not execute the research itself. This skill plans it; hand off to the named specialist skill for execution.
- Do not assume a jurisdiction the user has not confirmed. Flag it as a scoping question.
- Do not treat the broad question as a single research task. Break it into its actual components before planning further.
- Do not name a source or authority from memory as though it were the result of research already done — this is a planning skill, not a substitute for actually retrieving sources.
- Do not omit the risk of a sub-question hitting sparse or contested authority; flag it up front rather than letting it surface as a surprise later.
