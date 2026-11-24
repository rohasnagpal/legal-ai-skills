#!/usr/bin/env node
// One local JSONL record per invocation; no network or automatic host capture.
import fs from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';

export function appendEntry(directory, input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Entry must be an object');
  const required = ['matter_id', 'actor', 'event_type', 'summary', 'provenance'];
  for (const key of required) {
    if (typeof input[key] !== 'string' || !input[key].trim()) throw new Error(`Missing ${key}`);
  }
  if (!['observed', 'user_statement', 'model_reported'].includes(input.provenance)) throw new Error('Invalid provenance');
  if (typeof input.retrospective !== 'boolean') throw new Error('Declare retrospective true or false');
  if (input.event_type === 'decision' && (typeof input.recorded_reasons !== 'string' || !input.recorded_reasons.trim())) throw new Error('Decision requires recorded_reasons');
  if (!Array.isArray(input.references) || !Array.isArray(input.uncertainties)) throw new Error('Provide references and uncertainties arrays');
  const allowed = new Set([...required, 'retrospective', 'event_time', 'recorded_reasons', 'references', 'uncertainties', 'alternatives', 'related_event_ids', 'output_refs', 'next_step', 'status']);
  for (const key of Object.keys(input)) if (!allowed.has(key)) throw new Error(`Unsupported field: ${key}`);
  if (input.event_time != null && (typeof input.event_time !== 'string' || !/T.*(?:Z|[+-]\d{2}:\d{2})$/.test(input.event_time) || !Number.isFinite(Date.parse(input.event_time)))) throw new Error('event_time must be an ISO timestamp with timezone, or null');
  const entry = { ...input, event_time: input.event_time ?? null, event_id: randomUUID(), recorded_at: new Date().toISOString() };
  fs.mkdirSync(directory, { recursive: true });
  const target = path.join(directory, 'activity-log.jsonl');
  // Exclusive writer lock: fail visibly rather than interleave concurrent writes.
  const lock = path.join(directory, '.activity-log.lock');
  const fd = fs.openSync(lock, 'wx', 0o600);
  try {
    if (fs.existsSync(target)) {
      if (fs.lstatSync(target).isSymbolicLink()) throw new Error('Refusing symlink log');
      const prior = fs.readFileSync(target, 'utf8');
      if (prior && !prior.endsWith('\n')) throw new Error('Log has incomplete trailing entry; review before appending');
      for (const line of prior.split('\n').filter(Boolean)) {
        const old = JSON.parse(line);
        if (old.matter_id !== input.matter_id) throw new Error('Matter ID differs from existing log');
      }
    }
    fs.appendFileSync(target, JSON.stringify(entry) + '\n', { encoding: 'utf8', mode: 0o600 });
    return entry;
  } finally {
    fs.closeSync(fd);
    fs.unlinkSync(lock);
  }
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    if (!process.argv[2]) throw new Error('Usage: node append-log.mjs <authorised-matter-directory> < entry.json');
    const entry = appendEntry(process.argv[2], JSON.parse(fs.readFileSync(0, 'utf8')));
    process.stdout.write(JSON.stringify({ event_id: entry.event_id, recorded_at: entry.recorded_at }) + '\n');
  } catch (error) { process.stderr.write(error.message + '\n'); process.exitCode = 1; }
}
