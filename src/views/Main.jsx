//
import React from "react";
import Home from "./Home";
import Prueba from "./Prueba";
import Agenda from "./Agenda";
import { Switch, Route, Redirect } from "react-router-dom";
import "../fontawesome";

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/prueba" component={Prueba} />
      <Route exact path="/agenda" component={Agenda} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Main;
