---
name: citation-integrity-checker
description: Extracts every citation in a document — statute, case, rule, regulation, quotation, or cross-reference — and states exactly what needs verifying about it and how, attempting live verification where research tools are available this session and producing a structured checklist where they are not. Use this whenever a document's citations need checking before anyone relies on them — including phrasings like "check every citation in this opinion before we send it", "verify these case references are real", "does this quote actually say what we're attributing to it", "audit the citations in this pleading", or "make sure none of these sections are made up". Directly responsive to the risk this whole practice pack warns about — an AI-assisted draft can produce a citation that looks correct and is not. Fires on any document containing legal citations, quotations, or cross-references, in any practice area.
---

# Citation Integrity Checker

## What this does

Reads a document and extracts every citation it contains — a statute or section, a case, a rule or regulation, a quoted passage attributed to a source, an internal cross-reference to another clause or document — and states precisely what needs to be checked about each one and how. Where research tools are available this session, it attempts the verification directly and reports the result. Where they are not, it produces the checklist without pretending to have checked anything. Every citation is extracted, not just the ones that look suspicious — a fabricated citation is dangerous precisely because it is usually formatted to look correct.

## Before you start

**The document to check.** Blocking — there is nothing to extract citations from without it.

**Whether research or verification tools are available this session.** This determines the mode. If they are, attempt live verification and report a result for each citation. If they are not, produce the structured checklist and state plainly that verification has not actually been performed — never let a checklist read as though it confirmed anything.

## Method

**1. Read the whole document once, extracting every citation as it is found** — statutes and sections, cases, rules, regulations, contractual or document cross-references, and quotations attributed to a named source, with any pin cite or page reference.

**2. Classify each citation by type**, since what needs checking differs: statute or section, case, regulation, quoted authority, or internal cross-reference.

**3. State precisely what needs verifying for each type.** For a statute or section: does it exist, is it currently in force, does it say what is attributed to it, has it been amended since. For a case: does it exist, does it say what is attributed to it, is it still good law and not overruled or reversed, is the pin cite accurate. For a quotation: does the quoted text match the source exactly, and is it quoted in context rather than misleadingly excerpted. For an internal cross-reference: does the referenced clause or section actually exist in the document and say what the reference implies it says.

**4. Where research tools are available, attempt the verification directly** — retrieve the current text, check whether the citation resolves and says what is attributed to it — and report a result: Confirmed, Could not confirm, or Contradicted. Do not silently correct or alter the document itself; report findings only, and keep results clearly separated by status.

**5. Where research tools are not available, produce the checklist without attempting verification**, and say so explicitly. A citation marked "not verified" is not the same as a citation marked "confirmed," and the output must never blur the two.

**6. Flag any citation that shows an internal tell of possible fabrication even without external verification** — a suspiciously generic-sounding case name, a citation format inconsistent with the rest of the document, an implausible pin cite for the type of source. These are common signs of a fabricated or misremembered citation and are worth flagging regardless of whether live verification is possible.

**7. Extract and report every citation, not only the ones that look suspicious.** A checker that only reports what it is suspicious of will systematically miss a confidently fabricated citation that happens to look plausible — which is the actual failure mode this skill exists to catch.

**8. Rank citations by how much weight they carry.** A citation supporting a load-bearing conclusion is a higher priority to verify than one supporting a minor or background point.

## Output

**1. Header.** Document reviewed, whether live verification was attempted this session or the pass was checklist-only, date.

**2. Citations.** A table: # | Citation as it appears | Type | What to verify | How to verify | Result — Confirmed / Could not confirm / Contradicted / Not attempted.

**3. Suspicious citations.** Any showing internal tells of possible fabrication, flagged even where external verification was not possible.

**4. Priority order.** Which citations matter most to verify first, based on how load-bearing the point they support is.

**5. Verification method note.** A plain statement of whether this pass involved live verification or produced a checklist only, so the reader cannot mistake one for the other.

## Do not

Do not present an unverified citation as verified, and do not let a checklist-only pass read as though anything was confirmed.

Do not silently skip a citation because it looks obviously correct. Extract and report every one.

Do not alter or "fix" a citation found to be wrong. Report it and leave the correction to the user or drafter.

Do not assume a citation is accurate because it is formatted correctly. Formatting and accuracy are independent.

Do not treat every citation as equally urgent. Rank by how much the document's conclusion depends on it.
