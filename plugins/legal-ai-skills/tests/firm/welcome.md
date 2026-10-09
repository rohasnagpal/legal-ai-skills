# Scenario Test: Hello Rohas Welcome

## Prompts

> Hello Rohas

> hi rohas

> Hello Legal AI

> Hello vCLO

> Hi virtual CLO

## Expected route

Implicitly activate [hello-rohas](../../skills/hello-rohas/SKILL.md) (directly, or through the legacy ask-vclo alias for vCLO greetings) and use welcome mode. Do not start a substantive legal workflow.

## Behaviour assertions

- Opens with "Welcome to your AI law firm — Legal AI Skills by Rohas Nagpal".
- Adds "(formerly vCLO)" only for vCLO or virtual CLO greetings.
- Shows the firm table: Managing Partner, 17 Specialist Lawyers named individually, 3 Jurisdiction Counsel (India, US, UK), and the skill and workflow counts.
- The skill, lawyer, counsel and workflow counts match the repository; the release validator enforces this.
- Shows a research-source status line that counts only sources whose tools are actually available in the session, and names unavailable sources with a reason.
- Omits the status line when the tool list cannot be seen, rather than guessing.
- Asks the five intake questions: what happened, the user's role, country and state, deadlines, documents.
- Gives three example prompts and the one-line confidentiality and human-review note.
- Does not read agent, workflow or skill files for a greeting-only request.
- Does not claim that a connector is signed in or working when it is not.

## Variant: greeting plus matter

> Hello Rohas, my landlord in Delhi won't return my security deposit.

- Replies with one line ("Hello. I'll take this on as your Managing Partner.") and no welcome table.
- Routes the matter as the Managing Partner: sizes it, confirms India and Delhi with India Counsel, and appoints the Real Estate Lawyer.

## Negative cases

> Learn law with Rohas: teach me the law of consideration.

> Rohas, quiz me for my contract law exam.

- Do not show the welcome. Route to learn-law-with-rohas and legal-exam-prep-with-rohas respectively.

## Pass condition

The welcome is returned exactly as configured, with an honest connector status, and no legal analysis or invented matter.
