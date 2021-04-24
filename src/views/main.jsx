import React from "react";
import Home from "./home";
import Prueba from "./prueba";
import { Switch, Route, Redirect } from "react-router-dom";
import "../fontawesome";

function main() {
  return (
    <Switch>
      <Route path="/Quilla-tour" component={Home}/>
      <Route exact path="/prueba" component={Prueba}/>
      <Redirect to="/Quilla-tour" />
    </Switch>
  );
}

export default main;
