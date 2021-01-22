import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

import setHistory from '../store/actions/setHistory';
import setStep from '../store/actions/setStep';
import setNext from '../store/actions/setNext';

import Board from './Board'
import History from './History'
import BottomBar from './BottomBar'

function Game({history, setHistory, step, setStep, xIsNext, setNext}) {
  const lastMove = history[history.length-1];
  const current = history[step];
  const winner = calculateWinner(lastMove.grid);

  let status;
  if(winner) {
    status = 'The winner is ' + winner + '!'
  } else {
    status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
  }// end setStatus

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
  }// end handlePress

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
      <BottomBar/>
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

const mapStateToProps = state => ({
  history: state.history,
  step: state.step,
  xIsNext: state.xIsNext,
});

const mapDispatchToProps = dispatch => ({
  setHistory: (newHistory) => dispatch(setHistory(newHistory)),
  setStep: (newStep) => dispatch(setStep(newStep)),
  setNext: (newNext) => dispatch(setNext(newNext)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);

const styles = StyleSheet.create({
  game: {
    backgroundColor: 'blue',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch'
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
  status: {
    fontFamily : 'Roboto',
    fontSize: 32,
    fontWeight: 'bold',
  },
});