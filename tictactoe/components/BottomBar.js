import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

import setStep from '../store/actions/setStep';
import setNext from '../store/actions/setNext';

function BottomBar({history, step, setStep, xIsNext, setNext}) {
  let back;
  // hide back button when no previous steps
  if(step > 0) {
    back = false;
  }else {
    back = true;
  }// end if
  let forward;
  // hide forward button when no future steps
  if(step < history.length-1) {
    forward = false;
  }else {
    forward = true;
  }// end if

  return(
    <View style={styles.bar}>
      <View>
        <TouchableOpacity style={[ styles.button, { opacity: back ? 0.2 : 1 }]} disabled={back} onPress={() => setStep(step-1)}>
          <Text>BACK</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={[ styles.button, { opacity: forward ? 0.2 : 1 }]} disabled={forward} onPress={() => setStep(step+1)}>
          <Text>FORWARD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = state => ({
  history: state.history,
  step: state.step,
  xIsNext: state.xIsNext,
});

const mapDispatchToProps = dispatch => ({
  setStep: (newStep) => dispatch(setStep(newStep)),
  setNext: (newNext) => dispatch(setNext(newNext)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);

const styles = StyleSheet.create({
  bar: {
    backgroundColor: 'green',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignSelf: 'stretch',
  },
  button: {
    backgroundColor: 'orange',
  },
});