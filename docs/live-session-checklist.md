# Live Session Checklist

## For attendees: set up before the session (10 minutes)

1. **Use Claude Code or Codex.** In the Claude desktop app, open the **Code** tab (the `</>` button). Codex works as the CLI or the desktop app. Web chat apps are not supported.
2. **Install Node.js 18 or later.** On a Mac: `brew install node`, or use the installer at nodejs.org. Then quit and reopen Claude or Codex. Without Node.js the legal skills still work, but the research sources, calculators and sanctions screening do not. Also run `brew install poppler` so the AI can read PDFs directly.
3. **Remove older Rohas plugins and loose copies.** Uninstall `vclo-by-rohas`, `rohas-legal-ai`, `navigator` or `privacy` if you have them. If an earlier attempt copied skills into `~/.codex/skills` or `~/.claude/skills`, move those out. Otherwise skills load twice, old versions win, and Codex runs out of room for skills.
4. **Install.** Paste this into Claude Code or Codex:

   ```text
   Install Legal AI Skills from https://github.com/rohasnagpal/legal-ai-skills and say "Hello Rohas".
   ```

   Approve when it asks to run the `claude plugin` or `codex plugin` commands.
5. **Restart.** In Claude Code, start a new session (or run `/reload-plugins`). In Codex, start a new chat; in the Codex desktop app, quit and reopen it.
6. **Check it works.** Type `Hello Rohas`. You should see the firm welcome and "12 of 14 connected" or better. If anything looks wrong, type `check my setup`.
7. **Don't open a folder on your Desktop.** macOS often blocks apps from reading the Desktop. Use a folder in Documents.

**Already installed?** Update with: `Update Legal AI Skills from https://github.com/rohasnagpal/legal-ai-skills`

**Optional:** a free [api.data.gov key](https://api.data.gov/signup/) set as `GOVINFO_API_KEY` stops GovInfo from being rate-limited, and a free CourtListener account enables US case law.

## For the presenter: safe demo script

Use the demo folders in `examples/demo-matters/`. Open the folder first, then type the prompt.

| # | Folder | Prompt | Shows |
|---|---|---|---|
| 1 | any | `Hello Rohas` | The firm, counts, live connector status |
| 2 | any | `What can the Real Estate Lawyer do?` | Skills catalogue by lawyer |
| 3 | `pune-builder-delay` | `Should I sue? I'm Ananya Kulkarni, the buyer. My documents are in this folder.` | Should I Sue on a small case, a screenshot read as evidence, RERA vs consumer forum vs court, deadline maths |
| 4 | `london-unpaid-invoice` | `Should I sue? I'm Priya Shah, director of Brightline Analytics Ltd. Assume today is 10 October 2025.` | Arbitration clause, a disputed invoice inside the claim, negotiation vs arbitration |
| 5 | `vertexpay` (download the participant file) | `Should I sue? I'm Aarav Mehta, co-founder of VertexPay. Assume today is 5 November 2025. My NCLT petition is filed and the respondents have replied. Should I press on, settle, or arbitrate?` | A complex Indian shareholder dispute across 18 document groups; the firm working as a team |
| 6 | any | `Use the calculator: 30 days from 3 September 2026, excluding the first day, weekends off, roll to the next working day.` | Exact deadline maths with the working shown (answer: Monday 5 October 2026) |
| 7 | any | `Screen "National Bank of Cuba" against the sanctions lists.` | Private sanctions screening, alias match on the US list |

**VertexPay files:** download the [participant case file](https://github.com/rohasnagpal/vertexpay-indian-legal-ai-benchmark/raw/main/downloads/vertexpay_participant_case_file.zip) into `examples/demo-matters/vertexpay/`. Never put the instructor guide in the same folder.

**Avoid live:** UK legislation lookups (legislation.gov.uk currently blocks automated access), The Gazette and GovInfo searches (both rate-limit), CourtListener (needs sign-in), and very long prompts on slow connections. Demos 3 to 5 take several minutes; start one, then talk through the earlier demos while it runs.

**If something fails live:** type `check my setup`, and fall back to the demo outputs you saved during rehearsal.
