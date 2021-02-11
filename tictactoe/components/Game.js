import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import setHistory from '../store/actions/setHistory';
import setStep from '../store/actions/setStep';
import setNext from '../store/actions/setNext';
import newGame from '../store/actions/newGame';

import { useTheme } from '../theme/themeContext'
import StyleSheetFactory from '../theme/themes'
import Board from './Board'
import History from './History'
import BottomBar from './BottomBar'

function Game({history, setHistory, step, setStep, xIsNext, setNext, newGame}) {
  // set up stylesheet
  const [theme] = useTheme()
  const styles = StyleSheetFactory(theme)
  const [openModal, setOpenModal] = useState(false)

  const current = history[step];
  const winner = calculateWinner(current.grid);

  let status;
  if(winner) {
    status = 'The winner is ' + winner + '!'
  } else if(step === 9 && !winner) {
    status = 'Stalemate!'
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
    <View style={styles.container}>
      <Modal visible={openModal} animationType='fade'>
          <History closeModal = {() => setOpenModal(false)}/>
      </Modal>

      <View style={styles.gameInfo}>
        <Text style={styles.status}>{status}</Text>
        <TouchableOpacity style={styles.restart} onPress={() => newGame()}>
          <Ionicons name='refresh-circle' size={45} style={styles.setColor4}/>
        </TouchableOpacity>
      </View>
      <View style={styles.game}>
        <Board
          grid = {current.grid}
          onPress = {(i) => handlePress(i)}
        />
      </View>
      <BottomBar/>
        <TouchableOpacity style={styles.historyButton} onPress={() => setOpenModal(true)}>
          <Text style={styles.historyButtonText}>History</Text>
        </TouchableOpacity>
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
  newGame: () => dispatch(newGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);