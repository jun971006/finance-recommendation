import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignInScreen, SignUpScreen, HomeScreen, ReduxTestScreen} from '../screens';

import {NavigationContainer} from '@react-navigation/native';
import {screenMap} from './screenMap';

const AppContainer = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screenMap.Redux}
          component={ReduxTestScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenMap.Home}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenMap.SignIn}
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenMap.SignUp}
          component={SignInScreen}
          options={{headerShown: false}}
        />  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;