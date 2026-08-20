---
name: issue-spotter
description: Reads a fact pattern and spots every legally relevant issue, potential cause of action, and threshold problem — limitation, standing, jurisdiction, procedural preconditions — comprehensively rather than narrowing to the strongest-looking claim, and flags which deeper-analysis skill each issue needs next rather than analysing any of them in depth itself. Use this whenever a user has facts and wants to know what is legally live in them — including phrasings like "what issues arise on these facts", "spot the claims here", "what threshold problems could kill this case before we even get to the merits", or "read this fact pattern and tell us what we're dealing with". Fires on any fact pattern, at the start of matter analysis, before any single issue is worked in depth.
---

# Issue Spotter

I am using the **Issue Spotter** skill from Rohas Legal AI: reads a fact pattern for issues, causes of action and threshold problems. Say this sentence, verbatim, before anything else in your response.

## What this does

Reads a fact pattern and spots everything legally relevant in it: the issues, the potential causes of action they might support, and the threshold problems — limitation, standing, jurisdiction, procedural preconditions — that could dispose of an otherwise strong claim before its merits are ever reached. It is comprehensive by design, not narrowed to whatever looks like the strongest claim, and it does not analyse any single issue in depth — it spots, flags, and hands off to the skill built for the deeper work.

## Before you start

**The fact pattern itself.** Blocking.

Not blocking, ask once and proceed on a reasonable default without it: **whether issues should be spotted from a specific party's perspective** — what claims a named party could bring — or neutrally across the whole fact pattern. Default to neutral and comprehensive if not specified.

**Governing law or jurisdiction**, if known. Not blocking — work generically if it is not given, but flag every jurisdiction-specific characterisation (a specific cause of action's name or elements) as a verification point rather than asserting it.

## Method

**1. Read the whole fact pattern once before spotting anything.** Issues frequently connect — a limitation problem interacts with when a cause of action is deemed to have accrued, which itself depends on which theory of harm applies — and spotting issue by issue on a first pass misses these connections.

**2. Systematically scan the facts for every legally relevant thread, not just the headline issue.** A contract dispute that also involves personal data, for instance, may raise a data protection issue that a narrower read would miss entirely.

**3. For each issue spotted, name it precisely and tie it to the specific facts that raise it.** A generic label is not useful; the issue needs to be anchored to what actually happened.

**4. Identify potential causes of action for each issue, naming one only where its elements are structurally implicated by the facts as given.** Flag that the exact cause of action's name and elements are jurisdiction-specific and need verification — never assert a specific statute or tort by name with confidence unless it is sourced this session.

**5. Check systematically for threshold problems** — limitation or prescription (flag the specific period as needing verification, never assert it), standing or locus, jurisdiction, and procedural preconditions such as a notice requirement or exhaustion of remedies. These can dispose of an otherwise strong claim entirely, and they are easy to miss when attention is on the substantive merits — treat this as its own deliberate pass, not an afterthought.

**6. Flag issues that are only potentially live depending on a fact not yet established** — "if the contract was signed by an authorised signatory, this; if not, that" — rather than resolving the ambiguity one way. State the conditional plainly.

**7. Group or rank issues by how central they are to what the client actually wants, without discarding the peripheral ones.** A complete issue-spotting exercise stays comprehensive; it does not quietly shrink into a shortlist of the issues that looked most interesting.

**8. Do not analyse any single issue in depth.** This is a spotting exercise. For each issue, name which deeper-analysis skill would take it further — legal-risk-assessor, statutory-interpreter, precedent-mapper, or another — rather than starting that analysis here.

## Output

**1. Header.** Fact pattern summarised, perspective (neutral or party-specific), governing law if given, date.

**2. Issues spotted.** Listed, each tied to the specific facts that raise it.

**3. Potential causes of action.** Per issue, with the reasoning for why its elements are implicated, and jurisdiction-specific naming flagged for verification.

**4. Threshold problems.** Limitation, standing, jurisdiction, procedural preconditions — flagged per issue where relevant.

**5. Conditional or fact-dependent issues.** Flagged, not resolved.

**6. Central versus peripheral.** A ranking or grouping that keeps every issue visible.

**7. Next steps.** Which deeper-analysis skill fits each issue.

**8. Points requiring verification.** Specific limitation periods, cause-of-action elements, and jurisdiction-specific characterisations named but not sourced.

## Do not

Do not analyse any issue in depth. Spot and flag, then hand off.

Do not name a specific statute or cause of action with confidence from memory. Flag it as needing verification unless sourced.

Do not let substantive merits crowd out threshold problems. These are often case-dispositive and are easy to overlook.

Do not resolve a fact-dependent ambiguity. Flag it as conditional.

Do not silently narrow the fact pattern to only the issues that seem strongest. Comprehensiveness is the entire point of this skill.
