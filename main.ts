// Make the AI Judge Laugh — one-line office-life joke.
// Writes the winning line (and nothing else, no trailing newline) to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";

// The joke in three beats: the scene, the escalation, the punch.
// Each beat carries its own concrete noun/number so the line lands on one read.
const segments: string[] = [
  "My boss sent a 'quick question' at 4:59 on Friday,",
  "and by 5:04 it had a spreadsheet, a 9am Monday call,",
  "and my entire weekend.",
];

function buildLine(parts: readonly string[]): string {
  const line = parts.join(" ");
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.trim() !== line) {
    throw new Error("entry line must be a single clean line");
  }
  return line;
}

const line = buildLine(segments);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
