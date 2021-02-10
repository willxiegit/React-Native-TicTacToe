import globalStyles from './globalStyles';

const themes = {
  light: {
    font: 'Balsamiq-Bold',
    color0: '#fffff0',
    color1: '#ffd060',
    color2: '#fe7070',
    color3: '#72cfaa',
    color4: '#54cff7',
  },
  dark: {
    font: 'Balsamiq-Bold',
    color0: '#fffff0',
    color1: '#ffd060',
    color2: '#fe7070',
    color3: '#72cfaa',
    color4: '#54cff7',
  }
}
export default function StyleSheetFactory() {
  return(globalStyles(themes['dark']))
}