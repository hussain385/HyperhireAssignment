import {isIOS} from './common';

export const fontFamily = {
  PlusJakartaSans: {
    regular: isIOS() ? 'PlusJakartaSans-Regular' : 'PlusJakartaSansRegular',
    medium: isIOS() ? 'PlusJakartaSans-Medium' : 'PlusJakartaSansMedium',
    light: isIOS() ? 'PlusJakartaSans-Light' : 'PlusJakartaSansLight',
    semibold: isIOS() ? 'PlusJakartaSans-SemiBold' : 'PlusJakartaSansSemiBold',
    extraLight: isIOS()
      ? 'PlusJakartaSans-ExtraLight'
      : 'PlusJakartaSansExtraLight',
    extraBold: isIOS()
      ? 'PlusJakartaSans-ExtraBold'
      : 'PlusJakartaSansExtraBold',
    bold: isIOS() ? 'PlusJakartaSans-Bold' : 'PlusJakartaSansBold',
  },
};
