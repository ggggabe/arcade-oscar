import React from 'react'

import {
  Bps,
  Home,
} from './views'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const Routes = () =>
<Router>
  <Switch>

    <Route exact path="/">
      <Home />
    </Route>

    <Route path="/bps">
      <Bps />
    </Route>

  </Switch>
</Router>
