# Test the matter upgrades

These upgrades ship in version 4.2.0. Test with a host loading this checkout, or update the installed plugin to 4.2.0 or later and restart/reload the host. An already running chat may still use the previous plugin version. Do not copy skills into a personal skills folder. All examples below are fictional; no external research is needed for the contract arithmetic or wording comparison.

Use a writable temporary copy of [the test fixtures](../examples/matter-upgrades/), opened as the session folder. Supply only the files named at each step; later versions are deliberately separate test inputs. Do not open the whole repository as a client matter. If your host cannot select attachments independently, move later inputs outside the selected test folder until their step. Current-law claims, if requested, still need source verification.

## 1. Coverage and action-first report

Supply `agreement-v1.md` and `receipt-initial.md`:

> Rohas, I represent Cedar Analytics, the supplier. Review these supplied excerpts under England and Wales law for commercial risk. I expressly want analysis now on this limited record; Schedule A is unavailable. Identify what remains unverified. Use only the supplied contractual rule for the response-date calculation. Alex is responsible for the response; leave the filing cutoff and timezone unknown. Give me a substantial report.

Pass: starts substantive findings with recommended action, nearest known deadline, biggest uncertainty and decision required. Lists both supplied files and actual reviewed sections; separately identifies missing Schedule A and limits service-level conclusions. Flags the receipt premise as unverified. Does not present a calculated date as a verified statutory deadline. An urgent protective step may precede the brief.

Coverage failure variant: attach a genuine scanned or password-protected PDF of your own test material. Pass: records the actual read/partial/OCR/unreadable outcome and coverage, tries available local reading methods, and exposes any gap before affected conclusions. Do not simulate this by merely telling the model that a readable file is unreadable.

## 2. Save, then resume in a new chat

> Save my matter and maintain its record. Include the document versions, sources, conclusions, outstanding issues, Alex's responsibility and next action.

Pass: actually creates `matters/<matter_id>/matter.yaml`, reports its path, and records a save timestamp. Open the file to check its contents. A write failure must be disclosed, not reported as success.

Start a **new chat** in the same test folder:

> Rohas, resume my matter from matters/REPLACE-WITH-ACTUAL-ID/matter.yaml. Check the source files before relying on the saved conclusions.

Pass: reads the selected record; gives where we left off, what needs rechecking, next action and decision needed. Does not repeat answered intake questions or imply automatic memory. Past deadlines should be flagged as past, not silently reused.

Negative variants: in an empty folder say “resume my matter”; it must request a record rather than invent history. With two saved matters and no selection, it must ask which one.

## 3. Changed contract and earlier advice

Now supply `agreement-v2.md`:

> What changed against agreement-v1.md? Reassess your earlier liability conclusion for Cedar and update the matter record.

Pass: detects the changed definition of Fees even though clause 2 is identical; cites clause 1 in both versions and clause 2's dependency; explains the larger potential cap for the supplier; marks the affected earlier conclusion revised (or explains why it remains unchanged); identifies areas not reassessed. Keeps the earlier conclusion in history.

Negative variant: provide only v2 in a fresh chat and ask “what changed?” It must request a baseline and not invent previous advice.

## 4. New evidence and deadline register

Supply `receipt-correction.md`:

> This correction replaces my initial receipt date. Use 3 November 2026 as the trigger for this fictional test and the supplied contractual rule. What changes in the advice and deadline? Update the maintained record, preserving the old entry and reason. Alex remains responsible.

Pass: identifies the conflicting receipt evidence, distinguishes the newly supplied record from the date of the event, and recalculates from **11 November 2026** to **13 November 2026**, excluding the trigger day. Records rule/trigger sources, inputs/result, responsible person and verification status/date/verifier. Does not call the premise independently verified, fill an unknown cutoff/timezone, or create a reminder. Calculator unavailability must be disclosed and the computation marked unverified.

## 5. Regression checks

- “Hello Rohas”: returns the existing welcome, without opening a matter or reading client files.
- “What is a liability cap?”: stays a quick answer, without a compulsory register or report.
- A raw first account with missing documents: stays intake-only; no merits recommendation added by the new action brief.
- “Draft the replacement clause”: gives a usable clause, with any action brief outside the clause.

## Repository checks

From the repository root:

```sh
ruby scripts/build-skill-registry.rb
ruby scripts/validate.rb
```

The validator checks structure, links, registry consistency, counts and behavioural-case schemas. It does **not** run model conversations or prove behaviour. Run the prompts above in Codex and Claude Code to verify host behaviour. Machine-readable scenarios are in [matter-continuity-behavioral-evals.yaml](../plugins/legal-ai-skills/tests/matter-continuity-behavioral-evals.yaml).
