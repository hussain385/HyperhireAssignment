import React from 'react';
import {routes} from '@constants/routes';
import AuthNavigation from './auth';
import MainNavigation from './main';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppSelector} from '@redux/hooks';

const MainStack = createNativeStackNavigator();

const RootNavigation = () => {
  const {user} = useAppSelector(state => state.user);

  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={user ? routes.main_stack : routes.auth_stack}>
      <MainStack.Screen name={routes.auth_stack} component={AuthNavigation} />
      <MainStack.Screen name={routes.main_stack} component={MainNavigation} />
    </MainStack.Navigator>
  );
};

export default RootNavigation;
