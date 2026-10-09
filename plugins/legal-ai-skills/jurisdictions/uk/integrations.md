# United Kingdom integrations and registries

Use only integrations actually available and authorised in the host.

## Included company sources

- **UK Companies House** — official company profiles, filings, officers, persons with significant control and charges. API access may require a free key.
- **GLEIF** — global Legal Entity Identifier records; useful where an entity has an LEI, but not proof of incorporation, status or authority.

## Included legal-research connectors

- **legislation.gov.uk** — bounded, read-only searches and document extracts from the official legislation service. Check territorial extent, application, commencement, historical versions, amendments and outstanding effects on the official record.
- **The National Archives Find Case Law** — bounded, read-only searches and judgment extracts for England and Wales, plus UK Supreme Court and Privy Council material within the service's coverage. It is not a citator and is not a complete record of every judgment.

- **The Gazette** — bounded, read-only searches of official notices (insolvency, company, and wills and probate) and individual notice text. Use it to check winding-up petitions and orders, administrations, liquidator appointments, bankruptcy orders, strike-offs and deceased-estate notices. Text search can miss notices with different spellings or former names, so an absent notice is not proof that no event occurred; check Companies House and the Individual Insolvency Register too. The publisher rate-limits requests: keep searches few and specific.

Find Case Law use must remain fair and reasonable. Do not crawl, build an external index or perform bulk computational analysis through Legal AI Skills. The National Archives requires a separate licence for computational analysis at scale. Preserve the case name, neutral citation, court, date, official link and retrieval date, and check appeals and later treatment separately.

## Additional official sources

- **Relevant court, tribunal or regulator** — verify litigation, licences, registrations, decisions and enforcement material from the responsible official body.

## Safeguards

- Confirm the correct company number and entity before attributing a filing or officer.
- A Companies House record is not a substitute for reviewing filed documents, constitutional records, charges or other registries relevant to the issue.
- Preserve the query, source, retrieval date, identifiers and result status.
- An empty result proves only that the searched source returned no match under the query used.
- Do not claim court-docket, regulator or citator access unless the host actually provides it, or a Gazette check unless the Gazette connector returned results.
- If legislation.gov.uk blocks an automated request or a judgment is outside Find Case Law's coverage, use the official site manually or the next source in the authoritative-source hierarchy and disclose the limitation.
