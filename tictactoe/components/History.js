import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

import setStep from '../store/actions/setStep';
import setNext from '../store/actions/setNext';

function History({history, setStep, setNext}) {
  const pastMoves = history.map((_stepGrid, stepNum) => {
    return({
      desc: stepNum ? 'Go to move #' + stepNum : 'Go to game start',
      step: stepNum
    });
  });

  const jumpTo = (stepNum) => {
    setStep(stepNum)
    setNext((stepNum%2) === 0)
  }// end jumpTo

  return (
    <View style={styles.history}>
        <FlatList
          keyExtractor={(item) => item.step.toString()}
          data={pastMoves}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => jumpTo(item.step)}>
              <Text style={styles.list}>{item.desc}</Text>
            </TouchableOpacity>
          )}
        />
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

const styles = StyleSheet.create({
  history: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'flex-start',
  },
  list :{
    backgroundColor: 'purple',
  }
})
