import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { test } from "node:test";

test("Claude hook matches all CourtListener alert-writing tools", async () => {
  const hooks = JSON.parse(await readFile(new URL("./hooks.json", import.meta.url), "utf8"));
  const matcher = new RegExp(hooks.hooks.PreToolUse[0].matcher);
  for (const tool of [
    "create_search_alert",
    "delete_search_alert",
    "subscribe_to_docket_alert",
    "unsubscribe_from_docket_alert"
  ]) {
    assert.equal(matcher.test(`mcp__plugin_vclo-by-rohas_courtlistener__${tool}`), true);
  }
  assert.equal(matcher.test("mcp__plugin_vclo-by-rohas_courtlistener__search"), false);
});

test("Claude hook denies a matched CourtListener alert call", async () => {
  const child = spawn(process.execPath, [new URL("./block-courtlistener-alerts.mjs", import.meta.url).pathname], {
    stdio: ["ignore", "pipe", "pipe"]
  });
  const output = [];
  child.stdout.setEncoding("utf8");
  child.stdout.on("data", chunk => output.push(chunk));
  await new Promise((resolve, reject) => {
    child.once("exit", code => code === 0 ? resolve() : reject(new Error(`hook exited ${code}`)));
    child.once("error", reject);
  });
  const result = JSON.parse(output.join(""));
  assert.equal(result.hookSpecificOutput.hookEventName, "PreToolUse");
  assert.equal(result.hookSpecificOutput.permissionDecision, "deny");
});
