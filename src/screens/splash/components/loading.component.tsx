import React, {useEffect, useRef} from 'react';
import {ActivityIndicator, Animated, Text, View} from 'react-native';
import tw from '@utils/tailwind';
import {getFontFamily} from '@utils/font-family';
import {commonStyles} from '@styles/common';

const LoadingComponent = () => {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [bounceAnim]);

  const bounce = bounceAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20], // Adjust the range to control the bounce effect
  });

  return (
    <View
      style={tw`absolute bg-theme-blue gap-3 items-center justify-center z-10 top-0 left-0 h-full w-full`}>
      <Animated.Text
        style={[
          tw`font-bold text-[36px] text-white`,
          {fontFamily: getFontFamily('bold')},
          {transform: [{translateY: bounce}]},
        ]}>
        Logo
      </Animated.Text>
      <View
        style={[
          tw`w-36 h-1.5 -mt-1`,
          {
            backgroundColor: '#fff',
            borderTopStartRadius: 1000,
            borderTopEndRadius: 1000,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 0.3,
            shadowRadius: 6,
          }
        ]}
      />
      <ActivityIndicator color={'white'} style={tw`mt-8`}/>
    </View>
  );
};

export default LoadingComponent;
