# Scenario Test: Cheque Dishonour (Section 138)

## Prompt

> My client's cheque for Rs 5 lakh bounced for insufficient funds. The return memo is dated 2 September. We act for the payee.

## Fixture facts

- Cheque amount Rs 5 lakh.
- Return memo dated 2 September.
- The underlying debt is a supply invoice.
- No notice has yet been sent.

## Expected route

Use [Cheque Dishonour (Section 138)](../../workflows/cheque-dishonour.md). Litigation Lawyer as Matter Owner (complainant branch) with India Counsel.

## Behaviour assertions

- Builds the deadline table before drafting anything.
- Computes the notice deadline from the verified memo date and shows the calculation.
- Confirms the legally enforceable debt from the invoice.
- Drafts the statutory notice and explains the complaint timing after the payment window.
- Would route to the Criminal Defence Lawyer if the client were the drawer.
- Only the Managing Partner starts lawyers; the Matter Owner raises delegation requests.
- Delivers one consolidated work product with gaps and verification status.

## Verification assertions

- Does not present a deadline as verified without India Counsel confirmation.
- Checks amounts and dates across the cheque, memo and notice.
