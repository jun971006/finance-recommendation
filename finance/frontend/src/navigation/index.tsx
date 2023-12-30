import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignInScreen, SignUpScreen, HomeScreen, ReduxTestScreen} from '../screens';

import {NavigationContainer, } from '@react-navigation/native';
import {screenMap} from './screenMap';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

const Stack = createNativeStackNavigator();

/**
 * redux에서 저장되어있는 유저 정보 가져오기
 * 
 * @returns boolean 로그인 여부
 */
const getIsSignedIn = () => {
  // custom logic



  return true;
};

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenMap.SignIn}
        component={SignInScreen}
        options={{
          title: '',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name={screenMap.SignUp}
        component={SignUpScreen}
        options={{
          title: '',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  )
}

const AppContainer = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* <Stack.Screen
          name='redux'
          component={ReduxTestScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenMap.Redux}
          component={ReduxTestScreen}
          options={{headerShown: false}}
        />  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;