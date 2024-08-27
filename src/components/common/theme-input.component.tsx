import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import tw from '@utils/tailwind';
import {EyeCloseIcon, EyeIcon} from '@assets/icons';
import {getFontFamily} from '@utils/font-family';

type componentPropType = {
  placeholder: string;
  onChange: (value: string) => void;
  label?: string;
  secureTextEntry?: boolean;
  customClassName?: string;
  value?: string;
};

const ThemeInputComponent = ({
  label,
  onChange,
  placeholder,
  secureTextEntry,
  customClassName,
  value,
}: componentPropType) => {
  const [securePassword, setSecurePassword] = useState(true);

  return (
    <View style={tw`flex flex-col gap-1 w-full`}>
      {label && <Text style={tw`text-[#fff] font-semibold`}>{label}</Text>}
      <View
        style={tw`bg-input-bg rounded-2xl items-center pr-7 justify-between flex-row ${
          customClassName ? customClassName : ''
        }`}>
        <TextInput
          onChangeText={onChange}
          placeholder={placeholder}
          value={value}
          secureTextEntry={secureTextEntry ? securePassword : undefined}
          placeholderTextColor={'#667085'}
          style={[
            tw`${secureTextEntry ? 'w-10/12' : 'w-full'} p-4 text-lg placeholder:font-extra-light`,
            {fontFamily: getFontFamily('regular')},
          ]}
        />
        {secureTextEntry && (
          <TouchableOpacity
            style={tw`-mt-1.5`}
            onPress={() => setSecurePassword(!securePassword)}>
            {securePassword ? <EyeCloseIcon /> : <EyeIcon />}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ThemeInputComponent;
