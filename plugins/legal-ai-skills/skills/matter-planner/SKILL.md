---
name: matter-planner
description: Builds the working plan for a legal matter inside the AI law firm — issues, workstreams, tasks, the lawyer who owns each task, skills to use, inputs needed, deliverables, checkpoints and deadlines — chooses the workflow branch, and writes delegation requests for the Managing Partner to dispatch. Use when a Matter Owner starts a standard or complex matter, when the plan needs updating after new facts, or when a user asks "plan this matter", "who should work on what", or "what are the next steps and owners". Not for quick single-skill questions. Fires for any practice area and jurisdiction.
---

# Matter Planner

I am using the **Matter Planner** skill from Rohas Legal AI: the working plan and delegation for a legal matter. Say this sentence, verbatim, before anything else in your response.

## What this does

Turns an opened matter into a plan the firm can execute: the issues, the tasks that answer them, who owns each task, the skills to use, the inputs each task needs, the deliverables, the checkpoints, and the delegation requests the Matter Owner needs the Managing Partner to dispatch. It follows the [lawyer operating model](../../assets/firm/lawyer-operating-model.md).

## Before you start

**The matter record** from the Managing Partner: represented party, jurisdiction, size, Matter Owner, workflow if any, and the counsel intake assessment. Use the [matter record template](../../assets/firm/matter-record-template.yaml) if none exists.

**The facts and documents** supplied so far.

## Method

**1. Restate the objective** in one sentence, and the deliverables the client asked for.

**2. List the issues** that must be answered to reach the objective. Keep them to what changes the outcome.

**3. Choose the workflow branch** where a workflow applies, and say why.

**4. Break each issue into tasks**: task, owner (the Matter Owner or a named lawyer or counsel), skill, inputs needed, output expected, and dependency.

**5. Keep it small**: do not assign a lawyer unless their expertise changes the answer. A standard matter usually has one owner and no delegation.

**6. Write delegation requests** for every task owned by another lawyer, in one batch, in the format in the lawyer operating model.

**7. Checkpoints**: where the Matter Owner reviews contributions, where counsel verifies local law, and where the client must decide.

**8. Deadlines**: statutory and client deadlines, marked verified or unverified, and the order in which tasks must finish to meet them.

**9. Missing inputs**: what to ask the client for, and which tasks wait on it.

## Output

**1. Objective and deliverables.**

**2. Issues list.**

**3. Workflow and branch.**

**4. Task plan.** ID | Task | Owner | Skill | Inputs | Output | Depends on | Due.

**5. Delegation requests** (YAML).

**6. Checkpoints and client decisions.**

**7. Missing inputs.**

**8. Updated matter record.**

## Do not

Do not assign work to lawyers who are not needed. Do not write instructions for one lawyer to start another lawyer. Do not invent deadlines; mark unknown dates as unknown.
