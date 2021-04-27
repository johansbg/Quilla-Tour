import React from "react";
import Home from "./Home";
import Prueba from "./Prueba";
import { Switch, Route, Redirect } from "react-router-dom";
import "../fontawesome";

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/prueba" component={Prueba} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Main;
