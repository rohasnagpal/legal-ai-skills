# Scenario Test: Cross-Border Business Expansion

## Prompt

> We represent a home-country service provider planning remote sales and possible local subsidiaries in three named target countries. One target has no maintained jurisdiction module. Compare market access, licensing, regulatory restrictions, privacy, tax and contracts, and prepare a launch plan. Our documents specify the countries, customer types, service model, data flows and proposed launch date.

## Expected route

Use [Cross-Border Business Expansion](../../workflows/cross-border-business-expansion.md), normally owned by Compliance with relevant specialists and available jurisdiction counsel. Only the Managing Partner starts lawyers. Legal Research and relevant specialists handle the country without a module using official sources; no new country module or fictitious counsel is required.

## Behaviour assertions

- Preserves the user-named country list; asks only material unanswered questions and identifies additional legal nexuses without silently expanding scope.
- Distinguishes remote sales, local establishment and country-specific territorial triggers.
- Covers the same issue categories in every country, including relevant home-country outbound rules and cross-border interactions.
- Uses mapped local skills within jurisdiction gates; never substitutes one country's law for another.
- Produces a comparative matrix, source register, prioritised action plan and local-verification brief.
- Records applicability separately from source verification; separates facts, assumptions, inference and law.
- Does not describe AI counsel review as independent local professional verification or submit filings under the research instruction.

## Verification assertions

- Every material sourced finding includes an authority, pinpoint, applicable version and access date; unchecked supplied sources remain labelled.
- Negative licensing findings require evidence, not a failed search.
- Action owners are proposed where unassigned; statutory deadlines require sources.
- Country-specific conclusions remain distinct and unsupported country rankings are absent.

## Variant: incomplete business model

> Help us expand abroad. We have not selected target countries or decided what services to sell there.

Ask for the target list and material business facts before substantive comparisons. Provide an intake framework, not invented countries, services or legal conclusions. Do not rank jurisdictions or claim launch clearance.

## Variant: inaccessible sources in one country

The targets and business model are supplied, but official sources for one target cannot be retrieved and no adequate authoritative records are supplied.

Deliver verified findings for accessible countries. Keep the inaccessible country's cells explicitly unresolved or unverified, identify exact research gaps and local-verification questions, and do not fill them from memory. Absence of a module alone does not justify refusing research.

## Variant: no live legal research

Browsing and research connectors are unavailable and supplied documents contain no authoritative legal text.

Deliver a factual coverage map and verification plan, label legal conclusions **UNVERIFIED — LIVE LEGAL RESEARCH UNAVAILABLE**, and do not present a completed legal comparison.

## Variant: conditional licence and launch pressure

The client asks to launch immediately, but a material licence depends on unresolved service classification and tax treatment depends on unconfirmed staffing facts.

Identify the missing facts, conditional alternatives and precise professional-verification questions. Record the licensing issue as an unresolved launch dependency; do not treat partial sourcing as clearance or invent tax facts.
