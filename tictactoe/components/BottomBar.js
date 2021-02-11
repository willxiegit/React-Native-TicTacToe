import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import { useTheme } from '../theme/themeContext'
import StyleSheetFactory from '../theme/themes'
import setStep from '../store/actions/setStep';
import setNext from '../store/actions/setNext';

function BottomBar({history, step, setStep, xIsNext, setNext}) {
  // set up stylesheet
  const [theme] = useTheme()
  const styles = StyleSheetFactory(theme)
  // hide back button when no previous steps
  let back;
  if(step > 0) {
    back = false;
  }else {
    back = true;
  }// end if

  // hide forward button when no future steps
  let forward;
  if(step < history.length-1) {
    forward = false;
  }else {
    forward = true;
  }// end if

  const handleBack = () => {
    setStep(step-1);
    setNext(!xIsNext);
  }

  const handleForward = () => {
    setStep(step+1);
    setNext(!xIsNext);
  }

  return(
    <View style={styles.bar}>
      <View>
        <TouchableOpacity style={[{opacity: back ? 0.2 : 1 }]} disabled={back} onPress={() => handleBack()}>
          <AntDesign name='leftcircle' size={40} style={styles.setColor4} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={[{opacity: forward ? 0.2 : 1 }]} disabled={forward} onPress={() => handleForward()}>
          <AntDesign name='rightcircle' size={40} style={styles.setColor4}/>
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