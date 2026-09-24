# Document-production options

Choose the narrowest available route that satisfies the requested output and confidentiality requirements.

## Local core

Use the bundled `document-production` tools when they are available. Check toolchain status before relying on an operation. The adapter supports:

- listing bundled Markdown and HTML templates;
- converting documents to DOCX or PDF with LibreOffice or Pandoc;
- producing DOCX or PDF from Markdown, including a supplied DOCX style reference when Pandoc is available;
- making PDFs searchable with OCRmyPDF; and
- assembling PDFs with `pdfunite` or qpdf.

The adapter is free and local, but individual executables must be installed on the host. Never report an operation as available merely because its MCP tool exists: the status result must show a usable local engine. Preserve source files and require explicit overwrite permission.

## Host-native document tools

When Codex, Claude or another authorised host exposes native document or PDF creation tools, they may be used instead of the local adapter. Record the tool used and visually inspect rendered output when the host permits it.

## User-connected services

Google Drive and Docs or Microsoft 365 may be used only when the host exposes the connector and the user authorises the relevant account, source, destination and write action. State that content will be processed by the selected cloud provider. Prefer creating a new version or copy over replacing the source.

## Enterprise document systems

iManage and NetDocuments are optional enterprise integrations. Use them only through a configured, authorised connector. Confirm workspace or matter, document identity, version, profile metadata, access controls and whether the requested action creates a new version, new document or export. Never equate a successful search with a complete matter record.

## Fallback

If no renderer or connector can perform the requested operation, return the structured content in the best editable format available, preserve formatting instructions, identify the missing capability precisely and do not claim that a DOCX, PDF, OCR pass or bundle was created.
