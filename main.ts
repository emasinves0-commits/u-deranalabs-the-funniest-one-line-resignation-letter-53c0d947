import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_LINE =
  "Effective 11/26: I’m rate-limiting myself to 0 RPM. Black Friday’s your problem now. @Dave, you’re up.";

const MAX_CHARS = 140;
const MIN_CHARS = 1;

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

function validateEntry(line: string): number {
  if (line.trim().length === 0) {
    throw new Error("line is only whitespace.");
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("must be exactly one line.");
  }
  const count = [...line].length;
  if (count < MIN_CHARS || count > MAX_CHARS) {
    throw new Error(`${count} characters, must be ${MIN_CHARS} to ${MAX_CHARS}.`);
  }
  return count;
}

let chars: number;
try {
  chars = validateEntry(ENTRY_LINE);
} catch (err) {
  console.error(`Invalid entry: ${(err as Error).message}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY_LINE + "\n", "utf8");

console.log(ENTRY_LINE);
console.log(`characters: ${chars}`);
console.log(`bytes: ${Buffer.byteLength(ENTRY_LINE, "utf8")}`);
