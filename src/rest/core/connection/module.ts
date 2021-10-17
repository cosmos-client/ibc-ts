import { QueryApi } from '../../../openapi/api';
import { cosmosclient } from '@cosmos-client/core';

export function clientConnections(sdk: cosmosclient.CosmosSDK, clientID: string) {
  return new QueryApi(undefined, sdk.url).clientConnections(clientID);
}

export function connections(
  sdk: cosmosclient.CosmosSDK,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).connections(
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function clientState(sdk: cosmosclient.CosmosSDK, connectionID: string) {
  return new QueryApi(undefined, sdk.url).connectionClientState(connectionID);
}

export function connectionConsensusState(
  sdk: cosmosclient.CosmosSDK,
  connectionID: string,
  revisionNumber: bigint,
  revisionHeight: bigint,
) {
  return new QueryApi(undefined, sdk.url).connectionConsensusState(connectionID, revisionNumber.toString(), revisionHeight.toString());
}
