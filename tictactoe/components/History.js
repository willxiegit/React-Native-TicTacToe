import React from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

import { useTheme } from '../theme/themeContext'
import StyleSheetFactory from '../theme/themes'
import HistoryHeader from './Headers/HistoryHeader'
import setStep from '../store/actions/setStep';
import setNext from '../store/actions/setNext';

function History({history, setStep, setNext, closeModal}) {
  // set up stylesheet
  const [theme] = useTheme()
  const styles = StyleSheetFactory(theme)

  const pastMoves = history.map((_stepGrid, stepNum) => {
    return({
      desc: stepNum ? 'Go to move #' + stepNum : 'Go to game start',
      step: stepNum
    });
  });

  const jumpTo = (stepNum) => {
    setStep(stepNum)
    setNext((stepNum%2) === 0)
    closeModal();
  }// end jumpTo

  return (
    <View style={styles.container}>
      <HistoryHeader/>
      <View style={styles.historyList}>
          <FlatList
            style={styles.test}
            keyExtractor={(item) => item.step.toString()}
            data={pastMoves}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.listItem} onPress={() => jumpTo(item.step)}>
                <Text>{item.desc}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <TouchableOpacity style={styles.historyButton} onPress={() => closeModal()}>
          <Text style={styles.historyButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
  );
}// end History

const mapStateToProps = (state) => ({
  history: state.history,
});

const mapDispatchToProps = dispatch => ({
  setStep: (newStep) => dispatch(setStep(newStep)),
  setNext: (newNext) => dispatch(setNext(newNext))
});

export default connect(mapStateToProps, mapDispatchToProps)(History);