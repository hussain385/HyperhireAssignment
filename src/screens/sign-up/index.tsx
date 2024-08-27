import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import tw from '@utils/tailwind';
import {LeftArrow} from '@assets/icons';
import {getFontFamily} from '@utils/font-family';
import ControlledInputComponent from '@components/forms/controlled-input.component';
import {useNavigation} from '@react-navigation/native';
import SelectCompetitionComponent from '@screens/sign-up/component/select-competition.component';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {mixed, object, string} from 'yup';
import {IAccount} from '@/interfaces/auth.interfaces';
import CheckBox from '@react-native-community/checkbox';

const userAuthSchema = object({
  competition: mixed().required('You must pick a competition to register'),
  email: string()
    .email('Email format is invalid')
    .required('This is a required field.'),
  confirm_password: string().required('This is a required field.'),
  password: string().required('This is a required field.'),
  first_name: string().required('This is a required field.'),
  last_name: string().required('This is a required field.')
});

const SignupScreen = () => {
  const navigation = useNavigation();
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<IAccount>({
    resolver: yupResolver(userAuthSchema),
    defaultValues: {
      email: '',
      password: '',
      competition: undefined,
      confirm_password: '',
      first_name: '',
      last_name: '',
    },
  });

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`px-6 py-2`}>
        <View style={tw`gap-4 flex-row items-center`}>
          <TouchableOpacity
            onPress={navigation.goBack}
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
        <View style={tw`gap-4 w-full mt-6`}>
          <SelectCompetitionComponent />
          <ControlledInputComponent control={control} placeholder={"Email*"} inputName={"email"} errors={errors}/>
          <ControlledInputComponent control={control} placeholder={"First Name in English*"} inputName={"email"} errors={errors}/>
          <ControlledInputComponent control={control} placeholder={"Last Name in English*"} inputName={"email"} errors={errors}/>
          <View>
            <CheckBox />
            <Text>
              By signing up, I agree to Cloit's Terms & Conditions and Privacy Policy.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
