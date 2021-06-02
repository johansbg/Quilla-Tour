import React, { useEffect } from "react";
import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import * as L from "leaflet";
import NavbarComponent from "../components/home/NavbarComponent";
import "leaflet-geosearch/dist/geosearch.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

//Components

function Explora() {
  const [amplio, setAmplio] = useState(13);

  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    useEffect(() => {
      const searchControl = new GeoSearchControl({
        provider: new OpenStreetMapProvider({
          params: {
            countrycodes: "co",
            addressdetails: 1,
            viewBox: [10.412183, -74.906719, 10.466206, -74.901226],
            bounded: 1, //TODO
            limit: 5,
          },
        }),
        style: "button",
        searchLabel: "Buscar sitio",
        notFoundMessage: "No se encontraron resultados",
        showMarker: true,
        keepResult: true,
        marker: {
          icon,
        },
      }).addTo(map);

      map.addControl(searchControl);

      return () => map.removeControl(searchControl);
    }, [map]);

    return null;
  }

  function LocationMarker() {
    const [position, setPosition] = useState(null);

    const map = useMapEvents({
      click() {
        map.locate();
        setAmplio(17);
      },
      locationfound(e) {
        setPosition(e.latlng);
        /*Localizar el usuario y viajar  */
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>Usted está aquí</Popup>
      </Marker>
    );
  }

  const position = [
    {
      nombre: "Zoológico de B/quilla",
      direccion: "Calle 77 # 68 - 40",
      latitud: 11.010947478255625,
      longitud: -74.79790183189363,
      live: "https://goo.gl/maps/GEUcwkuVJsFtSnwD6",
    },
    {
      nombre: "Parroquia Inmaculada Concepción",
      direccion: "Cra. 57 # 68 - 85",
      latitud: 10.998840253903447,
      longitud: -74.79810435424716,
      live: "https://goo.gl/maps/EFsNBx4pbXVm9NyWA",
    },
    {
      nombre: "Museo Mapuka",
      direccion: "Km 5 Vía Puerto Colombia - Bloque K Uninorte",
      latitud: 11.020223941287098,
      longitud: -74.85118295548727,
      live: "https://goo.gl/maps/S4cciJfmBYTVgMP96",
    },
    {
      nombre: "Viva Centro Comercial",
      direccion: "Cra 51B # 87 - 50",
      latitud: 11.008288375744955,
      longitud: -74.82182617389006,
      live: "https://goo.gl/maps/jUz2DNS58WMUEqx37",
    },
    {
      nombre: "Castillo de Salgar",
      direccion: "Calle 9 # 13 - 16, Salgar, Puerto Colombia",
      latitud: 11.018237783240014,
      longitud: -74.94162060652182,
      live: "https://goo.gl/maps/nXXdHiFhNtEbtdR78",
    },
    {
      nombre: "Museo del Caribe",
      direccion: "Calle 36 # 46 - 66",
      latitud: 10.986270502668857,
      longitud: -74.77856479861191,
      live: "https://goo.gl/maps/gtDREBeKHD9smx8f7",
    },
    {
      nombre: "Catedral Metropolitana de Barranquilla",
      direccion: "Cra. 45 # 53 - 140",
      latitud: 10.988221919524074,
      longitud: -74.79049471057381,
      live: "https://goo.gl/maps/2Mm8fB7EDjnZL45x5",
    },
    {
      nombre: "Centro de Convenciones Puerta de Oro",
      direccion: "Via 40 # 79B - 06",
      latitud: 11.021585959811365,
      longitud: -74.79971341879926,
      live: "https://goo.gl/maps/er1voUUuVVz4xF686",
    },
    {
      nombre: "Centro Comercial Buenavista",
      direccion: "Cl. 98 # 52 - 115",
      latitud: 11.013139668933952,
      longitud: -74.82767099456795,
      live: "https://goo.gl/maps/TgihKjU1vp5P3nMW9",
    },
    {
      nombre: "Malecón Turístico Rio Magdalena ",
      direccion: "Av. del Rio",
      latitud: 10.99707652374411,
      longitud: -74.77048328218513,
      live: "https://goo.gl/maps/faxS4HRKiEBF34bq5",
    },
    {
      nombre: "Museo del Carnaval",
      direccion: "Carrera 54 # 49B - 03",
      latitud: 10.993046793422442,
      longitud: -74.78761138894464,
      live: "https://goo.gl/maps/AcyYPZBk9FfMKDU56",
    },
    {
      nombre: "Casa del Carnaval",
      direccion: "Cra. 54 # 49B - 39",
      latitud: 10.992988960697799,
      longitud: -74.78782110927281,
      live: "https://goo.gl/maps/aqTJPUJqjwJQWNWN8",
    },
    {
      nombre: "Monumento Ventana al Mundo",
      direccion: "Rotonda, Cl. 110",
      latitud: 11.03311864101431,
      longitud: -74.83140692119329,
      live: "https://goo.gl/maps/VCtLc5X9uTJmGkdR7",
    },
    {
      nombre: "Monumento Aleta del Tiburón",
      direccion: "Rotonda Av del Río, cerca Puente Batiente",
      latitud: 10.998226552807623,
      longitud: -74.77271119210127,
      live: "https://goo.gl/maps/Y5UGUXTasQMKEuvX8",
    },
    {
      nombre: "Bocas de Ceniza",
      direccion: "Destapada Bocas De Ceniza",
      latitud: 11.106334386939494,
      longitud: -74.85471714179081,
      live: "https://goo.gl/maps/qoa3LMRZGhaaGeRh9",
    },
    {
      nombre: "Centro Comercial Villa Country",
      direccion: "Cl. 78 # 53 - 70",
      latitud: 11.00439507069124,
      longitud: -74.80668768078363,
      live: "https://goo.gl/maps/VUeUYPU3LZVk5xY3A",
    },
    {
      nombre: "Plaza de la Intendencia Fluvial",
      direccion: "Vía 40 # 36 - 135",
      latitud: 10.98566552233177,
      longitud: -74.7758701460156,
      live: "https://goo.gl/maps/e824dGSxvr9n4hWeA",
    },
    {
      nombre: "Plaza de la Paz",
      direccion: "Cl. 53  # 46 - 07",
      latitud: 10.987962164372274,
      longitud: -74.78883086749592,
      live: "https://goo.gl/maps/9ZGUVNYctGkqXxR9A",
    },
    {
      nombre: "Centro Comercial Portal del Prado",
      direccion: "Cl. 53 # 46 - 192",
      latitud: 10.989667300547147,
      longitud: -74.78859347375383,
      live: "https://goo.gl/maps/g6F7xupaagnE9aE36",
    },
    {
      nombre: "Centro Comercial Único Outlet",
      direccion: "Cl. 74 # 38D - 113",
      latitud: 10.988829272949914,
      longitud: -74.8123921043121,
      live: "https://goo.gl/maps/91VWb8wX3DJS3HKC8",
    },
    {
      nombre: "Hotel El Prado",
      direccion: "Cra. 54 #70 - 10",
      latitud: 10.998769090921023,
      longitud: -74.80015276537327,
      live: "https://goo.gl/maps/28Mhf2xtohTvUXfk8",
    },
    {
      nombre: "Edificio de la Aduana",
      direccion: "Vía 40 # 36 - 135",
      latitud: 10.988374713104957,
      longitud: -74.77899332956622,
      live: "https://goo.gl/maps/EFceQJYzUjwUurV96",
    },
    {
      nombre: "Paseo Bolívar",
      direccion: "Cra. 44 #34 - blvr",
      latitud: 10.982941967347772,
      longitud: -74.77763774816904,
      live: "https://goo.gl/maps/7btxM6SnfnDSLAZH7",
    },
    {
      nombre: "Galería Artesanal y Comercial 72",
      direccion: "Calle 72 # 44 - 101",
      latitud: 10.995258861935909,
      longitud: -74.80701226597715,
      live: "https://goo.gl/maps/d6uY38panNB3VAac7",
    },
    {
      nombre: "Estadio Metropolitano Roberto Meléndez",
      direccion: "Carrera 46 # 1 Sur-445",
      latitud: 10.926977515401195,
      longitud: -74.80054385682416,
      live: "https://goo.gl/maps/5URpjVMGMQAHTVap7",
    },
    {
      nombre: "Parroquia de San Nicolás de Tolentino",
      direccion: "Cra 42 # 33 - 45",
      latitud: 10.980135775992471,
      longitud: -74.77785730080089,
      live: "https://goo.gl/maps/m4BLKZk19PZET5iAA",
    },
    {
      nombre: "Iglesia de San Roque",
      direccion: "Calle 30 # 36 - 41",
      latitud: 10.975810648999564,
      longitud: -74.77783663643972,
      live: "https://goo.gl/maps/PsBhAyuodTE1zESSA",
    },
    {
      nombre: "Parque Paseo de la Castellana",
      direccion: "Carrera 53# 99",
      latitud: 11.019094595040949,
      longitud: -74.82459101494689,
      live: "https://goo.gl/maps/UUBRL77NXoXPDryP6",
    },
    {
      nombre: "Parroquia las Tres Aves Marías",
      direccion: "Cra. 70 # 81B -29",
      latitud: 11.015544519851687,
      longitud: -74.80822682783003,
      live: "https://goo.gl/maps/h14WQLgQfqDWJ3h27",
    },
    {
      nombre: "Parque Sagrado Corazón",
      direccion: "Cra. 42F # 80 - 117",
      latitud: 10.99380586696878,
      longitud: -74.81816919331396,
      live: "https://goo.gl/maps/kgA4JurnbWyurqLx5",
    },
    {
      nombre: "Centro Comercial Miramar",
      direccion: "Cra. 43 # 99 - 50",
      latitud: 11.00334929377012,
      longitud: -74.83525193507921,
      live: "https://goo.gl/maps/A44SNPQ3n8F3Wwyz8",
    },
    {
      nombre: "Biblioteca Piloto del Caribe",
      direccion: "Via 40 # 36-135",
      latitud: 10.988746239673723,
      longitud: -74.77865897597617,
      live: "https://goo.gl/maps/5pzwHFFm9Db6TyV1A",
    },
  ];

  const position1 = [10.98982992742527, -74.80986988979193];

  // Create the Icon
  const LeafIcon = L.Icon.extend({
    options: {},
  });

  const greenIcon = new LeafIcon({
    iconUrl:
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF",
  });

  const [icon] = useState(greenIcon);
  return (
    <div>
      <NavbarComponent color={"dark"} />
      <div className="align-items-center">
        <MapContainer
          className="main"
          center={position1}
          zoom={amplio}
          scrollWheelZoom={true}
        >
          <ChangeView center={position1} zoom={amplio} />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">Quilla-Tour</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
          {position.map((dataPosition, i) => (
            <Marker
              key={i}
              icon={icon}
              position={[dataPosition.latitud, dataPosition.longitud]}
            >
              <Popup>
                {dataPosition.nombre}. <br /> {dataPosition.direccion}
                <br />{" "}
                <a
                  href={dataPosition.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en vivo
                </a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default Explora;
