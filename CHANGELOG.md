# Changelog

## 4.1.1

Fixes from full dry runs in Claude Code and Codex.

### Fixed

- **"Should I sue?" always reaches Should I Sue.** When Codex hides skill descriptions (see below), it picked `litigation-viability-assessor` instead. That skill and Hello Rohas now hand "should I sue" questions to `should-i-sue`.
- **Hello Rohas prints the welcome as normal text**, not as a quoted block.
- **Installers never copy skills into personal skills folders.** Loose copies in `~/.codex/skills` or `~/.claude/skills` override the plugin with old versions and push Codex over its skills budget.

### Added

- **Check my setup:** say "check my setup" to see the installed version, which connectors are working, whether Node.js is working, a live calculator test, and any duplicate Rohas plugins.
- **Demo matters** in `examples/demo-matters/`: a Pune builder delay and a London unpaid invoice, with realistic documents including a WhatsApp screenshot.
- **Live session checklist** in `docs/live-session-checklist.md`: attendee setup and a safe demo script.

### Known issues

- **Codex skills budget.** With many plugins installed, Codex may warn that it "exceeded skills context budget" and hide skill descriptions. Hello Rohas and Should I Sue still work. Other narrow skills may be harder for Codex to select by name alone.
- **legislation.gov.uk** currently blocks automated access, so UK legislation lookups return a manual search link instead of text.

## 4.1.0

### Added

- **Should I Sue?** A new front door, `should-i-sue`, for people deciding whether to pursue their own dispute. It gives an urgent-deadline warning first, then:
  - asks a short plain-language interview;
  - reads every document in the opened folder (including screenshots, and scans via OCR), and only that folder;
  - has the firm assess the dispute through a new "Should I Sue" branch of the dispute viability workflow;
  - recommends one of six routes: walk away, negotiate, mediation, arbitration, regulatory or consumer complaint, or litigation.

  Chances are rated without percentages. The install prompt ending *say "Should I Sue"* prints its own post-install message. Website copy is in `docs/should-i-sue.md`.

## 4.0.2

### Added

- **One-line updates.** Paste `Update Legal AI Skills from https://github.com/rohasnagpal/legal-ai-skills` into Claude Code or Codex, or use the documented commands (`claude plugin update`, `codex plugin marketplace upgrade` with `codex plugin add`). The README has a new "Updating to a New Version" section.

### Fixed

- **No false success messages in other apps.** The installer instructions now check which app is running them. Cursor, OpenCode and other apps are told that Legal AI Skills runs in Claude Code and Codex. They no longer install it into those apps on the user's behalf or announce a success that didn't happen.

## 4.0.1

### Fixed

- **Connectors now start in desktop apps.** macOS desktop apps start with a minimal PATH, so the connectors could not find Node.js and none of them started. The launchers now also look in common install locations (Homebrew, nvm, Volta, fnm) and in the Node.js runtimes bundled with Codex and the ChatGPT app.
- **Hello Rohas welcome:** Legal Skills and Workflows are on separate rows so the table no longer wraps. The research-source line is shorter: when nothing is connected it says so in one line, with restart and Node.js guidance. It groups unavailable sources by reason and never says "not installed".
- **eCFR search:** new `part` filter, and guidance for popular names such as "Safeguards Rule" that do not appear in the regulation's own text.
- **Upgrade notes:** remove all older Rohas plugins (`vclo-by-rohas`, `rohas-legal-ai`, `navigator`, `privacy`) to avoid duplicate skills and connectors, and restart the Codex desktop app after installing.

## 4.0.0 — Legal AI Skills (formerly vCLO)

vCLO is now **Legal AI Skills by Rohas Nagpal**, organised as an AI law firm.

### Breaking changes

- The plugin ID is now `legal-ai-skills` (was `vclo-by-rohas`). Uninstall `vclo-by-rohas@rohas-legal` and install `legal-ai-skills@rohas-legal`.
- Skill namespaces change from `vclo-by-rohas:<skill>` to `legal-ai-skills:<skill>`.
- The Chief Legal Officer is replaced by the **Managing Partner** (`agents/managing-partner.md`).
- Specialist agents are renamed from `*-agent` to `*-lawyer` (for example `contracts-agent` is now `contracts-lawyer`).
- `assets/vclo` and `tests/vclo` move to `assets/firm` and `tests/firm`.

### New

- **Hello Rohas:** a new front-door skill, `hello-rohas`, with a fixed welcome that shows the firm, honest research-source status and five intake questions. `ask-vclo` remains for this release as a legacy alias.
- **AGENTS.md:** instructions for the AI assistant running the install prompt, including the exact post-install message.
- **Firm operating model:** Matter Owners, a standard contribution format and delegation requests. Only the Managing Partner starts lawyers, so delegation works the same way in Claude Code and Codex.
- **Matter record** and **contribution** templates, and the `matter-planner` skill.
- **Eight new Specialist Lawyers:** Family, Real Estate, Criminal Defence, Tax, Insolvency, Banking & Finance, Consumer Protection, and Public Law & Regulatory (17 in total).
- **41 new skills**, including 6 India-specific skills (RERA complaints, discharge applications, writ petitions, input tax credit disputes, committee of creditors decisions and personal guarantor insolvency). The firm now has 226 legal skills.
- **Ten new workflows** (20 in total): divorce and matrimonial proceedings, RERA complaint, property purchase due diligence, cheque dishonour, criminal defence, consumer complaint, tax assessment and appeal, insolvency and CIRP, debt recovery, and employment dispute.
- **Intake and verification modes** for India, US and UK Counsel, with coverage warnings for the US and UK MVP modules.
- **CUAD contract sweep** in M&A due diligence: the 41 CUAD parameters with a deal-critical tier, a material-contracts matrix and a consents schedule.
- **Legal calculators:** a new local MCP server (`legal-calculators`) with `calculate_deadline`, `calculate_period_between` and `calculate_interest`. Dates are calendar dates without time zones; money is exact in minor units with stated rounding. 26 skills that compute dates or amounts now use it, and fall back to marked-unverified hand calculation without it.
- **Sanctions screening:** a new local MCP server (`sanctions-screening`) that downloads the US OFAC SDN and consolidated lists, the UK Sanctions List and the UN Security Council Consolidated List from their publishers, caches them for 24 hours and screens names locally with alias-aware fuzzy matching, plus date-of-birth and nationality checks. Screened names are never transmitted. Used by sanctions-screening-documenter, M&A diligence, closing checklists and transaction document checks.
- **eCFR and The Gazette:** four new read-only research tools: `search_us_ecfr` and `get_us_ecfr_text` for US federal regulations as in force on a date, and `search_uk_gazette_notices` and `get_uk_gazette_notice` for UK insolvency, company and probate notices. Gazette requests are spaced, and rate limits are reported rather than retried. The firm now has 14 official sources.
- **Skill registry** (`plugins/legal-ai-skills/skill-registry.yaml`), generated by `scripts/build-skill-registry.rb`, recording each skill's owner, shared users, jurisdiction and category.

### Changed

- All 20 workflows share one structure: branches, Matter Owner and team, review checkpoints and escalation to human review.
- The financing transaction workflow is now led by the Banking & Finance Lawyer.
- Every skill now has an owning lawyer, counsel or the Managing Partner. Previously 89 skills had no owner.
- The validator checks the firm structure, the registry, skill ownership, the published counts in the README, AGENTS.md and the welcome, and retired vCLO names.
