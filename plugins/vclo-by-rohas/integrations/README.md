# Integrations and research sources

vCLO works from uploaded or local files and does not require a proprietary backend. It bundles free read-only company-registry connectors and maintained legal-source guides; other connected systems remain optional capability providers, not prerequisites.

## Capability categories

- [Document sources](document-sources.md)
- [Email and calendar](email-and-calendar.md)
- [Company registries](company-registries.md) — bundled SEC EDGAR, GLEIF and optional-key Companies House tools
- [Legal research](legal-research.md) — official-source-first protocol routed through the India, US and UK Counsel modules
- [GitHub](github.md)

An agent or workflow should request a capability, such as “search authorised matter documents,” rather than require a named vendor. A provider may be used only when the host exposes an executable tool and the user has authorised the relevant scope.

## Discovery and fallback

Before using a connected system:

1. determine whether the required capability is available;
2. identify the account, folders, repositories, custodians, date range and actions in scope;
3. state if document content may be transmitted to an external service;
4. use the minimum data and permissions needed;
5. record the source and retrieval date in the work product where material.

If a capability is unavailable, do not claim that a search or verification occurred. Ask for an upload or export, continue on the available evidence where useful, and mark the external check outstanding.

## Security, privacy and privilege

- Never write credentials, tokens or secrets to repository files or outputs.
- Do not broaden the user's selected scope silently.
- Avoid copying privileged, confidential or personal material when a locator or narrow extract is sufficient.
- Do not send documents to a third party unless the service is configured, required for the task and within the user's instructions.
- Preserve source metadata, access limits and retrieval history where evidence may matter.
- Treat connected-system results as evidence to assess, not automatically as complete or authoritative.

## Provider implementation contract

A concrete adapter should document supported actions, authentication method, permission model, data transmitted, limits, error behaviour and audit evidence. Documentation alone is not an executable integration.
