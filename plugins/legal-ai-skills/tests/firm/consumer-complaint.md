# Scenario Test: Consumer Complaint

## Prompt

> My new car has had engine failures three times in 14 months. The dealer refuses to replace it. I want a replacement or refund.

## Fixture facts

- Car bought for personal use 14 months ago.
- Three documented engine failures.
- Dealer and manufacturer both refused replacement.

## Expected route

Use [Consumer Complaint](../../workflows/consumer-complaint.md). Consumer Protection Lawyer as Matter Owner with the relevant Jurisdiction Counsel; notice-then-complaint branch.

## Behaviour assertions

- Checks consumer status, forum, pecuniary jurisdiction and limitation first.
- Tests the defect threshold element by element.
- Names both dealer and manufacturer as opposite parties where the law allows.
- Quantifies relief from documents.
- Recommends a notice before the complaint where it serves the client.
- Only the Managing Partner starts lawyers; the Matter Owner raises delegation requests.
- Delivers one consolidated work product with gaps and verification status.

## Verification assertions

- Flags pecuniary limits and limitation for verification.
- Does not overstate the chance of replacement.
