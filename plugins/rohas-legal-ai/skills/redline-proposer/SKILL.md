---
name: redline-proposer
description: Produces complete replacement wording for one problem clause or a short related group, from the strongest credible position to the minimum acceptable fallback. Use for "redline this liability clause", "give me alternatives for this indemnity", "rewrite this termination clause", "propose language for clause 9", or requests for wording based on public clauses, model forms or market examples. When external wording is requested, it searches the plugin's listed contract sources before generic websites. Distinct from contract-reviewer and negotiation-position-planner. Fires for any clause type in any commercial agreement.
---

# Redline Proposer

## What this does

Takes a clause the user has identified as a problem and drafts a spectrum of replacement wording for it — an aggressive position that remains credible, one or more intermediate positions if the gap justifies them, and a fallback the client should genuinely be prepared to accept — each written as complete, usable clause text in the register of the document it belongs to. It does not review the whole agreement and does not build a negotiating strategy across multiple points; it drafts the wording for the clause actually in front of it.

## Before you start

**Which side the wording should favour.** Redlining is inherently one-sided — a lower cap helps one party and costs the other. Ask, and do not draft until you know.

**The clause plus enough surrounding context to redline it safely.** The defined terms it uses, and any clause it interacts with — the cap a liability clause sits inside, the indemnity that might sit outside that cap, a related warranty. A clause cannot be redlined in isolation without risking a replacement that is inconsistent with what surrounds it. Ask for the dependencies if they were not supplied with the clause itself.

**What the new wording needs to achieve.** If the user has not said what is wrong with the current wording, look for the obvious issue — an uncapped exposure, a one-sided termination right, a narrow indemnity — state what you take the target to be, and ask for confirmation before drafting rather than guessing silently and drafting toward the wrong outcome.

Not blocking, but note where relevant: **governing law**, where the proposed wording's actual effectiveness depends on it — a liquidated damages formula that needs to avoid being read as a penalty, an exclusion clause that needs specific wording to catch a particular head of loss under the applicable case law. Extract it from the document if stated; ask if it is not.

**External wording.** If the user asks for public clauses, model-form language, comparable provisions or benchmarking, read [references/public-contract-sources.md](references/public-contract-sources.md) in full before searching. Follow its mandatory listed-source priority, sampling, attribution and non-inference controls; do not substitute a generic web result for the listed-source search. Do not load that reference when redlining solely against the supplied contract and instructions.

## Method

**1. Classify what has been supplied** — a single clause in isolation, a clause with its dependencies, or a full contract with an instruction to focus on one clause — in one line.

**2. Read the clause together with everything that qualifies it before drafting anything.** Redlining a symptom while leaving the actual mechanism that causes it untouched — a cap redrafted without checking the carve-outs that already hollow it out — produces wording that looks like a fix and is not one.

**3. State the diagnosis before drafting** — what the current wording does, and why it does not serve the client, in one or two sentences. A redline needs a stated target; drafting a change for its own sake without one produces wording nobody can evaluate.

**4. Draft the strongest credible position.** Use the strongest wording that remains a credible ask — not a position so extreme the other side will dismiss it without engaging. Draft it in the defined terms, numbering convention and drafting register of the document being edited, not your own style.

**5. Draft a balanced position where the gap justifies it.** Use wording that preserves the client's core protection while addressing the counterparty's likely legitimate concern. If the gap is narrow, say that a separate balanced version would be artificial and omit it.

**6. Draft the minimum acceptable fallback, and say explicitly what makes it tolerable.** State the specific reason this floor still protects the client's actual interest and the concession it represents.

**7. Write the full replacement clause for each position, not just the words that changed.** A fragment cannot be checked for internal consistency, and the user needs text that can be pasted directly into the document.

**8. Check each version against what it depends on.** A lower cap that is not reflected in a cross-referenced carve-out, or a narrowed indemnity that leaves a related warranty untouched and now inconsistent with it, undermines the redline before it is even proposed. Fix the dependency or flag it explicitly as a conforming change the user still needs to make elsewhere.

**9. Where a version's practical effect depends on the governing law, do not assert that it will work.** Flag it as a point requiring verification, naming the specific question.

**10. Where several clauses are redlined together, keep each in the same aggressive/intermediate/fallback structure, but flag any point where a concession on one clause is naturally traded against a specific concession on another.** If the user's actual need is a coordinated strategy across many open points rather than wording for a short list of clauses, say that negotiation-position-planner is the better fit and offer to hand off.

## Output

**1. Parameters.** Side, clause(s) addressed with reference, current wording quoted from the document, diagnosis and target outcome, governing law, date.

**2. Replacement wording, organised by clause.** For each clause, use separate headings rather than a large table:

- **Strongest credible position.** Full replacement clause text, followed by a concise statement of its material legal effect.
- **Balanced position.** Full replacement clause text and effect, where a genuine middle position exists.
- **Minimum acceptable fallback.** Full replacement clause text, its effect, the concession made and why the result remains tolerable.

Keep negotiating rationale and drafting instructions outside the clause text. Do not repeat the same analysis in a summary table and again below the wording.

**3. Conforming changes.** Any other clause that needs a matching edit if a given redline is adopted, named specifically — "if adopting the lower cap, also amend clause 14.2's carve-out reference".

**4. Points requiring verification.** Any question of whether the proposed wording will actually be effective under the governing law, named specifically. Do not answer it here.

## Evidence and document controls

- Cite exact clause numbers, headings or document locations for every document-derived finding where available; headings never substitute for operative language.
- Distinguish document facts, user-supplied facts, assumptions and legal inferences. State when a conclusion depends on governing law, disputed facts, claims classification or material outside the contract.
- Check relevant definitions, order of precedence, incorporated documents, related provisions and survival language before concluding.
- Name missing schedules, annexures, policies, referenced agreements and unreadable material. Never invent clauses, quotations, authorities, defined terms, dates or commercial facts.
- Warn when scans, OCR, truncation, tracked changes or incomplete extraction may affect accuracy.
- Preserve confidentiality. Do not send contract contents to an external service unless the user expressly requests that connected workflow.


## Do not

Do not describe a change in prose instead of drafting the actual replacement wording. "The cap should be lower" is not a redline.

Do not redline a clause without checking the definitions and related clauses it depends on.

Do not draft only one position when the stated or inferred room to move justifies more than one, and do not manufacture a balanced version that has no materially different effect.

Do not draft a fallback without saying what makes it tolerable. An unexplained floor is not usable at the table.

Do not rewrite the clause into your own drafting style. Match the document's register, numbering and defined terms, or the redline will not be usable as drafted.

Do not assert that proposed wording will be legally effective under the governing law. Flag it as a point to verify.

Do not build a full multi-point negotiation strategy here when the user has only asked about one clause or a short list. Point to negotiation-position-planner if that is what is actually needed.
