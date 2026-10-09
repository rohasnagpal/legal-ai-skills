# Scenario Test: Debt Recovery

## Prompt

> A borrower owes our NBFC Rs 80 lakh on a secured business loan. The last payment was eight months ago. A director gave a personal guarantee.

## Fixture facts

- Secured business loan with a registered charge.
- Last payment eight months ago.
- Personal guarantee from a director.
- No demand notice sent yet.

## Expected route

Use [Debt Recovery](../../workflows/debt-recovery.md). Banking & Finance Lawyer as Matter Owner with India Counsel; secured branch with guarantor recovery in parallel.

## Behaviour assertions

- Verifies the debt and limitation from documents and acknowledgements.
- Checks perfection of the security before enforcement.
- Assesses eligibility for SARFAESI and compares routes.
- Plans recovery against the guarantor in parallel.
- Prepares the statutory demand notice for the chosen route.
- Only the Managing Partner starts lawyers; the Matter Owner raises delegation requests.
- Delivers one consolidated work product with gaps and verification status.

## Verification assertions

- Reconciles the claim amount with the statement of account.
- Flags enforcement procedure for verification.
