import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers"; // Gets the State from the reducer(s)

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(),
  // other store enhancers if any
));

// let store = createStore(reducer); // Creates the store from the State received from the reducer(s)

export default store;
