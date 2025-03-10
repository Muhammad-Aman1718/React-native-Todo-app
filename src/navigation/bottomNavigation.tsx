import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Octicons';
import {COLORS} from '../constant/colors';
import {TabScreen} from '../types/types';
import {TABS} from '../constant/constant';

const Tab = createBottomTabNavigator<TabScreen>();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 0,
          elevation: 0,
          height: 67,
        },
        tabBarActiveTintColor: COLORS.greenColor,
        tabBarHideOnKeyboard: true,
      }}>
      {TABS.map(({name, component, icon}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={icon}
                size={30}
                color={focused ? COLORS.greenColor : COLORS.manatee}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
