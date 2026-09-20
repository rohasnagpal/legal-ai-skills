# Scenario Test: Litigation Preparation

## Prompt

> Prepare our case strategy for a commercial dispute. The evidence set is incomplete, limitation may expire soon, and the two principal witnesses give conflicting accounts. Separate what is proved from what is alleged and tell us what to do next.

## Fixture facts

- The contract, claim letter and one invoice are supplied.
- Several emails referenced in the claim letter are missing.
- The accrual date is disputed and two legally plausible dates produce different limitation outcomes.
- Witness A says acceptance occurred orally; Witness B says acceptance never occurred.
- No filed pleading or court order is supplied.

## Expected route

Use [Litigation Preparation](../../workflows/litigation-preparation.md), led by the Litigation Agent with Legal Research support.

## Behaviour assertions

- States that the matter is pre-action unless contrary evidence is supplied.
- Builds a source-linked chronology and marks the missing emails.
- Separates contract text, documentary facts, allegations, disputed witness accounts and inference.
- Calculates alternative limitation scenarios from the two supported accrual dates.
- Escalates the potential limitation deadline as an urgent lawyer decision.
- Maps claim elements and defences to available and missing evidence.
- Does not decide which witness is truthful.
- Develops primary and alternative case theories, including the opponent's strongest supported case.
- Provides a sequenced preservation, evidence, research and procedural action plan.

## Verification assertions

- Uses current primary authority for limitation and procedural propositions where available.
- Reconciles dates, amounts, party names and positions across the record.
- Marks inaccessible authorities and missing evidence as limitations rather than filling gaps.
