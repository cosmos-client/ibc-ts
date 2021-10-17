# @cosmos-client/ibc

REST API client for Cosmos SDK IBC module.

## Install

```shell
npm install @cosmos-client/ibc
```

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
