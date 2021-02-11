import globalStyles from '../constants/globalStyles'

const themes = {
  light: {
    font: 'Balsamiq-Bold',
    background: '#fffff5',
    grid1: '#999999',
    grid2: '#cccccc',
    text: '#4d4d4d',
    color1: '#fe7070',
    color2: '#ffd060',
    color3: '#53bee0',
    color4: '#72cfaa',
  },
  dark: {
    font: 'Balsamiq-Bold',
    background: '#fffff0',
    color0: '#535161',
    color1: '#7a6532',
    color2: '#964444',
    color3: '#3d705c',
    color4: '#2d6f85',
  }
}

export default function StyleSheetFactory(currentTheme) {
  return(globalStyles(themes[currentTheme]))
}