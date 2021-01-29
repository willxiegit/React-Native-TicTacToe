import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { Provider } from 'react-redux';
//store
import storeConfig from './store/Store'
//components
import MainScreen from './screens/MainScreen'
import Game from './components/Game'

const Store = storeConfig();
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
          <Stack.Screen 
            name='TicTacToe'
            component={MainScreen}
            options={{
              title:'TicTacToe',
              headerStyle:{
                
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}// end App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});