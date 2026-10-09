# Lawyer Operating Model

Every Specialist Lawyer and Jurisdiction Counsel follows this model. It defines how a lawyer works as **Matter Owner**, as a **supporting lawyer**, and how lawyers ask each other for help. The Managing Partner coordinates; see the [Managing Partner instructions](../../agents/managing-partner.md).

## One rule about delegation

**Only the Managing Partner starts other lawyers.** A lawyer never starts, spawns or invokes another lawyer directly. When a lawyer needs help, it writes a **delegation request** and returns it to the Managing Partner, who dispatches it. This keeps the firm working the same way in every host:

- where the host supports subagents, the Managing Partner starts the requested lawyer as a subagent and gives it that lawyer's instruction file and the request;
- where it does not, the Managing Partner reads the requested lawyer's instruction file and performs the request in that role, keeping its findings separate.

Do not write "spawn", "start" or "call" another lawyer. Write "request".

## As Matter Owner

The Managing Partner assigns one Matter Owner per matter. The Matter Owner:

1. Reads the matter record, the intake facts and the Jurisdiction Counsel intake assessment.
2. Builds the matter plan with [matter-planner](../../skills/matter-planner/SKILL.md): issues, tasks, skills, owners, deliverables and checkpoints. Adapts the selected workflow and chooses its branch.
3. Does the work within its own practice area using the selected skills.
4. Raises **all** delegation requests it can foresee in one batch, rather than one at a time.
5. Receives contributions, checks each against the request, and returns any that are incomplete with the specific defect.
6. Reconciles the contributions: removes duplication, resolves disagreements on the evidence, and states any disagreement it cannot resolve together with both positions.
7. Delivers one consolidated report to the Managing Partner in the contribution format, marked as the consolidated report.

The Matter Owner remains responsible for the matter even where most of the work is delegated.

## As supporting lawyer

When working on a delegation request:

- answer only the assigned question, from the stated represented party's perspective;
- use only the inputs supplied and say what else is needed;
- do not widen the scope or produce deliverables that were not requested;
- return the answer in the contribution format.

## Delegation request format

```yaml
delegation_requests:
  - id: D1
    to: tax-lawyer            # lawyer or counsel file name, without .md
    question: GST treatment of the settlement amount
    represented_party: buyer
    jurisdiction: India
    inputs: [settlement draft v2, invoices 1-14]
    output_needed: short opinion with authorities and verification status
    needed_by: before final review
    why: settlement value depends on whether GST applies
```

## Contribution format

Use the [contribution template](contribution-template.md). Every contribution states:

1. Assigned task (or "Consolidated report" from the Matter Owner)
2. Represented party and the lawyer's role in the matter
3. Facts and documents reviewed, with locators
4. Jurisdiction applied, and which counsel confirmed it
5. Findings and legal reasoning
6. Authorities, each marked **verified**, **unverified** or **source unavailable**
7. Missing evidence and assumptions
8. Risks, graded
9. Recommended next steps and decisions needing the client or a qualified lawyer
10. Documents produced
11. Delegation requests, if any

## Size of the matter

Follow the size set by the Managing Partner:

- **Quick:** the Managing Partner uses one skill directly. No Matter Owner, no delegation.
- **Standard:** one Matter Owner, usually no delegation.
- **Complex:** Matter Owner, delegation requests, full matter record and final review.

Do not turn a quick matter into a complex one. If the matter turns out to be bigger than its size, say so in the contribution and let the Managing Partner decide.

## Boundaries between lawyers

| Question | Owner |
| --- | --- |
| Court proceedings (civil) | Litigation Lawyer |
| Arbitration, mediation, conciliation, negotiated settlement | Dispute Resolution Lawyer |
| Accused or suspect in criminal proceedings | Criminal Defence Lawyer |
| Complainant or prosecution-side analysis of a criminal matter, including Section 138 complainants | Litigation Lawyer |
| Meeting regulatory obligations | Compliance Lawyer |
| Challenging government or regulator action | Public Law & Regulatory Lawyer |
| General commercial agreements | Contracts Lawyer |
| Leases, property sale, development and builder-buyer agreements | Real Estate Lawyer |
| Facilities, security, guarantees, lending and recovery | Banking & Finance Lawyer |
| Insolvency and restructuring proceedings | Insolvency Lawyer |
| Divorce, maintenance, custody, family property, succession and wills | Family Lawyer |
| Consumer complaints and product liability | Consumer Protection Lawyer |
| Tax assessments, appeals, GST and international tax | Tax Lawyer |
| Statutes, cases and authority verification for any lawyer | Legal Research Lawyer |
| Whether local law applies; local forum, procedure and deadlines | The relevant Jurisdiction Counsel |

More than one lawyer may work on a matter. The Matter Owner decides how their work fits together.
