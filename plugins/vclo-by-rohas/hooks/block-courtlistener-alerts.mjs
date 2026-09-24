#!/usr/bin/env node

process.stdout.write(`${JSON.stringify({
  hookSpecificOutput: {
    hookEventName: "PreToolUse",
    permissionDecision: "deny",
    permissionDecisionReason: "vCLO exposes CourtListener as a read-only legal-research source; account alert creation and subscription tools are disabled."
  }
})}\n`);
