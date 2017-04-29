import { createStore, compose, applyMiddleware } from "redux";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import { browserHistory } from "react-router";

// root reducer

import rootReducer from "./reducers/mainReducer";

//default state

const state = {

  data: false

};

export const store = createStore(
                                  rootReducer, 
                                  state
                                );


export const history = syncHistoryWithStore(browserHistory, store);