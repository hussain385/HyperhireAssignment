import React, {useRef, useState} from 'react';
import Video, {VideoRef} from 'react-native-video';
import {Text, View} from 'react-native';
import tw from '@utils/tailwind';
import LinearGradient from 'react-native-linear-gradient';
import {LoginIcon, MailIcon} from '@assets/icons';
import {screen_height} from '@constants/common';
import BtnComponent from '@screens/splash/components/btn.component';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@constants/routes';
import {getFontFamily} from '@utils/font-family';
import LoadingComponent from '@screens/splash/components/loading.component';

const SplashScreen = () => {
  const [isLaoding, setIsLaoding] = useState<boolean>(true);
  const videoRef = useRef<VideoRef>(null);
  const background = require('@assets/video/splash.mp4');
  const navigation = useNavigation<any>();

  return (
    <View style={tw`flex-1`}>
      <Video
        source={background}
        ref={videoRef}
        style={tw`absolute top-0 left-0 right-0 bottom-0`}
        repeat
        onBuffer={e => {
          setTimeout(() => {
            setIsLaoding(e.isBuffering)
          }, 1000)
        }}
      />
      {isLaoding && <LoadingComponent />}
      <View style={tw`flex-1 justify-end`}>
        <View style={[tw`h-1/2 px-[9%]`, {paddingTop: screen_height * 0.15}]}>
          <Text
            style={[
              tw`font-bold text-[36px] text-white`,
              {fontFamily: getFontFamily('bold')},
            ]}>
            Hyperhire{'\n'}assignment
          </Text>
        </View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['rgba(22, 23, 24, 0)', '#161718', '#161718']}
          style={tw`h-1/2`}>
          <View
            style={[
              tw`w-full h-full items-center justify-end gap-4`,
              {paddingBottom: screen_height * 0.15},
            ]}>
            <BtnComponent
              onPress={() => navigation.navigate(routes.signup)}
              label={'Sign up for free'}
              leftIcon={<LoginIcon />}
            />
            <BtnComponent
              label={'Continue with Email'}
              leftIcon={<MailIcon />}
              btnClassName={'bg-theme-gray'}
            />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default SplashScreen;
