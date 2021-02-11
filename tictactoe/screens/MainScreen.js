import React from 'react';
import { View, StatusBar } from "react-native";

import { useTheme } from '../theme/themeContext'
import StyleSheetFactory from '../theme/themes'
import Header from '../components/Headers/GameHeader';
import Game from '../components/Game';

export default function MainScreen({ navigation }) {
  // set up stylesheet
  const [theme] = useTheme()
  const styles = StyleSheetFactory(theme)
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Header navigation={navigation}/>
      <Game/>
    </View>
  );
}// end MainScreen