import React from 'react';
import tw from '@utils/tailwind';
import {View, Text} from 'react-native';
import {getFontFamily} from '@utils/font-family';
import {DownArrow} from '@assets/icons';

const SelectCompetitionComponent = () => {
  return (
    <View style={tw`flex-row justify-between p-4 pr-6 bg-input-bg rounded-2xl w-full`}>
      <Text style={[tw`text-[#667085] text-lg`, {fontFamily: getFontFamily('light')}]}>Competition to sign up * </Text>
      <DownArrow />
    </View>
  );
};

export default SelectCompetitionComponent;
