import { StyleSheet, Dimensions } from 'react-native';

const DeviceWidth = Dimensions.get('window').width;

export const globalStyles = StyleSheet.create({
  //
  // GLOBAL
  //
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  //
  // GAME
  //
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
    flex: 2.5,
  },
  gameInfo: {
    backgroundColor: 'yellow',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  status: {
    fontFamily: 'Balsamiq-Bold',
    fontSize: 32,
  },
  history: {
    backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'violet',
  },
  //
  // BOARD
  //
  boardRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: DeviceWidth*0.25,
    height: DeviceWidth*0.25,
    backgroundColor: 'skyblue',
    borderWidth: 6,
    borderColor: 'black',
    borderRadius: 5,
    marginRight: -7,
    marginTop: -7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    fontSize: 50,
    fontFamily: 'Balsamiq-Bold'
  },
  //
  // HISTORY
  //
    history: {
      backgroundColor: 'green',
      flex: 1,
      justifyContent: 'flex-start',
    },
    list :{
      backgroundColor: 'purple',
    },
  //
  // HEADER
  //
    header: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },
  //
  //
  //
});