import { ibc } from '../../../proto';
import { cosmosclient } from '@cosmos-client/core';

export * as client from './module';

cosmosclient.codec.register('/ibc.core.client.v1.Height', ibc.core.client.v1.Height);
cosmosclient.codec.register('/ibc.core.client.v1.MsgCreateClient', ibc.core.client.v1.MsgCreateClient);
cosmosclient.codec.register('/ibc.core.client.v1.MsgSubmitMisbehavior', ibc.core.client.v1.MsgSubmitMisbehaviour);
cosmosclient.codec.register('/ibc.core.client.v1.MsgUpdateClient', ibc.core.client.v1.MsgUpdateClient);
cosmosclient.codec.register('/ibc.core.client.v1.MsgUpgradeClient', ibc.core.client.v1.MsgUpgradeClient);
