import setHistory from '../actions/setHistory';
import setStep from '../actions/setStep';
import setNext from '../actions/setNext';
import newGame from '../actions/newGame';
import setTheme from '../actions/setTheme';

const rootReducer = (state, action) => {
  switch(action.type) {
    case(setHistory):
      return({
        ...state,
        history: action.payload,
      });
      case(setStep):
      return({
        ...state,
        step: action.payload,
      });
      case(setNext):
      return({
        ...state,
        xIsNext: action.payload,
      });
      case(newGame):
      return({
        history: [{grid: Array(9).fill(null)}],
        step: 0,
        xIsNext: true,
      });
      case(setTheme):
      return({
        ...state,
        theme: action.payload,
      });
    default:
      return(state);
  }
}

export default rootReducer;