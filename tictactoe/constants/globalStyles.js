import { Dimensions } from 'react-native';
import { StyleSheet} from "react-native";

const DeviceWidth = Dimensions.get('window').width;

export default function globalStyles(theme) {
  return StyleSheet.create({
    //
    // GLOBAL
    //
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'stretch',
      alignSelf: 'stretch',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
    },
    headerTitle: {
      fontSize: 30*theme.titleMulti,
      fontFamily: theme.title,
      color: theme.text,
      paddingHorizontal: 10,
      textAlign: 'center',
    },
    headerSide: {
      flex: 1,
      paddingHorizontal: 10,
    },
    setbackground: {
      color: theme.background,
    },
    setColor0: {
      color: theme.grid1,
    },
    setColor1: {
      color: theme.color1,
    },
    setColor2: {
      color: theme.color2,
    },
    setColor3: {
      color: theme.color3,
    },
    setColor4: {
      color: theme.color4,
    },
    //
    // GAME
    //
    game: {
      backgroundColor: theme.background,
      flex: 5,
      justifyContent: 'center',
    },
    gameInfo: {
      backgroundColor: theme.background,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end'
    },
    status: {
      fontFamily: theme.font,
      fontSize: 30*theme.textMulti,
      color: theme.text,
      flex: 3,
      paddingLeft: 15,
    },
    restart: {
      flex: 1,
      alignItems: 'flex-end',
      paddingRight: 15,
    },
    historyButton: {
      backgroundColor: theme.color4,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      height: 50,
      width: DeviceWidth*0.3,
      borderRadius: 50,
      marginVertical: 20,
    },
    historyButtonText: {
      fontFamily: theme.font,
      fontSize: 20*theme.textMulti,
      color: theme.text2,
    },
    //
    // BOARD
    //
    gameBoard: {
      backgroundColor: theme.grid1,
      alignSelf: 'center',
      height: DeviceWidth*0.9+8,
      width: DeviceWidth*0.9+8,
      borderRadius: 10,
      marginVertical: 10,
    },
    boardRow: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    square: {
      width: DeviceWidth*0.3,
      height: DeviceWidth*0.3,
      backgroundColor: theme.grid2,
      borderWidth: 4,
      borderColor: theme.grid1,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    grid: {
      fontSize: 70*theme.textMulti,
      fontFamily: theme.font,
      color: theme.text,
    },
    //
    // MINIBOARD
    //
    miniBoard: {
      backgroundColor: theme.grid1,
      alignSelf: 'center',
      height: DeviceWidth*0.3+4,
      width: DeviceWidth*0.3+4,
      borderRadius: 5,
      marginVertical: 3,
    },
    miniRow: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    miniSquare: {
      width: DeviceWidth*0.1,
      height: DeviceWidth*0.1,
      backgroundColor: theme.grid2,
      borderWidth: 2,
      borderColor: theme.grid1,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    miniGrid: {
      fontSize: 30*theme.textMulti,
      fontFamily: theme.font,
      color: theme.text,
    },
    //
    // HISTORY
    //
    historyBorder: {
      backgroundColor: theme.grid1,
      flex: 1,
      justifyContent: 'flex-start',
      alignSelf: 'center',
      width: DeviceWidth*0.9+8,
      borderRadius: 10,
      borderWidth: 8,
      borderColor: theme.grid1,
    },
    historyList: {
      backgroundColor: theme.grid2,
      borderRadius: 6,
    },
    historyItem: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingVertical: 10,
    },
    listButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.color4,
      width: DeviceWidth*0.4,
      height: 50,
      borderRadius: 50,
    },
    listText: {
      fontFamily: theme.font,
      fontSize: 15*theme.textMulti,
      color: theme.text2,
    },
    //
    // GAME HEADER
    //
      gameHeader: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 10,
      },
      name: {
        fontSize: 40*theme.titleMulti,
        fontFamily: theme.title,
        paddingLeft: 5,
      },
      settingsButton: {
        alignSelf: 'flex-end',
        marginBottom: 10,
      },
    //
    // BOTTOM BAR
    //
    bar: {
      backgroundColor: theme.background,
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-around',
      alignSelf: 'stretch',
    },
    //
    // SETTINGS
    //
    settingsHeader: {
      fontFamily: 'Balsamiq-Bold',
      fontSize: 30*theme.titleMulti,
      marginBottom: 5,
    },
    allThemes: {
      flex: 1,
      alignItems: 'center',
    },
    preview: {
      backgroundColor: theme.grid1,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
      width: DeviceWidth*0.8,
      height: DeviceWidth*0.42,
      borderRadius: 10,
    },
    previewInner: {
      backgroundColor: theme.background,
      justifyContent: 'center',
      alignItems: 'center',
      width: DeviceWidth*0.8-16,
      height: DeviceWidth*0.42-16,
      borderColor: theme.grid1,
      borderRadius: 5,
      flexDirection: 'row',
    },
    previewText: {
      fontFamily: theme.title,
      fontSize: 30*theme.titleMulti,
      color: theme.text,
      textAlign: 'center',
      width: '50%',
    }
  });
}
