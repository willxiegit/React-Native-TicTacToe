import setHistory from '../actions/setHistory';
import setStep from '../actions/setStep';
import setNext from '../actions/setNext';
import newGame from '../actions/newGame';

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
    default:
      return(state);
  }
}

export default rootReducer;