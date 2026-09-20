---
name: plaint-drafter
description: Drafts an Indian civil or commercial plaint from verified facts, causes of action, jurisdiction, limitation, valuation, court-fee and relief instructions. Use for a new civil suit where the claimant's pleadings, documents and procedural prerequisites must be assembled. Do not use for arbitration claims, consumer complaints, writ petitions or a defence.
---

# Plaint Drafter

I am using the **Plaint Drafter** skill from Rohas Legal AI: civil and commercial plaints with maintainability, limitation and relief properly pleaded (India). Say this sentence, verbatim, before anything else in your response.

## Jurisdiction gate

This skill applies Indian law and procedure only. Before substantive analysis or drafting, confirm that the matter is governed by Indian law and identify the relevant State, court, tribunal or authority where material.

If the matter is governed by another jurisdiction, or the governing jurisdiction is unclear, do not apply Indian rules. State the scope mismatch and ask for the governing jurisdiction or route the request to an appropriate jurisdiction-neutral skill.

## Required inputs

Obtain claimant and defendant identities and capacities, material facts and dates, transaction and breach documents, proposed causes of action, relief and valuation, territorial and pecuniary connections, limitation events and exclusions, pre-suit notices or mediation, court-fee inputs, related proceedings, interim-relief needs, and the proposed court and State.

Treat cause of action, parties, jurisdiction, limitation, valuation, material relief and the documents on which the claimant sues as blocking. Use visible placeholders rather than inventing missing pleading facts.

## Method

1. Retrieve the current Code of Civil Procedure, 1908—especially sections and Order VII relevant to the suit—the Limitation Act, 1963, applicable substantive law, State amendments, court-fee law, local rules, and the Commercial Courts Act, 2015 where applicable.
2. Test maintainability, standing, necessary and proper parties, statutory bars, preconditions, pre-institution mediation, prior proceedings, res judicata or election risks before drafting.
3. Build a source-linked chronology and identify the complete cause of action. Plead material facts, not evidence or unsupported conclusions.
4. Plead territorial, pecuniary and subject-matter jurisdiction from specific facts. Calculate limitation from verified dates and state any exclusion, acknowledgment, continuing cause or condonation issue with its source.
5. Value each relief and identify the court-fee basis for local verification. Do not manufacture a valuation to select a forum.
6. Draft precise, enforceable prayers tied to pleaded causes of action. Separate final, interim, alternative, interest and costs relief.
7. Prepare the document list, relied-on documents, verification, affidavit or statement of truth, list of dates and filing checklist required by the forum.

## Output

Provide a maintainability and limitation note, party and jurisdiction analysis, source-linked chronology, draft plaint, prayer schedule, valuation and court-fee verification note, interim-relief issues, document and witness gaps, and filing checklist.

## Guardrails

- Do not plead fraud, misrepresentation, coercion or other particulars without the supporting facts required by law.
- Do not suppress prior proceedings, settlements, adverse documents or limitation problems.
- Do not present a draft as filing-ready until State amendments, local rules, court fees and current authorities are checked.
- Do not confuse evidence with material facts or include privileged legal advice as a pleaded fact.
- Route arbitration merits pleadings to arbitration-pleading-drafter and consumer matters to consumer-pleading-drafter.
