# Routing and precedence rules

Apply these rules after identifying the user's principal deliverable. Select exactly one plugin.

## Core precedence

1. Prefer the plugin with the most specific workflow for the requested legal domain and deliverable.
2. Prefer the principal final deliverable over incidental supporting work.
3. Prefer a domain plugin over Contracts, Litigation, Advisory, or Research when the domain plugin contains the requested workflow.
4. Use Verify only when quality control of an existing draft or document set is itself the principal task.
5. Never recommend a plugin merely because a keyword appears. Read the user's intended outcome and procedural setting.

## Agreement routing

- Route general commercial drafting, review, comparison, extraction, liability, termination, negotiation, redlining, and MOUs to Contracts.
- Route employment agreements and workplace policies to Employment.
- Route loans, guarantees, security packages, recovery, SARFAESI, and securities compliance to Finance.
- Route founders' agreements, venture term sheets, SHA/SSA investment documents, ESOPs, startup SaaS terms, and startup compliance to Startup.
- Route established-company shareholder agreements, governance, M&A diligence, restructuring, board matters, listing obligations, and secretarial compliance to Corporate.
- Route DPAs and privacy-governance documents to Privacy.
- Route IP assignments, licences, infringement, and trademark proceedings to IP.
- Route leases, sale deeds, development agreements, title, encumbrances, RERA, and stamp duty to Property.
- Route government contracts and tender compliance to Public.
- Route arbitration clauses to Arbitration even when embedded in a larger agreement if clause analysis is the principal task.

## Dispute and procedure routing

- Route arbitration commencement, appointment, pleadings, interim relief, procedure, awards, and challenges to Arbitration.
- Route criminal bail, chargesheets, defence, quashing, and sentencing to Criminal.
- Route consumer complaints, replies, deficiency, product liability, and compensation to Consumer.
- Route tax notices and tax appeals to Tax.
- Route regulator notices, examinations, licences, filings, and sanctions screening to Regulatory.
- Route RTI, PIL, government procurement, and public-law deliverables to Public.
- Route general civil or commercial court preservation and legal holds, disclosure or discovery requests, document-review protocols, privilege logs, production checking, redaction review, pleadings, evidence, limitation, witnesses, submissions, appeals, and cross-examination to Litigation.
- Route evidence collection, forensic review, fraud analysis, OSINT, transaction tracing, chain of custody, and investigation reports to Investigations, even if litigation may follow.

## Settlement routing

- Route mediation session preparation, interests, caucus strategy, mediation openings, settlement evaluation, and mediation outcome records to Mediation.
- Route conciliation proposals, conciliator briefs, Indian pre-institution mediation, and full settlement terms after agreement to Conciliation.
- When the user expressly asks for a mediation brief or mediation strategy, use Mediation. When the user asks about section 12A pre-institution mediation, conciliation, or documenting concluded settlement terms, use Conciliation.

## Advisory, research, and verification

- Route a formal legal opinion, option-and-risk analysis, client communication, engagement letter, demand notice, notice reply, or intake summary to Advisory unless a domain plugin has the exact procedural deliverable.
- Route issue spotting, jurisdiction or forum analysis, comparative law, legislative history, precedent mapping, research synthesis, and statutory interpretation to Research when research is the principal product.
- Route adversarial review, assumption auditing, citation checking, or consistency checking of an existing finished document to Verify.
- If the user wants a substantive review followed by a quality check, choose the substantive domain plugin and request an internal self-check in the prompt. Choose Verify only when the draft already exists and the requested output is the audit.

## Frequent boundary cases

- Employment contract: Employment, not Contracts.
- Commercial supply or services agreement: Contracts.
- Venture financing term sheet or SHA/SSA: Startup.
- Shareholder governance agreement outside a venture financing context: Corporate.
- Debt enforcement before IBC: Finance; CIRP, liquidation, claims, avoidance, or resolution plans: Insolvency.
- Workplace investigation: Employment; fraud, digital evidence, OSINT, tracing, or whistleblower investigation: Investigations.
- Litigation preservation, disclosure, privilege logs, production QC, or legal redaction review: Litigation; forensic acquisition, authenticity, integrity, or chain of custody: Investigations.
- Family succession or will: Family; title transfer, sale deed, lease, or encumbrance: Property.
- FEMA: Tax, because that capability is packaged there in this catalogue.
- Securities compliance: Finance; listed-company governance obligations: Corporate.
- Government tender: Public; private-sector regulatory licence or filing: Regulatory.
- Case-law authorities applied to live litigation: Litigation; mapping or interpreting authorities as the main research product: Research.

## Multi-part requests

Select the plugin that owns the user's dominant outcome. Do not recommend multiple plugins or a sequence. Preserve secondary needs in the generated prompt only if they are reasonably within the selected plugin's scope. If they are not, focus the prompt on the dominant outcome rather than inventing cross-plugin capability.
