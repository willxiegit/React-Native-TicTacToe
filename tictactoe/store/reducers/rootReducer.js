import setHistory from "../actions/setHistory";
import setStep from "../actions/setStep";
import setNext from "../actions/setNext";

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
    default:
      return(state);
  }
}

export default rootReducer;