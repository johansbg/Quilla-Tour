import React from "react";
import Home from "./home";
import Prueba from "./prueba";
import { Switch, Route, Redirect } from "react-router-dom";
import "../fontawesome";

function main() {
  return (
    <Switch>
      <Route exact path="/Quilla-Tour" component={Home} />
      <Route exact path="/Quilla-Tour/prueba" component={Prueba} />
      <Redirect to="/Quilla-Tour" />
    </Switch>
  );
}

export default main;
