#!/usr/bin/env bash
# Builds one zip per skill for one-skill upload flows in Claude and ChatGPT.
# Each zip contains the skill's own folder as its root, unchanged
# (e.g. contract-reviewer/SKILL.md) -- that folder name has to keep matching
# the skill's own `name` field, so only the zip's filename is prefixed with
# its category (e.g. contracts-contract-reviewer.zip). That keeps dist/, and
# a flat GitHub release asset list, browsable as more categories are added.
set -euo pipefail

cd "$(dirname "$0")/.."
OUT_DIR="dist"
mkdir -p "$OUT_DIR"
find "$OUT_DIR" -maxdepth 1 -type f -name '*.zip' -delete

count=0
for skill_md in plugins/*/skills/*/SKILL.md; do
  plugin_dir=$(dirname "$(dirname "$(dirname "$skill_md")")")
  skills_dir="$plugin_dir/skills"
  category=$(basename "$plugin_dir")
  skill_name=$(basename "$(dirname "$skill_md")")
  zip_name="${category}-${skill_name}.zip"
  (cd "$skills_dir" && zip -q -r "../../../$OUT_DIR/$zip_name" "$skill_name")
  echo "built $OUT_DIR/$zip_name"
  count=$((count + 1))
done

echo "$count skill zip(s) written to $OUT_DIR/"
