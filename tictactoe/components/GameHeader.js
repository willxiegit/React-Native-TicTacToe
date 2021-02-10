import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StyleSheetFactory from '../constants/themes'

const globalStyles = StyleSheetFactory();

export default function header({ navigation }) {
  return (
    <View style={globalStyles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="md-settings-sharp" size={35} color="black"/>
      </TouchableOpacity>
      <View style={globalStyles.title}>
        <FontAwesome5 name="slack-hash" size={45} color="black"/>
        <Text style={globalStyles.name}>
          <Text style={{color: 'blue'}}>
            Tic-
          </Text>
          <Text style={{color: 'red'}}>
            Tac-
          </Text>
          <Text style={{color: 'yellow'}}>
            Toe
          </Text>
        </Text>
      </View>
    </View>
  )
}