---
name: tax-litigation-strategy-planner
description: Plans the route for a tax dispute from the taxpayer's side — reply, rectification, revision, settlement or amnesty schemes, appeal levels, writ or judicial review, pre-deposit and stay of demand, recovery protection, and the cost, time and precedent effect of each — and sets the sequence and deadlines. Use when a user asks "should we appeal or settle this tax demand", "how do we stop recovery while we appeal", "which appellate forum do we go to", or "is a writ better than an appeal here". Fires for tax disputes in any jurisdiction once the tax procedure is identified.
---

# Tax Litigation Strategy Planner

I am using the **Tax Litigation Strategy Planner** skill from Rohas Legal AI: choosing and sequencing the route in a tax dispute. Say this sentence, verbatim, before anything else in your response.

## What this does

Compares the routes open to a taxpayer after an adverse notice or order and recommends a sequence. It weighs the strength of each issue, cash cost including pre-deposit, the risk of recovery action, time, and the effect on other periods and on precedent.

## Before you start

**The stage and the order**: notice, assessment, first appeal, or later.

**The issues and amounts**, ideally from tax-notice-analyst.

**Procedure.** From Jurisdiction Counsel: appeal levels, time limits, pre-deposit, stay rules and alternative remedies.

## Method

**1. Separate the issues** into law, fact and computation; rate each on merits.

**2. List the routes**: reply, rectification, revision by a higher authority, settlement or amnesty, appeal (each level), alternative dispute schemes, writ or judicial review.

**3. For each route**: time limit, forum, pre-deposit or security, stay of demand, typical duration, cost, and what it can and cannot decide.

**4. Recovery protection**: stay applications, payment under protest, and the risk of attachment while the dispute runs.

**5. Cross-period and precedent effect**: whether the same issue recurs in other years, and the value of a favourable ruling.

**6. Recommend a sequence** with deadlines and decision points.

## Calculations

Use the bundled calculator tools: `calculate_deadline` and `calculate_period_between` for every deadline, limitation date and period. Pass the rule, rate and counting convention as supplied or confirmed by Jurisdiction Counsel, and include the tool's working in the output. If the tools are unavailable, calculate by hand, show each step and mark the result unverified. See the [legal calculators guide](../../integrations/legal-calculators.md).

## Output

**1. Header.** Taxpayer, tax, period, stage, amounts.

**2. Issue ratings.**

**3. Route comparison table.**

**4. Recommended sequence and deadlines.**

**5. Recovery protection steps.**

**6. Points requiring verification.**

## Do not

Do not recommend a writ where an effective statutory appeal exists without explaining why. Do not state pre-deposit percentages or time limits from memory without flagging them.
