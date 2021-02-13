import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
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
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="md-settings-sharp" size={40} style={styles.setColor4}/>
      </TouchableOpacity>
      <View style={styles.title}>
        <FontAwesome5 name="slack-hash" size={45} style={styles.setColor0}/>
        <Text style={styles.name}>
          <Text style={styles.setColor1}>Tic</Text>
          <Text style={styles.setColor0}>-</Text>
          <Text style={styles.setColor2}>Tac</Text>
          <Text style={styles.setColor0}>-</Text>
          <Text style={styles.setColor3}>Toe</Text>
        </Text>
      </View>
    </View>
  )
}