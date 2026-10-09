# Legal Calculators

The plugin bundles a local calculator server, [`../mcp/legal-calculators-server.mjs`](../mcp/legal-calculators-server.mjs), so that deadlines, periods and interest are computed exactly instead of by the model. It runs on the user's machine, makes no network calls and needs no account.

## Tools

| Tool | Use it for |
| --- | --- |
| `calculate_deadline` | A date a fixed period before or after a trigger: notice periods, limitation, appeal and reply deadlines, claim-filing dates. Supports days, working days, weeks, months and years; excluding or including the trigger day, or clear days; supplied weekends and holidays; and moving a deadline that falls on a non-working day. |
| `calculate_period_between` | The days, and years, months and days, between two dates: delay periods, length of service, whether an act was within time. |
| `calculate_interest` | Simple or compound interest on one or more amounts, each from its own date, at a single rate or (for simple interest) a rate schedule, on an actual/365, actual/360 or 30E/360 basis. Money is exact in minor units. |

## Rules for using them

1. **The calculator knows no law.** The period, the counting convention, the rate, the day-count basis and the holidays come from the user, the document or Jurisdiction Counsel. Put the rule and its source in `basis`.
2. **Choose the counting convention deliberately.** Many statutes exclude the trigger day; some rules use clear days; some count the trigger day. If the convention is unclear, ask Jurisdiction Counsel, or run the calculation both ways and show both results.
3. **Supply non-working days when they matter.** None are built in, because court and authority closures differ and change. If none are supplied, the result says so.
4. **Show the working.** Include the tool's steps, or a short form of them, in the work product, with the verification note.
5. **Use exact figures.** Pass amounts as decimal strings from the documents, such as receipts or a statement of account, never estimates.

## When the tool is unavailable

If the calculators are not available (for example, Node.js is not installed), compute by hand, show every step, and mark the result **unverified — calculated without the calculator tool**. Never present a hand calculation of a deadline as confirmed.
