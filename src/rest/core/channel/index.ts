import { ibc } from '../../../proto';
import cosmosclient from '@cosmos-client/core';

export * as channel from './module';

cosmosclient.codec.register('/ibc.core.channel.v1.Channel', ibc.core.channel.v1.Channel);
cosmosclient.codec.register('/ibc.core.channel.v1.Counterparty', ibc.core.channel.v1.Counterparty);
cosmosclient.codec.register('/ibc.core.channel.v1.Packet', ibc.core.channel.v1.Packet);
cosmosclient.codec.register('/ibc.core.channel.v1.MsgAcknowledgement', ibc.core.channel.v1.MsgAcknowledgement);
cosmosclient.codec.register('/ibc.core.channel.v1.MsgChannelCloseConfirm', ibc.core.channel.v1.MsgChannelCloseConfirm);
cosmosclient.codec.register('/ibc.core.channel.v1.MsgChannelCloseInit', ibc.core.channel.v1.MsgChannelCloseInit);
cosmosclient.codec.register('/ibc.core.channel.v1.MsgChannelOpenAck', ibc.core.channel.v1.MsgChannelOpenAck);
cosmosclient.codec.register('/ibc.core.channel.v1.MsgChannelOpenConfirm', ibc.core.channel.v1.MsgChannelOpenConfirm);
cosmosclient.codec.register('/ibc.core.channel.v1.MsgChannelOpenInit', ibc.core.channel.v1.MsgChannelOpenInit);
cosmosclient.codec.register('/ibc.core.channel.v1.MsgChannelOpenTry', ibc.core.channel.v1.MsgChannelOpenTry);
cosmosclient.codec.register('/ibc.core.channel.v1.MsgRecvPacket', ibc.core.channel.v1.MsgRecvPacket);
cosmosclient.codec.register('/ibc.core.channel.v1.MsgTimeoutOnClose', ibc.core.channel.v1.MsgTimeoutOnClose);
cosmosclient.codec.register('/ibc.core.channel.v1.MsgTimeout', ibc.core.channel.v1.MsgTimeout);
