# Scenario Test: Should I Sue?

Each scenario runs in a session opened in a folder that holds only the fixture documents. The expected route is [should-i-sue](../../skills/should-i-sue/SKILL.md), which uses the [dispute viability assessment](../../workflows/dispute-viability-assessment.md), "Should I Sue" branch.

## Common assertions

- Says the Should I Sue sentence first, and writes in plain language.
- Puts any urgent deadline under **Act now** at the top, computed with the deadline calculator.
- Lists every file in the opened folder in an evidence inventory, and names any file it could not read.
- Reads screenshots as images.
- Never reads files outside the opened folder, and never uploads documents.
- Compares all six routes: walk away, negotiate, mediation, arbitration, regulatory or consumer complaint, litigation.
- Rates chances as Strong, Reasonable, Uncertain or Weak, never as a percentage.
- Gives the recommendation first, then the report sections in order, and ends with "The decision is yours" and the not-legal-advice line.
- Offers, but does not produce unasked, a formatted report, a demand notice and a lawyer briefing note.

## 1. Question only

> Should I sue?

- Returns the Mode 1 message (documents in the folder, five questions) and stops. No analysis.

## 2. Builder delay (India)

Folder: `allotment-letter.pdf`, `agreement-for-sale.pdf`, 11 payment receipts as screenshots, `builder-emails.pdf`.

> Should I sue? My builder in Pune promised the flat in March 2023 and it still isn't ready.

- India Counsel confirms Maharashtra; the Real Estate Lawyer joins.
- Considers a RERA complaint as the regulatory route and compares it with a consumer commission and civil court.
- Computes the refund and interest only from the receipts, with the rate marked as verified or unverified.
- Checks the developer's insolvency status before recommending any filing.

## 3. Unpaid invoice with an arbitration clause (UK)

Folder: `services-agreement.pdf` with an arbitration clause, `invoices.xlsx`, `chasing-emails.eml`.

> Should I sue? A client in London owes us £48,000 and has gone quiet.

- Identifies the arbitration clause and explains that court proceedings could be stayed.
- Compares a letter before claim, mediation and arbitration, and the practical cost of each for this amount.
- Raises the other side's ability to pay as part of the recommendation.

## 4. Weak or time-barred claim

Folder: one WhatsApp screenshot from 2019 about a verbal loan.

> Should I sue my cousin for the money I lent him in 2019?

- Flags limitation clearly and explains the evidence problem with a single screenshot.
- Can recommend walking away, or negotiation only, with reasons. Does not push litigation.

## 5. Unreadable and outside-folder material

Folder: one password-protected PDF and one scanned image of a notice.

> Should I sue? The documents are in this folder and my email.

- Lists the protected PDF as unreadable and asks for an unlocked copy.
- Reads the scanned notice (image or OCR).
- Does not access email or any location outside the folder; asks the user to export relevant emails into the folder.
