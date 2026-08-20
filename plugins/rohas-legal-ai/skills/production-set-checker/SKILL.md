---
name: production-set-checker
description: >-
  Audits document productions before or after disclosure for scope, completeness,
  format, metadata, numbering, document families, redactions, privilege,
  confidentiality, technical integrity, exceptions, and delivery records. Use for
  production quality control, disclosure certification support, deficiency review,
  rolling-production reconciliation, or remediation of a defective production.
---

# Production Set Checker

Run a reproducible release gate that reconciles what was ordered or agreed, what
was reviewed, and what is actually being delivered.

## Intake

Obtain the governing order, request, agreement or protocol; review and collection
reports; source and processed counts; production specification; export, load files,
images, text, natives and metadata; numbering ranges; privilege and redaction logs;
confidentiality designations; exception reports; prior rolling productions;
transmittal; deadline; and authorised release decision-maker.

Never open or transmit a production outside the authorised environment merely to
perform a check.

## Method

1. Freeze the candidate production and record version, export time, operator,
   tool version, settings, file hashes or comparable integrity data, and location.
2. Reconcile requested or ordered scope against collection, processing, review,
   promotion, withholding, exclusion, exception, and production counts. Explain
   differences; do not force totals to match.
3. Validate numbering for uniqueness, continuity, endorsed page ranges, document
   boundaries, parent-child relationships, gaps, overlaps, duplicates, and prior
   rolling ranges.
4. Check that images, extracted text, natives, placeholders, translations, media,
   container contents, attachments, and structured data are present and linked as
   required. Record encrypted, corrupt, unsupported, or missing items separately.
5. Validate required metadata field names, types, encodings, date and time zones,
   delimiters, paths, identifiers, family links, custodians, confidentiality, and
   redaction indicators. Compare a reasoned sample to source data.
6. Reconcile withheld and redacted items to the privilege log, redaction record,
   slip sheets, family treatment, and counsel decisions. Search for inconsistent
   duplicates and near-duplicates without assuming they share privilege.
7. Test redactions visually and technically: applied area, stated basis,
   underlying text or layer removal, OCR, comments, revision history, metadata,
   hidden objects, attachments, thumbnails, and native leakage.
8. Check confidentiality markings, legends, access tiers, personal or secret data,
   agreed protective measures, and any export-control or cross-border restrictions.
9. Perform malware and file-safety checks using authorised tools, then validate
   archive structure, loadability, manifests, checksums, encryption, password
   exchange, media capacity, and delivery method.
10. Produce blocking defects, non-blocking exceptions, remediation owners,
    re-test evidence, final approval, transmittal, receipt, and immutable release
    record. Do not certify legal compliance without the authorised signatory.

## Output

Provide the production control sheet, scope and count reconciliation, numbering
report, family and file-completeness report, metadata validation, privilege and
redaction reconciliation, confidentiality check, technical exception log,
blocking-defect list, remediation tracker, and release-sign-off checklist.

## Guardrails

Do not release a set with unresolved privilege leakage, reversible redactions,
malware, missing families, unexplained count differences, wrong recipients, or
unapproved sensitive data. Do not modify source evidence, hide adverse material,
backfill logs, or describe a technical QC pass as a legal certification.
