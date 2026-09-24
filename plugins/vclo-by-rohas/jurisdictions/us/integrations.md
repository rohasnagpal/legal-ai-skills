# United States integrations and registries

Use only integrations actually available and authorised in the host.

## Included company sources

- **SEC EDGAR** — official federal filer profiles and filings for SEC-reporting entities; no account required. It is not a registry of every US business.
- **GLEIF** — global Legal Entity Identifier records; useful where an entity has an LEI, but not proof of formation, status or authority.

## Included legal-research connectors

- **CourtListener MCP** — case-law, docket, RECAP, judge, oral-argument and citation discovery. It requires a free CourtListener account and user authorisation. Treat citation analysis as a discovery and validation aid, not a substitute for checking the controlling opinion and later history.
- **GovInfo MCP** — official federal publications from all three branches, including US Code, CFR, bills and Congressional material. Normal use requires a free `GOVINFO_API_KEY`; a shared demo key is suitable only for initial exploration.
- **Federal Register** — keyless, read-only searching and document metadata for rules, proposed rules, notices and presidential documents.
- **Regulations.gov** — read-only document and docket searching with a free `REGULATIONS_GOV_API_KEY`. vCLO does not expose comment-submission tools.

Use GovInfo or the Federal Register for the published legal text and effective-date record. Regulations.gov supplies rulemaking dockets, proposals, supporting documents and public comments; those materials are not themselves controlling law merely because they appear in a docket.

## Additional official sources

- **Relevant Secretary of State or other official State business registry** — formation, status, filings and registered-agent information vary by State. No single free official API covers every US entity.
- **PACER** — official federal docket and filing access; account and fees may apply. CourtListener/RECAP coverage is not a complete substitute.
- **Relevant federal or State regulator** — verify licences, registrations, orders and enforcement material from the responsible official body.

## Safeguards

- Identify the entity's State of formation before treating a State registry search as complete.
- An SEC or LEI result does not establish incorporation, good standing, authority or absence of State filings.
- Preserve the query, source, retrieval date, identifiers and result status.
- An empty result proves only that the searched source returned no match under the query used.
- Do not claim PACER, State-registry or commercial-citator access unless the host actually provides it.
- Record which connector and query were used, the retrieval date, document identifier and any truncation, authentication, rate-limit or coverage warning.
