import React from 'react';
import { StyleSheet, View, Button } from "react-native";

import Game from '../components/Game'

export default function MainScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Game/>
    </View>
  );
}// end MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  game: {
    flex: 1,
    backgroundColor: 'coral',

  },
  game2: {
    flex: 1,
    backgroundColor: 'pink',

  },
})
