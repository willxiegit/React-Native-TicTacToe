import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";

import { useTheme } from '../theme/themeContext'
import StyleSheetFactory from '../theme/themes'
import SettingsHeader from '../components/Headers/SettingsHeader'

export default function SettingsScreen({ navigation }) {
  // set up stylesheet
  const [theme, setTheme] = useTheme()
  const styles = StyleSheetFactory(theme)
  return (
    <View style={styles.container}>
      <SettingsHeader navigation={navigation}/>
      <View style={styles.allThemes}>
        <TouchableOpacity style={styles.listItem} onPress={() => setTheme('dark')}>
          <Text>dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}