#!/usr/bin/env node

import readline from "node:readline";
import { pathToFileURL } from "node:url";

const VERSION = "2.1.1";
const REQUEST_TIMEOUT_MS = 30_000;
const SEC_BASE = "https://data.sec.gov";
const SEC_WWW = "https://www.sec.gov";
const GLEIF_BASE = "https://api.gleif.org/api/v1";
const COMPANIES_HOUSE_BASE = "https://api.company-information.service.gov.uk";
let secTickersCache;
let secTickersCachedAt = 0;

const SOURCE_NOTES = {
  sec: "Official SEC EDGAR data. Coverage is limited to SEC filers and is not a state incorporation or good-standing search.",
  gleif: "Official GLEIF LEI data. Coverage is limited to entities with an LEI and is not a complete company register.",
  companies_house: "Official UK Companies House public data. Filed information may not establish the truth of every statement or current good standing."
};

const TOOLS = [
  {
    name: "search_legal_entities",
    description: "Search free official company-data sources. Auto mode uses SEC EDGAR for US filers, Companies House for UK companies when configured, and GLEIF for entities with an LEI.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", minLength: 1, description: "Legal name, ticker, CIK, company number or LEI search text." },
        jurisdiction: { type: "string", description: "ISO country code or jurisdiction hint, for example US, GB or IN." },
        source: { type: "string", enum: ["auto", "sec", "gleif", "companies_house"], default: "auto" },
        limit: { type: "integer", minimum: 1, maximum: 20, default: 10 }
      },
      required: ["query"],
      additionalProperties: false
    }
  },
  {
    name: "get_legal_entity_record",
    description: "Retrieve an official entity record by SEC CIK, GLEIF LEI or Companies House company number.",
    inputSchema: {
      type: "object",
      properties: {
        source: { type: "string", enum: ["sec", "gleif", "companies_house"] },
        identifier: { type: "string", minLength: 1 }
      },
      required: ["source", "identifier"],
      additionalProperties: false
    }
  },
  {
    name: "list_company_filings",
    description: "List recent official SEC EDGAR or UK Companies House filings for an identified entity.",
    inputSchema: {
      type: "object",
      properties: {
        source: { type: "string", enum: ["sec", "companies_house"] },
        identifier: { type: "string", minLength: 1, description: "SEC CIK or Companies House company number." },
        limit: { type: "integer", minimum: 1, maximum: 100, default: 20 },
        category: { type: "string", description: "Optional Companies House filing category." }
      },
      required: ["source", "identifier"],
      additionalProperties: false
    }
  },
  {
    name: "list_uk_company_officers",
    description: "List officers shown on the official UK Companies House public record.",
    inputSchema: {
      type: "object",
      properties: {
        company_number: { type: "string", minLength: 1 },
        limit: { type: "integer", minimum: 1, maximum: 100, default: 50 }
      },
      required: ["company_number"],
      additionalProperties: false
    }
  },
  {
    name: "get_uk_company_control_and_charges",
    description: "Retrieve persons with significant control and registered charges from UK Companies House.",
    inputSchema: {
      type: "object",
      properties: {
        company_number: { type: "string", minLength: 1 },
        limit: { type: "integer", minimum: 1, maximum: 100, default: 50 }
      },
      required: ["company_number"],
      additionalProperties: false
    }
  }
];

function clampLimit(value, fallback, maximum) {
  const parsed = Number(value ?? fallback);
  if (!Number.isInteger(parsed) || parsed < 1) return fallback;
  return Math.min(parsed, maximum);
}

function retrievalMetadata(source, url) {
  return {
    source,
    source_url: url,
    retrieved_at: new Date().toISOString(),
    coverage_warning: SOURCE_NOTES[source]
  };
}

async function fetchJson(url, { headers = {}, username } = {}) {
  const requestHeaders = { Accept: "application/json", ...headers };
  if (username) {
    requestHeaders.Authorization = `Basic ${Buffer.from(`${username}:`).toString("base64")}`;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  let response;
  try {
    response = await fetch(url, { headers: requestHeaders, signal: controller.signal });
  } catch (error) {
    if (error?.name === "AbortError") throw new Error(`Registry request timed out after ${REQUEST_TIMEOUT_MS / 1000} seconds`);
    throw new Error(`Registry request failed: ${error?.message || String(error)}`);
  } finally {
    clearTimeout(timeout);
  }

  const body = await response.text();
  if (!response.ok) {
    const safeBody = body.replace(/\s+/g, " ").slice(0, 300);
    throw new Error(`Registry returned HTTP ${response.status}${safeBody ? `: ${safeBody}` : ""}`);
  }
  try {
    return JSON.parse(body);
  } catch {
    throw new Error("Registry returned a non-JSON response");
  }
}

function normalizeCik(value) {
  const digits = String(value).replace(/^CIK/i, "").replace(/\D/g, "");
  if (!digits || digits.length > 10) throw new Error("SEC CIK must contain 1 to 10 digits");
  return digits.padStart(10, "0");
}

function normalizeLei(value) {
  const lei = String(value).trim().toUpperCase();
  if (!/^[A-Z0-9]{20}$/.test(lei)) throw new Error("GLEIF LEI must contain exactly 20 letters or digits");
  return lei;
}

function normalizeCompanyNumber(value) {
  const number = String(value).trim().toUpperCase().replace(/\s+/g, "");
  if (!/^[A-Z0-9]{2,10}$/.test(number)) throw new Error("Companies House company number is invalid");
  return number;
}

export function secUserAgent(override = process.env.VCLO_SEC_USER_AGENT) {
  return override?.trim() || `vCLO-by-Rohas/${VERSION} (+https://github.com/rohasnagpal/legal-ai-skills)`;
}

function secHeaders() {
  return {
    "User-Agent": secUserAgent(),
    "Accept-Encoding": "gzip, deflate"
  };
}

function companiesHouseKey() {
  const key = process.env.COMPANIES_HOUSE_API_KEY?.trim();
  if (!key) {
    throw new Error("Companies House requires a free API key. Set COMPANIES_HOUSE_API_KEY, reinstall/restart the plugin, and retry.");
  }
  return key;
}

export function formatGleifRecord(item) {
  const attributes = item?.attributes || {};
  const entity = attributes.entity || {};
  const registration = attributes.registration || {};
  return {
    lei: attributes.lei || item?.id,
    legal_name: entity.legalName?.name,
    other_names: [...(entity.otherNames || []), ...(entity.transliteratedOtherNames || [])].map(name => name.name).filter(Boolean),
    jurisdiction: entity.jurisdiction,
    legal_form: entity.legalForm,
    entity_status: entity.status,
    registered_at: entity.registeredAt,
    registered_as: entity.registeredAs,
    legal_address: entity.legalAddress,
    headquarters_address: entity.headquartersAddress,
    registration_status: registration.status,
    initial_registration_date: registration.initialRegistrationDate,
    last_update_date: registration.lastUpdateDate,
    next_renewal_date: registration.nextRenewalDate,
    corroboration_level: registration.corroborationLevel,
    validated_at: registration.validatedAt,
    validated_as: registration.validatedAs,
    bic: attributes.bic,
    conformity_flag: attributes.conformityFlag,
    record_url: `https://api.gleif.org/api/v1/lei-records/${encodeURIComponent(attributes.lei || item?.id || "")}`
  };
}

async function gleifSearch(query, limit) {
  const url = new URL(`${GLEIF_BASE}/lei-records`);
  url.searchParams.set("filter[entity.legalName]", query);
  url.searchParams.set("page[size]", String(limit));
  const data = await fetchJson(url);
  return {
    ...retrievalMetadata("gleif", url.toString()),
    total_results: data.meta?.pagination?.total,
    results: (data.data || []).map(formatGleifRecord)
  };
}

async function gleifRecord(identifier) {
  const lei = normalizeLei(identifier);
  const url = `${GLEIF_BASE}/lei-records/${encodeURIComponent(lei)}`;
  const data = await fetchJson(url);
  return { ...retrievalMetadata("gleif", url), record: formatGleifRecord(data.data) };
}

export function formatSecSearchRecord(item) {
  const cik = String(item.cik_str).padStart(10, "0");
  return {
    cik,
    legal_name: item.title,
    ticker: item.ticker,
    submissions_url: `${SEC_BASE}/submissions/CIK${cik}.json`
  };
}

export function filterSecTickerRecords(data, query, limit = 10) {
  const rawNeedle = String(query || "").trim();
  if (!rawNeedle) return { total_results: 0, results: [] };

  const grouped = new Map();
  const values = Array.isArray(data) ? data : Object.values(data || {});
  for (const item of values) {
    const record = formatSecSearchRecord(item);
    const existing = grouped.get(record.cik);
    if (existing) {
      if (record.ticker && !existing.tickers.includes(record.ticker)) existing.tickers.push(record.ticker);
      continue;
    }
    grouped.set(record.cik, {
      ...record,
      tickers: record.ticker ? [record.ticker] : []
    });
  }

  const cikNeedle = rawNeedle.replace(/^cik[\s:#-]*/i, "");
  let matches;
  if (/^\d{1,10}$/.test(cikNeedle)) {
    const cik = cikNeedle.padStart(10, "0");
    matches = grouped.has(cik) ? [grouped.get(cik)] : [];
  } else {
    const needle = rawNeedle.toLowerCase();
    const exact = [];
    const partial = [];
    for (const record of grouped.values()) {
      const name = String(record.legal_name || "").toLowerCase();
      const tickers = record.tickers.map(ticker => ticker.toLowerCase());
      if (name === needle || tickers.includes(needle)) exact.push(record);
      else if (name.includes(needle) || tickers.some(ticker => ticker.includes(needle))) partial.push(record);
    }
    matches = [...exact, ...partial];
  }

  return {
    total_results: matches.length,
    results: matches.slice(0, clampLimit(limit, 10, 20))
  };
}

async function secSearch(query, limit) {
  const url = `${SEC_WWW}/files/company_tickers.json`;
  if (!secTickersCache || Date.now() - secTickersCachedAt > 15 * 60 * 1000) {
    secTickersCache = await fetchJson(url, { headers: secHeaders() });
    secTickersCachedAt = Date.now();
  }
  const matches = filterSecTickerRecords(secTickersCache, query, limit);
  return {
    ...retrievalMetadata("sec", url),
    ...matches
  };
}

async function secRecord(identifier) {
  const cik = normalizeCik(identifier);
  const url = `${SEC_BASE}/submissions/CIK${cik}.json`;
  const data = await fetchJson(url, { headers: secHeaders() });
  const { filings, ...profile } = data;
  return {
    ...retrievalMetadata("sec", url),
    record: {
      ...profile,
      recent_filing_count: filings?.recent?.accessionNumber?.length || 0,
      older_filing_files: filings?.files || []
    }
  };
}

export function formatSecFilings(data, limit) {
  const recent = data?.filings?.recent || {};
  const accessions = recent.accessionNumber || [];
  const cikPath = String(Number(normalizeCik(data.cik)));
  return accessions.slice(0, limit).map((accession, index) => {
    const accessionPath = String(accession).replace(/-/g, "");
    const primaryDocument = recent.primaryDocument?.[index];
    return {
      accession_number: accession,
      form: recent.form?.[index],
      filing_date: recent.filingDate?.[index],
      report_date: recent.reportDate?.[index],
      acceptance_datetime: recent.acceptanceDateTime?.[index],
      primary_document: primaryDocument,
      description: recent.primaryDocDescription?.[index],
      filing_url: primaryDocument ? `${SEC_WWW}/Archives/edgar/data/${cikPath}/${accessionPath}/${encodeURIComponent(primaryDocument)}` : undefined
    };
  });
}

async function secFilings(identifier, limit) {
  const cik = normalizeCik(identifier);
  const url = `${SEC_BASE}/submissions/CIK${cik}.json`;
  const data = await fetchJson(url, { headers: secHeaders() });
  return { ...retrievalMetadata("sec", url), cik, legal_name: data.name, filings: formatSecFilings(data, limit) };
}

async function companiesHouseRequest(path, params = {}) {
  const url = new URL(path, COMPANIES_HOUSE_BASE);
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") url.searchParams.set(key, String(value));
  }
  const data = await fetchJson(url, { username: companiesHouseKey() });
  return { data, url: url.toString() };
}

async function companiesHouseSearch(query, limit) {
  const { data, url } = await companiesHouseRequest("/search/companies", { q: query, items_per_page: limit });
  return {
    ...retrievalMetadata("companies_house", url),
    total_results: data.total_results,
    results: (data.items || []).map(item => ({
      company_number: item.company_number,
      legal_name: item.title,
      company_status: item.company_status,
      company_type: item.company_type,
      date_of_creation: item.date_of_creation,
      date_of_cessation: item.date_of_cessation,
      registered_office_address: item.address,
      description: item.description,
      profile_url: `${COMPANIES_HOUSE_BASE}/company/${encodeURIComponent(item.company_number)}`,
      public_web_url: `https://find-and-update.company-information.service.gov.uk/company/${encodeURIComponent(item.company_number)}`
    }))
  };
}

async function companiesHouseRecord(identifier) {
  const number = normalizeCompanyNumber(identifier);
  const { data, url } = await companiesHouseRequest(`/company/${encodeURIComponent(number)}`);
  return {
    ...retrievalMetadata("companies_house", url),
    record: data,
    public_web_url: `https://find-and-update.company-information.service.gov.uk/company/${encodeURIComponent(number)}`
  };
}

async function companiesHouseFilings(identifier, limit, category) {
  const number = normalizeCompanyNumber(identifier);
  const { data, url } = await companiesHouseRequest(`/company/${encodeURIComponent(number)}/filing-history`, {
    items_per_page: limit,
    category
  });
  return {
    ...retrievalMetadata("companies_house", url),
    company_number: number,
    total_count: data.total_count,
    filings: data.items || [],
    public_web_url: `https://find-and-update.company-information.service.gov.uk/company/${encodeURIComponent(number)}/filing-history`
  };
}

async function companiesHouseOfficers(identifier, limit) {
  const number = normalizeCompanyNumber(identifier);
  const { data, url } = await companiesHouseRequest(`/company/${encodeURIComponent(number)}/officers`, { items_per_page: limit });
  return {
    ...retrievalMetadata("companies_house", url),
    company_number: number,
    total_results: data.total_results,
    active_count: data.active_count,
    resigned_count: data.resigned_count,
    officers: data.items || []
  };
}

async function companiesHouseControlAndCharges(identifier, limit) {
  const number = normalizeCompanyNumber(identifier);
  const pscPath = `/company/${encodeURIComponent(number)}/persons-with-significant-control`;
  const chargesPath = `/company/${encodeURIComponent(number)}/charges`;
  const [psc, charges] = await Promise.allSettled([
    companiesHouseRequest(pscPath, { items_per_page: limit }),
    companiesHouseRequest(chargesPath, { items_per_page: limit })
  ]);
  const result = {
    ...retrievalMetadata("companies_house", `${COMPANIES_HOUSE_BASE}/company/${encodeURIComponent(number)}`),
    company_number: number,
    persons_with_significant_control: psc.status === "fulfilled" ? psc.value.data : undefined,
    charges: charges.status === "fulfilled" ? charges.value.data : undefined,
    unavailable_sections: []
  };
  if (psc.status === "rejected") result.unavailable_sections.push({ section: "persons_with_significant_control", error: psc.reason.message });
  if (charges.status === "rejected") result.unavailable_sections.push({ section: "charges", error: charges.reason.message });
  return result;
}

export function resolveAutoSources(jurisdiction, hasCompaniesHouseKey = Boolean(process.env.COMPANIES_HOUSE_API_KEY?.trim())) {
  const code = String(jurisdiction || "").trim().toUpperCase();
  if (["GB", "UK", "UNITED KINGDOM", "ENGLAND", "WALES", "SCOTLAND", "NORTHERN IRELAND"].includes(code)) {
    return hasCompaniesHouseKey ? ["companies_house", "gleif"] : ["gleif"];
  }
  if (["US", "USA", "UNITED STATES", "UNITED STATES OF AMERICA"].includes(code)) return ["sec", "gleif"];
  return ["gleif"];
}

async function searchEntities(args) {
  const query = String(args.query || "").trim();
  if (!query) throw new Error("query is required");
  const limit = clampLimit(args.limit, 10, 20);
  const requestedSource = args.source || "auto";
  const sources = requestedSource === "auto" ? resolveAutoSources(args.jurisdiction) : [requestedSource];
  const searches = {
    sec: () => secSearch(query, limit),
    gleif: () => gleifSearch(query, limit),
    companies_house: () => companiesHouseSearch(query, limit)
  };
  const settled = await Promise.allSettled(sources.map(source => searches[source]()));
  const sourceResults = [];
  const sourceErrors = [];
  settled.forEach((outcome, index) => {
    if (outcome.status === "fulfilled") sourceResults.push(outcome.value);
    else sourceErrors.push({ source: sources[index], error: outcome.reason.message });
  });
  if (!sourceResults.length) throw new Error(sourceErrors.map(item => `${item.source}: ${item.error}`).join("; "));
  return {
    query,
    jurisdiction: args.jurisdiction || null,
    sources_searched: sources,
    source_results: sourceResults,
    source_errors: sourceErrors,
    legal_notice: "Confirm entity identity and jurisdiction. Absence from these sources does not prove non-existence, good standing, ownership, or absence of liabilities."
  };
}

export async function callTool(name, args = {}) {
  if (name === "search_legal_entities") return searchEntities(args);
  if (name === "get_legal_entity_record") {
    if (args.source === "sec") return secRecord(args.identifier);
    if (args.source === "gleif") return gleifRecord(args.identifier);
    if (args.source === "companies_house") return companiesHouseRecord(args.identifier);
    throw new Error("source must be sec, gleif or companies_house");
  }
  if (name === "list_company_filings") {
    const limit = clampLimit(args.limit, 20, 100);
    if (args.source === "sec") return secFilings(args.identifier, limit);
    if (args.source === "companies_house") return companiesHouseFilings(args.identifier, limit, args.category);
    throw new Error("source must be sec or companies_house");
  }
  if (name === "list_uk_company_officers") return companiesHouseOfficers(args.company_number, clampLimit(args.limit, 50, 100));
  if (name === "get_uk_company_control_and_charges") return companiesHouseControlAndCharges(args.company_number, clampLimit(args.limit, 50, 100));
  throw new Error(`Unknown tool: ${name}`);
}

function send(payload) {
  process.stdout.write(`${JSON.stringify(payload)}\n`);
}

async function handleMessage(message) {
  if (!message || message.jsonrpc !== "2.0") return;
  if (message.method === "notifications/initialized" || message.method === "notifications/cancelled") return;
  if (message.id === undefined) return;

  if (message.method === "initialize") {
    send({
      jsonrpc: "2.0",
      id: message.id,
      result: {
        protocolVersion: message.params?.protocolVersion || "2025-06-18",
        capabilities: { tools: { listChanged: false } },
        serverInfo: { name: "vclo-company-registries", version: VERSION }
      }
    });
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
      send({
        jsonrpc: "2.0",
        id: message.id,
        result: {
          content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
          structuredContent: result,
          isError: false
        }
      });
    } catch (error) {
      send({
        jsonrpc: "2.0",
        id: message.id,
        result: {
          content: [{ type: "text", text: error?.message || String(error) }],
          isError: true
        }
      });
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
