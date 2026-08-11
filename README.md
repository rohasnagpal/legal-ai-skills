# Legal AI Skills

An open collection of Legal AI Skills for Claude, ChatGPT and Codex.

A skill is a reusable set of written instructions for an AI assistant. Each skill teaches an AI assistant how to handle one kind of legal task properly.

Skills are also bundled into plugins. A plugin is an installable practice pack containing several skills. Install the ones you need and the AI assistant can
use them automatically when the work matches.

**Who this is for:** Practising lawyers, in-house counsel, and law students who already know the
law and want the drafting and analysis work to go faster. These skills assume
professional judgment on your side. They are not built for people seeking
legal help without a lawyer.

**Jurisdiction:** Most skills are jurisdiction-neutral and work anywhere. Skills that turn on
Indian statutes are marked **(India)**. Every skill is written to confirm the
governing jurisdiction before it relies on any specific rule.

Built in India 🇮🇳 for the world by [Rohas Nagpal](https://rohasnagpal.com).

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

4. Find **Contracts** and click **+** to install it. Installed plugins are enabled automatically.

<img width="1006" height="690" alt="image" src="https://github.com/user-attachments/assets/7bb12216-2c32-430e-9f14-a4bb19fd1035" />

---

# 2. Install on Claude Code

```
/plugin marketplace add rohasnagpal/legal-ai-skills

/plugin install contracts@rohas-legal
```
Replace `contracts` with any category name from the contents list below. Run
the marketplace command once; after that you can install as many packs as you
like.

To pull in changes after the repo updates:

```
/plugin marketplace update rohas-legal
```
---

# 3. Install on ChatGPT or Codex

## ChatGPT

1. Click **Plugins** in the left menu
2. Search for [**Rohas Legal AI**](https://chatgpt.com/plugins?q=rohas+legal+ai)
3. Click **+** on each plugin you want

Here's an example of how to use the plugin. Type @rohas to see the plugins you have installed

<img width="794" height="251" alt="image" src="https://github.com/user-attachments/assets/79e88db7-13ad-4d0d-9432-b804901daa07" />

Select the relevant plugin and enter the prompt

<img width="798" height="155" alt="image" src="https://github.com/user-attachments/assets/f475e50f-a053-46eb-b6be-adfdaa846c70" />

## Codex

1. Open the **Plugin directory** in Codex.
2. Search for **Rohas Legal AI: Contracts**.
3. Review the listing and install the plugin.

ChatGPT and Codex use the same public plugin directory. Installation and use can depend on your plan, region, role and workspace settings. Directory updates can take up to six hours to appear in Codex.

---

# 4. Contents

[advisory](#advisory) ·
[arbitration](#arbitration) ·
[conciliation](#conciliation) ·
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
[mediation](#mediation) ·
[practice](#practice) ·
[privacy](#privacy) ·
[property](#property) ·
[public](#public) ·
[regulatory](#regulatory) ·
[research](#research) ·
[startup](#startup) ·
[tax](#tax) ·
[verify](#verify)

All 159 skills below are built and linked to their `SKILL.md`.

---

### advisory

- **[client-intake](plugins/advisory/skills/client-intake/SKILL.md)**: turns a messy client narrative into a structured matter summary, separating facts from assumptions
- **[client-update-drafter](plugins/advisory/skills/client-update-drafter/SKILL.md)**: plain, honest status updates for a client on a running matter
- **[demand-notice-drafter](plugins/advisory/skills/demand-notice-drafter/SKILL.md)**: pre-litigation demand notices with the claim properly particularised
- **[engagement-letter-drafter](plugins/advisory/skills/engagement-letter-drafter/SKILL.md)**: scope, fees, exclusions and conflict position in a client engagement letter
- **[legal-explainer](plugins/advisory/skills/legal-explainer/SKILL.md)**: restates a legal position in language a client can actually act on
- **[legal-opinion-drafter](plugins/advisory/skills/legal-opinion-drafter/SKILL.md)**: structured written opinion with question, analysis, conclusion and caveats
- **[legal-risk-assessor](plugins/advisory/skills/legal-risk-assessor/SKILL.md)**: sets out the options on a decision, with the risk and likely outcome of each
- **[notice-reply-drafter](plugins/advisory/skills/notice-reply-drafter/SKILL.md)**: replies to a legal notice, dealing with each allegation in turn

### arbitration

- **[arbitral-award-analyst](plugins/arbitration/skills/arbitral-award-analyst/SKILL.md)**: reads an award for findings, reasoning and enforceability
- **[arbitration-clause-reviewer](plugins/arbitration/skills/arbitration-clause-reviewer/SKILL.md)**: checks a clause for seat, venue, rules, appointment and pathology
- **[arbitration-interim-relief-drafter](plugins/arbitration/skills/arbitration-interim-relief-drafter/SKILL.md)**: interim protection applications before or during arbitration **(India)**
- **[arbitration-notice-drafter](plugins/arbitration/skills/arbitration-notice-drafter/SKILL.md)**: notice invoking arbitration, with the disputes properly framed
- **[arbitrator-appointment-advisor](plugins/arbitration/skills/arbitrator-appointment-advisor/SKILL.md)**: appointment mechanics, eligibility and independence disclosure
- **[award-challenge-analyst](plugins/arbitration/skills/award-challenge-analyst/SKILL.md)**: assesses the grounds available to challenge or resist an award
- **[emergency-arbitrator-application-drafter](plugins/arbitration/skills/emergency-arbitrator-application-drafter/SKILL.md)**: emergency relief applications under institutional rules
- **[procedural-order-drafter](plugins/arbitration/skills/procedural-order-drafter/SKILL.md)**: procedural orders and timetables for a tribunal
- **[statement-of-claim-drafter](plugins/arbitration/skills/statement-of-claim-drafter/SKILL.md)**: statement of claim with facts, breaches, relief and quantum
- **[statement-of-defence-drafter](plugins/arbitration/skills/statement-of-defence-drafter/SKILL.md)**: defence, counterclaim and jurisdictional objections

### conciliation

- **[conciliation-proposal-drafter](plugins/conciliation/skills/conciliation-proposal-drafter/SKILL.md)**: settlement proposals framed for a conciliation
- **[conciliator-brief-drafter](plugins/conciliation/skills/conciliator-brief-drafter/SKILL.md)**: brief putting a party's position to a conciliator
- **[pre-institution-mediation-advisor](plugins/conciliation/skills/pre-institution-mediation-advisor/SKILL.md)**: mandatory pre-institution mediation requirements **(India)**
- **[settlement-terms-drafter](plugins/conciliation/skills/settlement-terms-drafter/SKILL.md)**: settlement terms that are complete and enforceable

### consumer

- **[compensation-quantifier](plugins/consumer/skills/compensation-quantifier/SKILL.md)**: builds a compensation claim head by head from supplied figures
- **[consumer-complaint-drafter](plugins/consumer/skills/consumer-complaint-drafter/SKILL.md)**: consumer complaints with jurisdiction, deficiency and relief
- **[deficiency-analyst](plugins/consumer/skills/deficiency-analyst/SKILL.md)**: tests whether the facts amount to deficiency in service or unfair trade practice
- **[opposite-party-reply-drafter](plugins/consumer/skills/opposite-party-reply-drafter/SKILL.md)**: reply to a consumer complaint on behalf of the opposite party
- **[product-liability-analyst](plugins/consumer/skills/product-liability-analyst/SKILL.md)**: product liability exposure on the given facts

### contracts

- **[clause-comparator](plugins/contracts/skills/clause-comparator/SKILL.md)**: compares the same clause across drafts or against a standard
- **[contract-drafter](plugins/contracts/skills/contract-drafter/SKILL.md)**: drafts an agreement from a term sheet or instructions
- **[contract-reviewer](plugins/contracts/skills/contract-reviewer/SKILL.md)**: quick, focused or full agreement review from one side, with risks ranked
- **[contract-summariser](plugins/contracts/skills/contract-summariser/SKILL.md)**: short factual summary of what an agreement actually does
- **[indemnity-liability-analyst](plugins/contracts/skills/indemnity-liability-analyst/SKILL.md)**: warranties, indemnities, caps, carve-outs and insurance requirements as one system
- **[mou-drafter](plugins/contracts/skills/mou-drafter/SKILL.md)**: MOUs and letters of intent, with binding and non-binding parts made explicit
- **[negotiation-position-planner](plugins/contracts/skills/negotiation-position-planner/SKILL.md)**: opening, fallback and walk-away positions on the open points
- **[obligations-extractor](plugins/contracts/skills/obligations-extractor/SKILL.md)**: pulls every obligation, deadline and condition into a table
- **[redline-proposer](plugins/contracts/skills/redline-proposer/SKILL.md)**: complete replacement wording from the strongest credible position to the minimum acceptable fallback
- **[termination-analyst](plugins/contracts/skills/termination-analyst/SKILL.md)**: termination rights, notice requirements and consequences

### corporate

- **[board-resolution-drafter](plugins/corporate/skills/board-resolution-drafter/SKILL.md)**: board and shareholder resolutions in correct form
- **[listing-obligations-checker](plugins/corporate/skills/listing-obligations-checker/SKILL.md)**: continuous disclosure and listing obligations **(India)**
- **[m-and-a-diligence-checker](plugins/corporate/skills/m-and-a-diligence-checker/SKILL.md)**: diligence checklist and issue log for a transaction
- **[minutes-drafter](plugins/corporate/skills/minutes-drafter/SKILL.md)**: minutes that record decisions and dissent properly
- **[related-party-analyst](plugins/corporate/skills/related-party-analyst/SKILL.md)**: identifies related party transactions and the approvals required **(India)**
- **[restructuring-documenter](plugins/corporate/skills/restructuring-documenter/SKILL.md)**: documentation trail for a corporate restructuring
- **[secretarial-compliance-checker](plugins/corporate/skills/secretarial-compliance-checker/SKILL.md)**: secretarial and filing obligations for a company **(India)**
- **[shareholder-agreement-reviewer](plugins/corporate/skills/shareholder-agreement-reviewer/SKILL.md)**: control, transfer, exit and deadlock provisions

### criminal

- **[anticipatory-bail-advisor](plugins/criminal/skills/anticipatory-bail-advisor/SKILL.md)**: anticipatory bail grounds and strategy **(India)**
- **[bail-application-drafter](plugins/criminal/skills/bail-application-drafter/SKILL.md)**: bail applications with grounds, precedent and conditions offered **(India)**
- **[chargesheet-analyst](plugins/criminal/skills/chargesheet-analyst/SKILL.md)**: reads a chargesheet for gaps, contradictions and legal infirmity **(India)**
- **[defence-strategy-planner](plugins/criminal/skills/defence-strategy-planner/SKILL.md)**: defence theory, lines of attack and evidence needed
- **[quashing-petition-drafter](plugins/criminal/skills/quashing-petition-drafter/SKILL.md)**: petitions to quash proceedings **(India)**
- **[sentencing-analyst](plugins/criminal/skills/sentencing-analyst/SKILL.md)**: mitigating and aggravating factors and reasoned sentencing scenarios

### employment

- **[disciplinary-documenter](plugins/employment/skills/disciplinary-documenter/SKILL.md)**: the paper trail for a disciplinary proceeding
- **[employment-contract-drafter](plugins/employment/skills/employment-contract-drafter/SKILL.md)**: employment contracts with restraint, IP and termination terms
- **[handbook-drafter](plugins/employment/skills/handbook-drafter/SKILL.md)**: employee handbooks and HR policies
- **[labour-compliance-checker](plugins/employment/skills/labour-compliance-checker/SKILL.md)**: applicable labour law obligations for an establishment **(India)**
- **[posh-compliance-advisor](plugins/employment/skills/posh-compliance-advisor/SKILL.md)**: POSH committee, procedure and reporting obligations **(India)**
- **[separation-documenter](plugins/employment/skills/separation-documenter/SKILL.md)**: resignation, termination and severance documentation
- **[workplace-investigation-reporter](plugins/employment/skills/workplace-investigation-reporter/SKILL.md)**: structured investigation report with findings and reasoning

### family

- **[maintenance-calculator](plugins/family/skills/maintenance-calculator/SKILL.md)**: works through a maintenance claim on supplied income and needs
- **[matrimonial-petition-drafter](plugins/family/skills/matrimonial-petition-drafter/SKILL.md)**: matrimonial petitions with grounds properly pleaded **(India)**
- **[settlement-deed-drafter](plugins/family/skills/settlement-deed-drafter/SKILL.md)**: settlement and separation deeds
- **[succession-advisor](plugins/family/skills/succession-advisor/SKILL.md)**: succession position on given facts and the documents required **(India)**
- **[will-drafter](plugins/family/skills/will-drafter/SKILL.md)**: wills, with execution and attestation requirements set out

### finance

- **[guarantee-analyst](plugins/finance/skills/guarantee-analyst/SKILL.md)**: guarantee and indemnity obligations and how they can be enforced
- **[loan-agreement-reviewer](plugins/finance/skills/loan-agreement-reviewer/SKILL.md)**: facility agreements: conditions, covenants, events of default
- **[recovery-strategy-planner](plugins/finance/skills/recovery-strategy-planner/SKILL.md)**: recovery routes for a defaulted exposure, with sequence and cost
- **[sarfaesi-advisor](plugins/finance/skills/sarfaesi-advisor/SKILL.md)**: SARFAESI enforcement steps and timelines **(India)**
- **[securities-compliance-checker](plugins/finance/skills/securities-compliance-checker/SKILL.md)**: securities law obligations on an issue or transaction **(India)**
- **[security-documenter](plugins/finance/skills/security-documenter/SKILL.md)**: security creation, perfection and registration documentation

### insolvency

- **[avoidance-transaction-analyst](plugins/insolvency/skills/avoidance-transaction-analyst/SKILL.md)**: preferential, undervalued and fraudulent transactions **(India)**
- **[cirp-timeline-checker](plugins/insolvency/skills/cirp-timeline-checker/SKILL.md)**: CIRP steps and statutory timelines for a matter **(India)**
- **[claim-verification-analyst](plugins/insolvency/skills/claim-verification-analyst/SKILL.md)**: verification and classification of creditor claims **(India)**
- **[liquidation-documenter](plugins/insolvency/skills/liquidation-documenter/SKILL.md)**: liquidation process documentation **(India)**
- **[operational-creditor-application-drafter](plugins/insolvency/skills/operational-creditor-application-drafter/SKILL.md)**: operational creditor insolvency applications **(India)**
- **[resolution-plan-reviewer](plugins/insolvency/skills/resolution-plan-reviewer/SKILL.md)**: resolution plans for compliance and commercial effect **(India)**

### investigations

- **[chain-of-custody-documenter](plugins/investigations/skills/chain-of-custody-documenter/SKILL.md)**: defensible physical and digital evidence custody records
- **[digital-evidence-reviewer](plugins/investigations/skills/digital-evidence-reviewer/SKILL.md)**: provenance, integrity, authenticity, metadata, attribution and admissibility gaps
- **[fraud-pattern-analyst](plugins/investigations/skills/fraud-pattern-analyst/SKILL.md)**: competing fraud hypotheses, transaction indicators and control failures
- **[investigation-report-drafter](plugins/investigations/skills/investigation-report-drafter/SKILL.md)**: neutral source-linked findings separating evidence from inference
- **[osint-collector](plugins/investigations/skills/osint-collector/SKILL.md)**: lawful, safe and reproducible open-source collection
- **[transaction-tracer](plugins/investigations/skills/transaction-tracer/SKILL.md)**: reconciled funds tracing across accounts, entities, currencies and wallets
- **[whistleblower-report-analyst](plugins/investigations/skills/whistleblower-report-analyst/SKILL.md)**: protected intake, risk triage and proportionate investigation planning

### ip

- **[cease-desist-drafter](plugins/ip/skills/cease-desist-drafter/SKILL.md)**: proportionate source-backed IP enforcement notices
- **[infringement-analyst](plugins/ip/skills/infringement-analyst/SKILL.md)**: right-specific infringement, defence, validity and remedy analysis
- **[ip-assignment-drafter](plugins/ip/skills/ip-assignment-drafter/SKILL.md)**: precise IP ownership transfers, schedules and recordal steps
- **[ip-portfolio-analyst](plugins/ip/skills/ip-portfolio-analyst/SKILL.md)**: ownership, coverage, deadlines, exploitation, encumbrance and risk audits
- **[licensing-agreement-reviewer](plugins/ip/skills/licensing-agreement-reviewer/SKILL.md)**: licence scope, economics, quality control, improvements and exit effects
- **[trademark-opposition-drafter](plugins/ip/skills/trademark-opposition-drafter/SKILL.md)**: opposition, counterstatement and rectification materials **(India)**

### litigation

- **[appeal-grounds-drafter](plugins/litigation/skills/appeal-grounds-drafter/SKILL.md)**: record-linked grounds, preserved errors, standards of review and relief
- **[case-law-analyst](plugins/litigation/skills/case-law-analyst/SKILL.md)**: verified holdings, ratio, obiter, treatment, application and distinction
- **[chronology-builder](plugins/litigation/skills/chronology-builder/SKILL.md)**: sourced event, knowledge and procedural chronologies with conflicts and gaps
- **[cross-examination-planner](plugins/litigation/skills/cross-examination-planner/SKILL.md)**: ethical issue-led questioning, contradictions and admissible impeachment
- **[evidence-organizer](plugins/litigation/skills/evidence-organizer/SKILL.md)**: evidence mapped to facts, elements, witnesses, foundations and objections
- **[interim-application-drafter](plugins/litigation/skills/interim-application-drafter/SKILL.md)**: evidence-backed urgent relief, candour, undertakings and workable orders
- **[limitation-checker](plugins/litigation/skills/limitation-checker/SKILL.md)**: competing deadline scenarios, accrual, exclusions, extensions and forum issues
- **[pleadings-analyst](plugins/litigation/skills/pleadings-analyst/SKILL.md)**: claims, defences, admissions, inconsistencies, particulars and live issues
- **[witness-statement-drafter](plugins/litigation/skills/witness-statement-drafter/SKILL.md)**: witness-owned factual evidence, exhibits, uncertainty and formalities
- **[written-submissions-drafter](plugins/litigation/skills/written-submissions-drafter/SKILL.md)**: issue-led, authority-verified and record-linked written advocacy

### mediation

- **[caucus-strategy-planner](plugins/mediation/skills/caucus-strategy-planner/SKILL.md)**: what to disclose and hold back in private session
- **[mediation-brief-drafter](plugins/mediation/skills/mediation-brief-drafter/SKILL.md)**: mediation brief setting out position and interests
- **[mediation-opening-drafter](plugins/mediation/skills/mediation-opening-drafter/SKILL.md)**: opening statement for a mediation
- **[mediation-outcome-documenter](plugins/mediation/skills/mediation-outcome-documenter/SKILL.md)**: records what was agreed and what remains open
- **[party-interest-analyst](plugins/mediation/skills/party-interest-analyst/SKILL.md)**: separates stated positions from underlying interests on both sides
- **[settlement-evaluator](plugins/mediation/skills/settlement-evaluator/SKILL.md)**: tests a settlement offer against the litigation alternative

### practice

- **[brief-to-counsel-drafter](plugins/practice/skills/brief-to-counsel-drafter/SKILL.md)**: focused instructions, facts, issues, record, questions and logistics
- **[closure-report-drafter](plugins/practice/skills/closure-report-drafter/SKILL.md)**: controlled closure, client handoff, obligations, finances and retention
- **[conflict-checker](plugins/practice/skills/conflict-checker/SKILL.md)**: confidential party mapping, searches, escalation and clearance records
- **[costing-estimator](plugins/practice/skills/costing-estimator/SKILL.md)**: transparent stage budgets, scenarios, assumptions and change controls
- **[time-narrative-drafter](plugins/practice/skills/time-narrative-drafter/SKILL.md)**: accurate, specific and privilege-aware legal time entries

### privacy

- **[breach-response-planner](plugins/privacy/skills/breach-response-planner/SKILL.md)**: containment, evidence, harm assessment, notification and remediation
- **[cross-border-transfer-analyst](plugins/privacy/skills/cross-border-transfer-analyst/SKILL.md)**: transfer maps, mechanisms, destination risk and supplementary safeguards
- **[data-processing-agreement-reviewer](plugins/privacy/skills/data-processing-agreement-reviewer/SKILL.md)**: roles, instructions, security, subprocessors, audits, transfers and deletion
- **[dpdp-compliance-checker](plugins/privacy/skills/dpdp-compliance-checker/SKILL.md)**: commenced DPDP duties, evidence and implementation readiness **(India)**
- **[dpia-documenter](plugins/privacy/skills/dpia-documenter/SKILL.md)**: necessity, proportionality, individual risk, safeguards and residual approval
- **[privacy-policy-drafter](plugins/privacy/skills/privacy-policy-drafter/SKILL.md)**: accurate layered notices matched to verified processing

### property

- **[development-agreement-reviewer](plugins/property/skills/development-agreement-reviewer/SKILL.md)**: development and joint venture agreements for land
- **[encumbrance-analyst](plugins/property/skills/encumbrance-analyst/SKILL.md)**: reads encumbrance records for charges, gaps and risk **(India)**
- **[lease-reviewer](plugins/property/skills/lease-reviewer/SKILL.md)**: leases and licences: term, rent, renewal, exit
- **[rera-compliance-checker](plugins/property/skills/rera-compliance-checker/SKILL.md)**: RERA registration and disclosure obligations **(India)**
- **[sale-deed-drafter](plugins/property/skills/sale-deed-drafter/SKILL.md)**: sale deeds and conveyances
- **[stamp-duty-analyst](plugins/property/skills/stamp-duty-analyst/SKILL.md)**: stamp duty and registration position on supplied rates **(India)**
- **[title-diligence-analyst](plugins/property/skills/title-diligence-analyst/SKILL.md)**: title chain, defects and what remains unverified **(India)**

### public

- **[government-contract-reviewer](plugins/public/skills/government-contract-reviewer/SKILL.md)**: authority, procurement hierarchy, fiscal controls, performance, transparency and disputes
- **[pil-drafter](plugins/public/skills/pil-drafter/SKILL.md)**: maintainable public interest litigation with bona fides, public injury and workable relief **(India)**
- **[policy-note-drafter](plugins/public/skills/policy-note-drafter/SKILL.md)**: decision-ready policy and cabinet notes with options, impacts, consultation and implementation
- **[rti-appeal-drafter](plugins/public/skills/rti-appeal-drafter/SKILL.md)**: remedy selection, limitation, grounds and relief for RTI appeals and complaints **(India)**
- **[rti-application-drafter](plugins/public/skills/rti-application-drafter/SKILL.md)**: focused requests for identifiable records held by the correct public authority **(India)**
- **[tender-compliance-checker](plugins/public/skills/tender-compliance-checker/SKILL.md)**: traceable requirements, evidence, deviations, blockers and submission control

### regulatory

- **[examination-response-drafter](plugins/regulatory/skills/examination-response-drafter/SKILL.md)**: evidence-led examination, deficiency and show-cause responses with credible remediation
- **[licence-application-drafter](plugins/regulatory/skills/licence-application-drafter/SKILL.md)**: complete licence and registration applications with requirements, evidence and conditions
- **[regulatory-applicability-analyst](plugins/regulatory/skills/regulatory-applicability-analyst/SKILL.md)**: regulator and instrument mapping from current official text, with verification gaps reported
- **[regulatory-change-monitor](plugins/regulatory/skills/regulatory-change-monitor/SKILL.md)**: controlled baselines, official-source changes, legal-effect timelines and implementation impact
- **[regulatory-filing-preparer](plugins/regulatory/skills/regulatory-filing-preparer/SKILL.md)**: auditable periodic and event-based filings with data lineage, validation and submission evidence
- **[sanctions-screening-documenter](plugins/regulatory/skills/sanctions-screening-documenter/SKILL.md)**: reproducible list, match, ownership, restriction and disposition records

### research

- **[comparative-analyst](plugins/research/skills/comparative-analyst/SKILL.md)**: compares the position across jurisdictions or statutes
- **[forum-jurisdiction-analyst](plugins/research/skills/forum-jurisdiction-analyst/SKILL.md)**: which forum, which jurisdiction, and what turns on the choice
- **[issue-spotter](plugins/research/skills/issue-spotter/SKILL.md)**: reads a fact pattern for issues, causes of action and threshold problems
- **[legislative-history-analyst](plugins/research/skills/legislative-history-analyst/SKILL.md)**: traces how a provision reached its current form
- **[precedent-mapper](plugins/research/skills/precedent-mapper/SKILL.md)**: maps the authorities on a point and how they relate
- **[research-synthesiser](plugins/research/skills/research-synthesiser/SKILL.md)**: pulls scattered research into a single reasoned position
- **[statutory-interpreter](plugins/research/skills/statutory-interpreter/SKILL.md)**: interprets a provision using the accepted canons, showing the reasoning

### startup

- **[cap-table-analyst](plugins/startup/skills/cap-table-analyst/SKILL.md)**: works through dilution and ownership on supplied numbers
- **[esop-scheme-drafter](plugins/startup/skills/esop-scheme-drafter/SKILL.md)**: ESOP scheme documents and grant letters
- **[founders-agreement-drafter](plugins/startup/skills/founders-agreement-drafter/SKILL.md)**: founder agreements: vesting, roles, exit, IP
- **[investment-agreement-reviewer](plugins/startup/skills/investment-agreement-reviewer/SKILL.md)**: SHA and SSA review from the founder's or investor's side
- **[saas-terms-drafter](plugins/startup/skills/saas-terms-drafter/SKILL.md)**: SaaS terms of service and customer agreements
- **[startup-compliance-checker](plugins/startup/skills/startup-compliance-checker/SKILL.md)**: compliance obligations by stage and structure **(India)**
- **[term-sheet-reviewer](plugins/startup/skills/term-sheet-reviewer/SKILL.md)**: term sheet review flagging off-market and founder-adverse terms

### tax

- **[fema-analyst](plugins/tax/skills/fema-analyst/SKILL.md)**: FEMA position on a cross-border transaction **(India)**
- **[gst-compliance-analyst](plugins/tax/skills/gst-compliance-analyst/SKILL.md)**: GST treatment and compliance obligations **(India)**
- **[tax-appeal-grounds-drafter](plugins/tax/skills/tax-appeal-grounds-drafter/SKILL.md)**: grounds of appeal against an assessment or order **(India)**
- **[tax-assessment-reply-drafter](plugins/tax/skills/tax-assessment-reply-drafter/SKILL.md)**: replies to assessment and scrutiny notices **(India)**
- **[tax-opinion-drafter](plugins/tax/skills/tax-opinion-drafter/SKILL.md)**: written tax opinion with the position and its risk stated
- **[transfer-pricing-documenter](plugins/tax/skills/transfer-pricing-documenter/SKILL.md)**: transfer pricing documentation and benchmarking record
- **[treaty-analyst](plugins/tax/skills/treaty-analyst/SKILL.md)**: treaty entitlement and relief on given facts

### verify

- **[adversarial-reviewer](plugins/verify/skills/adversarial-reviewer/SKILL.md)**: attacks your own draft the way opposing counsel would
- **[assumption-flagger](plugins/verify/skills/assumption-flagger/SKILL.md)**: surfaces every assumption a draft depends on
- **[citation-integrity-checker](plugins/verify/skills/citation-integrity-checker/SKILL.md)**: flags every citation with what must be verified and how
- **[consistency-checker](plugins/verify/skills/consistency-checker/SKILL.md)**: checks facts, dates, defined terms and figures across a document set

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
already planned. Skills are reviewed for legal substance before merging, not
just for structure.

Contributions are accepted under the MIT licence.

---

# 7. Licence

MIT. See [LICENSE](LICENSE).
