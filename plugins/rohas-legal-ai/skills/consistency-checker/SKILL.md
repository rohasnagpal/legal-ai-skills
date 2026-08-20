---
name: consistency-checker
description: Checks a document or a set of documents for internal consistency — the same fact stated the same way everywhere, dates that don't contradict each other, defined terms used consistently, and figures that match across every mention — and flags every discrepancy found without silently resolving which version is correct. Use this whenever a document set needs a consistency audit — including phrasings like "check these documents for consistency before we file them", "do the dates in this bundle actually line up", "make sure this defined term is used the same way throughout", "check the figures in this agreement match the schedule", or "cross-check this document set for contradictions". Distinct from citation-integrity-checker, which is about external authority, and assumption-flagger, which is about unstated premises — this is about internal self-consistency of what is actually stated. Fires on any single long document or document set, in any practice area.
---

# Consistency Checker

I am using the **Consistency Checker** skill from Rohas Legal AI: checks facts, dates, defined terms and figures across a document set. Say this sentence, verbatim, before anything else in your response.

## What this does

Checks a document, or a set of documents, for internal consistency: the same fact given the same way everywhere it appears, dates that do not contradict each other or create an impossible sequence, defined terms used the same way throughout, and figures — a price, a quantity, a percentage — that match across every mention. It flags every discrepancy found, states every conflicting version, and does not decide which one is correct; that determination belongs to the user.

## Before you start

**The document or document set.** Ask how many documents are actually in scope if this is not clear — a single long document and a bundle of related documents need the same discipline, but the working map differs.

Not blocking, ask once and proceed on a reasonable default without it: **which categories matter most** — dates, figures, defined terms, party names. Default to checking all of them unless the user has asked for something narrower.

## Method

**1. Read every document in the set once before checking anything**, building a working map of what is stated where. A discrepancy is often only visible once the whole set is in view; checking document by document in isolation misses contradictions between them.

**2. Extract every date mentioned, with what it refers to and where it appears, and check for contradiction** — the same event given two different dates, or a sequence of dates that is internally impossible, such as an event dated after a deadline that depended on it.

**3. Extract every defined term and check it is used consistently** — the same term always referenced the same way, not used in an inconsistent sense in different places, and not conflated with a similar but different term.

**4. Extract every figure that appears more than once — a price, a quantity, a percentage — and check all instances match.** Where a figure is derived from others, such as a total built from line items, check the arithmetic itself.

**5. Extract party names and identifying details and check they are consistent across the set** — the same entity referred to the same way throughout, and not conflated with an affiliate or a similarly named entity.

**6. For every discrepancy found, state every conflicting version exactly as it appears, and exactly where each appears** — document, clause, or page. Do not resolve which version is correct; that is the user's call, not this skill's.

**7. Distinguish a genuine contradiction from a difference the document set itself explains** — a price stated inclusive of tax in one place and exclusive in another, where the document says so. Flag apparent inconsistencies, but note where the set itself accounts for the difference, so a real error is not lost among things that were never actually wrong.

**8. Grade every discrepancy by materiality.** A one-day date discrepancy in a background recital is not the same problem as a contradiction in the amount actually payable, and the output should make that difference obvious at a glance.

## Output

**1. Header.** Documents checked, listed by name and version, date.

**2. Discrepancies.** A table: Category (date / defined term / figure / party name) | What is inconsistent | Where each version appears | Materiality (Significant / Minor).

**3. Explained differences.** Apparent inconsistencies the document set itself accounts for, listed separately so they are not mistaken for errors.

**4. Summary.** The handful of discrepancies that actually matter, in prose.

## Do not

Do not resolve which version of a contradiction is correct. Report every version and let the user decide.

Do not over-flag a difference the document set itself explains, such as clearly labelled tax-inclusive versus exclusive figures.

Do not narrow the check to only the categories the user mentioned unless they actually asked for something narrower than a full check.

Do not present every discrepancy as equally material. Grade them, and make the significant ones easy to find.
