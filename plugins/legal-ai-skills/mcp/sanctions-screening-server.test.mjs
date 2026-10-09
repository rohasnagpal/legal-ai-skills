import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { test } from "node:test";
import { nameScore, normaliseName, parseCsv, parseOfac, parseUk, parseUn, screen } from "./sanctions-screening-server.mjs";

// Fixtures copy the official formats; no network access is used in tests.
const SDN = '36,"AEROCARIBBEAN AIRLINES",-0- ,"CUBA",-0- ,-0- ,-0- ,-0- ,-0- ,-0- ,-0- ,-0- \r\n306,"BANCO NACIONAL DE CUBA",-0- ,"CUBA",-0- ,-0- ,-0- ,-0- ,-0- ,-0- ,-0- ,"a.k.a. \'BNC\'."\r\n2676,"AL ZAWAHIRI, Dr. Ayman","individual","SDGT","Operational and Military Leader of JIHAD GROUP",-0- ,-0- ,-0- ,-0- ,-0- ,-0- ,"DOB 19 Jun 1951; POB Giza, Egypt; nationality Egypt."\r\n\u001a';
const ALT = '306,220,"aka","NATIONAL BANK OF CUBA",-0- \r\n2676,1,"aka","AL-ZAWAHIRI, Aiman Muhammad Rabi",-0- \r\n';
const UK = `<?xml version="1.0" encoding="utf-8"?>
<Designations>
  <DateGenerated>08/10/2026</DateGenerated>
  <Designation>
    <DateDesignated>25/01/2001</DateDesignated>
    <UniqueID>AFG0006</UniqueID>
    <Names>
      <Name><Name1>MOHAMMAD</Name1><Name2>HASSAN</Name2><Name6>AKHUND</Name6><NameType>Primary Name</NameType></Name>
      <Name><Name6>Mullah Mohammad Hassan</Name6><NameType>Alias</NameType></Name>
    </Names>
    <RegimeName>The Afghanistan (Sanctions) (EU Exit) Regulations 2020</RegimeName>
    <IndividualEntityShip>Individual</IndividualEntityShip>
    <SanctionsImposed>Asset freeze|Travel Ban</SanctionsImposed>
    <IndividualDetails><Individual><DOBs><DOB>dd/mm/1950</DOB><DOB>27/08/1955</DOB></DOBs><Nationalities><Nationality>Afghanistan</Nationality></Nationalities></Individual></IndividualDetails>
  </Designation>
  <Designation>
    <DateDesignated>01/03/2022</DateDesignated>
    <UniqueID>RUS3064</UniqueID>
    <Names><Name><Name6>PJSC Rosneft Oil Company</Name6><NameType>Primary Name</NameType></Name><Name><Name6>ROSNEFT</Name6><NameType>Primary Name Variation</NameType></Name></Names>
    <RegimeName>The Russia (Sanctions) (EU Exit) Regulations 2019</RegimeName>
    <IndividualEntityShip>Entity</IndividualEntityShip>
  </Designation>
</Designations>`;
const UN = `<?xml version="1.0" encoding="UTF-8"?>
<CONSOLIDATED_LIST dateGenerated="2026-10-08T23:00:06.496Z">
  <INDIVIDUALS>
    <INDIVIDUAL>
      <DATAID>6907993</DATAID><FIRST_NAME>ERIC</FIRST_NAME><SECOND_NAME>BADEGE</SECOND_NAME><UN_LIST_TYPE>DRC</UN_LIST_TYPE><REFERENCE_NUMBER>CDi.001</REFERENCE_NUMBER><LISTED_ON>2012-12-31</LISTED_ON>
      <NATIONALITY><VALUE>Democratic Republic of the Congo</VALUE></NATIONALITY>
      <INDIVIDUAL_ALIAS><QUALITY>Good</QUALITY><ALIAS_NAME>BADEGE ERIC</ALIAS_NAME></INDIVIDUAL_ALIAS>
      <INDIVIDUAL_DATE_OF_BIRTH><TYPE_OF_DATE>EXACT</TYPE_OF_DATE><YEAR>1971</YEAR></INDIVIDUAL_DATE_OF_BIRTH>
    </INDIVIDUAL>
  </INDIVIDUALS>
  <ENTITIES>
    <ENTITY>
      <DATAID>6908402</DATAID><FIRST_NAME>ADF</FIRST_NAME><UN_LIST_TYPE>DRC</UN_LIST_TYPE><REFERENCE_NUMBER>CDe.001</REFERENCE_NUMBER><LISTED_ON>2014-06-30</LISTED_ON>
      <ENTITY_ALIAS><QUALITY>a.k.a.</QUALITY><ALIAS_NAME>Allied Democratic Forces</ALIAS_NAME></ENTITY_ALIAS>
    </ENTITY>
  </ENTITIES>
</CONSOLIDATED_LIST>`;

const records = [...parseOfac("ofac_sdn", SDN, ALT), ...parseUk(UK).records, ...parseUn(UN).records];

test("CSV parser handles quotes, CRLF, OFAC nulls and the end-of-file marker", () => {
  const rows = parseCsv(SDN);
  assert.equal(rows.length, 3);
  assert.equal(rows[0][2], "");
  assert.equal(rows[1][11], "a.k.a. 'BNC'.");
});

test("OFAC records keep aliases, type, programme, date of birth and nationality", () => {
  const record = records.find(r => r.list === "ofac_sdn" && r.id === "2676");
  assert.equal(record.type, "individual");
  assert.deepEqual(record.programs, ["SDGT"]);
  assert.deepEqual(record.dates_of_birth, ["19 Jun 1951"]);
  assert.deepEqual(record.nationalities, ["Egypt"]);
  assert.equal(record.aliases[0].name, "AL-ZAWAHIRI, Aiman Muhammad Rabi");
  assert.equal(records.find(r => r.id === "36").type, "entity");
});

test("UK and UN parsers read names, aliases, regimes and generation dates", () => {
  const uk = parseUk(UK);
  assert.equal(uk.generated, "2026-10-08");
  const akhund = uk.records.find(r => r.id === "AFG0006");
  assert.equal(akhund.name, "MOHAMMAD HASSAN AKHUND");
  assert.deepEqual(akhund.dates_of_birth, ["1950", "1955-08-27"]);
  assert.equal(akhund.listed_on, "2001-01-25");
  const un = parseUn(UN);
  assert.equal(un.generated, "2026-10-08T23:00:06.496Z");
  assert.equal(un.records.length, 2);
  assert.equal(un.records.find(r => r.id === "CDe.001").aliases[0].name, "Allied Democratic Forces");
});

test("normalisation strips accents, punctuation, honorifics and company suffixes", () => {
  assert.deepEqual(normaliseName("Société Générale S.A."), ["societe", "generale"]);
  assert.deepEqual(normaliseName("AL ZAWAHIRI, Dr. Ayman"), ["zawahiri", "ayman"]);
  assert.equal(nameScore(normaliseName("Ayman al-Zawahiri"), normaliseName("AL ZAWAHIRI, Dr. Ayman")), 100);
});

test("screening finds primary names, aliases and spelling variants, in any word order", () => {
  assert.equal(screen(records, { name: "Ayman al-Zawahiri" })[0].id, "2676");
  const alias = screen(records, { name: "National Bank of Cuba" })[0];
  assert.equal(alias.id, "306");
  assert.match(alias.matched_on, /alias/);
  assert.ok(screen(records, { name: "Aiman Zawahry" }).some(r => r.id === "2676"));
  assert.ok(screen(records, { name: "Allied Democratic Forces" }).some(r => r.id === "CDe.001"));
  assert.deepEqual(screen(records, { name: "John Smith" }), []);
});

test("type filter and secondary identifier checks are applied", () => {
  assert.deepEqual(screen(records, { name: "Rosneft", type: "individual" }), []);
  const withDob = screen(records, { name: "Mohammad Hassan Akhund", date_of_birth: "1950", nationality: "Afghanistan" })[0];
  assert.equal(withDob.date_of_birth_check, "consistent");
  assert.equal(withDob.nationality_check, "consistent");
  assert.equal(screen(records, { name: "Mohammad Hassan Akhund", date_of_birth: "1990-01-01" })[0].date_of_birth_check, "different");
});

test("MCP stdio handshake lists the sanctions tools", async () => {
  const child = spawn(process.execPath, [new URL("./sanctions-screening-server.mjs", import.meta.url).pathname], { stdio: ["pipe", "pipe", "pipe"] });
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
  assert.equal(messages[0].result.serverInfo.name, "legal-ai-skills-sanctions-screening");
  assert.deepEqual(messages[1].result.tools.map(tool => tool.name), ["get_sanctions_lists_status", "screen_sanctions_name", "get_sanctions_record"]);
});
