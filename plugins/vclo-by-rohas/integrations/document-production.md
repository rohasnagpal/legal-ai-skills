# Document production and delivery systems

vCLO separates document-production instructions from the tool that performs the operation. The [Legal Document Producer](../skills/legal-document-producer/SKILL.md) controls formatting, source preservation, quality checks and fallback behaviour. A tool or connector may be used only when the host exposes it and the user authorises the relevant files and action.

## Free built-in core

The plugin bundles a local `document-production` MCP adapter for:

- DOCX and PDF creation or conversion;
- use of supplied DOCX style references and bundled Markdown templates;
- searchable-PDF creation through OCR; and
- ordered PDF document assembly.

The adapter uploads nothing. It detects free local engines—Pandoc, LibreOffice, OCRmyPDF, pdfunite and qpdf—and reports which operations are actually available. The adapter remains usable for template discovery when an engine is absent, but it must not claim to have converted, OCRed or assembled a document. The relevant engine can be discovered through `PATH` or configured with `VCLO_PANDOC_PATH`, `VCLO_SOFFICE_PATH`, `VCLO_OCRMYPDF_PATH`, `VCLO_PDFUNITE_PATH` or `VCLO_QPDF_PATH`.

Always preserve the source by default. Do not overwrite an existing output without explicit permission. Record the engine used and inspect the rendered result before describing it as complete.

## Optional user-connected services

### Google Drive and Docs

Use an available Google connector for authorised retrieval, collaborative editing or delivery. Confirm the account, folder or document, requested access and whether a new document, copy or update is intended. State that the content will be processed by Google. Do not describe suggested edits as native tracked changes unless the connector actually created suggestions.

### Microsoft 365

Use an available Microsoft connector for authorised OneDrive or SharePoint retrieval and delivery. Confirm the tenant, site, library, folder, document, version action and permissions. State that the content will be processed by Microsoft. Preserve tracked changes, comments, labels and version history unless the user instructs otherwise and the connector supports it.

These services are optional. vCLO must fall back to local or uploaded files when they are unavailable.

## Optional enterprise integrations

### iManage

Use only through a law firm's configured and authorised iManage integration. Confirm client and matter, workspace, document identity, version, profile metadata, access controls, checkout state and whether the action is a new version, new document or export.

### NetDocuments

Use only through a law firm's configured and authorised NetDocuments integration. Confirm repository, cabinet, workspace or matter, document identity, version, profile metadata, access controls and whether the action is a new version, new document or export.

iManage and NetDocuments are not bundled services and may require commercial licences, administrator approval and separate connector development. Never claim they are connected merely because this capability contract exists.

## Security and audit record

- Use the minimum source and destination scope needed.
- Never place credentials or tokens in prompts, repository files or outputs.
- Do not send privileged or confidential content to a cloud or enterprise service without authorisation.
- Record source file, source version, output, template, operations, tool or connector, production time and unresolved exceptions.
- Do not sign, file, serve, email or publish the produced document under this capability.
