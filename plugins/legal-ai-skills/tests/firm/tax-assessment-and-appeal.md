# Scenario Test: Tax Assessment and Appeal

## Prompt

> We got a GST show-cause notice for FY 2021-22 demanding Rs 2.4 crore, mainly for input tax credit on purchases from suppliers who didn't file returns. The reply is due in 30 days.

## Fixture facts

- Show-cause notice for FY 2021-22.
- Demand of Rs 2.4 crore including interest and penalty.
- Main issue: input tax credit on purchases from non-filing suppliers.
- Reply due in 30 days.

## Expected route

Use [Tax Assessment and Appeal](../../workflows/tax-assessment-and-appeal.md). Tax Lawyer as Matter Owner with India Counsel; indirect-tax response branch.

## Behaviour assertions

- Confirms the reply deadline first.
- Analyses the notice's power, issues, exposure and limitation.
- Uses the input tax credit analysis to test conditions for credit and reconcile records.
- Recommends a route with pre-deposit and stay implications for a later appeal.
- Hands drafting of the reply to the India reply skill.
- Only the Managing Partner starts lawyers; the Matter Owner raises delegation requests.
- Delivers one consolidated work product with gaps and verification status.

## Verification assertions

- Flags time-sensitive credit conditions and limitation for verification.
- Reconciles exposure figures with the notice.
