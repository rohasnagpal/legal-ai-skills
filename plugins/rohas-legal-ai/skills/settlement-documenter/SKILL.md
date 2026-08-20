---
name: settlement-documenter
description: Documents the outcome of a settlement process in one of two distinct modes — a contemporaneous session record of what was actually agreed and what remains open (mediation, conciliation, or negotiation session), or the complete, executable, binding settlement instrument once terms are agreed (heads of settlement, mediated or conciliated settlement agreement, consent terms, full and final settlement). Use for "record what we agreed today", "document the outcome of this session", "draft the full settlement agreement now that we've agreed terms", or "turn this agreement-in-principle into heads of settlement". The session record is never treated as the binding document unless the user explicitly confirms that is intended. Distinct from conciliation-proposal-drafter or settlement-evaluator, which operate before agreement exists. Fires after any settlement session or once settlement terms are agreed, in mediation, conciliation, or direct negotiation.
---

# Settlement Documenter

I am using the **Settlement Documenter** skill from Rohas Legal AI: records a session outcome, or drafts complete binding settlement terms, once agreement is reached. Say this sentence, verbatim, before anything else in your response.

## Before you start

Determine which mode is needed: a **session outcome record** (what actually happened and was agreed today, including partial or no agreement), or **full settlement terms** (the complete, executable instrument recording a settlement already agreed). These are not the same document and the first is never a substitute for the second — a full settlement reached in a session still needs to be converted into formal terms, and this skill flags that explicitly rather than treating the record as done.

## Mode A — Session outcome record

### Before you start

**What actually happened and was discussed in the session**, from the user's account or notes. Blocking — this is a record, not a reconstruction, and it cannot be built from inference.

Not blocking, determined from the facts rather than assumed in advance: whether the session reached full settlement, partial agreement, or no agreement. Let the record's structure follow from what actually happened.

### Method

1. Record what was actually agreed, precisely and only as instructed. Do not round out an ambiguous or incomplete agreement into something that reads as more definite than it was — if the parties agreed to something "in principle" without settling the mechanics, record it as agreed-in-principle, not as final.
2. Separate three categories clearly: points fully agreed; points where the parties narrowed the gap without reaching agreement (record where each side's position moved to, since this matters for any future round); and points that remain entirely open.
3. Note every condition attached to what was agreed — subject to board approval, subject to formal documentation, subject to a specific party's confirmation — precisely, since these conditions determine whether what was agreed is actually binding yet.
4. Record next steps and, where given, timing — who does what, by when.
5. If a full settlement was reached, flag plainly that it still needs to be converted into a formal binding document under Mode B below. Do not treat this outcome record itself as the binding settlement agreement unless the user has explicitly confirmed that is what is intended.
6. Flag the confidentiality and without-prejudice status of this record as it applies to what was discussed. Whether this document — or what it records — is admissible or otherwise usable later depends on the mediation/conciliation agreement and the governing law; flag this as a verification point rather than asserting a specific protection applies.
7. Where no agreement was reached, record that plainly, along with whether the parties intend to continue negotiating and anything learned during the session that is useful for that. Do not use this as an opportunity to plan the next session's strategy — that belongs to a caucus or negotiation-planning skill; this documents what already happened.

### Mode A output

Header (matter, session date, parties, mediator/conciliator if any, date of this record) — what was agreed (full agreement vs agreement-in-principle, every condition noted) — what remains open (unresolved points, and where relevant, where each side's position moved to) — next steps and timing — status (full settlement requiring formal documentation, partial agreement, or no agreement, stated plainly, with the Mode B step flagged if formal documentation is still needed) — points requiring verification (confidentiality/admissibility status of this record and what it discusses).

## Mode B — Full settlement terms

### Before you start

Obtain: every settling party's exact legal identity, capacity, signatory authority, and advisers; the disputes, claims, contracts, proceedings, awards, or notices within scope; the agreed commercial terms and points expressly left open; payment, performance, security, tax, confidentiality, announcement, and timing details; intended release scope, preserved claims, third-party effects, and costs allocation; governing law, forum, settlement process, mediator or conciliator role, and intended legal status; and execution method, conditions precedent, approvals, filing, registration, stamping, or court/tribunal disposal required.

Treat party identity, agreed consideration, release perimeter, conditions, and intended binding point as blocking. Do not fill a material open term with a supposed market default.

### Method

1. Create a settlement ledger before drafting: agreed term, source or confirmation, responsible party, deadline, dependency, evidence of completion, consequence of failure, and unresolved instruction. Where a Mode A outcome record already exists for this matter, work from it rather than re-deriving what was agreed.
2. Define the settlement perimeter precisely. Identify released claims, unknown or future claims if authorised, preserved rights, affected contracts, affiliates, officers, insurers, guarantors, and non-parties. Do not use "full and final" as a substitute for this analysis.
3. State when binding effect begins: signature, last signature, mediator/conciliator authentication, payment, approval, court order, or another condition. Separate formation from later completion obligations.
4. Draft payment mechanics completely: amount, currency, tax or withholding treatment, invoice, destination, instalments, dates, banking costs, interest, security, escrow, early payment, and receipt evidence.
5. Draft non-monetary performance with objective completion criteria, responsible persons, access, documents, delivery method, cooperation, verification, and long-stop dates.
6. Sequence proceedings and releases. Decide whether withdrawal, consent disposal, satisfaction, discontinuance, return of security, or release occurs before, simultaneously with, or after performance. Protect each side against an unsecured sequencing gap.
7. Draft default consequences proportionately: notice, cure, acceleration, interest, security enforcement, revival or preservation of claims, agreed judgment or consent order where lawful, costs, and forum. Check penalties and enforceability under the governing law.
8. Address admissions, confidentiality, permitted disclosures, compelled disclosure, announcements, non-disparagement, references, data or document return, and survival. Make exceptions workable for advisers, regulators, tax, audit, insurers, and enforcement.
9. Address authority, representations limited to settlement mechanics, no reliance if agreed, costs, tax responsibility, third-party rights, assignment, variation, waiver, severability, entire agreement, counterparts, electronic signatures, and notices.
10. Verify the intended statutory status. Check whether the settlement needs mediator/conciliator authentication, registration, court recording, an arbitral consent award, stamping, notarisation, or another formality specific to the process and jurisdiction. Do not state that it has award or decree status without the applicable legal basis.
11. Run cross-document, arithmetic, date, defined-term, signature-block, release, and closing-sequence checks.
12. Preserve mediator/conciliator and caucus confidentiality throughout: include only agreed terms, not confidential explanations of how agreement was reached.

### Mode B output

Settlement agreement or consent terms, in the requested form (heads of settlement, mediated settlement agreement, conciliated settlement agreement, consent terms, full and final settlement) — closing checklist (action, party, deadline, dependency, completion evidence) — proceedings-disposal checklist — open-issues schedule, separating essential terms from drafting choices — verification note (authority, tax, stamp, registration, mediator/conciliator authentication, court or tribunal steps, local execution requirements).

## Guardrails (both modes)

- Do not invent what was agreed or discussed, in either mode. Record and draft only what is actually reported or instructed.
- Do not round an agreement-in-principle into a description that reads as final and complete.
- Do not treat a Mode A outcome record as itself the binding settlement document; flag formal documentation as a separate next step whenever a full settlement was reached.
- Do not broaden the release, confidentiality duty, admission, indemnity, or default remedy beyond the recorded agreement.
- Do not make a non-party release claims or assume obligations without authority and consideration analysis.
- Do not draft impossible dates, circular conditions, unsecured sequencing, or contradictory revival and release provisions.
- Do not state that tax, stamp duty, registration, enforceability, consent-award treatment, or the admissibility/confidentiality of a record is settled without current jurisdiction- and agreement-specific verification.
- Do not plan the next session's negotiation strategy here — this skill documents and formalises, it does not strategise.
