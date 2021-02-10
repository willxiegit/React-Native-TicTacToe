import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='MainScreen'
      screenOptions={{
      headerTitleAlign: 'left',
      }}>
      <Stack.Screen 
        name='TicTacToe'
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          title:'Settings',
          headerTitleStyle: {
          fontFamily: 'Balsamiq-Bold',
          fontSize: 30,
          }
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Navigator;