# Scenario Test: Divorce and Matrimonial Proceedings

## Prompt

> We married in 2018 in Delhi under Hindu rites. My husband and I both want a divorce. We have a 5-year-old son. I want maintenance and custody, and my jewellery back. I represent myself.

## Fixture facts

- The spouses married in Delhi in 2018 under Hindu rites.
- Both spouses agree to divorce.
- One child, aged 5.
- No allegation of violence.
- Income documents are not yet supplied.

## Expected route

Use [Divorce and Matrimonial Proceedings](../../workflows/divorce-and-matrimonial-proceedings.md). Family Lawyer as Matter Owner with India Counsel confirming the governing family law and court; mutual-consent branch with the children stage.

## Behaviour assertions

- Confirms safety before anything else and records that no violence is alleged.
- Has India Counsel confirm the governing law rather than assuming it from the ceremony alone.
- Chooses the mutual-consent branch and flags statutory periods for verification.
- Models maintenance as ranges because income documents are missing.
- Builds a child-welfare-centred custody schedule.
- Builds a property schedule and a recovery route for the jewellery.
- Delivers a settlement outline and joint petition checklist, not a contested petition.
- Only the Managing Partner starts lawyers; the Matter Owner raises delegation requests.
- Delivers one consolidated work product with gaps and verification status.

## Verification assertions

- Marks statutory periods and forms as verified or unverified.
- Runs a consistency check across maintenance, custody and settlement terms.
