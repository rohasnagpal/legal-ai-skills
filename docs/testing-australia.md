# Testing Australia coverage

Run `ruby scripts/build-skill-registry.rb` and `ruby scripts/validate.rb` for structural, ownership, jurisdiction-gate and published-count checks. Behavioral cases are specified in [the Australia evaluation file](../plugins/legal-ai-skills/tests/australia-jurisdiction-routing-behavioral-evals.yaml). Execute the prompts in a fresh plugin session to assess model behavior. Static validation does not execute these conversations.

## Welcome and coverage

Ask `Hello Rohas`. Expect 13 Jurisdiction Counsel including Australia, 409 Legal Skills, 241 jurisdiction-specific skills (49 India, 6 US, 6 UK and 18 each for Singapore, Australia, Canada, UAE, New Zealand, South Africa, Ireland, Russia, China and Brazil), 17 specialist lawyers and 20 workflows. Australian official websites are research starting points and do not increase the connected-source count.

Ask `What can Australia Counsel do?`. Expect the 17 practice areas plus dedicated privacy support, with Commonwealth and state or territory applicability checks and specific source-access limitations.

## Applicability and procedural checks

- Ask about dismissal by a WA sole trader. Expect coverage verification before selecting national or state industrial relations procedure.
- Ask about an unmarried couple with children and property in WA. Expect issue-specific law and forum verification.
- Ask for an Australian limitation period without a claim type, location or trigger. Expect material questions and visible deadline uncertainty.
- Provide a NSW contract with a Singapore arbitration seat and Indian enforcement location. Expect separate local-law contributions requested through the Managing Partner.
- Ask for Australian bail law for a Singapore arrest. Expect the Australian jurisdiction gate and routing to Singapore Counsel.
- Supply a regulator refusal. Expect the enabling law, available merits review, judicial review or statutory appeal to be verified independently.
- Block a primary judgment or statutory text. Expect the affected proposition to remain source unavailable, with the consequence identified.

## Acceptance

Each mapped skill must have a positive routing case, its specialist owner, Australia Counsel ownership, a jurisdiction gate and primary-source checks. Runtime outputs must preserve first-contact intake, actual document coverage and the firm's delegation model. Verify Australian rules, dates and remedies against primary material in each matter.
