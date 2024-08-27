import React from 'react';
import {FlatList} from 'react-native';
import tw from '@utils/tailwind';
import CompetitionCardComponent from '@screens/competition/components/competition-card.component';
import {ICompetition} from '@/interfaces/auth.interfaces';

const CompetitionCardsView = ({data}: {data: ICompetition[]}) => {
  return (
    <FlatList
      contentContainerStyle={tw`gap-4 px-6 pb-16`}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <CompetitionCardComponent data={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CompetitionCardsView;
