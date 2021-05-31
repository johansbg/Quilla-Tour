import React from "react";
import Informacion from "./Informacion";
// import Informacion2 from "./Informacion";
import Historia from "../components/noticias/Historia";
import MostrarNoticias from "../components/noticias/MostrarNoticias"
// import NoticiaAmpliada from "../components/noticias/NoticiaAmpliada";
import Home from "./Home";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import "../fontawesome";
import NoticiaAmpliada from "../components/noticias/NoticiaAmpliada";

function Main() {
  return (
    <Switch>
      <Route exact path="/Quilla-Tour" component={Home}/>
      <Route exact path="/Quilla-Tour/InformacionDeLaCiudad" component={Informacion}/>
      <Route exact path="/Quilla-Tour/InformacionDeLaCiudad/MostrarNoticias" component={MostrarNoticias}/>
      {/* <Route exact path="/Quilla-Tour/InformacionDeLaCiudad/" component={Informacion2}/> */}
      <Route exact path="/Quilla-Tour/InformacionDeLaCiudad/Historia" component={Historia}/>
      <Route exact path="/Quilla-Tour/InformacionDeLaCiudad/NoticiaAmpliada" component={withRouter(NoticiaAmpliada)}/>
      <Redirect to="/Quilla-Tour" />
    </Switch>
  );
}

export default withRouter(Main);
