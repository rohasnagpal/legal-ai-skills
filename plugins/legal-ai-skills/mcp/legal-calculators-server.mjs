#!/usr/bin/env node

// Deterministic legal calculators: deadlines, periods between dates and
// interest. Local only, no network access, no dependencies. The calculators
// know no law: every rule (period, counting convention, rate, day-count basis,
// holidays) is supplied by the caller and echoed back with the working.

import readline from "node:readline";
import { pathToFileURL } from "node:url";

const VERSION = "4.1.1";
const DAY_MS = 86400000;
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const RATE_SCALE = 1000000n;

const nonWorkingSchema = {
  type: "object",
  description: "Days that are not working days. Supply the court's or authority's own closures; none are built in.",
  properties: {
    weekend_days: { type: "array", items: { type: "integer", minimum: 0, maximum: 6 }, description: "0 = Sunday … 6 = Saturday." },
    holidays: { type: "array", items: { type: "string", pattern: "^\\d{4}-\\d{2}-\\d{2}$" } }
  },
  additionalProperties: false
};

const TOOLS = [
  {
    name: "calculate_deadline",
    description: "Compute a deadline from a trigger date and a period, using only the counting rule supplied (exclude or include the trigger day, or clear days), with optional working-day counting and adjustment when the deadline falls on a non-working day. Shows every step. It does not know any statutory period or holiday: supply them, with their source in basis.",
    inputSchema: {
      type: "object",
      properties: {
        trigger_date: { type: "string", pattern: "^\\d{4}-\\d{2}-\\d{2}$", description: "The event that starts the period, for example the date the return memo was received." },
        trigger_event: { type: "string", description: "What the trigger date is, for the record." },
        amount: { type: "integer", minimum: 0, maximum: 36500 },
        unit: { type: "string", enum: ["days", "working_days", "weeks", "months", "years"] },
        direction: { type: "string", enum: ["after", "before"], default: "after" },
        counting: { type: "string", enum: ["exclude_trigger_day", "include_trigger_day", "clear_days"], description: "exclude_trigger_day: the period starts the day after the trigger. include_trigger_day: the trigger day counts as day one. clear_days: neither the trigger day nor the deadline day counts (days and working_days only)." },
        non_working: nonWorkingSchema,
        if_non_working: { type: "string", enum: ["next_working_day", "previous_working_day", "no_adjustment"], default: "no_adjustment", description: "What to do if the computed deadline falls on a non-working day." },
        basis: { type: "string", description: "The rule applied and its source, for example 'Notice within 30 days of receipt of the return memo; period confirmed by India Counsel'." }
      },
      required: ["trigger_date", "amount", "unit", "counting"],
      additionalProperties: false
    }
  },
  {
    name: "calculate_period_between",
    description: "Count the days, and the years, months and days, between two dates, with the counting convention stated. Use for delay periods, length of service, or whether an act was within time.",
    inputSchema: {
      type: "object",
      properties: {
        start_date: { type: "string", pattern: "^\\d{4}-\\d{2}-\\d{2}$" },
        end_date: { type: "string", pattern: "^\\d{4}-\\d{2}-\\d{2}$" },
        counting: { type: "string", enum: ["exclude_start_day", "include_both_days"], default: "exclude_start_day" },
        non_working: nonWorkingSchema,
        basis: { type: "string" }
      },
      required: ["start_date", "end_date"],
      additionalProperties: false
    }
  },
  {
    name: "calculate_interest",
    description: "Compute simple or compound interest on one or more amounts (for example each instalment paid) from each amount's date to an end date, at a supplied rate or rate schedule and day-count basis. Money is computed in exact minor units (paise, cents or pence); the rounding rule is stated. It does not know any statutory or contractual rate: supply it, with its source in basis.",
    inputSchema: {
      type: "object",
      properties: {
        entries: {
          type: "array",
          minItems: 1,
          maxItems: 500,
          items: {
            type: "object",
            properties: {
              date: { type: "string", pattern: "^\\d{4}-\\d{2}-\\d{2}$", description: "Date from which interest runs on this amount." },
              amount: { type: "string", pattern: "^\\d+(\\.\\d+)?$", description: "Amount in major units as a decimal string, for example \"125000.50\"." },
              label: { type: "string" }
            },
            required: ["date", "amount"],
            additionalProperties: false
          }
        },
        end_date: { type: "string", pattern: "^\\d{4}-\\d{2}-\\d{2}$" },
        rate_percent_per_annum: { type: "string", pattern: "^\\d+(\\.\\d+)?$", description: "Single annual rate, for example \"10.75\". Use rate_schedule instead when the rate changes." },
        rate_schedule: {
          type: "array",
          description: "Rates that change over time (simple interest only). Each rate applies from its from_date until the next entry.",
          items: {
            type: "object",
            properties: {
              from_date: { type: "string", pattern: "^\\d{4}-\\d{2}-\\d{2}$" },
              rate_percent_per_annum: { type: "string", pattern: "^\\d+(\\.\\d+)?$" }
            },
            required: ["from_date", "rate_percent_per_annum"],
            additionalProperties: false
          }
        },
        method: { type: "string", enum: ["simple", "compound"] },
        compounding: { type: "string", enum: ["monthly", "quarterly", "half_yearly", "annually"], description: "Required for compound interest." },
        day_count: { type: "string", enum: ["actual_365", "actual_360", "30e_360"], default: "actual_365" },
        currency: { type: "string", default: "" },
        minor_units: { type: "integer", minimum: 0, maximum: 3, default: 2 },
        basis: { type: "string", description: "The rate, method and source, for example 'SBI MCLR + 2% under State RERA rules, rate confirmed by India Counsel'." }
      },
      required: ["entries", "end_date", "method"],
      additionalProperties: false
    }
  }
];

// ---- Dates (calendar dates only; no time zones) ----

export function parseDate(value, field = "date") {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ""));
  if (!match) throw new Error(`${field} must be a date in YYYY-MM-DD form.`);
  const [year, month, day] = match.slice(1).map(Number);
  const serial = Date.UTC(year, month - 1, day) / DAY_MS;
  const check = fromSerial(serial);
  if (check.year !== year || check.month !== month || check.day !== day) throw new Error(`${field} ${value} is not a real calendar date.`);
  return serial;
}

function fromSerial(serial) {
  const date = new Date(serial * DAY_MS);
  return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate(), weekday: date.getUTCDay() };
}

export function formatDate(serial) {
  const { year, month, day } = fromSerial(serial);
  return `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function describe(serial) {
  return `${formatDate(serial)} (${WEEKDAYS[fromSerial(serial).weekday]})`;
}

function daysInMonth(year, month) {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

// Add calendar months. If the target month is shorter, use its last day.
function addMonths(serial, months) {
  const { year, month, day } = fromSerial(serial);
  const index = year * 12 + (month - 1) + months;
  const targetYear = Math.floor(index / 12);
  const targetMonth = (index % 12) + 1;
  const lastDay = daysInMonth(targetYear, targetMonth);
  const targetDay = Math.min(day, lastDay);
  return { serial: Date.UTC(targetYear, targetMonth - 1, targetDay) / DAY_MS, clamped: targetDay !== day };
}

function nonWorkingChecker(nonWorking = {}) {
  const weekendDays = new Set((nonWorking.weekend_days || []).map(Number));
  const holidays = new Set((nonWorking.holidays || []).map((value, index) => formatDate(parseDate(value, `holidays[${index}]`))));
  const supplied = weekendDays.size > 0 || holidays.size > 0;
  const reason = serial => {
    if (holidays.has(formatDate(serial))) return "holiday supplied";
    if (weekendDays.has(fromSerial(serial).weekday)) return `${WEEKDAYS[fromSerial(serial).weekday]} is a supplied non-working day`;
    return null;
  };
  return { supplied, reason, isWorking: serial => reason(serial) === null };
}

export function calculateDeadline(args) {
  const trigger = parseDate(args.trigger_date, "trigger_date");
  const amount = Number(args.amount);
  if (!Number.isInteger(amount) || amount < 0) throw new Error("amount must be a whole number of units, zero or more.");
  const unit = args.unit;
  const direction = args.direction || "after";
  const sign = direction === "before" ? -1 : 1;
  const counting = args.counting;
  if (!["exclude_trigger_day", "include_trigger_day", "clear_days"].includes(counting)) throw new Error("counting must be exclude_trigger_day, include_trigger_day or clear_days.");
  if (counting === "clear_days" && !["days", "working_days"].includes(unit)) throw new Error("clear_days counting applies only to days or working_days.");
  const calendar = nonWorkingChecker(args.non_working);
  if (unit === "working_days" && !calendar.supplied) throw new Error("working_days counting needs non_working days (weekend_days and/or holidays).");

  const steps = [`Trigger: ${describe(trigger)}${args.trigger_event ? ` — ${args.trigger_event}` : ""}.`];
  const warnings = [];
  let deadline;

  if (unit === "days" || unit === "weeks") {
    const days = unit === "weeks" ? amount * 7 : amount;
    if (unit === "weeks") steps.push(`${amount} weeks = ${days} days.`);
    let offset = days;
    if (counting === "include_trigger_day") offset = Math.max(days - 1, 0);
    if (counting === "clear_days") offset = days + 1;
    deadline = trigger + sign * offset;
    const rule = {
      exclude_trigger_day: `the trigger day is excluded, so day 1 is ${direction === "after" ? "the day after" : "the day before"} the trigger`,
      include_trigger_day: "the trigger day counts as day 1",
      clear_days: "neither the trigger day nor the deadline day counts (clear days)"
    }[counting];
    steps.push(`Counting rule: ${rule}. ${direction === "after" ? "Add" : "Subtract"} ${offset} calendar day${offset === 1 ? "" : "s"}: ${describe(deadline)}.`);
  } else if (unit === "working_days") {
    let needed = counting === "clear_days" ? amount + 1 : amount;
    let cursor = trigger;
    if (counting === "include_trigger_day" && calendar.isWorking(trigger) && needed > 0) needed -= 1;
    const skipped = [];
    while (needed > 0) {
      cursor += sign;
      const why = calendar.reason(cursor);
      if (why) skipped.push(`${formatDate(cursor)} (${why})`);
      else needed -= 1;
    }
    deadline = cursor;
    steps.push(`Counted ${amount} working day${amount === 1 ? "" : "s"} ${direction} the trigger using the ${counting.replaceAll("_", " ")} rule.`);
    if (skipped.length) steps.push(`Skipped non-working days: ${skipped.join(", ")}.`);
    steps.push(`Result: ${describe(deadline)}.`);
  } else if (unit === "months" || unit === "years") {
    const months = unit === "years" ? amount * 12 : amount;
    const moved = addMonths(trigger, sign * months);
    steps.push(`${direction === "after" ? "Add" : "Subtract"} ${amount} ${unit === "years" ? `year${amount === 1 ? "" : "s"} (${months} months)` : `month${amount === 1 ? "" : "s"}`} to the trigger date: ${describe(moved.serial)}.`);
    if (moved.clamped) steps.push("The target month has no matching day, so the last day of that month is used.");
    deadline = moved.serial;
    if (counting === "include_trigger_day") {
      deadline -= sign;
      steps.push(`The trigger day counts as part of the period, so the period ends one day earlier: ${describe(deadline)}.`);
    } else {
      steps.push("The trigger day is excluded, so the period ends on the corresponding date.");
    }
  } else {
    throw new Error("unit must be days, working_days, weeks, months or years.");
  }

  const policy = args.if_non_working || "no_adjustment";
  const landing = calendar.reason(deadline);
  let adjusted = deadline;
  if (landing && policy !== "no_adjustment") {
    const step = policy === "next_working_day" ? 1 : -1;
    const passed = [];
    while (!calendar.isWorking(adjusted)) {
      passed.push(formatDate(adjusted));
      adjusted += step;
    }
    steps.push(`The deadline falls on a non-working day (${landing}); moved to the ${policy === "next_working_day" ? "next" : "previous"} working day: ${describe(adjusted)}.`);
  } else if (landing) {
    warnings.push(`The deadline falls on a non-working day (${landing}) and no adjustment was requested. Confirm whether the applicable rule moves it.`);
  }
  if (!calendar.supplied) warnings.push("No weekends or holidays were supplied, so no non-working days were considered. Supply the court's or authority's closures if they matter.");
  if (!args.basis) warnings.push("No basis was supplied. State the rule and its source before relying on this date.");

  return {
    calculation: "deadline",
    trigger_date: formatDate(trigger),
    period: { amount, unit, direction, counting },
    deadline: formatDate(adjusted),
    deadline_weekday: WEEKDAYS[fromSerial(adjusted).weekday],
    unadjusted_deadline: formatDate(deadline),
    steps,
    warnings,
    basis: args.basis || null,
    verification: "Arithmetic only. The period, counting rule and non-working days are as supplied and must be verified against the applicable law.",
    local_only: true
  };
}

export function calculatePeriodBetween(args) {
  const start = parseDate(args.start_date, "start_date");
  const end = parseDate(args.end_date, "end_date");
  if (end < start) throw new Error("end_date is before start_date.");
  const counting = args.counting || "exclude_start_day";
  const days = end - start + (counting === "include_both_days" ? 1 : 0);

  let months = 0;
  while (addMonths(start, months + 1).serial <= end) months += 1;
  const anchor = addMonths(start, months).serial;
  const remainder = end - anchor;
  const breakdown = { years: Math.floor(months / 12), months: months % 12, days: remainder };

  const calendar = nonWorkingChecker(args.non_working);
  let workingDays = null;
  if (calendar.supplied) {
    workingDays = 0;
    const first = counting === "include_both_days" ? start : start + 1;
    for (let serial = first; serial <= end; serial += 1) if (calendar.isWorking(serial)) workingDays += 1;
  }

  return {
    calculation: "period_between",
    start_date: formatDate(start),
    end_date: formatDate(end),
    counting,
    days,
    working_days: workingDays,
    years_months_days: breakdown,
    steps: [
      `From ${describe(start)} to ${describe(end)}.`,
      counting === "include_both_days" ? `Both days counted: ${days} days.` : `Start day excluded, end day included: ${days} days.`,
      `As whole calendar periods: ${breakdown.years} year(s), ${breakdown.months} month(s) and ${breakdown.days} day(s) from the start date.`
    ],
    basis: args.basis || null,
    verification: "Arithmetic only. Confirm the counting convention required by the applicable law.",
    local_only: true
  };
}

// ---- Money (exact integer minor units) ----

function decimalToScaled(value, scale, field) {
  const match = /^(\d+)(?:\.(\d+))?$/.exec(String(value || ""));
  if (!match) throw new Error(`${field} must be a non-negative decimal string, for example "1250.50".`);
  const digits = Number(scale.toString().length - 1);
  const fraction = match[2] || "";
  if (fraction.length > digits) throw new Error(`${field} has more than ${digits} decimal places.`);
  return BigInt(match[1]) * scale + BigInt((fraction + "0".repeat(digits)).slice(0, digits) || "0");
}

function roundHalfUp(numerator, denominator) {
  if (denominator <= 0n) throw new Error("Invalid denominator.");
  return (numerator * 2n + denominator) / (denominator * 2n);
}

function formatMinor(minor, minorUnits) {
  const negative = minor < 0n;
  const absolute = negative ? -minor : minor;
  if (minorUnits === 0) return `${negative ? "-" : ""}${absolute}`;
  const scale = 10n ** BigInt(minorUnits);
  return `${negative ? "-" : ""}${absolute / scale}.${(absolute % scale).toString().padStart(minorUnits, "0")}`;
}

function dayCount(startSerial, endSerial, convention) {
  if (convention === "30e_360") {
    const a = fromSerial(startSerial);
    const b = fromSerial(endSerial);
    const d1 = Math.min(a.day, 30);
    const d2 = Math.min(b.day, 30);
    return 360 * (b.year - a.year) + 30 * (b.month - a.month) + (d2 - d1);
  }
  return endSerial - startSerial;
}

const YEAR_BASIS = { actual_365: 365n, actual_360: 360n, "30e_360": 360n };
const COMPOUNDING_MONTHS = { monthly: 1, quarterly: 3, half_yearly: 6, annually: 12 };

function rateSegments(args, start, end) {
  if (args.rate_schedule && args.rate_percent_per_annum) throw new Error("Supply either rate_percent_per_annum or rate_schedule, not both.");
  if (!args.rate_schedule) {
    if (!args.rate_percent_per_annum) throw new Error("Supply rate_percent_per_annum or rate_schedule.");
    return [{ from: start, to: end, rate: decimalToScaled(args.rate_percent_per_annum, RATE_SCALE, "rate_percent_per_annum"), label: args.rate_percent_per_annum }];
  }
  const schedule = args.rate_schedule
    .map((row, index) => ({ from: parseDate(row.from_date, `rate_schedule[${index}].from_date`), rate: decimalToScaled(row.rate_percent_per_annum, RATE_SCALE, `rate_schedule[${index}].rate_percent_per_annum`), label: row.rate_percent_per_annum }))
    .sort((a, b) => a.from - b.from);
  if (schedule[0].from > start) throw new Error(`The rate schedule starts on ${formatDate(schedule[0].from)}, after interest begins on ${formatDate(start)}. Supply a rate for the earlier period.`);
  const segments = [];
  schedule.forEach((row, index) => {
    const segmentStart = Math.max(row.from, start);
    const segmentEnd = Math.min(index + 1 < schedule.length ? schedule[index + 1].from : end, end);
    if (segmentEnd > segmentStart) segments.push({ from: segmentStart, to: segmentEnd, rate: row.rate, label: row.label });
  });
  return segments;
}

export function calculateInterest(args) {
  const end = parseDate(args.end_date, "end_date");
  const minorUnits = args.minor_units ?? 2;
  if (!Number.isInteger(minorUnits) || minorUnits < 0 || minorUnits > 3) throw new Error("minor_units must be 0, 1, 2 or 3.");
  const moneyScale = 10n ** BigInt(minorUnits);
  const convention = args.day_count || "actual_365";
  const yearBasis = YEAR_BASIS[convention];
  if (!yearBasis) throw new Error("day_count must be actual_365, actual_360 or 30e_360.");
  const method = args.method;
  if (!["simple", "compound"].includes(method)) throw new Error("method must be simple or compound.");
  if (method === "compound" && !COMPOUNDING_MONTHS[args.compounding]) throw new Error("compound interest needs compounding: monthly, quarterly, half_yearly or annually.");
  if (method === "compound" && args.rate_schedule) throw new Error("A rate schedule is supported for simple interest only. Split the calculation at each rate change, or use simple interest.");
  if (!Array.isArray(args.entries) || args.entries.length === 0) throw new Error("entries must list at least one amount and date.");

  const currency = args.currency ? `${args.currency} ` : "";
  const rows = [];
  const warnings = [];
  let totalPrincipal = 0n;
  let totalInterest = 0n;

  // Simple interest is summed exactly and rounded once per entry; the total is
  // the sum of the exact amounts, rounded once.
  const simpleDenominator = RATE_SCALE * 100n * yearBasis;
  let exactSimpleNumerator = 0n;

  args.entries.forEach((entry, index) => {
    const start = parseDate(entry.date, `entries[${index}].date`);
    const principal = decimalToScaled(entry.amount, moneyScale, `entries[${index}].amount`);
    totalPrincipal += principal;
    const label = entry.label || `Entry ${index + 1}`;
    if (start >= end) {
      warnings.push(`${label}: date ${formatDate(start)} is on or after the end date, so no interest accrues.`);
      rows.push({ label, date: formatDate(start), amount: formatMinor(principal, minorUnits), days: 0, interest: formatMinor(0n, minorUnits), working: "No interest: date is not before the end date." });
      return;
    }

    if (method === "simple") {
      let numerator = 0n;
      const parts = [];
      let totalDays = 0;
      for (const segment of rateSegments(args, start, end)) {
        const days = dayCount(segment.from, segment.to, convention);
        totalDays += days;
        numerator += principal * segment.rate * BigInt(days);
        parts.push(`${days} days at ${segment.label}% (${formatDate(segment.from)} to ${formatDate(segment.to)})`);
      }
      exactSimpleNumerator += numerator;
      const interest = roundHalfUp(numerator, simpleDenominator);
      rows.push({
        label, date: formatDate(start), amount: formatMinor(principal, minorUnits), days: totalDays,
        interest: formatMinor(interest, minorUnits),
        working: `${currency}${formatMinor(principal, minorUnits)} × rate × days ÷ ${yearBasis}: ${parts.join("; ")}.`
      });
      return;
    }

    // Compound: whole compounding periods from the entry date, then simple
    // interest on the compounded balance for the remaining stub period. The
    // balance is rounded half-up to the minor unit at each compounding date.
    const [segment] = rateSegments(args, start, end);
    const periodMonths = COMPOUNDING_MONTHS[args.compounding];
    const periodsPerYear = BigInt(12 / periodMonths);
    let balance = principal;
    let periodStart = start;
    let periods = 0;
    for (;;) {
      const next = addMonths(start, (periods + 1) * periodMonths).serial;
      if (next > end) break;
      balance += roundHalfUp(balance * segment.rate, RATE_SCALE * 100n * periodsPerYear);
      periodStart = next;
      periods += 1;
    }
    const stubDays = dayCount(periodStart, end, convention);
    const stubInterest = roundHalfUp(balance * segment.rate * BigInt(stubDays), simpleDenominator);
    balance += stubInterest;
    const interest = balance - principal;
    totalInterest += interest;
    rows.push({
      label, date: formatDate(start), amount: formatMinor(principal, minorUnits), days: dayCount(start, end, convention),
      interest: formatMinor(interest, minorUnits),
      working: `${periods} full ${args.compounding.replace("_", "-")} period(s) at ${segment.label}% ÷ ${periodsPerYear} per period, then ${stubDays} days of simple interest on the compounded balance (÷ ${yearBasis}).`
    });
  });

  if (method === "simple") totalInterest = roundHalfUp(exactSimpleNumerator, simpleDenominator);
  if (!args.basis) warnings.push("No basis was supplied. State the rate, its source and the method before relying on this figure.");

  return {
    calculation: "interest",
    method,
    compounding: method === "compound" ? args.compounding : null,
    day_count: convention,
    end_date: formatDate(end),
    currency: args.currency || null,
    rows,
    totals: {
      principal: formatMinor(totalPrincipal, minorUnits),
      interest: formatMinor(totalInterest, minorUnits),
      principal_plus_interest: formatMinor(totalPrincipal + totalInterest, minorUnits)
    },
    rounding: method === "simple"
      ? "Each row is rounded half-up to the minor unit for display. The total interest is computed exactly and rounded once, so it may differ from the sum of the rows by a minor unit."
      : "The balance is rounded half-up to the minor unit at each compounding date and at the end.",
    day_count_note: {
      actual_365: "Actual days elapsed, from the day after each date up to and including the end date, divided by 365 (including in leap years).",
      actual_360: "Actual days elapsed divided by 360.",
      "30e_360": "Each month treated as 30 days (European 30/360) divided by 360."
    }[convention],
    warnings,
    basis: args.basis || null,
    verification: "Arithmetic only. The rate, method and day-count basis are as supplied and must be verified against the applicable law or contract.",
    local_only: true
  };
}

export async function callTool(name, args = {}) {
  if (name === "calculate_deadline") return calculateDeadline(args);
  if (name === "calculate_period_between") return calculatePeriodBetween(args);
  if (name === "calculate_interest") return calculateInterest(args);
  throw new Error(`Unknown tool: ${name}`);
}

// ---- MCP over stdio ----

function send(payload) {
  process.stdout.write(`${JSON.stringify(payload)}\n`);
}

async function handleMessage(message) {
  if (!message || message.jsonrpc !== "2.0") return;
  if (message.method === "notifications/initialized" || message.method === "notifications/cancelled") return;
  if (message.id === undefined) return;
  if (message.method === "initialize") {
    send({ jsonrpc: "2.0", id: message.id, result: {
      protocolVersion: message.params?.protocolVersion || "2025-06-18",
      capabilities: { tools: { listChanged: false } },
      serverInfo: { name: "legal-ai-skills-legal-calculators", version: VERSION }
    } });
    return;
  }
  if (message.method === "ping") {
    send({ jsonrpc: "2.0", id: message.id, result: {} });
    return;
  }
  if (message.method === "tools/list") {
    send({ jsonrpc: "2.0", id: message.id, result: { tools: TOOLS } });
    return;
  }
  if (message.method === "tools/call") {
    try {
      const result = await callTool(message.params?.name, message.params?.arguments || {});
      send({ jsonrpc: "2.0", id: message.id, result: {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        structuredContent: result,
        isError: false
      } });
    } catch (error) {
      send({ jsonrpc: "2.0", id: message.id, result: {
        content: [{ type: "text", text: error?.message || String(error) }],
        isError: true
      } });
    }
    return;
  }
  send({ jsonrpc: "2.0", id: message.id, error: { code: -32601, message: `Method not found: ${message.method}` } });
}

export function startServer() {
  const input = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
  input.on("line", line => {
    if (!line.trim()) return;
    let message;
    try {
      message = JSON.parse(line);
    } catch {
      send({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } });
      return;
    }
    handleMessage(message).catch(error => {
      if (message.id !== undefined) send({ jsonrpc: "2.0", id: message.id, error: { code: -32603, message: error?.message || String(error) } });
    });
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) startServer();
