import { NativeModules } from 'react-native';

const { RNZoomVideoSdkShareHelper } = NativeModules;

export type ZoomVideoSdkShareHelperType = {
  shareScreen: () => void;
  stopShare: () => void;
};

export class ZoomVideoSdkShareHelper implements ZoomVideoSdkShareHelperType {
  shareScreen = RNZoomVideoSdkShareHelper.shareScreen;
  stopShare = RNZoomVideoSdkShareHelper.stopShare;
  lockShare = RNZoomVideoSdkShareHelper.lockShare;
  isOtherSharing = RNZoomVideoSdkShareHelper.isOtherSharing;
  isScreenSharingOut = RNZoomVideoSdkShareHelper.isScreenSharingOut;
  isShareLocked = RNZoomVideoSdkShareHelper.isShareLocked;
  isSharingOut = RNZoomVideoSdkShareHelper.isSharingOut;
}
