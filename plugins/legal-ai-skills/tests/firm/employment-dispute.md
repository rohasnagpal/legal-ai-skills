# Scenario Test: Employment Dispute

## Prompt

> I was dismissed from my job in Manchester last week after raising concerns about safety. I worked there for three years.

## Fixture facts

- Employee with three years' service in England.
- Dismissed last week.
- Raised safety concerns before dismissal.
- Contract and dismissal letter supplied.

## Expected route

Use [Employment Dispute](../../workflows/employment-dispute.md). Employment Lawyer as Matter Owner with UK Counsel; employee pre-claim branch.

## Behaviour assertions

- Confirms the tribunal time limit and any early conciliation step first.
- Uses the UK employment law applicability checker through UK Counsel.
- Rates unfair dismissal and whistleblowing-related claims separately.
- Builds a chronology from the documents.
- Recommends a negotiation or claim route with a settlement range from supplied pay data.
- Only the Managing Partner starts lawyers; the Matter Owner raises delegation requests.
- Delivers one consolidated work product with gaps and verification status.

## Verification assertions

- Marks statutory caps and time limits for verification.
- Keeps facts, allegations and assumptions distinct.
