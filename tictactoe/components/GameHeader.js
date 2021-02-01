import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

import { globalStyles } from '../constants/global';

export default function header({ navigation }) {
  return (
    <View style={globalStyles.header}>
      <Text>HEADER</Text>
    </View>
  )
}