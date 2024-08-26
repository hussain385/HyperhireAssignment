import {fontFamily} from '../constants/fonts';

export const getFontFamily = (
  weight:
    | 'regular'
    | 'medium'
    | 'bold'
    | 'light'
    | 'semibold'
    | 'extraLight'
    | 'extraBold',
) => {
  const selectedFontFamily = fontFamily.PlusJakartaSans;
  return selectedFontFamily[weight];
};
