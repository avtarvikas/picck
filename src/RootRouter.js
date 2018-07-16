import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

import App from "./App.js";
import HomePage from './modules/Users/containers/HomePage';
import Login from './modules/Users/containers/login';

const history = createBrowserHistory();

const RootRouter = () => (
  <HashRouter history={history}>
    <App>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/login/:id" component={Login} />
    </App>
  </HashRouter>
);

export default RootRouter;