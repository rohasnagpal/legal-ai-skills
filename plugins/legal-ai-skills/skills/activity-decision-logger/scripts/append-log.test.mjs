import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { appendEntry } from './append-log.mjs';
const event = { matter_id: 'M1', actor: 'Matter Owner', event_type: 'decision', summary: 'Await primary text', provenance: 'model_reported', retrospective: false, recorded_reasons: 'Only an unofficial summary is available', references: ['document-1:clause-3'], uncertainties: ['Current law unverified'] };
function temp(t) { const d = fs.mkdtempSync(path.join(os.tmpdir(), 'legal-log-')); t.after(() => fs.rmSync(d, { recursive: true, force: true })); return d; }
test('retains original decision and appends a linked correction with actual record times', t => {
 const d = temp(t); const first = appendEntry(d, event);
 const second = appendEntry(d, { ...event, summary: 'Source retrieved', related_event_ids: [first.event_id] });
 const lines = fs.readFileSync(path.join(d, 'activity-log.jsonl'), 'utf8').trim().split('\n').map(JSON.parse);
 assert.equal(lines.length, 2); assert.equal(lines[0].summary, event.summary); assert.equal(lines[1].related_event_ids[0], first.event_id);
 assert.notEqual(first.event_id, second.event_id); assert.ok(Number.isFinite(Date.parse(first.recorded_at))); assert.equal(first.event_time, null);
});
test('rejects invented fields, missing reasons and cross-matter contamination', t => {
 const d = temp(t); appendEntry(d, event);
 assert.throws(() => appendEntry(d, { ...event, thought_transcript: 'x' }), /Unsupported/);
 assert.throws(() => appendEntry(d, { ...event, recorded_reasons: '' }), /requires/);
 assert.throws(() => appendEntry(d, { ...event, matter_id: 'M2' }), /Matter ID/);
 assert.equal(fs.readFileSync(path.join(d, 'activity-log.jsonl'), 'utf8').trim().split('\n').length, 1);
});
test('fails on concurrent writer lock or damaged trailing record without altering data', t => {
 const d = temp(t); fs.writeFileSync(path.join(d, '.activity-log.lock'), '');
 assert.throws(() => appendEntry(d, event), /EEXIST/); fs.unlinkSync(path.join(d, '.activity-log.lock'));
 const target = path.join(d, 'activity-log.jsonl'); fs.writeFileSync(target, '{"partial":');
 assert.throws(() => appendEntry(d, event), /incomplete/); assert.equal(fs.readFileSync(target, 'utf8'), '{"partial":');
 assert.equal(fs.existsSync(path.join(d, '.activity-log.lock')), false);
});
