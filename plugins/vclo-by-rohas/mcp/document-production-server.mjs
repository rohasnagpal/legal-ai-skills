#!/usr/bin/env node

import { constants as fsConstants } from "node:fs";
import { access, copyFile, mkdtemp, readdir, rm, stat } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import readline from "node:readline";
import { spawn } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const VERSION = "1.0.0";
const SERVER_DIR = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATE_DIR = path.resolve(SERVER_DIR, "../assets/vclo");
const TOOL_CONFIG = {
  pandoc: { env: "VCLO_PANDOC_PATH", names: ["pandoc"] },
  soffice: { env: "VCLO_SOFFICE_PATH", names: ["soffice", "libreoffice"] },
  ocrmypdf: { env: "VCLO_OCRMYPDF_PATH", names: ["ocrmypdf"] },
  pdfunite: { env: "VCLO_PDFUNITE_PATH", names: ["pdfunite"] },
  qpdf: { env: "VCLO_QPDF_PATH", names: ["qpdf"] }
};

const TOOLS = [
  {
    name: "get_document_toolchain_status",
    description: "Report which free local document-production engines are available before attempting DOCX/PDF conversion, OCR or PDF assembly.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false }
  },
  {
    name: "list_document_templates",
    description: "List the legal-document Markdown templates bundled with vCLO.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false }
  },
  {
    name: "convert_document",
    description: "Create or convert a local document to DOCX, PDF, ODT, RTF, HTML or text using a free local engine. The source is preserved and an existing output is not replaced unless overwrite is true.",
    inputSchema: {
      type: "object",
      properties: {
        input_path: { type: "string", minLength: 1 },
        output_path: { type: "string", minLength: 1 },
        reference_docx: { type: "string", description: "Optional DOCX style reference used by Pandoc." },
        overwrite: { type: "boolean", default: false }
      },
      required: ["input_path", "output_path"],
      additionalProperties: false
    }
  },
  {
    name: "ocr_pdf",
    description: "Create a searchable local PDF with OCRmyPDF. The source is preserved and an existing output is not replaced unless overwrite is true.",
    inputSchema: {
      type: "object",
      properties: {
        input_path: { type: "string", minLength: 1 },
        output_path: { type: "string", minLength: 1 },
        language: { type: "string", description: "Optional OCRmyPDF/Tesseract language code, for example eng or eng+hin." },
        overwrite: { type: "boolean", default: false }
      },
      required: ["input_path", "output_path"],
      additionalProperties: false
    }
  },
  {
    name: "assemble_pdf_bundle",
    description: "Combine local PDFs in the supplied order using pdfunite or qpdf. Existing output is not replaced unless overwrite is true.",
    inputSchema: {
      type: "object",
      properties: {
        input_paths: { type: "array", minItems: 1, items: { type: "string", minLength: 1 } },
        output_path: { type: "string", minLength: 1 },
        overwrite: { type: "boolean", default: false }
      },
      required: ["input_paths", "output_path"],
      additionalProperties: false
    }
  }
];

async function isExecutable(candidate) {
  try {
    await access(candidate, fsConstants.X_OK);
    return true;
  } catch {
    return false;
  }
}

function candidateNames(name) {
  if (process.platform !== "win32") return [name];
  const extensions = (process.env.PATHEXT || ".EXE;.CMD;.BAT").split(";");
  return extensions.map(extension => `${name}${extension.toLowerCase()}`);
}

export async function resolveExecutable(key, env = process.env) {
  const config = TOOL_CONFIG[key];
  if (!config) throw new Error(`Unknown document engine: ${key}`);
  const configured = env[config.env]?.trim();
  if (configured) return (await isExecutable(configured)) ? path.resolve(configured) : null;

  const pathEntries = String(env.PATH || "").split(path.delimiter).filter(Boolean);
  for (const directory of pathEntries) {
    for (const name of config.names.flatMap(candidateNames)) {
      const candidate = path.join(directory, name);
      if (await isExecutable(candidate)) return candidate;
    }
  }
  return null;
}

export async function resolveToolchain(env = process.env) {
  const entries = await Promise.all(Object.keys(TOOL_CONFIG).map(async key => [key, await resolveExecutable(key, env)]));
  const tools = Object.fromEntries(entries.map(([key, executable]) => [key, {
    available: Boolean(executable),
    executable,
    override_environment_variable: TOOL_CONFIG[key].env
  }]));
  return {
    local_only: true,
    tools,
    capabilities: {
      docx_and_pdf_conversion: tools.pandoc.available || tools.soffice.available,
      docx_style_reference: tools.pandoc.available,
      ocr: tools.ocrmypdf.available,
      pdf_assembly: tools.pdfunite.available || tools.qpdf.available,
      bundled_templates: true
    },
    notice: "The MCP adapter is bundled and free. Operations require the corresponding free local executable; no document is uploaded by this server."
  };
}

export async function listTemplates() {
  const entries = await readdir(TEMPLATE_DIR, { withFileTypes: true });
  return entries
    .filter(entry => entry.isFile() && [".md", ".html"].includes(path.extname(entry.name).toLowerCase()))
    .map(entry => {
      const extension = path.extname(entry.name).toLowerCase();
      return {
        name: entry.name.slice(0, -extension.length),
        path: path.join(TEMPLATE_DIR, entry.name),
        format: extension === ".html" ? "html" : "markdown"
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

async function requireInput(filePath, extension) {
  const resolved = path.resolve(String(filePath || ""));
  let details;
  try {
    details = await stat(resolved);
  } catch {
    throw new Error(`Input file does not exist: ${resolved}`);
  }
  if (!details.isFile()) throw new Error(`Input path is not a file: ${resolved}`);
  if (extension && path.extname(resolved).toLowerCase() !== extension) throw new Error(`Input must be a ${extension} file: ${resolved}`);
  return resolved;
}

async function prepareOutput(filePath, overwrite, extension) {
  const resolved = path.resolve(String(filePath || ""));
  if (extension && path.extname(resolved).toLowerCase() !== extension) throw new Error(`Output must use the ${extension} extension: ${resolved}`);
  const parent = path.dirname(resolved);
  const parentDetails = await stat(parent).catch(() => null);
  if (!parentDetails?.isDirectory()) throw new Error(`Output directory does not exist: ${parent}`);
  const exists = await stat(resolved).then(() => true, () => false);
  if (exists && !overwrite) throw new Error(`Output already exists; set overwrite to true to replace it: ${resolved}`);
  return resolved;
}

async function run(executable, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(executable, args, { shell: false, windowsHide: true, stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");
    child.stdout.on("data", chunk => { stdout += chunk; });
    child.stderr.on("data", chunk => { stderr += chunk; });
    child.once("error", reject);
    child.once("exit", code => {
      if (code === 0) resolve({ stdout: stdout.trim(), stderr: stderr.trim() });
      else reject(new Error(`${path.basename(executable)} exited ${code}: ${(stderr || stdout).trim().slice(0, 1000)}`));
    });
  });
}

async function copyProducedFile(source, destination, overwrite) {
  await copyFile(source, destination, overwrite ? 0 : fsConstants.COPYFILE_EXCL);
  return destination;
}

export async function convertDocument(args) {
  const input = await requireInput(args.input_path);
  const output = await prepareOutput(args.output_path, Boolean(args.overwrite));
  const format = path.extname(output).slice(1).toLowerCase();
  if (!new Set(["docx", "pdf", "odt", "rtf", "html", "txt"]).has(format)) {
    throw new Error("Output format must be DOCX, PDF, ODT, RTF, HTML or TXT");
  }
  const reference = args.reference_docx ? await requireInput(args.reference_docx, ".docx") : null;
  const toolchain = await resolveToolchain();
  if (reference && format !== "docx") throw new Error("reference_docx may be used only when producing DOCX output");
  if (reference && !toolchain.tools.pandoc.available) {
    throw new Error("Applying a DOCX style reference requires Pandoc. Install it or set VCLO_PANDOC_PATH.");
  }
  const temporaryDirectory = await mkdtemp(path.join(os.tmpdir(), "vclo-document-"));
  try {
    const temporaryOutput = path.join(temporaryDirectory, `output.${format}`);
    if (toolchain.tools.pandoc.available && (path.extname(input).toLowerCase() === ".md" || reference)) {
      const commandArgs = [input, "-o", temporaryOutput];
      if (reference) commandArgs.push(`--reference-doc=${reference}`);
      await run(toolchain.tools.pandoc.executable, commandArgs);
      await copyProducedFile(temporaryOutput, output, Boolean(args.overwrite));
      return { operation: "convert", engine: "pandoc", input_path: input, output_path: output, local_only: true };
    }
    if (!toolchain.tools.soffice.available) {
      throw new Error("No compatible local conversion engine is available. Install LibreOffice or Pandoc, or set VCLO_SOFFICE_PATH or VCLO_PANDOC_PATH.");
    }
    await run(toolchain.tools.soffice.executable, ["--headless", "--convert-to", format, "--outdir", temporaryDirectory, input]);
    const produced = path.join(temporaryDirectory, `${path.basename(input, path.extname(input))}.${format}`);
    await requireInput(produced);
    await copyProducedFile(produced, output, Boolean(args.overwrite));
    return { operation: "convert", engine: "libreoffice", input_path: input, output_path: output, local_only: true };
  } finally {
    await rm(temporaryDirectory, { recursive: true, force: true });
  }
}

export async function ocrPdf(args) {
  const input = await requireInput(args.input_path, ".pdf");
  const output = await prepareOutput(args.output_path, Boolean(args.overwrite), ".pdf");
  const executable = await resolveExecutable("ocrmypdf");
  if (!executable) throw new Error("OCRmyPDF is not available. Install it or set VCLO_OCRMYPDF_PATH.");
  const temporaryDirectory = await mkdtemp(path.join(os.tmpdir(), "vclo-ocr-"));
  try {
    const temporaryOutput = path.join(temporaryDirectory, "output.pdf");
    const commandArgs = ["--skip-text"];
    if (args.language) commandArgs.push("--language", String(args.language));
    commandArgs.push(input, temporaryOutput);
    await run(executable, commandArgs);
    await copyProducedFile(temporaryOutput, output, Boolean(args.overwrite));
    return { operation: "ocr", engine: "ocrmypdf", input_path: input, output_path: output, language: args.language || null, local_only: true };
  } finally {
    await rm(temporaryDirectory, { recursive: true, force: true });
  }
}

export async function assemblePdfBundle(args) {
  if (!Array.isArray(args.input_paths) || args.input_paths.length === 0) throw new Error("input_paths must contain at least one PDF");
  const inputs = await Promise.all(args.input_paths.map(input => requireInput(input, ".pdf")));
  const output = await prepareOutput(args.output_path, Boolean(args.overwrite), ".pdf");
  const toolchain = await resolveToolchain();
  const temporaryDirectory = await mkdtemp(path.join(os.tmpdir(), "vclo-bundle-"));
  try {
    const temporaryOutput = path.join(temporaryDirectory, "output.pdf");
    if (toolchain.tools.pdfunite.available) {
      await run(toolchain.tools.pdfunite.executable, [...inputs, temporaryOutput]);
      await copyProducedFile(temporaryOutput, output, Boolean(args.overwrite));
      return { operation: "assemble", engine: "pdfunite", input_paths: inputs, output_path: output, local_only: true };
    }
    if (toolchain.tools.qpdf.available) {
      const pages = inputs.flatMap(input => [input, "1-z"]);
      await run(toolchain.tools.qpdf.executable, ["--empty", "--pages", ...pages, "--", temporaryOutput]);
      await copyProducedFile(temporaryOutput, output, Boolean(args.overwrite));
      return { operation: "assemble", engine: "qpdf", input_paths: inputs, output_path: output, local_only: true };
    }
    throw new Error("No local PDF assembly engine is available. Install pdfunite or qpdf, or set VCLO_PDFUNITE_PATH or VCLO_QPDF_PATH.");
  } finally {
    await rm(temporaryDirectory, { recursive: true, force: true });
  }
}

export async function callTool(name, args = {}) {
  if (name === "get_document_toolchain_status") return resolveToolchain();
  if (name === "list_document_templates") return { templates: await listTemplates(), local_only: true };
  if (name === "convert_document") return convertDocument(args);
  if (name === "ocr_pdf") return ocrPdf(args);
  if (name === "assemble_pdf_bundle") return assemblePdfBundle(args);
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
    send({ jsonrpc: "2.0", id: message.id, result: {
      protocolVersion: message.params?.protocolVersion || "2025-06-18",
      capabilities: { tools: { listChanged: false } },
      serverInfo: { name: "vclo-document-production", version: VERSION }
    } });
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
      send({ jsonrpc: "2.0", id: message.id, result: {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        structuredContent: result,
        isError: false
      } });
    } catch (error) {
      send({ jsonrpc: "2.0", id: message.id, result: {
        content: [{ type: "text", text: error?.message || String(error) }],
        isError: true
      } });
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
