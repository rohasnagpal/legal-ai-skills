---
name: secretarial-compliance-checker
description: Checks recurring and event-based secretarial, governance, register, meeting, beneficial-ownership, share-capital, accounts, audit, charge, director, key-managerial-personnel, and MCA filing obligations for an Indian company. Use when a user needs a company-law compliance calendar, filing audit, statutory-register review, missed-deadline assessment, annual compliance check, or remediation plan. Use current official Companies Act, rules, notifications, MCA forms and instructions, and applicable ICSI Secretarial Standards because forms, exemptions, thresholds, and due dates change.
---

# Secretarial Compliance Checker (India)

## Purpose

Determine what the particular company was required to do, what the records prove it did, what remains unverified or overdue, and the safest current remediation path.

## Required inputs

Obtain:

- legal name, CIN, incorporation date, registered office, company type, class, status, financial year, share capital, turnover, borrowings, listing and regulated status;
- constitutional documents, MCA master data, group and ownership chart, directors, KMP, auditors, members, beneficial owners, charges, and subsidiaries;
- minute books, notices, attendance, resolutions, statutory registers, certificates, financial statements, annual returns, board reports, filing acknowledgements and SRNs;
- event chronology for appointments, resignations, allotments, transfers, borrowings, charges, office changes, contracts, dividends, deposits, loans, investments, CSR, and other actions; and
- prior defaults, adjudication, compounding, dormant or strike-off status, regulator correspondence, and professional certificates.

Treat company classification, relevant financial figures, event dates, and primary records as blocking for a complete opinion. Where portal access or evidence is unavailable, label status `Not verified` rather than compliant.

## Method

1. Retrieve current official sources: Companies Act, applicable rules, exemptions and notifications; MCA form versions, instruction kits and portal requirements; ICSI Secretarial Standards; and SEBI or sector rules where applicable. Record the source and access date.
2. Build the company profile that drives applicability: private or public, small, one-person, section 8, government, holding, subsidiary, associate, producer, listed, debt-listed, dormant, foreign-controlled, or other relevant class.
3. Build an obligation universe in three groups:
   - annual or periodic obligations;
   - meeting, register and governance obligations; and
   - event-triggered approvals, filings, disclosures and record updates.
4. For each obligation, record source, trigger, period, due date formula, approval, form or record, attachments, certification, fee, filing portal, retention, exemption, and evidence supplied.
5. Recalculate due dates from actual events and financial-year dates. Apply extensions, holidays, transition rules, adjudication orders, and additional-fee periods only from current authority.
6. Verify performance using primary evidence: signed minutes, registers, filed forms, SRNs, challans, acknowledgement, certificates, master data, and approved financial records. A draft form or internal calendar is not proof of filing.
7. Reconcile records across cap table, register of members, allotments and transfers, beneficial ownership, director and KMP records, charges, accounts, annual return, board report, auditor records, and MCA data.
8. Classify each item as `Compliant`, `Overdue`, `Incomplete`, `Inconsistent`, `Not applicable`, or `Not verified`, with evidence and reasoning.
9. For defects, identify the current remediation route: belated filing, corrected filing, board or shareholder action, register correction, disclosure, adjudication, compounding, condonation, tribunal or court application, or specialist advice. Do not assume ratification cures the original breach.
10. Prioritise by operational block, director or officer exposure, continuing default, filing dependency, transaction impact, regulator risk, and limitation or rectification deadline.

## Output

Produce:

1. **Company applicability profile**.
2. **Compliance register** — obligation, source, trigger, due date, evidence, status, and owner.
3. **Annual and event calendar** with date formulas and dependencies.
4. **Records reconciliation report**.
5. **Default and remediation plan** — action, authority, filing, approval, deadline, exposure, and verification needed.
6. **Missing-document request list**.

## Guardrails

- Do not use stale form names, instruction kits, thresholds, fees, exemptions, or due dates.
- Do not infer filing from a signed resolution, form draft, payment instruction, or management statement; require filing evidence.
- Do not assume private, small, dormant, section 8, government, or subsidiary status produces a blanket exemption.
- Do not submit, certify, alter, or backdate corporate records or filings unless the user separately authorises the external action and all prerequisites are satisfied.
- Do not understate continuing defaults, officer liability, transaction consequences, or the need for practising company secretary and local professional verification.
