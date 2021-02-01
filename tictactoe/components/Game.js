import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import setHistory from '../store/actions/setHistory';
import setStep from '../store/actions/setStep';
import setNext from '../store/actions/setNext';
import newGame from '../store/actions/newGame';

import { globalStyles } from '../constants/global';
import Board from './Board'
import History from './History'
import BottomBar from './BottomBar'

function Game({history, setHistory, step, setStep, xIsNext, setNext, newGame}) {
  const [openModal, setOpenModal] = useState(false)

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
    <View style={globalStyles.game}>
      <Modal visible={openModal} animationType='slide'>
          <History closeModal = {() => setOpenModal(false)}/>
          <TouchableOpacity style={globalStyles.history} onPress={() => setOpenModal(false)}>
            <AntDesign name='closecircle' size={40} color='green'/>
          </TouchableOpacity>
      </Modal>

      <View style={globalStyles.gameInfo}>
        <Text style={globalStyles.status}>{status}</Text>
        <TouchableOpacity onPress={() => newGame()}>
          <Ionicons name='refresh-circle' size={40} color='green'/>
        </TouchableOpacity>
      </View>
      <View style={globalStyles.gameBoard}>
        <Board
          grid = {current.grid}
          onPress = {(i) => handlePress(i)}
        />
      </View>
      <BottomBar/>
      <View>
        <TouchableOpacity style={globalStyles.history} onPress={() => setOpenModal(true)}>
          <AntDesign name='clockcircle' size={40} color='green'/>
          <Text>History</Text>
        </TouchableOpacity>
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