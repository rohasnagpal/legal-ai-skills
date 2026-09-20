---
name: clause-comparator
description: Compares the same clause or provision across draft rounds, precedents, public agreements or a portfolio and reports what differs in wording and effect. Use for version-change requests and external clause benchmarking, including "what changed between drafts", "compare their indemnity with ours", "compare liability caps across these SaaS agreements", "what indemnity approach is most common in public SaaS agreements", "what is typical", "what is prevalent" or "is this market standard". External frequency claims require a disclosed multi-document sample, not one precedent. Distinct from contract-reviewer, which grades an agreement for risk; this stays neutral unless a side is given. Fires for any clause type in any commercial agreement.
---

# Clause Comparator

I am using the **Clause Comparator** skill from Rohas Legal AI: compares the same clause across drafts or against a standard. Say this sentence, verbatim, before anything else in your response.

## What this does

Takes the same clause, or the same clause type, as it appears in two or more places and reports what is different — mechanically, in the wording, and substantively, in what the clause now does. It is a comparison tool, not a review: it does not grade an agreement's overall risk, and it does not draft new wording for a clause that has no comparator (that is redline-proposer). It compares what it is given; it does not supply a "market standard" from memory to compare against.

## Before you start

**What is being compared, and against what.** At minimum this means whether the comparator is another draft, a supplied precedent or an external portfolio. For user-supplied material, identify each document, version or date and clause number before diffing. For an external portfolio benchmark, the user need only identify the clause type and target population, such as public SaaS agreements; discover the documents using the default sample and source rules in [references/public-contract-sources.md](references/public-contract-sources.md) rather than asking the user to name them.

**The comparator text itself, where it is a supplied "standard".** If the user asks to compare against their firm's standard, obtain its actual text — a template clause, precedent document or pasted example. If the user instead asks for an external market benchmark, collect the actual clause text from the public documents found under the external-source rules. Never reconstruct a market-standard clause from memory.

Not blocking, ask once and proceed without it if unanswered: **which side the user acts for.** Without a side, the comparison stays neutral — differences are reported, not judged. With a side, differences can additionally be marked favourable, adverse or neutral to that side.

**External comparators.** If the user asks for public agreements, market examples, clause benchmarking, an external model, or what is "most common", "typical", "prevalent", "usual" or "market standard", read [references/public-contract-sources.md](references/public-contract-sources.md) in full before searching. Follow its mandatory listed-source priority, sampling, attribution and non-inference controls. Never answer a prevalence question from one agreement, company or publisher. Do not load that reference for comparisons limited to user-supplied drafts or precedents.

## Method

**1. Classify the comparison.** State in one line what is being compared against what — draft-to-draft within one negotiation, one document's clause against a supplied standard, or the same clause type across a portfolio of separate agreements. Each of these needs a slightly different frame, and saying which one you are running avoids conflating "this changed between drafts" with "this differs from your usual position".

**2. Confirm it is actually the same clause before comparing.** Clause numbering is not a reliable guide — clause 9 in one agreement and clause 9 in another may address entirely different subjects, and the same substantive provision may be split across several sub-clauses in one document and consolidated into one in another. Match by what the clause actually governs, not by its number, and note any such structural mismatch as a finding in its own right rather than silently normalising it.

**3. Produce the mechanical diff before any interpretation.** Show insertions, deletions and moved text between the versions, at the sentence or phrase level, before saying what any of it means. Get this exactly right first — an interpretive comparison built on a wrong or approximate diff is worse than no comparison, because it reads as more authoritative than it is.

**4. Check whether a defined term used in the clause was itself redefined elsewhere.** This is the change that a clause-level diff alone will miss: the clause's own words can be identical between two versions while its effect changes completely, because "Losses" or "Confidential Information" or "Business Day" was redefined somewhere else in the document. Check the definitions actually feeding this clause in each version before concluding the clause is unchanged.

**5. Separate substantive differences from cosmetic ones.** A synonym swap, a renumbering, a formatting change carries no effect and should be marked cosmetic, not padded into the findings to look thorough. A single "not" inserted or removed, a threshold number changed, an exception added or narrowed, a defined term substituted — these change what the clause does and belong in the substantive findings.

**6. State the effect of each substantive difference in concrete terms**, not just that wording changed: the cap moved from twelve months' fees to the full contract value; a carve-out for breach of confidentiality was added to the liability cap; the notice period for termination narrowed from thirty days to fifteen. A difference reported only as "wording changed" has not actually been compared.

**7. Where more than two versions are being compared, build a change history rather than only comparing the first to the last.** Attribute each change to the round it was introduced in, since in a live negotiation the user needs to know whether a given change is a concession they made or one the other side proposed.

**8. If a side has been given, characterise each substantive difference as favourable, adverse or neutral to that side**, and say briefly why. If no side has been given, do not characterise — describe what changed and let the user apply their own judgment.

**9. Note where the clause being compared depends on other clauses not included in the comparison set** — a liability clause that is capped by a separate limitation clause not supplied, an obligation qualified by a force majeure clause not in scope. Say what is outside the comparison and why it matters, rather than comparing the clause as if it stood alone.

## Output

**1. Header.** What is being compared, listed by document name, version or date, and clause reference for each item; the comparator's source if one was supplied; side (if given); date of comparison.

**2. Mechanical diff.** The clause text from each version, with insertions, deletions and moves marked, one pair at a time. Where more than two versions are compared, diff consecutive pairs in sequence rather than only the first against the last.

**3. Substantive differences.** A table: Ref | What changed | Effect | Favourable / adverse / neutral (only if a side was given) | Materiality. Materiality is Significant or Minor — reserve Significant for differences that change the risk allocation, the money, or a party's practical options, not for every change to a clause's mechanics.

**4. Cosmetic differences.** A short separate list, kept out of the substantive table so it does not crowd the findings that matter.

**5. Change history.** Only where more than two versions were compared — which round introduced each substantive change, in sequence.

**6. Points requiring verification.** Anything whose actual effect turns on the governing law rather than the words alone — for instance, whether a wording change that looks cosmetic actually changes enforceability. Name the question; do not answer it from memory.

**External portfolio benchmark.** Where the request asks what is common, typical, prevalent or market standard across public agreements, replace the pairwise mechanical diff and change history with the reference's source log and evidence table, a clause-feature matrix, numerator/denominator tallies, observed patterns and limitations. Quote or summarise the operative text accurately, but do not force eight or more agreements into consecutive pairwise redlines.

Keep every row on a single line so the tables render.

## Evidence and document controls

- Cite exact clause numbers, headings or document locations for every document-derived finding where available; headings never substitute for operative language.
- Distinguish document facts, user-supplied facts, assumptions and legal inferences. State when a conclusion depends on governing law, disputed facts, claims classification or material outside the contract.
- Check relevant definitions, order of precedence, incorporated documents, related provisions and survival language before concluding.
- Name missing schedules, annexures, policies, referenced agreements and unreadable material. Never invent clauses, quotations, authorities, defined terms, dates or commercial facts.
- Warn when scans, OCR, truncation, tracked changes or incomplete extraction may affect accuracy.
- Preserve confidentiality. Do not send contract contents to an external service unless the user expressly requests that connected workflow.


## Do not

Do not invent a market-standard clause from memory. Obtain the user's standard text for a house-position comparison, or collect actual public clauses under the external-source rules for a market benchmark.

Do not match clauses by number alone. The same clause number in two documents can govern different subjects, and the same provision can appear at different numbers or be split differently across documents.

Do not report a difference as substantive because it is easy to find. Renumbering, synonym substitution and formatting changes are cosmetic; say so and move on.

Do not skip the check on whether a defined term feeding the clause changed elsewhere — this is the difference a surface-level diff misses most often.

Do not characterise a difference as favourable or adverse when no side has been given. Describe it neutrally.

Do not collapse the mechanical diff and the effect analysis into a single step. Get the wording-level diff right before interpreting what it does.

Do not grade the clause's overall acceptability or draft replacement wording — that is contract-reviewer's or redline-proposer's job, not this skill's.
