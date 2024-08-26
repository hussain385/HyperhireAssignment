import React from 'react';
import {routes} from '@constants/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '@screens/splash';

const MainStack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routes.splash}>
      <MainStack.Screen name={routes.splash} component={SplashScreen} />
    </MainStack.Navigator>
  );
};

export default RootNavigation;
