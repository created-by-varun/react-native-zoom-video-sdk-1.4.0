import { NativeModules } from 'react-native';
import type { ZoomVideoSdkPhoneSupportCountryInfo } from './ZoomVideoSdkPhoneSupportCountryInfo';
import type { PhoneStatus } from './ZoomVideoSdk';

const { RNZoomVideoSdkPhoneHelper } = NativeModules;

export type ZoomVideoSdkPhoneHelperType = {
  cancelInviteByPhone: () => Promise<number>;
  getInviteByPhoneStatus: () => Promise<PhoneStatus>;
  getSupportCountryInfo: () => Promise<ZoomVideoSdkPhoneSupportCountryInfo[]>;
  inviteByPhone: (
    countryCode: string,
    phoneNumber: string,
    name: string
  ) => Promise<number>;
  isSupportPhoneFeature: () => Promise<boolean>;
};

export class ZoomVideoSdkPhoneHelper implements ZoomVideoSdkPhoneHelperType {
  inviteByPhone(countryCode: string, phoneNumber: string, name: string) {
    return RNZoomVideoSdkPhoneHelper.inviteByPhone(
      countryCode,
      phoneNumber,
      name
    );
  }

  async cancelInviteByPhone() {
    return await RNZoomVideoSdkPhoneHelper.cancelInviteByPhone();
  }

  async getInviteByPhoneStatus() {
    return await RNZoomVideoSdkPhoneHelper.getInviteByPhoneStatus();
  }

  async getSupportCountryInfo() {
    return await RNZoomVideoSdkPhoneHelper.getSupportCountryInfo();
  }

  async isSupportPhoneFeature() {
    return await RNZoomVideoSdkPhoneHelper.isSupportPhoneFeature();
  }
}
