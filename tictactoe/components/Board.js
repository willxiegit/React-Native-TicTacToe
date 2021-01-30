import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { globalStyles } from '../constants/global';

export default function Board({grid, onPress}) {
  const renderSquare = (i) => {
    return (
      <TouchableOpacity style={globalStyles.square} onPress={() => onPress(i)}>
        <Text style={globalStyles.grid}>{grid[i]}</Text>
      </TouchableOpacity>
    )
  }// end renderSquare

  return (  
    <View style={globalStyles.boardRow}>
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
  );
}// end Board