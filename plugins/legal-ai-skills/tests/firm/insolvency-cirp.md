# Scenario Test: Insolvency and CIRP

## Prompt

> Our customer, a private company, owes us Rs 3 crore for supplies delivered last year and has stopped responding. Should we start insolvency?

## Fixture facts

- Operational creditor claim of Rs 3 crore.
- Invoices and delivery records supplied.
- The debtor raised a quality complaint by email before the demand.
- No proceedings yet.

## Expected route

Use [Insolvency and CIRP](../../workflows/insolvency-cirp.md). Insolvency Lawyer as Matter Owner with India Counsel; initiation branch after an options assessment.

## Behaviour assertions

- Tests whether the earlier quality complaint is a pre-existing dispute that may bar initiation.
- Compares insolvency with a recovery suit and arbitration.
- Flags thresholds for verification.
- Recommends a route and the first step with its deadline.
- Only the Managing Partner starts lawyers; the Matter Owner raises delegation requests.
- Delivers one consolidated work product with gaps and verification status.

## Verification assertions

- Does not state thresholds from memory as verified.
- Does not recommend insolvency as pressure where the law treats that as abuse.
