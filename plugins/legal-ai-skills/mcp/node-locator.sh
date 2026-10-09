# Shared by the launch-* scripts. Finds a Node.js 18+ executable even when the
# host (for example a desktop app on macOS) starts with a minimal PATH.
# Order: CODEX_MCP_NODE_PATH, node on PATH, common install locations, then the
# Node.js runtimes bundled with Codex and the ChatGPT desktop app.

node_is_usable() {
  [ -n "$1" ] && [ -x "$1" ] || return 1
  major=$("$1" -e 'process.stdout.write(String(process.versions.node.split(".")[0]))' 2>/dev/null) || return 1
  [ -n "$major" ] && [ "$major" -ge 18 ] 2>/dev/null
}

find_node() {
  if node_is_usable "${CODEX_MCP_NODE_PATH:-}"; then printf '%s\n' "$CODEX_MCP_NODE_PATH"; return 0; fi
  on_path=$(command -v node 2>/dev/null || true)
  if node_is_usable "$on_path"; then printf '%s\n' "$on_path"; return 0; fi
  for candidate in \
    /opt/homebrew/bin/node \
    /usr/local/bin/node \
    /usr/bin/node \
    "$HOME/.volta/bin/node" \
    "$HOME/.local/share/fnm/aliases/default/bin/node" \
    $(ls -d "$HOME"/.nvm/versions/node/*/bin/node 2>/dev/null | sort -r) \
    $(ls -d "$HOME"/.cache/codex-runtimes/*/dependencies/node/bin/node 2>/dev/null) \
    /Applications/ChatGPT.app/Contents/Resources/cua_node/bin/node \
    /Applications/Codex.app/Contents/Resources/node/bin/node
  do
    if node_is_usable "$candidate"; then printf '%s\n' "$candidate"; return 0; fi
  done
  return 1
}
