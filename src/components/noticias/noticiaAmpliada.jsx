import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function NoticiaAmpliada(props) {
    const {url, author, title, urlToImage, content} = props.noticia

    return(
      <div className="container">
          <img src={urlToImage} alt="New's Image" />
          <h1>{title}</h1>
          <h3>{author}</h3>
          <p>{content}</p>
      </div>
    )
}

export default NoticiaAmpliada;