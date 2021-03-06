import React from 'react';
import { View, Text } from 'react-native';

export default function MiniBoard({ styles, grid }) {
  const renderSquare = (i) => {
    return (
      <View style={styles.miniSquare}>
        <Text style={styles.miniGrid}>{grid[i]}</Text>
      </View>
    )
  }// end renderSquare

  return (
    <View style={styles.miniBoard}>
      <View style={styles.miniRow}>
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