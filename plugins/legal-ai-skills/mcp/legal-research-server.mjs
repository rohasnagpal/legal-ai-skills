#!/usr/bin/env node

import readline from "node:readline";
import { pathToFileURL } from "node:url";

const VERSION = "4.0.2";
const REQUEST_TIMEOUT_MS = 30_000;
const MAX_TEXT_CHARS = 20_000;
const FEDERAL_REGISTER_BASE = "https://www.federalregister.gov/api/v1";
const REGULATIONS_BASE = "https://api.regulations.gov/v4";
const UK_LEGISLATION_BASE = "https://www.legislation.gov.uk";
const UK_CASE_LAW_BASE = "https://caselaw.nationalarchives.gov.uk";
const ECFR_BASE = "https://www.ecfr.gov";
const GAZETTE_BASE = "https://www.thegazette.co.uk";
const GAZETTE_MIN_INTERVAL_MS = 2_000;

const TOOLS = [
  {
    name: "search_us_federal_register",
    description: "Search the official, keyless Federal Register API for rules, proposed rules, notices and presidential documents.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", minLength: 1 },
        document_type: { type: "string", enum: ["RULE", "PRORULE", "NOTICE", "PRESDOCU"] },
        published_from: { type: "string", description: "Optional YYYY-MM-DD start date." },
        published_to: { type: "string", description: "Optional YYYY-MM-DD end date." },
        limit: { type: "integer", minimum: 1, maximum: 50, default: 10 }
      },
      required: ["query"],
      additionalProperties: false
    }
  },
  {
    name: "get_us_federal_register_document",
    description: "Retrieve official Federal Register metadata for one document number.",
    inputSchema: {
      type: "object",
      properties: { document_number: { type: "string", minLength: 1 } },
      required: ["document_number"],
      additionalProperties: false
    }
  },
  {
    name: "search_us_rulemaking",
    description: "Search read-only Regulations.gov documents or dockets. Requires a free REGULATIONS_GOV_API_KEY; this tool cannot submit comments.",
    inputSchema: {
      type: "object",
      properties: {
        resource: { type: "string", enum: ["documents", "dockets"], default: "documents" },
        query: { type: "string", minLength: 1 },
        agency_id: { type: "string" },
        limit: { type: "integer", minimum: 1, maximum: 25, default: 10 }
      },
      required: ["query"],
      additionalProperties: false
    }
  },
  {
    name: "get_us_rulemaking_record",
    description: "Retrieve one read-only Regulations.gov document or docket by official identifier. Requires REGULATIONS_GOV_API_KEY.",
    inputSchema: {
      type: "object",
      properties: {
        resource: { type: "string", enum: ["documents", "dockets"] },
        identifier: { type: "string", minLength: 1 }
      },
      required: ["resource", "identifier"],
      additionalProperties: false
    }
  },
  {
    name: "search_uk_legislation",
    description: "Search the official legislation.gov.uk Atom feed for UK legislation. Results must be checked for extent, commencement, amendments and outstanding effects.",
    inputSchema: {
      type: "object",
      properties: {
        title: { type: "string", minLength: 1 },
        year: { type: "integer", minimum: 1066, maximum: 3000 },
        limit: { type: "integer", minimum: 1, maximum: 20, default: 10 }
      },
      required: ["title"],
      additionalProperties: false
    }
  },
  {
    name: "get_uk_legislation_text",
    description: "Retrieve a bounded extract of official legislation.gov.uk XML for a known legislation path such as ukpga/2006/46.",
    inputSchema: {
      type: "object",
      properties: {
        legislation_path: { type: "string", minLength: 1, description: "Type/year/number path, for example ukpga/2006/46." },
        max_chars: { type: "integer", minimum: 1000, maximum: 20000, default: 12000 }
      },
      required: ["legislation_path"],
      additionalProperties: false
    }
  },
  {
    name: "search_uk_case_law",
    description: "Search the official Find Case Law Atom API using bounded, reasonable requests. Covers England and Wales plus UK Supreme Court and Privy Council material; it is not a citator.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", minLength: 1 },
        from_date: { type: "string", description: "Optional YYYY-MM-DD start date." },
        to_date: { type: "string", description: "Optional YYYY-MM-DD end date." },
        limit: { type: "integer", minimum: 1, maximum: 20, default: 10 }
      },
      required: ["query"],
      additionalProperties: false
    }
  },
  {
    name: "get_uk_case_law_judgment",
    description: "Retrieve a bounded text extract and official links for one Find Case Law judgment slug such as ewca/civ/2024/123. This is not later-treatment verification.",
    inputSchema: {
      type: "object",
      properties: {
        judgment_path: { type: "string", minLength: 1 },
        max_chars: { type: "integer", minimum: 1000, maximum: 20000, default: 12000 }
      },
      required: ["judgment_path"],
      additionalProperties: false
    }
  },
  {
    name: "search_us_ecfr",
    description: "Search the full text of the official eCFR (Electronic Code of Federal Regulations) as in force on a date, optionally within one CFR title or part. Returns sections with citations, headings, excerpts and effective periods. Search uses the regulation's own wording, so a popular name (for example \"Safeguards Rule\") may only find sections that refer to it; when the citation is known, filter by title and part, or use get_us_ecfr_text.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", minLength: 1 },
        title: { type: "integer", minimum: 1, maximum: 50, description: "Optional CFR title number, for example 16." },
        part: { type: "string", description: "Optional CFR part within the title, for example 314. Requires title." },
        date: { type: "string", description: "Optional YYYY-MM-DD; returns text in effect on that date. Defaults to current." },
        limit: { type: "integer", minimum: 1, maximum: 20, default: 10 }
      },
      required: ["query"],
      additionalProperties: false
    }
  },
  {
    name: "get_us_ecfr_text",
    description: "Retrieve a bounded text extract of one eCFR section or part as in effect on a date (default: the latest eCFR update for that title), with its official link.",
    inputSchema: {
      type: "object",
      properties: {
        title: { type: "integer", minimum: 1, maximum: 50 },
        section: { type: "string", description: "Section number, for example 314.4." },
        part: { type: "string", description: "Part number, for example 314, when retrieving a whole part." },
        date: { type: "string", description: "Optional YYYY-MM-DD point-in-time date." },
        max_chars: { type: "integer", minimum: 1000, maximum: 20000, default: 12000 }
      },
      required: ["title"],
      additionalProperties: false
    }
  },
  {
    name: "search_uk_gazette_notices",
    description: "Search The Gazette, the UK's official public record, for insolvency, company, probate and other statutory notices, such as winding-up petitions and orders, administrations, liquidator appointments, bankruptcy orders, deceased estates and company strike-offs. Rate-limited by the publisher; use few, specific searches.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", minLength: 2, description: "Company name, person's name, company number or other text." },
        section: { type: "string", enum: ["insolvency", "company", "wills-and-probate", "all"], default: "insolvency" },
        published_from: { type: "string", description: "Optional YYYY-MM-DD." },
        published_to: { type: "string", description: "Optional YYYY-MM-DD." },
        limit: { type: "integer", minimum: 1, maximum: 25, default: 10 }
      },
      required: ["query"],
      additionalProperties: false
    }
  },
  {
    name: "get_uk_gazette_notice",
    description: "Retrieve the text, publication date and notice code of one Gazette notice by its notice ID (for example L-58635-471825) as returned by search_uk_gazette_notices.",
    inputSchema: {
      type: "object",
      properties: { notice_id: { type: "string", minLength: 3 } },
      required: ["notice_id"],
      additionalProperties: false
    }
  }
];

function clamp(value, fallback, maximum) {
  const parsed = Number(value ?? fallback);
  if (!Number.isInteger(parsed) || parsed < 1) return fallback;
  return Math.min(parsed, maximum);
}

function assertDate(value, label) {
  if (value === undefined || value === "") return;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value))) throw new Error(`${label} must use YYYY-MM-DD`);
}

function decodeXml(value = "") {
  return String(value)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, number) => String.fromCodePoint(Number(number)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function textFromXml(value = "") {
  return decodeXml(String(value).replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function firstTag(xml, tag) {
  return decodeXml(xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, "i"))?.[1] || "").trim();
}

function attrFromTag(xml, tag, attr, predicate = "") {
  const tags = xml.match(new RegExp(`<${tag}\\b[^>]*>`, "gi")) || [];
  const selected = tags.find(item => !predicate || item.includes(predicate));
  return decodeXml(selected?.match(new RegExp(`${attr}=["']([^"']+)["']`, "i"))?.[1] || "") || undefined;
}

async function fetchResponse(url, { headers = {} } = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  let response;
  try {
    response = await fetch(url, {
      headers: {
        Accept: "application/json, application/atom+xml, application/xml, text/xml;q=0.9",
        "User-Agent": `Legal-AI-Skills-by-Rohas/${VERSION} (+https://github.com/rohasnagpal/legal-ai-skills)`,
        ...headers
      },
      signal: controller.signal
    });
  } catch (error) {
    if (error?.name === "AbortError") throw new Error(`Official-source request timed out after ${REQUEST_TIMEOUT_MS / 1000} seconds`);
    throw new Error(`Official-source request failed: ${error?.message || String(error)}`);
  } finally {
    clearTimeout(timeout);
  }
  const body = await response.text();
  if (response.headers.get("x-amzn-waf-action") === "challenge" || (response.status === 202 && !body.trim())) {
    throw new Error("Official source presented an automated-access challenge; use the official website manually and record that the connector could not retrieve the result.");
  }
  if (!response.ok) {
    const safeBody = textFromXml(body).slice(0, 300);
    throw new Error(`Official source returned HTTP ${response.status}${safeBody ? `: ${safeBody}` : ""}`);
  }
  return { body, response };
}

async function fetchJson(url, options) {
  const { body } = await fetchResponse(url, options);
  try {
    return JSON.parse(body);
  } catch {
    throw new Error("Official source returned a non-JSON response");
  }
}

function metadata(source, url, warning) {
  return { source, source_url: url, retrieved_at: new Date().toISOString(), coverage_warning: warning };
}

export function parseAtomFeed(xml, limit = 10) {
  const entries = xml.match(/<entry>([\s\S]*?)<\/entry>/gi) || [];
  return entries.slice(0, limit).map(entry => ({
    title: textFromXml(firstTag(entry, "title")),
    published: firstTag(entry, "published") || undefined,
    updated: firstTag(entry, "updated") || undefined,
    author: textFromXml(firstTag(firstTag(entry, "author"), "name")) || undefined,
    identifier: textFromXml(firstTag(entry, "tna:identifier")) || undefined,
    public_url: attrFromTag(entry, "link", "href", 'rel="alternate"'),
    xml_url: attrFromTag(entry, "link", "href", 'type="application/akn+xml"'),
    pdf_url: attrFromTag(entry, "link", "href", 'type="application/pdf"')
  }));
}

export function normalizeOfficialPath(value, pattern, label) {
  const path = String(value || "").trim().replace(/^\/+|\/+$/g, "");
  if (!pattern.test(path) || path.includes("..")) throw new Error(`${label} is invalid`);
  return path;
}

async function searchFederalRegister(args) {
  const query = String(args.query || "").trim();
  if (!query) throw new Error("query is required");
  assertDate(args.published_from, "published_from");
  assertDate(args.published_to, "published_to");
  const url = new URL(`${FEDERAL_REGISTER_BASE}/documents.json`);
  const limit = clamp(args.limit, 10, 50);
  url.searchParams.set("per_page", String(limit));
  url.searchParams.set("order", "newest");
  url.searchParams.set("conditions[term]", query);
  if (args.document_type) url.searchParams.append("conditions[type][]", args.document_type);
  if (args.published_from) url.searchParams.set("conditions[publication_date][gte]", args.published_from);
  if (args.published_to) url.searchParams.set("conditions[publication_date][lte]", args.published_to);
  const data = await fetchJson(url);
  return {
    ...metadata("Federal Register", url.toString(), "Confirm legal effect, effective date, amendments, stays and codification from the document and other controlling sources."),
    total_results: data.count,
    results: (data.results || []).slice(0, limit).map(item => ({
      document_number: item.document_number,
      title: item.title,
      type: item.type,
      abstract: item.abstract,
      publication_date: item.publication_date,
      effective_on: item.effective_on,
      agencies: item.agencies,
      html_url: item.html_url,
      pdf_url: item.pdf_url,
      json_url: item.json_url,
      citation: item.citation,
      cfr_references: item.cfr_references
    }))
  };
}

async function getFederalRegisterDocument(args) {
  const number = String(args.document_number || "").trim();
  if (!/^[A-Za-z0-9-]{3,80}$/.test(number)) throw new Error("document_number is invalid");
  const url = `${FEDERAL_REGISTER_BASE}/documents/${encodeURIComponent(number)}.json`;
  const data = await fetchJson(url);
  return { ...metadata("Federal Register", url, "Metadata is not a substitute for checking the full published document and current legal status."), document: data };
}

function regulationsKey() {
  const key = process.env.REGULATIONS_GOV_API_KEY?.trim();
  if (!key) throw new Error("Regulations.gov requires a free API key. Set REGULATIONS_GOV_API_KEY, restart the plugin, and retry.");
  return key;
}

async function regulationsRequest(path, params = {}) {
  const url = new URL(`${REGULATIONS_BASE}/${path}`);
  for (const [key, value] of Object.entries(params)) if (value !== undefined && value !== "") url.searchParams.set(key, String(value));
  const data = await fetchJson(url, { headers: { "X-Api-Key": regulationsKey() } });
  return { data, url: url.toString() };
}

async function searchRulemaking(args) {
  const resource = args.resource || "documents";
  const query = String(args.query || "").trim();
  if (!query) throw new Error("query is required");
  const { data, url } = await regulationsRequest(resource, {
    "filter[searchTerm]": query,
    "filter[agencyId]": args.agency_id,
    "page[size]": clamp(args.limit, 10, 25)
  });
  return {
    ...metadata("Regulations.gov", url, "Docket material and comments are not controlling law. Verify final rules and effective dates in the Federal Register and applicable code."),
    resource,
    meta: data.meta,
    results: data.data || [],
    read_only: true
  };
}

async function getRulemakingRecord(args) {
  const resource = args.resource;
  const identifier = String(args.identifier || "").trim();
  if (!/^[A-Za-z0-9._-]{3,160}$/.test(identifier)) throw new Error("identifier is invalid");
  const { data, url } = await regulationsRequest(`${resource}/${encodeURIComponent(identifier)}`);
  return {
    ...metadata("Regulations.gov", url, "This record may be a proposal, supporting document, docket or comment rather than controlling law."),
    resource,
    record: data.data,
    included: data.included,
    read_only: true
  };
}

async function searchUkLegislation(args) {
  const title = String(args.title || "").trim();
  if (!title) throw new Error("title is required");
  const url = new URL("/all/data.feed", UK_LEGISLATION_BASE);
  url.searchParams.set("title", title);
  if (args.year) url.searchParams.set("year", String(args.year));
  const limit = clamp(args.limit, 10, 20);
  let body;
  try {
    ({ body } = await fetchResponse(url, { headers: { Accept: "application/atom+xml, application/xml" } }));
  } catch (error) {
    return {
      ...metadata("legislation.gov.uk", url.toString(), "The official endpoint could not be retrieved automatically. Use the official search link manually and verify extent, commencement, amendments, historical versions and outstanding effects."),
      title,
      results: [],
      access_status: "manual_official_search_required",
      access_error: error?.message || String(error),
      manual_search_url: `${UK_LEGISLATION_BASE}/all?title=${encodeURIComponent(title)}`
    };
  }
  return {
    ...metadata("legislation.gov.uk", url.toString(), "Check territorial extent, application, commencement, amendments, historical versions and outstanding effects before relying on revised text."),
    title,
    results: parseAtomFeed(body, limit)
  };
}

async function getUkLegislation(args) {
  const path = normalizeOfficialPath(args.legislation_path, /^[a-z][a-z0-9-]*\/\d{4}\/\d+[a-z]?$/i, "legislation_path");
  const maxChars = clamp(args.max_chars, 12_000, MAX_TEXT_CHARS);
  const url = `${UK_LEGISLATION_BASE}/${path}/data.xml`;
  const { body } = await fetchResponse(url, { headers: { Accept: "application/xml, text/xml" } });
  const text = textFromXml(body);
  return {
    ...metadata("legislation.gov.uk", url, "This extract may omit structure and editorial warnings. Check extent, commencement, amendments, historical versions and outstanding effects on the official page."),
    legislation_path: path,
    public_url: `${UK_LEGISLATION_BASE}/${path}`,
    text_extract: text.slice(0, maxChars),
    truncated: text.length > maxChars
  };
}

async function searchUkCaseLaw(args) {
  const query = String(args.query || "").trim();
  if (!query) throw new Error("query is required");
  assertDate(args.from_date, "from_date");
  assertDate(args.to_date, "to_date");
  const url = new URL("/atom.xml", UK_CASE_LAW_BASE);
  url.searchParams.set("query", query);
  if (args.from_date) url.searchParams.set("from", args.from_date);
  if (args.to_date) url.searchParams.set("to", args.to_date);
  const limit = clamp(args.limit, 10, 20);
  const { body } = await fetchResponse(url, { headers: { Accept: "application/atom+xml, application/xml" } });
  return {
    ...metadata("The National Archives Find Case Law", url.toString(), "Coverage is incomplete and this service is not a citator. Check appeal history and later treatment separately. Use fair and reasonable request volumes; bulk computational analysis requires a separate licence."),
    query,
    results: parseAtomFeed(body, limit),
    licence_url: `${UK_CASE_LAW_BASE}/terms-of-use`
  };
}

async function getUkCaseLaw(args) {
  const path = normalizeOfficialPath(args.judgment_path, /^(?:uksc|ukpc|ewca\/(?:civ|crim)|ewhc\/[a-z0-9-]+|ewcc|ewfc|ewcop(?:\/t\d)?|eat|ukut\/[a-z0-9-]+|ukftt\/[a-z0-9-]+)\/\d{4}\/\d+$/i, "judgment_path");
  const maxChars = clamp(args.max_chars, 12_000, MAX_TEXT_CHARS);
  const url = `${UK_CASE_LAW_BASE}/${path}/data.xml`;
  const { body } = await fetchResponse(url, { headers: { Accept: "application/akn+xml, application/xml" } });
  const text = textFromXml(body);
  return {
    ...metadata("The National Archives Find Case Law", url, "This is not later-treatment or appeal-history verification. Coverage is incomplete; use reasonable request volumes and observe the Open Justice Licence."),
    judgment_path: path,
    public_url: `${UK_CASE_LAW_BASE}/${path}`,
    text_extract: text.slice(0, maxChars),
    truncated: text.length > maxChars,
    licence_url: `${UK_CASE_LAW_BASE}/terms-of-use`
  };
}

// ---- eCFR ----

function stripHtml(value = "") {
  return decodeXml(String(value).replace(/<span class="elipsis">\s*…\s*<\/span>/gi, " … ").replace(/<\/?(?:strong|em|b|i|span)\b[^>]*>/gi, "").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function ecfrPublicUrl(title, { section, part, date } = {}) {
  const point = date ? `on/${date}` : "current";
  if (section) return `${ECFR_BASE}/${point}/title-${title}/section-${section}`;
  if (part) return `${ECFR_BASE}/${point}/title-${title}/part-${part}`;
  return `${ECFR_BASE}/${point}/title-${title}`;
}

export function parseEcfrSearch(data, limit = 10) {
  return (data?.results || []).slice(0, limit).map(item => {
    const h = item.hierarchy || {};
    const headings = item.headings || {};
    const locator = h.section ? `§ ${h.section}` : h.appendix ? `Appendix ${h.appendix}` : h.part ? `Part ${h.part}` : "";
    return {
      citation: `${h.title} CFR ${h.section || h.part || ""}`.trim(),
      heading: [headings.part, headings.section || headings.appendix].filter(Boolean).join(" — "),
      agency: (headings.chapter || "").trim() || undefined,
      locator,
      excerpt: stripHtml(item.full_text_excerpt),
      in_effect_from: item.starts_on,
      in_effect_until: item.ends_on || null,
      removed: Boolean(item.removed),
      public_url: h.section ? ecfrPublicUrl(h.title, { section: h.section }) : h.part ? ecfrPublicUrl(h.title, { part: h.part }) : undefined
    };
  });
}

async function searchEcfr(args) {
  const query = String(args.query || "").trim();
  if (!query) throw new Error("query is required");
  assertDate(args.date, "date");
  const limit = clamp(args.limit, 10, 20);
  const url = new URL("/api/search/v1/results", ECFR_BASE);
  url.searchParams.set("query", query);
  url.searchParams.set("per_page", String(limit));
  url.searchParams.set("date", args.date || "current");
  if (args.title) url.searchParams.set("hierarchy[title]", String(args.title));
  if (args.part) {
    if (!args.title) throw new Error("part requires title");
    if (!/^[0-9A-Za-z]+$/.test(String(args.part))) throw new Error("part is invalid");
    url.searchParams.set("hierarchy[part]", String(args.part));
  }
  const data = await fetchJson(url);
  return {
    ...metadata("eCFR (Electronic Code of Federal Regulations)", url.toString(), "The eCFR is an editorially compiled, continuously updated version of the CFR; it is authoritative but not the official legal edition. Check the Federal Register for recent amendments and effective dates, and confirm the version in force on the relevant date."),
    query,
    date: args.date || "current",
    total_results: data?.meta?.total_count,
    results: parseEcfrSearch(data, limit)
  };
}

const ecfrTitleDates = new Map();

async function latestEcfrDate(title) {
  if (ecfrTitleDates.has(title)) return ecfrTitleDates.get(title);
  const data = await fetchJson(`${ECFR_BASE}/api/versioner/v1/titles.json`);
  for (const item of data?.titles || []) if (item.up_to_date_as_of) ecfrTitleDates.set(item.number, item.up_to_date_as_of);
  const date = ecfrTitleDates.get(title);
  if (!date) throw new Error(`eCFR title ${title} was not found or is reserved`);
  return date;
}

async function getEcfrText(args) {
  const title = Number(args.title);
  if (!Number.isInteger(title) || title < 1 || title > 50) throw new Error("title must be a CFR title number from 1 to 50");
  const section = args.section ? String(args.section).trim() : "";
  const part = args.part ? String(args.part).trim() : "";
  if (!section && !part) throw new Error("Give a section (for example 314.4) or a part (for example 314)");
  if (section && !/^[0-9A-Za-z]+(?:\.[0-9A-Za-z-]+)?$/.test(section)) throw new Error("section is invalid");
  if (part && !/^[0-9A-Za-z]+$/.test(part)) throw new Error("part is invalid");
  assertDate(args.date, "date");
  const date = args.date || await latestEcfrDate(title);
  const maxChars = clamp(args.max_chars, 12_000, MAX_TEXT_CHARS);
  const url = new URL(`/api/versioner/v1/full/${date}/title-${title}.xml`, ECFR_BASE);
  if (section) url.searchParams.set("section", section);
  else url.searchParams.set("part", part);
  const { body } = await fetchResponse(url, { headers: { Accept: "application/xml, text/xml", "Accept-Encoding": "gzip, deflate, br" } });
  const text = textFromXml(body);
  return {
    ...metadata("eCFR (Electronic Code of Federal Regulations)", url.toString(), "Point-in-time eCFR text; not the official legal edition. Check later Federal Register amendments and effective dates."),
    citation: `${title} CFR ${section || `Part ${part}`}`,
    as_of: date,
    public_url: ecfrPublicUrl(title, { section, part, date: args.date }),
    text_extract: text.slice(0, maxChars),
    truncated: text.length > maxChars
  };
}

// ---- The Gazette (UK) ----

let lastGazetteRequest = 0;

async function gazetteFetch(url, options) {
  const wait = lastGazetteRequest + GAZETTE_MIN_INTERVAL_MS - Date.now();
  if (wait > 0) await new Promise(resolve => setTimeout(resolve, wait));
  lastGazetteRequest = Date.now();
  return fetchResponse(url, options);
}

function gazetteUnavailable(source, url, manualUrl, error) {
  const limited = /HTTP 429/.test(error?.message || "");
  return {
    ...metadata("The Gazette", url, "The Gazette could not be retrieved automatically. Search the official site manually and record that the connector check was not completed."),
    access_status: limited ? "rate_limited_by_publisher" : "unavailable",
    access_error: limited ? "The Gazette rate-limited this request (HTTP 429). Wait a few minutes before retrying, or search manually." : (error?.message || String(error)),
    manual_search_url: manualUrl,
    results: []
  };
}

export function parseGazetteSearch(data, limit = 10) {
  const entries = Array.isArray(data?.entry) ? data.entry : data?.entry ? [data.entry] : [];
  return entries.slice(0, limit).map(entry => {
    const id = String(entry.id || "").split("/").pop();
    const categories = (Array.isArray(entry.category) ? entry.category : entry.category ? [entry.category] : []).map(item => item?.["@term"] || item?.term || item).filter(value => typeof value === "string");
    return {
      notice_id: id || undefined,
      notice_type: entry.title,
      notice_code: entry["f:notice-code"],
      published: String(entry.published || "").slice(0, 10) || undefined,
      excerpt: stripHtml(entry.content),
      categories: categories.length ? categories : undefined,
      public_url: id ? `${GAZETTE_BASE}/notice/${id}` : undefined
    };
  });
}

export function parseGazetteNoticeHtml(html) {
  const article = html.match(/<article class="notice">([\s\S]*?)<\/article>/i)?.[1] || "";
  const text = article.replace(/<\/(p|h\d|div|li)>/gi, "\n").replace(/<br\s*\/?>/gi, "\n").split("\n").map(line => stripHtml(line)).filter(Boolean).join("\n");
  return {
    notice_type: stripHtml(html.match(/<title>([^<|]*)/i)?.[1] || "") || undefined,
    published: html.match(/content="(\d{4}-\d{2}-\d{2})"[^>]*property="gaz:hasPublicationDate/i)?.[1] || html.match(/property="gaz:hasPublicationDate[^"]*"[^>]*content="(\d{4}-\d{2}-\d{2})"/i)?.[1],
    notice_code: stripHtml(html.match(/property="gaz:hasNoticeCode">([^<]*)/i)?.[1] || "") || undefined,
    text
  };
}

async function searchGazette(args) {
  const query = String(args.query || "").trim();
  if (query.length < 2) throw new Error("query is required");
  assertDate(args.published_from, "published_from");
  assertDate(args.published_to, "published_to");
  const section = args.section || "insolvency";
  const path = section === "all" ? "all-notices" : section;
  const limit = clamp(args.limit, 10, 25);
  const url = new URL(`/${path}/notice/data.json`, GAZETTE_BASE);
  url.searchParams.set("text", query);
  url.searchParams.set("results-page-size", String(limit));
  if (args.published_from) url.searchParams.set("start-publish-date", args.published_from);
  if (args.published_to) url.searchParams.set("end-publish-date", args.published_to);
  const manualUrl = `${GAZETTE_BASE}/${path}/notice?text=${encodeURIComponent(query)}`;
  let body;
  try {
    ({ body } = await gazetteFetch(url, { headers: { Accept: "application/json" } }));
  } catch (error) {
    return { ...gazetteUnavailable("The Gazette", url.toString(), manualUrl, error), query, section };
  }
  let data;
  try {
    data = JSON.parse(body);
  } catch {
    return { ...gazetteUnavailable("The Gazette", url.toString(), manualUrl, new Error("The Gazette returned a non-JSON response")), query, section };
  }
  return {
    ...metadata("The Gazette", url.toString(), "Search is by text and may miss notices with different spellings, former names or only a company number. An absent notice is not proof that no insolvency event occurred; check Companies House and the Individual Insolvency Register as well."),
    query,
    section,
    total_results: Number(data?.["f:total"]) || undefined,
    results: parseGazetteSearch(data, limit),
    licence: "Open Government Licence v3.0"
  };
}

async function getGazetteNotice(args) {
  const id = String(args.notice_id || "").trim();
  if (!/^[A-Za-z0-9-]{3,40}$/.test(id)) throw new Error("notice_id is invalid");
  const url = `${GAZETTE_BASE}/notice/${encodeURIComponent(id)}`;
  let body;
  try {
    ({ body } = await gazetteFetch(url, { headers: { Accept: "text/html" } }));
  } catch (error) {
    return { ...gazetteUnavailable("The Gazette", url, url, error), notice_id: id };
  }
  const notice = parseGazetteNoticeHtml(body);
  return {
    ...metadata("The Gazette", url, "Check the notice against Companies House or the court record before relying on it; later notices may supersede it."),
    notice_id: id,
    public_url: url,
    ...notice,
    text: notice.text.slice(0, MAX_TEXT_CHARS),
    licence: "Open Government Licence v3.0"
  };
}

export async function callTool(name, args = {}) {
  if (name === "search_us_federal_register") return searchFederalRegister(args);
  if (name === "get_us_federal_register_document") return getFederalRegisterDocument(args);
  if (name === "search_us_rulemaking") return searchRulemaking(args);
  if (name === "get_us_rulemaking_record") return getRulemakingRecord(args);
  if (name === "search_uk_legislation") return searchUkLegislation(args);
  if (name === "get_uk_legislation_text") return getUkLegislation(args);
  if (name === "search_uk_case_law") return searchUkCaseLaw(args);
  if (name === "get_uk_case_law_judgment") return getUkCaseLaw(args);
  if (name === "search_us_ecfr") return searchEcfr(args);
  if (name === "get_us_ecfr_text") return getEcfrText(args);
  if (name === "search_uk_gazette_notices") return searchGazette(args);
  if (name === "get_uk_gazette_notice") return getGazetteNotice(args);
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
    send({ jsonrpc: "2.0", id: message.id, result: { protocolVersion: message.params?.protocolVersion || "2025-06-18", capabilities: { tools: { listChanged: false } }, serverInfo: { name: "legal-ai-skills-legal-research", version: VERSION } } });
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
      send({ jsonrpc: "2.0", id: message.id, result: { content: [{ type: "text", text: JSON.stringify(result, null, 2) }], structuredContent: result, isError: false } });
    } catch (error) {
      send({ jsonrpc: "2.0", id: message.id, result: { content: [{ type: "text", text: error?.message || String(error) }], isError: true } });
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
