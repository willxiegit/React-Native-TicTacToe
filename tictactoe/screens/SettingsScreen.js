import React from 'react';
import { View, Text } from "react-native";

import StyleSheetFactory from '../constants/themes'

const globalStyles = StyleSheetFactory();

export default function MainScreen() {

  return (
    <View style={globalStyles.container}>
      <Text>TODO</Text>
    </View>
  );
}