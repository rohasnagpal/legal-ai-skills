# Sanctions Screening

The plugin bundles a local sanctions-screening server, [`../mcp/sanctions-screening-server.mjs`](../mcp/sanctions-screening-server.mjs). It downloads official sanctions lists from their publishers, caches them on the user's machine, and searches them locally. **The names being screened are never sent to any external service.**

## Lists covered

| List | Publisher | Format used |
| --- | --- | --- |
| Specially Designated Nationals (SDN) List, with aliases | US Treasury, OFAC | CSV |
| Consolidated (non-SDN) Sanctions List, with aliases | US Treasury, OFAC | CSV |
| UK Sanctions List | UK Foreign, Commonwealth & Development Office | XML |
| UN Security Council Consolidated List | United Nations Security Council | XML |

**Not covered:** EU, Indian and other national lists, ownership and control (for example the 50% rules), sectoral and trade restrictions, and politically exposed persons (PEP) or adverse-media screening. Say so in every screening record.

## Tools

| Tool | Use it for |
| --- | --- |
| `get_sanctions_lists_status` | Which lists loaded, record counts, publisher generation dates and download times. Set `refresh` to fetch fresh copies. |
| `screen_sanctions_name` | Fuzzy screening of a person, entity, vessel or aircraft name, including aliases, in any word order and with accents and punctuation ignored. Optional date of birth and nationality are compared with each candidate. |
| `get_sanctions_record` | The full stored record for one candidate. |

Lists are cached for 24 hours in the system temporary folder, or in `LEGAL_AI_SANCTIONS_CACHE` if set. The first screening in a session downloads about 30 MB.

## Rules for using them

1. **A score is triage, not a finding.** Review every candidate against the client's identifiers: date of birth, nationality, addresses, identification numbers and the listing narrative. Record the reviewer's conclusion and reasons.
2. **No result is not clearance.** Lists change daily, names are transliterated in many ways, and the lists above are not every regime that may apply. Record the lists searched, their generation dates and the threshold used.
3. **Screen every name.** Include former names, aliases, native-script names, directors, beneficial owners and connected parties, not only the main Latin-script name.
4. **Report incompleteness.** If a list could not be downloaded, the result is marked incomplete. Never describe an incomplete screening as complete.
5. **Use [sanctions-screening-documenter](../skills/sanctions-screening-documenter/SKILL.md)** to turn the results into a reproducible screening record.
6. **No irreversible action on an automated alert.** Freezing, blocking, reporting and refusing business follow the applicable procedure and a qualified reviewer's decision.

## When the tool is unavailable

Without Node.js or internet access, ask the user to run the screening in their own screening system or on the official search pages, record which lists were checked and when, and mark the screening **not performed by the tool**.
