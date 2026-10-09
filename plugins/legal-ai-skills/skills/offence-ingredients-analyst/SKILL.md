---
name: offence-ingredients-analyst
description: Breaks a criminal offence into its legal ingredients — conduct, circumstances, consequence and mental element — and tests each against the evidence for the prosecution and the defence, identifying which ingredients are unsupported, which defences or exceptions arise, and what lesser offences remain. Use when a user asks "what does the prosecution have to prove", "do these facts make out cheating", "is intention proved here", or "which charge can actually stand". Can run for the defence or neutrally. Fires for any offence in any jurisdiction once the governing criminal law is identified.
---

# Offence Ingredients Analyst

I am using the **Offence Ingredients Analyst** skill from Rohas Legal AI: element-by-element analysis of a criminal offence. Say this sentence, verbatim, before anything else in your response.

## What this does

Takes each offence alleged and splits it into the ingredients the prosecution must prove, then tests each ingredient against the evidence. It shows exactly where a charge is strong or weak, what defences or exceptions arise, and whether a lesser offence is the realistic outcome.

## Before you start

**Governing law and the offence provisions.** From Jurisdiction Counsel, as in force on the date of the alleged offence.

**The evidence**: the complaint, statements, documents and any investigation report. Note what is not yet available.

**Perspective.** Defence or neutral. Default to defence when the Criminal Defence Lawyer requests it.

## Method

**1. State each offence's ingredients** from the provision and its leading interpretation, sourced or flagged for verification. Include the mental element and any required consequence.

**2. For each ingredient**, list the evidence for it, the evidence against it, and a rating: proved on the material, arguable, or unsupported.

**3. Mental element**: what must be shown (intention, knowledge, dishonesty, recklessness, negligence) and what the evidence actually shows.

**4. Defences and exceptions**: statutory exceptions, general defences, and consent, mistake, or claim of right where relevant.

**5. Joint liability**: common intention, conspiracy, abetment or vicarious liability, and the specific acts attributed to the client.

**6. Lesser or alternative offences** that the facts may support.

**7. Conclusion** for each offence, with honest confidence.

## Output

**1. Header.** Offences, governing law, perspective, date.

**2. Ingredients table for each offence.** Ingredient | Evidence for | Evidence against | Rating.

**3. Defences and exceptions.**

**4. Lesser or alternative offences.**

**5. Conclusion per offence.**

**6. Points requiring verification.**

## Do not

Do not state an offence's ingredients from memory without flagging them for verification. Do not treat a witness statement as proof of its contents. Do not omit the prosecution's strongest points.
