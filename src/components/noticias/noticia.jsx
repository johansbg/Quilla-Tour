import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import {
    BrowserRouter as Router,
    Link, Route, Switch
    } from "react-router-dom";

import NoticiaAmpliada from './noticiaAmpliada'
import MostrarAnuncios from './MostrarAnuncios'

function Noticia(props) {
    const {url, author, title, urlToImage, content} = props.noticia

    return(
      <div className="col-lg-6 col-md-12 col-xs-12">
        <Router>
          <Card>
            <CardImg top width="100%" src={urlToImage} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">{title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">{author}</CardSubtitle>
              {/* <CardText>{content}</CardText> */}
              {content.length > 200 &&
                <p>
                  {content.substring(0,200)} <i>Seguir leyendo</i>
                </p>
              }
              {/* <Button tag={Link} to="/Quilla-Tour/InformacionDeLaCiudad2/Prueba">Leer más</Button> */}
              <a href={url} target="_blank"><Button>Leer más</Button></a>
            </CardBody>
          </Card>
          <br />

          <Switch>
            <Route path="/Quilla-Tour/InformacionDeLaCiudad2/Prueba">
                <NoticiaAmpliada
                  title = {title}
                  content = {content}
                />
            </Route>
          </Switch>
        </Router>
      </div>
    )
}

export default Noticia;
