#!/usr/bin/env bash
# Builds one public-submission zip per plugin. Each archive opens directly
# to .codex-plugin/, skills/, and assets/ as required by plugin ingestion.
set -euo pipefail

cd "$(dirname "$0")/.."
repo_root=$(pwd)
out_dir="$repo_root/dist/openai-submission"
mkdir -p "$out_dir"
find "$out_dir" -maxdepth 1 -type f -name '*.zip' -delete

count=0
for plugin_json in plugins/*/.codex-plugin/plugin.json; do
  plugin_dir=$(dirname "$(dirname "$plugin_json")")
  plugin_name=$(basename "$plugin_dir")
  version=$(ruby -rjson -e 'puts JSON.parse(File.read(ARGV.fetch(0))).fetch("version")' "$plugin_json")
  zip_path="$out_dir/${plugin_name}-${version}.zip"
  (
    cd "$plugin_dir"
    zip -q -r "$zip_path" .codex-plugin skills assets
  )
  echo "built ${zip_path#"$repo_root/"}"
  count=$((count + 1))
done

echo "$count plugin zip(s) written to ${out_dir#"$repo_root/"}/"
