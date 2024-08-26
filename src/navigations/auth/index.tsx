import React from 'react';
import {LoginScreen} from '@screens/index';
import {routes} from '@constants/routes';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={routes.login}>
      <Stack.Screen name={routes.login} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
