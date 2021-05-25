import React from "react";
import Informacion from "./Informacion";
import Home from "./Home";
import Comunidad from "./Comunidad";
import { Switch, Route, Redirect } from "react-router-dom";
import "../fontawesome";

function Main() {
  return (
    <Switch>
      <Route exact path="/Quilla-Tour" component={Home}/>
      <Route exact path="/Quilla-Tour/Comunidad" component={Comunidad}/>
      <Route exact path="/Quilla-Tour/InformacionDeLaCiudad" component={Informacion}/>
      <Redirect to="/Quilla-Tour" />
    </Switch>
  );
}

export default Main;
