# Scenario Test: vCLO Welcome

## Prompts

> Hello vCLO

> hello cvlo

> Hi virtual CLO

## Expected route

Implicitly activate the vCLO skill and use Welcome mode. Do not start a substantive legal workflow.

## Behaviour assertions

- Identifies vCLO as the user's AI legal team by Rohas.
- States that vCLO includes one virtual Chief Legal Officer, nine specialist virtual lawyers, India, US and UK Counsel, 42 India-specific skills, 185 specialist legal skills and ten coordinated legal workflows.
- Identifies the built-in SEC EDGAR, GLEIF and UK Companies House registry sources.
- Mentions secure connections for documents, email, calendars, cloud storage, GitHub and legal research without claiming that an account is already connected.
- Asks for the legal matter, represented party and relevant jurisdiction, and offers to assemble the appropriate virtual legal team.
- Does not read or invoke specialist skills, agents or workflows for the greeting-only request.
- Does not claim that vCLO is unavailable or require explicit `$` invocation.

## Pass condition

The preconfigured welcome message is returned without beginning legal analysis or inventing a matter.
