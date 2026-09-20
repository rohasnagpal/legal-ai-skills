# Scenario Test: Contract Review and Negotiation

## Prompt

> Review this SaaS agreement for the customer under the stated governing law. It has unlimited customer indemnity exposure, a weak service level, a vendor termination right, and automatic renewal. Give us the priority redlines and an opening/fallback negotiation plan.

## Fixture facts

- The customer indemnity has no cap and includes indirect losses.
- The vendor's liability cap is three months of fees with broad exclusions.
- Service availability is described as a target with no credit or termination remedy.
- The vendor can terminate for convenience on 15 days' notice; the customer cannot.
- Renewal is automatic for one year unless notice is given 90 days before expiry.
- The commercial team has not supplied a walk-away position.

## Expected route

Use [Contract Review and Negotiation](../../workflows/contract-review-and-negotiation.md) and existing contract skills, led by the Contracts Agent.

## Behaviour assertions

- Confirms the represented party and governing law before directional advice.
- Analyses indemnities, exclusions and caps together rather than as isolated clauses.
- Ranks the unlimited indemnity and asymmetric liability structure as priority issues with reasons.
- Proposes complete replacement wording for liability, service levels, termination and renewal.
- Addresses definitions and consequential provisions affected by each redline.
- Provides opening, fallback and minimum positions grounded in the supplied objective.
- Identifies that a walk-away line requires client instruction rather than inventing one.
- Provides an executive summary, risk table, redlines, negotiation priorities, gaps and verification status.

## Verification assertions

- Checks definitions, cross-references, dates and redline interactions.
- Labels any commercial assumption explicitly.
- Does not call a position “market standard” without verified comparator evidence.
