import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';


const DeviceWidth = Dimensions.get('window').width;

export default function Board({grid, onPress}) {
  const renderSquare = (i) => {
    return (
      <TouchableOpacity style={styles.square} onPress={() => onPress(i)}>
        <Text style={styles.grid}>{grid[i]}</Text>
      </TouchableOpacity>
    )
  }// end renderSquare

  return (  
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
  );
}// end Board

const styles = StyleSheet.create({
  boardRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: DeviceWidth*0.2,
    height: DeviceWidth*0.2,
    backgroundColor: 'skyblue',
    borderWidth: 4,
    marginRight: -4,
    marginTop: -4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});