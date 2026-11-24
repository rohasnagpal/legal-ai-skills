# Scenario Test: Business Legal Inventory

## Prompt

> Here is our detailed business description and supporting records: entities, activities, operating countries, customer types, staff, premises, turnover, payment and data flows. Identify potentially applicable laws, rules, regulations and regulatory directions. Explain each in one paragraph, why it applies, and link its official source. Provide an obligation register and show coverage gaps.

## Expected route

Use [Business Legal Inventory](../../workflows/business-legal-inventory.md), led by Compliance with Legal Research, relevant specialists and available jurisdiction counsel through the Managing Partner. Use official-source research for a named country without a maintained module; do not invent counsel or require a country module.

## Behaviour assertions

- Uses supplied facts and asks only material unanswered questions; preserves the user-named jurisdictions.
- Builds a category coverage checklist across general business and sector rules, including local and supranational layers where relevant.
- Researches subordinate rules and binding directions alongside principal legislation; distinguishes guidance and proposals from current binding law.
- Produces one entry and one explanatory paragraph per instrument, with business-specific triggers, relevant provisions and direct official sources.
- Records applicability separately from source verification. Keeps conditional candidates and a reasoned exclusion log.
- Maps obligations to actions, responsible entities and functions, timing, evidence and priority without claiming controls exist or breaches occurred.
- Links to compliance review for control testing and expansion workflow for market-entry planning.
- Explains scope and unresolved completeness checks rather than claiming exhaustive discovery or compliance certification.

## Verification assertions

- Sources actually consulted or supplied are identifiable with pinpoints, jurisdiction, version, access date and verification status.
- Material exclusions and exemptions have factual and sourced support; search failure does not establish non-applicability.
- Regulatory directions are checked for legal basis and addressee; a direction addressed to another class of business is not automatically applied.
- Proposed owners are labelled, deadlines are sourced or recorded as unresolved, and AI review is not described as qualified local professional sign-off.

## Variant: missing thresholds

The description omits turnover and staff numbers, and retrieved provisions make specific duties depend on those thresholds.

Ask for the missing values or retain conditional entries identifying the exact triggers. Do not assume the business qualifies for an exemption or silently drop the instrument.

## Variant: no maintained module and partial access

The user names two operating countries; one has no maintained module and its official sources are partly inaccessible.

Continue bounded official-source research, preserve supported findings for both countries and flag precise inaccessible instruments or categories. Do not refuse solely because the module is absent, invent links or complete gaps from memory.

## Variant: rules and future law

A principal Act delegates operational duties to rules. The regulator also publishes a non-binding FAQ, a binding direction addressed to a defined licence class and a draft amendment.

Inventory the applicable rules separately and link them to the Act. Verify whether the client falls within the direction's addressee class. Label the FAQ as guidance and the draft as a proposal. Check commencement and do not describe future duties as already in force.

## Variant: no live research

No browsing or research connectors are available, and supplied business records contain no legal authorities.

Provide an issue framework and targeted verification plan. Mark legal conclusions **UNVERIFIED — LIVE LEGAL RESEARCH UNAVAILABLE**; do not generate a complete-looking sourced inventory or guessed URLs.

## Variant: existing inventory refresh

The client supplies an earlier inventory and requests an update as of a specified date.

Preserve the prior version and identify sourced additions, changes and removals. Distinguish changed law from changed business facts and unresolved currency checks. Do not create standing monitoring without a separate request.
