import React from 'react';
import {Controller} from 'react-hook-form';
import {Text} from 'react-native';
import ThemeInputComponent from '@components/common/theme-input.component';
import tw from '@utils/tailwind';

type componentPropType = {
  errors: any;
  inputName: string;
  secureTextEntry?: boolean;
  placeholder: string;
  control: any;
  label?: string;
};

const ControlledInputComponent = ({
  control,
  placeholder,
  secureTextEntry,
  inputName,
  errors,
  label,
}: componentPropType) => {
  return (
    <>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <ThemeInputComponent
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onChange={onChange}
            value={value}
            label={label}
          />
        )}
        name={inputName}
      />
      {errors[inputName] && errors[inputName]?.message && (
        <Text style={[tw`text-errorText`]}>{errors[inputName]?.message as never}</Text>
      )}
    </>
  );
};

export default ControlledInputComponent;
