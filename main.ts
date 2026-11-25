// One-Line Office Joke Laugh-Off — hand-in program (Node 22, standard library only).
//
// The entry is a single one-line office joke. This program writes it, exactly
// as the judge will read it, to entry.txt in the output directory: /output in
// the grader, or MAKEFUN_OUTPUT_DIR anywhere else:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The joke: a calendar notification, the driest artifact in office life —
// a "quick" fifteen minutes that has quietly recurred 214 times.
const JOKE = 'Calendar update: the 15-minute "quick sync" just recurred for the 214th time.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), JOKE, 'utf8');
console.log(JOKE);
