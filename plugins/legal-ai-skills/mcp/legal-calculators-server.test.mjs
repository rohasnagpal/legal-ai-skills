import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { test } from "node:test";
import { calculateDeadline, calculateInterest, calculatePeriodBetween } from "./legal-calculators-server.mjs";

const deadline = args => calculateDeadline(args).deadline;

test("deadline counting conventions are applied exactly as supplied", () => {
  assert.equal(deadline({ trigger_date: "2026-09-02", amount: 30, unit: "days", counting: "exclude_trigger_day" }), "2026-10-02");
  assert.equal(deadline({ trigger_date: "2026-09-02", amount: 30, unit: "days", counting: "include_trigger_day" }), "2026-10-01");
  assert.equal(deadline({ trigger_date: "2026-09-02", amount: 3, unit: "days", counting: "clear_days" }), "2026-09-06");
  assert.equal(deadline({ trigger_date: "2026-12-31", amount: 30, unit: "days", direction: "before", counting: "exclude_trigger_day" }), "2026-12-01");
});

test("month and year periods handle month ends and leap years", () => {
  assert.equal(deadline({ trigger_date: "2026-01-31", amount: 1, unit: "months", counting: "exclude_trigger_day" }), "2026-02-28");
  assert.equal(deadline({ trigger_date: "2028-01-31", amount: 1, unit: "months", counting: "exclude_trigger_day" }), "2028-02-29");
  assert.equal(deadline({ trigger_date: "2023-03-15", amount: 3, unit: "years", counting: "exclude_trigger_day" }), "2026-03-15");
  assert.equal(deadline({ trigger_date: "2026-03-01", amount: 1, unit: "months", counting: "include_trigger_day" }), "2026-03-31");
});

test("non-working days move or flag the deadline only as instructed", () => {
  const rolled = calculateDeadline({ trigger_date: "2026-09-03", amount: 30, unit: "days", counting: "exclude_trigger_day", non_working: { weekend_days: [0, 6] }, if_non_working: "next_working_day" });
  assert.equal(rolled.unadjusted_deadline, "2026-10-03");
  assert.equal(rolled.deadline, "2026-10-05");
  assert.equal(rolled.deadline_weekday, "Monday");
  assert.equal(deadline({ trigger_date: "2026-09-01", amount: 1, unit: "days", counting: "exclude_trigger_day", non_working: { weekend_days: [0, 6], holidays: ["2026-09-02"] }, if_non_working: "next_working_day" }), "2026-09-03");
  assert.equal(deadline({ trigger_date: "2026-10-09", amount: 5, unit: "working_days", counting: "exclude_trigger_day", non_working: { weekend_days: [0, 6] } }), "2026-10-16");
  const flagged = calculateDeadline({ trigger_date: "2026-09-03", amount: 30, unit: "days", counting: "exclude_trigger_day", non_working: { weekend_days: [0, 6] } });
  assert.equal(flagged.deadline, "2026-10-03");
  assert.ok(flagged.warnings.some(warning => /no adjustment was requested/.test(warning)));
  assert.ok(flagged.warnings.some(warning => /No basis was supplied/.test(warning)));
});

test("invalid inputs are rejected rather than guessed", () => {
  assert.throws(() => calculateDeadline({ trigger_date: "2026-02-30", amount: 1, unit: "days", counting: "exclude_trigger_day" }), /not a real calendar date/);
  assert.throws(() => calculateDeadline({ trigger_date: "2026-02-01", amount: 1, unit: "months", counting: "clear_days" }), /clear_days/);
  assert.throws(() => calculateDeadline({ trigger_date: "2026-02-01", amount: 1, unit: "working_days", counting: "exclude_trigger_day" }), /non_working/);
  assert.throws(() => calculateDeadline({ trigger_date: "2026-02-01", amount: 1, unit: "days" }), /counting/);
});

test("periods between dates are counted with the stated convention", () => {
  const period = calculatePeriodBetween({ start_date: "2023-03-31", end_date: "2026-10-09" });
  assert.equal(period.days, 1288);
  assert.deepEqual(period.years_months_days, { years: 3, months: 6, days: 9 });
  assert.equal(calculatePeriodBetween({ start_date: "2026-01-01", end_date: "2026-01-31", counting: "include_both_days" }).days, 31);
  assert.throws(() => calculatePeriodBetween({ start_date: "2026-02-01", end_date: "2026-01-01" }), /before start_date/);
});

test("simple interest is exact in minor units", () => {
  const year = calculateInterest({ entries: [{ date: "2025-01-01", amount: "100000" }], end_date: "2026-01-01", rate_percent_per_annum: "10", method: "simple" });
  assert.deepEqual(year.totals, { principal: "100000.00", interest: "10000.00", principal_plus_interest: "110000.00" });
  assert.equal(calculateInterest({ entries: [{ date: "2026-01-01", amount: "1000" }], end_date: "2026-01-02", rate_percent_per_annum: "10", method: "simple" }).totals.interest, "0.27");
  const instalments = calculateInterest({ entries: [{ date: "2025-01-01", amount: "100000" }, { date: "2025-07-01", amount: "50000" }], end_date: "2026-01-01", rate_percent_per_annum: "10.75", method: "simple" });
  assert.equal(instalments.totals.interest, "13459.59");
  const schedule = calculateInterest({ entries: [{ date: "2025-01-01", amount: "100000" }], end_date: "2026-01-01", rate_schedule: [{ from_date: "2025-01-01", rate_percent_per_annum: "10" }, { from_date: "2025-07-02", rate_percent_per_annum: "12" }], method: "simple" });
  assert.equal(schedule.totals.interest, "11002.74");
  assert.equal(calculateInterest({ entries: [{ date: "2025-01-01", amount: "100000" }], end_date: "2026-01-01", rate_percent_per_annum: "10", method: "simple", minor_units: 0 }).totals.interest, "10000");
  assert.equal(calculateInterest({ entries: [{ date: "2025-01-31", amount: "36000" }], end_date: "2025-03-31", rate_percent_per_annum: "10", method: "simple", day_count: "30e_360" }).rows[0].days, 60);
});

test("compound interest rounds the balance at each compounding date", () => {
  assert.equal(calculateInterest({ entries: [{ date: "2024-01-01", amount: "100000" }], end_date: "2026-01-01", rate_percent_per_annum: "10", method: "compound", compounding: "annually" }).totals.interest, "21000.00");
  assert.equal(calculateInterest({ entries: [{ date: "2025-01-01", amount: "100000" }], end_date: "2026-01-01", rate_percent_per_annum: "12", method: "compound", compounding: "monthly" }).totals.interest, "12682.51");
  assert.throws(() => calculateInterest({ entries: [{ date: "2025-01-01", amount: "1" }], end_date: "2026-01-01", rate_schedule: [{ from_date: "2025-01-01", rate_percent_per_annum: "1" }], method: "compound", compounding: "monthly" }), /simple interest only/);
  assert.throws(() => calculateInterest({ entries: [{ date: "2025-01-01", amount: "1" }], end_date: "2026-01-01", rate_schedule: [{ from_date: "2025-02-01", rate_percent_per_annum: "1" }], method: "simple" }), /earlier period/);
  assert.throws(() => calculateInterest({ entries: [{ date: "2025-01-01", amount: "1.234" }], end_date: "2026-01-01", rate_percent_per_annum: "1", method: "simple" }), /decimal places/);
});

test("MCP stdio handshake lists the calculators and runs one", async () => {
  const child = spawn(process.execPath, [new URL("./legal-calculators-server.mjs", import.meta.url).pathname], { stdio: ["pipe", "pipe", "pipe"] });
  const output = [];
  child.stdout.setEncoding("utf8");
  child.stdout.on("data", chunk => output.push(chunk));
  child.stdin.write(`${JSON.stringify({ jsonrpc: "2.0", id: 1, method: "initialize", params: { protocolVersion: "2025-06-18" } })}\n`);
  child.stdin.write(`${JSON.stringify({ jsonrpc: "2.0", id: 2, method: "tools/list", params: {} })}\n`);
  child.stdin.write(`${JSON.stringify({ jsonrpc: "2.0", id: 3, method: "tools/call", params: { name: "calculate_deadline", arguments: { trigger_date: "2026-09-02", amount: 30, unit: "days", counting: "exclude_trigger_day" } } })}\n`);
  child.stdin.end();
  await new Promise((resolve, reject) => {
    child.once("exit", code => code === 0 ? resolve() : reject(new Error(`server exited ${code}`)));
    child.once("error", reject);
  });
  const messages = output.join("").trim().split("\n").map(line => JSON.parse(line));
  assert.equal(messages[0].result.serverInfo.name, "legal-ai-skills-legal-calculators");
  assert.deepEqual(messages[1].result.tools.map(tool => tool.name), ["calculate_deadline", "calculate_period_between", "calculate_interest"]);
  assert.equal(messages[2].result.structuredContent.deadline, "2026-10-02");
});
