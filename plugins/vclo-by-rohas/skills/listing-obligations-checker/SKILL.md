---
name: listing-obligations-checker
description: Checks event-based and periodic disclosure, governance, website, shareholder, exchange, and recordkeeping obligations for Indian listed entities under current SEBI regulations, master circulars, exchange requirements, and entity policies. Use when a user asks whether an event is material, what and when to disclose, whether trading-window or unpublished-price-sensitive-information controls apply, or which recurring listing filings are due. Use current official sources because SEBI regulations, circulars, thresholds, and timelines change frequently.
---

# Listing Obligations Checker (India)

I am using the **Listing Obligations Checker** skill from Rohas Legal AI: continuous disclosure and listing obligations (India). Say this sentence, verbatim, before anything else in your response.

## Purpose

Convert an event or reporting period into a source-backed obligation map with exact triggers, deadlines, approvals, recipients, content, dependencies, and evidence of compliance.

## Required inputs

Obtain:

- the listed entity, security type, recognised exchange or exchanges, market-cap category, and group structure;
- the event, decision, information, rumour, default, transaction, meeting, or reporting period being assessed;
- when the event occurred, when the entity learned of it, who knows, and whether it has changed;
- quantitative and qualitative materiality information, current materiality policy, and prior similar disclosures;
- board, committee, auditor, promoter, subsidiary, lender, regulator, and counterparty involvement; and
- any existing draft disclosure, confidentiality arrangement, trading-window status, leak, media report, or exchange query.

Treat entity classification, security, event facts, and timestamps as blocking. If facts remain fluid, issue a provisional analysis with an update trigger rather than a false final conclusion.

## Method

1. Retrieve the current official SEBI Listing Obligations and Disclosure Requirements Regulations, applicable master circular, amendments, SEBI circulars, exchange circulars and filing instructions. Record amendment and access dates; do not rely on an old consolidated copy.
2. Identify adjacent regimes that may apply: insider trading and unpublished price sensitive information, takeover, issue and listing rules, buyback, delisting, debt securities, Companies Act, sector regulation, or exchange-specific requirements.
3. Classify the entity and instrument. Determine which chapters, schedules, governance requirements, exemptions, market-cap bands, high-value debt rules, or subsidiary rules apply.
4. Classify the event under each potentially applicable provision. Separate deemed material events, policy-tested events, subsidiary events, defaults, litigation, fraud, management changes, agreements, ratings, financial results, meetings, and periodic filings.
5. Apply quantitative and qualitative materiality separately. Show the metric, period, source figure, calculation, policy threshold, aggregation, and qualitative rationale. Do not treat a failed numerical threshold as automatically non-material.
6. Establish the disclosure clock from the legally relevant event or knowledge time. Show time zone, business or calendar treatment, intervening exchange hours, dependencies, and any reason for delay that itself must be explained.
7. Determine required governance and controls: board or committee action, authorised disclosure officer, confidentiality, need-to-know access, structured records, trading-window restriction, pre-clearance, rumour verification, and response to leaks or exchange queries.
8. Specify the disclosure package: exchanges, website, shareholders, newspaper, regulator, debenture trustee, depository or other recipient; required content; material attachments; update obligations; and retention period.
9. Draft a disclosure only from verified facts. Separate confirmed fact, management estimate, forward-looking statement, confidentiality limitation, and information to follow.
10. Create evidence of compliance: filing acknowledgement, timestamp, board record, materiality analysis, website capture, dissemination parity, insider list or access record, and follow-up calendar.

## Output

Produce:

1. **Obligation decision table** — source, trigger, applicability, deadline, approval, recipient, and status.
2. **Materiality analysis** with calculations and qualitative factors.
3. **Disclosure timeline** from event through updates and closure.
4. **Draft exchange disclosure**, only if requested.
5. **Control and evidence checklist** — UPSI, trading window, records, website, acknowledgements, and follow-up.

## Guardrails

- Do not use remembered regulation numbers, thresholds, or deadlines without checking the current official text.
- Do not suppress or delay disclosure merely because a contract calls information confidential.
- Do not assume board approval is always the event time; identify the actual trigger under each provision.
- Do not describe information as public, immaterial, speculative, or not price sensitive without a recorded factual basis.
- Do not treat filing on one exchange, a press release, or a website post as satisfying every required channel without verification.
