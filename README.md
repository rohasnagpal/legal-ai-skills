# vCLO

**A free, open-source AI legal team powered by 168 specialist legal skills.**

vCLO helps lawyers, in-house teams, startups and businesses handle legal work using specialist virtual lawyers, coordinated workflows, official company registries and authorised documents and services.

It can help with:

- contract review, drafting and redlining;
- M&A legal due diligence;
- court litigation, arbitration, mediation and legal research;
- corporate, secretarial and employment work;
- privacy and regulatory compliance;
- IP review, investigations and evidence handling.

Install it once and describe the legal task in plain language. For a simple task, vCLO uses the relevant legal skill. For a complex matter, it coordinates the appropriate specialists and produces one consolidated work product.

## Install vCLO

Tell Codex: `Install vCLO from https://github.com/rohasnagpal/legal-ai-skills. Register the repository as a plugin source and install vclo-by-rohas@rohas-legal.`

Approve the installation, start a new task, and say `Hello vCLO`.

**Who this is for:** Practising lawyers, in-house counsel, startups, businesses and law students.

**Jurisdiction:** Most skills are jurisdiction-neutral and work anywhere. Skills that turn on Indian statutes are marked **(India)**. Every skill is written to confirm the governing jurisdiction before relying on a specific rule.

## How vCLO works

```text
vCLO
├── 1 Virtual Chief Legal Officer
├── 9 Specialist Virtual Lawyers
├── 168 Specialist Legal Skills
└── 6 Coordinated Legal Workflows
```

A request for M&A legal due diligence, for example, can be divided among corporate, contracts, employment, IP, litigation and compliance specialists, then consolidated into one issue register and report.

The specialist virtual lawyers cover contracts, corporate, court litigation, dispute resolution, compliance, employment, intellectual property, investigations and legal research.

## Documents and connected services

vCLO can work with documents you provide and, where you authorise access in Codex, services such as Google Drive and Docs, Gmail, Google Calendar, SharePoint, OneDrive, Outlook, GitHub and legal-research tools. If a source is unavailable, vCLO will identify what remains to be checked.

## Company registries

vCLO includes read-only access to three official sources:

- **SEC EDGAR** — US SEC filer profiles and filings; no account required.
- **GLEIF** — global Legal Entity Identifier records; no account required.
- **UK Companies House** — UK company profiles, filings, officers, persons with significant control and charges. Companies House may require a free access key.

Ask vCLO to “search the available official registries for *company name* in *jurisdiction*.” Registry coverage is not universal, and an empty result is not proof that an entity does not exist or is in good standing.

Built in India 🇮🇳 for the world by [Rohas Nagpal](https://rohasnagpal.com).

---
**Table of Contents**

1. [The Legal AI Skills](#1-the-legal-ai-skills)
2. [Before you use these](#2-before-you-use-these)
3. [Contributing](#3-contributing)
4. [Licence](#4-licence)

# 1. The Legal AI skills


[advisory](#advisory) ·
[arbitration](#arbitration) ·
[conciliation--mediation](#conciliation--mediation) ·
[consumer](#consumer) ·
[contracts](#contracts) ·
[corporate](#corporate) ·
[criminal](#criminal) ·
[employment](#employment) ·
[family](#family) ·
[finance](#finance) ·
[insolvency](#insolvency) ·
[investigations](#investigations) ·
[ip](#ip) ·
[learning](#learning) ·
[litigation](#litigation) ·
[practice](#practice) ·
[privacy](#privacy) ·
[property](#property) ·
[public](#public) ·
[regulatory](#regulatory) ·
[research](#research) ·
[startup](#startup) ·
[tax](#tax) ·
[verify](#verify)

The skills are grouped below by practice area.

---

### advisory

- **[vCLO](plugins/vclo-by-rohas/skills/ask-vclo/SKILL.md)**: coordinates the appropriate virtual lawyers and legal skills for a matter and delivers one consolidated work product
- **[client-intake](plugins/vclo-by-rohas/skills/client-intake/SKILL.md)**: turns a messy client narrative into a structured matter summary, separating facts from assumptions
- **[client-update-drafter](plugins/vclo-by-rohas/skills/client-update-drafter/SKILL.md)**: plain, honest status updates for a client on a running matter
- **[demand-notice-drafter](plugins/vclo-by-rohas/skills/demand-notice-drafter/SKILL.md)**: pre-litigation demand notices with the claim properly particularised
- **[engagement-letter-drafter](plugins/vclo-by-rohas/skills/engagement-letter-drafter/SKILL.md)**: scope, fees, exclusions and conflict position in a client engagement letter
- **[legal-explainer](plugins/vclo-by-rohas/skills/legal-explainer/SKILL.md)**: explains a law, clause, judgment, or legal concept in clear plain language, adapted to the reader's level
- **[legal-notice-analyser](plugins/vclo-by-rohas/skills/legal-notice-analyser/SKILL.md)**: analyses a received notice's allegations, deadlines and evidence needs before replying
- **[legal-opinion-drafter](plugins/vclo-by-rohas/skills/legal-opinion-drafter/SKILL.md)**: structured written legal or tax opinion with question, analysis, conclusion and caveats — tax opinions add a risk-characterisation and exposure step
- **[legal-risk-assessor](plugins/vclo-by-rohas/skills/legal-risk-assessor/SKILL.md)**: sets out the options on a decision, with the risk and likely outcome of each
- **[notice-reply-drafter](plugins/vclo-by-rohas/skills/notice-reply-drafter/SKILL.md)**: replies to a legal notice, dealing with each allegation in turn

### arbitration

- **[arbitral-award-analyst](plugins/vclo-by-rohas/skills/arbitral-award-analyst/SKILL.md)**: reads an award for findings, reasoning and enforceability
- **[arbitration-clause-reviewer](plugins/vclo-by-rohas/skills/arbitration-clause-reviewer/SKILL.md)**: checks a clause for seat, venue, rules, appointment and pathology
- **[arbitration-interim-relief-drafter](plugins/vclo-by-rohas/skills/arbitration-interim-relief-drafter/SKILL.md)**: chooses the route — emergency arbitrator, tribunal, or court **(India Sections 9/17)** — and drafts the application
- **[arbitration-notice-drafter](plugins/vclo-by-rohas/skills/arbitration-notice-drafter/SKILL.md)**: notice invoking arbitration, with the disputes properly framed
- **[arbitration-pleading-drafter](plugins/vclo-by-rohas/skills/arbitration-pleading-drafter/SKILL.md)**: statement of claim, statement of defence, counterclaim and reply to counterclaim
- **[arbitrator-appointment-advisor](plugins/vclo-by-rohas/skills/arbitrator-appointment-advisor/SKILL.md)**: appointment mechanics, eligibility and independence disclosure
- **[award-challenge-analyst](plugins/vclo-by-rohas/skills/award-challenge-analyst/SKILL.md)**: assesses the grounds available to challenge or resist an award
- **[procedural-order-drafter](plugins/vclo-by-rohas/skills/procedural-order-drafter/SKILL.md)**: procedural orders and timetables for a tribunal

### conciliation & mediation

- **[adr-brief-drafter](plugins/vclo-by-rohas/skills/adr-brief-drafter/SKILL.md)**: brief putting a party's position to a mediator or conciliator, adapted to the process and to whether it's shared or confidential
- **[caucus-strategy-planner](plugins/vclo-by-rohas/skills/caucus-strategy-planner/SKILL.md)**: what to disclose and hold back in private session
- **[conciliation-proposal-drafter](plugins/vclo-by-rohas/skills/conciliation-proposal-drafter/SKILL.md)**: settlement proposals framed for a conciliation
- **[mediation-opening-drafter](plugins/vclo-by-rohas/skills/mediation-opening-drafter/SKILL.md)**: opening statement for a mediation
- **[party-interest-analyst](plugins/vclo-by-rohas/skills/party-interest-analyst/SKILL.md)**: separates stated positions from underlying interests on both sides
- **[pre-institution-mediation-advisor](plugins/vclo-by-rohas/skills/pre-institution-mediation-advisor/SKILL.md)**: mandatory pre-institution mediation requirements **(India)**
- **[settlement-documenter](plugins/vclo-by-rohas/skills/settlement-documenter/SKILL.md)**: records a session outcome, or drafts complete binding settlement terms, once agreement is reached
- **[settlement-evaluator](plugins/vclo-by-rohas/skills/settlement-evaluator/SKILL.md)**: tests a settlement offer against the litigation alternative
- **[settlement-strategy-planner](plugins/vclo-by-rohas/skills/settlement-strategy-planner/SKILL.md)**: builds BATNA/WATNA, negotiating range and concession sequencing before any offer exists

### consumer

- **[compensation-quantifier](plugins/vclo-by-rohas/skills/compensation-quantifier/SKILL.md)**: builds a compensation claim head by head from supplied figures
- **[consumer-pleading-drafter](plugins/vclo-by-rohas/skills/consumer-pleading-drafter/SKILL.md)**: consumer complaint (complainant side) or reply (opposite-party side)
- **[deficiency-analyst](plugins/vclo-by-rohas/skills/deficiency-analyst/SKILL.md)**: tests whether the facts amount to deficiency in service or unfair trade practice
- **[product-liability-analyst](plugins/vclo-by-rohas/skills/product-liability-analyst/SKILL.md)**: product liability exposure on the given facts

### contracts

- **[clause-comparator](plugins/vclo-by-rohas/skills/clause-comparator/SKILL.md)**: compares the same clause across drafts or against a standard
- **[contract-drafter](plugins/vclo-by-rohas/skills/contract-drafter/SKILL.md)**: drafts any commercial agreement, MOU/LOI, or SaaS terms from a term sheet or instructions
- **[contract-reviewer](plugins/vclo-by-rohas/skills/contract-reviewer/SKILL.md)**: quick, focused or full review of any commercial agreement — including loans, leases and IP licences — from one side, with risks ranked
- **[contract-summariser](plugins/vclo-by-rohas/skills/contract-summariser/SKILL.md)**: short factual summary of what an agreement actually does
- **[indemnity-liability-analyst](plugins/vclo-by-rohas/skills/indemnity-liability-analyst/SKILL.md)**: warranties, indemnities, caps, carve-outs and insurance requirements as one system
- **[negotiation-position-planner](plugins/vclo-by-rohas/skills/negotiation-position-planner/SKILL.md)**: opening, fallback and walk-away positions on the open points
- **[obligations-extractor](plugins/vclo-by-rohas/skills/obligations-extractor/SKILL.md)**: pulls every obligation, deadline and condition into a table
- **[redline-proposer](plugins/vclo-by-rohas/skills/redline-proposer/SKILL.md)**: complete replacement wording from the strongest credible position to the minimum acceptable fallback
- **[termination-analyst](plugins/vclo-by-rohas/skills/termination-analyst/SKILL.md)**: termination rights, notice requirements and consequences

### corporate

- **[board-resolution-drafter](plugins/vclo-by-rohas/skills/board-resolution-drafter/SKILL.md)**: board and shareholder resolutions in correct form
- **[deal-structure-analyst](plugins/vclo-by-rohas/skills/deal-structure-analyst/SKILL.md)**: compares alternative transaction structures and their legal consequences before drafting
- **[investment-and-shareholder-agreement-reviewer](plugins/vclo-by-rohas/skills/investment-and-shareholder-agreement-reviewer/SKILL.md)**: term sheets, SHAs, SSAs, JV and constitutional rights packages, from any party's side
- **[listing-obligations-checker](plugins/vclo-by-rohas/skills/listing-obligations-checker/SKILL.md)**: continuous disclosure and listing obligations **(India)**
- **[m-and-a-diligence-checker](plugins/vclo-by-rohas/skills/m-and-a-diligence-checker/SKILL.md)**: diligence checklist and issue log for a transaction
- **[minutes-drafter](plugins/vclo-by-rohas/skills/minutes-drafter/SKILL.md)**: minutes that record decisions and dissent properly
- **[related-party-analyst](plugins/vclo-by-rohas/skills/related-party-analyst/SKILL.md)**: identifies related party transactions and the approvals required **(India)**
- **[restructuring-documenter](plugins/vclo-by-rohas/skills/restructuring-documenter/SKILL.md)**: documentation trail for a corporate restructuring
- **[secretarial-compliance-checker](plugins/vclo-by-rohas/skills/secretarial-compliance-checker/SKILL.md)**: secretarial and filing obligations for a company **(India)**
- **[transaction-document-checker](plugins/vclo-by-rohas/skills/transaction-document-checker/SKILL.md)**: checks a closing set against the term sheet and conditions-precedent checklist

### criminal

- **[bail-advisor-and-drafter](plugins/vclo-by-rohas/skills/bail-advisor-and-drafter/SKILL.md)**: anticipatory or post-arrest bail — strategy, and drafting when requested **(India)**
- **[chargesheet-analyst](plugins/vclo-by-rohas/skills/chargesheet-analyst/SKILL.md)**: reads a chargesheet for gaps, contradictions and legal infirmity **(India)**
- **[cheque-dishonour-complaint-drafter](plugins/vclo-by-rohas/skills/cheque-dishonour-complaint-drafter/SKILL.md)**: section 138 complaint after notice, service and non-payment are established **(India)**
- **[cheque-dishonour-notice-drafter](plugins/vclo-by-rohas/skills/cheque-dishonour-notice-drafter/SKILL.md)**: section 138 statutory demand notice and deadline check **(India)**
- **[defence-strategy-planner](plugins/vclo-by-rohas/skills/defence-strategy-planner/SKILL.md)**: defence theory, lines of attack and evidence needed
- **[quashing-petition-drafter](plugins/vclo-by-rohas/skills/quashing-petition-drafter/SKILL.md)**: petitions to quash proceedings **(India)**
- **[sentencing-analyst](plugins/vclo-by-rohas/skills/sentencing-analyst/SKILL.md)**: mitigating and aggravating factors and reasoned sentencing scenarios

### employment

- **[disciplinary-documenter](plugins/vclo-by-rohas/skills/disciplinary-documenter/SKILL.md)**: the paper trail for a disciplinary proceeding
- **[employment-contract-drafter](plugins/vclo-by-rohas/skills/employment-contract-drafter/SKILL.md)**: employment contracts with restraint, IP and termination terms
- **[handbook-drafter](plugins/vclo-by-rohas/skills/handbook-drafter/SKILL.md)**: employee handbooks and HR policies
- **[labour-compliance-checker](plugins/vclo-by-rohas/skills/labour-compliance-checker/SKILL.md)**: applicable labour law obligations for an establishment **(India)**
- **[posh-compliance-advisor](plugins/vclo-by-rohas/skills/posh-compliance-advisor/SKILL.md)**: POSH committee, procedure and reporting obligations **(India)**
- **[separation-documenter](plugins/vclo-by-rohas/skills/separation-documenter/SKILL.md)**: resignation, termination and severance documentation

### family

- **[maintenance-calculator](plugins/vclo-by-rohas/skills/maintenance-calculator/SKILL.md)**: works through a maintenance claim on supplied income and needs
- **[matrimonial-petition-drafter](plugins/vclo-by-rohas/skills/matrimonial-petition-drafter/SKILL.md)**: matrimonial petitions with grounds properly pleaded **(India)**
- **[settlement-deed-drafter](plugins/vclo-by-rohas/skills/settlement-deed-drafter/SKILL.md)**: family and separation settlement deeds, with child welfare and non-waivable rights preserved
- **[succession-advisor](plugins/vclo-by-rohas/skills/succession-advisor/SKILL.md)**: succession position on given facts and the documents required **(India)**
- **[will-drafter](plugins/vclo-by-rohas/skills/will-drafter/SKILL.md)**: wills, with execution and attestation requirements set out

### finance

- **[guarantee-analyst](plugins/vclo-by-rohas/skills/guarantee-analyst/SKILL.md)**: guarantee and indemnity obligations and how they can be enforced
- **[loan-agreement-reviewer](plugins/vclo-by-rohas/skills/loan-agreement-reviewer/SKILL.md)**: loan and facility agreement review covering pricing, covenants, default, security and applicable lending rules **(India)**
- **[recovery-strategy-planner](plugins/vclo-by-rohas/skills/recovery-strategy-planner/SKILL.md)**: recovery routes for a defaulted exposure, with sequence and cost
- **[sarfaesi-advisor](plugins/vclo-by-rohas/skills/sarfaesi-advisor/SKILL.md)**: SARFAESI enforcement steps and timelines **(India)**
- **[securities-compliance-checker](plugins/vclo-by-rohas/skills/securities-compliance-checker/SKILL.md)**: securities law obligations on an issue or transaction **(India)**
- **[security-documenter](plugins/vclo-by-rohas/skills/security-documenter/SKILL.md)**: security creation, perfection and registration documentation

General financing contracts can still use **contract-reviewer**; use **loan-agreement-reviewer** where Indian lending regulation and finance mechanics are material.

### insolvency

- **[avoidance-transaction-analyst](plugins/vclo-by-rohas/skills/avoidance-transaction-analyst/SKILL.md)**: preferential, undervalued and fraudulent transactions **(India)**
- **[cirp-timeline-checker](plugins/vclo-by-rohas/skills/cirp-timeline-checker/SKILL.md)**: CIRP steps and statutory timelines for a matter **(India)**
- **[claim-verification-analyst](plugins/vclo-by-rohas/skills/claim-verification-analyst/SKILL.md)**: verification and classification of creditor claims **(India)**
- **[liquidation-documenter](plugins/vclo-by-rohas/skills/liquidation-documenter/SKILL.md)**: liquidation process documentation **(India)**
- **[operational-creditor-application-drafter](plugins/vclo-by-rohas/skills/operational-creditor-application-drafter/SKILL.md)**: operational creditor insolvency applications **(India)**
- **[resolution-plan-reviewer](plugins/vclo-by-rohas/skills/resolution-plan-reviewer/SKILL.md)**: resolution plans for compliance and commercial effect **(India)**

### investigations

- **[chain-of-custody-documenter](plugins/vclo-by-rohas/skills/chain-of-custody-documenter/SKILL.md)**: defensible physical and digital evidence custody records
- **[digital-evidence-reviewer](plugins/vclo-by-rohas/skills/digital-evidence-reviewer/SKILL.md)**: provenance, integrity, authenticity, metadata, attribution and admissibility gaps
- **[fraud-pattern-analyst](plugins/vclo-by-rohas/skills/fraud-pattern-analyst/SKILL.md)**: competing fraud hypotheses, transaction indicators and control failures
- **[investigation-report-drafter](plugins/vclo-by-rohas/skills/investigation-report-drafter/SKILL.md)**: neutral source-linked findings separating evidence from inference, with a workplace-investigation mode
- **[osint-collector](plugins/vclo-by-rohas/skills/osint-collector/SKILL.md)**: lawful, safe and reproducible open-source collection
- **[transaction-tracer](plugins/vclo-by-rohas/skills/transaction-tracer/SKILL.md)**: reconciled funds tracing across accounts, entities, currencies and wallets
- **[whistleblower-report-analyst](plugins/vclo-by-rohas/skills/whistleblower-report-analyst/SKILL.md)**: protected intake, risk triage and proportionate investigation planning

### ip

- **[cease-desist-drafter](plugins/vclo-by-rohas/skills/cease-desist-drafter/SKILL.md)**: proportionate source-backed IP enforcement notices
- **[infringement-analyst](plugins/vclo-by-rohas/skills/infringement-analyst/SKILL.md)**: right-specific infringement, defence, validity and remedy analysis
- **[ip-assignment-drafter](plugins/vclo-by-rohas/skills/ip-assignment-drafter/SKILL.md)**: precise IP ownership transfers, schedules and recordal steps
- **[ip-portfolio-analyst](plugins/vclo-by-rohas/skills/ip-portfolio-analyst/SKILL.md)**: ownership, coverage, deadlines, exploitation, encumbrance and risk audits
- **[trademark-opposition-drafter](plugins/vclo-by-rohas/skills/trademark-opposition-drafter/SKILL.md)**: opposition, counterstatement and rectification materials **(India)**

IP licence review lives inside **contract-reviewer** as a specialist reference — see Contracts above.

### learning

- **[learn-law-with-rohas](plugins/vclo-by-rohas/skills/learn-law-with-rohas/SKILL.md)**: interactive legal tutor — structured lessons, hypotheticals, quizzes, adaptive difficulty and a final assessment on a law or topic of your choice
- **[legal-exam-prep-with-rohas](plugins/vclo-by-rohas/skills/legal-exam-prep-with-rohas/SKILL.md)**: exam-focused revision — study plans, mock exams, adaptive quizzes, answer-structure coaching and weak-area tracking for a specific examination

For a one-off plain-language explanation instead of a structured course, see **legal-explainer** under Advisory above.

### litigation

- **[appeal-grounds-drafter](plugins/vclo-by-rohas/skills/appeal-grounds-drafter/SKILL.md)**: record-linked grounds, preserved errors, standards of review and relief
- **[case-law-analyst](plugins/vclo-by-rohas/skills/case-law-analyst/SKILL.md)**: verified holdings, ratio, obiter, treatment, application and distinction
- **[chronology-builder](plugins/vclo-by-rohas/skills/chronology-builder/SKILL.md)**: sourced event, knowledge and procedural chronologies with conflicts and gaps
- **[court-order-compliance-checker](plugins/vclo-by-rohas/skills/court-order-compliance-checker/SKILL.md)**: turns an order into tracked obligations, deadlines and contempt-risk assessment
- **[cross-examination-planner](plugins/vclo-by-rohas/skills/cross-examination-planner/SKILL.md)**: ethical issue-led questioning, contradictions and admissible impeachment
- **[damages-quantifier](plugins/vclo-by-rohas/skills/damages-quantifier/SKILL.md)**: general commercial/civil damages head by head — expectation, reliance, lost profits, interest, mitigation
- **[decree-execution-and-enforcement-drafter](plugins/vclo-by-rohas/skills/decree-execution-and-enforcement-drafter/SKILL.md)**: executable-decree analysis, enforcement mode and execution application **(India)**
- **[disclosure-request-drafter](plugins/vclo-by-rohas/skills/disclosure-request-drafter/SKILL.md)**: proportionate issue-linked disclosure, discovery and inspection requests
- **[document-review-protocol-builder](plugins/vclo-by-rohas/skills/document-review-protocol-builder/SKILL.md)**: defensible review coding, privilege, quality control and escalation protocols
- **[evidence-organizer](plugins/vclo-by-rohas/skills/evidence-organizer/SKILL.md)**: evidence mapped to facts, elements, witnesses, foundations and objections
- **[interim-application-drafter](plugins/vclo-by-rohas/skills/interim-application-drafter/SKILL.md)**: evidence-backed urgent relief, candour, undertakings and workable orders
- **[legal-hold-planner](plugins/vclo-by-rohas/skills/legal-hold-planner/SKILL.md)**: preservation triggers, custodians, sources, notices, monitoring and release controls
- **[limitation-checker](plugins/vclo-by-rohas/skills/limitation-checker/SKILL.md)**: competing deadline scenarios, accrual, exclusions, extensions and forum issues
- **[litigation-strategy-planner](plugins/vclo-by-rohas/skills/litigation-strategy-planner/SKILL.md)**: integrates claims, evidence, limitation, forum, interim relief and cost into one sequenced strategy
- **[pleadings-analyst](plugins/vclo-by-rohas/skills/pleadings-analyst/SKILL.md)**: claims, defences, admissions, inconsistencies, particulars and live issues
- **[plaint-drafter](plugins/vclo-by-rohas/skills/plaint-drafter/SKILL.md)**: civil and commercial plaints with jurisdiction, limitation, valuation and relief properly pleaded **(India)**
- **[privilege-log-builder](plugins/vclo-by-rohas/skills/privilege-log-builder/SKILL.md)**: supportable privilege entries, family reconciliation, waiver flags and challenges
- **[production-set-checker](plugins/vclo-by-rohas/skills/production-set-checker/SKILL.md)**: pre-release scope, file, metadata, privilege, redaction and delivery quality control
- **[redaction-reviewer](plugins/vclo-by-rohas/skills/redaction-reviewer/SKILL.md)**: legal-basis, consistency and technical-permanence review of redactions
- **[witness-statement-drafter](plugins/vclo-by-rohas/skills/witness-statement-drafter/SKILL.md)**: witness-owned factual evidence, exhibits, uncertainty and formalities
- **[written-statement-drafter](plugins/vclo-by-rohas/skills/written-statement-drafter/SKILL.md)**: civil and commercial defences with specific admissions, denials and affirmative case **(India)**
- **[written-submissions-drafter](plugins/vclo-by-rohas/skills/written-submissions-drafter/SKILL.md)**: issue-led, authority-verified and record-linked written advocacy

### practice

- **[brief-to-counsel-drafter](plugins/vclo-by-rohas/skills/brief-to-counsel-drafter/SKILL.md)**: focused instructions, facts, issues, record, questions and logistics
- **[closure-report-drafter](plugins/vclo-by-rohas/skills/closure-report-drafter/SKILL.md)**: controlled closure, client handoff, obligations, finances and retention
- **[conflict-checker](plugins/vclo-by-rohas/skills/conflict-checker/SKILL.md)**: confidential party mapping, searches, escalation and clearance records
- **[costing-estimator](plugins/vclo-by-rohas/skills/costing-estimator/SKILL.md)**: transparent stage budgets, scenarios, assumptions and change controls
- **[time-narrative-drafter](plugins/vclo-by-rohas/skills/time-narrative-drafter/SKILL.md)**: accurate, specific and privilege-aware legal time entries

### privacy

- **[breach-response-planner](plugins/vclo-by-rohas/skills/breach-response-planner/SKILL.md)**: containment, evidence, harm assessment, notification and remediation
- **[cross-border-transfer-analyst](plugins/vclo-by-rohas/skills/cross-border-transfer-analyst/SKILL.md)**: transfer maps, mechanisms, destination risk and supplementary safeguards
- **[data-processing-agreement-reviewer](plugins/vclo-by-rohas/skills/data-processing-agreement-reviewer/SKILL.md)**: roles, instructions, security, subprocessors, audits, transfers and deletion
- **[dpdp-compliance-checker](plugins/vclo-by-rohas/skills/dpdp-compliance-checker/SKILL.md)**: commenced DPDP duties, evidence and implementation readiness **(India)**
- **[dpia-documenter](plugins/vclo-by-rohas/skills/dpia-documenter/SKILL.md)**: necessity, proportionality, individual risk, safeguards and residual approval
- **[privacy-policy-drafter](plugins/vclo-by-rohas/skills/privacy-policy-drafter/SKILL.md)**: project-aware code audits and accurate layered notices matched to verified processing

### property

- **[development-agreement-reviewer](plugins/vclo-by-rohas/skills/development-agreement-reviewer/SKILL.md)**: development and joint venture agreements for land
- **[encumbrance-analyst](plugins/vclo-by-rohas/skills/encumbrance-analyst/SKILL.md)**: reads encumbrance records for charges, gaps and risk **(India)**
- **[rera-compliance-checker](plugins/vclo-by-rohas/skills/rera-compliance-checker/SKILL.md)**: RERA registration and disclosure obligations **(India)**
- **[sale-deed-drafter](plugins/vclo-by-rohas/skills/sale-deed-drafter/SKILL.md)**: sale deeds and conveyances
- **[stamp-duty-analyst](plugins/vclo-by-rohas/skills/stamp-duty-analyst/SKILL.md)**: stamp duty and registration position on supplied rates **(India)**
- **[title-diligence-analyst](plugins/vclo-by-rohas/skills/title-diligence-analyst/SKILL.md)**: title chain, defects and what remains unverified **(India)**

Lease and leave-and-licence review lives inside **contract-reviewer** as a specialist reference — see Contracts above.

### public

- **[government-contract-reviewer](plugins/vclo-by-rohas/skills/government-contract-reviewer/SKILL.md)**: authority, procurement hierarchy, fiscal controls, performance, transparency and disputes
- **[pil-drafter](plugins/vclo-by-rohas/skills/pil-drafter/SKILL.md)**: maintainable public interest litigation with bona fides, public injury and workable relief **(India)**
- **[policy-note-drafter](plugins/vclo-by-rohas/skills/policy-note-drafter/SKILL.md)**: decision-ready policy and cabinet notes with options, impacts, consultation and implementation
- **[rti-appeal-drafter](plugins/vclo-by-rohas/skills/rti-appeal-drafter/SKILL.md)**: remedy selection, limitation, grounds and relief for RTI appeals and complaints **(India)**
- **[rti-application-drafter](plugins/vclo-by-rohas/skills/rti-application-drafter/SKILL.md)**: focused requests for identifiable records held by the correct public authority **(India)**
- **[tender-compliance-checker](plugins/vclo-by-rohas/skills/tender-compliance-checker/SKILL.md)**: traceable requirements, evidence, deviations, blockers and submission control

### regulatory

- **[compliance-obligations-mapper](plugins/vclo-by-rohas/skills/compliance-obligations-mapper/SKILL.md)**: turns a regulation's text into an owners-and-deadlines obligations register
- **[examination-response-drafter](plugins/vclo-by-rohas/skills/examination-response-drafter/SKILL.md)**: evidence-led examination, deficiency and show-cause responses with credible remediation
- **[licence-application-drafter](plugins/vclo-by-rohas/skills/licence-application-drafter/SKILL.md)**: complete licence and registration applications with requirements, evidence and conditions
- **[regulatory-applicability-analyst](plugins/vclo-by-rohas/skills/regulatory-applicability-analyst/SKILL.md)**: regulator and instrument mapping from current official text, with verification gaps reported
- **[regulatory-change-monitor](plugins/vclo-by-rohas/skills/regulatory-change-monitor/SKILL.md)**: controlled baselines, official-source changes, legal-effect timelines and implementation impact
- **[regulatory-filing-preparer](plugins/vclo-by-rohas/skills/regulatory-filing-preparer/SKILL.md)**: auditable periodic and event-based filings with data lineage, validation and submission evidence
- **[sanctions-screening-documenter](plugins/vclo-by-rohas/skills/sanctions-screening-documenter/SKILL.md)**: reproducible list, match, ownership, restriction and disposition records

### research

- **[comparative-analyst](plugins/vclo-by-rohas/skills/comparative-analyst/SKILL.md)**: compares the position across jurisdictions or statutes
- **[forum-jurisdiction-analyst](plugins/vclo-by-rohas/skills/forum-jurisdiction-analyst/SKILL.md)**: which forum, which jurisdiction, and what turns on the choice
- **[issue-spotter](plugins/vclo-by-rohas/skills/issue-spotter/SKILL.md)**: reads a fact pattern for issues, causes of action and threshold problems
- **[legal-research-planner](plugins/vclo-by-rohas/skills/legal-research-planner/SKILL.md)**: breaks a broad question into sub-questions, source hierarchy and a search strategy before research starts
- **[legislative-history-analyst](plugins/vclo-by-rohas/skills/legislative-history-analyst/SKILL.md)**: traces how a provision reached its current form
- **[precedent-mapper](plugins/vclo-by-rohas/skills/precedent-mapper/SKILL.md)**: maps the authorities on a point and how they relate
- **[research-synthesiser](plugins/vclo-by-rohas/skills/research-synthesiser/SKILL.md)**: pulls scattered research into a single reasoned position
- **[statutory-interpreter](plugins/vclo-by-rohas/skills/statutory-interpreter/SKILL.md)**: interprets a provision using the accepted canons, showing the reasoning

### startup

- **[cap-table-analyst](plugins/vclo-by-rohas/skills/cap-table-analyst/SKILL.md)**: works through dilution and ownership on supplied numbers
- **[esop-scheme-drafter](plugins/vclo-by-rohas/skills/esop-scheme-drafter/SKILL.md)**: ESOP scheme documents and grant letters
- **[founders-agreement-drafter](plugins/vclo-by-rohas/skills/founders-agreement-drafter/SKILL.md)**: founder agreements: vesting, roles, exit, IP
- **[startup-compliance-checker](plugins/vclo-by-rohas/skills/startup-compliance-checker/SKILL.md)**: compliance obligations by stage and structure **(India)**

Term sheet and SHA/SSA review now lives in **investment-and-shareholder-agreement-reviewer** (Corporate), and SaaS terms drafting lives inside **contract-drafter** as a specialist reference (Contracts) — see above.

### tax

- **[fema-analyst](plugins/vclo-by-rohas/skills/fema-analyst/SKILL.md)**: FEMA position on a cross-border transaction **(India)**
- **[gst-compliance-analyst](plugins/vclo-by-rohas/skills/gst-compliance-analyst/SKILL.md)**: GST treatment and compliance obligations **(India)**
- **[tax-appeal-grounds-drafter](plugins/vclo-by-rohas/skills/tax-appeal-grounds-drafter/SKILL.md)**: grounds of appeal against an assessment or order **(India)**
- **[tax-assessment-reply-drafter](plugins/vclo-by-rohas/skills/tax-assessment-reply-drafter/SKILL.md)**: replies to assessment and scrutiny notices **(India)**
- **[transfer-pricing-documenter](plugins/vclo-by-rohas/skills/transfer-pricing-documenter/SKILL.md)**: transfer pricing documentation and benchmarking record
- **[treaty-analyst](plugins/vclo-by-rohas/skills/treaty-analyst/SKILL.md)**: treaty entitlement and relief on given facts

Formal tax opinions now live in **legal-opinion-drafter** (Advisory) — see above.

### verify

- **[adversarial-reviewer](plugins/vclo-by-rohas/skills/adversarial-reviewer/SKILL.md)**: attacks your own draft the way opposing counsel would
- **[assumption-flagger](plugins/vclo-by-rohas/skills/assumption-flagger/SKILL.md)**: surfaces every assumption a draft depends on
- **[authority-validator](plugins/vclo-by-rohas/skills/authority-validator/SKILL.md)**: tests whether a cited authority actually supports the point, is still good law, and binds this forum
- **[citation-integrity-checker](plugins/vclo-by-rohas/skills/citation-integrity-checker/SKILL.md)**: flags every citation with what must be verified and how
- **[consistency-checker](plugins/vclo-by-rohas/skills/consistency-checker/SKILL.md)**: checks facts, dates, defined terms and figures across a document set

---

# 2. Before you use these

These skills are drafting and analysis aids. They do not give legal advice and
they are not a substitute for professional judgment.

AI models can be wrong about the law, and can produce citations, section
numbers and quotations that look correct and are not. Every skill here is
written to mark what it has verified and what it has not: but that marking is
itself generated text. **Check every output against primary sources before
relying on it.**

---

# 3. Contributing

Corrections, bug reports and suggestions are welcome: please open an issue.

New skills by discussion first. Open an issue describing the skill before
writing it, so we can agree the scope and check it does not overlap something
already in the library. Skills are reviewed for legal substance before merging,
not just for structure.

Contributions are accepted under the MIT licence.

---

# 4. Licence

MIT. See [LICENSE](LICENSE).
