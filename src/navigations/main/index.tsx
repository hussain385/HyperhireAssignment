import React from 'react';
import {HomeScreen} from '@screens/index';
import {routes} from '@constants/routes';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routes.main_screen}>
      <Stack.Screen name={routes.main_screen} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
