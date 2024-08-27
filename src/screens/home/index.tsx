import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import tw from '@utils/tailwind';
import {LoginIcon, StarIcon} from '@assets/icons';
import {getFontFamily} from '@utils/font-family';
import {useNavigation} from '@react-navigation/native';
import {updateUser} from '@redux/actions';
import {routes} from '@constants/routes';
import SignUpCompleteModalComponent from '@screens/splash/components/signup-complete-modal.component';
import ThemeRoundBtnComponent from '@components/common/theme-round-btn.component';

const HomeScreen = () => {
  const [handleSignUpComplete, setHandleSignUpComplete] = useState<boolean>(true);
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`py-6`}>
        <View style={tw`px-6 gap-4 flex-row items-center justify-between`}>
          <Text
            style={[
              tw` text-[24px] text-theme-gray`,
              {fontFamily: getFontFamily('extraBold')},
            ]}>
            Hyperhire Assignment
          </Text>
          <ThemeRoundBtnComponent
            onPress={() => {
              updateUser(null);
              navigation.navigate(routes.auth_stack);
            }}
            centerIcon={<LoginIcon stroke={'#475467'}/>}
          />
        </View>
      </View>
      <SignUpCompleteModalComponent
        modalVisible={handleSignUpComplete}
        setModalVisible={value => setHandleSignUpComplete(value)}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
