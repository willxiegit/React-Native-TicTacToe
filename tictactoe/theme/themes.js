import globalStyles from '../constants/globalStyles'

const themes = {
  light: {
    font: 'Balsamiq-Bold',
    background: '#fffff5',
    grid1: '#999999',
    grid2: '#cccccc',
    text: '#4d4d4d',
    text2: '#4d4d4d',
    color1: '#fe6767',
    color2: '#ffd166',
    color3: '#7ecfe7',
    color4: '#72cfaa',
  },
  dark: {
    font: 'Balsamiq-Bold',
    background: '#1a1a1a',
    grid1: '#4d4d4d',
    grid2: '#333333',
    text: '#cccccc',
    text2: '#1a1a1a',
    color1: '#b32d00',
    color2: '#cc8f00',
    color3: '#208cac',
    color4: '#cccccc',
  }
}

export default function StyleSheetFactory(currentTheme) {
  return(globalStyles(themes[currentTheme]))
}