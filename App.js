import React from 'react';
import { View } from 'react-native';
import Home from './screens/Home';
import Welcomescreen from './screens/Welcomescreen';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ReadRecipe from './screens/ReadRecipe';
import BottomTabNavigator from './navigator/bottomnavigator';

import db from './config'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Welcomescreen"
          component={Welcomescreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Explore"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Read"
        component={BottomTabNavigator}
        options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
