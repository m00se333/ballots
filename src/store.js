import { createStore, compose, applyMiddleware } from "redux";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import { browserHistory } from "react-router";
import thunkMiddleware from "redux-thunk";

// root reducer

import rootReducer from "./reducers/mainReducer";

//default state

const state = {

  data: false,
  tournament: {
    name: null,
    prelims: 3,
    outRounds: 0,
    notes: null
  },
  tournamentList: [],
  editTournament: null

};

export const store = createStore(
                                  rootReducer, 
                                  state,
                                  applyMiddleware(thunkMiddleware)
                                );


export const history = syncHistoryWithStore(browserHistory, store);