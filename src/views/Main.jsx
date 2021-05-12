//
import React from "react";
import Home from "./Home";
import Prueba from "./Prueba";
import Agenda from "./Agenda";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import "../fontawesome";

function Main() {
  return (
    <Switch>
      <Route exact path="/Quilla-Tour" component={Home} />
      <Route exact path="/Quilla-Tour/agenda" component={Agenda} />
      <Redirect to="/Quilla-Tour" />
    </Switch>
  );
}

export default withRouter(Main);
