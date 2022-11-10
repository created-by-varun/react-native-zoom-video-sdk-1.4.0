import { NativeModules } from 'react-native';

const { RNZoomVideoSdkLiveStreamHelper } = NativeModules;

export type ZoomVideoSdkLiveStreamHelperType = {
  canStartLiveStream: () => Promise<boolean>;
  startLiveStream: (
    streamUrl: string,
    streamKey: string,
    broadcastUrl: string
  ) => Promise<number>;
  stopLiveStream: () => Promise<boolean>;
};

export class ZoomVideoSdkLiveStreamHelper
  implements ZoomVideoSdkLiveStreamHelperType
{
  async canStartLiveStream() {
    return await RNZoomVideoSdkLiveStreamHelper.canStartLiveStream();
  }

  async startLiveStream(
    streamUrl: string,
    streamKey: string,
    broadcastUrl: string
  ) {
    return await RNZoomVideoSdkLiveStreamHelper.startLiveStream(
      streamUrl,
      streamKey,
      broadcastUrl
    );
  }

  async stopLiveStream() {
    return await RNZoomVideoSdkLiveStreamHelper.stopLiveStream();
  }
}
