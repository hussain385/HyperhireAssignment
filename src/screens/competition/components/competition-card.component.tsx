import React from 'react';
import tw from '@utils/tailwind';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {getFontFamily} from '@utils/font-family';
import {ICompetition} from '@/interfaces/auth.interfaces';

type componentPropType = {
  data: ICompetition;
  onPress?: (event: ICompetition) => void;
};

const CompetitionCardComponent = ({data}: componentPropType) => {
  return (
    <Pressable>
      <ImageBackground
        source={require('@assets/images/asian-games.png')}
        style={tw`bg-theme-blue w-full rounded-2xl`}>
        <View style={tw`p-6`}>
          <Text
            style={[
              tw`font-bold text-[18px] text-white`,
              {fontFamily: getFontFamily('extraBold'), lineHeight: 27},
            ]}>
            {data.title}
          </Text>
          <Text
            style={[
              tw`text-base text-white mt-4 mb-1`,
              {fontFamily: getFontFamily('regular')},
            ]}>
            {data.start_date} ~ {data.end_date}
          </Text>
          <Text
            style={[
              tw`text-base text-[#B8BFFF]`,
              {fontFamily: getFontFamily('regular')},
            ]}>
            {data.address}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default CompetitionCardComponent;
