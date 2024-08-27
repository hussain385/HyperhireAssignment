import React, {useMemo} from 'react';
import {Controller} from 'react-hook-form';
import ThemeInputComponent from '@components/common/theme-input.component';
import {Text, View} from 'react-native';
import tw from '@utils/tailwind';
import {CheckIcon} from '@assets/icons';
import {isEmpty} from 'lodash';

type componentPropType = {
  errors: any;
  control: any;
  setPassword: (value: string) => void;
  password: string;
};

const passwordSpecialChar = /[~`!@#$%^&*()_\-+=\?]/;
const ControlledPasswordComponent = ({
  control,
  errors,
  setPassword,
  password,
}: componentPropType) => {
  const {minChar, uppercase} = useMemo(() => {
    const checks = [
      /[a-z]/.test(password),
      /[A-Z]/.test(password),
      /\d/.test(password),
      passwordSpecialChar.test(password),
    ];

    return {
      minChar: password.length > 7,
      uppercase: checks.filter(Boolean).length >= 3,
    };
  }, [password]);

  return (
    <>
      <View>
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <ThemeInputComponent
              placeholder={'Password*'}
              secureTextEntry
              onChange={value => {
                setPassword(value);
                onChange(value);
              }}
              value={value}
              customClassName={'rounded-b-none border-b border-[#eee]'}
            />
          )}
          name={'password'}
        />
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <ThemeInputComponent
              placeholder={'Confirm Password*'}
              secureTextEntry
              onChange={onChange}
              value={value}
              customClassName={'rounded-t-none'}
            />
          )}
          name={'confirm_password'}
        />
      </View>
      <View>
        <View style={tw`flex-row gap-1.5`}>
          <CheckIcon stroke={minChar ? '#249d00' : '#FF2323'} />
          <Text
            style={[
              tw`${minChar ? 'text-[#249d00]' : 'text-errorText'} w-10/12`,
            ]}>
            At least 8 letters
          </Text>
        </View>
        <View style={tw`flex-row gap-1.5`}>
          <CheckIcon stroke={uppercase ? '#249d00' : '#FF2323'} />
          <Text
            style={[
              tw`${uppercase ? 'text-[#249d00]' : 'text-errorText'} w-10/12`,
            ]}>
            Include at least 3 uppercase letters, lowercase letters, number, or
            special letters
          </Text>
        </View>
      </View>
      {errors['password'] &&
        errors['password']?.message &&
        !isEmpty(password) &&
        !['strength', 'min-required'].includes(errors['password']?.message) && (
          <Text style={[tw`text-errorText`]}>
            {errors['password']?.message as never}
          </Text>
        )}
      {errors['confirm_password'] &&
        !isEmpty(password) &&
        errors['confirm_password']?.message && (
          <Text style={[tw`text-errorText`]}>
            {errors['confirm_password']?.message as never}
          </Text>
        )}
    </>
  );
};

export default ControlledPasswordComponent;
