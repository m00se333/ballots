import React from "react";
import {render} from "react-dom";

//css
import "./stylesheets/styles.css";

//components
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
  //nested in Dasboard
  import Profile from "./components/Profile";
  import Ballots from "./components/Ballots";

//StoreShell
import StoreShell from "./components/StoreShell";

// Router dependencies
import { Route, Router, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";

//store
import { store,  history} from "./store.js";


const router = (

  <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={StoreShell}>
          <IndexRoute component={Home}></IndexRoute>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/ballots" component={Ballots}></Route>
        </Route>
      </Router>
  </Provider>

)

render(router, document.getElementById("app"));