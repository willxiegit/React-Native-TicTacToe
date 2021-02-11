import React from 'react';
import { View, Text, Button } from "react-native";

import { useTheme } from '../theme/themeContext'
import StyleSheetFactory from '../theme/themes'

export default function MainScreen() {
  // set up stylesheet
  const [theme, setTheme] = useTheme()
  const styles = StyleSheetFactory(theme)
  return (
    <View style={styles.container}>
      <Button title='switch' onPress={() => setTheme('dark')}></Button>
    </View>
  );
}