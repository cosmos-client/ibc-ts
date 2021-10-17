import { QueryApi } from '../../../openapi/api';
import { cosmosclient } from '@cosmos-client/core';

export function clientStates(
  sdk: cosmosclient.CosmosSDK,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).clientStates(
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function clientState(sdk: cosmosclient.CosmosSDK, clientID: string) {
  return new QueryApi(undefined, sdk.url).clientState(clientID);
}

export function consensusStates(sdk: cosmosclient.CosmosSDK, clientID: string) {
  return new QueryApi(undefined, sdk.url).consensusStates(clientID);
}

export function consensusState(
  sdk: cosmosclient.CosmosSDK,
  clientID: string,
  revisionNumber: bigint,
  revisionHeight: bigint,
  latestHeight?: boolean,
) {
  return new QueryApi(undefined, sdk.url).consensusState(clientID, revisionNumber.toString(), revisionHeight.toString(), latestHeight);
}
