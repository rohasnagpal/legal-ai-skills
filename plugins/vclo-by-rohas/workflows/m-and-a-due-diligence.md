# M&A Legal Due Diligence

## Trigger and objective

Use for buyer-side, seller-side or lender-focused legal due diligence on an acquisition, investment, merger or comparable transaction. Identify evidence-supported legal risks and information gaps, explain transaction impact, and recommend practical action without inventing materiality.

## Required inputs

- represented party and diligence perspective;
- target entity and transaction type;
- relevant jurisdictions and material dates;
- scope, exclusions and user-approved materiality criteria;
- available transaction documents or access to an authorised document source.

Optional inputs include the term sheet, transaction timetable, data-room index, request list, risk appetite, reporting format and prior diligence.

## Agents and skills

The [Corporate Agent](../agents/corporate-agent.md) leads. Use the [Contracts Agent](../agents/contracts-agent.md), [Employment Agent](../agents/employment-agent.md), [IP Agent](../agents/ip-agent.md), [Litigation Agent](../agents/litigation-agent.md), [Compliance Agent](../agents/compliance-agent.md) and [Legal Research Agent](../agents/legal-research-agent.md) where the scope requires them.

Core skills are [m-and-a-diligence-checker](../skills/m-and-a-diligence-checker/SKILL.md), [cap-table-analyst](../skills/cap-table-analyst/SKILL.md), [contract-reviewer](../skills/contract-reviewer/SKILL.md), [ip-portfolio-analyst](../skills/ip-portfolio-analyst/SKILL.md), [litigation-strategy-planner](../skills/litigation-strategy-planner/SKILL.md) and [regulatory-applicability-analyst](../skills/regulatory-applicability-analyst/SKILL.md). For an Indian target, invoke `vclo-by-rohas:india-counsel` and use `vclo-by-rohas:labour-compliance-checker` where employment compliance is in scope. Select additional skills only for issues actually in scope.

## Helpful capability categories

- [document sources](../integrations/document-sources.md) for the data room;
- [company registries](../integrations/company-registries.md) for official entity and filing checks;
- [email and calendar](../integrations/email-and-calendar.md) for authorised instructions and deadlines;
- [GitHub](../integrations/github.md) for software ownership and licence diligence;
- [legal research](../integrations/legal-research.md) for material legal propositions.

## Execution sequence

1. Confirm perspective, jurisdiction, target, transaction type, scope and materiality criteria. If none are supplied, use no invented threshold: report significance qualitatively and ask the user to set one where needed.
2. Locate the documents. If none are accessible, request upload or an available connected source and stop document-dependent conclusions.
3. Build a document inventory with source, version, date, status, missing schedules and review owner.
4. Corporate workstream: structure, capitalization, governance, filings, approvals, related parties and closing authority.
5. Contracts workstream: material agreements, change of control, assignment, termination, exclusivity, indemnity, liability and consent requirements.
6. Employment workstream: key personnel, terms, disputes, benefits, restrictive covenants and compliance.
7. IP workstream: ownership, assignments, licences, registrations, repositories and open-source issues where relevant.
8. Litigation and compliance workstreams: disputes, investigations, orders, licences, regulatory exposure and data/privacy issues.
9. Legal Research workstream: verify only material legal propositions requiring external authority.

Steps 4–8 may run in parallel where supported. Each workstream must use the same document inventory, scope, severity definitions and finding schema.

## Consolidation

The CLO reconciles cross-functional findings, removes duplicates, identifies contradictions and links related issues. Each finding must state:

- ID, area and issue;
- severity: Critical, High, Medium, Low or Information gap;
- evidence with document, page, clause or registry locator;
- legal and business impact;
- recommended pre-signing, closing, drafting, indemnity, price, remediation or post-closing action;
- owner, status and verification state.

Critical means a potentially transaction-blocking or fundamentally value-altering issue on the available evidence. High means material exposure requiring a transaction response. Do not upgrade a finding solely because evidence is missing; use Information gap unless the supported consequence independently warrants another rating.

## Verification

Run [consistency-checker](../skills/consistency-checker/SKILL.md) across ownership, dates, names and amounts; [assumption-flagger](../skills/assumption-flagger/SKILL.md) on conclusions; and [authority-validator](../skills/authority-validator/SKILL.md) where law is material. Use [citation-integrity-checker](../skills/citation-integrity-checker/SKILL.md) or [adversarial-reviewer](../skills/adversarial-reviewer/SKILL.md) when proportionate.

## Deliverable

Use the [due diligence report template](../assets/vclo/due-diligence-report-template.md) and [issue register](../assets/vclo/issue-register-template.md). Include an executive summary, red flags, detailed findings, source references, recommended actions, unresolved items and verification status.

## Fallback behaviour

Without subagents, execute workstreams sequentially and preserve their headings. Without integrations, work from supplied files. If a registry or live legal source is unavailable, continue where possible and identify the exact outstanding check. Never treat absence from the supplied data room as proof that a document or liability does not exist.
