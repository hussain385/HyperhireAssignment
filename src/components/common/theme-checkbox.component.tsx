import React, {useEffect, useRef} from 'react';
import {Animated, Pressable, Text, View} from 'react-native';
import {CheckIcon} from '@assets/icons';
import tw from '@utils/tailwind';
import {getFontFamily} from '@utils/font-family';

type componentPropType = {
  value: boolean;
  onChange: (value: boolean) => void;
  label: string;
  containerStyle?: string;
};

const ThemeCheckBoxComponent = ({
  value,
  onChange,
  label,
  containerStyle,
}: componentPropType) => {
  const backgroundColorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(backgroundColorAnim, {
      toValue: value ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const backgroundColor = backgroundColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255, 255, 255)', '#253BFF'], // 'white' to 'theme-blue'
  });

  return (
    <View style={tw`flex-row gap-2 ${containerStyle ? containerStyle : ''}`}>
      <Animated.View // Wrap with Animated.View to handle animated styles
        style={[
          tw`h-6 w-6 rounded-md border border-[#D3D8FF] items-center justify-center`,
          {backgroundColor: backgroundColor}, // Apply interpolated background color
        ]}>
        <Pressable
          onPress={() => onChange(!value)}
          style={tw`h-full w-full items-center justify-center`}>
          <CheckIcon size={'20'} />
        </Pressable>
      </Animated.View>
      <Text
        style={[
          tw`w-10/12 text-base text-theme-gray -mt-0.5`,
          {fontFamily: getFontFamily('light')},
        ]}>
        {label}
      </Text>
    </View>
  );
};

export default ThemeCheckBoxComponent;
