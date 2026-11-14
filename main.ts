// food-picture-01 entry (Node 22, standard library only).
// The image beside this file is a steaming bowl of smoky Nigerian party
// jollof rice with a charred grilled chicken drumstick and golden fried
// plantain, in a dark clay bowl under warm light.
// The program copies that image to the output directory as entry.png.
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
const dst = join(outDir, 'entry.png');
copyFileSync(src, dst);
// Fail loudly on a truncated copy: the output must be byte-identical to the source.
const srcSize = statSync(src).size;
const dstSize = statSync(dst).size;
if (dstSize !== srcSize) {
  throw new Error(`entry.png copy truncated: wrote ${dstSize} of ${srcSize} bytes`);
}
console.log(`wrote ${dst} (${dstSize} bytes)`);
