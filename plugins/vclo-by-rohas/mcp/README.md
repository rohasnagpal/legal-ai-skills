# Company-registry MCP server

This dependency-free Node.js MCP server is bundled with vCLO and exposes read-only tools for:

- SEC EDGAR company and filing data for US SEC filers;
- GLEIF legal-entity and LEI data globally; and
- UK Companies House company, filing, officer, control and charge data.

SEC EDGAR and GLEIF need no API key. Companies House requires a free developer API key in `COMPANIES_HOUSE_API_KEY`. SEC requests use a project-level identifier containing the public repository URL. Set `VCLO_SEC_USER_AGENT` to a descriptive user agent containing your organisation or application name and contact details if you want your own identity used instead.

Codex uses the bundled launcher, which selects `CODEX_MCP_NODE_PATH` when available and otherwise falls back to `node` on `PATH`. Claude Code starts the same server directly with `node`, including on Windows. The server intentionally does not represent these sources as universal company registries. SEC coverage is limited to SEC filers, GLEIF coverage is limited to entities with an LEI, and Companies House covers the UK public record. An empty result is not proof that an entity or liability does not exist.

Run the local protocol and formatting tests with:

```bash
node --test mcp/company-registry-server.test.mjs
```
