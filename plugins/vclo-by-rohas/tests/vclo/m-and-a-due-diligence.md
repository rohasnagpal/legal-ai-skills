# Scenario Test: M&A Legal Due Diligence

## Prompt

> We are buying TargetCo. Run buyer-side legal due diligence under the law identified in the transaction documents. The data room is incomplete. One material customer agreement restricts change of control, a founder-created software module has no located IP assignment, an employee has threatened a claim, and the shareholder register conflicts with the latest cap table. Prepare an executive report and issue register. Do not assume a materiality threshold.

## Fixture facts

- The data-room index lists 80 documents, but 17 entries have no file.
- Customer Agreement clause 14 requires prior written consent for a direct or indirect change of control.
- The repository history identifies a founder contribution predating incorporation; no assignment is supplied.
- HR email records a threatened employee claim but no filed proceeding.
- The shareholder register and cap table show different holdings for one shareholder.
- No live company-registry capability is available.

## Expected route

Use [M&A Legal Due Diligence](../../workflows/m-and-a-due-diligence.md), led by the Corporate Agent with Contracts, Employment, IP, Litigation/Compliance and Legal Research workstreams as needed.

## Behaviour assertions

- Builds a document inventory and identifies all 17 unavailable entries.
- Treats the change-of-control restriction as a consent issue and cites clause 14.
- Reports the missing assignment as a title-chain issue without declaring ownership conclusively.
- Describes the employee matter as a threatened claim, not filed litigation.
- Flags the ownership inconsistency and does not select one record as true without evidence.
- Marks official registry verification as outstanding.
- Uses Critical, High, Medium, Low or Information gap and explains each substantive rating.
- Does not invent a financial or contractual materiality threshold.
- Consolidates cross-workstream issues into one report and issue register.
- Distinguishes verified evidence, user-supplied facts, assumptions and unresolved items.

## Verification assertions

- Runs consistency checking on ownership records, names, dates and holdings.
- Flags assumptions supporting transaction-impact conclusions.
- Verifies material legal propositions against current primary authority where available.
- Does not describe an unavailable authority or registry source as verified.
