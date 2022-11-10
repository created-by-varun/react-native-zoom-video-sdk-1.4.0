import { NativeModules } from 'react-native';

const { RNZoomVideoSdkAudioSettingHelper } = NativeModules;

export type ZoomVideoSdkAudioSettingHelperType = {
  isMicOriginalInputEnable: () => Promise<boolean>;
  enableMicOriginalInput: (enable: boolean) => Promise<number>;
};

export class ZoomVideoSdkAudioSettingHelper
  implements ZoomVideoSdkAudioSettingHelperType
{
  async isMicOriginalInputEnable() {
    return await RNZoomVideoSdkAudioSettingHelper.isMicOriginalInputEnable();
  }

  async enableMicOriginalInput(enable: boolean) {
    return await RNZoomVideoSdkAudioSettingHelper.enableMicOriginalInput(
      enable
    );
  }
}
