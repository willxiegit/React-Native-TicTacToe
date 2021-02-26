import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

import { useTheme } from '../../theme/themeContext'
import StyleSheetFactory from '../../theme/themes'

export default function SettingsHeader({ navigation }) {
  // set up stylesheet
  const [theme] = useTheme()
  const styles = StyleSheetFactory(theme)

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.headerSide} onPress={() => navigation.goBack()}>
        <Ionicons name="md-arrow-back-circle" size={50} style={styles.setColor4} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}> Settings </Text>
      <View style={styles.headerSide}></View>
    </View>
  )
}