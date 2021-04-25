import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import * as L from "leaflet";
import { Container, Row, Col } from 'reactstrap';


//Components


function Prueba() {

  const position = [11.033080725079746, -74.83127455576785]
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
        <Col xs={{size: 6, offset: 3}}>
          <MapContainer className="main" center={position1} zoom={12} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">Quilla-Tour</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={icon} position={position}>
              <Popup>
                Ventana al mundo. <br /> Sitio turistico.
              </Popup>
            </Marker>
          </MapContainer>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Prueba;
