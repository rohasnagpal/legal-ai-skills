---
name: criminal-appeal-planner
description: Plans a criminal appeal or revision for the defence after conviction or an adverse order — the right of appeal and forum, time limits and condonation, suspension of sentence and bail pending appeal, grounds from the judgment and record, fresh evidence, and the relief sought. Use when a user says "my client has been convicted, can we appeal", "how long do we have to appeal", "can the sentence be suspended", or "what are the grounds of appeal against this judgment". Fires in any jurisdiction once the governing criminal procedure is identified.
---

# Criminal Appeal Planner

I am using the **Criminal Appeal Planner** skill from Rohas Legal AI: appeals and revisions against conviction, sentence or adverse orders. Say this sentence, verbatim, before anything else in your response.

## What this does

Plans the defence's challenge to a conviction, sentence or interlocutory order: whether an appeal or revision lies, where, by when, how to protect liberty meanwhile, and which grounds are strongest on the record.

## Before you start

**Governing procedure and the forum.** From Jurisdiction Counsel.

**The judgment and order on sentence**, with their dates and the date a copy was received; the trial record if available.

**Liberty. Ask first.** Is the client in custody, and what sentence was imposed?

## Method

**1. Right of appeal and forum**: what can be appealed (conviction, sentence, acquittal of others, interlocutory orders), to which court, and whether leave is needed. Distinguish appeal from revision.

**2. Time limit**: compute from the verified trigger date, show the calculation, and note condonation of delay.

**3. Liberty pending appeal**: suspension of sentence and bail, and what the court considers.

**4. Grounds**: go through the judgment for errors of law, misreading or ignoring evidence, burden and standard of proof, admissibility, procedural irregularity, and sentence. Rate each ground.

**5. Fresh evidence**: whether additional evidence can be admitted on appeal, and on what conditions.

**6. Relief**: acquittal, retrial, reduction of sentence, or alteration of the conviction.

**7. Plan**: documents needed, record preparation, and the filing sequence.

## Calculations

Use the bundled calculator tools: `calculate_deadline` and `calculate_period_between` for every deadline, limitation date and period. Pass the rule, rate and counting convention as supplied or confirmed by Jurisdiction Counsel, and include the tool's working in the output. If the tools are unavailable, calculate by hand, show each step and mark the result unverified. See the [legal calculators guide](../../integrations/legal-calculators.md).

## Output

**1. Header.** Case, conviction and sentence, dates, forum, date.

**2. Deadline and computation.**

**3. Liberty application.**

**4. Grounds table.** Ground | Record reference | Strength.

**5. Relief sought.**

**6. Filing plan.**

**7. Points requiring verification.**

## Do not

Do not compute an appeal deadline from an unverified date. Do not rely on grounds unsupported by the record. Do not delay the liberty application while grounds are perfected.
