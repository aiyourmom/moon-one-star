import { writeFileSync, mkdirSync } from "node:fs";

// The Moon Gets One Star — one-star review of the Moon, <= 120 chars.
// Picked candidate K3: Moon-only grievance (tidally locked — the same face
// for 4.5 billion years), specific number, punch in the last clause.
const ENTRY =
  "1 star. Same face for 4.5 billion years and it still won't smile back. Rude, distant, and always watching.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate guard: the sealed scorer requires 1-120 chars, one line, non-blank.
// Fail hard before writing anything so a bad text can never be submitted.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry is ${ENTRY.length} chars, gate is 1-120`);
}
if (ENTRY.trim().split("\n").length !== 1 || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY);
console.log(`saved ${ENTRY.length} characters to entry.txt`);
