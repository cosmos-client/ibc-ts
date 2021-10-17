import { QueryApi } from '../../../openapi/api';
import { cosmosclient } from '@cosmos-client/core';

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).clientParams();
}
