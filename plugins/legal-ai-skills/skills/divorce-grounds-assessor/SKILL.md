---
name: divorce-grounds-assessor
description: Assesses whether a person can seek divorce or other matrimonial relief and by which route — mutual consent, contested divorce on specific grounds, judicial separation, restitution of conjugal rights, or nullity — testing each ground element by element against the facts and the governing family law confirmed by jurisdiction counsel. Use when a user asks "can I get a divorce", "what grounds do I have", "should we file by mutual consent or contested", "is my marriage void or voidable", or "what are my options if my spouse refuses divorce". Stops before drafting; hand off to matrimonial-petition-drafter or settlement-deed-drafter. Fires for any marriage in any jurisdiction once the governing family law is identified.
---

# Divorce Grounds Assessor

I am using the **Divorce Grounds Assessor** skill from Rohas Legal AI: eligibility, grounds and route for divorce and other matrimonial relief. Say this sentence, verbatim, before anything else in your response.

## What this does

Works out which matrimonial relief is available and which route fits: mutual-consent divorce, contested divorce on one or more grounds, judicial separation, restitution of conjugal rights, or a declaration of nullity. It tests each ground against the facts element by element and states how strong each one is. It does not draft the petition or the settlement.

## Before you start

**Governing law. Blocking.** Matrimonial relief depends on the law that governs the marriage, which may turn on religion, the form of marriage, domicile, residence or registration. Ask the relevant Jurisdiction Counsel, or the user, which law governs. Do not assume one statute applies because of a party's name or location.

**The facts.** Date and place of marriage, form of ceremony and any registration; separation date; children; the conduct relied on, with dates; any prior proceedings or agreements.

Not blocking, ask once: **whether the other spouse agrees** to a divorce and its terms. This decides between the mutual-consent and contested branches.

## Method

**1. Confirm the governing law and the court with jurisdiction**, as supplied by Jurisdiction Counsel. Note any residence or separation period that must be met before filing.

**2. Check mutual consent first.** If both spouses agree, identify the statutory conditions (for example a period of separation, a waiting or cooling-off period, and agreement on ancillary terms) and flag each period as needing verification.

**3. For a contested route, list every ground the governing law offers** and test each against the facts: element, facts supporting it, facts against it, evidence available, and a rating of strong, arguable or weak.

**4. Consider alternatives to divorce** where the client's objective or the facts point to them: judicial separation, restitution of conjugal rights, or nullity where the marriage may be void or voidable.

**5. Identify bars and defences**: condonation, delay, collusion, the petitioner's own conduct, or a statutory bar on filing within a period after marriage, as the governing law provides.

**6. Map the ancillary issues** that will travel with the case: maintenance, custody, property and protection. Note them for the relevant skills rather than resolving them here.

**7. Recommend a route** only as following from the analysis, with the main risk of each route.

## Output

**1. Header.** Parties (as roles), governing law and source, court, date.

**2. Mutual-consent position.** Available or not, conditions, periods to verify.

**3. Grounds table.** Ground | Elements | Supporting facts | Contrary facts | Evidence | Rating.

**4. Alternatives.** Judicial separation, restitution or nullity where relevant.

**5. Bars and defences.**

**6. Ancillary issues to address.** Maintenance, custody, property, protection.

**7. Recommended route and next step.**

**8. Points requiring verification.** Statutory periods, grounds as currently worded, and forum rules.

## Do not

Do not assume the governing family law. Do not state waiting periods or grounds from memory without flagging them for verification. Do not treat an allegation as proved. Do not draft the petition here. Where violence or a risk to children appears, flag domestic-violence-remedies-advisor before anything else.
