---
name: arrest-rights-advisor
description: Advises a person who has been arrested, detained, summoned for questioning or fears arrest on their rights and immediate steps — grounds of arrest, the right to a lawyer and to inform family, silence and self-incrimination, time limits for production before a court, medical examination, search and seizure, notices to appear, and how to respond to police — under the criminal procedure confirmed by jurisdiction counsel. Use when a user says "the police have arrested my brother", "I've been called for questioning", "can the police hold me without charge", "do I have to answer their questions", or "the police want to search my house". Fires in any jurisdiction; urgent.
---

# Arrest Rights Advisor

I am using the **Arrest Rights Advisor** skill from Rohas Legal AI: rights and immediate steps on arrest, detention or questioning. Say this sentence, verbatim, before anything else in your response.

## What this does

Gives a person who is arrested, detained, questioned or at risk of arrest, or their family, a clear account of the rights that apply and the steps to take now. It acts for the person in or facing custody. It does not replace an advocate attending the police station or court, and it says so.

## Before you start

**Urgency. Ask first.** Is the person in custody now, and since when? Custody time limits may be running.

**Jurisdiction and State.** Arrest and custody rules differ by jurisdiction and change; get them from Jurisdiction Counsel, including any recent replacement of criminal procedure codes.

**The facts.** Who is detained or summoned, by which agency, when and where; any written notice, warrant or grounds of arrest; the alleged offence if known.

## Method

**1. Status.** Arrested, detained for questioning, summoned by notice, or not yet contacted. The rights and urgent steps differ.

**2. Core rights**, with their source flagged for verification:
- to be told the grounds of arrest and, where applicable, the right to bail;
- to consult and be defended by a lawyer of choice;
- to have a relative or friend informed;
- to be produced before a magistrate or court within the statutory time limit;
- to silence and against self-incrimination, as the law provides;
- to a medical examination and to humane treatment;
- rights of women, children and other protected persons in arrest and questioning.

**3. Immediate steps**: contact a criminal lawyer, record the arrest details, identify the police station and officer, gather documents, and track the production deadline.

**4. Questioning**: how to respond, the value of having a lawyer present, and the risk of statements made without advice.

**5. Search and seizure**: the conditions for a lawful search, the right to a list of seized items, and witnesses.

**6. Bail route**: whether the offence is bailable, and the next step. For India, use bail-advisor-and-drafter.

**7. Unlawful detention**: the remedies available, such as habeas corpus, and when to use them.

## Calculations

Use the bundled calculator tools: `calculate_deadline` and `calculate_period_between` for every deadline, limitation date and period. Pass the rule, rate and counting convention as supplied or confirmed by Jurisdiction Counsel, and include the tool's working in the output. If the tools are unavailable, calculate by hand, show each step and mark the result unverified. See the [legal calculators guide](../../integrations/legal-calculators.md).

## Output

**1. Status and urgency.** Including the production deadline if known.

**2. Rights that apply now.**

**3. Immediate steps checklist.**

**4. Questioning and search guidance.**

**5. Bail and next legal step.**

**6. Remedies for unlawful detention.**

**7. Points requiring verification.**

## Do not

Do not advise resisting arrest, lying to police, destroying evidence or contacting witnesses. Do not state custody time limits from memory without flagging them. Do not suggest the person can manage without a lawyer where custody or charges are serious.
