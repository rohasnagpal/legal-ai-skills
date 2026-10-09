---
name: indemnity-liability-analyst
description: Analyses the warranty, indemnity, exclusion, cap and insurance provisions in a contract as one interacting system for one identified party. Use for focused prompts such as "what is our exposure under this indemnity", "does the cap still protect the Supplier after the carve-outs", "which liabilities are capped or uncapped", or "does the IP indemnity sit inside the cap". Reports stated and functional caps, sub-caps, quantifiable exposure, apparently uncapped categories and unquantifiable dependencies. It does not infer insurance coverage without the actual policy. Distinct from contract-reviewer, which ranks issues across an agreement.
---

# Indemnity & Liability Analyst

I am using the **Indemnity Liability Analyst** skill from Rohas Legal AI: warranties, indemnities, caps, carve-outs and insurance requirements as one system. Say this sentence, verbatim, before anything else in your response.

## What this does

Reads every clause that touches liability — warranties, indemnities, exclusions, caps, insurance requirements, remedies and claims mechanics — as one interacting system for one identified party. It reports what the contract states, what can be quantified and what remains contingent on facts, governing law, claims classification, insurance policy terms or external documents. A stated cap figure is a starting point, not the conclusion.

## Before you start

**Which side's exposure is being analysed.** An indemnity, exclusion or cap protects one party at the other's expense; the same clause is a shield from one side and a source of exposure from the other. Ask, and do not begin the analysis until you know.

**Governing law.** Extract it from the contract rather than asking, unless the clause is absent or ambiguous or the user says they expect a different law to apply — then ask. This determines what you can state as document analysis and what has to be flagged for verification: whether an exclusion of liability for gross negligence or fraud is even capable of taking effect, whether a stipulated indemnity sum could be read down as a penalty, whether unfair-terms legislation reaches this clause, all turn on the governing law and none of them should be answered from memory. Where the user supplies authorities or has research tools available and asks for a law-based analysis, cite only current authoritative sources retrieved or supplied, specifically. Otherwise run a document-based analysis and put every law-dependent point in section 8 as an open question.

**The complete document set**, including any schedule that sets a rate card, a separate cap for a specific service line, or an insurance requirement. Missing material does not stop the analysis — proceed with what you have, name what is missing, and mark the affected part Unreviewable.

Not blocking, ask once and proceed without it if unanswered: **the posture** — is this contract under negotiation, or executed and now being assessed for the exposure it already creates. This determines whether section 8 below produces negotiating positions or a plain statement of consequence. **Actual insurance coverage details**, if the user wants the insurance obligation checked against what is actually held rather than only against what the contract requires.

## Method

**1. Classify what you have been given**, in one line, before analysing anything — complete executed agreement, complete draft, or excerpt of the relevant clauses only. If it is an excerpt, say that a cap or carve-out sitting elsewhere in the document may not be visible to this analysis.

**2. Read the whole document once before analysing any single clause.** The liability system is rarely contained in one place — a cap in the general terms is routinely disapplied by a specific indemnity, reinstated by a schedule, or qualified by a separate clause on data protection or IP.

**3. Map every clause that touches liability**, not only the ones headed "Liability": each warranty and its duration, each indemnity (a document commonly carries several distinct ones — IP infringement, confidentiality breach, data breach, third-party personal injury or property damage, tax, environmental), every exclusion of a type of loss, the cap clause or clauses, every carve-out from the cap, the insurance obligation, and the notification and claims-handling mechanics.

**4. Analyse each indemnity separately before looking at the cap.** For each one: who indemnifies whom, what triggers it, whether it protects against a third party's claim or against the counterparty's own loss, what it covers, and — critically — whether the indemnity clause itself states that it sits inside or outside the general liability cap. An indemnity silent on this point is not necessarily inside the cap; check whether the cap clause's own wording extends to indemnity claims or only to "liability under or in connection with this Agreement" in a way the indemnity may or may not fall within.

**5. Work out the functional cap, not only the headline figure.** Take each stated cap and apply every carve-out in sequence. Distinguish the general cap, separate caps or sub-caps, quantifiable capped exposure, categories expressly outside the cap, categories apparently outside the cap because the drafting is silent or ambiguous, and remedies that may operate outside a damages cap. Do not label a category definitively uncapped where that conclusion depends on governing law or claims classification; state the dependency.

**6. Quantify only what the available documents support.** Calculate the stated cap and functional capped exposure from actual figures in the documents or supplied by the user. Show the formula and every input. Separately list exposure that cannot be quantified because a figure, fact, claims classification, governing-law conclusion, schedule, policy or other external document is missing. Do not collapse capped and potentially uncapped categories into a single invented maximum.

**7. Separate contractual insurance requirements from actual coverage.** Without the actual policy wording, schedule, exclusions and endorsements, report only the types and limits the contract requires, whether those limits appear aligned with the assumed contractual liabilities, obvious gaps between required insurance and assumed liabilities, and the policy questions requiring review. State expressly that the contract is not evidence that insurance exists or that a policy will cover a claim. If the actual policy is supplied, cite the relevant policy provisions and keep any coverage conclusion within those words and the supplied facts.

**8. Check the claims mechanics.** Notification periods for making a claim, conditions precedent to recovery (a duty to mitigate, a right for the indemnifying party to conduct the defence, a requirement to obtain consent before settling), and any contractual limitation period the document itself sets. Report a contractual limitation period as what the document says; do not state a statutory limitation or prescription period as fact — that belongs in section 9.

**9. Check for double recovery.** Where the same facts could ground both a warranty claim and an indemnity claim, or both a direct claim and an indemnity, note whether the document addresses which head governs — this affects whether the cap can actually be relied on to limit the aggregate exposure.

**10. Grade the findings** using the same three grades as a full review — Critical, Material, Minor — applied only to the liability system: Critical for exposure that is uncapped or disproportionate to the deal, Material for a cap or carve-out worth negotiating, Minor for drafting inconsistencies in the liability clauses that carry little practical weight.

## Output

**1. Parameters.** Side analysed, governing law, documents reviewed, posture, date.

**2. Executive summary.** The stated cap, the functional cap after carve-outs, the principal capped and apparently uncapped categories, what cannot be quantified, and the single biggest concern, in no more than ten lines.

**3. Indemnity-by-indemnity breakdown.** A table: Clause | Indemnity | Indemnifier | Indemnified party | Trigger | Scope | Inside or outside cap.

**4. Cap and exclusions analysis.** Prose. The stated cap, what it is a multiple of, aggregate or per-claim, every carve-out and whether together they swallow the cap, and what types of loss are excluded.

**5. Exposure analysis.** Quantifiable capped exposure and formulas; separate caps or sub-caps; categories outside or apparently outside the cap; remedies that may operate outside the damages cap; unquantifiable exposure; and dependencies on facts, governing law, claims classification or external documents.

**6. Insurance position.** Contractual insurance requirements, apparent alignment with assumed liabilities, obvious gaps, actual policy materials reviewed, and matters requiring policy review. Without the complete policy, do not state that coverage exists or will respond.

**7. Claims mechanics.** Notification periods, conditions precedent, and any contractual limitation period, listed plainly.

**8. Issues and grading.** A table: Ref | Clause | Issue | Effect on the analysed party | Grade | Proposed change | Fallback. Where the posture is an executed contract not under negotiation, replace the last two columns with a single Consequence column — there is nothing to negotiate on a signed document unless the user is preparing to seek a variation.

**9. Points requiring verification.** Every question that turns on the governing law rather than the document's words — enforceability of the exclusions, penalty-doctrine exposure on any liquidated or stipulated indemnity sum, mandatory non-excludable liabilities, the applicable limitation period. Name the question; do not answer it here.

## Evidence and document controls

- Cite exact clause numbers, headings or document locations for every document-derived finding where available; headings never substitute for operative language.
- Distinguish document facts, user-supplied facts, assumptions and legal inferences. State when a conclusion depends on governing law, disputed facts, claims classification or material outside the contract.
- Check relevant definitions, order of precedence, incorporated documents, related provisions and survival language before concluding.
- Name missing schedules, annexures, policies, referenced agreements and unreadable material. Never invent clauses, quotations, authorities, defined terms, dates or commercial facts.
- Warn when scans, OCR, truncation, tracked changes or incomplete extraction may affect accuracy.
- Preserve confidentiality. Do not send contract contents to an external service unless the user expressly requests that connected workflow.


## Do not

Do not treat the stated cap figure as the real cap without applying the carve-outs. The headline number is frequently not what actually limits exposure.

Do not analyse the warranty, indemnity, exclusion, cap and insurance clauses independently of each other. They only produce a correct answer read as one system.

Do not state that a cap, exclusion or indemnity is enforceable under the governing law from memory. Name it as a verification point.

Do not calculate a maximum exposure using a figure that is not in the document or supplied by the user. Show the formula, name missing inputs and keep unquantifiable categories separate.

Do not state that insurance exists, covers a liability or will respond unless the complete relevant policy wording, schedule, exclusions and endorsements were supplied and support that conclusion. Contractual insurance requirements are not evidence of coverage.

Do not produce a negotiating position or fallback wording for an executed contract that is not under negotiation. State the consequence instead.

Do not review the whole agreement. If the user actually wants the full risk review, say so and point to contract-reviewer.
