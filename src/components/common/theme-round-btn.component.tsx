import React from 'react';
import tw from '@utils/tailwind';
import {TouchableOpacity} from 'react-native';

type componentPropType = {
  onPress: () => void;
  centerIcon: React.ReactNode;
  className?: string;
};

const ThemeRoundBtnComponent = ({
  onPress,
  centerIcon,
  className,
}: componentPropType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`items-center justify-center h-[52px] w-[52px] rounded-full bg-input-bg ${
        className ? className : ''
      }`}>
      {centerIcon}
    </TouchableOpacity>
  );
};

export default ThemeRoundBtnComponent;
