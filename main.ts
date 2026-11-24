// The Robot Vacuum's Best Excuse
// make.fun program/v1 entry: a robot vacuum explains, in one line,
// why it skipped a spot. Output goes to /output/entry.txt.
//
// The joke: the vacuum's own sensors (lidar + bumper) conspire against
// the dust, so the machine keeps a straight face while blaming a ghost.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const CONFIG = {
  outputPath: "/output/entry.txt",
  outputDir: "/output",
  maxChars: 140,
} as const;

// One line, spoken by the vacuum itself. No newline, no setup to explain.
const EXCUSE =
  "My lidar flagged that corner as a haunted portal, so my bumper filed a formal complaint and I cleaned around the ghost.";

function abort(reason: string): never {
  console.error(`[gate] REJECTED: ${reason}`);
  process.exit(1);
}

function validate(text: string): { chars: number; bytes: number } {
  const chars = [...text].length;
  const bytes = Buffer.byteLength(text, "utf8");

  if (text.length === 0) abort("empty excuse");
  if (text.trim().length === 0) abort("excuse is only whitespace");
  if (text.includes("\n") || text.includes("\r")) {
    abort("excuse spans more than one line");
  }
  if (chars > CONFIG.maxChars) {
    abort(`excuse is ${chars} chars, over the ${CONFIG.maxChars} limit`);
  }
  return { chars, bytes };
}

function run(): void {
  const { chars, bytes } = validate(EXCUSE);

  mkdirSync(CONFIG.outputDir, { recursive: true });
  // Deliberately no trailing newline: the gate counts every character.
  writeFileSync(CONFIG.outputPath, EXCUSE, { encoding: "utf8" });

  // Read back and prove the file is byte-identical to the excuse.
  const saved = readFileSync(CONFIG.outputPath, "utf8");
  if (saved !== EXCUSE) abort("read-back differs from the excuse");
  if (saved.endsWith("\n")) abort("output ends with a newline");

  console.log(`[entry] ${EXCUSE}`);
  console.log(`[gate] chars=${chars}/${CONFIG.maxChars} bytes=${bytes} lines=1`);
  console.log(`[done] wrote ${CONFIG.outputPath}`);
}

run();
