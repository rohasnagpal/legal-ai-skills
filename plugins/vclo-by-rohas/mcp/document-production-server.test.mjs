import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { test } from "node:test";
import { listTemplates, resolveToolchain } from "./document-production-server.mjs";

test("toolchain status distinguishes bundled adapter from installed engines", async () => {
  const status = await resolveToolchain({ PATH: "" });
  assert.equal(status.local_only, true);
  assert.equal(status.capabilities.bundled_templates, true);
  assert.equal(status.capabilities.docx_and_pdf_conversion, false);
  assert.equal(status.capabilities.ocr, false);
  assert.equal(status.capabilities.pdf_assembly, false);
});

test("bundled legal templates are discoverable", async () => {
  const templates = await listTemplates();
  const names = templates.map(template => template.name);
  assert.ok(names.includes("legal-matter-summary-template"));
  assert.ok(names.includes("litigation-viability-report-template"));
  assert.ok(names.includes("verification-status-template"));
  assert.equal(templates.find(template => template.name === "litigation-viability-report-template").format, "html");
});

test("MCP stdio handshake lists document-production tools", async () => {
  const child = spawn(process.execPath, [new URL("./document-production-server.mjs", import.meta.url).pathname], {
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
  assert.equal(messages[0].result.serverInfo.name, "vclo-document-production");
  assert.deepEqual(messages[1].result.tools.map(tool => tool.name), [
    "get_document_toolchain_status",
    "list_document_templates",
    "convert_document",
    "ocr_pdf",
    "assemble_pdf_bundle"
  ]);
});
