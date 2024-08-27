import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import tw from '@utils/tailwind';
import {LeftArrow} from '@assets/icons';
import {getFontFamily} from '@utils/font-family';
import ControlledInputComponent from '@components/forms/controlled-input.component';
import {useNavigation} from '@react-navigation/native';
import SelectCompetitionComponent from '@screens/sign-up/component/select-competition.component';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import ThemeCheckBoxComponent from '@components/common/theme-checkbox.component';
import {userAuthSchema} from '@screens/sign-up/validation/user-auth.schema';
import ControlledPasswordComponent from '@components/forms/controlled-password.component';
import {screen_height} from '@constants/common';
import {useAppSelector} from '@redux/hooks';
import {updateCompetition, updateUser} from '@redux/actions';
import ThemeBtnComponent from '@components/common/theme-btn.component';
import {IAccount} from '@/interfaces/auth.interfaces';
import ThemeRoundBtnComponent from '@components/common/theme-round-btn.component';
import {routes} from '@constants/routes';

const SignupScreen = () => {
  const {competition} = useAppSelector(state => state.user);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation<any>();
  const {
    handleSubmit,
    control,
    setValue,
    setError,
    reset,
    formState: {errors, isLoading},
  } = useForm<any>({
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

  useEffect(() => {
    if (competition) {
      setValue('competition', competition);
      setError('competition', {type: 'custom', message: undefined});
    }
  }, [competition, setError, setValue]);

  const onSignupSubmit = (data: IAccount) => {
    reset();
    updateCompetition(null);
    setValue('competition', undefined);
    setPassword('');
    updateUser({
      competition: data.competition,
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
    });
    navigation.navigate(routes.main_stack);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`pt-6`}>
        <View style={tw`px-6 gap-4 flex-row items-center`}>
          <ThemeRoundBtnComponent
            onPress={navigation.goBack}
            centerIcon={<LeftArrow />}
            className={'border border-[#D0D5DD] bg-transparent'}
          />
          <Text
            style={[
              tw`text-[24px] text-theme-gray`,
              {fontFamily: getFontFamily('extraBold')},
            ]}>
            Create Account
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={{paddingBottom: screen_height * 0.16}}>
          <View style={tw`px-6 gap-4 w-full mt-6`}>
            <SelectCompetitionComponent />
            {errors['competition'] && errors['competition']?.message && (
              <Text style={[tw`text-errorText`]}>
                {errors['competition']?.message as never}
              </Text>
            )}
            <ControlledInputComponent
              control={control}
              placeholder={'Email*'}
              inputName={'email'}
              errors={errors}
            />
            <ControlledPasswordComponent
              password={password}
              setPassword={value => setPassword(value)}
              control={control}
              errors={errors}
            />
            <ControlledInputComponent
              control={control}
              placeholder={'First Name in English*'}
              inputName={'first_name'}
              errors={errors}
            />
            <ControlledInputComponent
              control={control}
              placeholder={'Last Name in English*'}
              inputName={'last_name'}
              errors={errors}
            />
            <ThemeCheckBoxComponent
              containerStyle={'my-2'}
              label={
                "By signing up, I agree to Cloit's Terms & Conditions and Privacy Policy."
              }
              value={isChecked}
              onChange={value => setIsChecked(value)}
            />
            <ThemeBtnComponent
              isLoading={isLoading}
              onPress={handleSubmit(onSignupSubmit)}
              label={'Sign Up'}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
