import globalStyles from '../constants/globalStyles'

const themes = {
  light: {
    title: 'lightTitle',
    font: 'lightText',
    titleMulti: 0.5,
    textMulti: 0.7,
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
    title: 'darkTitle',
    font: 'darkText',
    titleMulti: 1,
    textMulti: 1.2,
    background: '#1a1a1a',
    grid1: '#4d4d4d',
    grid2: '#333333',
    text: '#cccccc',
    text2: '#1a1a1a',
    color1: '#b32d00',
    color2: '#cc8f00',
    color3: '#208cac',
    color4: '#cccccc',
  },
  retro: {
    title: 'retroTitle',
    font: 'retroText',
    titleMulti: 1.1,
    textMulti: 1,
    background: '#31103c',
    grid1: '#e900ff',
    grid2: '#010101',
    text: '#72edea',
    text2: '#31103c',
    color1: '#faeb2c',
    color2: '#ff9900',
    color3: '#f52789',
    color4: '#72edea',
  },
}

export default function StyleSheetFactory(currentTheme) {
  return(globalStyles(themes[currentTheme]))
}