# Instructions for AI Assistants

This repository is **Legal AI Skills by Rohas Nagpal**, an AI law firm packaged as one plugin: a Managing Partner, 17 Specialist Lawyers, 3 Jurisdiction Counsel, 226 Legal Skills and 20 Workflows.

Use the section that matches your task.

## A. You were asked to install or update Legal AI Skills

The user's prompt is usually: *Install Legal AI Skills from https://github.com/rohasnagpal/legal-ai-skills and say "Hello Rohas".* It may instead ask you to *update* or *upgrade* Legal AI Skills.

### 0. Check which app you are running in

Legal AI Skills installs only in **Claude Code** (the CLI, the desktop app's Code tab or an IDE extension) and **Codex**. If you are any other app or assistant (for example Cursor, OpenCode, Windsurf or a web chat):

- do not install it into Claude Code or Codex on the user's behalf;
- do not print the success message below;
- tell the user: "Legal AI Skills runs in Claude Code and Codex. Open one of them and paste the same prompt there."

### Updating an existing installation

If `legal-ai-skills` is already installed, or the user asked to update or upgrade, update instead of installing:

```bash
# Claude Code
claude plugin marketplace update rohas-legal
claude plugin update legal-ai-skills@rohas-legal

# Codex
codex plugin marketplace upgrade rohas-legal
codex plugin add legal-ai-skills@rohas-legal
```

Then report the installed version from `claude plugin list` or `codex plugin list` and tell the user to restart: in Claude Code run `/reload-plugins` or start a new session; in Codex start a new chat, and in the Codex desktop app quit and reopen it.

### 1. Install

**Claude Code**

Run these in the terminal yourself; do not ask the user to type them:

```bash
claude plugin marketplace add rohasnagpal/legal-ai-skills
claude plugin install legal-ai-skills@rohas-legal
```

If the first command says the `rohas-legal` marketplace already exists, run `claude plugin marketplace update rohas-legal` instead, then the install command. Check the result with `claude plugin list`.

Only if you cannot run terminal commands, ask the user to type `/plugin marketplace add rohasnagpal/legal-ai-skills` and then `/plugin install legal-ai-skills@rohas-legal`.

**Codex**

Run these in the terminal yourself:

```bash
codex plugin marketplace add rohasnagpal/legal-ai-skills
codex plugin add legal-ai-skills@rohas-legal
```

If the marketplace is already registered, skip the first command. Check the result with `codex plugin list`.

Install only as a plugin. **Never copy skills into `~/.codex/skills`, `~/.claude/skills` or any other personal skills folder.** Loose copies load alongside the plugin, override it with old versions, and push Codex over its skills budget.

If older Rohas plugins are installed (`vclo-by-rohas`, `rohas-legal-ai`, `navigator` or `privacy`), uninstall them first. Otherwise their skills and MCP servers load twice, which causes duplicate-name warnings and an oversized skill catalogue.

### 2. Verify

- Confirm that `legal-ai-skills` appears in `claude plugin list` or `codex plugin list`.
- Check whether Node.js 18 or later is available (`node --version`). Without it, the legal skills still work, but the bundled registry, research and document tools will not start.

Do not claim success if either the marketplace step or the install step failed.

### 3. Report

**If installation succeeded**, print this message, keeping the text and counts unchanged. Replace the Node.js line only if Node.js is missing.

```text
Hello Rohas 👋

Legal AI Skills by Rohas Nagpal is installed.

Your AI law firm is ready: 1 Managing Partner, 17 Specialist Lawyers,
3 Jurisdiction Counsel (India, US, UK), 226 Legal Skills and 20 Workflows.

To meet your firm:
  • Claude Code: run /reload-plugins (or start a new session)
  • Codex: start a new chat (in the Codex desktop app, quit and reopen the app)
Then type: Hello Rohas
```

**If the user's prompt ended with *say "Should I Sue"***, print this message instead:

```text
Should I Sue? is installed 👋

A team of AI legal agents is ready to help you decide whether your dispute
is worth pursuing.

Next:
  1. Put your documents (contracts, emails, messages, screenshots, invoices,
     notices) in one folder.
  2. Open that folder in a new session:
       • Claude Code: start a new session in that folder
       • Codex: start a new chat in that folder (in the Codex desktop app,
         quit and reopen the app first)
  3. Type: Should I sue?

The AI reads only the files in that folder. The final decision is yours,
and this is not legal advice.
```

If Node.js is missing, add one line before "To meet your firm" (or before "Next:"): `Note: install Node.js 18+ to enable the research connectors and document tools. The legal skills work without it.`

**If installation failed**, do not print the message above. Say which step failed, quote the error briefly, and give the one next step most likely to fix it.

The new skills normally load only in a new session or after a reload, so do not try to run the firm's welcome in the same session as the install.

## B. You are working on this repository

- Skills live in `plugins/legal-ai-skills/skills/<name>/SKILL.md`, each with `agents/openai.yaml`.
- Lawyers and counsel live in `plugins/legal-ai-skills/agents/`. All lawyers follow `plugins/legal-ai-skills/assets/firm/lawyer-operating-model.md`: only the Managing Partner starts lawyers; lawyers send delegation requests.
- Workflows live in `plugins/legal-ai-skills/workflows/` and must keep the standard section headings.
- India, US and UK local skills must be listed in `plugins/legal-ai-skills/jurisdictions/<code>/skill-map.yaml` and carry the jurisdiction gate.
- After any change to skills, lawyers or skill maps, run:

```text
ruby scripts/build-skill-registry.rb
ruby scripts/validate.rb
```

The validator checks that the counts in the README, this file and the Hello Rohas welcome match the repository.
