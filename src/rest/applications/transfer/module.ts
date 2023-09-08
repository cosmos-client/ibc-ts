import { QueryApi } from '../../../openapi/api';
import cosmosclient from '@cosmos-client/core';

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).transferParams();
}

export function denomTraces(
  sdk: cosmosclient.CosmosSDK,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).denomTraces(
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function denomTrace(sdk: cosmosclient.CosmosSDK, hash: string) {
  return new QueryApi(undefined, sdk.url).denomTrace(hash);
}

export function denomHash(sdk: cosmosclient.CosmosSDK, trace: string) {
  return new QueryApi(undefined, sdk.url).denomHash(trace);
}

export function escrowAddress(sdk: cosmosclient.CosmosSDK, channelId: string, portId: string) {
  return new QueryApi(undefined, sdk.url).escrowAddress(channelId, portId);
}
