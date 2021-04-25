import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import * as L from "leaflet";
import { Container, Row, Col } from 'reactstrap';


//Components


function Prueba() {

  const position = [
    {
      nombre: "Zoológico de B/quilla",
      descripcion: "funciona",
      latitud:11.010947478255625, 
      longitud:-74.79790183189363
    },
    {
      nombre: "Parroquia Inmaculada Concepción",
      descripcion: "funciona",
      latitud:10.998840253903447, 
      longitud:-74.79810435424716
    },
    {
      nombre: "Museo Mapuka",
      descripcion: "funciona",
      latitud:11.020223941287098, 
      longitud:-74.85118295548727
    }
  ]
  
  const position1 = [10.98982992742527, -74.80986988979193]

  //  Create the Icon
  const LeafIcon = L.Icon.extend({
    options: {}
  });

  const blueIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
  }),
  greenIcon = new LeafIcon({
    iconUrl:
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF"
  });

  const [icon, setIcon] = React.useState(greenIcon);
  return (
    <div>
    <Container fluid={true}>
      <Row className="align-items-center">
        <Col xs={{size: 12, offset: 0}}>
          <MapContainer className="main" center={position1} zoom={13} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">Quilla-Tour</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {position.map((dataPosition,i) => (
              <Marker key={i} icon={icon} position={[dataPosition.latitud,dataPosition.longitud]}>
                <Popup >
                  {dataPosition.nombre}. <br /> {dataPosition.descripcion}.
                </Popup>
              </Marker>
            ))}
            
          </MapContainer>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Prueba;
