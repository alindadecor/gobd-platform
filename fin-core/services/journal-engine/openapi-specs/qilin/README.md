# Vendored QilinCloud OpenAPI specs

These files are pulled (and lightly patched) from the four QilinCloud API
repositories on GitHub. They feed `npm run gen:qilin`.

| File | Upstream |
| --- | --- |
| `offer.yaml`    | [`QilinCloud/API-Offer`](https://github.com/QilinCloud/API-Offer/blob/main/openapi-specification/openapi-offer-v1-0-2.yaml) (`openapi-specification/openapi-offer-v1-0-2.yaml`) |
| `order.yaml`    | [`QilinCloud/API-Order`](https://github.com/QilinCloud/API-Order/blob/main/openapi-order.yaml) (`openapi-order.yaml`) |
| `product.yaml`  | [`QilinCloud/API-Product`](https://github.com/QilinCloud/API-Product/blob/main/openapi-specification/openapi-product-v1-0-1.yaml) (`openapi-specification/openapi-product-v1-0-1.yaml`) |
| `platform.yaml` | [`QilinCloud/API-Platform`](https://github.com/QilinCloud/API-Platform/blob/main/openapi-platform.yaml) (`openapi-platform.yaml`) |

## Manual upstream patches

The vendored specs include the fixes below relative to upstream. **If you
re-vendor a spec, reapply these patches** (or the generated client will be
silently broken at runtime). `npm run gen:qilin` runs
`scripts/verify-qilin-spec-patches.mjs` first and refuses to regenerate if
any of these anchors goes missing, so a stale re-vendor fails fast rather
than producing a broken client.

### `platform.yaml`

1. `DELETE /apiKeys/{id}` and `GET /apiKeys/{id}` declared the path parameter
   as `name: key`, but the URL template is `{id}`. The generator emits a path
   bag keyed by `key`, so `{id}` is never interpolated and every call hits
   the literal URL `/apiKeys/{id}`. Renamed the parameter to `id`.

2. `PUT /requests/access/{requestId}/status` had no `parameters:` block at
   all, so `requestId` was missing from the generated method and `{requestId}`
   was never replaced. Added a `requestId` path parameter.

### `order.yaml`

3. `GET /orders/{orderId}/feedbacks/{id}` declared a required JSON
   `requestBody`. Sending a body on a GET violates RFC 9110 and is dropped
   by many proxies/CDNs, so the generated `FeedbackService.getFeedbackById`
   would silently lose its payload. Removed the `requestBody` from this GET
   (kept on `PUT`/`POST` for the same path, which is correct).

## Authenticating with `x-api-key`

The specs declare two security schemes (`bearer` and `api_key`), but
`openapi-typescript-codegen` only emits Bearer/Basic handling in the
generated `core/request.ts`. To authenticate with `x-api-key` instead, set
the header via the client's `HEADERS` config:

```ts
const client = new QilinOfferClient({
    BASE: process.env.QILIN_API_BASE,
    HEADERS: { 'x-api-key': process.env.QILIN_API_KEY ?? '' },
});
```
