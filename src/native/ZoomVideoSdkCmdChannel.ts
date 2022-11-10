import { NativeModules } from 'react-native';

const { RNZoomVideoSdkCmdChannel } = NativeModules;

export type ZoomVideoSdkCmdChannelType = {
  sendCommand: (receiverId: string, strCmd: string) => void;
};

export class ZoomVideoSdkCmdChannel {
  sendCommand = RNZoomVideoSdkCmdChannel.sendCommand;
}
