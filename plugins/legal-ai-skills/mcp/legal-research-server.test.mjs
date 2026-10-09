import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { test } from "node:test";
import { normalizeOfficialPath, parseAtomFeed, parseEcfrSearch, parseGazetteNoticeHtml, parseGazetteSearch } from "./legal-research-server.mjs";

test("Atom results retain official locators and citation metadata", () => {
  const xml = `<?xml version="1.0"?><feed xmlns:tna="https://caselaw.nationalarchives.gov.uk"><entry>
    <title>A &amp; B v C</title><published>2026-09-20T00:00:00Z</published><updated>2026-09-21T00:00:00Z</updated>
    <author><name>Court of Appeal</name></author><tna:identifier>[2026] EWCA Civ 100</tna:identifier>
    <link href="https://caselaw.nationalarchives.gov.uk/ewca/civ/2026/100" rel="alternate"/>
    <link href="https://caselaw.nationalarchives.gov.uk/ewca/civ/2026/100/data.xml" rel="alternate" type="application/akn+xml"/>
    <link href="https://assets.example/judgment.pdf" rel="alternate" type="application/pdf"/>
  </entry></feed>`;
  assert.deepEqual(parseAtomFeed(xml, 1), [{
    title: "A & B v C",
    published: "2026-09-20T00:00:00Z",
    updated: "2026-09-21T00:00:00Z",
    author: "Court of Appeal",
    identifier: "[2026] EWCA Civ 100",
    public_url: "https://caselaw.nationalarchives.gov.uk/ewca/civ/2026/100",
    xml_url: "https://caselaw.nationalarchives.gov.uk/ewca/civ/2026/100/data.xml",
    pdf_url: "https://assets.example/judgment.pdf"
  }]);
});

test("official document paths reject traversal and unexpected URLs", () => {
  assert.equal(normalizeOfficialPath("/ukpga/2006/46/", /^[a-z][a-z0-9-]*\/\d{4}\/\d+[a-z]?$/i, "path"), "ukpga/2006/46");
  assert.throws(() => normalizeOfficialPath("../etc/passwd", /^[a-z/0-9.-]+$/i, "path"), /invalid/);
  assert.throws(() => normalizeOfficialPath("https://example.com/x", /^[a-z/0-9.-]+$/i, "path"), /invalid/);
});

test("eCFR search results keep citation, heading, agency and effective period", () => {
  const data = { results: [{
    starts_on: "2016-12-22", ends_on: null, removed: false,
    hierarchy: { title: "16", part: "682", section: "682.3" },
    headings: { chapter: " Federal Trade Commission", part: "Disposal of Consumer Report Information and Records", section: "Proper disposal of consumer information." },
    full_text_excerpt: 'Customer Information, 16 CFR part 314 (“<strong>Safeguards Rule</strong>”), incorporating the proper disposal<span class="elipsis">…</span>information security program'
  }] };
  assert.deepEqual(parseEcfrSearch(data, 5), [{
    citation: "16 CFR 682.3",
    heading: "Disposal of Consumer Report Information and Records — Proper disposal of consumer information.",
    agency: "Federal Trade Commission",
    locator: "§ 682.3",
    excerpt: "Customer Information, 16 CFR part 314 (“Safeguards Rule”), incorporating the proper disposal … information security program",
    in_effect_from: "2016-12-22",
    in_effect_until: null,
    removed: false,
    public_url: "https://www.ecfr.gov/current/title-16/section-682.3"
  }]);
});

test("Gazette search and notice pages yield notice ID, type, date, code and text", () => {
  const search = { entry: [{
    id: "https://www.thegazette.co.uk/id/notice/L-58635-471825",
    "f:notice-code": "2431",
    title: "Resolutions for Winding-up",
    published: "2008-03-10T00:00:00",
    category: [{ "@term": "Resolutions for Winding-up" }],
    content: '<div><p><em class="highlight">CARILLION</em> AMT LIMITED …</p></div>'
  }] };
  assert.deepEqual(parseGazetteSearch(search, 5), [{
    notice_id: "L-58635-471825",
    notice_type: "Resolutions for Winding-up",
    notice_code: "2431",
    published: "2008-03-10",
    excerpt: "CARILLION AMT LIMITED …",
    categories: ["Resolutions for Winding-up"],
    public_url: "https://www.thegazette.co.uk/notice/L-58635-471825"
  }]);
  const html = `<html><head><title>Resolutions for Winding-up | The Gazette</title></head><body>
    <dd about="x" content="2008-03-10" property="gaz:hasPublicationDate dc:issued"></dd>
    <dd about="x" datatype="integer" property="gaz:hasNoticeCode">2431</dd>
    <article class="notice"><div class="content"><h5 data-gazettes="h5">CARILLION AMT LIMITED</h5> <p data-gazettes="text">(Company Number 02593821)</p> <p>Resolved to wind up.</p></div></article></body></html>`;
  assert.deepEqual(parseGazetteNoticeHtml(html), {
    notice_type: "Resolutions for Winding-up",
    published: "2008-03-10",
    notice_code: "2431",
    text: "CARILLION AMT LIMITED\n(Company Number 02593821)\nResolved to wind up."
  });
});

test("MCP handshake lists only bounded read-only legal-research tools", async () => {
  const child = spawn(process.execPath, [new URL("./legal-research-server.mjs", import.meta.url).pathname], { stdio: ["pipe", "pipe", "pipe"] });
  const output = [];
  child.stdout.setEncoding("utf8");
  child.stdout.on("data", chunk => output.push(chunk));
  child.stdin.write(`${JSON.stringify({ jsonrpc: "2.0", id: 1, method: "initialize", params: { protocolVersion: "2025-06-18" } })}\n`);
  child.stdin.write(`${JSON.stringify({ jsonrpc: "2.0", id: 2, method: "tools/list", params: {} })}\n`);
  child.stdin.end();
  await new Promise((resolve, reject) => {
    child.once("exit", code => code === 0 ? resolve() : reject(new Error(`server exited ${code}`)));
    child.once("error", reject);
  });
  const messages = output.join("").trim().split("\n").map(line => JSON.parse(line));
  assert.equal(messages[0].result.serverInfo.name, "legal-ai-skills-legal-research");
  assert.deepEqual(messages[1].result.tools.map(tool => tool.name), [
    "search_us_federal_register",
    "get_us_federal_register_document",
    "search_us_rulemaking",
    "get_us_rulemaking_record",
    "search_uk_legislation",
    "get_uk_legislation_text",
    "search_uk_case_law",
    "get_uk_case_law_judgment",
    "search_us_ecfr",
    "get_us_ecfr_text",
    "search_uk_gazette_notices",
    "get_uk_gazette_notice"
  ]);
  assert.equal(messages[1].result.tools.some(tool => /submit|post comment/i.test(tool.name)), false);
});
