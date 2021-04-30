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
<<<<<<< HEAD
      <Route exact path="/" component={Home} />
      <Route exact path="/prueba" component={Prueba} />
      <Route exact path="/agenda" component={Agenda} />
      <Redirect to="/" />
=======
      <Route exact path="/Quilla-Tour" component={Home} />
      <Route exact path="/Quilla-Tour/prueba" component={Prueba} />
      <Redirect to="/Quilla-Tour" />
>>>>>>> ce7e71b655c34a7f937ba7439ed2b126327d5455
    </Switch>
  );
}

export default withRouter(Main);
