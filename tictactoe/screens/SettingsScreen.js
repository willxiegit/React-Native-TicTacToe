import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';

import { useTheme } from '../theme/themeContext'
import StyleSheetFactory from '../theme/themes'
import SettingsHeader from '../components/Headers/SettingsHeader'
import MiniBoard from '../components/MiniBoard'

function SettingsScreen({ navigation, history }) {
  // set up stylesheet
  const [theme, setTheme] = useTheme()
  const styles = StyleSheetFactory(theme)
  const lightTheme = StyleSheetFactory('light')
  const darkTheme = StyleSheetFactory('dark')
  const retroTheme = StyleSheetFactory('dark')
  
  return (
    <View style={styles.container}>
      <SettingsHeader navigation={navigation}/>
      <View style={styles.allThemes}>
        <TouchableOpacity style={lightTheme.preview} onPress={() => setTheme('light')}>
          <View style={lightTheme.previewInner}>
            <MiniBoard styles={lightTheme} grid={history[history.length-1].grid}/>
            <Text style={lightTheme.previewText}>Light</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={darkTheme.preview} onPress={() => setTheme('dark')}>
          <View style={darkTheme.previewInner}>
            <MiniBoard styles={darkTheme} grid={history[history.length-1].grid}/>
            <Text style={darkTheme.previewText}>Dark</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.preview} onPress={() => setTheme('dark')}>
          <View style={lightTheme.previewInner}>
            <MiniBoard styles={lightTheme} grid={history[history.length-1].grid}/>
            <Text style={lightTheme.previewText}>Light</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}// end SettingsScreen

const mapStateToProps = (state) => ({
  history: state.history,
});

export default connect(mapStateToProps)(SettingsScreen);