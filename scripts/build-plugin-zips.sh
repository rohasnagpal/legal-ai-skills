#!/usr/bin/env bash
# Builds one public-submission zip per plugin. Each archive opens directly
# to the plugin metadata, skills, agents, workflows, integrations, and assets.
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
    package_entries=(.codex-plugin skills assets)
    [[ -f .mcp.json ]] && package_entries+=(.mcp.json)
    [[ -f .mcp.windows.json ]] && package_entries+=(.mcp.windows.json)
    for optional_entry in agents workflows integrations mcp; do
      if [[ -d "$optional_entry" ]]; then
        package_entries+=("$optional_entry")
      fi
    done
    zip -q -r "$zip_path" "${package_entries[@]}"
  )
  echo "built ${zip_path#"$repo_root/"}"
  count=$((count + 1))
done

echo "$count plugin zip(s) written to ${out_dir#"$repo_root/"}/"
