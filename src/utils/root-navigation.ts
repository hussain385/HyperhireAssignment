import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

type RootStackParamList = {
  // Define your route names and their params here
  login: undefined;
  dashboard: undefined;
  profile: undefined;
  auth_stack: undefined;
  main_stack: undefined;
  // Details: { itemId: number; otherParam?: string };
};

export const navigationRef = React.createRef<NavigationContainerRef<RootStackParamList>>();

export function navigate(name: keyof RootStackParamList, params?: RootStackParamList[keyof RootStackParamList]) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.goBack();
}
