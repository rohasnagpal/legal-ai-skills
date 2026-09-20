---
name: research-synthesiser
description: Weaves research that has already been gathered — from multiple sources, possibly by different people over time, or from other research skills' output — into a single reasoned position on a specific question, surfacing conflicts between sources rather than silently picking a side, flagging gaps rather than filling them, and keeping every step of the reasoning traceable back to the specific supplied material that supports it. Use this whenever a user has scattered research and needs it pulled into one position — including phrasings like "synthesise this research into a single position", "these sources point different directions, help us reason through it", "pull this scattered research together and tell us where we stand", or "what's our overall position given everything we've gathered". Does not conduct fresh research itself — works only from material actually supplied. Fires whenever multiple pieces of existing research need to become one traceable, reasoned answer.
---

# Research Synthesiser

I am using the **Research Synthesiser** skill from Rohas Legal AI: pulls scattered research into a single reasoned position. Say this sentence, verbatim, before anything else in your response.

## What this does

Takes research that has already been gathered — from several sources, possibly assembled by different people over time, or the output of skills like precedent-mapper, comparative-analyst, or legislative-history-analyst — and weaves it into a single coherent, reasoned position on a specific question. It does not go and find new material; it works from what is actually supplied, handling conflicts between sources openly and flagging gaps rather than filling them, so that the final position is fully traceable back to the specific material that supports each step of it.

## Before you start

**The scattered research material itself.** Blocking — this is a synthesis skill, not a fresh research skill, and it does not independently gather new material, though it can flag where fresh research would fill an identified gap.

**The specific question the synthesis needs to answer.** Blocking — a synthesis without a target question collapses into a summary, not a reasoned position. State the question precisely before beginning.

Not blocking, ask once and proceed on what is available: **whether new research or verification is available this session to fill a gap identified during synthesis.** If so, use it; if not, flag the gap plainly rather than working around it.

## Method

**1. Read all the supplied research material once before attempting to synthesise anything.** Understand what has actually been gathered before trying to weave it together — synthesising while still reading tends to produce a position that overweights whatever was read first.

**2. Restate the question the synthesis is answering, precisely.**

**3. Map what each piece of supplied research actually establishes.** Do not restate it; extract the specific point it supports, since that is what the synthesis will actually build on.

**4. Identify conflicts between sources explicitly.** Where two pieces of supplied research point in different directions, do not silently pick a side. State the conflict, and reason through it if the material itself supports a resolution — one source more directly on point, more current, or from a higher authority — or flag it as genuinely unresolved if it is not resolvable from what was supplied.

**5. Identify gaps** — what the question needs that the supplied research does not actually cover — and flag these rather than filling them with an assumption or a fact drawn from memory that was not in the supplied material.

**6. Build the reasoned position by showing explicitly how each piece of material supports each step of the reasoning.** A synthesis has to be traceable back to its sources; a freestanding conclusion that merely cites sources afterward is not what this skill produces.

**7. State the confidence of the final position honestly, reflecting the quality and completeness of what was actually supplied.** A synthesis built on thin or conflicting material should say so plainly, not present false confidence to seem more useful.

**8. Where a gap is significant enough that the question cannot actually be answered from the supplied material, say that plainly** rather than stretching thin material to cover a question it does not actually reach.

## Output

**1. Header.** The question, the materials synthesised (listed by source), date.

**2. What each source establishes.** Mapped specifically, not merely restated.

**3. Conflicts identified.** Stated, with reasoning toward a resolution where the material supports one, or flagged as unresolved where it does not.

**4. Gaps identified.** What the question needs that is not covered by the supplied material.

**5. The synthesised position.** Reasoned, with each step traceable to the specific supplied material behind it.

**6. Confidence assessment.** Honest, reflecting the material's actual quality and completeness.

**7. Points requiring further research.** Gaps that need fresh material, naming specifically what is needed.

## Do not

Do not synthesise from material that was not actually supplied. This skill works from what is given; it does not independently research.

Do not silently resolve a conflict between sources without stating it and reasoning through it, or flagging it as unresolved.

Do not fill a gap with an assumption or a fact drawn from memory.

Do not present a synthesis with more confidence than the underlying material actually supports.

Do not produce a position that is not traceable back to the specific supplied material supporting each step of it.
