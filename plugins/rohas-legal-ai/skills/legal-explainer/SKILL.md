---
name: legal-explainer
description: Explains laws, legal concepts, judgments, clauses, rights, obligations, procedures, and legal positions in clear plain language without losing legal accuracy. Use when a user asks "what does this mean?", "explain this law simply", "explain this clause", "what does this judgment actually say", "explain this to a client", or wants a practical explanation of a legal issue. Adapt the explanation to the user's level and purpose. Do not use for a formal legal opinion, exhaustive research memorandum, litigation strategy, or structured teaching course with quizzes; use learn-law-with-rohas for the latter.
---

# Legal Explainer

## Purpose

Turn complex legal material into an accurate, understandable explanation that the intended reader can use.

The objective is clarity without oversimplifying away legally important distinctions.

This skill can explain:

* statutes, rules and regulations;
* legal concepts and doctrines;
* judgments and orders;
* contractual clauses;
* rights and obligations;
* legal procedures;
* regulatory requirements;
* legal terminology;
* a lawyer's analysis or position;
* the practical effect of legal documents.

## Determine the explanation needed

Identify from the request, where possible:

* the topic or material to explain;
* jurisdiction, if legally relevant;
* who the explanation is for;
* the reader's existing level of legal knowledge;
* whether the user wants a short explanation or a deeper one;
* whether practical examples would help.

Do not force an intake questionnaire where the request is already clear.

If the user provides legal text, work from the supplied text first.

If the explanation depends on current law and research tools are available, verify the relevant legal position before presenting it as current law.

## Explanation levels

Adapt automatically unless the user specifies a level.

### Simple

Use for clients, non-lawyers and quick explanations.

Prefer:

* ordinary words;
* short sentences;
* concrete examples;
* minimal legal terminology.

Where a legal term is necessary, define it immediately.

### Practitioner

Use for lawyers or legally informed users.

Preserve:

* legal terminology;
* doctrinal distinctions;
* procedural consequences;
* material exceptions and qualifications.

Still avoid unnecessary jargon.

### Deep explanation

Use when the user wants to understand how the rule works rather than merely what it says.

Explain:

* the rule;
* why it matters;
* its elements or conditions;
* exceptions;
* how courts or regulators apply it;
* practical consequences;
* unresolved or jurisdiction-dependent issues.

## Method

1. **Identify the core question.**
   State internally what the user actually needs to understand before explaining surrounding material.

2. **Start with the answer.**
   Give the simplest accurate explanation first. Do not begin with legislative history or technical qualifications unless they are necessary to avoid misleading the reader.

3. **Break complex rules into components.**
   Where useful, explain:

   * who the rule applies to;
   * what it requires or prohibits;
   * when it applies;
   * exceptions;
   * consequences of non-compliance.

4. **Translate legal language, not legal meaning.**
   Replace jargon with ordinary language while preserving distinctions that change the outcome.

5. **Use examples where they materially improve understanding.**
   Prefer short hypotheticals closely tied to the concept.

6. **Explain interaction between provisions where necessary.**
   Do not explain a clause or statutory section in isolation if another provision materially changes its effect.

7. **Separate text from interpretation.**
   Make clear whether a point comes directly from:

   * the supplied document;
   * statutory text;
   * a judgment;
   * a legal inference;
   * general explanation.

8. **Flag uncertainty.**
   Say where the answer depends on:

   * jurisdiction;
   * facts not supplied;
   * current case law;
   * commencement or amendment status;
   * another document or provision.

9. **Give practical effect.**
   Where useful, answer:

   * what does this mean for the user;
   * what can or cannot be done;
   * what should be checked next.

## Explaining legislation

When explaining a statute, rule or regulation:

* identify the relevant provision;
* explain it in ordinary language;
* identify prerequisites and exceptions;
* explain defined terms that materially affect it;
* distinguish the text of the law from interpretation;
* verify current commencement and amendments where relevant.

Do not paraphrase a provision so loosely that a legal condition disappears.

## Explaining judgments

When explaining a judgment:

* identify the court and issue;
* explain the material facts only to the extent necessary;
* state what the court decided;
* distinguish the holding from wider observations where relevant;
* explain the practical significance;
* avoid saying a case establishes a proposition broader than its actual holding.

Use `case-law-analyst` where the user needs a full precedent analysis.

## Explaining contracts

When explaining a clause:

* explain what the clause does;
* identify who benefits and who bears the obligation or risk;
* explain triggers, deadlines and consequences;
* identify important interaction with related clauses where visible;
* state when the conclusion is limited because the rest of the contract was not supplied.

Use `contract-reviewer` when the user wants an adversarial or risk-ranked contract review.

## Output

Use the lightest structure appropriate to the request.

A useful default is:

1. **In simple terms**
2. **How it works**
3. **Example**
4. **Why it matters**
5. **Anything that needs checking**

Do not force all five sections for a simple question.

## Guardrails

* Do not sacrifice accuracy merely to make an explanation shorter.
* Do not invent a legal rule, authority, deadline or exception.
* Do not present an analogy as the legal rule itself.
* Do not describe an unsettled position as settled.
* Do not treat a headnote, summary or secondary source as though it were the judgment or legislation.
* Do not overwhelm a non-lawyer with every possible exception where only a few materially affect the explanation.
* Do not turn a request for explanation into unsolicited legal strategy.
* If current legal accuracy matters, verify before relying on remembered law.
