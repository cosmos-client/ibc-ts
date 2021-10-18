# @cosmos-client/ibc

REST API client for Cosmos SDK IBC module.

## Install

```shell
npm install @cosmos-client/core @cosmos-client/ibc
```

To see the usage of `@cosmos-client/core`, please see this [link](https://github.com/cosmos-client/cosmos-client-ts);

## Examples

Working in progress.

## For library developlers

Use [starport](https://github.com/tendermint/starport) to test.

The first digit major version and the second digit minor version should match Cosmos SDK.
The third digit patch version can be independently incremented.

### for `proto.d.ts` error

Insert:

```typescript
import global_tendermint = tendermint;
```
