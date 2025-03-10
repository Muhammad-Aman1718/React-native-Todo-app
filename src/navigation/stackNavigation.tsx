import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splash/splash';
import {StatusBar} from 'react-native';
import {RootStackParamList} from '../types/types';
import {SCREENS} from '../constant/constant';
import {AUTH_SCREENS} from '../constant/constant';
import useStackNavigation from '../hooks/useStackNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  const {open, authenticated} = useStackNavigation();

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Stack.Navigator>
        {open ? (
          <Stack.Screen
            name="Splash"
            options={{headerShown: false}}
            component={Splash}
          />
        ) : (
          <>
            {authenticated ? (
              <>
                {SCREENS.map((data, index) => (
                  <Stack.Screen
                    key={index}
                    name={data.name}
                    options={{
                      headerShown: false,
                    }}
                    component={data?.component}
                  />
                ))}
              </>
            ) : (
              <>
                {AUTH_SCREENS.map((data, index) => (
                  <Stack.Screen
                    key={index}
                    name={data?.name}
                    options={{
                      headerShown: false,
                    }}
                    component={data?.component}
                  />
                ))}
              </>
            )}
          </>
        )}
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;
