# Set Up an AI-Powered Full-Service Law Firm in 90 Seconds

To install **Legal AI Skills by Rohas Nagpal**, open Codex or Claude and run this prompt:

```text
Install Legal AI Skills from https://github.com/rohasnagpal/legal-ai-skills and say "Hello Rohas".
```
---
<img width="949" height="799" alt="image" src="https://github.com/user-attachments/assets/1ab803f3-7578-4e67-85f2-a8dead314202" />

## Here's What You Get

- **1 Managing Partner:** Receives matters, assigns specialist lawyers, coordinates work and reviews final outputs.

- **17 Specialist Lawyers:** Handle matters across practice areas such as corporate, criminal defence, contracts, family law, real estate, tax and litigation.

- **3 Jurisdiction Counsel:** Identify and verify applicable laws, legal authorities and procedures in India, the US and the UK.

- **226 Legal Skills:** Reusable capabilities such as contract review, legal research, due diligence, evidence analysis and legal drafting, including jurisdiction-specific skills for RERA and Section 138 NI Act.

- **20 Workflows:** Step-by-step processes for matters such as M&A due diligence, divorce proceedings, contract negotiation and litigation preparation.

- **14 Official Legal Research Sources and Connectors:** Provide access to legislation, regulations, judgments, court records, official notices, company registries and sanctions lists through official and authoritative legal sources.

- **Built-in Legal Tools:** Exact deadline and interest calculators, and private sanctions screening against the US, UK and UN lists, all running on your own machine.

Built in India 🇮🇳 for the world by [Rohas Nagpal](https://rohasnagpal.com/).

---

## Should I Sue?

Facing a dispute and not sure whether to pursue it? Install with this prompt instead:

```text
Install Legal AI Skills from https://github.com/rohasnagpal/legal-ai-skills and say "Should I Sue".
```

Put your contracts, emails, messages, screenshots and notices in one folder, open a new session in that folder, and ask **"Should I sue?"** A team of AI lawyers reads every document, examines the claims, evidence, risks, costs, chances and alternatives, and recommends litigation, arbitration, mediation, negotiation, a regulatory or consumer complaint, or walking away, with any urgent deadline first. It reads only the folder you open, and the final decision is yours. More at [docs/should-i-sue.md](docs/should-i-sue.md).

---

## How It Works

1. **Managing Partner** receives the matter and consults Jurisdiction Counsel to identify applicable laws, jurisdiction, relevant procedures and required expertise.

2. **Managing Partner** assigns the most appropriate Specialist Lawyer as Matter Owner and selects a relevant workflow, where available.

3. **Matter Owner** develops a matter plan, identifies the required skills, adapts the workflow to the case and delegates tasks to other Specialist Lawyers as needed. The Matter Owner remains responsible for coordinating the matter throughout.

4. **Specialist Lawyers** conduct research, analysis, drafting and review using relevant legal skills. Jurisdiction Counsel provides and verifies applicable local laws, procedures and legal authorities.

5. **Matter Owner** consolidates findings, resolves inconsistencies, identifies outstanding issues and prepares the final deliverables.

6. **Managing Partner** reviews the completed work for completeness, legal reasoning, consistency, supporting evidence, verified authorities and legal risks. Jurisdiction Counsel assists with final local-law verification where required. The Managing Partner requests revisions when necessary.

7. **Final output** is delivered to the user, clearly identifying any unresolved issues, unverified information and required human legal review or approval.

Simple questions skip the team: the Managing Partner uses the one relevant skill directly.

---

## Architecture

```text
AI Managing Partner
│
├── Jurisdiction Counsel
│   ├── India Counsel
│   ├── US Counsel
│   └── UK Counsel
│
├── Specialist Lawyers
│   ├── Corporate Lawyer
│   ├── Contracts Lawyer
│   ├── Litigation Lawyer
│   ├── Dispute Resolution Lawyer
│   ├── Criminal Defence Lawyer
│   ├── Family Lawyer
│   ├── Real Estate Lawyer
│   ├── Tax Lawyer
│   ├── Insolvency Lawyer
│   ├── Banking & Finance Lawyer
│   ├── Employment Lawyer
│   ├── Intellectual Property Lawyer
│   ├── Compliance Lawyer
│   ├── Consumer Protection Lawyer
│   ├── Public Law & Regulatory Lawyer
│   ├── Investigations Lawyer
│   └── Legal Research Lawyer
│
├── Legal Skills
│   ├── Jurisdiction-Neutral Skills
│   └── Jurisdiction-Specific Skills
│
├── Matter Workflows
│   ├── M&A Due Diligence
│   ├── Contract Review & Negotiation
│   ├── Litigation Preparation
│   ├── Divorce Proceedings
│   ├── RERA Complaints
│   └── ...
│
├── Official Legal Research Sources & Connectors (14)
│   ├── Legislation & Regulations — legislation.gov.uk, eCFR, Federal Register, GovInfo
│   ├── Case Law & Judgments — CourtListener, Find Case Law
│   ├── Court, Rulemaking & Official Notices — CourtListener dockets, Regulations.gov, The Gazette
│   ├── Company Registries — SEC EDGAR, GLEIF, UK Companies House
│   └── Sanctions Lists — US OFAC, UK Sanctions List, UN Consolidated List
│
└── Built-in Legal Tools (run on your machine)
    ├── Deadline & Interest Calculators — deadlines, periods between dates, simple & compound interest
    ├── Sanctions Screening — private, alias-aware name screening
    └── Document Production — DOCX, PDF, conversion, OCR & bundle assembly
```

---

## Important Considerations

**Confidentiality:** Before uploading client documents or confidential information, ensure that your AI environment and connected services comply with applicable confidentiality, privacy and professional obligations.

**Human Review:** AI-generated legal analysis, advice and documents should be reviewed by an appropriately qualified legal professional where required. Court filings, representation and other regulated legal activities remain subject to applicable professional and legal requirements.

**Legal Accuracy:** The system should verify applicable laws and authorities wherever possible and clearly disclose any information it cannot verify. Its outputs are not guaranteed to be accurate or complete.

---

## For AI Assistants Installing This

If you are Codex or Claude running the install prompt above, follow [AGENTS.md](AGENTS.md). In short:

- **Claude Code:** run `claude plugin marketplace add rohasnagpal/legal-ai-skills`, then `claude plugin install legal-ai-skills@rohas-legal` in the terminal yourself. (A person can type `/plugin marketplace add …` and `/plugin install …` instead.)
- **Codex:** run `codex plugin marketplace add rohasnagpal/legal-ai-skills`, then `codex plugin add legal-ai-skills@rohas-legal`.
- Confirm the plugin appears in the installed plugins list, then print the post-install message in [AGENTS.md](AGENTS.md). The new skills load in a new session or after `/reload-plugins`, so tell the user to do that and then type **Hello Rohas**.

Node.js 18 or later is needed for the bundled registry, research and document tools. The legal skills work without it.

**Upgrading from vCLO:** the plugin is now `legal-ai-skills`. Uninstall the older Rohas plugins (`vclo-by-rohas`, `rohas-legal-ai`, `navigator`, `privacy`) and install `legal-ai-skills@rohas-legal`, so skills and connectors don't load twice. In the Codex desktop app, quit and reopen the app after installing so the connectors load. "Hello vCLO" still works for this release.

---

## Updating to a New Version

Paste this into Claude Code or Codex:

```text
Update Legal AI Skills from https://github.com/rohasnagpal/legal-ai-skills
```

Or run the commands yourself:

```bash
# Claude Code
claude plugin marketplace update rohas-legal
claude plugin update legal-ai-skills@rohas-legal

# Codex
codex plugin marketplace upgrade rohas-legal
codex plugin add legal-ai-skills@rohas-legal
```

Then restart: in Claude Code run `/reload-plugins` or start a new session; in Codex start a new chat, and in the Codex desktop app quit and reopen it. Say **Hello Rohas** to check the version is working. See the [changelog](CHANGELOG.md) for what changed.

---

## The 20 Workflows

| Workflow | Matter Owner |
|---|---|
| [Divorce and matrimonial proceedings](plugins/legal-ai-skills/workflows/divorce-and-matrimonial-proceedings.md) | Family Lawyer |
| [RERA complaint](plugins/legal-ai-skills/workflows/rera-complaint.md) | Real Estate Lawyer |
| [Property purchase due diligence](plugins/legal-ai-skills/workflows/property-purchase-due-diligence.md) | Real Estate Lawyer |
| [Cheque dishonour (Section 138)](plugins/legal-ai-skills/workflows/cheque-dishonour.md) | Litigation or Criminal Defence Lawyer |
| [Criminal defence](plugins/legal-ai-skills/workflows/criminal-defence.md) | Criminal Defence Lawyer |
| [Consumer complaint](plugins/legal-ai-skills/workflows/consumer-complaint.md) | Consumer Protection Lawyer |
| [Tax assessment and appeal](plugins/legal-ai-skills/workflows/tax-assessment-and-appeal.md) | Tax Lawyer |
| [Insolvency and CIRP](plugins/legal-ai-skills/workflows/insolvency-cirp.md) | Insolvency Lawyer |
| [Debt recovery](plugins/legal-ai-skills/workflows/debt-recovery.md) | Banking & Finance Lawyer |
| [Employment dispute](plugins/legal-ai-skills/workflows/employment-dispute.md) | Employment Lawyer |
| [Contract review and negotiation](plugins/legal-ai-skills/workflows/contract-review-and-negotiation.md) | Contracts Lawyer |
| [M&A due diligence](plugins/legal-ai-skills/workflows/m-and-a-due-diligence.md) | Corporate Lawyer |
| [Financing transaction](plugins/legal-ai-skills/workflows/financing-transaction.md) | Banking & Finance Lawyer |
| [Dispute viability assessment](plugins/legal-ai-skills/workflows/dispute-viability-assessment.md) | Litigation Lawyer |
| [Litigation preparation](plugins/legal-ai-skills/workflows/litigation-preparation.md) | Litigation Lawyer |
| [Commercial dispute lifecycle](plugins/legal-ai-skills/workflows/commercial-dispute-lifecycle.md) | Litigation Lawyer |
| [Arbitration lifecycle](plugins/legal-ai-skills/workflows/arbitration-lifecycle.md) | Dispute Resolution Lawyer |
| [Regulatory compliance review](plugins/legal-ai-skills/workflows/regulatory-compliance-review.md) | Compliance Lawyer |
| [Data breach response](plugins/legal-ai-skills/workflows/data-breach-response.md) | Compliance Lawyer |
| [Internal investigation](plugins/legal-ai-skills/workflows/internal-investigation.md) | Investigations Lawyer |

Each workflow names its Matter Owner, supporting lawyers, branches, review checkpoints and escalation points.

---

## Research Sources, Connectors and Tools

| Source | Coverage | Access |
|---|---|---|
| CourtListener | US case law and court records | Free account |
| GovInfo | US federal statutes, regulations and records | Free API key recommended |
| eCFR (Code of Federal Regulations) | US federal regulations, current or as at a date | No account |
| Federal Register | US rules and notices | No account |
| Regulations.gov | US rulemaking dockets | Free API key |
| legislation.gov.uk | UK legislation | No account |
| Find Case Law (The National Archives) | UK judgments | No account |
| The Gazette | UK insolvency, company and probate notices | No account; rate-limited |
| SEC EDGAR | US company filings | No account |
| GLEIF | Global legal entity identifiers | No account |
| UK Companies House | UK company records | Free key may be needed |
| US OFAC sanctions lists (SDN and consolidated) | US sanctions designations and aliases | No account; screened locally |
| UK Sanctions List | UK sanctions designations and aliases | No account; screened locally |
| UN Security Council Consolidated List | UN sanctions designations and aliases | No account; screened locally |

India Counsel routes Indian research through official sources such as India Code, eGazette, the Supreme Court, High Courts, tribunals and regulators where accessible. There is no unrestricted eCourts access, paid database or commercial citator. When a source is unavailable, the firm says what it could not check.

**Sanctions screening:** the firm downloads the official US, UK and UN sanctions lists, keeps them on your machine for 24 hours, and screens names there with fuzzy matching across aliases, so the names you screen are never sent to anyone. Results are potential matches for review, not clearance, and EU, Indian and other national lists are not included. See the [sanctions screening guide](plugins/legal-ai-skills/integrations/sanctions-screening.md).

**Legal calculators:** a local, offline calculator ([guide](plugins/legal-ai-skills/integrations/legal-calculators.md)) computes deadlines (days, working days, months or years, with supplied holidays), periods between dates, and simple or compound interest, exactly and with the working shown. It applies only the rules it is given, so statutory periods and rates still come from Jurisdiction Counsel.

The firm also includes a local document-production adapter for DOCX and PDF creation, conversion, OCR and assembly using free local engines, and can use documents, email, calendars and cloud storage that you connect and authorise in your host.

---

## See It in Action

Start with the [two-minute guide](docs/two-minute-start.md), then see fictional demonstrations for an [Indian divorce](examples/india-divorce.md), a [RERA complaint](examples/rera-complaint.md), [contract negotiation](examples/contract-review-and-negotiation.md), [M&A due diligence](examples/m-and-a-due-diligence.md), an [Indian commercial dispute](examples/india-commercial-dispute.md), [US privacy applicability](examples/us-privacy-applicability.md) and a [UK employment issue](examples/uk-employment-issue.md).

---

## Sample Prompts

1. Two founders are splitting equity 60/40. Draft a founders' agreement with four-year vesting, a one-year cliff and IP assignment to the company.

2. A UK employer wants to dismiss a remote worker after a failed performance review. What must be established before we can give advice?

3. A customer bought a defective laptop online and the seller refuses to replace it. Can they file a consumer complaint in India, and what compensation can they claim?

4. An employee has reported that her manager is harassing her. As the company, what should we do under India's POSH Act, step by step?

5. We want to launch an online marketplace for customers in California, Texas and New York. Which US state privacy laws might apply, and what facts do we need to confirm?

6. Draft a mutual NDA between two Indian companies exploring a joint venture, with a two-year confidentiality period and arbitration in Mumbai.

---

## FAQ

**Is my client data sent anywhere?** Your documents stay in your Codex or Claude environment. The calculators and sanctions screening run on your machine; research connectors send only the search terms needed to the official source. Check your own AI provider's data terms before sharing confidential material.

**Where does it run?** Inside Codex or Claude. In Claude Code each lawyer runs as its own subagent. In Codex, lawyers run as subagents where Codex supports it, or their work is performed in turn and kept separate.

**What does it cost?** $0, plus your ChatGPT or Claude subscription.

**Who is it for?** Practising lawyers, in-house counsel, startups, businesses and law students.

**Languages?** It works in the languages your Codex or Claude model supports. The skills and source guides are maintained in English, so verify translations, defined terms and filing-language requirements.

**For law firms:** need help setting up or customising Legal AI Skills? Contact [Rohas Nagpal](https://rohasnagpal.com) at rohasnagpal@gmail.com.

---

# The Lawyers and Their Skills

Each skill is listed under the lawyer who owns it. Many are shared: any lawyer can use any skill, and the [skill registry](plugins/legal-ai-skills/skill-registry.yaml) records the owner, shared users and jurisdiction of every skill. Jurisdiction-specific skills are marked 🇮🇳, 🇺🇸 or 🇬🇧.

[Managing Partner and firm operations](#managing-partner-and-firm-operations) · [Corporate Lawyer](#corporate-lawyer) · [Contracts Lawyer](#contracts-lawyer) · [Litigation Lawyer](#litigation-lawyer) · [Dispute Resolution Lawyer](#dispute-resolution-lawyer) · [Criminal Defence Lawyer](#criminal-defence-lawyer) · [Family Lawyer](#family-lawyer) · [Real Estate Lawyer](#real-estate-lawyer) · [Tax Lawyer](#tax-lawyer) · [Insolvency Lawyer](#insolvency-lawyer) · [Banking and Finance Lawyer](#banking-and-finance-lawyer) · [Employment Lawyer](#employment-lawyer) · [IP Lawyer](#ip-lawyer) · [Compliance Lawyer](#compliance-lawyer) · [Consumer Protection Lawyer](#consumer-protection-lawyer) · [Public Law and Regulatory Lawyer](#public-law-and-regulatory-lawyer) · [Investigations Lawyer](#investigations-lawyer) · [Legal Research Lawyer](#legal-research-lawyer) · [India Counsel](#india-counsel) · [US Counsel](#us-counsel) · [UK Counsel](#uk-counsel)

### Managing Partner and firm operations

Instructions: [managing-partner.md](plugins/legal-ai-skills/agents/managing-partner.md)

- **[adversarial-reviewer](plugins/legal-ai-skills/skills/adversarial-reviewer/SKILL.md)**: attacks your own draft the way opposing counsel would
- **[ask-vclo](plugins/legal-ai-skills/skills/ask-vclo/SKILL.md)**: Legacy name for Legal AI Skills by Rohas Nagpal
- **[assumption-flagger](plugins/legal-ai-skills/skills/assumption-flagger/SKILL.md)**: surfaces every assumption a draft depends on
- **[brief-to-counsel-drafter](plugins/legal-ai-skills/skills/brief-to-counsel-drafter/SKILL.md)**: focused instructions, facts, issues, record, questions and logistics
- **[client-intake](plugins/legal-ai-skills/skills/client-intake/SKILL.md)**: turns a messy client narrative into a structured matter summary, separating facts from assumptions
- **[client-update-drafter](plugins/legal-ai-skills/skills/client-update-drafter/SKILL.md)**: plain, honest status updates for a client on a running matter
- **[closure-report-drafter](plugins/legal-ai-skills/skills/closure-report-drafter/SKILL.md)**: controlled closure, client handoff, obligations, finances and retention
- **[conflict-checker](plugins/legal-ai-skills/skills/conflict-checker/SKILL.md)**: confidential party mapping, searches, escalation and clearance records
- **[consistency-checker](plugins/legal-ai-skills/skills/consistency-checker/SKILL.md)**: checks facts, dates, defined terms and figures across a document set
- **[costing-estimator](plugins/legal-ai-skills/skills/costing-estimator/SKILL.md)**: transparent stage budgets, scenarios, assumptions and change controls
- **[engagement-letter-drafter](plugins/legal-ai-skills/skills/engagement-letter-drafter/SKILL.md)**: scope, fees, exclusions and conflict position in a client engagement letter
- **[hello-rohas](plugins/legal-ai-skills/skills/hello-rohas/SKILL.md)**: Your AI law firm: Managing Partner, specialist lawyers and counsel
- **[issue-spotter](plugins/legal-ai-skills/skills/issue-spotter/SKILL.md)**: reads a fact pattern for issues, causes of action and threshold problems
- **[learn-law-with-rohas](plugins/legal-ai-skills/skills/learn-law-with-rohas/SKILL.md)**: interactive legal tutor — structured lessons, hypotheticals, quizzes, adaptive difficulty and a final assessment on a law or topic of your choice
- **[legal-document-producer](plugins/legal-ai-skills/skills/legal-document-producer/SKILL.md)**: template-aware DOCX and PDF production, conversion, OCR, assembly and final-format quality control
- **[legal-exam-prep-with-rohas](plugins/legal-ai-skills/skills/legal-exam-prep-with-rohas/SKILL.md)**: exam-focused revision — study plans, mock exams, adaptive quizzes, answer-structure coaching and weak-area tracking for a specific examination
- **[legal-explainer](plugins/legal-ai-skills/skills/legal-explainer/SKILL.md)**: explains a law, clause, judgment, or legal concept in clear plain language, adapted to the reader's level
- **[legal-opinion-drafter](plugins/legal-ai-skills/skills/legal-opinion-drafter/SKILL.md)**: structured written legal or tax opinion with question, analysis, conclusion and caveats — tax opinions add a risk-characterisation and exposure step
- **[legal-risk-assessor](plugins/legal-ai-skills/skills/legal-risk-assessor/SKILL.md)**: sets out the options on a decision, with the risk and likely outcome of each
- **[should-i-sue](plugins/legal-ai-skills/skills/should-i-sue/SKILL.md)**: front door for people deciding whether to pursue their own dispute — reads every document in the folder and recommends the best route, including walking away
- **[time-narrative-drafter](plugins/legal-ai-skills/skills/time-narrative-drafter/SKILL.md)**: accurate, specific and privilege-aware legal time entries

### Corporate Lawyer

Instructions: [corporate-lawyer.md](plugins/legal-ai-skills/agents/corporate-lawyer.md)

- **[board-resolution-drafter](plugins/legal-ai-skills/skills/board-resolution-drafter/SKILL.md)**: board and shareholder resolutions in correct form
- **[cap-table-analyst](plugins/legal-ai-skills/skills/cap-table-analyst/SKILL.md)**: works through dilution and ownership on supplied numbers
- **[deal-structure-analyst](plugins/legal-ai-skills/skills/deal-structure-analyst/SKILL.md)**: compares alternative transaction structures and their legal consequences before drafting
- **[founders-agreement-drafter](plugins/legal-ai-skills/skills/founders-agreement-drafter/SKILL.md)**: founder agreements: vesting, roles, exit, IP
- **[investment-and-shareholder-agreement-reviewer](plugins/legal-ai-skills/skills/investment-and-shareholder-agreement-reviewer/SKILL.md)**: term sheets, SHAs, SSAs, JV and constitutional rights packages, from any party's side
- **[listing-obligations-checker](plugins/legal-ai-skills/skills/listing-obligations-checker/SKILL.md)** 🇮🇳: Check India listed-entity disclosure obligations
- **[m-and-a-diligence-checker](plugins/legal-ai-skills/skills/m-and-a-diligence-checker/SKILL.md)**: diligence checklist and issue log for a transaction
- **[minutes-drafter](plugins/legal-ai-skills/skills/minutes-drafter/SKILL.md)**: minutes that record decisions and dissent properly
- **[related-party-analyst](plugins/legal-ai-skills/skills/related-party-analyst/SKILL.md)** 🇮🇳: Assess India related-party status and approvals
- **[secretarial-compliance-checker](plugins/legal-ai-skills/skills/secretarial-compliance-checker/SKILL.md)** 🇮🇳: Check India company-law filings and governance
- **[securities-compliance-checker](plugins/legal-ai-skills/skills/securities-compliance-checker/SKILL.md)** 🇮🇳: Map India securities duties and filings
- **[startup-compliance-checker](plugins/legal-ai-skills/skills/startup-compliance-checker/SKILL.md)** 🇮🇳: Check India startup compliance by stage and structure
- **[transaction-document-checker](plugins/legal-ai-skills/skills/transaction-document-checker/SKILL.md)**: checks a closing set against the term sheet and conditions-precedent checklist
- **[uk-companies-act-compliance-checker](plugins/legal-ai-skills/skills/uk-companies-act-compliance-checker/SKILL.md)** 🇬🇧: UK: Companies Act Compliance Checker
- **[us-sec-reporting-checker](plugins/legal-ai-skills/skills/us-sec-reporting-checker/SKILL.md)** 🇺🇸: US: SEC Reporting Checker

### Contracts Lawyer

Instructions: [contracts-lawyer.md](plugins/legal-ai-skills/agents/contracts-lawyer.md)

- **[clause-comparator](plugins/legal-ai-skills/skills/clause-comparator/SKILL.md)**: compares the same clause across drafts or against a standard
- **[contract-drafter](plugins/legal-ai-skills/skills/contract-drafter/SKILL.md)**: drafts any commercial agreement, MOU/LOI, or SaaS terms from a term sheet or instructions
- **[contract-summariser](plugins/legal-ai-skills/skills/contract-summariser/SKILL.md)**: short factual summary of what an agreement actually does
- **[indemnity-liability-analyst](plugins/legal-ai-skills/skills/indemnity-liability-analyst/SKILL.md)**: warranties, indemnities, caps, carve-outs and insurance requirements as one system
- **[negotiation-position-planner](plugins/legal-ai-skills/skills/negotiation-position-planner/SKILL.md)**: opening, fallback and walk-away positions on the open points
- **[obligations-extractor](plugins/legal-ai-skills/skills/obligations-extractor/SKILL.md)**: pulls every obligation, deadline and condition into a table
- **[redline-proposer](plugins/legal-ai-skills/skills/redline-proposer/SKILL.md)**: complete replacement wording from the strongest credible position to the minimum acceptable fallback
- **[termination-analyst](plugins/legal-ai-skills/skills/termination-analyst/SKILL.md)**: termination rights, notice requirements and consequences

### Litigation Lawyer

Instructions: [litigation-lawyer.md](plugins/legal-ai-skills/agents/litigation-lawyer.md)

- **[appeal-grounds-drafter](plugins/legal-ai-skills/skills/appeal-grounds-drafter/SKILL.md)**: record-linked grounds, preserved errors, standards of review and relief
- **[cheque-dishonour-complaint-drafter](plugins/legal-ai-skills/skills/cheque-dishonour-complaint-drafter/SKILL.md)** 🇮🇳: Draft section 138 complaints after notice
- **[cheque-dishonour-notice-drafter](plugins/legal-ai-skills/skills/cheque-dishonour-notice-drafter/SKILL.md)** 🇮🇳: Draft section 138 cheque dishonour notices
- **[chronology-builder](plugins/legal-ai-skills/skills/chronology-builder/SKILL.md)**: sourced event, knowledge and procedural chronologies with conflicts and gaps
- **[commercial-suit-filing-checker](plugins/legal-ai-skills/skills/commercial-suit-filing-checker/SKILL.md)** 🇮🇳: India: Commercial Suit Filing Checker
- **[court-order-compliance-checker](plugins/legal-ai-skills/skills/court-order-compliance-checker/SKILL.md)**: turns an order into tracked obligations, deadlines and contempt-risk assessment
- **[damages-quantifier](plugins/legal-ai-skills/skills/damages-quantifier/SKILL.md)**: general commercial/civil damages head by head — expectation, reliance, lost profits, interest, mitigation
- **[decree-execution-and-enforcement-drafter](plugins/legal-ai-skills/skills/decree-execution-and-enforcement-drafter/SKILL.md)** 🇮🇳: Draft Indian decree execution applications
- **[disclosure-request-drafter](plugins/legal-ai-skills/skills/disclosure-request-drafter/SKILL.md)**: proportionate issue-linked disclosure, discovery and inspection requests
- **[document-review-protocol-builder](plugins/legal-ai-skills/skills/document-review-protocol-builder/SKILL.md)**: defensible review coding, privilege, quality control and escalation protocols
- **[england-wales-civil-claim-drafter](plugins/legal-ai-skills/skills/england-wales-civil-claim-drafter/SKILL.md)** 🇬🇧: UK: England and Wales Civil Claim Drafter
- **[england-wales-pre-action-protocol-checker](plugins/legal-ai-skills/skills/england-wales-pre-action-protocol-checker/SKILL.md)** 🇬🇧: UK: England and Wales Pre-Action Protocol Checker
- **[india-legal-notice-response-strategist](plugins/legal-ai-skills/skills/india-legal-notice-response-strategist/SKILL.md)** 🇮🇳: India: Legal-Notice Response Strategist
- **[interim-application-drafter](plugins/legal-ai-skills/skills/interim-application-drafter/SKILL.md)**: evidence-backed urgent relief, candour, undertakings and workable orders
- **[legal-notice-analyser](plugins/legal-ai-skills/skills/legal-notice-analyser/SKILL.md)**: analyses a received notice's allegations, deadlines and evidence needs before replying
- **[limitation-checker](plugins/legal-ai-skills/skills/limitation-checker/SKILL.md)**: competing deadline scenarios, accrual, exclusions, extensions and forum issues
- **[litigation-strategy-planner](plugins/legal-ai-skills/skills/litigation-strategy-planner/SKILL.md)**: integrates claims, evidence, limitation, forum, interim relief and cost into one sequenced strategy
- **[notice-reply-drafter](plugins/legal-ai-skills/skills/notice-reply-drafter/SKILL.md)**: replies to a legal notice, dealing with each allegation in turn
- **[plaint-drafter](plugins/legal-ai-skills/skills/plaint-drafter/SKILL.md)** 🇮🇳: Draft Indian civil and commercial plaints
- **[pleadings-analyst](plugins/legal-ai-skills/skills/pleadings-analyst/SKILL.md)**: claims, defences, admissions, inconsistencies, particulars and live issues
- **[privilege-log-builder](plugins/legal-ai-skills/skills/privilege-log-builder/SKILL.md)**: supportable privilege entries, family reconciliation, waiver flags and challenges
- **[production-set-checker](plugins/legal-ai-skills/skills/production-set-checker/SKILL.md)**: pre-release scope, file, metadata, privilege, redaction and delivery quality control
- **[redaction-reviewer](plugins/legal-ai-skills/skills/redaction-reviewer/SKILL.md)**: legal-basis, consistency and technical-permanence review of redactions
- **[us-federal-civil-procedure-checker](plugins/legal-ai-skills/skills/us-federal-civil-procedure-checker/SKILL.md)** 🇺🇸: US: Federal Civil Procedure Checker
- **[witness-statement-drafter](plugins/legal-ai-skills/skills/witness-statement-drafter/SKILL.md)**: witness-owned factual evidence, exhibits, uncertainty and formalities
- **[written-statement-drafter](plugins/legal-ai-skills/skills/written-statement-drafter/SKILL.md)** 🇮🇳: Draft Indian civil written statements
- **[written-submissions-drafter](plugins/legal-ai-skills/skills/written-submissions-drafter/SKILL.md)**: issue-led, authority-verified and record-linked written advocacy

### Dispute Resolution Lawyer

Instructions: [dispute-resolution-lawyer.md](plugins/legal-ai-skills/agents/dispute-resolution-lawyer.md)

- **[adr-brief-drafter](plugins/legal-ai-skills/skills/adr-brief-drafter/SKILL.md)**: brief putting a party's position to a mediator or conciliator, adapted to the process and to whether it's shared or confidential
- **[arbitral-award-analyst](plugins/legal-ai-skills/skills/arbitral-award-analyst/SKILL.md)**: reads an award for findings, reasoning and enforceability
- **[arbitral-award-enforcement-advisor](plugins/legal-ai-skills/skills/arbitral-award-enforcement-advisor/SKILL.md)** 🇮🇳: India: Arbitral Award Enforcement Advisor
- **[arbitration-clause-reviewer](plugins/legal-ai-skills/skills/arbitration-clause-reviewer/SKILL.md)**: checks a clause for seat, venue, rules, appointment and pathology
- **[arbitration-interim-relief-drafter](plugins/legal-ai-skills/skills/arbitration-interim-relief-drafter/SKILL.md)**: chooses the route — emergency arbitrator, tribunal, or court **(India Sections 9/17)** — and drafts the application
- **[arbitration-notice-drafter](plugins/legal-ai-skills/skills/arbitration-notice-drafter/SKILL.md)**: notice invoking arbitration, with the disputes properly framed
- **[arbitration-pleading-drafter](plugins/legal-ai-skills/skills/arbitration-pleading-drafter/SKILL.md)**: statement of claim, statement of defence, counterclaim and reply to counterclaim
- **[arbitrator-appointment-advisor](plugins/legal-ai-skills/skills/arbitrator-appointment-advisor/SKILL.md)**: appointment mechanics, eligibility and independence disclosure
- **[award-challenge-analyst](plugins/legal-ai-skills/skills/award-challenge-analyst/SKILL.md)**: assesses the grounds available to challenge or resist an award
- **[caucus-strategy-planner](plugins/legal-ai-skills/skills/caucus-strategy-planner/SKILL.md)**: what to disclose and hold back in private session
- **[conciliation-proposal-drafter](plugins/legal-ai-skills/skills/conciliation-proposal-drafter/SKILL.md)**: settlement proposals framed for a conciliation
- **[litigation-viability-assessor](plugins/legal-ai-skills/skills/litigation-viability-assessor/SKILL.md)**: source-backed “should we sue, defend, settle or investigate?” assessment covering merits, evidence, procedure, remedies, recovery and enforcement
- **[mediation-opening-drafter](plugins/legal-ai-skills/skills/mediation-opening-drafter/SKILL.md)**: opening statement for a mediation
- **[party-interest-analyst](plugins/legal-ai-skills/skills/party-interest-analyst/SKILL.md)**: separates stated positions from underlying interests on both sides
- **[pre-institution-mediation-advisor](plugins/legal-ai-skills/skills/pre-institution-mediation-advisor/SKILL.md)** 🇮🇳: Assess India pre-suit mediation requirements
- **[procedural-order-drafter](plugins/legal-ai-skills/skills/procedural-order-drafter/SKILL.md)**: procedural orders and timetables for a tribunal
- **[settlement-documenter](plugins/legal-ai-skills/skills/settlement-documenter/SKILL.md)**: records a session outcome, or drafts complete binding settlement terms, once agreement is reached
- **[settlement-evaluator](plugins/legal-ai-skills/skills/settlement-evaluator/SKILL.md)**: tests a settlement offer against the litigation alternative
- **[settlement-strategy-planner](plugins/legal-ai-skills/skills/settlement-strategy-planner/SKILL.md)**: builds BATNA/WATNA, negotiating range and concession sequencing before any offer exists

### Criminal Defence Lawyer

Instructions: [criminal-defence-lawyer.md](plugins/legal-ai-skills/agents/criminal-defence-lawyer.md)

- **[arrest-rights-advisor](plugins/legal-ai-skills/skills/arrest-rights-advisor/SKILL.md)**: Rights and urgent steps on arrest or questioning
- **[bail-advisor-and-drafter](plugins/legal-ai-skills/skills/bail-advisor-and-drafter/SKILL.md)** 🇮🇳: Assess anticipatory or post-arrest bail strategy and draft the application
- **[chargesheet-analyst](plugins/legal-ai-skills/skills/chargesheet-analyst/SKILL.md)** 🇮🇳: Analyse India police reports and prosecution gaps
- **[criminal-appeal-planner](plugins/legal-ai-skills/skills/criminal-appeal-planner/SKILL.md)**: Plan a criminal appeal or revision
- **[criminal-complaint-analyst](plugins/legal-ai-skills/skills/criminal-complaint-analyst/SKILL.md)**: Analyse an FIR or criminal complaint for the defence
- **[criminal-evidence-admissibility-analyst](plugins/legal-ai-skills/skills/criminal-evidence-admissibility-analyst/SKILL.md)**: Admissibility and weight of criminal evidence
- **[cross-examination-planner](plugins/legal-ai-skills/skills/cross-examination-planner/SKILL.md)**: ethical issue-led questioning, contradictions and admissible impeachment
- **[defence-strategy-planner](plugins/legal-ai-skills/skills/defence-strategy-planner/SKILL.md)**: defence theory, lines of attack and evidence needed
- **[discharge-application-drafter](plugins/legal-ai-skills/skills/discharge-application-drafter/SKILL.md)** 🇮🇳: Draft a discharge application (India)
- **[offence-ingredients-analyst](plugins/legal-ai-skills/skills/offence-ingredients-analyst/SKILL.md)**: Element-by-element analysis of an offence
- **[quashing-petition-drafter](plugins/legal-ai-skills/skills/quashing-petition-drafter/SKILL.md)** 🇮🇳: Draft India criminal quashing petitions
- **[sentencing-analyst](plugins/legal-ai-skills/skills/sentencing-analyst/SKILL.md)**: mitigating and aggravating factors and reasoned sentencing scenarios
- **[trial-readiness-checker](plugins/legal-ai-skills/skills/trial-readiness-checker/SKILL.md)**: Defence readiness checklist for trial

### Family Lawyer

Instructions: [family-lawyer.md](plugins/legal-ai-skills/agents/family-lawyer.md)

- **[child-custody-planner](plugins/legal-ai-skills/skills/child-custody-planner/SKILL.md)**: Plan custody, access and parenting arrangements
- **[divorce-grounds-assessor](plugins/legal-ai-skills/skills/divorce-grounds-assessor/SKILL.md)**: Assess grounds and route for divorce
- **[domestic-violence-remedies-advisor](plugins/legal-ai-skills/skills/domestic-violence-remedies-advisor/SKILL.md)**: Safety steps and protection orders for domestic abuse
- **[family-court-procedure-checker](plugins/legal-ai-skills/skills/family-court-procedure-checker/SKILL.md)**: Forum, filing and steps in a family case
- **[maintenance-calculator](plugins/legal-ai-skills/skills/maintenance-calculator/SKILL.md)**: works through a maintenance claim on supplied income and needs
- **[matrimonial-petition-drafter](plugins/legal-ai-skills/skills/matrimonial-petition-drafter/SKILL.md)** 🇮🇳: Draft India matrimonial petitions and reliefs
- **[matrimonial-property-analyst](plugins/legal-ai-skills/skills/matrimonial-property-analyst/SKILL.md)**: Map and divide property on marriage breakdown
- **[matter-planner](plugins/legal-ai-skills/skills/matter-planner/SKILL.md)**: Plan a matter, owners and delegation
- **[settlement-deed-drafter](plugins/legal-ai-skills/skills/settlement-deed-drafter/SKILL.md)**: family and separation settlement deeds, with child welfare and non-waivable rights preserved
- **[succession-advisor](plugins/legal-ai-skills/skills/succession-advisor/SKILL.md)** 🇮🇳: Map India inheritance rights and next steps
- **[will-drafter](plugins/legal-ai-skills/skills/will-drafter/SKILL.md)**: wills, with execution and attestation requirements set out

### Real Estate Lawyer

Instructions: [real-estate-lawyer.md](plugins/legal-ai-skills/agents/real-estate-lawyer.md)

- **[builder-buyer-agreement-reviewer](plugins/legal-ai-skills/skills/builder-buyer-agreement-reviewer/SKILL.md)**: Review off-plan and builder-buyer agreements
- **[construction-delay-defect-analyst](plugins/legal-ai-skills/skills/construction-delay-defect-analyst/SKILL.md)**: Construction delay, extension and defect claims
- **[development-agreement-reviewer](plugins/legal-ai-skills/skills/development-agreement-reviewer/SKILL.md)**: development and joint venture agreements for land
- **[encumbrance-analyst](plugins/legal-ai-skills/skills/encumbrance-analyst/SKILL.md)** 🇮🇳: Read encumbrance certificates for charges and gaps
- **[land-use-zoning-advisor](plugins/legal-ai-skills/skills/land-use-zoning-advisor/SKILL.md)**: Permitted land use, zoning and approvals
- **[lease-reviewer](plugins/legal-ai-skills/skills/lease-reviewer/SKILL.md)**: Review leases, tenancies and licences
- **[rera-complaint-drafter](plugins/legal-ai-skills/skills/rera-complaint-drafter/SKILL.md)** 🇮🇳: Draft an allottee's RERA complaint (India)
- **[rera-compliance-checker](plugins/legal-ai-skills/skills/rera-compliance-checker/SKILL.md)** 🇮🇳: Check India RERA registration and disclosure obligations
- **[sale-deed-drafter](plugins/legal-ai-skills/skills/sale-deed-drafter/SKILL.md)**: sale deeds and conveyances
- **[stamp-duty-analyst](plugins/legal-ai-skills/skills/stamp-duty-analyst/SKILL.md)** 🇮🇳: Calculate stamp duty and registration cost from supplied rates
- **[tenancy-dispute-analyst](plugins/legal-ai-skills/skills/tenancy-dispute-analyst/SKILL.md)**: Landlord-tenant disputes and eviction strategy
- **[title-diligence-analyst](plugins/legal-ai-skills/skills/title-diligence-analyst/SKILL.md)** 🇮🇳: Trace title chain and flag what remains unverified

### Tax Lawyer

Instructions: [tax-lawyer.md](plugins/legal-ai-skills/agents/tax-lawyer.md)

- **[fema-analyst](plugins/legal-ai-skills/skills/fema-analyst/SKILL.md)** 🇮🇳: Work out the FEMA position on a cross-border transaction
- **[gst-compliance-analyst](plugins/legal-ai-skills/skills/gst-compliance-analyst/SKILL.md)** 🇮🇳: Check GST treatment and compliance obligations
- **[input-tax-credit-dispute-analyst](plugins/legal-ai-skills/skills/input-tax-credit-dispute-analyst/SKILL.md)** 🇮🇳: GST input tax credit disputes (India)
- **[tax-appeal-grounds-drafter](plugins/legal-ai-skills/skills/tax-appeal-grounds-drafter/SKILL.md)** 🇮🇳: Draft grounds of appeal against a tax order
- **[tax-assessment-reply-drafter](plugins/legal-ai-skills/skills/tax-assessment-reply-drafter/SKILL.md)** 🇮🇳: Reply to tax assessment and scrutiny notices
- **[tax-litigation-strategy-planner](plugins/legal-ai-skills/skills/tax-litigation-strategy-planner/SKILL.md)**: Choose and sequence the route in a tax dispute
- **[tax-notice-analyst](plugins/legal-ai-skills/skills/tax-notice-analyst/SKILL.md)**: Understand a tax notice, exposure and options
- **[transfer-pricing-documenter](plugins/legal-ai-skills/skills/transfer-pricing-documenter/SKILL.md)**: transfer pricing documentation and benchmarking record
- **[treaty-analyst](plugins/legal-ai-skills/skills/treaty-analyst/SKILL.md)**: treaty entitlement and relief on given facts

### Insolvency Lawyer

Instructions: [insolvency-lawyer.md](plugins/legal-ai-skills/agents/insolvency-lawyer.md)

- **[avoidance-transaction-analyst](plugins/legal-ai-skills/skills/avoidance-transaction-analyst/SKILL.md)** 🇮🇳: Analyse India insolvency avoidance exposure
- **[cirp-timeline-checker](plugins/legal-ai-skills/skills/cirp-timeline-checker/SKILL.md)** 🇮🇳: Build current India CIRP deadlines and owners
- **[claim-verification-analyst](plugins/legal-ai-skills/skills/claim-verification-analyst/SKILL.md)** 🇮🇳: Verify and classify India insolvency claims
- **[coc-decision-analyst](plugins/legal-ai-skills/skills/coc-decision-analyst/SKILL.md)** 🇮🇳: Committee of creditors decisions (India)
- **[creditor-claim-preparer](plugins/legal-ai-skills/skills/creditor-claim-preparer/SKILL.md)**: Prepare a proof of claim in insolvency
- **[insolvency-appeal-drafter](plugins/legal-ai-skills/skills/insolvency-appeal-drafter/SKILL.md)**: Appeal an insolvency order
- **[insolvency-options-assessor](plugins/legal-ai-skills/skills/insolvency-options-assessor/SKILL.md)**: Choose between insolvency and alternatives
- **[liquidation-documenter](plugins/legal-ai-skills/skills/liquidation-documenter/SKILL.md)** 🇮🇳: Build compliant India liquidation records
- **[moratorium-impact-analyst](plugins/legal-ai-skills/skills/moratorium-impact-analyst/SKILL.md)**: What an insolvency moratorium stays
- **[operational-creditor-application-drafter](plugins/legal-ai-skills/skills/operational-creditor-application-drafter/SKILL.md)** 🇮🇳: Draft India operational-creditor IBC filings
- **[personal-guarantor-insolvency-analyst](plugins/legal-ai-skills/skills/personal-guarantor-insolvency-analyst/SKILL.md)** 🇮🇳: Personal guarantor insolvency (India)
- **[resolution-plan-reviewer](plugins/legal-ai-skills/skills/resolution-plan-reviewer/SKILL.md)** 🇮🇳: Review India resolution plans and outcomes
- **[restructuring-documenter](plugins/legal-ai-skills/skills/restructuring-documenter/SKILL.md)**: documentation trail for a corporate restructuring
- **[uk-insolvency-applicability-checker](plugins/legal-ai-skills/skills/uk-insolvency-applicability-checker/SKILL.md)** 🇬🇧: UK: Insolvency Applicability Checker

### Banking and Finance Lawyer

Instructions: [banking-finance-lawyer.md](plugins/legal-ai-skills/agents/banking-finance-lawyer.md)

- **[closing-checklist-builder](plugins/legal-ai-skills/skills/closing-checklist-builder/SKILL.md)**: Conditions precedent and closing checklist
- **[contract-reviewer](plugins/legal-ai-skills/skills/contract-reviewer/SKILL.md)**: quick, focused or full review of any commercial agreement — including loans, leases and IP licences — from one side, with risks ranked
- **[covenant-monitor](plugins/legal-ai-skills/skills/covenant-monitor/SKILL.md)**: Covenant compliance tracking and testing
- **[facility-agreement-drafter](plugins/legal-ai-skills/skills/facility-agreement-drafter/SKILL.md)**: Draft a facility agreement from a term sheet
- **[financial-services-licensing-assessor](plugins/legal-ai-skills/skills/financial-services-licensing-assessor/SKILL.md)**: Whether a financial activity needs a licence
- **[guarantee-analyst](plugins/legal-ai-skills/skills/guarantee-analyst/SKILL.md)**: guarantee and indemnity obligations and how they can be enforced
- **[loan-agreement-reviewer](plugins/legal-ai-skills/skills/loan-agreement-reviewer/SKILL.md)** 🇮🇳: Review Indian loan and facility agreements
- **[loan-default-analyst](plugins/legal-ai-skills/skills/loan-default-analyst/SKILL.md)**: Events of default and acceleration
- **[recovery-strategy-planner](plugins/legal-ai-skills/skills/recovery-strategy-planner/SKILL.md)**: recovery routes for a defaulted exposure, with sequence and cost
- **[sarfaesi-advisor](plugins/legal-ai-skills/skills/sarfaesi-advisor/SKILL.md)** 🇮🇳: Plan compliant India secured-asset enforcement
- **[secured-creditor-priority-analyst](plugins/legal-ai-skills/skills/secured-creditor-priority-analyst/SKILL.md)**: Ranking of creditors over assets
- **[security-documenter](plugins/legal-ai-skills/skills/security-documenter/SKILL.md)**: security creation, perfection and registration documentation

### Employment Lawyer

Instructions: [employment-lawyer.md](plugins/legal-ai-skills/agents/employment-lawyer.md)

- **[disciplinary-documenter](plugins/legal-ai-skills/skills/disciplinary-documenter/SKILL.md)**: the paper trail for a disciplinary proceeding
- **[employment-contract-drafter](plugins/legal-ai-skills/skills/employment-contract-drafter/SKILL.md)**: employment contracts with restraint, IP and termination terms
- **[esop-scheme-drafter](plugins/legal-ai-skills/skills/esop-scheme-drafter/SKILL.md)**: ESOP scheme documents and grant letters
- **[handbook-drafter](plugins/legal-ai-skills/skills/handbook-drafter/SKILL.md)**: employee handbooks and HR policies
- **[labour-compliance-checker](plugins/legal-ai-skills/skills/labour-compliance-checker/SKILL.md)** 🇮🇳: Check India labour-law duties and evidence
- **[posh-compliance-advisor](plugins/legal-ai-skills/skills/posh-compliance-advisor/SKILL.md)** 🇮🇳: Check India POSH governance and procedure
- **[separation-documenter](plugins/legal-ai-skills/skills/separation-documenter/SKILL.md)**: resignation, termination and severance documentation
- **[uk-employment-law-applicability-checker](plugins/legal-ai-skills/skills/uk-employment-law-applicability-checker/SKILL.md)** 🇬🇧: UK: Employment-Law Applicability Checker
- **[us-employment-law-applicability-checker](plugins/legal-ai-skills/skills/us-employment-law-applicability-checker/SKILL.md)** 🇺🇸: US: Employment-Law Applicability Checker
- **[whistleblower-report-analyst](plugins/legal-ai-skills/skills/whistleblower-report-analyst/SKILL.md)**: protected intake, risk triage and proportionate investigation planning

### IP Lawyer

Instructions: [ip-lawyer.md](plugins/legal-ai-skills/agents/ip-lawyer.md)

- **[cease-desist-drafter](plugins/legal-ai-skills/skills/cease-desist-drafter/SKILL.md)**: proportionate source-backed IP enforcement notices
- **[infringement-analyst](plugins/legal-ai-skills/skills/infringement-analyst/SKILL.md)**: right-specific infringement, defence, validity and remedy analysis
- **[ip-assignment-drafter](plugins/legal-ai-skills/skills/ip-assignment-drafter/SKILL.md)**: precise IP ownership transfers, schedules and recordal steps
- **[ip-portfolio-analyst](plugins/legal-ai-skills/skills/ip-portfolio-analyst/SKILL.md)**: ownership, coverage, deadlines, exploitation, encumbrance and risk audits
- **[trademark-opposition-drafter](plugins/legal-ai-skills/skills/trademark-opposition-drafter/SKILL.md)** 🇮🇳: Draft India trademark opposition pleadings

### Compliance Lawyer

Instructions: [compliance-lawyer.md](plugins/legal-ai-skills/agents/compliance-lawyer.md)

- **[breach-response-planner](plugins/legal-ai-skills/skills/breach-response-planner/SKILL.md)**: containment, evidence, harm assessment, notification and remediation
- **[compliance-obligations-mapper](plugins/legal-ai-skills/skills/compliance-obligations-mapper/SKILL.md)**: turns a regulation's text into an owners-and-deadlines obligations register
- **[cross-border-transfer-analyst](plugins/legal-ai-skills/skills/cross-border-transfer-analyst/SKILL.md)**: transfer maps, mechanisms, destination risk and supplementary safeguards
- **[data-processing-agreement-reviewer](plugins/legal-ai-skills/skills/data-processing-agreement-reviewer/SKILL.md)**: roles, instructions, security, subprocessors, audits, transfers and deletion
- **[dpdp-compliance-checker](plugins/legal-ai-skills/skills/dpdp-compliance-checker/SKILL.md)** 🇮🇳: Check processing against India's DPDP framework
- **[dpia-documenter](plugins/legal-ai-skills/skills/dpia-documenter/SKILL.md)**: necessity, proportionality, individual risk, safeguards and residual approval
- **[examination-response-drafter](plugins/legal-ai-skills/skills/examination-response-drafter/SKILL.md)**: evidence-led examination, deficiency and show-cause responses with credible remediation
- **[licence-application-drafter](plugins/legal-ai-skills/skills/licence-application-drafter/SKILL.md)**: complete licence and registration applications with requirements, evidence and conditions
- **[privacy-policy-drafter](plugins/legal-ai-skills/skills/privacy-policy-drafter/SKILL.md)**: project-aware code audits and accurate layered notices matched to verified processing
- **[regulatory-change-monitor](plugins/legal-ai-skills/skills/regulatory-change-monitor/SKILL.md)**: controlled baselines, official-source changes, legal-effect timelines and implementation impact
- **[regulatory-filing-preparer](plugins/legal-ai-skills/skills/regulatory-filing-preparer/SKILL.md)**: auditable periodic and event-based filings with data lineage, validation and submission evidence
- **[sanctions-screening-documenter](plugins/legal-ai-skills/skills/sanctions-screening-documenter/SKILL.md)**: reproducible list, match, ownership, restriction and disposition records
- **[uk-data-protection-compliance-checker](plugins/legal-ai-skills/skills/uk-data-protection-compliance-checker/SKILL.md)** 🇬🇧: UK: Data-Protection Compliance Checker
- **[us-privacy-law-applicability-checker](plugins/legal-ai-skills/skills/us-privacy-law-applicability-checker/SKILL.md)** 🇺🇸: US: Privacy-Law Applicability Checker

### Consumer Protection Lawyer

Instructions: [consumer-protection-lawyer.md](plugins/legal-ai-skills/agents/consumer-protection-lawyer.md)

- **[compensation-quantifier](plugins/legal-ai-skills/skills/compensation-quantifier/SKILL.md)**: builds a compensation claim head by head from supplied figures
- **[consumer-appeal-drafter](plugins/legal-ai-skills/skills/consumer-appeal-drafter/SKILL.md)**: Appeal a consumer forum order
- **[consumer-complaint-eligibility-checker](plugins/legal-ai-skills/skills/consumer-complaint-eligibility-checker/SKILL.md)**: Whether and where a consumer complaint lies
- **[consumer-pleading-drafter](plugins/legal-ai-skills/skills/consumer-pleading-drafter/SKILL.md)**: consumer complaint (complainant side) or reply (opposite-party side)
- **[deficiency-analyst](plugins/legal-ai-skills/skills/deficiency-analyst/SKILL.md)**: tests whether the facts amount to deficiency in service or unfair trade practice
- **[demand-notice-drafter](plugins/legal-ai-skills/skills/demand-notice-drafter/SKILL.md)**: pre-litigation demand notices with the claim properly particularised
- **[ecommerce-consumer-compliance-checker](plugins/legal-ai-skills/skills/ecommerce-consumer-compliance-checker/SKILL.md)**: Consumer-law compliance for online selling
- **[product-liability-analyst](plugins/legal-ai-skills/skills/product-liability-analyst/SKILL.md)**: product liability exposure on the given facts

### Public Law and Regulatory Lawyer

Instructions: [public-law-lawyer.md](plugins/legal-ai-skills/agents/public-law-lawyer.md)

- **[administrative-action-challenge-analyst](plugins/legal-ai-skills/skills/administrative-action-challenge-analyst/SKILL.md)**: Grounds to challenge a public decision
- **[constitutional-rights-analyst](plugins/legal-ai-skills/skills/constitutional-rights-analyst/SKILL.md)**: Whether State action infringes constitutional rights
- **[government-contract-reviewer](plugins/legal-ai-skills/skills/government-contract-reviewer/SKILL.md)**: authority, procurement hierarchy, fiscal controls, performance, transparency and disputes
- **[pil-drafter](plugins/legal-ai-skills/skills/pil-drafter/SKILL.md)** 🇮🇳: Draft India PILs with standing and public harm
- **[policy-note-drafter](plugins/legal-ai-skills/skills/policy-note-drafter/SKILL.md)**: decision-ready policy and cabinet notes with options, impacts, consultation and implementation
- **[regulatory-appeal-planner](plugins/legal-ai-skills/skills/regulatory-appeal-planner/SKILL.md)**: Appeal a regulator's decision or penalty
- **[regulatory-applicability-analyst](plugins/legal-ai-skills/skills/regulatory-applicability-analyst/SKILL.md)**: regulator and instrument mapping from current official text, with verification gaps reported
- **[rti-appeal-drafter](plugins/legal-ai-skills/skills/rti-appeal-drafter/SKILL.md)** 🇮🇳: Draft effective first and second RTI appeals
- **[rti-application-drafter](plugins/legal-ai-skills/skills/rti-application-drafter/SKILL.md)** 🇮🇳: Draft focused India RTI information requests
- **[tender-compliance-checker](plugins/legal-ai-skills/skills/tender-compliance-checker/SKILL.md)**: traceable requirements, evidence, deviations, blockers and submission control
- **[writ-petition-drafter](plugins/legal-ai-skills/skills/writ-petition-drafter/SKILL.md)** 🇮🇳: Draft a writ petition (India)

### Investigations Lawyer

Instructions: [investigations-lawyer.md](plugins/legal-ai-skills/agents/investigations-lawyer.md)

- **[chain-of-custody-documenter](plugins/legal-ai-skills/skills/chain-of-custody-documenter/SKILL.md)**: defensible physical and digital evidence custody records
- **[digital-evidence-reviewer](plugins/legal-ai-skills/skills/digital-evidence-reviewer/SKILL.md)**: provenance, integrity, authenticity, metadata, attribution and admissibility gaps
- **[evidence-organizer](plugins/legal-ai-skills/skills/evidence-organizer/SKILL.md)**: evidence mapped to facts, elements, witnesses, foundations and objections
- **[fraud-pattern-analyst](plugins/legal-ai-skills/skills/fraud-pattern-analyst/SKILL.md)**: competing fraud hypotheses, transaction indicators and control failures
- **[investigation-report-drafter](plugins/legal-ai-skills/skills/investigation-report-drafter/SKILL.md)**: neutral source-linked findings separating evidence from inference, with a workplace-investigation mode
- **[legal-hold-planner](plugins/legal-ai-skills/skills/legal-hold-planner/SKILL.md)**: preservation triggers, custodians, sources, notices, monitoring and release controls
- **[osint-collector](plugins/legal-ai-skills/skills/osint-collector/SKILL.md)**: lawful, safe and reproducible open-source collection
- **[transaction-tracer](plugins/legal-ai-skills/skills/transaction-tracer/SKILL.md)**: reconciled funds tracing across accounts, entities, currencies and wallets

### Legal Research Lawyer

Instructions: [legal-research-lawyer.md](plugins/legal-ai-skills/agents/legal-research-lawyer.md)

- **[authority-validator](plugins/legal-ai-skills/skills/authority-validator/SKILL.md)**: tests whether a cited authority actually supports the point, is still good law, and binds this forum
- **[case-law-analyst](plugins/legal-ai-skills/skills/case-law-analyst/SKILL.md)**: verified holdings, ratio, obiter, treatment, application and distinction
- **[citation-integrity-checker](plugins/legal-ai-skills/skills/citation-integrity-checker/SKILL.md)**: flags every citation with what must be verified and how
- **[comparative-analyst](plugins/legal-ai-skills/skills/comparative-analyst/SKILL.md)**: compares the position across jurisdictions or statutes
- **[forum-jurisdiction-analyst](plugins/legal-ai-skills/skills/forum-jurisdiction-analyst/SKILL.md)**: which forum, which jurisdiction, and what turns on the choice
- **[legal-research-planner](plugins/legal-ai-skills/skills/legal-research-planner/SKILL.md)**: breaks a broad question into sub-questions, source hierarchy and a search strategy before research starts
- **[legislative-history-analyst](plugins/legal-ai-skills/skills/legislative-history-analyst/SKILL.md)**: traces how a provision reached its current form
- **[precedent-mapper](plugins/legal-ai-skills/skills/precedent-mapper/SKILL.md)**: maps the authorities on a point and how they relate
- **[research-synthesiser](plugins/legal-ai-skills/skills/research-synthesiser/SKILL.md)**: pulls scattered research into a single reasoned position
- **[statutory-interpreter](plugins/legal-ai-skills/skills/statutory-interpreter/SKILL.md)**: interprets a provision using the accepted canons, showing the reasoning
- **[us-federal-state-issue-mapper](plugins/legal-ai-skills/skills/us-federal-state-issue-mapper/SKILL.md)** 🇺🇸: US: Federal–State Issue Mapper
- **[us-state-law-research-planner](plugins/legal-ai-skills/skills/us-state-law-research-planner/SKILL.md)** 🇺🇸: US: State-Law Research Planner

### India Counsel

Instructions: [india-counsel.md](plugins/legal-ai-skills/agents/india-counsel.md)

- **[india-counsel](plugins/legal-ai-skills/skills/india-counsel/SKILL.md)** 🇮🇳: Indian law, procedure and verification

### US Counsel

Instructions: [us-counsel.md](plugins/legal-ai-skills/agents/us-counsel.md)

- **[us-counsel](plugins/legal-ai-skills/skills/us-counsel/SKILL.md)** 🇺🇸: US federal and State law verification

### UK Counsel

Instructions: [uk-counsel.md](plugins/legal-ai-skills/agents/uk-counsel.md)

- **[uk-counsel](plugins/legal-ai-skills/skills/uk-counsel/SKILL.md)** 🇬🇧: UK jurisdiction and law verification

---

# Contributing

Corrections, bug reports and suggestions are welcome: please open an issue.

New skills by discussion first. Open an issue describing the skill before
writing it, so we can agree the scope and check it does not overlap something
already in the library. Skills are reviewed for legal substance before merging,
not just for structure. After adding a skill, run `ruby scripts/build-skill-registry.rb`
and `ruby scripts/validate.rb`.

Contributions are accepted under the MIT licence.

---

# Licence

MIT. See [LICENSE](LICENSE).
