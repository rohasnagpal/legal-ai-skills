# Start using Legal AI Skills in two minutes

Installation normally takes less than 90 seconds. Node.js 18 or later is needed for the bundled company-registry, legal-research and document-production tools; the legal skills work without it.

## 1. Install once

Paste this into Codex or Claude:

```text
Install Legal AI Skills from https://github.com/rohasnagpal/legal-ai-skills and say "Hello Rohas".
```

Or install manually in Claude Code:

```text
/plugin marketplace add rohasnagpal/legal-ai-skills
/plugin install legal-ai-skills@rohas-legal
```

In Codex, register the repository as a plugin source and install `legal-ai-skills@rohas-legal`.

For regular GovInfo use, get a free api.data.gov key and set `GOVINFO_API_KEY` before starting Codex or Claude Code.

**Upgrading?** Uninstall the older Rohas plugins first (`vclo-by-rohas`, `rohas-legal-ai`, `navigator`, `privacy`), so skills and connectors don't load twice.

## 2. Meet your firm

Start a new session (in Claude Code you can run `/reload-plugins` instead; in the Codex desktop app, quit and reopen the app so the connectors load) and type:

```text
Hello Rohas
```

You'll see your firm: the Managing Partner, 17 Specialist Lawyers, India, US and UK Counsel, the skill and workflow counts, and which research sources are connected in this session.

## 3. Bring a matter

Tell the firm:

- what happened, or what you need done;
- who you are in the matter (for example buyer, employee, accused or tenant);
- the country, and the state if relevant;
- any deadlines or dates; and
- the documents you have.

Example:

> We represent the customer under Indian law. Review this SaaS agreement, rank the five most important risks, draft replacement wording and prepare fallback negotiation positions. The agreement and security schedule are attached.

The Managing Partner checks the jurisdiction with the relevant counsel, appoints a Specialist Lawyer as Matter Owner, brings in other lawyers where needed, reviews the result and returns one work product, with gaps and verification status marked. Simple questions go straight to the one skill that answers them.
