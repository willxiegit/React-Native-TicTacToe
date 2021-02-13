import React from 'react';
import { View, Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import { useTheme } from '../../theme/themeContext'
import StyleSheetFactory from '../../theme/themes'

export default function HistoryHeader() {
  // set up stylesheet
  const [theme] = useTheme()
  const styles = StyleSheetFactory(theme)

  return (
    <View style={styles.header}>
      <AntDesign name="clockcircle" size={30} style={styles.setColor0} />
      <Text style={styles.headerTitle}> History</Text>
    </View>
  )
}