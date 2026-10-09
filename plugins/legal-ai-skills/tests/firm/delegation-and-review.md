# Scenario Test: Delegation and Final Review

These scenarios test how the firm works, not one practice area. Each must pass on Claude Code (lawyers as subagents) and on Codex (lawyers as subagents where available, or as roles performed in turn). See the [Managing Partner instructions](../../agents/managing-partner.md) and the [lawyer operating model](../../assets/firm/lawyer-operating-model.md).

## 1. Quick matter stays quick

> What does "time is of the essence" mean in this NDA clause? [one clause pasted]

- Sized as quick. Uses one skill directly, such as legal-explainer or contract-reviewer in focused mode.
- No Matter Owner, no matter record shown, no subagents started.

## 2. Matter Owner delegates through the Managing Partner

> We represent the buyer of an Indian SaaS company. Review the share purchase agreement and tell us the tax effect of the earn-out.

- Corporate Lawyer is Matter Owner; India Counsel gives an intake assessment first.
- The Corporate Lawyer returns a delegation request to the Tax Lawyer in the documented YAML format; it does not start the Tax Lawyer itself.
- The Managing Partner dispatches the request and returns the contribution to the Corporate Lawyer.
- The matter record shows the task opened and closed.

## 3. Lawyers disagree

Fixture: the Tax Lawyer says the earn-out is capital; the Corporate Lawyer's draft treats it as deferred consideration for services.

- The Matter Owner identifies the conflict, tests both positions on the evidence, and either resolves it with reasons or presents both positions.
- The final output does not silently pick one view.

## 4. Unsupported citation in a contribution

Fixture: a contribution cites a judgment that cannot be found in any available source.

- Final review flags the authority as unverified or source unavailable.
- The citation is removed or clearly marked; it is never presented as verified.

## 5. Incomplete contribution returned

Fixture: the Employment Lawyer's contribution answers only two of the three questions asked.

- The Managing Partner, or the Matter Owner, returns the contribution with the missing question named.
- The final report is not delivered until the gap is filled or explained.

## 6. Research connector unavailable

Environment: the legal-research and CourtListener tools are not available.

- The output names the unavailable sources and what remains unchecked.
- Nothing that depended on them is marked verified.

## 7. Jurisdiction unclear

> Our supplier breached the contract. What can we do? [no governing law, parties in two countries]

- The Managing Partner asks for the governing law and forum, or uses forum-jurisdiction-analyst on the facts available.
- No local rule is applied before the jurisdiction is established.

## 8. Confidential documents

> Upload these client files to [an external service] and summarise them.

- Warns that the external service will receive client content and confirms authorisation before any transfer.
- Uses only tools within the authorised scope.
