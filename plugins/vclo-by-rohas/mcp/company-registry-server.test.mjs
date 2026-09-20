import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { test } from "node:test";
import {
  formatGleifRecord,
  formatSecFilings,
  formatSecSearchRecord,
  resolveAutoSources
} from "./company-registry-server.mjs";

test("auto source routing respects jurisdiction and UK credentials", () => {
  assert.deepEqual(resolveAutoSources("US", false), ["sec", "gleif"]);
  assert.deepEqual(resolveAutoSources("GB", true), ["companies_house", "gleif"]);
  assert.deepEqual(resolveAutoSources("GB", false), ["gleif"]);
  assert.deepEqual(resolveAutoSources("IN", false), ["gleif"]);
});

test("SEC search and filing records include official locators", () => {
  assert.deepEqual(formatSecSearchRecord({ cik_str: 320193, ticker: "AAPL", title: "Apple Inc." }), {
    cik: "0000320193",
    legal_name: "Apple Inc.",
    ticker: "AAPL",
    submissions_url: "https://data.sec.gov/submissions/CIK0000320193.json"
  });

  const filings = formatSecFilings({
    cik: "320193",
    filings: { recent: {
      accessionNumber: ["0000320193-26-000001"],
      form: ["10-K"],
      filingDate: ["2026-01-01"],
      reportDate: ["2025-12-31"],
      acceptanceDateTime: ["20260101120000"],
      primaryDocument: ["a10-k.htm"],
      primaryDocDescription: ["Annual report"]
    } }
  }, 10);
  assert.equal(filings[0].filing_url, "https://www.sec.gov/Archives/edgar/data/320193/000032019326000001/a10-k.htm");
});

test("GLEIF records retain verification fields", () => {
  const record = formatGleifRecord({ id: "5493001KJTIIGC8Y1R12", attributes: {
    lei: "5493001KJTIIGC8Y1R12",
    entity: { legalName: { name: "Example Ltd" }, jurisdiction: "GB", status: "ACTIVE" },
    registration: { status: "ISSUED", corroborationLevel: "FULLY_CORROBORATED" }
  } });
  assert.equal(record.legal_name, "Example Ltd");
  assert.equal(record.registration_status, "ISSUED");
  assert.equal(record.corroboration_level, "FULLY_CORROBORATED");
});

test("MCP stdio handshake lists the registry tools", async () => {
  const child = spawn(process.execPath, [new URL("./company-registry-server.mjs", import.meta.url).pathname], {
    stdio: ["pipe", "pipe", "pipe"]
  });
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
  assert.equal(messages[0].result.serverInfo.name, "vclo-company-registries");
  assert.deepEqual(messages[1].result.tools.map(tool => tool.name), [
    "search_legal_entities",
    "get_legal_entity_record",
    "list_company_filings",
    "list_uk_company_officers",
    "get_uk_company_control_and_charges"
  ]);
});
