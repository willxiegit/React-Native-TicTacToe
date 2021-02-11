import React from 'react';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
//store
import storeConfig from './store/Store'
//components
import Navigator from './navigation/screenStack'
import { ThemeProvider } from './theme/themeContext'

const Store = storeConfig();

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
      <ThemeProvider>
        <Navigator/>
      </ThemeProvider>
    </Provider>
  );
}// end App