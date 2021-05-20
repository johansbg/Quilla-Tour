import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import * as L from "leaflet";
import { Container, Row, Col } from "reactstrap";

//Components

function Explora() {
  const position = [
    {
      nombre: "Zoológico de B/quilla",
      direccion: "Calle 77 # 68 - 40",
      latitud: 11.010947478255625,
      longitud: -74.79790183189363,
    },
    {
      nombre: "Parroquia Inmaculada Concepción",
      direccion: "Cra. 57 # 68 - 85",
      latitud: 10.998840253903447,
      longitud: -74.79810435424716,
    },
    {
      nombre: "Museo Mapuka",
      direccion: "Km 5 Vía Puerto Colombia - Bloque K Uninorte",
      latitud: 11.020223941287098,
      longitud: -74.85118295548727,
    },
    {
      nombre: "Viva Centro Comercial",
      direccion: "Cra 51B # 87 - 50",
      latitud: 11.008288375744955,
      longitud: -74.82182617389006,
    },
    {
      nombre: "Castillo de Salgar",
      direccion: "Calle 9 # 13 - 16, Salgar, Puerto Colombia",
      latitud: 11.018237783240014,
      longitud: -74.94162060652182,
    },
    {
      nombre: "Museo del Caribe",
      direccion: "Calle 36 # 46 - 66",
      latitud: 10.986270502668857,
      longitud: -74.77856479861191,
    },
    {
      nombre: "Catedral Metropolitana de Barranquilla",
      direccion: "Cra. 45 # 53 - 140",
      latitud: 10.988221919524074,
      longitud: -74.79049471057381,
    },
    {
      nombre: "Centro de Convenciones Puerta de Oro",
      direccion: "Via 40 # 79B - 06",
      latitud: 11.021585959811365,
      longitud: -74.79971341879926,
    },
    {
      nombre: "Centro Comercial Buenavista",
      direccion: "Cl. 98 # 52 - 115",
      latitud: 11.013139668933952,
      longitud: -74.82767099456795,
    },
    {
      nombre: "Malecón Turístico Rio Magdalena ",
      direccion: "Av. del Rio",
      latitud: 10.99707652374411,
      longitud: -74.77048328218513,
    },
    {
      nombre: "Museo del Carnaval",
      direccion: "Carrera 54 # 49B - 03",
      latitud: 10.993046793422442,
      longitud: -74.78761138894464,
    },
    {
      nombre: "Casa del Carnaval",
      direccion: "Cra. 54 # 49B - 39",
      latitud: 10.992988960697799,
      longitud: -74.78782110927281,
    },
    {
      nombre: "Monumento Ventana al Mundo",
      direccion: "Rotonda, Cl. 110",
      latitud: 11.03311864101431,
      longitud: -74.83140692119329,
    },
    {
      nombre: "Bocas de Ceniza",
      direccion: "Destapada Bocas De Ceniza",
      latitud: 11.106334386939494,
      longitud: -74.85471714179081,
    },
    {
      nombre: "Centro Comercial Villa Country",
      direccion: "Cl. 78 # 53 - 70",
      latitud: 11.00439507069124,
      longitud: -74.80668768078363,
    },
    {
      nombre: "Plaza de la Intendencia Fluvial",
      direccion: "Vía 40 # 36 - 135",
      latitud: 10.98566552233177,
      longitud: -74.7758701460156,
    },
    {
      nombre: "Plaza de la Paz",
      direccion: "Cl. 53  # 46 - 07",
      latitud: 10.987962164372274,
      longitud: -74.78883086749592,
    },
    {
      nombre: "Centro Comercial Portal del Prado",
      direccion: "Cl. 53 # 46 - 192",
      latitud: 10.989667300547147,
      longitud: -74.78859347375383,
    },
    {
      nombre: "Centro Comercial Único Outlet",
      direccion: "Cl. 74 # 38D - 113",
      latitud: 10.988829272949914,
      longitud: -74.8123921043121,
    },
  ];

  const position1 = [10.98982992742527, -74.80986988979193];

  //  Create the Icon
  const LeafIcon = L.Icon.extend({
    options: {},
  });

  const blueIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",
    }),
    greenIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF",
    });

  const [icon, setIcon] = React.useState(greenIcon);
  return (
    <div>
      <Container fluid={true}>
        <Row className="align-items-center">
          <Col xs={{ size: 12, offset: 0 }}>
            <MapContainer
              className="main"
              center={position1}
              zoom={13}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">Quilla-Tour</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {position.map((dataPosition, i) => (
                <Marker
                  key={i}
                  icon={icon}
                  position={[dataPosition.latitud, dataPosition.longitud]}
                >
                  <Popup>
                    {dataPosition.nombre}. <br /> {dataPosition.direccion}.
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

export default Explora;
