import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import tw from '@utils/tailwind';
import {LeftArrow} from '@assets/icons';
import {getFontFamily} from '@utils/font-family';

const CompetitionScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`px-6 py-2`}>
        <View style={tw`gap-4 flex-row items-center`}>
          <TouchableOpacity
            style={tw`items-center justify-center h-[52px] w-[52px] rounded-full border border-[#D0D5DD]`}>
            <LeftArrow />
          </TouchableOpacity>
          <Text
            style={[
              tw`font-bold text-[24px] text-theme-gray`,
              {fontFamily: getFontFamily('extraBold')},
            ]}>
            Create Account
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default CompetitionScreen;
