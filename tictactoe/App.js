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
    'lightTitle': require('./assets/fonts/SuperSketch.ttf'),
    'lightText': require('./assets/fonts/FriendlyFeltTips.ttf'),
    'darkTitle': require('./assets/fonts/ScribbleBox.ttf'),
    'darkText': require('./assets/fonts/Arowit.ttf'),
    'retroTitle': require('./assets/fonts/LaserCorps.otf'),
    'retroText': require('./assets/fonts/Neon80S.ttf'),
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