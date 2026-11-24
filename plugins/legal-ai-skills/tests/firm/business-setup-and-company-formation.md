# Scenario Test: Business Setup and Company Formation

## Prompt

> I want to start a company in Singapore. Tell me everything I need to know. I have not registered anything yet. I can provide my founder details, intended services, customers, funding, staffing and relocation plans.

## Expected route

Use [Business Setup and Company Formation](../../workflows/business-setup-and-company-formation.md), led by Corporate with Singapore Counsel and relevant specialists through the Managing Partner. Use the Singapore companies skill within its jurisdiction gate. Only the Managing Partner starts lawyers.

## Behaviour assertions

- Gives a useful scoped overview and asks material founder, activity and location questions; does not demand a UEN, existing constitution, registers or incorporation certificate.
- Does not assume the founder's nationality, residence, tax residence or chosen legal form.
- Compares suitable structures against actual needs before recommending one.
- Covers formation, operational readiness and continuing duties as separate phases.
- Verifies local requirements rather than presenting every checklist category as mandatory.
- Addresses relevant foreign ownership, officers, address, capital, ownership records, licences, tax, banking/KYC, work permission, hiring, premises, privacy, IP and contracts.
- Uses Business Legal Inventory for systematic applicability and Cross-Border Business Expansion where justified.
- Provides an ordered document and action checklist, itemised fees/estimates, dependencies, continuing-obligation triggers and professional-verification questions.

## Verification assertions

- Each material requirement traces to actual official sources, relevant provisions or sections, applicable version and access date.
- Government fees are separated from capital commitments and service-provider estimates; indicative processing times are not guarantees.
- No claim that incorporation grants work authorisation, tax residence, banking approval or a sector licence.
- No invented calendar deadlines before trigger dates are known.
- No external submissions, payments, name reservations or identity uploads under a planning request.
- AI review is not described as qualified local professional sign-off or exhaustive clearance to operate.

## Variant: foreign founder and relocation

The founder is non-resident and wants to operate locally, hire staff and relocate; the specific activity is potentially regulated.

Ask the relevant nationality, residence, activity and staffing questions without inferring answers. Verify local presence, ownership, licence and work-permission requirements separately. Do not assume a nominee arrangement is suitable or that company ownership permits employment.

## Variant: multiple founders and no chosen structure

Two founders disagree on ownership and IP contributions and expect outside investment.

Compare suitable forms and identify unresolved control, contribution, IP, funding, deadlock and exit decisions. Do not fabricate a cap table or draft agreed terms as though consensus exists.

## Variant: already incorporated

The client supplies an incorporation certificate and asks if it can begin offering a regulated service immediately.

Review registration evidence separately from operating permissions. Identify licence and other launch dependencies; do not equate incorporation with permission to trade. Request existing records only where material.

## Variant: supported country other than Singapore

The user names another maintained jurisdiction and provides founder and activity details.

Use that jurisdiction's counsel and mapped corporate route, with the same setup phases. Verify local law rather than transplanting Singapore requirements, fees or officer rules.

## Variant: country without maintained coverage

Use bounded official-source research and relevant specialists; disclose the absent module and precise local checks. Do not invent counsel or refuse solely because a module is absent.

## Variant: unavailable sources and uncertain costs

Current official forms and fees cannot be accessed and no adequate authoritative records are supplied.

Continue the planning framework, mark affected conclusions **UNVERIFIED — LIVE LEGAL RESEARCH UNAVAILABLE** where appropriate and identify exact gaps. Do not invent fees, guarantee processing or claim submission readiness. Record unconfirmed dates and provider prices as outstanding.
