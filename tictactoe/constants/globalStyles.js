import { StyleSheet, Dimensions } from 'react-native';

const DeviceWidth = Dimensions.get('window').width;

export default function globalStyles(theme) {
  return StyleSheet.create({
    //
    // GLOBAL
    //
    container: {
      flex: 1,
      backgroundColor: theme.color0,
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'stretch',
      alignSelf: 'stretch',
    },
    //
    // GAME
    //
    game: {
      backgroundColor: theme.color0,
      flex: 4,
      justifyContent: 'center',
    },
    gameBoard: {
      backgroundColor: theme.color2,
      alignSelf: 'center',
      height: DeviceWidth*0.9+10,
      width: DeviceWidth*0.9+10,
      borderRadius: 10,
    },
    gameInfo: {
      backgroundColor: theme.color0,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end'
    },
    status: {
      fontFamily: 'Balsamiq-Bold',
      fontSize: 32,
      flex: 3,
      paddingLeft: 15,
    },
    restart: {
      flex: 1,
      alignItems: 'flex-end',
      paddingRight: 15,
    },
    historyButton: {
      backgroundColor: theme.color3,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      height: 50,
      width: DeviceWidth*0.4,
      borderRadius: 50,
      marginBottom: 20,
    },
    historyButtonText: {
      fontFamily: 'Balsamiq-Bold',
      fontSize: 20,
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
      width: DeviceWidth*0.3,
      height: DeviceWidth*0.3,
      backgroundColor: theme.color3,
      borderWidth: 4,
      borderColor: theme.color2,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    grid: {
      fontSize: 70,
      fontFamily: 'Balsamiq-Bold',
      paddingBottom: 10
    },
    //
    // HISTORY
    //
    historyList: {
      backgroundColor: theme.color1,
      flex: 1,
      justifyContent: 'flex-start',
      },
      listItem: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: theme.color2,
        width: DeviceWidth*0.3,
        height: DeviceWidth*0.2,
  
      },
    //
    // HEADER
    //
      header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
      },
      name: {
        fontSize: 45,
        fontFamily: 'Balsamiq-Bold',
        paddingLeft: 10,
        paddingBottom: 5,
      },
      title: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start'
      },
      settingButton: {
        
      },
    //
    // BOTTOM BAR
    //
    bar: {
      backgroundColor: theme.color0,
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-around',
      alignSelf: 'stretch',
    },
  });
}
