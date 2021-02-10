import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer'

const initialState = {
  history: [{grid: Array(9).fill(null)}],
  step: 0,
  xIsNext: true,
  theme: 'dark',
}

const Store = () => {
 return(
   createStore(rootReducer, initialState)
 );
}

export default Store;