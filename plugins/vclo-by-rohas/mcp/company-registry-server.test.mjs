import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { test } from "node:test";
import {
  filterSecTickerRecords,
  formatGleifRecord,
  formatSecFilings,
  formatSecSearchRecord,
  resolveAutoSources,
  secUserAgent
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

test("SEC search treats numeric input as an exact CIK and deduplicates issuers", () => {
  const tickers = {
    0: { cik_str: 1, ticker: "ONE", title: "One Holdings" },
    1: { cik_str: 10, ticker: "TEN", title: "Ten Holdings" },
    2: { cik_str: 1, ticker: "ONE.A", title: "One Holdings" }
  };

  const numeric = filterSecTickerRecords(tickers, "1", 10);
  assert.equal(numeric.total_results, 1);
  assert.equal(numeric.results[0].cik, "0000000001");
  assert.deepEqual(numeric.results[0].tickers, ["ONE", "ONE.A"]);

  const alternateTicker = filterSecTickerRecords(tickers, "one.a", 10);
  assert.equal(alternateTicker.total_results, 1);
  assert.equal(alternateTicker.results[0].cik, "0000000001");
});

test("SEC user agent has no hardcoded personal email and permits an override", () => {
  assert.match(secUserAgent(""), /^vCLO-by-Rohas\/2\.1\.1/);
  assert.equal(secUserAgent("Example Legal legal@example.test"), "Example Legal legal@example.test");
  assert.doesNotMatch(secUserAgent(""), /rohasnagpal@gmail\.com/);
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
