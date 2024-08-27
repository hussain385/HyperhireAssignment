import React from 'react';
import tw from '@utils/tailwind';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {getFontFamily} from '@utils/font-family';

type componentPropType = {
  onPress: () => void;
  label: string;
  isLoading?: boolean
}

const ThemeBtnComponent = ({onPress, label, isLoading}: componentPropType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`bg-theme-blue flex-row justify-center gap-2 items-center rounded-full p-1.5 pl-4 w-full py-4`}>
      {isLoading && <ActivityIndicator color="white" style={tw`-ml-4`} />}
      <Text
        style={[
          tw`font-bold text-base text-white`,
          {fontFamily: getFontFamily('bold')},
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ThemeBtnComponent;
