import { ibc } from '../../../proto';
import { cosmosclient } from '@cosmos-client/core';

export * as connection from './module';

cosmosclient.codec.register('/ibc.core.connection.v1.ConnectionEnd', ibc.core.connection.v1.ConnectionEnd);
cosmosclient.codec.register('/ibc.core.connection.v1.Counterparty', ibc.core.connection.v1.Counterparty);
cosmosclient.codec.register('/ibc.core.connection.v1.Version', ibc.core.connection.v1.Version);
cosmosclient.codec.register('/ibc.core.connection.v1.MsgConnectionOpenAck', ibc.core.connection.v1.MsgConnectionOpenAck);
cosmosclient.codec.register('/ibc.core.connection.v1.MsgConnectionOpenConfirm', ibc.core.connection.v1.MsgConnectionOpenConfirm);
cosmosclient.codec.register('/ibc.core.connection.v1.MsgConnectionOpenInit', ibc.core.connection.v1.MsgConnectionOpenInit);
cosmosclient.codec.register('/ibc.core.connection.v1.MsgConnectionOpenTry', ibc.core.connection.v1.MsgConnectionOpenTry);
