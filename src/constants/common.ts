import {Dimensions, Platform} from 'react-native';

export const isIOS = () => {
  return Platform.OS === 'ios';
};

export const screen_height = Dimensions.get('screen').height;

export const screen_width = Dimensions.get('screen').width;
