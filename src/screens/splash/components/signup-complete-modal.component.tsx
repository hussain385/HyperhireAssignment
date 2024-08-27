import React from 'react';
import {Modal, Text, View} from 'react-native';
import tw from '@utils/tailwind';
import {getFontFamily} from '@utils/font-family';
import ThemeRoundBtnComponent from '@components/common/theme-round-btn.component';
import {CancelIcon, StarIcon} from '@assets/icons';
import ThemeBtnComponent from '@components/common/theme-btn.component';

type componentPropType = {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
};

const SignUpCompleteModalComponent = ({
  modalVisible,
  setModalVisible,
}: componentPropType) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View
        style={tw`flex-1 items-center justify-center bg-[rgba(0,0,0,0.45)]`}>
        <View
          style={tw`bg-white rounded-4xl p-8 items-center justify-between w-[90%] h-[37%]`}>
          <View style={tw`justify-between flex-row w-full`}>
            <ThemeRoundBtnComponent
              onPress={() => console.log('')}
              centerIcon={<StarIcon />}
              className={'bg-theme-blue border-0'}
            />
            <ThemeRoundBtnComponent
              onPress={() => setModalVisible(!modalVisible)}
              centerIcon={<CancelIcon />}
              className={'border border-[#D0D5DD] bg-transparent'}
            />
          </View>
          <View style={tw`w-full gap-4`}>
            <Text
              style={[
                tw`font-bold text-[24px] text-theme-gray`,
                {fontFamily: getFontFamily('extraBold')},
              ]}>
              Welcome to Hyperhire
            </Text>
            <Text
              style={[
                tw`text-[18px] text-theme-gray`,
                {fontFamily: getFontFamily('regular')},
              ]}>
              Great to have you with us!
            </Text>
          </View>
          <ThemeBtnComponent
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            label={'Got it'}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SignUpCompleteModalComponent;
