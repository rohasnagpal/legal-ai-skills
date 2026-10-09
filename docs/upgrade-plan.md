# Upgrade Plan: vCLO → Legal AI Skills (AI Law Firm)

Status: **implemented in 4.0.0** (see [CHANGELOG](../CHANGELOG.md)) · Base: vCLO 3.3.1 (`5eae175`)

> Implementation notes: the final counts are 17 lawyers, 226 legal skills (41 new, 6 of them India-specific) and 20 workflows. The registry lives at `plugins/legal-ai-skills/skill-registry.yaml`. Eviction strategy was merged into `tenancy-dispute-analyst`, and judicial review grounds into `administrative-action-challenge-analyst`. Maintenance, anticipatory bail and matrimonial settlement were already covered by existing skills. Codex runtime behaviour (§10, Codex column) still needs testing in a live Codex CLI session.

This plan turns the current vCLO plugin into the law-firm structure described in the new README. It is based on the repository as it stands, not only the external proposal, and corrects that proposal where the repo or host platforms require a different approach.

---

## 0. What the repo has today (verified)

| Component | Today | Notes |
| --- | --- | --- |
| Lead agent | `agents/chief-legal-officer.md` + entry skill `skills/ask-vclo` | Entry skill triggers on "vCLO" and returns a hard-coded welcome |
| Specialist agents | 9 (`*-agent.md`) | contracts, corporate, litigation, dispute-resolution, compliance, employment, ip, investigations, legal-research |
| Jurisdiction counsel | 3 agents + 3 gateway skills + `jurisdictions/{india,us,uk}` | India owns 42 local skills; US and UK own 6 each |
| Skills | 189 `SKILL.md` = 185 legal skills + `ask-vclo` + 3 counsel gateways | |
| Workflows | 10 | Leads: Contracts ×2, Litigation ×3, Compliance ×2, Corporate, Dispute Resolution, Investigations |
| Connected sources | 9 | Research: CourtListener, GovInfo, Federal Register, Regulations.gov, legislation.gov.uk, Find Case Law. Registries: SEC EDGAR, GLEIF, Companies House. The README says "8", so the basis needs fixing |
| Plugin ID | `vclo-by-rohas` in marketplace `rohas-legal` | Referenced as a namespace (`vclo-by-rohas:<skill>`) 101 times in 78 files |
| Validation | `scripts/validate.rb` (CI) | Hard-codes the agent file list, counsel structure and skill-map counts |

**Biggest gap found:** 89 of 189 skills are not named by any specialist agent or workflow. That includes every family, tax, insolvency, real-estate, banking, consumer and public-law skill. Today they are reachable only through India Counsel or direct triggering. The new specialist lawyers fix this, and this is the main justification for adding them.

**Host constraints that shape the design:**

1. **Claude Code** auto-registers `agents/*.md` as subagents (they currently appear as `vclo-by-rohas:contracts-agent` etc.). **Subagents cannot spawn subagents.** A Matter Owner running as a subagent therefore cannot delegate directly. It must return *delegation requests* to the Managing Partner (main thread), who dispatches them.
2. **Codex** registers only `skills/` and MCP servers; `agents/*.md` are not registered there. In Codex, the lawyers are role files that the entry skill reads and executes in sequence, or in parallel where Codex subagents are available.
3. A plugin installed mid-session is generally **not active until a new session or reload**. This matters for the "Hello Rohas" step in the install prompt (see §2).

---

## 1. Naming and identity

| Item | Old | New | Compatibility |
| --- | --- | --- | --- |
| Product name | vCLO | **Legal AI Skills by Rohas Nagpal** | Old name mentioned once in the welcome as "formerly vCLO" for one release |
| Plugin ID | `vclo-by-rohas` | **`legal-ai-skills`** | Marketplace stays `rohas-legal`. Migration note for existing users: uninstall `vclo-by-rohas@rohas-legal`, then install `legal-ai-skills@rohas-legal` |
| Entry skill | `ask-vclo` | **`hello-rohas`** (greeting + matter intake) | Keep `ask-vclo` for one release as a thin alias that routes to `hello-rohas` |
| Lead agent | `chief-legal-officer.md` | **`managing-partner.md`** | Old file removed; validator updated |
| Specialists | `contracts-agent.md` … | **`contracts-lawyer.md`** … | Mechanical rename. All links and `vclo-by-rohas:*-agent` references are rewritten |
| Assets/tests dirs | `assets/vclo`, `tests/vclo` | `assets/firm`, `tests/firm` | |
| Env vars | `VCLO_*` | Keep as-is in 4.0 | Renaming breaks existing setups. Add `LEGAL_AI_*` aliases later if wanted |

**Done:** the plugin ID is now `legal-ai-skills`. The folder is `plugins/legal-ai-skills/`, and all namespaced references, manifests, the validator, the CI workflow and the zip name are updated. Display names, the `ask-vclo` skill, agent names and `VCLO_*` env vars are unchanged until the rest of Phase 1.

---

## 2. "Hello Rohas": exact behaviour

This is the first thing every user sees, so it is specified in full. There are **two distinct moments**.

### 2a. Moment 1: the installing agent finishes installing

The README prompt is: *Install Legal AI Skills from <repo> and say "Hello Rohas".*

The agent running this prompt reads the README, installs the plugin, and then "says Hello Rohas". The plugin's skills are usually **not loaded in that session yet**, so the agent cannot run the welcome skill. Without guidance it will improvise or just echo "Hello Rohas".

**Fix:** add a short `## For AI assistants installing this` section near the top of the README, plus an `AGENTS.md` at the repo root (Codex reads it), containing:

- exact install commands for Codex and Claude Code;
- a verification step: confirm the plugin appears in the installed-plugins list;
- the **post-install message** to print verbatim:

```text
Hello Rohas 👋

Legal AI Skills by Rohas Nagpal is installed.

Your AI law firm is ready: 1 Managing Partner, 17 Specialist Lawyers,
3 Jurisdiction Counsel (India, US, UK), <N> legal skills and 20 workflows.

To meet your firm:
  • Claude Code: run /reload-plugins (or start a new session)
  • Codex: start a new chat
Then type: Hello Rohas
```

If installation failed, the installer must say exactly what failed (for example, Node.js missing, so connectors are unavailable but skills still work) and must not print the success message.

### 2b. Moment 2: the user types "Hello Rohas" in a session where the plugin is loaded

**Trigger** (in the `hello-rohas` skill description): a greeting addressed to Rohas or the firm, including "Hello Rohas", "Hi Rohas", "hey rohas", "Hello Legal AI", and the legacy "Hello vCLO". It must **not** catch `learn-law-with-rohas` or `legal-exam-prep-with-rohas` requests. Those descriptions say "learn law" / "exam"; add a routing test for each.

**Behaviour:**

1. Do **not** read agent, workflow or skill files. The greeting must be fast.
2. **Do** check which connector tools are actually available in this session. The model can see its own tool list, so no network call is needed. Report the status honestly. Never claim a source is connected when its server failed to start.
3. Print the welcome below, filling `<N>` from the validated counts (§9) and the status line from step 2.
4. Stop and wait for the matter.

**Welcome text** (the counts below are the 4.0 targets; the validator enforces the real ones):

```markdown
**Hello! Welcome to your AI law firm — Legal AI Skills by Rohas Nagpal.**

| Your firm | |
|---|---|
| **Managing Partner** | Takes your matter, picks the right lawyer, reviews the final work |
| **17 Specialist Lawyers** | Corporate · Contracts · Litigation · Dispute Resolution · Criminal Defence · Family · Real Estate · Tax · Insolvency · Banking & Finance · Employment · IP · Compliance · Consumer Protection · Public Law & Regulatory · Investigations · Legal Research |
| **3 Jurisdiction Counsel** | 🇮🇳 India · 🇺🇸 US · 🇬🇧 UK |
| **<N> Legal Skills · 20 Workflows** | Review, drafting, research, due diligence, evidence, filings |

**Research sources:** <k> of 9 connected<; not available: CourtListener (sign-in needed), GovInfo (rate-limited)…>.
India sources are reached through official websites where accessible.

**To start, tell me:**
1. What happened, or what you need done
2. Who you are in this matter (e.g., buyer, employee, accused, tenant)
3. Country — and state, if relevant
4. Any deadlines or dates
5. Documents you have (you can attach them)

*Try:* "My builder in Pune is 2 years late on possession — what can I do?" ·
"Review this NDA for us under English law" ·
"We got a GST show-cause notice — draft a reply"

Before sharing client documents, confirm your AI setup meets your confidentiality obligations. Outputs need review by a qualified lawyer before you rely on them.
```

**Variants:**

| Input | Output |
| --- | --- |
| "Hello Rohas" only | Full welcome above |
| "Hello Rohas, my landlord won't return my deposit (Delhi)" | One line ("Hello. I'll take this on as your Managing Partner.") and then normal routing. No welcome table |
| "Hello vCLO" | Full welcome, with "(formerly vCLO)" after the firm name |
| Connector status unknowable (host hides the tool list) | Omit the status line rather than guess |

**Tests:** rewrite `tests/vclo/welcome.md` → `tests/firm/welcome.md` with assertions for each variant, plus negative cases ("learn law with Rohas", "exam prep with Rohas" must not trigger the welcome). Add a validator check that the counts in the welcome block match the actual agent, skill and workflow counts.

---

## 3. Managing Partner (`agents/managing-partner.md`)

This rewrites the CLO file; it is more than a rename. It keeps the CLO's verification list, connected-system safeguards and output structure, and adds:

**Responsibilities**

1. Classify the matter (`client-intake`, `issue-spotter`); identify missing facts and documents.
2. Run `conflict-checker` when parties are named.
3. **Jurisdiction-first:** consult the relevant counsel in *intake mode* (§6) before choosing a lawyer. If the jurisdiction is unclear, ask; do not apply local law on a guess.
4. Choose the **Matter Owner** using the routing table (§4) and a workflow (§7), if one fits.
5. Create the **matter record** (§5).
6. **Dispatch delegation requests** raised by the Matter Owner. This is required on Claude because subagents cannot spawn subagents.
7. Track outstanding tasks against the record.
8. Run **final review** with the existing checks: `assumption-flagger`, `consistency-checker`, `authority-validator`, `citation-integrity-checker`, `adversarial-reviewer`. Use counsel *verification mode* for local law. Return incomplete work with specific defects listed.
9. Deliver one output that names unresolved issues, unverified authorities and the decisions that need human review.

**Proportionality rule (kept from the CLO, made explicit):**

| Matter size | Route |
| --- | --- |
| **Quick**: one question, one document, one skill | Managing Partner calls the skill directly. No subagents, no matter record shown |
| **Standard**: one practice area, a few steps | One Matter Owner, run inline or as one subagent. Brief matter record |
| **Complex**: multiple areas or jurisdictions, or a workflow | Matter Owner + delegated specialists + full matter record + final review |

The Managing Partner must not do substantial specialist work itself when a specialist exists. The exception is Quick matters, where it calls the one skill.

---

## 4. Specialist Lawyers: 9 → 17

### 4a. Rename and update the existing nine

`contracts`, `corporate`, `litigation`, `dispute-resolution`, `compliance`, `employment`, `ip`, `investigations` and `legal-research` move from `*-agent` to `*-lawyer`. Each file gets three new standard sections:

- **As Matter Owner:** build the matter plan, choose skills, raise delegation requests, reconcile findings and produce the consolidated report.
- **As supporting lawyer:** answer only the assigned question, using the contribution format (§5b).
- **Hand-offs:** explicit boundaries.

**Boundary fixes:**

| Pair | Rule |
| --- | --- |
| Litigation vs Dispute Resolution | Litigation owns court proceedings; Dispute Resolution owns arbitration, mediation, conciliation and negotiated settlement. Both may work on one matter |
| Litigation vs Criminal Defence | Litigation keeps civil matters and the **complainant/prosecution-side** analysis (e.g., Section 138 complainant). Criminal Defence owns the **accused** side. The represented role must be stated |
| Compliance vs Public Law | Compliance covers meeting obligations; Public Law covers challenging government action |
| Contracts vs Banking & Finance | The `financing-transaction` workflow lead moves from Contracts to Banking & Finance. Contracts supports |
| Contracts vs Real Estate | Leases and property agreements go to Real Estate. Contracts keeps general commercial agreements |

### 4b. Eight new lawyers, each with the skills it adopts on day one

These are existing skills that currently have no owner:

| New lawyer | Adopts existing skills |
| --- | --- |
| **Family** | matrimonial-petition-drafter, maintenance-calculator, succession-advisor, will-drafter, settlement-deed-drafter (shared) |
| **Real Estate** | title-diligence-analyst, encumbrance-analyst, sale-deed-drafter, development-agreement-reviewer, rera-compliance-checker, stamp-duty-analyst |
| **Criminal Defence** | bail-advisor-and-drafter, chargesheet-analyst, defence-strategy-planner, quashing-petition-drafter, sentencing-analyst, cross-examination-planner (shared) |
| **Tax** | tax-assessment-reply-drafter, tax-appeal-grounds-drafter, gst-compliance-analyst, transfer-pricing-documenter, treaty-analyst |
| **Insolvency** | cirp-timeline-checker, operational-creditor-application-drafter, resolution-plan-reviewer, avoidance-transaction-analyst, liquidation-documenter, restructuring-documenter, uk-insolvency-applicability-checker (via UK Counsel) |
| **Banking & Finance** | loan-agreement-reviewer, security-documenter, guarantee-analyst, recovery-strategy-planner, sarfaesi-advisor, fema-analyst (shared) |
| **Consumer Protection** | consumer-pleading-drafter, deficiency-analyst, product-liability-analyst, compensation-quantifier |
| **Public Law & Regulatory** | pil-drafter, rti-application-drafter, rti-appeal-drafter, government-contract-reviewer, tender-compliance-checker, regulatory-applicability-analyst (shared) |

Each new file follows the existing agent template (Purpose and scope, Tasks, Preferred skills, Inputs, Output, Hand-offs), plus the three standard sections from 4a.

**Release gate:** after Phase 2, **every skill** is either owned by a lawyer or counsel, or explicitly marked `shared` / `firm-operations`. The validator enforces this (§9).

---

## 5. Matter record and lawyer contributions

### 5a. Matter record

The matter record lives **in the conversation by default**: a compact YAML block that the Managing Partner updates at each stage. It is written to `matters/<id>/matter.yaml` in the working directory **only if the user asks** to keep a matter file, because client data should not be written to disk unprompted.

```yaml
matter_id: MAT-2026-001
title: Delayed flat possession
represented_party: homebuyer
jurisdiction: { country: India, state: Maharashtra }
size: complex              # quick | standard | complex
matter_owner: real-estate-lawyer
workflow: rera-complaint
workflow_branch: refund-with-interest
counsel: [india-counsel]
tasks:
  - { id: T1, owner: real-estate-lawyer, task: breach and relief analysis, status: done }
  - { id: T2, owner: legal-research-lawyer, task: verify MahaRERA interest rule, status: open }
outputs: [legal-analysis, evidence-register, draft-complaint]
open_issues: [possession date in agreement vs registration differs]
review: pending            # pending | returned | approved
```

Template: `assets/firm/matter-record-template.yaml`.

### 5b. Standard contribution format (every lawyer → Matter Owner → Managing Partner)

Assigned task · Represented party and role · Facts and documents reviewed · Jurisdiction applied (and by which counsel) · Findings and reasoning · Authorities, each marked *verified / unverified / unavailable* · Missing evidence · Risks · Recommended next steps · Documents produced · **Delegation requests** (if any).

Delegation requests are how a Matter Owner asks for other lawyers under the Claude subagent limit:

```yaml
delegation_requests:
  - to: tax-lawyer
    question: GST treatment of the settlement amount
    inputs: [settlement draft v2, invoices 1–14]
    needed_by: before final review
```

Template: `assets/firm/contribution-template.md`.

### 5c. New firm-operations skills (deliberately few)

| Skill | Status |
| --- | --- |
| `matter-planner`: builds the task plan, owners and deliverables, and handles delegation requests | **New**. The one genuinely new operational skill |
| `client-intake` | Extend: add matter classification and a size (quick/standard/complex) |
| `forum-jurisdiction-analyst` | Extend: jurisdiction triage for counsel intake mode |
| `consistency-checker` | Extend: cross-lawyer conflict reconciliation |
| `closure-report-drafter` | Extend: matter closing report |
| `evidence-organizer`, `authority-validator`, `adversarial-reviewer` | Reuse as-is |

---

## 6. Jurisdiction Counsel

Keep the three counsel. Add two modes to each counsel agent and gateway skill:

| Mode | When | Output |
| --- | --- | --- |
| **Intake** | Before a Matter Owner is chosen | Applicable regimes, competent forum, state/sub-national law, which specialist is needed, coverage warnings |
| **Verification** | During work and at final review | Checks law at the relevant date, deadlines, procedure, forum; marks each point *confirmed / assumed / source unavailable* |

Also add: multi-jurisdiction matters (one counsel per jurisdiction; the Managing Partner reconciles), and an explicit **coverage warning** when a module is thin. US and UK own only 6 local skills each, and the welcome and outputs should say so rather than imply parity with India.

India skill map: new India-specific skills (§8) are added to `jurisdictions/india/skill-map.yaml`, and `skill_count` is updated. The validator already enforces this.

---

## 7. Workflows: 10 → 20

Every workflow (old and new) moves to one schema:

```text
## Matter Owner          ## Supporting lawyers & counsel
## Required inputs       ## Branches (decision points)
## Stages                (each: owner, skills, inputs, outputs, checkpoint)
## Review checkpoints    ## Escalation to human review
## Deliverables          ## Fallback when tools/sources are unavailable
```

The existing ten keep their content and get the schema plus updated agent names. `financing-transaction` changes owner to Banking & Finance.

**New ten:**

| Workflow | Owner | Branches |
| --- | --- | --- |
| Divorce & matrimonial | Family | mutual consent / contested; children / none; maintenance |
| RERA complaint | Real Estate | refund+interest / possession+delay interest / compensation |
| Cheque dishonour (S.138) | Litigation (complainant) / Criminal Defence (accused) | by role |
| Criminal defence | Criminal Defence | pre-arrest / custody / charge-sheet filed / trial / appeal |
| Consumer complaint | Consumer Protection | notice-settlement / complaint / appeal |
| Tax assessment & appeal | Tax | direct tax / GST; reply / appeal |
| Insolvency / CIRP | Insolvency | creditor-initiated / debtor / claim filing only |
| Property purchase diligence | Real Estate | resale / under-construction / land |
| Debt recovery | Banking & Finance | secured (SARFAESI) / unsecured / guarantor |
| Employment dispute | Employment | employee / employer side |

Each new workflow gets a scenario file in `tests/firm/` and an example in `examples/`.

---

## 8. New legal skills (consolidated)

The proposal's skill list is trimmed here. Items that are really extensions of an existing skill become extensions, to avoid inflating the count. **About 40 new skills**, plus about 12 extensions:

| Area | New | Extend existing |
| --- | --- | --- |
| Family | divorce-grounds-assessor (covers mutual and contested branches, judicial separation, restitution, annulment), child-custody-planner, domestic-violence-remedies-advisor, matrimonial-property-analyser (stridhan etc.), family-court-procedure-checker | maintenance-calculator (+ child support), settlement-deed-drafter (+ matrimonial terms) |
| Real Estate | rera-complaint-drafter †, builder-buyer-agreement-reviewer, lease-reviewer *(promote `contract-reviewer/references/leases.md`)*, tenancy-dispute-analyser, eviction-strategy-planner, construction-delay-defect-analyser, land-use-zoning-advisor | stamp-duty-analyst (+ registration) |
| Criminal Defence | arrest-rights-advisor, fir-complaint-analyser, offence-ingredients-analyser, criminal-evidence-admissibility-analyser, discharge-application-drafter †, criminal-appeal-planner, trial-readiness-checker | bail-advisor-and-drafter (+ anticipatory bail), defence-strategy-planner |
| Tax | tax-notice-analyser (income tax and GST notices, penalty and interest), input-tax-credit-dispute-analyser †, tax-litigation-strategy-planner | gst-compliance-analyst |
| Insolvency | insolvency-options-assessor, creditor-claim-preparer, coc-decision-analyser †, moratorium-impact-analyser, personal-guarantor-insolvency-analyser †, insolvency-appeal-drafter | operational-creditor-application-drafter (+ financial creditor) |
| Banking & Finance | facility-agreement-drafter, default-and-acceleration-analyser, covenant-monitor, secured-creditor-priority-analyser, financing-closing-checklist | security-documenter |
| Consumer | consumer-complaint-eligibility-checker, consumer-appeal-drafter, ecommerce-consumer-compliance-checker | compensation-quantifier |
| Public Law | administrative-action-challenge-analyser, writ-petition-drafter †, constitutional-rights-analyser, regulatory-appeal-planner | — |
| Firm operations | matter-planner | client-intake, forum-jurisdiction-analyst, consistency-checker, closure-report-drafter |

† = India-specific; goes in the India skill map. Every new skill needs a description written for triggering, an `agents/openai.yaml`, and at least one routing test case. The existing `*-behavioral-evals.yaml` files already require at least 5 positive and 1 negative case.

**Skill registry:** generate `skills/registry.yaml` with a script, not by hand, with fields `skill_id, name, category, practice_area, jurisdiction (neutral|india|us|uk), owner, shared_with, review_required, inputs, outputs`. Ownership comes from the lawyer and counsel files, so there is one source of truth; the validator checks that the registry is current.

---

## 9. Repository, plugin and validator changes

| Area | Change |
| --- | --- |
| `plugins/vclo-by-rohas/` | ✔ Done: `git mv` → `plugins/legal-ai-skills/` |
| `agents/` | managing-partner + 17 `*-lawyer.md` + 3 counsel |
| `skills/` | `hello-rohas` (new entry), `ask-vclo` (alias, removed in 4.1), new and extended skills, `registry.yaml` |
| `.claude-plugin/marketplace.json`, `.agents/plugins/marketplace.json`, `.codex-plugin/plugin.json` | New name, descriptions, counts and default prompts |
| `.mcp.json` / MCP servers | No functional change. Keep `VCLO_*` env vars; update display strings |
| Namespaced refs | ✔ Done: `vclo-by-rohas:` → `legal-ai-skills:` |
| `scripts/validate.rb` | Update expected plugin and agent list. **New checks:** (1) every skill has an owner or is marked shared/firm-operations; (2) every workflow has the required schema headings; (3) welcome counts = actual counts; (4) registry is current; (5) no stray `vCLO`/`chief-legal-officer` outside the alias and changelog |
| `scripts/build-plugin-zips.sh`, `dist/` | New zip name |
| `tests/` | `tests/firm/` scenarios (§10), welcome tests, routing evals for new skills |
| `docs/two-minute-start.md`, `examples/`, `README.md` | New name, install flow and verified counts. **README goes last** |
| `AGENTS.md` (new, repo root) | Installer instructions and post-install message (§2a) |
| `CHANGELOG.md` (new) | 4.0.0 entry with migration steps |

---

## 10. Testing

Scenario tests in `tests/firm/`, each asserting the **route** (Matter Owner, counsel, workflow and branch) and **behaviour**:

| Scenario | Expected route |
| --- | --- |
| Indian mutual-consent divorce | Family + India Counsel, matrimonial workflow, mutual branch |
| UK divorce | Family + UK Counsel, with a coverage warning |
| Pune RERA delay | Real Estate + India Counsel, RERA workflow |
| UK property purchase | Real Estate + UK Counsel |
| S.138, complainant | Litigation + India Counsel, S.138 workflow |
| S.138, accused | Criminal Defence + India Counsel, S.138 workflow |
| GST show-cause notice | Tax + India Counsel |
| US criminal arrest | Criminal Defence + US Counsel, with a coverage warning |
| Cross-border M&A (India target, US buyer) | Corporate + India and US Counsel, M&A workflow with CUAD sweep |
| Jurisdiction unclear | Asks before applying local law |
| Two lawyers disagree | Matter Owner reconciles or escalates; disagreement shown |
| Fabricated citation in a contribution | Flagged as unverified, not passed through |
| Incomplete contribution | Managing Partner returns it with defects listed |
| Connector down | Limitation stated; nothing marked verified |
| Quick NDA question | Single skill, no subagents, no visible matter record |
| Hello Rohas / Hello vCLO / Hello Rohas + matter / learn law with Rohas | §2b variants |

Run each one separately on **Claude Code** (subagent delegation through the Managing Partner) and **Codex** (inline role execution). Record differences in `tests/firm/host-differences.md`.

---

## 11. Phases

| Phase | Scope | Exit criterion |
| --- | --- | --- |
| **1. Architecture** | Rename (plugin, CLO → MP, agents → lawyers); `hello-rohas` + alias; Managing Partner rewrite; matter record and contribution templates; `matter-planner`; counsel modes; `AGENTS.md` install flow; validator updates | Validator green; welcome tests pass on both hosts; existing 10 workflow scenarios still route correctly |
| **2. Lawyers** | 8 new lawyer files; adopt the 89 unowned skills; boundary rules | **Zero unowned skills**; routing tests for each new lawyer |
| **3. Skills** | About 40 new skills and about 12 extensions; India skill map; registry generator | Each skill has evals; registry check passes |
| **4. Workflows** | Schema for the existing 10; 10 new with branches | Scenario test per workflow and branch |
| **5. Release** | Full §10 suite on both hosts; examples; README with real counts; CHANGELOG; zip | Counts in README, welcome and manifests match the validator output |

The phases can ship separately: 4.0 after Phase 2 (17 lawyers, existing skills, 10 workflows), then 4.1 and 4.2 for skills and workflows. If 4.0 ships early, the welcome and README must show the counts at that point, not the targets.

---

## 12. Deliberately not doing

- One agent per statute (no "RERA Lawyer", "GST Lawyer") or per country.
- Duplicating legal rules in agent files. Law lives in counsel modules and skills.
- Forcing every request through the full firm. Quick matters stay quick.
- Advertising target counts before they exist.
- Renaming `VCLO_*` environment variables in 4.0.
- Adding countries before the India, US and UK counsel modes work consistently.

---

## Appendix: change already made (this session)

**CUAD sweep in M&A diligence.** Added `skills/m-and-a-diligence-checker/references/cuad-contract-sweep.md`. It holds the 41 CUAD parameters, a 20-parameter deal-critical tier, a guide to reading each row against the deal structure, and two new outputs: a material-contracts matrix and a consents-and-notices schedule. It is wired into the skill (method step 5, output 6), the M&A workflow's contracts workstream, and the M&A scenario test. The validator passes.
