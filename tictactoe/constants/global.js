import { StyleSheet, Dimensions } from 'react-native';

const DeviceWidth = Dimensions.get('window').width;

export const globalStyles = StyleSheet.create({
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
    alignItems: 'center'
  },
  status: {
    alignSelf: 'center',
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
    borderWidth: 4,
    marginRight: -4,
    marginTop: -4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    fontSize: 50,
    fontFamily: 'Balsamiq-Bold'
  },
});