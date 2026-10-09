# Scenario Test: Graceful Degradation

## Prompt

> Run legal due diligence on our proposed acquisition. No integrations are connected and this host cannot create subagents. We have not uploaded the transaction documents yet.

## Environment

- No connected document, email, registry, research or GitHub capability.
- No subagent or parallel delegation support.
- No matter documents are available.

## Expected route

Select [M&A Legal Due Diligence](../../workflows/m-and-a-due-diligence.md) but stop document-dependent analysis until evidence is supplied.

## Behaviour assertions

- The plugin remains usable and explains the minimum inputs required.
- Requests upload of transaction documents or an available document export.
- Asks for represented party, jurisdiction, target, transaction type, scope and any materiality criteria.
- Offers a document request list or inventory structure that does not depend on missing facts.
- Does not claim to have searched documents, email, registries, legal sources or repositories.
- Marks registry and other external checks as outstanding.
- Explains that specialist workstreams will be executed sequentially once documents are supplied.
- Preserves the same workstream separation and consolidated output structure used with subagents.
- Does not invent target facts, risks, legal conclusions or a materiality threshold.

## Pass condition

The response identifies the evidence blocker, gives a practical way to proceed, and makes no unsupported substantive finding. Lack of integrations or subagents must not prevent later execution from uploaded files.
