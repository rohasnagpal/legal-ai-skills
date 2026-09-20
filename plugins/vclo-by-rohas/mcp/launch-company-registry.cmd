@echo off
setlocal

if defined CODEX_MCP_NODE_PATH if exist "%CODEX_MCP_NODE_PATH%" (
  "%CODEX_MCP_NODE_PATH%" "%~dp0company-registry-server.mjs"
  exit /b %ERRORLEVEL%
)

where node >nul 2>&1
if errorlevel 1 (
  echo vCLO company-registry connector requires Node.js or CODEX_MCP_NODE_PATH. 1>&2
  exit /b 127
)

node "%~dp0company-registry-server.mjs"
exit /b %ERRORLEVEL%
