---
name: ask-vclo
description: Legacy alias for the former vCLO product name, kept for one release so existing prompts keep working. Invoke whenever the user's prompt contains vCLO, VCLO, cVLO, cvlo or virtual CLO, including a greeting with no legal task. Hands over to hello-rohas, which runs the Legal AI Skills law firm. Do not use when the prompt does not mention vCLO.
---

# vCLO (legacy alias)

vCLO is now **Legal AI Skills by Rohas Nagpal**, and the Chief Legal Officer is now the Managing Partner.

Read and follow the [hello-rohas instructions](../hello-rohas/SKILL.md), treating the user's message as if it were addressed to Rohas:

- for a greeting such as "Hello vCLO", use its welcome mode and add " (formerly vCLO)" after the firm name;
- for a legal matter, use its matter mode and run the matter as the Managing Partner.

This alias will be removed in a future release. Tell the user once, at the end of the reply, that they can now say "Hello Rohas".
