import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/apply" />
        <Route path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;