import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, StatusBar } from 'react-native';

import Board from './Board'

export default function Game() {
  const [history, setHistory] = useState([{grid: Array(9).fill(null)}]);
  const [xIsNext, setNext] = useState(true);
  const [step, setStep] = useState(0);

  const lastMove = history[history.length-1];
  const current = history[step];
  const winner = calculateWinner(lastMove.grid);
  const pastMoves = history.map((_stepGrid, stepNum) => {
    return({
      desc: stepNum ? 'Go to move #' + stepNum : 'Go to game start',
      step: stepNum
    });
  });

  let status;
  if(winner) {
    status = 'The winner is ' + winner + '!'
  } else {
    status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
  }//end setStatus

  const jumpTo = (stepNum) => {
    setStep(stepNum)
    setNext((stepNum%2) === 0)
  }//end jumpTo

  const handlePress = (i) => {
    const historySlice = history.slice(0, step+1)
    const gridSlice = current.grid.slice();
    if(calculateWinner(gridSlice) || gridSlice[i]) {
      return;
    }
    gridSlice[i] = xIsNext ? 'X' : 'O';
    setHistory(historySlice.concat({grid: gridSlice}));
    setNext(!xIsNext);
    setStep(historySlice.length);
  }//end handlePress

  return (
    <View style={styles.game}>
      <View style={styles.gameInfo}>
        <Text style={styles.status}>{status}</Text>
      </View>
      <View style={styles.gameBoard}>
        <Board
          grid = {current.grid}
          onPress = {(i) => handlePress(i)}
        />
      </View>
      <View style={styles.history}>
        <FlatList
          keyExtractor={(item) => item.step.toString()}
          data={pastMoves}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => jumpTo(item.step)}>
              <Text style={styles.status}>{item.desc}</Text>
            </TouchableOpacity>
          )}
        />
        {console.log(pastMoves)}
      </View>
    </View> 
  );
}// end Game

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}// end calculateWinner

const styles = StyleSheet.create({
  game: {
    backgroundColor: 'blue',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  },
  gameBoard: {
    backgroundColor: 'red',
    flex: 1,
  },
  gameInfo: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'flex-end',
  },
  history: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'flex-start',
  },
  status: {
    fontFamily : 'Roboto',
    fontSize: 32,
    fontWeight: 'bold',
  },
});