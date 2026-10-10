#!/usr/bin/env node

// Sanctions-list screening against official public lists: US OFAC (SDN and
// non-SDN consolidated), the UK Sanctions List and the UN Security Council
// Consolidated List. The lists are downloaded from the official publishers
// and cached locally; the names being screened never leave the machine.
// A result is a potential match for human review, never a determination.

import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import readline from "node:readline";
import { pathToFileURL } from "node:url";

const VERSION = "4.1.1";
const USER_AGENT = `Legal-AI-Skills-by-Rohas/${VERSION} (+https://github.com/rohasnagpal/legal-ai-skills)`;
const CACHE_DIR = process.env.LEGAL_AI_SANCTIONS_CACHE || path.join(os.tmpdir(), "legal-ai-skills-sanctions");
const DEFAULT_MAX_AGE_HOURS = 24;
const FETCH_TIMEOUT_MS = 120000;

export const SOURCES = {
  ofac_sdn: {
    title: "US OFAC Specially Designated Nationals (SDN) List",
    publisher: "US Department of the Treasury, Office of Foreign Assets Control",
    page: "https://ofac.treasury.gov/specially-designated-nationals-and-blocked-persons-list-sdn-human-readable-lists",
    files: { primary: "https://www.treasury.gov/ofac/downloads/sdn.csv", aliases: "https://www.treasury.gov/ofac/downloads/alt.csv" }
  },
  ofac_consolidated: {
    title: "US OFAC Consolidated (non-SDN) Sanctions List",
    publisher: "US Department of the Treasury, Office of Foreign Assets Control",
    page: "https://ofac.treasury.gov/consolidated-sanctions-list-non-sdn-lists",
    files: { primary: "https://www.treasury.gov/ofac/downloads/consolidated/cons_prim.csv", aliases: "https://www.treasury.gov/ofac/downloads/consolidated/cons_alt.csv" }
  },
  uk: {
    title: "UK Sanctions List",
    publisher: "UK Foreign, Commonwealth & Development Office",
    page: "https://www.gov.uk/government/publications/the-uk-sanctions-list",
    files: { primary: "https://sanctionslist.fcdo.gov.uk/docs/UK-Sanctions-List.xml" }
  },
  un: {
    title: "UN Security Council Consolidated List",
    publisher: "United Nations Security Council",
    page: "https://main.un.org/securitycouncil/en/content/un-sc-consolidated-list",
    files: { primary: "https://scsanctions.un.org/resources/xml/en/consolidated.xml" }
  }
};

const LIST_IDS = Object.keys(SOURCES);
const NOTICE = "A result is a potential match that needs human review against the official record and the client's identifiers. No result is not clearance: lists change daily, names are transliterated in many ways, and these lists do not cover every sanctions regime (for example EU, Indian or other national lists) or ownership and control rules.";

const TOOLS = [
  {
    name: "get_sanctions_lists_status",
    description: "Report which official sanctions lists are available, when each was downloaded, the publisher's generation date where given, record counts and source URLs. Set refresh to download fresh copies.",
    inputSchema: {
      type: "object",
      properties: {
        lists: { type: "array", items: { type: "string", enum: LIST_IDS } },
        refresh: { type: "boolean", default: false }
      },
      additionalProperties: false
    }
  },
  {
    name: "screen_sanctions_name",
    description: "Screen a person, entity, vessel or aircraft name against the US OFAC SDN and consolidated lists, the UK Sanctions List and the UN Security Council Consolidated List, including aliases, using fuzzy name matching. Optional date of birth and nationality are compared with each candidate. The lists are downloaded from the official publishers and searched locally; the screened name is not sent anywhere. Results are potential matches for human review, not determinations.",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", minLength: 2, maxLength: 300 },
        type: { type: "string", enum: ["any", "individual", "entity", "vessel", "aircraft"], default: "any" },
        date_of_birth: { type: "string", pattern: "^\\d{4}(-\\d{2}-\\d{2})?$", description: "YYYY or YYYY-MM-DD, for individuals." },
        nationality: { type: "string" },
        lists: { type: "array", items: { type: "string", enum: LIST_IDS }, description: "Defaults to all lists." },
        min_score: { type: "integer", minimum: 50, maximum: 100, default: 85 },
        max_results: { type: "integer", minimum: 1, maximum: 100, default: 20 },
        refresh: { type: "boolean", default: false }
      },
      required: ["name"],
      additionalProperties: false
    }
  },
  {
    name: "get_sanctions_record",
    description: "Return the full stored record for one listed person or entity, by list and identifier, as returned in screening results.",
    inputSchema: {
      type: "object",
      properties: {
        list: { type: "string", enum: LIST_IDS },
        id: { type: "string", minLength: 1 }
      },
      required: ["list", "id"],
      additionalProperties: false
    }
  }
];

// ---- Text helpers ----

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: "\"", apos: "'" };

export function decodeXml(value) {
  return String(value || "")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&(amp|lt|gt|quot|apos);/g, (_, name) => ENTITIES[name])
    .trim();
}

function tagValues(block, tag) {
  const values = [];
  const pattern = new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, "g");
  let match;
  while ((match = pattern.exec(block))) {
    const value = decodeXml(match[1]);
    if (value) values.push(value);
  }
  return values;
}

function firstTag(block, tag) {
  return tagValues(block, tag)[0] || null;
}

function blocks(text, tag) {
  const out = [];
  const open = `<${tag}>`;
  const close = `</${tag}>`;
  let index = text.indexOf(open);
  while (index !== -1) {
    const end = text.indexOf(close, index);
    if (end === -1) break;
    out.push(text.slice(index + open.length, end));
    index = text.indexOf(open, end + close.length);
  }
  return out;
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

// ---- Parsers ----

export function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === "\"") {
        if (text[i + 1] === "\"") { field += "\""; i += 1; } else quoted = false;
      } else field += char;
    } else if (char === "\"") quoted = true;
    else if (char === ",") { row.push(field); field = ""; }
    else if (char === "\n" || char === "\r") {
      if (char === "\r" && text[i + 1] === "\n") i += 1;
      row.push(field); field = "";
      if (row.some(cell => cell.trim() && cell.trim() !== "\u001a")) rows.push(row);
      row = [];
    } else field += char;
  }
  row.push(field);
  if (row.some(cell => cell.trim() && cell.trim() !== "\u001a")) rows.push(row);
  return rows.map(cells => cells.map(cell => {
    const value = cell.trim();
    return value === "-0-" || value === "\u001a" ? "" : value;
  }));
}

function ofacDobs(remarks) {
  const dobs = [];
  const pattern = /\bDOB\s+((?:circa\s+)?(?:\d{1,2}\s+[A-Za-z]{3}\s+)?\d{4}(?:\s+to\s+\d{4})?)/gi;
  let match;
  while ((match = pattern.exec(remarks))) dobs.push(match[1]);
  return dobs;
}

function ofacNationalities(remarks) {
  const out = [];
  const pattern = /\b(?:nationality|citizen)\s+([A-Za-z .'-]+?)(?=[;.]|$)/gi;
  let match;
  while ((match = pattern.exec(remarks))) out.push(match[1].trim());
  return unique(out);
}

const OFAC_TYPES = { individual: "individual", vessel: "vessel", aircraft: "aircraft" };

export function parseOfac(list, primaryCsv, aliasCsv = "") {
  const aliases = new Map();
  for (const [entNum, , aliasType, aliasName] of parseCsv(aliasCsv)) {
    if (!entNum || !aliasName) continue;
    if (!aliases.has(entNum)) aliases.set(entNum, []);
    aliases.get(entNum).push({ name: aliasName, quality: aliasType || "aka" });
  }
  return parseCsv(primaryCsv).filter(cells => cells[0] && cells[1]).map(cells => {
    const [entNum, name, sdnType, programs, title, callSign, vesselType, , , vesselFlag, , remarks] = cells;
    return {
      list,
      id: entNum,
      name,
      aliases: aliases.get(entNum) || [],
      type: OFAC_TYPES[(sdnType || "").toLowerCase()] || "entity",
      programs: unique((programs || "").replace(/[[\]]/g, " ").split(/[\s;]+/)),
      dates_of_birth: ofacDobs(remarks || ""),
      nationalities: ofacNationalities(remarks || ""),
      listed_on: null,
      details: unique([title, callSign && `Call sign ${callSign}`, vesselType && `Vessel type ${vesselType}`, vesselFlag && `Flag ${vesselFlag}`]),
      remarks: remarks || ""
    };
  });
}

function ukDate(value) {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value || "");
  return match ? `${match[3]}-${match[2]}-${match[1]}` : value || null;
}

export function parseUk(xml) {
  const generated = ukDate(firstTag(xml.slice(0, 2000), "DateGenerated"));
  const records = blocks(xml, "Designation").map(block => {
    const names = blocks(block, "Name").map(nameBlock => {
      const parts = [1, 2, 3, 4, 5, 6].map(n => firstTag(nameBlock, `Name${n}`)).filter(Boolean);
      return { name: parts.join(" "), quality: (firstTag(nameBlock, "NameType") || "").toLowerCase() };
    }).filter(entry => entry.name);
    const primary = names.find(entry => entry.quality.startsWith("primary name") && !entry.quality.includes("variation")) || names[0] || { name: "" };
    const nonLatin = tagValues(block, "NameNonLatinScript").map(name => ({ name, quality: "non-latin script" }));
    const kind = (firstTag(block, "IndividualEntityShip") || "").toLowerCase();
    return {
      list: "uk",
      id: firstTag(block, "UniqueID"),
      name: primary.name,
      aliases: [...names.filter(entry => entry !== primary), ...nonLatin],
      type: kind === "individual" ? "individual" : kind === "ship" ? "vessel" : "entity",
      programs: unique([firstTag(block, "RegimeName")]),
      dates_of_birth: unique(tagValues(block, "DOB").map(dob => dob.replace(/^dd\/mm\//, "").replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, "$3-$2-$1"))),
      nationalities: unique(tagValues(block, "Nationality")),
      listed_on: ukDate(firstTag(block, "DateDesignated")),
      details: unique([firstTag(block, "SanctionsImposed") && `Sanctions: ${firstTag(block, "SanctionsImposed").replace(/\|/g, ", ")}`, firstTag(block, "UNReferenceNumber") && `UN reference ${firstTag(block, "UNReferenceNumber")}`, firstTag(block, "OFSIGroupID") && `OFSI group ${firstTag(block, "OFSIGroupID")}`]),
      remarks: firstTag(block, "OtherInformation") || ""
    };
  }).filter(record => record.id && record.name);
  return { generated, records };
}

export function parseUn(xml) {
  const generated = (/dateGenerated="([^"]+)"/.exec(xml.slice(0, 1000)) || [])[1] || null;
  const parse = (block, kind) => {
    const name = ["FIRST_NAME", "SECOND_NAME", "THIRD_NAME", "FOURTH_NAME"].map(tag => firstTag(block, tag)).filter(Boolean).join(" ");
    const aliasTag = kind === "individual" ? "INDIVIDUAL_ALIAS" : "ENTITY_ALIAS";
    const aliases = blocks(block, aliasTag).map(aliasBlock => ({ name: firstTag(aliasBlock, "ALIAS_NAME"), quality: (firstTag(aliasBlock, "QUALITY") || "alias").toLowerCase() })).filter(entry => entry.name);
    const original = firstTag(block, "NAME_ORIGINAL_SCRIPT");
    if (original) aliases.push({ name: original, quality: "original script" });
    const dobs = blocks(block, "INDIVIDUAL_DATE_OF_BIRTH").map(dobBlock => firstTag(dobBlock, "DATE") || [firstTag(dobBlock, "FROM_YEAR"), firstTag(dobBlock, "TO_YEAR")].filter(Boolean).join(" to ") || firstTag(dobBlock, "YEAR"));
    return {
      list: "un",
      id: firstTag(block, "REFERENCE_NUMBER") || firstTag(block, "DATAID"),
      name,
      aliases,
      type: kind,
      programs: unique([firstTag(block, "UN_LIST_TYPE")]),
      dates_of_birth: unique(dobs),
      nationalities: unique(blocks(block, "NATIONALITY").flatMap(n => tagValues(n, "VALUE"))),
      listed_on: firstTag(block, "LISTED_ON"),
      details: [],
      remarks: firstTag(block, "COMMENTS1") || ""
    };
  };
  const records = [
    ...blocks(xml, "INDIVIDUAL").map(block => parse(block, "individual")),
    ...blocks(xml, "ENTITY").map(block => parse(block, "entity"))
  ].filter(record => record.id && record.name);
  return { generated, records };
}

// ---- Matching ----

const NOISE = new Set(["mr", "mrs", "ms", "miss", "dr", "the", "of", "al", "el", "bin", "ibn", "binti", "bint"]);
const ENTITY_SUFFIXES = new Set(["ltd", "limited", "llc", "inc", "incorporated", "co", "company", "corp", "corporation", "plc", "pvt", "private", "sa", "gmbh", "ag", "bv", "nv", "srl", "spa", "jsc", "ojsc", "pjsc", "cjsc", "ooo", "oao", "zao", "llp", "lp", "fze", "fzco", "fzc", "pte", "sdn", "bhd"]);

export function normaliseName(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .split(/\s+/)
    .filter(token => token && !NOISE.has(token) && !ENTITY_SUFFIXES.has(token));
}

function jaroWinkler(a, b) {
  if (a === b) return 1;
  const range = Math.max(Math.floor(Math.max(a.length, b.length) / 2) - 1, 0);
  const aMatches = new Array(a.length).fill(false);
  const bMatches = new Array(b.length).fill(false);
  let matches = 0;
  for (let i = 0; i < a.length; i += 1) {
    for (let j = Math.max(0, i - range); j < Math.min(b.length, i + range + 1); j += 1) {
      if (bMatches[j] || a[i] !== b[j]) continue;
      aMatches[i] = true; bMatches[j] = true; matches += 1; break;
    }
  }
  if (!matches) return 0;
  let transpositions = 0;
  let k = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (!aMatches[i]) continue;
    while (!bMatches[k]) k += 1;
    if (a[i] !== b[k]) transpositions += 1;
    k += 1;
  }
  const jaro = (matches / a.length + matches / b.length + (matches - transpositions / 2) / matches) / 3;
  let prefix = 0;
  while (prefix < Math.min(4, a.length, b.length) && a[prefix] === b[prefix]) prefix += 1;
  return jaro + prefix * 0.1 * (1 - jaro);
}

// Each query token is paired with its best-matching candidate token; the score
// is the average pair similarity, discounted when either side has tokens with
// no counterpart. Word order does not matter ("SMITH, John" = "John Smith").
export function nameScore(queryTokens, candidateTokens) {
  if (!queryTokens.length || !candidateTokens.length) return 0;
  const used = new Set();
  let total = 0;
  for (const token of queryTokens) {
    let best = 0;
    let bestIndex = -1;
    candidateTokens.forEach((candidate, index) => {
      if (used.has(index)) return;
      const score = jaroWinkler(token, candidate);
      if (score > best) { best = score; bestIndex = index; }
    });
    if (bestIndex >= 0 && best >= 0.8) used.add(bestIndex);
    total += best >= 0.8 ? best : 0;
  }
  const coverage = total / queryTokens.length;
  const unmatchedCandidate = candidateTokens.length - used.size;
  const penalty = unmatchedCandidate > 0 ? Math.min(0.15, 0.05 * unmatchedCandidate) : 0;
  return Math.max(0, Math.round((coverage - penalty) * 100));
}

function compareDob(supplied, recorded) {
  if (!supplied || !recorded.length) return "not compared";
  const year = supplied.slice(0, 4);
  const hit = recorded.some(value => value.includes(year) || (/(\d{4})\s+to\s+(\d{4})/.test(value) && (() => {
    const [, from, to] = /(\d{4})\s+to\s+(\d{4})/.exec(value);
    return year >= from && year <= to;
  })()));
  return hit ? "consistent" : "different";
}

function compareNationality(supplied, recorded) {
  if (!supplied || !recorded.length) return "not compared";
  const wanted = normaliseName(supplied).join(" ");
  return recorded.some(value => normaliseName(value).join(" ").includes(wanted) || wanted.includes(normaliseName(value).join(" "))) ? "consistent" : "different";
}

export function screen(records, args) {
  const query = normaliseName(args.name);
  if (!query.length) throw new Error("name has no searchable characters after normalisation.");
  const type = args.type || "any";
  const minScore = args.min_score ?? 85;
  const results = [];
  for (const record of records) {
    if (type !== "any" && record.type !== type) continue;
    let best = { score: 0, matched_name: null, matched_on: null };
    const candidates = [{ name: record.name, quality: "primary name" }, ...record.aliases];
    for (const candidate of candidates) {
      const score = nameScore(query, normaliseName(candidate.name));
      if (score > best.score) best = { score, matched_name: candidate.name, matched_on: candidate.quality === "primary name" ? "primary name" : `alias (${candidate.quality})` };
    }
    if (best.score < minScore) continue;
    results.push({
      score: best.score,
      list: record.list,
      list_title: SOURCES[record.list].title,
      id: record.id,
      listed_name: record.name,
      matched_name: best.matched_name,
      matched_on: best.matched_on,
      type: record.type,
      programs_or_regimes: record.programs,
      date_of_birth_check: record.type === "individual" ? compareDob(args.date_of_birth, record.dates_of_birth) : "not applicable",
      recorded_dates_of_birth: record.dates_of_birth,
      nationality_check: compareNationality(args.nationality, record.nationalities),
      recorded_nationalities: record.nationalities,
      listed_on: record.listed_on
    });
  }
  results.sort((a, b) => b.score - a.score || a.list.localeCompare(b.list));
  return results.slice(0, args.max_results ?? 20);
}

// ---- Download and cache ----

const memory = new Map();

async function fetchText(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const response = await fetch(url, { headers: { "User-Agent": USER_AGENT, Accept: "*/*" }, redirect: "follow", signal: controller.signal });
    if (!response.ok) throw new Error(`HTTP ${response.status} from ${url}`);
    return { text: await response.text(), lastModified: response.headers.get("last-modified") };
  } finally {
    clearTimeout(timer);
  }
}

async function cachedFile(listId, key, url, refresh, maxAgeHours) {
  const file = path.join(CACHE_DIR, `${listId}-${key}${path.extname(new URL(url).pathname)}`);
  const meta = `${file}.json`;
  if (!refresh) {
    try {
      const info = await stat(file);
      if (Date.now() - info.mtimeMs < maxAgeHours * 3600000) {
        const metadata = JSON.parse(await readFile(meta, "utf8").catch(() => "{}"));
        return { text: await readFile(file, "utf8"), downloadedAt: new Date(info.mtimeMs).toISOString(), lastModified: metadata.lastModified || null, fromCache: true };
      }
    } catch {
      // No usable cache; download below.
    }
  }
  const { text, lastModified } = await fetchText(url);
  await mkdir(CACHE_DIR, { recursive: true });
  await writeFile(file, text, "utf8");
  await writeFile(meta, JSON.stringify({ url, lastModified }), "utf8");
  return { text, downloadedAt: new Date().toISOString(), lastModified, fromCache: false };
}

export async function loadList(listId, { refresh = false, maxAgeHours = DEFAULT_MAX_AGE_HOURS } = {}) {
  if (!refresh && memory.has(listId)) return memory.get(listId);
  const source = SOURCES[listId];
  if (!source) throw new Error(`Unknown list: ${listId}`);
  const primary = await cachedFile(listId, "primary", source.files.primary, refresh, maxAgeHours);
  let parsed;
  if (listId.startsWith("ofac")) {
    const aliases = await cachedFile(listId, "aliases", source.files.aliases, refresh, maxAgeHours);
    parsed = { generated: primary.lastModified, records: parseOfac(listId, primary.text, aliases.text) };
  } else if (listId === "uk") {
    parsed = parseUk(primary.text);
  } else {
    parsed = parseUn(primary.text);
  }
  if (!parsed.records.length) throw new Error(`${source.title}: the downloaded file contained no records. The publisher's format may have changed.`);
  const loaded = { ...parsed, downloadedAt: primary.downloadedAt, fromCache: primary.fromCache, index: new Map(parsed.records.map(record => [record.id, record])) };
  memory.set(listId, loaded);
  return loaded;
}

function listSummary(listId, loaded, error) {
  const source = SOURCES[listId];
  return {
    list: listId,
    title: source.title,
    publisher: source.publisher,
    source_page: source.page,
    source_files: Object.values(source.files),
    available: !error,
    error: error ? error.message || String(error) : null,
    records: loaded ? loaded.records.length : null,
    publisher_generated: loaded ? loaded.generated : null,
    downloaded_at: loaded ? loaded.downloadedAt : null,
    from_cache: loaded ? loaded.fromCache : null
  };
}

async function loadMany(lists, refresh) {
  const out = [];
  for (const listId of lists) {
    try {
      out.push({ listId, loaded: await loadList(listId, { refresh }), error: null });
    } catch (error) {
      out.push({ listId, loaded: null, error });
    }
  }
  return out;
}

export async function callTool(name, args = {}) {
  if (name === "get_sanctions_lists_status") {
    const lists = args.lists?.length ? args.lists : LIST_IDS;
    const loaded = await loadMany(lists, Boolean(args.refresh));
    return { lists: loaded.map(({ listId, loaded: data, error }) => listSummary(listId, data, error)), cache_directory: CACHE_DIR, notice: NOTICE };
  }
  if (name === "screen_sanctions_name") {
    const lists = args.lists?.length ? args.lists : LIST_IDS;
    const loaded = await loadMany(lists, Boolean(args.refresh));
    const records = loaded.flatMap(entry => entry.loaded ? entry.loaded.records : []);
    const results = screen(records, args);
    const unavailable = loaded.filter(entry => entry.error).map(entry => SOURCES[entry.listId].title);
    return {
      screened_name: args.name,
      screened_at: new Date().toISOString(),
      parameters: { type: args.type || "any", date_of_birth: args.date_of_birth || null, nationality: args.nationality || null, min_score: args.min_score ?? 85 },
      lists_searched: loaded.map(({ listId, loaded: data, error }) => listSummary(listId, data, error)),
      lists_unavailable: unavailable,
      potential_matches: results.length,
      results,
      outcome: unavailable.length
        ? `INCOMPLETE — not searched: ${unavailable.join("; ")}.`
        : results.length ? "POTENTIAL MATCHES FOUND — human review required before any conclusion." : "No potential matches at or above the score threshold in the lists searched.",
      notice: NOTICE,
      local_only_query: true
    };
  }
  if (name === "get_sanctions_record") {
    const loaded = await loadList(args.list);
    const record = loaded.index.get(String(args.id));
    if (!record) throw new Error(`No record ${args.id} in ${SOURCES[args.list].title} as downloaded at ${loaded.downloadedAt}.`);
    return { record, source_page: SOURCES[args.list].page, downloaded_at: loaded.downloadedAt, notice: NOTICE };
  }
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
      serverInfo: { name: "legal-ai-skills-sanctions-screening", version: VERSION }
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
