import React from "react";
import Prueba2 from "./prueba2";
import Home from "./Home";
import Prueba from "./Prueba";
import { Switch, Route, Redirect } from "react-router-dom";
import "../fontawesome";

function Main() {
  return (
    <Switch>
      <Route exact path="/Quilla-Tour" component={Home}/>
      <Route exact path="/Quilla-Tour/prueba" component={Prueba}/>
      <Route exact path="/Quilla-Tour/prueba2" component={Prueba2}/>
      <Redirect to="/Quilla-Tour" />
    </Switch>
  );
}

export default Main;
