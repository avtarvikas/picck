import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
// import "./content/style.css";
import './css/index.css';
import RootRouter from "./RootRouter";
import logger from 'redux-logger'
import ReduxPromise from "redux-promise";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ReduxPromise, thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <RootRouter />
  </Provider>,
  document.getElementById("root")
);