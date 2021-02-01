import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/GameHeader'
import { Ionicons } from '@expo/vector-icons';

import MainScreen from '../screens/MainScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='MainScreen'
      screenOptions={{
      headerTitleAlign: 'center',
      }}>
      <Stack.Screen 
        name='TicTacToe'
        component={MainScreen}
        options={({ navigation }) => ({
          headerTitle: () => <Header/>,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Ionicons name="md-settings-sharp" size={30} color="black"/>
            </TouchableOpacity>
          ),
        })}
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