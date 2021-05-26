import React from "react";
import Informacion from "./Informacion";
import Home from "./Home";
import Comunidad from "./Comunidad";
import Explora from "./Explora";
import Perfil from "./Perfil";
import { Switch, Route, Redirect } from "react-router-dom";
import "../fontawesome";

function Main() {
  return (
    <Switch>
      <Route exact path="/Quilla-Tour" component={Home}/>
      <Route exact path="/Quilla-Tour/Comunidad" component={Comunidad}/>
      <Route exact path="/Quilla-Tour/InformacionDeLaCiudad" component={Informacion}/>
      <Route exact path="/Quilla-Tour/explora" component={Explora} />
      <Route exact path="/Quilla-Tour/Perfil" component={Perfil} />
      <Redirect to="/Quilla-Tour" />
    </Switch>
  );
}

export default Main;
