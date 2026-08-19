# Legal AI Skills

An open collection of Legal AI Skills for ChatGPT and Claude.

A skill is a reusable set of written instructions for an AI assistant. Each skill teaches an AI assistant how to handle one kind of legal task properly.

All skills ship as **one installable plugin: Rohas Legal AI.** It contains the complete skill library — contracts, disputes and litigation, arbitration and ADR, corporate, regulatory, privacy, criminal, employment, property, tax, finance, insolvency, IP, startup, public law, research, investigations, and practice management. Install it once, then describe your legal task in plain language. The assistant selects the right skill from the library automatically — you don't need to know or invoke any individual skill by name.

The **[Contents](#4-contents)** section below groups the library by practice area purely so you can browse what's in it. Those groupings are categories, not separate installs — there is nothing else to add.

**Who this is for:** Practising lawyers, in-house counsel, and law students who already know the
law and want the drafting and analysis work to go faster. These skills assume
professional judgment on your side. They are not built for people seeking
legal help without a lawyer.

**Jurisdiction:** Most skills are jurisdiction-neutral and work anywhere. Skills that turn on
Indian statutes are marked **(India)**. Every skill is written to confirm the
governing jurisdiction before it relies on any specific rule.

Built in India 🇮🇳 for the world by [Rohas Nagpal](https://rohasnagpal.com).

[![Watch the video](https://github.com/user-attachments/assets/dfb5665c-175d-482b-8673-4d96f039640c)](https://youtu.be/LJDxwzmIKbg)
---
**Table of Contents**

1. [Install on Claude Web](#1-install-on-claude-web)
2. [Install on Claude Code](#2-install-on-claude-code)
3. [Install on ChatGPT or Codex](#3-install-on-chatgpt-or-codex)
4. [Contents](#4-contents)
5. [Before you use these](#5-before-you-use-these)
6. [Contributing](#6-contributing)
7. [Licence](#7-licence)

# 1. Install on Claude Web

Plugins are available on Claude's paid plans. Make sure **Code execution and file creation** is enabled. For an organisation-managed marketplace, an owner must also enable **Cowork** and **Skills**.

1. Open **Customize → Plugins**. Under **Personal plugins**, click **+ → Add marketplace**.

<img width="946" height="491" alt="image" src="https://github.com/user-attachments/assets/2d7989eb-a762-4ac7-878a-52cbea24ff80" />

---

2. Click **Add from a repository**

<img width="698" height="174" alt="image" src="https://github.com/user-attachments/assets/38e3483d-bf3e-4a93-a88d-d890b7f90878" />

---

3. Enter https://github.com/rohasnagpal/legal-ai-skills

<img width="697" height="217" alt="image" src="https://github.com/user-attachments/assets/837ab6ee-ac93-4f9e-a103-74b697b81285" />

---

4. Find **Rohas Legal AI** and click **+** to install it. That's the only entry in the marketplace — one plugin, the complete library. It's enabled automatically once installed.

<img width="1006" height="690" alt="image" src="https://github.com/user-attachments/assets/7bb12216-2c32-430e-9f14-a4bb19fd1035" />

---

# 2. Install on Claude Code

```
/plugin marketplace add rohasnagpal/legal-ai-skills

/plugin install rohas-legal-ai@rohas-legal
```
That's it — one install brings in the whole library. Just describe your task afterwards; there's no separate pack to pick.

To pull in changes after the repo updates:

```
/plugin marketplace update rohas-legal
```
---

# 3. Install on ChatGPT or Codex

## ChatGPT

1. Click **Plugins** in the left menu
2. Search for [**Rohas Legal AI**](https://chatgpt.com/plugins?q=rohas+legal+ai)
3. Click **+** to install it

Here's an example of how to use the plugin. Type @rohas to see it in your installed plugins

<img width="794" height="251" alt="image" src="https://github.com/user-attachments/assets/79e88db7-13ad-4d0d-9432-b804901daa07" />

Select it and enter your prompt — the right skill is picked automatically

<img width="798" height="155" alt="image" src="https://github.com/user-attachments/assets/f475e50f-a053-46eb-b6be-adfdaa846c70" />

## Codex

1. Open the **Plugin directory** in Codex.
2. Search for **Rohas Legal AI**.
3. Review the listing and install the plugin.

ChatGPT and Codex use the same public plugin directory. Installation and use can depend on your plan, region, role and workspace settings. Directory updates can take up to six hours to appear in Codex.

---

# 4. Contents

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

All 150 skills below live in one plugin — `plugins/rohas-legal-ai/skills/` — grouped here by practice area for browsing, and linked to their `SKILL.md`.

---

### advisory

- **[client-intake](plugins/rohas-legal-ai/skills/client-intake/SKILL.md)**: turns a messy client narrative into a structured matter summary, separating facts from assumptions
- **[client-update-drafter](plugins/rohas-legal-ai/skills/client-update-drafter/SKILL.md)**: plain, honest status updates for a client on a running matter
- **[demand-notice-drafter](plugins/rohas-legal-ai/skills/demand-notice-drafter/SKILL.md)**: pre-litigation demand notices with the claim properly particularised
- **[engagement-letter-drafter](plugins/rohas-legal-ai/skills/engagement-letter-drafter/SKILL.md)**: scope, fees, exclusions and conflict position in a client engagement letter
- **[legal-explainer](plugins/rohas-legal-ai/skills/legal-explainer/SKILL.md)**: restates a legal position in language a client can actually act on
- **[legal-opinion-drafter](plugins/rohas-legal-ai/skills/legal-opinion-drafter/SKILL.md)**: structured written legal or tax opinion with question, analysis, conclusion and caveats — tax opinions add a risk-characterisation and exposure step
- **[legal-risk-assessor](plugins/rohas-legal-ai/skills/legal-risk-assessor/SKILL.md)**: sets out the options on a decision, with the risk and likely outcome of each
- **[notice-reply-drafter](plugins/rohas-legal-ai/skills/notice-reply-drafter/SKILL.md)**: replies to a legal notice, dealing with each allegation in turn

### arbitration

- **[arbitral-award-analyst](plugins/rohas-legal-ai/skills/arbitral-award-analyst/SKILL.md)**: reads an award for findings, reasoning and enforceability
- **[arbitration-clause-reviewer](plugins/rohas-legal-ai/skills/arbitration-clause-reviewer/SKILL.md)**: checks a clause for seat, venue, rules, appointment and pathology
- **[arbitration-interim-relief-drafter](plugins/rohas-legal-ai/skills/arbitration-interim-relief-drafter/SKILL.md)**: chooses the route — emergency arbitrator, tribunal, or court **(India Sections 9/17)** — and drafts the application
- **[arbitration-notice-drafter](plugins/rohas-legal-ai/skills/arbitration-notice-drafter/SKILL.md)**: notice invoking arbitration, with the disputes properly framed
- **[arbitration-pleading-drafter](plugins/rohas-legal-ai/skills/arbitration-pleading-drafter/SKILL.md)**: statement of claim, statement of defence, counterclaim and reply to counterclaim
- **[arbitrator-appointment-advisor](plugins/rohas-legal-ai/skills/arbitrator-appointment-advisor/SKILL.md)**: appointment mechanics, eligibility and independence disclosure
- **[award-challenge-analyst](plugins/rohas-legal-ai/skills/award-challenge-analyst/SKILL.md)**: assesses the grounds available to challenge or resist an award
- **[procedural-order-drafter](plugins/rohas-legal-ai/skills/procedural-order-drafter/SKILL.md)**: procedural orders and timetables for a tribunal

### conciliation & mediation

- **[adr-brief-drafter](plugins/rohas-legal-ai/skills/adr-brief-drafter/SKILL.md)**: brief putting a party's position to a mediator or conciliator, adapted to the process and to whether it's shared or confidential
- **[caucus-strategy-planner](plugins/rohas-legal-ai/skills/caucus-strategy-planner/SKILL.md)**: what to disclose and hold back in private session
- **[conciliation-proposal-drafter](plugins/rohas-legal-ai/skills/conciliation-proposal-drafter/SKILL.md)**: settlement proposals framed for a conciliation
- **[mediation-opening-drafter](plugins/rohas-legal-ai/skills/mediation-opening-drafter/SKILL.md)**: opening statement for a mediation
- **[party-interest-analyst](plugins/rohas-legal-ai/skills/party-interest-analyst/SKILL.md)**: separates stated positions from underlying interests on both sides
- **[pre-institution-mediation-advisor](plugins/rohas-legal-ai/skills/pre-institution-mediation-advisor/SKILL.md)**: mandatory pre-institution mediation requirements **(India)**
- **[settlement-documenter](plugins/rohas-legal-ai/skills/settlement-documenter/SKILL.md)**: records a session outcome, or drafts complete binding settlement terms, once agreement is reached
- **[settlement-evaluator](plugins/rohas-legal-ai/skills/settlement-evaluator/SKILL.md)**: tests a settlement offer against the litigation alternative

### consumer

- **[compensation-quantifier](plugins/rohas-legal-ai/skills/compensation-quantifier/SKILL.md)**: builds a compensation claim head by head from supplied figures
- **[consumer-pleading-drafter](plugins/rohas-legal-ai/skills/consumer-pleading-drafter/SKILL.md)**: consumer complaint (complainant side) or reply (opposite-party side)
- **[deficiency-analyst](plugins/rohas-legal-ai/skills/deficiency-analyst/SKILL.md)**: tests whether the facts amount to deficiency in service or unfair trade practice
- **[product-liability-analyst](plugins/rohas-legal-ai/skills/product-liability-analyst/SKILL.md)**: product liability exposure on the given facts

### contracts

- **[clause-comparator](plugins/rohas-legal-ai/skills/clause-comparator/SKILL.md)**: compares the same clause across drafts or against a standard
- **[contract-drafter](plugins/rohas-legal-ai/skills/contract-drafter/SKILL.md)**: drafts any commercial agreement, MOU/LOI, or SaaS terms from a term sheet or instructions
- **[contract-reviewer](plugins/rohas-legal-ai/skills/contract-reviewer/SKILL.md)**: quick, focused or full review of any commercial agreement — including loans, leases and IP licences — from one side, with risks ranked
- **[contract-summariser](plugins/rohas-legal-ai/skills/contract-summariser/SKILL.md)**: short factual summary of what an agreement actually does
- **[indemnity-liability-analyst](plugins/rohas-legal-ai/skills/indemnity-liability-analyst/SKILL.md)**: warranties, indemnities, caps, carve-outs and insurance requirements as one system
- **[negotiation-position-planner](plugins/rohas-legal-ai/skills/negotiation-position-planner/SKILL.md)**: opening, fallback and walk-away positions on the open points
- **[obligations-extractor](plugins/rohas-legal-ai/skills/obligations-extractor/SKILL.md)**: pulls every obligation, deadline and condition into a table
- **[redline-proposer](plugins/rohas-legal-ai/skills/redline-proposer/SKILL.md)**: complete replacement wording from the strongest credible position to the minimum acceptable fallback
- **[termination-analyst](plugins/rohas-legal-ai/skills/termination-analyst/SKILL.md)**: termination rights, notice requirements and consequences

### corporate

- **[board-resolution-drafter](plugins/rohas-legal-ai/skills/board-resolution-drafter/SKILL.md)**: board and shareholder resolutions in correct form
- **[investment-and-shareholder-agreement-reviewer](plugins/rohas-legal-ai/skills/investment-and-shareholder-agreement-reviewer/SKILL.md)**: term sheets, SHAs, SSAs, JV and constitutional rights packages, from any party's side
- **[listing-obligations-checker](plugins/rohas-legal-ai/skills/listing-obligations-checker/SKILL.md)**: continuous disclosure and listing obligations **(India)**
- **[m-and-a-diligence-checker](plugins/rohas-legal-ai/skills/m-and-a-diligence-checker/SKILL.md)**: diligence checklist and issue log for a transaction
- **[minutes-drafter](plugins/rohas-legal-ai/skills/minutes-drafter/SKILL.md)**: minutes that record decisions and dissent properly
- **[related-party-analyst](plugins/rohas-legal-ai/skills/related-party-analyst/SKILL.md)**: identifies related party transactions and the approvals required **(India)**
- **[restructuring-documenter](plugins/rohas-legal-ai/skills/restructuring-documenter/SKILL.md)**: documentation trail for a corporate restructuring
- **[secretarial-compliance-checker](plugins/rohas-legal-ai/skills/secretarial-compliance-checker/SKILL.md)**: secretarial and filing obligations for a company **(India)**

### criminal

- **[bail-advisor-and-drafter](plugins/rohas-legal-ai/skills/bail-advisor-and-drafter/SKILL.md)**: anticipatory or post-arrest bail — strategy, and drafting when requested **(India)**
- **[chargesheet-analyst](plugins/rohas-legal-ai/skills/chargesheet-analyst/SKILL.md)**: reads a chargesheet for gaps, contradictions and legal infirmity **(India)**
- **[defence-strategy-planner](plugins/rohas-legal-ai/skills/defence-strategy-planner/SKILL.md)**: defence theory, lines of attack and evidence needed
- **[quashing-petition-drafter](plugins/rohas-legal-ai/skills/quashing-petition-drafter/SKILL.md)**: petitions to quash proceedings **(India)**
- **[sentencing-analyst](plugins/rohas-legal-ai/skills/sentencing-analyst/SKILL.md)**: mitigating and aggravating factors and reasoned sentencing scenarios

### employment

- **[disciplinary-documenter](plugins/rohas-legal-ai/skills/disciplinary-documenter/SKILL.md)**: the paper trail for a disciplinary proceeding
- **[employment-contract-drafter](plugins/rohas-legal-ai/skills/employment-contract-drafter/SKILL.md)**: employment contracts with restraint, IP and termination terms
- **[handbook-drafter](plugins/rohas-legal-ai/skills/handbook-drafter/SKILL.md)**: employee handbooks and HR policies
- **[labour-compliance-checker](plugins/rohas-legal-ai/skills/labour-compliance-checker/SKILL.md)**: applicable labour law obligations for an establishment **(India)**
- **[posh-compliance-advisor](plugins/rohas-legal-ai/skills/posh-compliance-advisor/SKILL.md)**: POSH committee, procedure and reporting obligations **(India)**
- **[separation-documenter](plugins/rohas-legal-ai/skills/separation-documenter/SKILL.md)**: resignation, termination and severance documentation

### family

- **[maintenance-calculator](plugins/rohas-legal-ai/skills/maintenance-calculator/SKILL.md)**: works through a maintenance claim on supplied income and needs
- **[matrimonial-petition-drafter](plugins/rohas-legal-ai/skills/matrimonial-petition-drafter/SKILL.md)**: matrimonial petitions with grounds properly pleaded **(India)**
- **[settlement-deed-drafter](plugins/rohas-legal-ai/skills/settlement-deed-drafter/SKILL.md)**: family and separation settlement deeds, with child welfare and non-waivable rights preserved
- **[succession-advisor](plugins/rohas-legal-ai/skills/succession-advisor/SKILL.md)**: succession position on given facts and the documents required **(India)**
- **[will-drafter](plugins/rohas-legal-ai/skills/will-drafter/SKILL.md)**: wills, with execution and attestation requirements set out

### finance

- **[guarantee-analyst](plugins/rohas-legal-ai/skills/guarantee-analyst/SKILL.md)**: guarantee and indemnity obligations and how they can be enforced
- **[recovery-strategy-planner](plugins/rohas-legal-ai/skills/recovery-strategy-planner/SKILL.md)**: recovery routes for a defaulted exposure, with sequence and cost
- **[sarfaesi-advisor](plugins/rohas-legal-ai/skills/sarfaesi-advisor/SKILL.md)**: SARFAESI enforcement steps and timelines **(India)**
- **[securities-compliance-checker](plugins/rohas-legal-ai/skills/securities-compliance-checker/SKILL.md)**: securities law obligations on an issue or transaction **(India)**
- **[security-documenter](plugins/rohas-legal-ai/skills/security-documenter/SKILL.md)**: security creation, perfection and registration documentation

Loan and facility agreement review lives inside **contract-reviewer** as a specialist reference — see Contracts above.

### insolvency

- **[avoidance-transaction-analyst](plugins/rohas-legal-ai/skills/avoidance-transaction-analyst/SKILL.md)**: preferential, undervalued and fraudulent transactions **(India)**
- **[cirp-timeline-checker](plugins/rohas-legal-ai/skills/cirp-timeline-checker/SKILL.md)**: CIRP steps and statutory timelines for a matter **(India)**
- **[claim-verification-analyst](plugins/rohas-legal-ai/skills/claim-verification-analyst/SKILL.md)**: verification and classification of creditor claims **(India)**
- **[liquidation-documenter](plugins/rohas-legal-ai/skills/liquidation-documenter/SKILL.md)**: liquidation process documentation **(India)**
- **[operational-creditor-application-drafter](plugins/rohas-legal-ai/skills/operational-creditor-application-drafter/SKILL.md)**: operational creditor insolvency applications **(India)**
- **[resolution-plan-reviewer](plugins/rohas-legal-ai/skills/resolution-plan-reviewer/SKILL.md)**: resolution plans for compliance and commercial effect **(India)**

### investigations

- **[chain-of-custody-documenter](plugins/rohas-legal-ai/skills/chain-of-custody-documenter/SKILL.md)**: defensible physical and digital evidence custody records
- **[digital-evidence-reviewer](plugins/rohas-legal-ai/skills/digital-evidence-reviewer/SKILL.md)**: provenance, integrity, authenticity, metadata, attribution and admissibility gaps
- **[fraud-pattern-analyst](plugins/rohas-legal-ai/skills/fraud-pattern-analyst/SKILL.md)**: competing fraud hypotheses, transaction indicators and control failures
- **[investigation-report-drafter](plugins/rohas-legal-ai/skills/investigation-report-drafter/SKILL.md)**: neutral source-linked findings separating evidence from inference, with a workplace-investigation mode
- **[osint-collector](plugins/rohas-legal-ai/skills/osint-collector/SKILL.md)**: lawful, safe and reproducible open-source collection
- **[transaction-tracer](plugins/rohas-legal-ai/skills/transaction-tracer/SKILL.md)**: reconciled funds tracing across accounts, entities, currencies and wallets
- **[whistleblower-report-analyst](plugins/rohas-legal-ai/skills/whistleblower-report-analyst/SKILL.md)**: protected intake, risk triage and proportionate investigation planning

### ip

- **[cease-desist-drafter](plugins/rohas-legal-ai/skills/cease-desist-drafter/SKILL.md)**: proportionate source-backed IP enforcement notices
- **[infringement-analyst](plugins/rohas-legal-ai/skills/infringement-analyst/SKILL.md)**: right-specific infringement, defence, validity and remedy analysis
- **[ip-assignment-drafter](plugins/rohas-legal-ai/skills/ip-assignment-drafter/SKILL.md)**: precise IP ownership transfers, schedules and recordal steps
- **[ip-portfolio-analyst](plugins/rohas-legal-ai/skills/ip-portfolio-analyst/SKILL.md)**: ownership, coverage, deadlines, exploitation, encumbrance and risk audits
- **[trademark-opposition-drafter](plugins/rohas-legal-ai/skills/trademark-opposition-drafter/SKILL.md)**: opposition, counterstatement and rectification materials **(India)**

IP licence review lives inside **contract-reviewer** as a specialist reference — see Contracts above.

### litigation

- **[appeal-grounds-drafter](plugins/rohas-legal-ai/skills/appeal-grounds-drafter/SKILL.md)**: record-linked grounds, preserved errors, standards of review and relief
- **[case-law-analyst](plugins/rohas-legal-ai/skills/case-law-analyst/SKILL.md)**: verified holdings, ratio, obiter, treatment, application and distinction
- **[chronology-builder](plugins/rohas-legal-ai/skills/chronology-builder/SKILL.md)**: sourced event, knowledge and procedural chronologies with conflicts and gaps
- **[cross-examination-planner](plugins/rohas-legal-ai/skills/cross-examination-planner/SKILL.md)**: ethical issue-led questioning, contradictions and admissible impeachment
- **[disclosure-request-drafter](plugins/rohas-legal-ai/skills/disclosure-request-drafter/SKILL.md)**: proportionate issue-linked disclosure, discovery and inspection requests
- **[document-review-protocol-builder](plugins/rohas-legal-ai/skills/document-review-protocol-builder/SKILL.md)**: defensible review coding, privilege, quality control and escalation protocols
- **[evidence-organizer](plugins/rohas-legal-ai/skills/evidence-organizer/SKILL.md)**: evidence mapped to facts, elements, witnesses, foundations and objections
- **[interim-application-drafter](plugins/rohas-legal-ai/skills/interim-application-drafter/SKILL.md)**: evidence-backed urgent relief, candour, undertakings and workable orders
- **[legal-hold-planner](plugins/rohas-legal-ai/skills/legal-hold-planner/SKILL.md)**: preservation triggers, custodians, sources, notices, monitoring and release controls
- **[limitation-checker](plugins/rohas-legal-ai/skills/limitation-checker/SKILL.md)**: competing deadline scenarios, accrual, exclusions, extensions and forum issues
- **[pleadings-analyst](plugins/rohas-legal-ai/skills/pleadings-analyst/SKILL.md)**: claims, defences, admissions, inconsistencies, particulars and live issues
- **[privilege-log-builder](plugins/rohas-legal-ai/skills/privilege-log-builder/SKILL.md)**: supportable privilege entries, family reconciliation, waiver flags and challenges
- **[production-set-checker](plugins/rohas-legal-ai/skills/production-set-checker/SKILL.md)**: pre-release scope, file, metadata, privilege, redaction and delivery quality control
- **[redaction-reviewer](plugins/rohas-legal-ai/skills/redaction-reviewer/SKILL.md)**: legal-basis, consistency and technical-permanence review of redactions
- **[witness-statement-drafter](plugins/rohas-legal-ai/skills/witness-statement-drafter/SKILL.md)**: witness-owned factual evidence, exhibits, uncertainty and formalities
- **[written-submissions-drafter](plugins/rohas-legal-ai/skills/written-submissions-drafter/SKILL.md)**: issue-led, authority-verified and record-linked written advocacy

### practice

- **[brief-to-counsel-drafter](plugins/rohas-legal-ai/skills/brief-to-counsel-drafter/SKILL.md)**: focused instructions, facts, issues, record, questions and logistics
- **[closure-report-drafter](plugins/rohas-legal-ai/skills/closure-report-drafter/SKILL.md)**: controlled closure, client handoff, obligations, finances and retention
- **[conflict-checker](plugins/rohas-legal-ai/skills/conflict-checker/SKILL.md)**: confidential party mapping, searches, escalation and clearance records
- **[costing-estimator](plugins/rohas-legal-ai/skills/costing-estimator/SKILL.md)**: transparent stage budgets, scenarios, assumptions and change controls
- **[time-narrative-drafter](plugins/rohas-legal-ai/skills/time-narrative-drafter/SKILL.md)**: accurate, specific and privilege-aware legal time entries

### privacy

- **[breach-response-planner](plugins/rohas-legal-ai/skills/breach-response-planner/SKILL.md)**: containment, evidence, harm assessment, notification and remediation
- **[cross-border-transfer-analyst](plugins/rohas-legal-ai/skills/cross-border-transfer-analyst/SKILL.md)**: transfer maps, mechanisms, destination risk and supplementary safeguards
- **[data-processing-agreement-reviewer](plugins/rohas-legal-ai/skills/data-processing-agreement-reviewer/SKILL.md)**: roles, instructions, security, subprocessors, audits, transfers and deletion
- **[dpdp-compliance-checker](plugins/rohas-legal-ai/skills/dpdp-compliance-checker/SKILL.md)**: commenced DPDP duties, evidence and implementation readiness **(India)**
- **[dpia-documenter](plugins/rohas-legal-ai/skills/dpia-documenter/SKILL.md)**: necessity, proportionality, individual risk, safeguards and residual approval
- **[privacy-policy-drafter](plugins/rohas-legal-ai/skills/privacy-policy-drafter/SKILL.md)**: project-aware code audits and accurate layered notices matched to verified processing

### property

- **[development-agreement-reviewer](plugins/rohas-legal-ai/skills/development-agreement-reviewer/SKILL.md)**: development and joint venture agreements for land
- **[encumbrance-analyst](plugins/rohas-legal-ai/skills/encumbrance-analyst/SKILL.md)**: reads encumbrance records for charges, gaps and risk **(India)**
- **[rera-compliance-checker](plugins/rohas-legal-ai/skills/rera-compliance-checker/SKILL.md)**: RERA registration and disclosure obligations **(India)**
- **[sale-deed-drafter](plugins/rohas-legal-ai/skills/sale-deed-drafter/SKILL.md)**: sale deeds and conveyances
- **[stamp-duty-analyst](plugins/rohas-legal-ai/skills/stamp-duty-analyst/SKILL.md)**: stamp duty and registration position on supplied rates **(India)**
- **[title-diligence-analyst](plugins/rohas-legal-ai/skills/title-diligence-analyst/SKILL.md)**: title chain, defects and what remains unverified **(India)**

Lease and leave-and-licence review lives inside **contract-reviewer** as a specialist reference — see Contracts above.

### public

- **[government-contract-reviewer](plugins/rohas-legal-ai/skills/government-contract-reviewer/SKILL.md)**: authority, procurement hierarchy, fiscal controls, performance, transparency and disputes
- **[pil-drafter](plugins/rohas-legal-ai/skills/pil-drafter/SKILL.md)**: maintainable public interest litigation with bona fides, public injury and workable relief **(India)**
- **[policy-note-drafter](plugins/rohas-legal-ai/skills/policy-note-drafter/SKILL.md)**: decision-ready policy and cabinet notes with options, impacts, consultation and implementation
- **[rti-appeal-drafter](plugins/rohas-legal-ai/skills/rti-appeal-drafter/SKILL.md)**: remedy selection, limitation, grounds and relief for RTI appeals and complaints **(India)**
- **[rti-application-drafter](plugins/rohas-legal-ai/skills/rti-application-drafter/SKILL.md)**: focused requests for identifiable records held by the correct public authority **(India)**
- **[tender-compliance-checker](plugins/rohas-legal-ai/skills/tender-compliance-checker/SKILL.md)**: traceable requirements, evidence, deviations, blockers and submission control

### regulatory

- **[examination-response-drafter](plugins/rohas-legal-ai/skills/examination-response-drafter/SKILL.md)**: evidence-led examination, deficiency and show-cause responses with credible remediation
- **[licence-application-drafter](plugins/rohas-legal-ai/skills/licence-application-drafter/SKILL.md)**: complete licence and registration applications with requirements, evidence and conditions
- **[regulatory-applicability-analyst](plugins/rohas-legal-ai/skills/regulatory-applicability-analyst/SKILL.md)**: regulator and instrument mapping from current official text, with verification gaps reported
- **[regulatory-change-monitor](plugins/rohas-legal-ai/skills/regulatory-change-monitor/SKILL.md)**: controlled baselines, official-source changes, legal-effect timelines and implementation impact
- **[regulatory-filing-preparer](plugins/rohas-legal-ai/skills/regulatory-filing-preparer/SKILL.md)**: auditable periodic and event-based filings with data lineage, validation and submission evidence
- **[sanctions-screening-documenter](plugins/rohas-legal-ai/skills/sanctions-screening-documenter/SKILL.md)**: reproducible list, match, ownership, restriction and disposition records

### research

- **[comparative-analyst](plugins/rohas-legal-ai/skills/comparative-analyst/SKILL.md)**: compares the position across jurisdictions or statutes
- **[forum-jurisdiction-analyst](plugins/rohas-legal-ai/skills/forum-jurisdiction-analyst/SKILL.md)**: which forum, which jurisdiction, and what turns on the choice
- **[issue-spotter](plugins/rohas-legal-ai/skills/issue-spotter/SKILL.md)**: reads a fact pattern for issues, causes of action and threshold problems
- **[legislative-history-analyst](plugins/rohas-legal-ai/skills/legislative-history-analyst/SKILL.md)**: traces how a provision reached its current form
- **[precedent-mapper](plugins/rohas-legal-ai/skills/precedent-mapper/SKILL.md)**: maps the authorities on a point and how they relate
- **[research-synthesiser](plugins/rohas-legal-ai/skills/research-synthesiser/SKILL.md)**: pulls scattered research into a single reasoned position
- **[statutory-interpreter](plugins/rohas-legal-ai/skills/statutory-interpreter/SKILL.md)**: interprets a provision using the accepted canons, showing the reasoning

### startup

- **[cap-table-analyst](plugins/rohas-legal-ai/skills/cap-table-analyst/SKILL.md)**: works through dilution and ownership on supplied numbers
- **[esop-scheme-drafter](plugins/rohas-legal-ai/skills/esop-scheme-drafter/SKILL.md)**: ESOP scheme documents and grant letters
- **[founders-agreement-drafter](plugins/rohas-legal-ai/skills/founders-agreement-drafter/SKILL.md)**: founder agreements: vesting, roles, exit, IP
- **[startup-compliance-checker](plugins/rohas-legal-ai/skills/startup-compliance-checker/SKILL.md)**: compliance obligations by stage and structure **(India)**

Term sheet and SHA/SSA review now lives in **investment-and-shareholder-agreement-reviewer** (Corporate), and SaaS terms drafting lives inside **contract-drafter** as a specialist reference (Contracts) — see above.

### tax

- **[fema-analyst](plugins/rohas-legal-ai/skills/fema-analyst/SKILL.md)**: FEMA position on a cross-border transaction **(India)**
- **[gst-compliance-analyst](plugins/rohas-legal-ai/skills/gst-compliance-analyst/SKILL.md)**: GST treatment and compliance obligations **(India)**
- **[tax-appeal-grounds-drafter](plugins/rohas-legal-ai/skills/tax-appeal-grounds-drafter/SKILL.md)**: grounds of appeal against an assessment or order **(India)**
- **[tax-assessment-reply-drafter](plugins/rohas-legal-ai/skills/tax-assessment-reply-drafter/SKILL.md)**: replies to assessment and scrutiny notices **(India)**
- **[transfer-pricing-documenter](plugins/rohas-legal-ai/skills/transfer-pricing-documenter/SKILL.md)**: transfer pricing documentation and benchmarking record
- **[treaty-analyst](plugins/rohas-legal-ai/skills/treaty-analyst/SKILL.md)**: treaty entitlement and relief on given facts

Formal tax opinions now live in **legal-opinion-drafter** (Advisory) — see above.

### verify

- **[adversarial-reviewer](plugins/rohas-legal-ai/skills/adversarial-reviewer/SKILL.md)**: attacks your own draft the way opposing counsel would
- **[assumption-flagger](plugins/rohas-legal-ai/skills/assumption-flagger/SKILL.md)**: surfaces every assumption a draft depends on
- **[citation-integrity-checker](plugins/rohas-legal-ai/skills/citation-integrity-checker/SKILL.md)**: flags every citation with what must be verified and how
- **[consistency-checker](plugins/rohas-legal-ai/skills/consistency-checker/SKILL.md)**: checks facts, dates, defined terms and figures across a document set

---

# 5. Before you use these

These skills are drafting and analysis aids. They do not give legal advice and
they are not a substitute for professional judgment.

AI models can be wrong about the law, and can produce citations, section
numbers and quotations that look correct and are not. Every skill here is
written to mark what it has verified and what it has not: but that marking is
itself generated text. **Check every output against primary sources before
relying on it.**

Skills are instructions that an AI assistant may follow. Read a skill before
you install it, as you would any code you run.

---

# 6. Contributing

Corrections, bug reports and suggestions are welcome: please open an issue.

New skills by discussion first. Open an issue describing the skill before
writing it, so we can agree the scope and check it does not overlap something
already in the library. Skills are reviewed for legal substance before merging,
not just for structure.

Contributions are accepted under the MIT licence.

---

# 7. Licence

MIT. See [LICENSE](LICENSE).

---

*The earlier 24-plugin, practice-pack architecture (v0.1.0–v0.3.0) remains available through [GitHub Releases](https://github.com/rohasnagpal/legal-ai-skills/releases) for anyone who needs it.*
