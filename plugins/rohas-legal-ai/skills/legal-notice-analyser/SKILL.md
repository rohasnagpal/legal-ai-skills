---
name: legal-notice-analyser
description: Analyses a legal notice received from another party — the allegations made, the legal basis asserted, the deadline and consequence of non-response, the evidence that would support or defeat each allegation, admissions to avoid in any reply, and an initial response strategy. Use this whenever a user has received a notice and wants it worked through before replying — including phrasings like "what is this notice actually alleging", "what's the legal basis for this demand", "what evidence do we need before we respond", "what should we be careful not to admit", or "assess this notice before we draft a reply". This is the analytical step before drafting — it does not produce the reply itself; hand off to notice-reply-drafter for that once the analysis is done. Fires for any received legal notice, demand, cease and desist, or regulatory notice, in any practice area.
---

# Legal Notice Analyser

## Purpose

Work out what a received notice actually alleges, on what basis, with what deadline and consequence, and what a considered response would need — before anyone drafts a word of reply. A reply drafted without this analysis first risks conceding a fact carelessly, missing the real deadline, or answering the wrong allegation.

## Required inputs

Obtain the notice itself in full — blocking, there is nothing to analyse without it. Obtain also any prior correspondence between the parties on the same subject, the underlying contract or relationship documents if relevant, and the client's own knowledge of the facts referred to.

Ask which side the analysis is for — the recipient, preparing to respond, or counsel advising the recipient — since the same notice reads differently depending on who is being advised.

## Method

1. Read the whole notice once before analysing anything. Note the sender, the capacity in which they send it, the recipient, and the date.
2. List every distinct allegation made, numbered, in the notice's own terms before restating them.
3. For each allegation, identify the legal basis asserted — a specific breach, a statutory provision, a contractual clause, a tort, or an unstated basis the notice merely implies. Flag any allegation that asserts a legal conclusion (breach, negligence, infringement) without stating the facts said to establish it.
4. Identify every deadline in the notice — a response deadline, a cure period, a threatened next step (litigation, termination, regulatory referral) and the date it takes effect. State the consequence of missing each deadline as the notice itself frames it, and flag where that consequence is likely overstated for effect versus one with a genuine legal or contractual basis.
5. For each allegation, identify what evidence would support it and what would defeat or qualify it, from what the client currently knows. Flag where the client's own knowledge is incomplete and what needs to be checked before any position is taken.
6. Identify facts or admissions the notice appears to be fishing for, and anywhere a natural, unguarded response would concede more than the client needs to. Flag these specifically as admissions to avoid.
7. Identify any procedural or threshold defect in the notice itself — service, standing, limitation, a required pre-notice step not taken, an incorrect party named — without treating a defect as decisive on its own.
8. Set out an initial response strategy: which allegations should be admitted, denied, or qualified in principle (pending final instructions), what needs verifying before responding, whether the deadline requires an immediate holding response, and whether specialist input (a particular practice-area skill, or external counsel) is needed before a substantive reply is drafted.

## Output

1. **Header.** Sender, recipient, date of notice, date of this analysis.
2. **Allegation matrix.** Ref | Allegation as stated | Legal basis asserted | Supporting facts (if any) | Gap or unsupported assertion.
3. **Deadlines and consequences.** Every deadline, what happens if missed, and whether the stated consequence looks genuine or is likely overstated.
4. **Evidence assessment.** What would support or defeat each allegation, and what remains unverified.
5. **Admissions to avoid.** Specific points a reply should be careful not to concede.
6. **Procedural or threshold observations.** Any defect in the notice itself, stated as a point to consider rather than a settled conclusion.
7. **Initial response strategy.** Recommended posture per allegation, urgency, and next steps — including a handoff to notice-reply-drafter once instructions are confirmed.

## Guardrails

- Do not draft the reply itself. This skill analyses; notice-reply-drafter drafts.
- Do not treat a legal conclusion asserted in the notice as established fact. State what is alleged and what would need to be true for it to hold.
- Do not assert that a procedural defect in the notice is fatal to it without the specific rule or authority; flag it as a point to raise, not a settled defence.
- Do not miss a deadline embedded in the body of the notice rather than stated prominently — read the whole document for every date that matters.
- Do not recommend a specific admission or denial without flagging that it depends on the client's actual instructions on the facts.
