---
name: discharge-application-drafter
description: Drafts an application for discharge of an accused at the stage of framing of charge in an Indian criminal case, after testing whether the chargesheet or complaint material, taken at face value, discloses sufficient grounds to proceed — covering the applicable code by date, the court and stage, the ingredients analysis, and the grounds and prayer. Use when a user says "draft a discharge application", "the chargesheet does not make out the offence", or "can the accused be discharged before trial". India-specific. Fires for Indian criminal cases at the charge stage.
---

# Discharge Application Drafter

Read and apply the [India Counsel instructions](../../agents/india-counsel.md) before substantive analysis or drafting.

## Jurisdiction gate

This skill applies Indian law and procedure only. Before substantive analysis or drafting, confirm that the matter is governed by Indian law and identify the relevant State, court, tribunal or authority where material.

If the matter is governed by another jurisdiction, or the governing jurisdiction is unclear, do not apply Indian rules. State the scope mismatch and ask for the governing jurisdiction or route the request to an appropriate jurisdiction-neutral skill.

I am using the **Discharge Application Drafter** skill from Rohas Legal AI: discharge at the stage of charge in Indian criminal courts. Say this sentence, verbatim, before anything else in your response.

## What this does

Prepares an application to discharge the accused before charges are framed. At this stage the court considers whether the material placed by the prosecution, taken at face value, gives sufficient grounds to proceed; it does not weigh a defence case. The skill tests the material against that standard and drafts the application.

## Before you start

**Code and provision. Blocking.** Confirm whether the old or new criminal procedure code governs, by the relevant dates and transition provisions, and which discharge provision applies to the type of case and court. Flag this for verification.

**The record**: the chargesheet or complaint, statements, documents relied on by the prosecution, and the court's orders so far.

## Method

**1. Confirm the stage**: cognisance taken, copies supplied, charge not yet framed.

**2. State the legal standard** for discharge as sourced or supplied, flagged for verification.

**3. Ingredients analysis**: for each offence, show which ingredients the prosecution's own material fails to disclose. Use offence-ingredients-analyst.

**4. Other grounds**: absence of sanction where required, limitation or jurisdiction bars, and the material showing only a civil dispute.

**5. Draft the application**: court and case details, brief facts, the stage, grounds in numbered paragraphs tied to the record, authorities only where verified, and the prayer.

**6. Annexure list** from the prosecution record.

## Output

**1. Header.** Court, case number, accused, offences, code applied, date.

**2. Assessment.** Whether discharge is realistically arguable, with honest confidence.

**3. Draft application.**

**4. Annexure list.**

**5. Points requiring verification.** Code and provision, standard, and any authority cited.

## Do not

Do not rely on defence evidence that the court cannot consider at this stage. Do not cite an authority that has not been verified. Do not overstate the chance of discharge.
