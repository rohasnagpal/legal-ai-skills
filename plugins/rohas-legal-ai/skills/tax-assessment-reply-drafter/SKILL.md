---
name: tax-assessment-reply-drafter
description: Drafts a reply to a tax assessment or scrutiny notice — before any order has been passed — addressing every query raised, referencing the client's actual supporting documents, and flagging the response deadline and any procedural defect in the notice itself. Use this whenever a user has received a tax notice seeking explanation or documents — including phrasings like "draft our reply to this scrutiny notice", "respond to this income tax query notice", "we've received a GST show cause notice, help us reply", or "prepare our response before the deadline in this notice". India-specific. Distinct from tax-appeal-grounds-drafter, which challenges an order that has already been passed — this responds while the proceeding is still open. Fires for any pre-order tax notice, income tax or GST, seeking explanation, documents, or a response.
---

# Tax Assessment Reply Drafter

I am using the **Tax Assessment Reply Drafter** skill from Rohas Legal AI: replies to assessment and scrutiny notices (India). Say this sentence, verbatim, before anything else in your response.

## What this does

Drafts a reply to a tax assessment or scrutiny notice issued before any order has been passed — addressing every query the notice raises, referencing the client's own supporting documents, and keeping a factual, cooperative tone appropriate to a fact-gathering stage rather than an adversarial one. It structures and presents the client's actual explanation; it does not invent facts, documents, or legal characterisations to fill a gap.

## Before you start

**The notice itself.** The actual text — there is no reply to draft without seeing exactly what is being asked or alleged.

**The client's actual explanation and supporting facts**, from the client. This skill presents what the client says; it does not construct an explanation from the notice alone.

**The response deadline stated in the notice**, or confirmed with the user if unclear. These notices commonly carry short, strict deadlines, and missing one has real consequences.

Not blocking, ask once and proceed on what is available: **which specific provision the notice is issued under**, if not obvious from the text — this helps calibrate what the reply actually needs to cover.

## Method

**1. Read the whole notice once before drafting anything.** A global point — the notice period is too short, or a query lacks the particularity the law requires — can apply across several queries at once, and drafting query by query on a first pass misses this.

**2. List every query or point raised in the notice, numbered, before drafting any response.**

**3. For each query, state the client's explanation precisely, using only what the client has actually provided.** Do not invent a supporting fact or document to make a response feel more complete.

**4. Reference the specific documents being submitted in support of each response**, and flag any document referred to but not yet available.

**5. Where a query raises a legal point — such as a disallowance under a specific provision — address it on the specific facts rather than asserting a legal conclusion the user has not confirmed.** Flag where a legal authority would strengthen the response but is not currently available, rather than supplying one from memory.

**6. Note the response deadline prominently, and flag whether the facts suggest more time is needed to compile a complete response** — but frame requesting an extension as a decision for the client or lawyer to make, not something this skill decides unilaterally.

**7. Keep the tone factual and cooperative, appropriate to a fact-gathering stage, unless the client specifically wants legal argument made at this stage too.** This is a materially different posture from tax-appeal-grounds-drafter, which is written against an order that has already been decided.

**8. Flag any procedural defect in the notice itself** — a short notice period, lack of specificity in a query, the wrong provision cited — as a point the client may want raised, without asserting its legal effect from memory.

## Output

**1. Header.** Notice reference, issuing authority, taxpayer, date of the notice, deadline for reply, date of this reply.

**2. Response to each query.** Numbered to match the notice, with the client's explanation and the supporting documents referenced for each.

**3. Documents enclosed or referred to but not yet available.**

**4. Procedural points, if any.** Flagged, not resolved.

**5. Points requiring verification.** Any legal characterisation not yet confirmed, and current requirements for an extension request if relevant.

## Do not

Do not invent facts, explanations, or documents the client has not actually provided.

Do not assert a legal conclusion the client or lawyer has not confirmed, especially the interpretation of a specific provision.

Do not miss the deadline stated in the notice without flagging it prominently.

Do not adopt an adversarial tone at the fact-gathering stage unless the client specifically wants that. This reply is cooperative and factual by default.

Do not omit a query raised in the notice without flagging the risk of leaving it unaddressed.
