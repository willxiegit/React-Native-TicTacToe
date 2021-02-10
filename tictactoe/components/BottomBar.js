import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import StyleSheetFactory from '../constants/themes'
import setStep from '../store/actions/setStep';
import setNext from '../store/actions/setNext';

const globalStyles = StyleSheetFactory();

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
    <View style={globalStyles.bar}>
      <View>
        <TouchableOpacity style={[{opacity: back ? 0.2 : 1 }]} disabled={back} onPress={() => setStep(step-1)}>
          <AntDesign name='leftcircle' size={40} color='purple' />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={[{opacity: forward ? 0.2 : 1 }]} disabled={forward} onPress={() => setStep(step+1)}>
          <AntDesign name='rightcircle' size={40} color='purple'/>
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