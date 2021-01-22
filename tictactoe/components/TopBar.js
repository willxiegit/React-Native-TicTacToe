import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

import setHistory from '../store/actions/setHistory';
import setStep from '../store/actions/setStep';
import setNext from '../store/actions/setNext';

function TopBar(params) {
  
}

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

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);

const styles = StyleSheet.create({
  game: {
    backgroundColor: 'blue',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});