---
name: legal-opinion-drafter
description: Drafts a structured written legal opinion — the question presented, the facts relied on, the analysis, the conclusion, and the assumptions and limitations it depends on. Includes a tax-opinion mode adding the risk-characterisation, exposure-if-challenged, and disclosure-obligation dimensions a tax position specifically requires. Use for "write an opinion on whether this clause is enforceable", "prepare a formal opinion for the lender on this security package", "write a tax opinion on this deduction, with the risk stated", or "I need something the board can rely on". Holds the highest discipline on separating document analysis from legal conclusion, never citing an authority not retrieved or supplied, and stating every assumption explicitly. Where substantive tax analysis is needed first (FEMA, GST, treaty, transfer pricing), take that as an input from the relevant tax skill. Fires for any formal opinion request, legal or tax.
---

# Legal Opinion Drafter

I am using the **Legal Opinion Drafter** skill from Rohas Legal AI: structured written legal or tax opinion with question, analysis, conclusion and caveats — tax opinions add a risk-characterisation and exposure step. Say this sentence, verbatim, before anything else in your response.

## What this does

Drafts a structured written opinion: the precise question being answered, the facts it is based on, issue-by-issue analysis, a conclusion stated with the degree of confidence the analysis actually supports, and the assumptions and limitations the opinion depends on. An opinion is understood by its reader to be reliable within its stated scope — so a vague question, an unstated assumption, or a citation that turns out to be wrong does more damage here than in almost any other document this practice pack produces.

For a tax opinion specifically, this skill adds a second dimension a general legal opinion does not always need: a stated risk characterisation of the position itself, separate from the substantive confidence in the legal analysis — see Tax opinion mode below. The opinion-drafting discipline (question, facts, analysis, conclusion, assumptions) is the same either way; only the additional tax-specific steps differ.

## Before you start

**The precise question presented.** A vague brief produces a vague opinion. "Is this enforceable" or "is this deductible" is not precise enough — enforceable against whom, under which law, on what facts; deductible by whom, against what income, in which year. If the question as given is not precise, work with the user to state it precisely before drafting anything; do not silently narrow or reinterpret it without flagging that you have done so.

**Whether this is a tax opinion.** If so, apply Tax opinion mode below in addition to the general method. Ask if not clear from the brief.

**The facts the opinion is to be based on.** Supplied by the client or instructing lawyer. The opinion has to rest on stated facts, not assumed ones — if the facts are incomplete, the opinion should say so explicitly and state what it is assuming in their place, rather than filling gaps with a plausible-sounding account. Where the underlying substantive analysis already exists — output from a FEMA, GST, treaty, transfer-pricing, or other specialist skill — treat that as a supplied input to work from, not something to re-derive from scratch.

**Governing law, and which mode the opinion runs in.** *Document-based*: analysing the words and their internal coherence, with every point that turns on the law itself left as an open question in the limitations section. *Law-based*: legal conclusions resting on current authoritative sources retrieved in this session or supplied by the user, cited specifically. Law-based mode runs only where the user asks for it and research tools or authorities are actually available. Never state a statute, case, rule, rate, provision, or threshold from memory in either mode. For a tax opinion, never assume the governing tax law or jurisdiction — ask, unless the user has stated it.

Not blocking, ask once and proceed on a reasonable default without it: **the standard the opinion is written to** — an internal advisory memo, or a formal reliance opinion for a third party (a lender, a counterparty, a regulator, or — for a tax opinion — a filing position or an auditor). A reliance opinion carries different conventions — a named addressee, stated reliance parties, more exacting qualifications — and different stakes, so ask if it is not obvious from the brief.

## Method

**1. Restate the question presented precisely**, and confirm it with the user before proceeding if the brief was ambiguous. An opinion that answers the wrong question is worse than none, because it will be relied on as if it answered the right one.

**2. State the facts relied on, separately from the analysis**, and mark which are confirmed and which are assumed. An opinion is understood to depend on its stated facts; if a stated fact later proves wrong, the opinion is understood not to apply, so this separation is not a formality.

**3. Identify every issue the question actually raises**, and work through each one systematically before drafting the conclusion. Do not let the conclusion take shape before the analysis is complete.

**4. Keep legal conclusions strictly separated from document or factual analysis at every point**, and cite only authorities that are current, retrieved in this session, or supplied by the user — cited specifically, never from memory. Where a needed citation is not available, say so and put the gap in the limitations section rather than answering from general recollection.

**5. Address the genuine counter-argument or opposing reading on any point that is actually arguable** — for a tax opinion, this means the tax authority's likely position specifically, not only the reading that favours the client. An opinion that presents only the favourable reading is not reasoned, it is advocacy, and a client relying on it deserves to know where the real uncertainty sits.

**6. State the conclusion plainly, with the degree of confidence the analysis actually supports** — certain, likely, arguable, or unclear. Do not inflate confidence to make the opinion feel more useful, and do not hedge a genuinely clear answer into false uncertainty to seem more cautious.

**7. State every assumption and limitation the opinion depends on, explicitly and completely** — the facts assumed, the law as of a stated date, the jurisdiction, and what the opinion does not address. An opinion silent on its own scope invites reliance well beyond what it actually supports. For a tax opinion, the date the law is stated as of matters more than in most other opinions, since rates and provisions change frequently — never omit it.

**8. Where the answer turns on a fact not yet known or a document not yet supplied, say so and state what would change the conclusion.** Do not assume the missing fact favourably to reach a cleaner answer.

## Tax opinion mode

Apply in addition to the general method above, for any tax opinion.

**9. State the conclusion with two things, not one: the substantive confidence level from step 6, and a separate risk characterisation of the position itself.** A tax position can be legally well-reasoned and still carry a real risk of challenge; state both. Do not invent a formal risk-standard label — such as asserting that a "more likely than not" or "reasonable basis" standard applies — unless the user has confirmed that is the actual standard used in the applicable jurisdiction. Where no such formal standard has been confirmed, describe the risk in plain qualitative terms and flag which formal standard, if any, governs as a verification point.

**10. State any penalty or interest exposure the position could carry if successfully challenged, only where the facts or sourced law actually support a stated figure or mechanism.** Do not invent a penalty rate or exposure figure.

**11. Flag any disclosure or reportable-position obligation the position might trigger as a verification point**, rather than asserting whether disclosure is required.

## Output

**1. Header.** Addressee, matter, date, the question or questions presented restated precisely — and, for a tax opinion, the governing tax law and jurisdiction, the period involved, and the date the law is stated as of.

**2. Facts relied on.** Listed, with confirmed and assumed facts distinguished.

**3. Analysis.** Issue by issue, reasoning shown in full, counter-arguments (or, for tax, the tax authority's likely position) addressed, citations included only where sourced or verified this session.

**4. Conclusion.** Stated plainly, with the confidence level the analysis actually supports — and, for a tax opinion, the risk characterisation of the position stated separately and plainly alongside it.

**5. Exposure if challenged**, tax opinion only. Penalty or interest exposure, only where supported by sourced law or supplied facts.

**6. Assumptions and limitations.** What the opinion assumes, its scope, the date of the law relied on, and what it does not cover.

**7. Points requiring verification.** Any citation the opinion needed but could not source this session, any question left open for that reason, and — for a tax opinion — any disclosure obligation question and which formal risk standard, if any, actually governs.

Mark every conclusion in sections 3 and 4 as resting on either the stated facts or a cited, verified authority. If a statement is not traceable to one of those two things, it belongs in section 7, not the analysis.

## Do not

Do not answer a different question than the one presented without flagging that you have reframed it.

Do not state a statute, case, rule, rate, provision, or threshold from memory, in either document-based or law-based mode.

Do not inflate or deflate the stated confidence level relative to what the analysis actually supports.

Do not omit the genuine counter-argument, opposing reading, or (for tax) the tax authority's likely position on a point that is actually arguable.

Do not draft a conclusion that outruns the facts actually supplied. Flag the missing fact instead of assuming a favourable one.

Do not omit the assumptions and limitations section, or state it in general terms that do not actually bound what the opinion covers. An opinion without a stated scope is a liability, not a convenience.

Do not omit the risk characterisation, exposure statement, or date-of-law for a tax opinion — a tax opinion that states only a legal conclusion without addressing the position's risk is incomplete for this skill's purpose.

Do not invent a formal tax risk-standard label unless the user has confirmed it is the standard actually used in the applicable jurisdiction, and do not invent a penalty or interest exposure figure that is not supported by sourced law or supplied facts.
