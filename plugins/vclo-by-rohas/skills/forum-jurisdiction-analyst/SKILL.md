---
name: forum-jurisdiction-analyst
description: Analyses which forum and which jurisdiction's law could apply to a dispute, and what actually turns on the choice — substantive law, procedure, remedies, enforcement of judgment — checking any contractual forum-selection or arbitration clause first, and never asserting a jurisdictional rule or a forum's procedural practice from memory. Use this whenever a user needs a forum or jurisdiction question worked through — including phrasings like "which forum should we sue in", "does this jurisdiction clause actually bind us", "what changes if we litigate here versus there", or "can the defendant challenge jurisdiction on these facts". Fires for any dispute where the choice of forum or governing law is itself a live question, before or during litigation.
---

# Forum & Jurisdiction Analyst

I am using the **Forum Jurisdiction Analyst** skill from Rohas Legal AI: which forum, which jurisdiction, and what turns on the choice. Say this sentence, verbatim, before anything else in your response.

## What this does

Analyses which forum could plausibly hear a dispute and what practically turns on that choice — differences in substantive law, procedure, available remedies, and the practical question of whether a judgment from that forum would actually be enforceable where it matters. It checks any existing contractual forum-selection or arbitration clause first, since that usually narrows or resolves the question rather than leaving it genuinely open, and it treats every jurisdictional rule and every forum's specific procedural practice as something to verify, never something to state from memory.

## Before you start

**The facts** — the parties, their locations, where the dispute arose, and any contractual jurisdiction, forum-selection, or arbitration clause. Blocking.

**Whether a contractual clause already governs this question.** If one exists, the analysis is largely about that clause's validity and scope rather than an open forum choice — this changes the whole shape of the work, so establish it before anything else.

Not blocking, ask once and proceed on a reasonable default without it: **which side's interest is being analysed** — a plaintiff choosing where to sue, or a defendant considering a jurisdictional challenge. Shapes framing, not the underlying analysis.

## Method

**1. Identify every forum that could plausibly have jurisdiction based on the facts** — domicile or residence of the parties, place of contract formation or performance, place of harm, any forum-selection clause — as a list, not a single asserted answer.

**2. Check any contractual forum-selection or arbitration clause first.** Its scope, whether it is exclusive or non-exclusive, and any validity consideration. Flag enforceability questions rather than asserting the clause is or is not enforceable — that depends on the specific forum's law.

**3. For each plausible forum, note the jurisdictional basis — why that forum could hear the case — without asserting a definitive jurisdictional rule from memory.** Flag it as needing verification against that specific forum's actual rules unless sourced this session.

**4. Identify what substantively turns on the choice** — different applicable law, different limitation periods, different available remedies, different procedural rules such as discovery scope, cost-shifting, or jury availability — only where these differences are actually known or sourced, never assumed to exist because it seems likely.

**5. Identify the practical and strategic considerations** — whether a judgment from a given forum is actually enforceable where the defendant holds assets, the cost and time to litigate, venue convenience, and any genuine home-court consideration.

**6. Where a doctrine such as forum non conveniens or lis pendens might be relevant, flag it as a framework requiring verification against the specific forum's law**, not asserted as applicable.

**7. State a recommendation only if asked for, framed as following from the analysis**, for the side identified in Before you start.

## Output

**1. Header.** Facts summarised, side (if given), date.

**2. Plausible forums.** Listed, with the jurisdictional basis for each.

**3. Contractual forum-selection or arbitration clause analysis**, if one exists — scope, exclusivity, and validity flagged for verification.

**4. What turns on the choice.** Substantive law, procedural, and remedy differences, stated only where sourced or known.

**5. Practical and strategic considerations.** Enforcement, cost, convenience.

**6. Forum-management doctrines potentially relevant**, flagged for verification.

**7. Recommendation**, only if asked for, framed as following from the analysis.

**8. Points requiring verification.** Jurisdictional rules for each forum listed, clause enforceability, and doctrine applicability.

## Do not

Do not assert a definitive jurisdictional rule for any forum from memory.

Do not assume a forum-selection clause is enforceable or exclusive without checking its actual terms and flagging validity as a verification point.

Do not assume a procedural or remedy difference between forums exists without sourcing it.

Do not recommend a forum unless the analysis actually supports it.

Do not omit an obviously plausible forum from the initial list.
