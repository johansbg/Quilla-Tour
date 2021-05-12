import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function Noticia(props) {
    const {url, author, title, urlToImage, content} = props.noticia

    return(
      <div className="col-lg-4 col-md-6 col-xs-12">
        <Card>
          <CardImg top width="100%" src={urlToImage} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{author}</CardSubtitle>
            <CardText>{content}</CardText>
            <Button>Leer más</Button>
          </CardBody>
        </Card>
        <br />
      </div>
    )
}

export default Noticia;
