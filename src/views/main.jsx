import React from "react";
import Home from "./home";
import Prueba from "./prueba";
import { Switch, Route, Redirect } from "react-router-dom";
import "../fontawesome";

function main() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route exact path="/prueba">
        <Prueba />
      </Route>
    </Switch>
  );
}

export default main;
