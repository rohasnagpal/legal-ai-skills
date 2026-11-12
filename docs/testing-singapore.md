# Test Singapore coverage

Use a host loading this checkout or version 4.3.0 or later, then start a new chat/reload the plugin. These repository changes do not update an existing plugin installation automatically. Never copy skills into a personal skills folder.

Singapore follows the same counsel/specialist architecture as India, US and UK. All 17 practice areas are routed, with 18 local skills (including privacy); this is maintained coverage, not a guarantee that every niche rule or source will be accessible. No dedicated Singapore MCP connector is added.

## Welcome and routing

> Hello Rohas

Pass: 4 Jurisdiction Counsel including Singapore; 244 Legal Skills; 78 jurisdiction-specific skills (48 India, 6 US, 6 UK, 18 Singapore); 17 specialists and 20 workflows. Singapore websites are not added to the 14 connected-source count.

> What can Singapore Counsel do?

Pass: registry-based explanation covering all 17 practice areas plus privacy, with no commercial-only limitation. Sources and unavailable checks are distinguished from automated connector availability.

## Practice-area checks

Run the prompts below separately. They are synthetic intake prompts, not evidence of actual clients or events. Use prepared fictional documents if you want substantive advice; when material inputs are missing, asking for them is the correct behaviour. Do not treat a request for a document or jurisdiction fact as a failed test.

For each prompt check: Singapore gate; expected local skill and specialist owner; source-linked local method when enough inputs exist; actual document coverage; verified/unverified legal claims; source failures disclosed; no foreign law imported; no invented deadlines or unperformed filings.

| Prompt | Local skill | Specialist owner |
| --- | --- | --- |
| We are a Singapore private company planning a share issue. Check approvals and filings. | `singapore-companies-compliance-checker` | corporate-lawyer |
| Review this Singapore-law services agreement for the supplier. | `singapore-contract-law-reviewer` | contracts-lawyer |
| We need to bring a Singapore civil claim. Check forum, service and procedural steps. | `singapore-civil-procedure-checker` | litigation-lawyer |
| The clause names SIAC but no seat. Assess the Singapore arbitration issues. | `singapore-arbitration-procedure-checker` | dispute-resolution-lawyer |
| My client has been arrested in Singapore. Assess the procedural issues and urgent information needed. | `singapore-criminal-procedure-checker` | criminal-defence-lawyer |
| A Singapore family matter involves a Muslim marriage, children and property. Identify the applicable regimes and forums. | `singapore-family-law-applicability-checker` | family-lawyer |
| A foreign individual wants to buy Singapore residential property. Review eligibility and due diligence, without assuming approval. | `singapore-property-law-reviewer` | real-estate-lawyer |
| An Indian company receives payments from Singapore. Assess Singapore withholding and treaty applicability from the supplied facts. | `singapore-tax-applicability-checker` | tax-lawyer |
| A Singapore company cannot pay creditors. Compare restructuring and winding-up routes on the supplied evidence. | `singapore-insolvency-applicability-checker` | insolvency-lawyer |
| A Singapore fintech will hold customer funds and provide payment services. Map licences and controls before launch. | `singapore-banking-finance-regulatory-checker` | banking-finance-lawyer |
| A Singapore employee was dismissed and disputes overtime pay. Check coverage and claim procedures. | `singapore-employment-law-applicability-checker` | employment-lawyer |
| Review ownership and Singapore trade mark enforcement for the supplied brand and licence. | `singapore-ip-protection-checker` | ip-lawyer |
| Audit the supplied Singapore business activities and controls for regulatory obligations. | `singapore-regulatory-compliance-checker` | compliance-lawyer |
| Assess PDPA compliance for a Singapore company transferring customer data overseas. | `singapore-data-protection-compliance-checker` | compliance-lawyer |
| A Singapore consumer received defective goods. Assess remedies and available claim routes. | `singapore-consumer-remedies-checker` | consumer-protection-lawyer |
| A Singapore agency refused a licence. Assess statutory appeal and judicial-review options. | `singapore-public-law-remedies-checker` | public-law-lawyer |
| Investigate suspected bribery in a Singapore business while preserving evidence and privilege. | `singapore-investigation-evidence-checker` | investigations-lawyer |
| Verify the supplied Singapore authorities and whether they support the draft propositions. | `singapore-authority-validator` | legal-research-lawyer |

## Cross-border and local-regime checks

1. **Seat versus substantive law:** “A contract has English governing law and Singapore as the seat. Which counsel handles each issue?” Expect separate UK/Singapore layers coordinated by the Managing Partner, not one jurisdiction for everything.
2. **Institution versus seat:** “The clause names SIAC but no seat. Is Singapore necessarily the seat?” Expect the agreement and relevant rules/version checked; no automatic inference from SIAC.
3. **Family boundary:** supply a fictional Singapore Muslim-marriage matter involving children and property. Expect issue-specific verification of Syariah/civil court jurisdiction, not every issue assigned solely by religion.
4. **Employment coverage:** give duties, pay, work location and contract for two different employee categories. Expect provision-specific applicability checks, not identical assumptions about every entitlement.
5. **Temporal procedure:** provide two proceedings with different commencement dates and ask which procedural rules apply. Expect version/transitional checks rather than one universal rule set.
6. **Source unavailable:** when a real source is blocked, expect unavailable text and dependent claims marked unverified. To test a simulated failure, explicitly ask for a hypothetical failure response; do not claim that an accessible source actually failed. No anti-automation workaround or fabricated official verification.
7. **Singapore registry:** “Check this company's ACRA record.” Expect UEN/identity and actual access checked. If access is unavailable, request an official extract. A GLEIF match or public name result must not be called an ACRA search.
8. **Foreign/unknown jurisdiction:** ask an exclusively Australian question or omit the jurisdiction from a family request. Expect no Singapore rules assumed. Singapore ownership alone does not make overseas property subject to Singapore land law.
9. **Saved matter:** follow the [matter continuity tests](testing-matter-upgrades.md), using a fictional Singapore matter. Expect saved facts separated from refreshed local-law verification and deadlines.

## Automated repository checks

```sh
ruby scripts/build-skill-registry.rb
ruby scripts/validate.rb
node --test plugins/legal-ai-skills/mcp/*.test.mjs plugins/legal-ai-skills/hooks/*.test.mjs
./scripts/build-plugin-zips.sh
```

The validator checks the registry, counsel ownership, every mapped local skill's gate and counsel link, source files, published counts and positive routing-case coverage. The archive must include the Singapore agent, gateway and jurisdiction material. Machine-readable cases are in [singapore-jurisdiction-routing-behavioral-evals.yaml](../plugins/legal-ai-skills/tests/singapore-jurisdiction-routing-behavioral-evals.yaml).

These checks validate structure, test definitions and existing tool behaviour. They do not execute model conversations, prove legal correctness, or establish that an official website will allow a later request. Run the prompts in both Codex and Claude Code and inspect the actual sources/outputs.
