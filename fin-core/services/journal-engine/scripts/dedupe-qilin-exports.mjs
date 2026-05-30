#!/usr/bin/env node
// Post-processes openapi-typescript-codegen output for the QilinCloud specs.
//
// The Qilin OpenAPI specs declare both `successResponse_<X>` and
// `successResponse_<X>[]` as separate schema names. openapi-typescript-codegen
// strips the `[]` suffix when computing TypeScript identifiers, which produces
// duplicate `export ... from './models/<X>'` lines in the generated
// `index.ts`. Compiling under `strict` then fails with TS2300
// "Duplicate identifier".
//
// This script reads each generated `src/qilin/<api>/index.ts` and removes any
// repeated export lines (keeping the first occurrence), so the generated SDK
// type-checks cleanly without modifying the upstream specs or the generator.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const qilinRoot = join(__dirname, '..', 'src', 'qilin');

function dedupeIndex(indexPath) {
    const original = readFileSync(indexPath, 'utf8');
    const lines = original.split('\n');
    const seen = new Set();
    const out = [];
    let removed = 0;
    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('export ')) {
            if (seen.has(trimmed)) {
                removed += 1;
                continue;
            }
            seen.add(trimmed);
        }
        out.push(line);
    }
    if (removed > 0) {
        writeFileSync(indexPath, out.join('\n'));
        console.log(`  ${indexPath}: removed ${removed} duplicate export(s)`);
    }
}

const apis = readdirSync(qilinRoot).filter((name) =>
    statSync(join(qilinRoot, name)).isDirectory(),
);
console.log(`Deduping generated indexes under ${qilinRoot}`);
for (const api of apis) {
    const indexPath = join(qilinRoot, api, 'index.ts');
    try {
        dedupeIndex(indexPath);
    } catch (err) {
        if (err.code !== 'ENOENT') throw err;
    }
}
