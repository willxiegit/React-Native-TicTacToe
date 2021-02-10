import React from 'react';
import { View, StatusBar } from "react-native";

import StyleSheetFactory from '../constants/themes';
import Header from '../components/GameHeader';
import Game from '../components/Game';

const globalStyles = StyleSheetFactory();

export default function MainScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <StatusBar/>
      <Header navigation={navigation}/>
      <Game/>
    </View>
  );
}// end MainScreen