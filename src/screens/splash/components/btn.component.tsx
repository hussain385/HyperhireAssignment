import React from 'react';
import tw from '@utils/tailwind';
import {Text, TouchableOpacity, View} from 'react-native';
import {RightArrow} from '@assets/icons';
import {getFontFamily} from '@utils/font-family';

type componentPropType = {
  leftIcon: React.ReactNode;
  label: string;
  onPress?: () => void;
  btnClassName?: string;
};

const BtnComponent = ({
  label,
  onPress,
  leftIcon,
  btnClassName,
}: componentPropType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`bg-theme-blue flex-row justify-between items-center rounded-full p-1.5 pl-6 w-[87%] ${
        btnClassName ? btnClassName : ''
      }`}>
      <View style={tw`flex-row gap-6 items-center`}>
        {leftIcon}
        <Text
          style={[
            tw` text-base text-white`,
            {fontFamily: getFontFamily('bold'), lineHeight: 17},
          ]}>
          {label}
        </Text>
      </View>
      <View
        style={tw`items-center justify-center h-11 w-11 rounded-full border border-white`}>
        <RightArrow />
      </View>
    </TouchableOpacity>
  );
};

export default BtnComponent;
