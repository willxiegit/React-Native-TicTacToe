import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { useTheme } from '../theme/themeContext'
import StyleSheetFactory from '../theme/themes'

export default function Board({grid, onPress}) {
  // set up stylesheet
  const [theme] = useTheme()
  const styles = StyleSheetFactory(theme)
  
  const renderSquare = (i) => {
    return (
      <TouchableOpacity style={styles.square} onPress={() => onPress(i)}>
        <Text style={styles.grid}>{grid[i]}</Text>
      </TouchableOpacity>
    )
  }// end renderSquare

  return (
    <View style={styles.gameBoard}>
      <View style={styles.boardRow}>
        <View>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </View>
    </View>
  );
}// end Board