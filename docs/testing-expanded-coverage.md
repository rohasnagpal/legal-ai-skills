# Expanded coverage: validation and behavioural review

## Added capabilities

Eight jurisdiction modules (Canada, UAE, New Zealand, South Africa, Ireland, Russia, China and Brazil), each with a counsel gateway, 18 local skills, all 17 specialist owners, privacy route, source guide, integration limits and jurisdiction gates. Indian government schemes, legal translation and activity/decision logging add three further skills. Language preferences travel across the firm separately from jurisdiction.

## Automated checks

```text
ruby scripts/build-skill-registry.rb
ruby scripts/validate.rb
node --test plugins/legal-ai-skills/skills/activity-decision-logger/scripts/append-log.test.mjs
```

The Ruby validator checks structure, references, ownership, jurisdiction gates, published counts, complete practice-area mapping and behavioural fixture shape. The Node tests exercise append preservation, linked corrections, record timestamps, schema failures, cross-matter rejection, competing-writer lock and damaged-log refusal. Neither proves legal accuracy or live host routing.

## Behavioural scenarios

The five `<country>-jurisdiction-routing-behavioral-evals.yaml` files and `expansion-behavioral-evals.yaml` under `plugins/legal-ai-skills/tests/` contain review scenarios, not recorded passing model runs. Run these in a fresh host session with the candidate plugin loaded; retain actual outputs, source/tool traces, host/model version and a pass/fail rationale. Review local-law substance with a competent lawyer before release.

Check particularly:

- Canada: Quebec versus common law, federal versus provincial employment and security, bilingual authorities.
- UAE: mainland versus ordinary free zones versus DIFC/ADGM; Arabic authority and actual forum.
- New Zealand: domestic procedure and Treaty/tikanga/Māori land applicability; no importation of Australian rules.
- South Africa: national/provincial rules, customary law, constitutional review and specialised labour remedies.
- Ireland: Republic versus Northern Ireland; Irish/EU law, commencement and current forum forms.
- Every country: foreign-law gate, missing facts, blocked official source, historical version, adverse authority and unknown deadline premises.
- Schemes: operative guidelines versus directory summary, closed window, missing eligibility evidence, prior benefits, sanction discretion and recovery notices.
- Translation: omissions, negation, defined terms, figures, unmatched numbering, ambiguity, unofficial status and certification requests.
- Language: “Hola Rohas” gets a Spanish welcome with current counts; Spanish interaction about Canadian law remains Spanish without assuming Spain.
- Logs: actual actions versus summaries, retrospective/unknown event times, correction links, missing host events, failed writes and sensitive-data minimisation.

Source guides record landing-page retrieval and blocking observations from implementation. They do not certify that individual laws, all linked portals or later treatment were checked. Use official primary material at matter execution time and report inaccessible load-bearing sources.

- Russia: federal subject, authoritative Russian text, state arbitrazh courts versus arbitration, and separate domestic/foreign sanctions checks.
- China: mainland-only scope; Hong Kong, Macao and Taiwan require separate routing; Chinese text and local implementation.
- Brazil: federal/state/municipal competence, specialist courts, Portuguese text and tax-period transitions.

After this expansion expect 13 Jurisdiction Counsel, 416 Legal Skills and 241 jurisdiction-specific skills. The routing cases are evaluation fixtures; repository validation does not establish live model performance.
