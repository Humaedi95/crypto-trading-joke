// crypto-trading-joke — one original line about crypto and trading life.
// The program writes the joke to /output/entry.txt (or $ENTRY_OUTPUT_DIR),
// and refuses to write it if it ever grows past the contest's 200-char cap.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My trading strategy: buy the top, panic-sell the bottom, then tell the group chat the chart was obviously rigged.";

if (JOKE.length > 200) {
  throw new Error(`Joke is ${JOKE.length} characters, over the 200-character limit.`);
}

const outDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${join(outDir, "entry.txt")}`);
