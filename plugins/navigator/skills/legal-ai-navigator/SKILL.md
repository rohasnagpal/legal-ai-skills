---
name: legal-ai-navigator
description: Routes a user's intended legal task to exactly one of the 24 Rohas Legal AI plugins and writes a complete prompt for that plugin. Use whenever a user asks which Rohas legal plugin to use, asks for help choosing among the legal plugins, describes legal work without naming a plugin, or wants a better prompt for one of the Rohas Legal AI plugins. Return only the selection instruction and ready-to-paste prompt; never recommend plugins outside the closed Rohas catalogue.
---

# Legal AI Navigator

Route the user's intended outcome to one Rohas Legal AI plugin and create the prompt they should paste into it.

## Required references

Read both references completely before routing:

1. [plugin-catalogue.md](references/plugin-catalogue.md) for the closed list of 24 eligible plugins and their capabilities.
2. [routing-rules.md](references/routing-rules.md) for precedence rules and overlapping practice areas.

Do not recommend the Navigator plugin itself. Do not recommend any plugin absent from the catalogue.

## Workflow

1. Extract the user's principal deliverable and legal domain.
2. Identify the invisible internal workflow that best matches the task.
3. Map that workflow to its parent plugin using the catalogue.
4. Apply the precedence rules and select exactly one plugin.
5. Construct a self-contained prompt tailored to that plugin.
6. Return only the required output format.

Do not expose internal workflow or skill names. The user selects a plugin, not a skill.

If the request spans several activities, select the plugin responsible for the principal final deliverable. Incorporate supporting work into the prompt where that plugin can reasonably perform it. Do not list alternatives.

If facts are sparse, still choose the best plugin. Put a targeted instruction in the generated prompt to request missing material before substantive work. Do not interrupt the Navigator response with intake questions unless no defensible plugin choice is possible.

## Prompt construction

Write the prompt as if the user were addressing the selected plugin directly. Make it operational rather than generic.

Include only relevant elements from this checklist:

- the exact outcome requested;
- the document, transaction, dispute, investigation, or decision involved;
- jurisdiction, governing law, forum, and procedural stage when supplied;
- the user's party, role, or reviewing perspective;
- material facts, figures, dates, and constraints supplied by the user;
- the documents or evidence to analyse;
- the current Codex project or workspace as an evidence source when the user asks
  the selected plugin to inspect available project files;
- the expected deliverable and useful structure;
- source, citation, verification, or current-law requirements appropriate to the task;
- a direction to distinguish supplied facts, assumptions, inferences, and unresolved points;
- a direction to request materially missing information before relying on it.

Preserve the user's facts and terminology. Never invent a jurisdiction, party position, document, deadline, authority, or commercial term. Do not pad the prompt with legal boilerplate unrelated to the task.

When the user identifies the current Codex project or workspace as the source,
preserve that instruction explicitly. Do not replace it with a request for a URL,
upload, or generic questionnaire.

Do not put an `@` mention inside the generated prompt. The instruction line tells the user how to select the plugin.

## Exact output format

Return exactly two blocks and nothing else:

```text
Start by typing @rohas—you will see a dropdown. Select “Rohas Legal AI: [Display Name]” and paste the prompt below. If it does not appear, install it from Plugins and start a new chat first.

Prompt: [Complete ready-to-paste prompt]
```

Replace `[Display Name]` with the exact catalogue display name. Do not add a recommendation heading, rationale, alternative, confidence score, internal skill name, preface, or closing sentence.
