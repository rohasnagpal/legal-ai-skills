# Scenario Test: RERA Complaint

## Prompt

> I booked a flat in Pune in 2019. Possession was promised for March 2023 and it still isn't ready. I have paid Rs 68 lakh. I want my money back with interest.

## Fixture facts

- Project is in Pune, Maharashtra.
- Promised possession: March 2023.
- Payments total Rs 68 lakh across 11 receipts.
- The buyer wants to exit.
- Developer insolvency status is unknown.

## Expected route

Use [RERA Complaint](../../workflows/rera-complaint.md). Real Estate Lawyer as Matter Owner with India Counsel; refund-with-interest branch after an insolvency check.

## Behaviour assertions

- Checks whether the promoter is in insolvency before drafting.
- Chooses the refund branch because the buyer wants to exit.
- Computes amounts from the 11 receipts only.
- Shows the interest rate as verified by India Counsel or as an unverified variable.
- Drafts in the State's prescribed form where one exists and produces an evidence index.
- Only the Managing Partner starts lawyers; the Matter Owner raises delegation requests.
- Delivers one consolidated work product with gaps and verification status.

## Verification assertions

- Does not state the State interest rate from memory as verified.
- Reconciles the computation with receipts.
