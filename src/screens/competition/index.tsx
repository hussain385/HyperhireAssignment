import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from '@utils/tailwind';
import {LeftArrow, SearchIcon} from '@assets/icons';
import {getFontFamily} from '@utils/font-family';
import {allCompetition} from '@/data/competition.data';
import CompetitionCardComponent from '@screens/competition/components/competition-card.component';
import {ICompetition} from '@/interfaces/auth.interfaces';
import {isEmpty} from 'lodash';
import {useNavigation} from '@react-navigation/native';
import CompetitionCardsView from '@screens/competition/view/competition-cards.view';

const CompetitionScreen = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredData, setFilteredData] =
    useState<ICompetition[]>(allCompetition);
  const navigate = useNavigation();

  useEffect(() => {
    if (isEmpty(searchValue)) {
      setFilteredData(allCompetition);
    } else {
      setFilteredData(() =>
        allCompetition.filter(data => data.title.includes(searchValue)),
      );
    }
  }, [searchValue]);

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`px-6 pb-4 pt-6`}>
        <View style={tw`gap-4 flex-row items-center mb-4`}>
          <TouchableOpacity
            onPress={() => navigate.goBack()}
            style={tw`items-center justify-center h-[52px] w-[52px] rounded-full bg-input-bg`}>
            <LeftArrow stroke={'#101828'} />
          </TouchableOpacity>
          <View
            style={tw`bg-input-bg rounded-2xl items-center pr-7 justify-between flex-row`}>
            <TextInput
              onChangeText={setSearchValue}
              placeholder={'Search here...'}
              value={searchValue}
              placeholderTextColor={'#667085'}
              style={tw`w-9/12 p-4 text-lg placeholder:font-extra-light`}
            />
            <SearchIcon />
          </View>
        </View>
        <Text
          style={[
            tw` text-[24px] text-theme-gray`,
            {fontFamily: getFontFamily('extraBold')},
          ]}>
          Competition
        </Text>
        <Text
          style={[
            tw`text-base text-theme-gray mt-2 mb-3`,
            {fontFamily: getFontFamily('regular'), lineHeight: 21},
          ]}>
          An account is needed per one host. If you already have an account for
          the host of competition you want to sign up, you can login and
          register.
        </Text>
      </View>
      <CompetitionCardsView data={filteredData}/>
    </SafeAreaView>
  );
};

export default CompetitionScreen;
