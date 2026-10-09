---
name: precedent-mapper
description: Maps the authorities on a specific legal point and how they relate to each other — which follows which, which distinguishes or overrules another, where a genuine split exists — sourcing every case's existence, citation, and holding only from material retrieved this session or supplied by the user. Use this whenever a user needs the case law on a point actually mapped rather than summarised — including phrasings like "map the authorities on this point", "how do these cases relate to each other", "is there a split in the case law here", or "which of these decisions is still good law". Fires for any point needing its authorities mapped, in any jurisdiction — and says plainly when it cannot map authorities without sources, rather than asserting a case's existence or holding from memory.
---

# Precedent Mapper

I am using the **Precedent Mapper** skill from Rohas Legal AI: maps the authorities on a point and how they relate. Say this sentence, verbatim, before anything else in your response.

## What this does

Maps the authorities bearing on one specific legal point: what each case actually holds on that point, and — the part a simple list does not give you — how the authorities relate to each other, which follows or applies another, which distinguishes it and on what basis, which overrules or has been overruled, and where a genuine unaddressed conflict exists. Case names, citations, and holdings are prime targets for confident-sounding fabrication, so every authority in the map rests on material actually sourced this session or supplied by the user, never on memory.

## Before you start

**The precise point the map is being built around.** A map of "everything about contract law" is not usable; the point needs to be specific enough that an authority either bears on it or does not.

**Whether research tools are available this session, or whether the user is supplying the authorities.** If neither, say plainly that authorities cannot be mapped without sources, and do not produce a map from memory.

Not blocking, ask once and proceed on a reasonable default without it: **how many authorities, or what time period, the map should cover.** An unbounded "map everything" invites an incomplete result presented as though it were complete; bound the scope explicitly.

## Method

**1. Confirm the precise point the map is being built around** before locating a single authority.

**2. Identify authorities only from sourced material — retrieved this session or supplied by the user.** Never assert that a case exists, state its citation, or state its holding from memory.

**3. For each authority, state precisely: its holding on the specific point** — not a general summary of the whole case — **and its precedential weight**: which court decided it, and whether it is binding or merely persuasive relative to the jurisdiction in question.

**4. Map the relationships between authorities explicitly.** Which case follows or applies another; which distinguishes another, and on what stated basis; which overrules or has been overruled; which conflicts with another without either addressing the conflict. This relationship layer is the entire value of a map over a list, and it needs to be stated precisely, never implied or left for the reader to infer.

**5. Identify the current state of the law on the point as it follows from the mapped authorities** — a single clear rule, a split, or an evolving trend — stated as a conclusion that follows from the map, not as an independent assertion sitting alongside it.

**6. Flag where an authority's current validity is uncertain** — potentially overruled by implication, subject to a pending appeal, criticised but not formally overruled — wherever the sourced material actually indicates this.

**7. Note gaps plainly** — a sub-question the mapped authorities do not actually resolve, or a point where research access was limited — rather than letting the map imply a completeness it does not have.

## Output

**1. Header.** The point, jurisdiction, date, sourcing mode.

**2. Authorities.** Each with its citation (sourced), court or level, and its holding on the specific point.

**3. Relationship map.** A table: Authority | Relationship | To which authority | Basis — follows, distinguishes, overrules, or conflicts, stated explicitly.

**4. Current state of the law.** Derived from the map, not asserted independently of it.

**5. Uncertain validity.** Any authority flagged for its current status.

**6. Gaps.** What the map does not resolve, or where research access was limited.

**7. Points requiring verification.** Currency of any authority, and anything not fully sourced this session.

## Do not

Do not assert a case's existence, citation, or holding from memory.

Do not state a general case summary in place of the holding on the specific point being mapped.

Do not imply a relationship between authorities — follows, distinguishes, overrules — without that relationship being sourced.

Do not present the map as exhaustive if research access was limited. Flag the gap.

Do not resolve a genuine split in authority into a false single rule.
