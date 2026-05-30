// Aggregate entry point for the QilinCloud SDK clients used by fin-core.
//
// Each sub-client is generated from the corresponding OpenAPI spec under
// `openapi-specs/qilin/` via `npm run gen:qilin` (see `scripts/gen-qilin.mjs`).
// Re-export the four API clients here so callers can do:
//
//   import { QilinOfferClient, QilinOrderClient } from './qilin';
export { QilinOfferClient } from './offer';
export { QilinOrderClient } from './order';
export { QilinProductClient } from './product';
export { QilinPlatformClient } from './platform';
