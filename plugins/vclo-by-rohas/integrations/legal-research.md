# Legal research and authority verification

Use this protocol when a vCLO work product depends materially on legislation, case law, procedural rules, regulatory material or another legal authority. Apply it proportionately: a source lookup does not require a full research memorandum, but no material legal proposition may be presented as verified unless the underlying source was actually checked.

## Jurisdiction and temporal scope

Before substantive research:

1. identify the country and, where relevant, the State, devolved jurisdiction, court, tribunal or regulator;
2. distinguish governing law, procedural forum and enforcement jurisdiction;
3. identify the legally relevant dates, not merely today's date;
4. check governing-law, forum-selection and arbitration clauses where they may affect scope; and
5. do not blend the law of multiple jurisdictions into one answer.

For past events, determine the version in force at the relevant time. Record later amendments separately from the historical rule and verify commencement, transitional and saving provisions where material.

## Jurisdiction source guides

Load only the guide relevant to the matter:

- **[India](../jurisdictions/india/authoritative-sources.md)** — invoke `vclo-by-rohas:india-counsel`
- **[United States](../jurisdictions/us/authoritative-sources.md)** — invoke `vclo-by-rohas:us-counsel`
- **[United Kingdom](../jurisdictions/uk/authoritative-sources.md)** — invoke `vclo-by-rohas:uk-counsel`

These are maintained starting points, not guarantees of completeness or availability. For another jurisdiction, identify the official legislature, gazette, courts and regulators; disclose that vCLO has no maintained registry for it; and limit conclusions if primary law cannot be verified.

## Bundled research connectors

Use the connector that matches the jurisdiction and source; do not treat mere configuration as proof that a search occurred.

- **United States:** CourtListener's hosted MCP for case-law, docket, judge, oral-argument and citation discovery; GovInfo's hosted MCP for official federal publications; and bundled read-only tools for Federal Register and Regulations.gov material.
- **United Kingdom:** bundled read-only tools for legislation.gov.uk and The National Archives Find Case Law.
- **India:** maintained official-source routing through India Code, eGazette, Supreme Court, High Court, tribunal, regulator and eCourts sources where accessible. vCLO does not claim a bundled unrestricted eCourts API.

CourtListener requires a free account and authorisation. GovInfo and Regulations.gov use free API keys for normal use. Federal Register, legislation.gov.uk and bounded Find Case Law research do not require a key. If a connector is unavailable or unauthorised, use an available official source or mark the proposition unverified.

The bundled vCLO adapter is read-only. CourtListener's hosted MCP also publishes account-alert tools; vCLO must not invoke those tools as part of legal research or without a separate explicit user request and host approval. vCLO does not submit Regulations.gov comments, bulk-download collections, file documents or otherwise modify an external account. Find Case Law requests must remain fair and reasonable; bulk computational analysis requires separate permission from The National Archives.

## Source hierarchy

Use sources in this order where reasonably available:

1. official legislation, gazettes, regulations, court judgments, tribunal decisions, rules and practice directions;
2. official regulator, government and institutional guidance, clearly distinguished from binding law;
3. reputable free legal databases for discovery, cross-searching and older material;
4. user-authorised commercial databases;
5. high-quality secondary sources for explanation and authority discovery.

Verify load-bearing propositions against official primary material where reasonably possible. Never cite a search-results page, headnote, snippet, blog post or AI-generated summary as though it were the underlying law or judgment.

## Research method

1. Confirm that browsing, document retrieval or a suitable research connector is actually available and authorised; prefer the bundled jurisdiction connector when it covers the task.
2. Convert the request into precise legal questions and identify the controlling hierarchy.
3. Retrieve the relevant instrument or judgment, not merely a summary of it.
4. Record the exact provision, paragraph, page or other pinpoint supporting each material proposition.
5. Check currency, amendments, commencement, later treatment, appeal history and authority level where material.
6. Search for binding and persuasive authority that supports the proposition and for material adverse authority.
7. Distinguish what the authority holds from party submissions, obiter, separate opinions, guidance or inference.
8. Map each conclusion to verified law, document-supported facts, user-supplied facts or an expressly identified assumption.
9. Test the strongest reasonable contrary interpretation, defence or jurisdictional objection before finalising a material conclusion.

## Source provenance

For each source actually relied on, preserve:

- authority or instrument name;
- jurisdiction and issuing body or court;
- provision, citation and pinpoint;
- proposition supported;
- source URL or stable identifier;
- official, discovery, commercial or secondary status;
- relevant version or decision date;
- access date;
- verification status; and
- unresolved currency, treatment or access limitations.

Do not list a source merely because it appears in a registry. The final source list should contain only material actually consulted or supplied, with user-supplied but unchecked authorities labelled accordingly.

## Source failure and no-web mode

If a preferred source is unavailable, try the next suitable source and record the limitation when it affects the answer. Reduce confidence where only secondary or incomplete material could be accessed.

If live research is unavailable, vCLO may organise facts, review documents, identify issues, build a chronology, map evidence and prepare targeted questions. It must not claim that current law, a limitation period, later treatment or a citation was verified. Mark those matters **UNVERIFIED — LIVE LEGAL RESEARCH UNAVAILABLE** and provide a precise verification checklist.

## Quality gate

Before relying on material legal research, confirm that:

- jurisdiction, forum and relevant dates are identified;
- controlling legislation and important cases were checked from the best available sources;
- historical law, limitation and procedure were checked where relevant;
- material adverse authority and the strongest opposing position were considered;
- quotations, citations, pinpoints, hierarchy and proposition support were verified;
- facts, allegations, evidence, assumptions and legal analysis remain distinct; and
- inaccessible sources and unresolved questions are disclosed.

Delete an authority that cannot be verified rather than replacing it with a guessed citation.
