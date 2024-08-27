import React from 'react';
import tw from '@utils/tailwind';
import {Pressable, Text} from 'react-native';
import {getFontFamily} from '@utils/font-family';
import {DownArrow} from '@assets/icons';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@constants/routes';
import {useAppSelector} from '@redux/hooks';

const SelectCompetitionComponent = () => {
  const {competition} = useAppSelector(state => state.user)
  const naviagation = useNavigation<any>();

  return (
    <Pressable
      onPress={() => naviagation.navigate(routes.competition)}
      style={tw`flex-row justify-between p-4 pr-6 bg-input-bg rounded-2xl w-full`}>
      <Text
        numberOfLines={1}
        style={[
          tw`text-[#667085] text-lg w-10/12`,
          {fontFamily: getFontFamily('light')},
        ]}>
        {competition ? competition.title : 'Competition to sign up *'}
      </Text>
      <DownArrow />
    </Pressable>
  );
};

export default SelectCompetitionComponent;
