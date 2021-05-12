import React from "react";
import Home from "./home";
import Prueba from "./prueba";
import Prueba2 from "./prueba2";
import { Switch, Route, Redirect } from "react-router-dom";
import "../fontawesome";

function main() {
  return (
    <Switch>
      <Route exact path="/Quilla-Tour" component={Home}/>
      <Route exact path="/Quilla-Tour/prueba" component={Prueba}/>
      <Route exact path="/Quilla-Tour/prueba2" component={Prueba2}/>
      <Redirect to="/Quilla-Tour" />
    </Switch>
  );
}

export default main;
