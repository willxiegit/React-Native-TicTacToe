import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
//store
import storeConfig from './store/Store'
//components
import MainScreen from './screens/MainScreen'

const Store = storeConfig();
const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    'Balsamiq-Bold': require('./assets/fonts/BalsamiqSans-Bold.ttf'),
    'Balsamiq': require('./assets/fonts/BalsamiqSans-Regular.ttf')

  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
                fontFamily: 'Yusei'
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}// end App