---
name: compliance-obligations-mapper
description: Converts a specific law or regulation's text into an operational obligations register — each obligation, the owner responsible, the trigger that activates it, the evidence needed to demonstrate compliance, the deadline or frequency, and the control that should exist — flagging, where current practice is described, which obligations are and are not yet met. Use for "turn this regulation into an obligations register", "what controls do we need for this new rule", "build an implementation plan for this statute", or "map this regulation to owners and deadlines". Distinct from regulatory-applicability-analyst (determines whether/which rules apply, not how to implement one). Where a dedicated domain skill exists (DPDP, POSH, labour, securities), prefer it; use this one for a regulation with no existing dedicated skill, or a newly enacted one.
---

# Compliance Obligations Mapper

## Purpose

Take a specific regulatory text and turn it into something an organisation can actually implement: who owns each obligation, what triggers it, what evidence proves it was met, and by when — rather than leaving the regulation as prose that everyone assumes someone else is handling.

## Required inputs

Obtain the specific law, rule, or regulation to be mapped — the actual text or a reliable current source, not a summary from memory. Obtain also the entity's structure, activities, and sector, since obligations often turn on entity type, size, or activity thresholds stated in the regulation itself.

Ask whether the user wants the mapping alone, or also wants their current practice checked against it — if current practice is described, this skill will flag gaps as part of its output; if not, it produces the obligations register only, without asserting a compliance status.

Treat the actual current, official text of the regulation as blocking. Do not map a regulation from a summary or from memory of an earlier version — retrieve or request the current text, and flag amendments or commencement questions for verification where currency cannot be confirmed this session.

## Method

1. Read the regulation's operative provisions in full before extracting anything. Note its scope provisions (who it applies to) and any threshold, exemption, or phased-commencement provision that gates individual obligations.
2. Extract every distinct obligation the regulation imposes, in one structured list, before organising it further — a registration, a notice, a disclosure, a record-keeping duty, a consent requirement, a reporting obligation, a technical or organisational measure, a prohibition.
3. For each obligation, state its trigger precisely — what activity, threshold, or event activates it, since many regulatory obligations are conditional rather than universal.
4. For each obligation, propose an owner — the function or role that would naturally be responsible (legal, compliance, IT, HR, finance) — flagged as a proposed allocation for the user to confirm, not an assertion about the user's actual organisational structure.
5. State what evidence would demonstrate compliance with each obligation — a filed document, a maintained register, a documented process, a training record — distinguishing genuine evidence from a bare policy statement.
6. State the deadline or frequency for each obligation — one-off, periodic, or continuous — and flag where the regulation itself is ambiguous about timing.
7. Propose the control that should exist to meet each obligation on an ongoing basis, not just once — a process, a checklist, a review cadence — appropriately generic where the specific implementation is the user's own operational choice to make.
8. Where the user has described current practice, compare it against the obligations register and flag each obligation as met, partially met, not met, or status unclear from what was described — without asserting more confidence than the description supports.

## Output

1. **Header.** Regulation mapped, current as of what date/source, entity described, date of this mapping.
2. **Obligations register.** Obligation | Trigger | Proposed owner | Evidence required | Deadline/frequency | Proposed control.
3. **Scope and threshold notes.** Who the regulation applies to, and any exemption or phase-in provision affecting which obligations are live now.
4. **Current-practice gap assessment**, only if current practice was described. Obligation | Status (met/partially met/not met/unclear) | What is missing.
5. **Points requiring verification.** Currency of the text used, any amendment or commencement question, and any threshold determination resting on facts not yet confirmed.

## Guardrails

- Do not map a regulation from memory or a summary. Use the current official text, retrieved this session or supplied by the user, and flag currency as a verification point where it cannot be confirmed.
- Do not assert a compliance status for any obligation the user has not described current practice against. Produce the register only for those.
- Do not invent the user's organisational structure when proposing an owner — flag the proposed owner as exactly that, a proposal to confirm.
- Do not omit an obligation because it is conditional or exemption-gated — state the condition and let the user determine whether it is met, rather than silently excluding the obligation.
- Where a dedicated domain skill already exists for this regime, say so and recommend it instead of duplicating its substantive analysis here.
