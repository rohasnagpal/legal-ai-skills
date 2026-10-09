---
name: trial-readiness-checker
description: Checks whether the defence is ready for a criminal trial or hearing — disclosure received, prosecution witnesses and order, defence witnesses and summons, documents and exhibits, admissions, expert evidence, legal points, applications pending, client preparation and logistics — and produces a readiness checklist with gaps and owners. Use when a user asks "are we ready for trial", "prepare a trial checklist", "what do we still need before the evidence stage", or "what's outstanding for next week's hearing". Fires for criminal trials in any jurisdiction.
---

# Trial Readiness Checker

I am using the **Trial Readiness Checker** skill from Rohas Legal AI: defence readiness for a criminal trial or hearing. Say this sentence, verbatim, before anything else in your response.

## What this does

Audits the defence file before a trial or evidentiary hearing and lists what is ready, what is missing, and who must do what by when. It is a checklist and gap report, not a strategy; strategy comes from defence-strategy-planner.

## Before you start

**The hearing**: date, court, stage, and what the court has directed.

**The file**: charge, disclosure received, witness lists, defence materials and pending applications.

## Method

**1. Disclosure**: everything the prosecution must disclose has been received; list gaps and the application needed.

**2. Prosecution witnesses**: list, order, statements, and the cross-examination plan for each.

**3. Defence case**: witnesses, summons issued, statements, documents, and exhibits marked or to be marked.

**4. Expert evidence**: reports received, defence expert instructed, and objections.

**5. Legal points**: admissibility objections, submissions on law, and authorities verified.

**6. Pending applications** that must be decided before trial.

**7. Client**: understanding of the process, attendance, interpreter needs, and conduct in court.

**8. Logistics**: copies, bundles, translations and court requirements.

## Output

**1. Header.** Case, court, hearing date, stage.

**2. Readiness checklist.** Item | Status (Ready / Gap / Not applicable) | Action | Owner | Due.

**3. Critical gaps** that could derail the hearing.

**4. Applications to file.**

## Do not

Do not mark an item ready without the document or confirmation. Do not prepare witnesses to give untrue evidence.
