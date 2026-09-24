# Litigation Viability Report specification

Use this reference when producing the consolidated report. The report is decision support, not a verdict.

## Required sections

1. Cover and report metadata
2. Executive summary
3. Scope, record reviewed, limitations and assumptions
4. Parties and relevant third parties
5. Source-linked chronology
6. Jurisdiction, governing law, forum and dispute-resolution route
7. Credible claims, defences and counterclaims
8. Applicable legislation, rules and official guidance
9. Relevant favourable and adverse case law
10. Fact-to-law analysis
11. Evidence matrix
12. Strongest reasonable opposing case
13. Limitation and urgent deadlines
14. Procedure and preconditions
15. Remedies, quantum and mitigation
16. Practicality, solvency, recovery and enforcement
17. Route comparison and settlement considerations
18. Critical missing information and evidence
19. Prioritised next steps
20. Lawyer briefing note
21. Sources and verification status
22. Methodology and appropriate legal-information notice

Use tables for chronology, claims, evidence, limitation and sources when they make comparison clearer. Do not let the report become a catalogue of hypothetical claims.

## Source provenance

Maintain a record for every material source actually used:

```json
{
  "source_type": "legislation | case | regulation | rule | guidance | document | secondary",
  "name": "",
  "jurisdiction": "",
  "official": true,
  "authority_level": "",
  "url_or_document_locator": "",
  "accessed_at": "",
  "relevant_date": "",
  "proposition": "",
  "verified": true,
  "verification_limit": ""
}
```

Include only sources actually consulted. A discovery database should not be labelled official. A verified URL proves access to that source, not that the authority remains good law; record later-treatment limitations separately.

## Report metadata

Embed or display:

```json
{
  "product": "vCLO",
  "report_type": "Litigation Viability Report",
  "jurisdiction": "",
  "matter": "",
  "prepared_at": "",
  "report_version": "",
  "sources_verified": false,
  "source_registry": "vclo-jurisdiction-module",
  "record_cutoff": ""
}
```

Set `sources_verified` to true only if every material legal authority relied upon was independently checked. Otherwise explain the precise verification gap.

## Quality gate

Before delivery confirm, where applicable:

### Law and jurisdiction

- Governing law, forum and subnational jurisdiction are identified or expressly unresolved.
- Material legislation, cases, procedure and limitation rules are verified against the applicable date.
- Adverse authority and historical-law issues are addressed.
- No authority, quotation, pinpoint or URL is invented.

### Facts and evidence

- User statements, documents, allegations, disputed facts, assumptions and analysis are distinguished.
- Each material conclusion is traceable to evidence or identified as unsupported.
- Missing, contrary and potentially adverse evidence is surfaced.
- Document references use clause, page, paragraph, exhibit or other stable locators where available.

### Adversarial and practical review

- The strongest reasonable opposing case and plausible counterclaims are tested.
- Remedies are separated from proof and realistic recovery.
- Solvency, assets, insurance and enforcement are not assumed.
- Cost and duration are described without fabricated estimates.

### Output

- Urgent issues are prominent and proportionate.
- The conclusion does not promise an outcome or reduce the analysis to one score.
- Sources and verification limits are included.
- The lawyer briefing note identifies decisions requiring qualified advice.
- HTML, DOCX or PDF production is claimed only if the file was actually generated and checked.

## No-live-research notice

When material law could not be checked, place this prominently near the executive summary:

> **UNVERIFIED LAW — LIVE LEGAL RESEARCH UNAVAILABLE.** The factual, documentary and evidence analysis may still be useful, but current law, authorities, procedure and limitation have not been independently verified and must be checked before action is taken.
