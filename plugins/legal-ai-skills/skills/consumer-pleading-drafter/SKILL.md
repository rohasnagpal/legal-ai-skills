---
name: consumer-pleading-drafter
description: Drafts the two sides of a consumer-forum pleading — the complaint (complainant side) or the reply/written statement (opposite-party side). The complaint states the parties, the forum's jurisdiction, the particularised defect, deficiency, or unfair trade practice, and relief sought. The reply raises any threshold objection prominently, then answers each allegation as admitted, denied with the client's own account, denied for insufficient knowledge, or qualified. Use for "draft a consumer complaint over this defective appliance", "file a complaint for deficiency in service", "draft our reply to this consumer complaint", or "we've been named as opposite party, help us respond". Pairs with compensation-quantifier for relief figures and deficiency-analyst for a fuller merits test. Fires for either side of any consumer complaint, in any jurisdiction with a consumer-forum or equivalent process.
---

# Consumer Pleading Drafter

I am using the **Consumer Pleading Drafter** skill from Rohas Legal AI: consumer complaint (complainant side) or reply (opposite-party side). Say this sentence, verbatim, before anything else in your response.

## Before you start

Determine which side is being drafted for: **complainant** (drafting the complaint) or **opposite party / respondent** (drafting the reply or written statement). Ask if not stated — the two modes below are mirror images but structured differently.

## Mode A — Complaint (complainant side)

### Before you start

**The facts** — what was purchased or contracted for, and what went wrong — supplied by the complainant. Blocking.

**The forum the complaint will be filed before.** Pecuniary and territorial jurisdiction rules, and the thresholds that define them, are forum- and law-specific and change over time. Ask which forum is intended; do not assume a specific monetary threshold or forum level from memory. Where the user has not confirmed the applicable threshold, flag jurisdiction as a point requiring verification rather than asserting the complaint is properly filed.

**The relief sought** — refund, replacement, repair, compensation (with figures, or a reference to a compensation-quantifier breakdown — do not invent figures), and any other specific direction sought. Blocking; a complaint cannot be drafted without knowing what it asks for.

Not blocking, ask once and proceed on what is confirmed: **the date the cause of action arose**, since consumer complaints are commonly subject to a limitation period running from that date. If not given, note limitation as an open verification point rather than assuming the complaint is timely.

### Method

1. Classify the claim — defective goods, deficiency in service, unfair trade practice, or a combination — in one line before drafting anything, since the particulars required differ by category.
2. State the parties precisely — complainant and opposite party or parties, with full details exactly as supplied.
3. State the jurisdictional basis — pecuniary jurisdiction (value of goods/services and compensation claimed, or however the applicable regime defines it) and territorial jurisdiction (where the opposite party resides or carries on business, or where the cause of action arose). Do not assert a specific numeric threshold from memory; flag it as a verification point unless confirmed.
4. Particularise the facts precisely — what was purchased or contracted, the price paid, what went wrong, when, and any prior communication with the opposite party about it, including their response if one was given. Do not omit a response the opposite party actually made.
5. State the specific defect, deficiency, or unfair trade practice alleged, tied to the particular facts — not a generic assertion. If a fuller merits test is wanted, point to deficiency-analyst; this skill states the allegation as instructed and as apparent from the facts.
6. State the relief sought, itemised. Use figures only as supplied by the user or produced by compensation-quantifier; do not invent a compensation amount.
7. Address limitation. State the date the cause of action arose if given, and flag whether the complaint appears to be within the applicable limitation period as a verification point.
8. List the documents relied on — invoice, correspondence, expert report — and flag any referenced but not supplied.

### Output

Header (forum as stated, or "to be confirmed"; complainant; opposite party or parties; date) — jurisdiction (pecuniary and territorial basis, threshold flagged for verification if unconfirmed) — facts (particularised chronology, including the opposite party's response if given) — allegation (the specific defect/deficiency/unfair trade practice, tied to the facts) — relief sought (itemised, figures only as supplied or quantified elsewhere) — limitation (date the cause of action arose, flagged verification point on timeliness) — documents relied on (with gaps noted) — points requiring verification.

## Mode B — Reply / written statement (opposite-party side)

### Before you start

**The complaint being replied to** — the actual text. Blocking.

**The client's actual position on each allegation** — what is true, false, or partially true, from the client. Blocking; this skill structures the client's account, it does not construct a defence from the allegations alone.

**Which forum this reply is being filed before** — affects format, procedural convention, and reply-timing rules. Ask; flag if not confirmed.

Not blocking, ask once and proceed on what is instructed: **whether jurisdiction or limitation is being challenged as a threshold objection.** If so, raise it prominently and early rather than folding it into the allegation-by-allegation response.

### Method

1. Read the whole complaint once before drafting anything — a global point (lack of jurisdiction, limitation, non-joinder or mis-joinder of parties, non-maintainability in the form filed) can dispose of several allegations at once, and drafting allegation-by-allegation on a first pass misses this.
2. Raise any threshold objection first and prominently, if the client wants one raised. Raising it does not require abandoning a reply on the merits — a reply can do both, reserving the objection while still addressing the allegations.
3. List every allegation or numbered paragraph of the complaint before drafting any response, matching the complaint's own numbering, so completeness can be checked directly against it.
4. State the client's position on each allegation precisely, using only what the client has instructed — admitted, denied with the client's own account, denied for insufficient knowledge to admit or deny, or qualified. Do not invent a fact or a defence to fill a gap in the client's instructions.
5. Where an allegation is denied, give the client's own account of what happened, not a bare denial — a bare denial carries less weight than a denial coupled with an affirmative account.
6. Keep factual admissions separate from legal characterisation. Admitting that an item was delivered five days late is not the same as admitting deficiency in service — concede the fact if true, without conceding the legal conclusion the complainant draws from it.
7. State the client's own case or defence at the end — what actually happened from their side, and any specific defence such as misuse, unauthorised modification, or a cause outside their control — only as instructed by the client, never invented to fill a gap.
8. Flag reply-timing or format requirements specific to the forum as a verification point rather than assuming compliance.

### Output

Header (forum, complaint reference, opposite party/respondent and complainant, date) — preliminary objections, if any, stated prominently and first — reply to allegations, numbered to match the complaint (admitted / denied with the client's own account / denied for insufficient knowledge / qualified) — client's own case or defence — relief sought (dismissal, costs, or other relief, only as instructed) — points requiring verification.

## Guardrails (both modes)

- Do not assert a specific pecuniary jurisdiction threshold or forum level from memory. Flag it.
- Do not invent a compensation figure, fact, or defence that was not actually supplied or instructed.
- Do not assume the complaint is within limitation, or that reply-timing/format compliance is met, without flagging it as a verification point.
- Do not state that the facts definitely amount to (or definitely fail to amount to) a deficiency or unfair trade practice as a settled conclusion — deficiency-analyst is the tool for the merits test.
- Do not concede a legal conclusion while admitting an underlying fact; keep the two separate throughout.
- Do not omit a response the opposite party actually gave before the complaint was filed, or a threshold objection the respondent wants raised.
- Do not leave an allegation unaddressed without flagging the risk to the user.
