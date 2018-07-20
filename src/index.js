import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './modules/Users/containers/HomePage';
import Login from './modules/Users/containers/login';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
// import "./content/style.css";
import './css/index.css';
import logger from 'redux-logger'
import ReduxPromise from "redux-promise";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";
import DeviceUtil from "./common/Util/DeviceUtil";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ReduxPromise, thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <DeviceUtil>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/login/:id" component={Login} />
      </DeviceUtil>
    </Router>
  </Provider>,
  document.getElementById("root")
);

