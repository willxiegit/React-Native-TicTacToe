import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '../../theme/themeContext'
import StyleSheetFactory from '../../theme/themes'

export default function GameHeader({ navigation }) {
  // set up stylesheet
  const [theme] = useTheme()
  const styles = StyleSheetFactory(theme)

  return (
    <View style={styles.gameHeader}>
      <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="md-settings-sharp" size={40} style={styles.setColor4}/>
      </TouchableOpacity>
      <Text style={styles.name}>
        <Text style={styles.setColor1}>TIC</Text>
        <Text style={styles.setColor0}>-</Text>
        <Text style={styles.setColor2}>TAC</Text>
        <Text style={styles.setColor0}>-</Text>
        <Text style={styles.setColor3}>TOE </Text>
      </Text>
    </View>
  )
}