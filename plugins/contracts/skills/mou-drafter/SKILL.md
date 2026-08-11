---
name: mou-drafter
description: Drafts an MOU, letter of intent, heads of terms or term sheet from instructions, making the binding and non-binding parts explicit. Use for "draft an MOU for this joint venture", "prepare an LOI for the acquisition", "draft heads with binding exclusivity", "turn these terms into an MOU", or requests to draft using public MOUs, model forms or comparable provisions. When external precedents are requested, it searches the plugin's listed contract sources before generic websites. Distinct from contract-drafter, which produces a definitive agreement.
---

# MOU Drafter

## What this does

Drafts a memorandum of understanding or letter of intent, treating the line between what is binding and what is not as the primary drafting problem rather than a label added at the end. Most disputes over this document type are not about a badly drafted clause — they are about a party discovering that a document they thought was a non-binding statement of intent was, in whole or in part, found to create legal obligations, or the reverse: that a provision they needed to be enforceable was drafted in language too tentative to bind. This skill makes that boundary explicit and drafts each side of it in the register that boundary requires.

## Before you start

**Which provisions must be binding regardless of whether the deal proceeds.** Confidentiality, exclusivity or a standstill, allocation of costs if the deal falls through, non-solicitation of employees or customers, and governing law and dispute resolution are the common candidates — plus the non-binding-status clause itself, which has to bind for the rest of the non-binding architecture to work. If the user has not worked through this list, ask them to confirm it rather than assuming which provisions matter enough to survive a collapsed negotiation.

**Governing law.** Whether a document labelled non-binding will actually be treated as such, and whether an unlabelled clause among otherwise non-binding text can be read as creating standalone obligations, both turn heavily on the governing law and on doctrines — "subject to contract", preliminary or binding-preliminary agreement analysis, promissory estoppel — that vary widely between systems. Ask which law governs unless the user has said.

**The commercial understanding reached so far.** Parties, the shape of the intended transaction, indicative terms, the timeline to a definitive agreement, and any exclusivity period already agreed. This is the blocking input for substance — do not draft the recitals or the intent provisions without it.

Not blocking, ask once and proceed on a reasonable default without it: **whether the definitive agreement type is already known** (an SPA, a JV agreement, a supply contract). Knowing this helps keep the MOU from drifting into premature detail that belongs in the later document. **An existing precedent**, if the user has one.

**External precedents.** If the user asks for model MOUs, public examples, comparable provisions or benchmarking, read [references/public-contract-sources.md](references/public-contract-sources.md) in full before searching. Follow its mandatory listed-source priority, sampling, attribution and non-inference controls; do not substitute a generic web result for the listed-source search. Do not load that reference for an ordinary MOU based on the user's instructions or precedent.

## Method

**1. Classify the task** — drafting from scratch, completing a partial draft, or converting negotiated heads of terms into an MOU — in one line before drafting anything.

**2. Fix the binding architecture before drafting a single substantive clause.** Draft an early, clearly headed provision — "Status of this document" or equivalent — stating that the document does not create legal relations except for the specifically listed binding provisions, named by clause number or heading. Everything else in the document has to be consistent with that statement; nothing should be left for the reader to infer.

**3. Draft the non-binding, intent-recording provisions in deliberately non-committal language** — "the parties intend to", "it is anticipated that", "subject to the negotiation and execution of a definitive agreement" — and avoid obligation language such as "shall", "agrees to" or "undertakes" in these sections. This is the discipline specific to this document type: word choice is doing real legal work, not stylistic work, because those verbs are precisely what can tip a reluctant court toward finding binding intent regardless of a label elsewhere in the document.

**4. Draft each binding provision with full, ordinary contractual precision.** Confidentiality, exclusivity, cost allocation, non-solicitation and the dispute resolution clause are meant to be enforceable — draft them using proper obligation language and do not soften them to match the tentative tone used elsewhere. A binding clause drafted in hedging language defeats its own purpose.

**5. Bound the exclusivity or no-shop clause precisely, if there is one** — a defined period, a defined scope of what is restricted, and what happens at expiry. An open-ended or vaguely scoped exclusivity commitment is among the most commonly disputed provisions in this document type.

**6. Draft a clear mechanism for what happens if the parties do not reach a definitive agreement** — an outside date, whether the MOU simply lapses, whether any termination right exists, and what becomes of exclusivity and confidentiality after that point (confidentiality should ordinarily survive; say so expressly rather than leaving it to the general survival doctrine).

**7. Watch for the document specifying commercial terms in enough completed detail that it starts to look like a capable, performable agreement in its own right**, regardless of its label. If the instructions push toward that level of detail, flag the tension to the user rather than resolving it unilaterally — a highly specific "non-binding" document is exactly the fact pattern that produces disputes over whether it is really non-binding.

**8. Where the enforceability of the non-binding architecture itself depends on the governing law**, do not assert that the label will be given effect. Draft the clause using standard convention and flag it as a point requiring verification.

**9. Before delivering the draft, check that the binding/non-binding list in the status clause matches the clauses that follow exactly** — nothing binding was left off the list, and nothing on the list is drafted in language that undercuts its own binding status.

## Output

**1. Drafting parameters.** Posture (collaborative or drafted for one side), governing law, the binding provisions list as confirmed, definitive agreement type if known, date.

**2. The draft.** The complete document, led by the status-of-document clause, with placeholders for anything not yet confirmed.

**3. Binding/non-binding map.** A table restating which provision is binding and which is not, cross-referenced to clause numbers — a single place to sanity-check the whole document's architecture at a glance.

**4. Drafting notes.** Judgment calls made where instructions were silent, including any point flagged under Method step 7 where the level of commercial detail risks undermining the non-binding intent.

**5. Open points and placeholders.** Every bracketed placeholder and what is needed to resolve it.

**6. Points requiring verification.** Whether the governing law will give effect to the non-binding label, whether the exclusivity period or scope is customary for a transaction of this kind, and any other question that depends on law or market practice rather than the parties' own instructions.

## Evidence and document controls

- Cite exact clause numbers, headings or document locations for every document-derived finding where available; headings never substitute for operative language.
- Distinguish document facts, user-supplied facts, assumptions and legal inferences. State when a conclusion depends on governing law, disputed facts, claims classification or material outside the contract.
- Check relevant definitions, order of precedence, incorporated documents, related provisions and survival language before concluding.
- Name missing schedules, annexures, policies, referenced agreements and unreadable material. Never invent clauses, quotations, authorities, defined terms, dates or commercial facts.
- Warn when scans, OCR, truncation, tracked changes or incomplete extraction may affect accuracy.
- Preserve confidentiality. Do not send contract contents to an external service unless the user expressly requests that connected workflow.


## Do not

Do not use obligation language in a provision meant to be non-binding. The verb, not just the surrounding label, determines how the clause reads.

Do not leave any clause's binding status ambiguous. Every provision should be traceable to the status clause's list.

Do not draft commercial terms in exhaustive, immediately performable detail when the instructions call for a non-binding MOU, without flagging the tension this creates.

Do not assert that a "non-binding" or "subject to contract" label will be given effect by a court. That depends on the governing law and the actual drafting; flag it as a verification point.

Do not invent a commercial term the instructions did not supply. Use a placeholder, as in contract-drafter.

Do not draft an open-ended or unbounded exclusivity or standstill commitment.

Do not present the MOU as a substitute for the diligence and definitive documentation that is still to come. It is a step toward that, not a replacement for it.
