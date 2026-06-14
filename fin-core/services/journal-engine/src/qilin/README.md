# QilinCloud SDK clients

Generated TypeScript clients for the four [QilinCloud](https://qilin.cloud)
public APIs (Offer, Order, Product, Platform).

The clients are generated with
[`openapi-typescript-codegen`](https://github.com/ferdikoomen/openapi-typescript-codegen)
from the vendored OpenAPI specs in
[`../../openapi-specs/qilin/`](../../openapi-specs/qilin). To regenerate after
updating a spec, run:

```sh
npm run gen:qilin
```

## Why is this code committed?

The QilinCloud SDK is not published to npm — `QilinCloud/SDK-JavaScript` on
GitHub only contains a README. We vendor the OpenAPI specs and generate the
clients locally so the build doesn't require network access at install time.

## Usage

```ts
import { QilinOfferClient } from './qilin';

const client = new QilinOfferClient({
    BASE: process.env.QILIN_API_BASE,
    TOKEN: process.env.QILIN_API_TOKEN,
});

const offers = await client.offer.getOffers();
```

See each sub-directory's generated `index.ts` for the full surface area.
