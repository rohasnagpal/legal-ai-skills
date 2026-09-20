# Company registries

## Bundled free connectors

vCLO ships a read-only MCP server at [`../mcp/company-registry-server.mjs`](../mcp/company-registry-server.mjs). It provides:

- **SEC EDGAR** for US SEC filers, without an API key;
- **GLEIF** for global entities that have a Legal Entity Identifier, without an API key; and
- **UK Companies House** for UK companies, using a free developer API key supplied through `COMPANIES_HOUSE_API_KEY`.

These sources are complementary, not universal. SEC EDGAR is not a state incorporation or good-standing register. GLEIF does not cover entities without an LEI. Companies House covers the UK only. Absence from a search must not be treated as proof that an entity, filing, charge, owner or liability does not exist.

The bundled tools can search entities, retrieve a source record, list SEC or Companies House filings, and retrieve UK officer, person-with-significant-control and charge data. Every result includes the source URL, retrieval time and a coverage warning.

## Required capability

Retrieve current or historical company information from an official registry or another identified source. Examples include Companies House, SEC EDGAR and applicable local official registries. OpenCorporates or other aggregators may assist discovery but do not replace the underlying official record where available.

## Expected actions

- search an entity by legal name or identifier;
- retrieve incorporation status, registered details, officers and filings;
- retrieve ownership disclosures, charges or comparable encumbrance records where the jurisdiction provides them;
- download or link to an official filing;
- record source, retrieval date and any registry coverage limitation.

## Verification rules

Confirm that the entity identifier and jurisdiction match the subject. Distinguish current data from filing-date data and official records from third-party aggregation. Explain where a registry does not disclose beneficial ownership, charges or historical information. A filed document may evidence a filing, but not necessarily the truth of every statement in it.

## Fallback

If the bundled source does not cover the relevant jurisdiction, a required API key is unavailable, or registry access otherwise fails:

> Corporate registry verification is currently unavailable. I can continue from the supplied documents and mark the specific registry checks as outstanding.

Do not claim a clean registry search, good standing or absence of charges without the required source and search scope.
