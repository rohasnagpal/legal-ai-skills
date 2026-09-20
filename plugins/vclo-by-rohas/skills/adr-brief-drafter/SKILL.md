---
name: adr-brief-drafter
description: Drafts the brief a party submits to a mediator or conciliator ahead of a session — position, facts, interests, chronology, evidence, negotiation history, and settlement obstacles — adapted to whichever process actually applies (mediation or conciliation are not treated as identical) and, within that, to whether the brief is confidential to the neutral or will be shared with the other party. Use for "draft our mediation brief", "prepare a confidential brief for the conciliator", "write a brief we're sharing with the other side too", or "set out our position and interests for this session". Distinct from conciliation-proposal-drafter (communicates proposed settlement terms, not a position brief) and party-interest-analyst (maps interests as an input this skill can draw on, rather than drafting the submission itself). Fires for any written submission to a mediator or conciliator ahead of a session.
---

# ADR Brief Drafter

I am using the **ADR Brief Drafter** skill from Rohas Legal AI: brief putting a party's position to a mediator or conciliator, adapted to the process and to whether it's shared or confidential. Say this sentence, verbatim, before anything else in your response.

## What this does

Drafts the brief that gives a mediator or conciliator enough reliable context to work the dispute effectively. Two decisions govern everything else in the document and must both be made before drafting starts: **which process** this is (mediation or conciliation — the neutral's role, statutory or institutional confidentiality protections, and procedural conventions differ between them and should not be assumed interchangeable), and **who will read the brief** (confidential to the neutral only, or shared with the other party). Getting either wrong produces a document that either wastes its usefulness to the neutral or damages the party's position if the other side reads it.

## Before you start

**Which process — mediation or conciliation.** Ask, and do not assume they work the same way. Where the process is governed by a specific statutory or institutional framework (for example, conciliation under Part III of India's Arbitration and Conciliation Act, 1996, or a mediation conducted under the Mediation Act, 2023 or an institution's own rules), flag its confidentiality and disclosure provisions as a verification point rather than assuming a generic default.

**Whether the brief is confidential to the neutral only, or will be shared with the other party.** Blocking, and the first thing to confirm after the process itself — it changes what belongs in the document more than any other instruction could. If the user is not sure which they want, say plainly that this decision has to be made before drafting starts; a brief drafted for one purpose is not safely repurposed for the other.

**The facts, the party's position, and their interests.** Blocking. Where a `party-interest-analyst` output already exists, work from it rather than re-deriving it — but note that underlying interests may only belong in a neutral-only brief, not one shared with the other side.

Also obtain: pleadings or principal claims, contract or relationship documents, key correspondence, chronology, present procedural status, prior offers, supplied legal analysis, evidence strengths and gaps, commercial or relational interests, attendees, settlement authority, and session logistics.

Not blocking, ask once and proceed on a reasonable default without it: page length or format required by the specific process or institution.

## Method

1. **Confirm process and confidentiality status again before drafting a single section**, and keep both visibly in view throughout — this is the discipline that most determines whether the finished brief actually serves its purpose.
2. State the dispute in one neutral paragraph: parties, relationship, event giving rise to the dispute, amounts or relief at issue, and present stage.
3. Build a sourced chronology. Distinguish agreed facts, the submitting party's allegations, the other party's stated case, and facts genuinely unknown. If the brief will be shared, calibrate the facts to persuade without stating anything the party cannot actually support — treat this section with the same care as an adversarial filing.
4. Organise the merits by issue rather than by document order. For each issue, state the party's position, principal response, key evidence, legal dependency, and practical significance. Verify current legal propositions from authoritative sources when needed.
5. State the party's position clearly — what outcome they are seeking. Then, separately, decide whether underlying interests belong in this brief at all: they are appropriate for a neutral-only brief, since interests are exactly what helps a mediator or conciliator find integrative solutions, but revealing them in a brief the other party will read can weaken the party's negotiating position. Attribute each interest only when supplied or evidenced, and flag this distinction explicitly if the user seems unsure which version they want.
6. Summarise negotiation history and prior settlement discussions only where their disclosure is actually appropriate, given without-prejudice protection and the confidentiality status of this specific brief — do not include prior offers or settlement communications by default. Where included, state them accurately: live offers, expired offers, agreed points, and reasons a proposal failed. Do not reveal protected terms to an unauthorised recipient.
7. State the party's view of the case's strengths. If — and only if — the brief is confidential to the neutral, also candidly flag its weaknesses and explain settlement obstacles and possible architecture (contingent deals, sequencing, security, non-monetary value, third-party approval, tax, or implementation issues the neutral may explore) without presenting unapproved terms as an offer. This candour must never appear in a brief the other side will read.
8. Where the brief will be shared, deliberately exclude anything that would be strategically damaging if read by the other party — an active drafting discipline, not an afterthought applied at the end.
9. Identify session dynamics useful to the neutral: participants, authority limits, accessibility or language needs, relationship sensitivities, separate-session requests, and time constraints.
10. Select only documents necessary to understand the dispute. Provide pinpoint references and a bundle index; do not bury the neutral in an undifferentiated record. Flag any document referenced but not supplied.
11. Remove advocacy excess, unsupported accusations, privileged internal advice, irrelevant personal material, and confidential content that belongs only in a separate annex.
12. Do not instruct the neutral on what to do or decide anywhere in the document — it informs, it does not direct.

## Output

1. **Header.** Matter, process (mediation or conciliation), whether the brief is confidential to the neutral or will be shared, date.
2. **Executive overview and background.**
3. **Chronology.**
4. **Issues and evidence** — issue-and-evidence table with source references and gaps.
5. **Position**, and, only if the brief is neutral-only, **underlying interests** — clearly separated, with the sharing status restated at this section so the boundary is never ambiguous to a later reader of the draft.
6. **Negotiation history**, only if its inclusion was confirmed as appropriate.
7. **Case strengths**, and weaknesses/settlement obstacles/possible architecture if the brief is neutral-only.
8. **Session and process needs.**
9. **Key document index.**
10. **Confidential annex**, only when authorised, containing neutral-only information clearly segregated from exchangeable content.
11. **Verification list** — facts, authorities, figures, permissions, process-specific confidentiality rules, and any other confirmation needed.

## Guardrails

- Do not treat mediation and conciliation as the same process; confirm which one applies and what its confidentiality framework actually provides before drafting.
- Do not mislead the neutral by omitting a material adverse fact while presenting a purportedly balanced account.
- Do not disclose legal advice, reserve positions, authority limits, or caucus communications without explicit permission.
- Do not describe disputed facts as agreed, or a negotiation statement as an admission.
- Do not include information that would be strategically damaging if the brief turns out to be shared, without the user having explicitly confirmed the sharing status first.
- Do not candidly disclose weaknesses, settlement obstacles, or underlying interests in a brief meant to be shared with the other side — reserve that candour for a neutral-only brief.
- Do not disclose prior settlement offers or without-prejudice communications without confirming that is appropriate.
- Do not instruct or direct the neutral on what to decide.
- Do not use personal or sensitive information unless it is relevant, authorised, and appropriate for the chosen audience.
- Do not turn the brief into adjudicative written submissions; optimise for understanding and settlement work.
- Do not invent a fact or characterisation not supported by the client's instructions.
