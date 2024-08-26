import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CalendarScreen, DashboardScreen, EventsScreen} from '@screens/index';
import {routes} from '@constants/routes';
import CustomTabBar from '@components/navigation/custom-tab-bar.component';
import useAuthRequest from '@/lib/useAuthRequest';
import ProfileScreen from '@screens/profile';
import {useAppSelector} from "@redux/hooks";
import CreateJobScreen from "@screens/create-job";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
    const {user} = useAppSelector(state => state.user)
  useAuthRequest();

  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name={routes.dashboard} component={DashboardScreen} />
      <Tab.Screen name={routes.event} component={EventsScreen} />
      <Tab.Screen name={routes.calendar} component={CalendarScreen} />
      {user?.depId === 3 ? (
          <Tab.Screen name={routes.profile} component={ProfileScreen} />
      ) : (
          <Tab.Screen name={routes.createJob} component={CreateJobScreen} />
      )}
    </Tab.Navigator>
  );
};

export default MainNavigation;
