import React from 'react';
import {CompetitionScreen, SignupScreen, SplashScreen} from '@screens/index';
import {routes} from '@constants/routes';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routes.splash}>
      <Stack.Screen name={routes.splash} component={SplashScreen} />
      <Stack.Screen name={routes.signup} component={SignupScreen} />
      <Stack.Screen name={routes.competition} component={CompetitionScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
