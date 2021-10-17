import { ibc } from '../../../proto';
import { cosmosclient } from '@cosmos-client/core';

export * as transfer from './module';

cosmosclient.codec.register('/ibc.applications.transfer.v1.MsgTransfer', ibc.applications.transfer.v1.MsgTransfer);
