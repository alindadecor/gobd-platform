#!/usr/bin/env node
// Generates the QilinCloud TypeScript SDK clients from the vendored OpenAPI
// specs under `openapi-specs/qilin/`. One TypeScript client per Qilin API
// (offer, order, product, platform) is emitted under `src/qilin/<api>/`,
// then deduped (see ./dedupe-qilin-exports.mjs for the rationale).
//
// Run with: `npm run gen:qilin`
import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');
const specsDir = join(repoRoot, 'openapi-specs', 'qilin');
const outRoot = join(repoRoot, 'src', 'qilin');
const cli = join(repoRoot, 'node_modules', '.bin', 'openapi');

if (!existsSync(cli)) {
    console.error('openapi-typescript-codegen not installed. Run `npm install` first.');
    process.exit(1);
}

const verify = spawnSync('node', [join(__dirname, 'verify-qilin-spec-patches.mjs')], {
    stdio: 'inherit',
});
if (verify.status !== 0) {
    process.exit(verify.status ?? 1);
}

const apis = [
    { name: 'offer', className: 'QilinOfferClient' },
    { name: 'order', className: 'QilinOrderClient' },
    { name: 'product', className: 'QilinProductClient' },
    { name: 'platform', className: 'QilinPlatformClient' },
];

for (const api of apis) {
    const input = join(specsDir, `${api.name}.yaml`);
    const output = join(outRoot, api.name);
    console.log(`Generating ${api.className} from ${input}`);
    const res = spawnSync(
        cli,
        ['-i', input, '-o', output, '-c', 'fetch', '--name', api.className, '--useOptions'],
        { stdio: 'inherit' },
    );
    if (res.status !== 0) {
        console.error(`Codegen failed for ${api.name}`);
        process.exit(res.status ?? 1);
    }
}

const dedupe = spawnSync('node', [join(__dirname, 'dedupe-qilin-exports.mjs')], {
    stdio: 'inherit',
});
if (dedupe.status !== 0) {
    process.exit(dedupe.status ?? 1);
}
console.log('Qilin SDK generation complete.');
