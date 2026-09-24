# Bundled MCP servers

## Company registries

This dependency-free Node.js MCP server is bundled with vCLO and exposes read-only tools for:

- SEC EDGAR company and filing data for US SEC filers;
- GLEIF legal-entity and LEI data globally; and
- UK Companies House company, filing, officer, control and charge data.

SEC EDGAR and GLEIF need no API key. Companies House requires a free developer API key in `COMPANIES_HOUSE_API_KEY`. SEC requests use a project-level identifier containing the public repository URL. Set `VCLO_SEC_USER_AGENT` to a descriptive user agent containing your organisation or application name and contact details if you want your own identity used instead.

Codex uses the bundled launcher, which selects `CODEX_MCP_NODE_PATH` when available and otherwise falls back to `node` on `PATH`. Claude Code starts the same server directly with `node`, including on Windows. The server intentionally does not represent these sources as universal company registries. SEC coverage is limited to SEC filers, GLEIF coverage is limited to entities with an LEI, and Companies House covers the UK public record. An empty result is not proof that an entity or liability does not exist.

Run the local protocol and formatting tests with:

```bash
node --test mcp/company-registry-server.test.mjs
```

## Document production

The dependency-free Node.js `document-production` MCP adapter keeps document operations local and exposes tools to:

- report available document engines;
- list bundled Markdown and HTML legal-document templates, including the Litigation Viability Report;
- create or convert DOCX, PDF, ODT, RTF, HTML and text files;
- create searchable PDFs through OCR; and
- assemble ordered PDF bundles.

The adapter itself is bundled and free. It invokes free local engines only when they are present: Pandoc, LibreOffice, OCRmyPDF, pdfunite or qpdf. No file is uploaded. Use `get_document_toolchain_status` before relying on an operation. Override executable discovery with `VCLO_PANDOC_PATH`, `VCLO_SOFFICE_PATH`, `VCLO_OCRMYPDF_PATH`, `VCLO_PDFUNITE_PATH` or `VCLO_QPDF_PATH`.

The server preserves source files and refuses to replace an existing output unless the caller expressly sets `overwrite` to `true`. It does not sign, file, serve, email or publish documents.

Run its tests with:

```bash
node --test mcp/document-production-server.test.mjs
```

## Legal research

vCLO includes two hosted official MCP connections and one bundled read-only adapter:

- **CourtListener MCP:** US case law, dockets, RECAP material, judges, oral arguments and citation discovery. A free CourtListener account and user authorisation are required.
- **GovInfo MCP:** official US federal publications. Set `GOVINFO_API_KEY` to a free api.data.gov key for normal use; Claude can use `DEMO_KEY` for initial exploration when no key is set.
- **Bundled legal-research adapter:** Federal Register, Regulations.gov, legislation.gov.uk and The National Archives Find Case Law. Set `REGULATIONS_GOV_API_KEY` for Regulations.gov; the other included sources do not require a key.

The bundled adapter is dependency-free and read-only. It exposes bounded search and retrieval operations, includes source URLs and retrieval timestamps, and never submits regulatory comments, performs filing actions or bulk-downloads a collection. CourtListener's hosted server also publishes account-alert tools; Codex disables those tools in the vCLO plugin, and vCLO's counsel instructions prohibit using them as part of research. Find Case Law use must remain fair and reasonable; bulk computational analysis requires separate permission from The National Archives.

Run its tests with:

```bash
node --test mcp/legal-research-server.test.mjs
```
