import React from "react";
import {
  Card, CardText, CardTitle, Button
} from 'reactstrap';

function Anuncio(props) {
    const {url, author, title, urlToImage, content} = props.anuncio

    return(
      <div>
        <Card body inverse style={{ backgroundColor: '#cf8128', borderColor: '#c7700d' }}>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <CardText>5/12/2021</CardText>
          <CardText>4:30 PM</CardText>
        </Card>
        <br />
      </div>
    )
}

export default Anuncio;