#!/usr/bin/env node
// Verifies that the manual upstream patches documented in
// `openapi-specs/qilin/README.md` are still present in the vendored
// OpenAPI specs. Run as the first step of `npm run gen:qilin` so that a
// developer who re-vendors a spec from upstream is forced to either
// reapply the patches or explicitly update this list before producing a
// silently broken SDK client.
//
// Run with: `node scripts/verify-qilin-spec-patches.mjs`
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');
const specsDir = join(repoRoot, 'openapi-specs', 'qilin');

// Each check defines the spec file, a unique anchor that must be present
// in the patched spec (i.e. the post-patch text), and a `must_not`
// fragment that, if found, indicates the patch has regressed.
const checks = [
    {
        spec: 'platform.yaml',
        patch: 'DELETE /apiKeys/{id} parameter renamed key -> id',
        must_contain:
            "operationId: DeleteQilinApiKeyById\n      parameters:\n        - name: id\n",
        must_not_contain:
            "operationId: DeleteQilinApiKeyById\n      parameters:\n        - name: key\n",
    },
    {
        spec: 'platform.yaml',
        patch: 'GET /apiKeys/{id} parameter renamed key -> id',
        must_contain:
            "operationId: GetQilinApiKeyById\n      parameters:\n        - name: id\n",
        must_not_contain:
            "operationId: GetQilinApiKeyById\n      parameters:\n        - name: key\n",
    },
    {
        spec: 'platform.yaml',
        patch: 'PUT /requests/access/{requestId}/status requestId path parameter added',
        must_contain:
            "operationId: UpdateAccessRequestStatus\n      parameters:\n        - name: requestId\n",
        must_not_contain: null,
    },
    {
        spec: 'order.yaml',
        patch: 'GET /orders/{orderId}/feedbacks/{id} requestBody removed',
        must_contain: 'operationId: GetFeedbackById',
        must_not_contain:
            "operationId: GetFeedbackById\n      parameters:\n        - name: orderId\n          in: path\n          description: The **OrderId** parameter\n          required: true\n          schema:\n            type: string\n        - name: id\n          in: path\n          description: The **feedbackId** parameter from third party\n          required: true\n          schema:\n            type: string\n      requestBody:",
    },
];

const failures = [];
for (const check of checks) {
    const path = join(specsDir, check.spec);
    const body = readFileSync(path, 'utf8');
    if (!body.includes(check.must_contain)) {
        failures.push(
            `${check.spec}: missing patch "${check.patch}" — expected to find:\n  ${check.must_contain.split('\n').join('\n  ')}`,
        );
    }
    if (check.must_not_contain && body.includes(check.must_not_contain)) {
        failures.push(
            `${check.spec}: patch "${check.patch}" regressed — unwanted fragment present:\n  ${check.must_not_contain.split('\n').join('\n  ')}`,
        );
    }
}

if (failures.length > 0) {
    console.error('Qilin spec patch verification failed:\n');
    for (const f of failures) {
        console.error(`- ${f}\n`);
    }
    console.error(
        'See openapi-specs/qilin/README.md "Manual upstream patches" for context.',
    );
    process.exit(1);
}

console.log(`Qilin spec patches verified (${checks.length} checks).`);
