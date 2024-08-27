import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import tw from '@utils/tailwind';
import {EyeCloseIcon, EyeIcon} from '@assets/icons';

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
    <View
      style={tw`flex flex-col gap-1 w-full ${
        customClassName ? customClassName : ''
      }`}>
      {label && <Text style={tw`text-[#fff] font-semibold`}>{label}</Text>}
      <View
        style={tw`bg-input-bg rounded-2xl items-center pr-7 justify-between flex-row`}>
        <TextInput
          onChangeText={onChange}
          placeholder={placeholder}
          value={value}
          secureTextEntry={securePassword}
          placeholderTextColor={'#667085'}
          style={tw`w-9/12 p-4 py-5 text-lg placeholder:font-extra-light`}
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
