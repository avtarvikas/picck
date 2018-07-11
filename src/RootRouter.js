import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App.js";
import HomePage from './modules/Users/containers/HomePage';
import Login from './modules/Users/containers/login';

const RootRouter = () => (
  <BrowserRouter>
    <App>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/login:id" component={Login} />
        </Switch>
      </div>
    </App>
  </BrowserRouter>
);

export default RootRouter;