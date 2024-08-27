import React from 'react';
import {routes} from '@constants/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, SignupScreen, CompetitionScreen} from '@screens/index';

const MainStack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routes.splash}>
      <MainStack.Screen name={routes.splash} component={SplashScreen} />
      <MainStack.Screen name={routes.signup} component={SignupScreen} />
      <MainStack.Screen name={routes.competition} component={CompetitionScreen} />
    </MainStack.Navigator>
  );
};

export default RootNavigation;
