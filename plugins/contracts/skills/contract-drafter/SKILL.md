---
name: contract-drafter
description: Drafts a contract from a term sheet, negotiated heads of terms, or plain instructions, producing a complete agreement — parties, recitals, definitions, operative clauses, schedules and boilerplate — in a specified drafting posture and matched to an existing precedent where one is supplied. Use this whenever a user wants a document produced rather than reviewed — including phrasings like "draft us a services agreement on these terms", "turn this term sheet into a contract", "prepare a first draft NDA for this deal", "draft an SPA based on our standard template", "put together a supply agreement favouring the seller", or "draft the framework agreement, we'll add the SOWs later". Distinct from contract-reviewer, which analyses an existing agreement — this produces one. Fires for any commercial agreement type — services, supply, distribution, licensing, employment, lease, shareholders, loan, NDA, SaaS, construction, joint venture.
---

# Contract Drafter

## What this does

Turns a term sheet, a set of instructions, or a negotiated set of heads of terms into a complete draft agreement — structured, internally consistent, and in a stated drafting posture. It does not invent commercial terms the instructions do not supply; where a term is missing it drafts a placeholder and says so. It does not assert that the result is enforceable or ready for signature — that determination, and verification against the governing law, is left to the user.

## Before you start

**Which side is being drafted for, and the posture.** Nearly every discretionary clause in a first draft can be pitched toward one side or the other — a broad indemnity, a high liability cap, a short cure period. Establish whose side you are drafting from and how the draft should be pitched: an opening position favouring that side (the normal function of a first draft), a balanced position intended as a conventional negotiating start, or a genuinely neutral document because the parties are drafting together — a joint venture framework, an MOU, a document with no natural "drafting side". Do not guess; ask, and do not draft a protective clause until you know.

**Governing law and jurisdiction.** Drafting conventions, default rules, and execution formalities differ by system — what makes a liquidated damages clause enforceable rather than a penalty, whether a non-compete of a given duration is likely to stand, what a valid signature or attestation requires, whether stamp duty or registration is triggered. Ask which law governs, unless the user has already said. This determines what verification points you will need to flag later, not what you draft now.

**The commercial deal.** The term sheet, heads of terms, or instructions setting out what the parties have actually agreed — parties, price, term, deliverables, exclusivity, territory, any conditions. This is the blocking input: do not begin drafting operative clauses without it. Once you have it, treat any single term it leaves open as a placeholder within the draft rather than a reason to stop the whole exercise — see Method step 2.

Not blocking, ask once and proceed without it if unanswered: **an existing precedent or template.** A house form, a prior agreement of this type, or a specific identified external model to follow. Its absence does not stop the draft — proceed on the conventional structure for the agreement type and say plainly that no house precedent was used, so the user knows to check the result against their own before relying on it.

**External precedents.** If the user asks for sample agreements, public precedents, model forms or external benchmarking, read [references/public-contract-sources.md](references/public-contract-sources.md) in full and follow its source, attribution and non-inference controls. Do not load that reference for an ordinary draft based on the user's terms or precedent.

## Method

**1. Classify the task**, in one line — a full draft from scratch, completion of a partial template with gaps, or conversion of heads of terms into a first definitive draft. Say which, since it changes how much of the structure is already fixed for you.

**2. Extract every commercial term from the instructions into a checklist before drafting a single operative clause.** Parties and their exact legal names, price, term and renewal, deliverables, exclusivity, territory, any conditions precedent. Mark each Confirmed or Open. Never draft an operative clause around an Open term as though it were settled — insert a clearly marked placeholder (for example `[● to confirm: renewal term]`) and carry it through consistently everywhere that term recurs in the document.

**3. If a precedent was supplied, build on its structure rather than starting from a blank page.** Match its clause numbering, defined terms, drafting register and level of formality, and adapt clause content to the new deal. If none was supplied, use the conventional shape for the agreement type — parties, recitals, definitions, operative clauses in a logical dependency order, boilerplate, schedules, signature blocks — and note in the drafting notes that no house precedent was used.

**4. Draft definitions before the clauses that depend on them**, and use every defined term afterwards in exactly the sense just defined. Do not define a term and then use a close variant of it undefined elsewhere in the document — this is the single most common defect a subsequent review will find, and it is cheaper to avoid at the point of drafting than to fix afterwards.

**5. Draft the risk allocation as one coherent system — warranties, indemnities, exclusions, cap and insurance together, not clause by clause.** Set the cap, its carve-outs, and the indemnity scope so they are consistent with each other and with the posture fixed in step 1. A cap drafted in isolation from the indemnity clause, so that the indemnity in practice defeats the cap, is an internal defect you are creating, not one you are merely failing to catch.

**6. Draft the exit provisions deliberately** — termination for convenience, for breach, for insolvency, notice periods, cure periods, and the consequences of termination, including what survives. Match these to the posture: a draft favouring the drafting party ordinarily gives that party the broader exit right and the counterparty the narrower one, and says so candidly in the drafting notes rather than leaving the asymmetry for the other side to discover unassisted.

**7. Draft the boilerplate as substantive provisions, not stock text** — notices (a real or clearly placeholder address), assignment and change of control, dispute resolution, variation, entire agreement, severance, governing law and jurisdiction. Check as you draft that the dispute resolution clause is internally coherent — do not draft both an arbitration clause and an exclusive court jurisdiction clause into the same agreement.

**8. Where a clause's content or enforceability depends on the governing law rather than on the parties' agreement — a liquidated damages figure, a restraint of trade duration, an exclusion of consequential loss, execution or stamping formalities, whether electronic signature is valid for this instrument — draft it using standard commercial convention, but do not assert that the specific figure or mechanism is enforceable under the governing law from memory.** Mark it as a point requiring verification before the draft is relied on, naming the specific question.

**9. Before delivering the draft, review it against the defects a subsequent contract review would catch**, and fix them rather than leave them for someone else to find: definitions used but not defined or vice versa, broken cross-references, an obligation with no deadline, a deadline with no consequence, a cap whose carve-outs swallow it, boilerplate that contradicts itself.

**10. Compile every placeholder and open point left in the draft** into a single trackable list — this is the first thing the user will want, since it tells them exactly what instruction is still needed before the draft can move forward.

## Output

**1. Drafting parameters.** Side drafted for and posture; governing law as confirmed; agreement type; the commercial terms as extracted, listed Confirmed or Open; precedent or template used, or none; date.

**2. The draft.** The complete agreement text, in the drafting register matched to any supplied precedent, with every unresolved point marked by a consistent, clearly visible placeholder rather than a guessed value.

**3. Drafting notes.** A short clause-by-clause list of the judgment calls made where the instructions were silent and a reasonable drafting position had to be chosen — what was chosen, and what the alternative positions would have been. This is what lets the user see your own reasoning rather than treating the draft as a black box.

**4. Open points and placeholders.** A single consolidated list of every bracketed placeholder in the draft and what instruction or figure is needed to resolve it.

**5. Points requiring verification.** Every drafting choice from Method step 8 that depends on the governing law rather than the parties' agreement — named as a specific question, with where to check it: the current statutory text, local counsel, the client's usual precedent bank. Do not answer these here; leave them open.

## Evidence and document controls

- Cite exact clause numbers, headings or document locations for every document-derived finding where available; headings never substitute for operative language.
- Distinguish document facts, user-supplied facts, assumptions and legal inferences. State when a conclusion depends on governing law, disputed facts, claims classification or material outside the contract.
- Check relevant definitions, order of precedence, incorporated documents, related provisions and survival language before concluding.
- Name missing schedules, annexures, policies, referenced agreements and unreadable material. Never invent clauses, quotations, authorities, defined terms, dates or commercial facts.
- Warn when scans, OCR, truncation, tracked changes or incomplete extraction may affect accuracy.
- Preserve confidentiality. Do not send contract contents to an external service unless the user expressly requests that connected workflow.


## Do not

Do not invent a commercial term — a price, a term length, a deliverable, a party's legal name — that the instructions did not supply. Use a placeholder and list it in Open points.

Do not build a draft from a blank structure when a precedent was supplied. Use its structure, terms and register as the base.

Do not tilt the commercial terms themselves toward the drafting side. Posture governs the protective and risk-allocation clauses; the price, deliverables and term are what the parties actually agreed, not a negotiating opportunity.

Do not state that a drafted clause is enforceable, or draft a jurisdiction-specific figure — a maximum restraint duration, a statutory notice period, a stamp duty rate — as settled fact from memory. Flag it as a verification point.

Do not leave an internal inconsistency in a draft you produced yourself. Check cross-references, definitions and the risk-allocation clauses against each other before delivering the draft, not after.

Do not present a first draft, a discussion document, or a draft with open placeholders as ready for execution.

Do not draft in a register inconsistent with a supplied precedent — mismatched defined terms or numbering conventions make the draft harder to integrate, not easier.
