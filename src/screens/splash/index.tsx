import React, {useRef, useState} from 'react';
import Video, {VideoRef} from 'react-native-video';
import {StyleSheet, View, Text} from 'react-native';
import tw from '@utils/tailwind';

const SplashScreen = () => {
  const [isLaoding, setIsLaoding] = useState<boolean>(true);
  const videoRef = useRef<VideoRef>(null);
  const background = require('@assets/video/splash.mp4');

  return (
    <View style={tw`flex-1`}>
      <Video
        source={background}
        ref={videoRef}
        style={styles.backgroundVideo}
        repeat
        onBuffer={e => {
          setIsLaoding(e.isBuffering);
          console.log(e.isBuffering);
        }}
      />
      {isLaoding && (
        <Text>Hello</Text>
      )}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
