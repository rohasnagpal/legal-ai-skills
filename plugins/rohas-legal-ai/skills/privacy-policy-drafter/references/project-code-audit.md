# Project Code Audit

Use this workflow when website or application code is available in the current
Codex workspace. Inspect read-only until the user asks to create or update the
policy artifact.

## 1. Establish scope

- Identify the project root, repository instructions, applications, packages,
  services, deployment configuration, and existing privacy or cookie notices.
- Inventory the repository with fast file search. Cover all first-party source and
  configuration while excluding dependency directories, generated output, caches,
  binaries, vendored code, and minified bundles from line-by-line review.
- Inspect lockfiles only to confirm dependency names and versions relevant to data
  processing. Do not treat a dependency as used until code or configuration connects it.
- In a monorepo, trace shared packages and every public-facing application or API
  that contributes to the service in scope.

## 2. Inspect privacy-relevant implementation

Review the following across frontend, backend, workers, infrastructure, and tests:

- pages, forms, field names, validation, account and profile flows, contact and
  newsletter forms, search, checkout, comments, uploads, support, and admin tools;
- cookies, consent managers, browser storage, device identifiers, service workers,
  pixels, analytics, advertising, attribution, session replay, and experimentation;
- API routes, authentication, authorisation, sessions, OAuth providers, webhooks,
  file handling, rate limiting, fraud controls, and user-generated content;
- database schemas, ORM models, migrations, object storage, caches, queues, search
  indexes, logs, telemetry, error reporting, backups, exports, and deletion paths;
- package manifests, imports, scripts, configuration, and environment-variable names
  indicating payment, email, hosting, CDN, analytics, support, identity, maps, social,
  AI, or other third-party services;
- infrastructure and deployment files that evidence regions, subprocessors, network
  flows, observability, storage, encryption, retention jobs, or scheduled deletion;
- model or AI features, including user inputs, retrieved content, generated outputs,
  human review, safety monitoring, provider transmission, and any training-related use;
- sensitive, child-related, biometric, precise-location, employment, health, financial,
  communications, or legal data and any consequential automated decisions.

Never print secret values. Record only the existence and privacy significance of a
credential or configuration field.

## 3. Trace data flows

Build a working matrix with one row per processing activity:

| Field | Required content |
|---|---|
| Collection point | Page, form, API, import, device event, or third-party source |
| Data | User-meaningful categories and sensitive elements |
| Subject | Visitor, customer, account user, child, employee, applicant, or other person |
| Purpose | Concrete implemented purpose |
| Processing path | Client, server, database, queue, vendor, recipient, and deletion path |
| Evidence | File path and relevant symbol, route, configuration, or line |
| Confidence | Confirmed, supported inference, or unresolved |
| Policy impact | Disclosure, choice, right, transfer, retention, or contact requirement |

Reconcile frontend collection with server handling and storage. Check that every
external request, SDK, webhook, database write, log event, and user-facing control has
an entry or a documented reason for exclusion.

## 4. Identify gaps without stalling

Code commonly cannot establish the legal entity and role, target jurisdictions,
contractual vendor terms, production feature flags, actual hosting region, lawful
basis, retention periods, backup deletion, offline disclosures, internal access,
sale or sharing status, privacy contact, or effective date.

Ask a compact set of targeted questions after the initial audit. Explain why each
answer changes the notice. If the user does not answer, continue with a usable draft
that marks unresolved items conspicuously and does not convert assumptions into claims.

## 5. Draft and verify

- Draft the public notice in plain language from the verified matrix, not from package
  names or generic templates.
- Keep the internal evidence matrix separate from the public policy.
- Compare an existing policy against the observed flows and preserve accurate terms
  while correcting omissions or unsupported promises.
- Verify current legal requirements for the confirmed jurisdictions before treating
  the draft as publication-ready.
- Finish with unresolved facts, implementation-policy mismatches, publication steps,
  owners, and review triggers for new integrations or material processing changes.
