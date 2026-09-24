import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { test } from "node:test";
import { normalizeOfficialPath, parseAtomFeed } from "./legal-research-server.mjs";

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
  assert.equal(messages[0].result.serverInfo.name, "vclo-legal-research");
  assert.deepEqual(messages[1].result.tools.map(tool => tool.name), [
    "search_us_federal_register",
    "get_us_federal_register_document",
    "search_us_rulemaking",
    "get_us_rulemaking_record",
    "search_uk_legislation",
    "get_uk_legislation_text",
    "search_uk_case_law",
    "get_uk_case_law_judgment"
  ]);
  assert.equal(messages[1].result.tools.some(tool => /submit|post comment/i.test(tool.name)), false);
});
