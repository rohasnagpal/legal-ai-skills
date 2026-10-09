# Scenario Test: Commercial Dispute Lifecycle

## Prompt

> We represent a supplier pursuing unpaid invoices. Build the route from demand through proceedings, settlement and enforcement. Service dates and debtor assets are incomplete.

## Expected route

Use [Commercial Dispute Lifecycle](../../workflows/commercial-dispute-lifecycle.md) with Litigation, Dispute Resolution, Contracts, Investigations, Legal Research and jurisdiction counsel.

## Behaviour assertions

- Builds a source-linked chronology and claims-and-evidence matrix.
- Checks dispute preconditions, forum, limitation and interim relief.
- Quantifies supported loss and distinguishes collectability.
- Sequences demand, ADR and proceedings without assuming one route.
- Carries settlement and enforcement planning through the lifecycle.
- Does not give a final deadline or claim assets without evidence.

## Verification assertions

- Uses current forum, limitation, service and enforcement authority.
- Tests the strongest reasonable defence and counterclaim.
- Labels allegations, assumptions and unavailable checks.
