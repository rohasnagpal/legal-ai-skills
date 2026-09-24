# Start using vCLO in two minutes

The installation itself normally takes less than 60 seconds when Node.js 18 or later is already installed. Node.js is required for the bundled company-registry, legal-research and document-production tools; the legal skills remain usable without those tools.

## 1. Install once

Tell Codex:

`Install vCLO from https://github.com/rohasnagpal/legal-ai-skills. Register the repository as a plugin source and install vclo-by-rohas@rohas-legal.`

For Claude Code:

```text
/plugin marketplace add rohasnagpal/legal-ai-skills
/plugin install vclo-by-rohas@rohas-legal
```

For normal GovInfo use, obtain a free api.data.gov key and set `GOVINFO_API_KEY` before starting Codex or Claude Code. The shared `DEMO_KEY` is intended only for limited initial testing.

## 2. Start a new task or session

Say `Hello vCLO` to confirm the legal team is available.

## 3. Give a useful instruction

Include:

- what you want done;
- who vCLO represents;
- the relevant jurisdiction or forum;
- material dates and deadlines; and
- the documents or evidence available.

Example:

> We represent the customer under Indian law. Review this SaaS agreement, rank the five most important risks, draft replacement wording and prepare fallback negotiation positions. The agreement and security schedule are attached.

vCLO will select the practice specialist, applicable jurisdiction counsel and the smallest suitable skills or workflow, then return one consolidated work product with gaps and verification status.
