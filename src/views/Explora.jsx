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
import "../assets/css/searchbar.css";
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
            bounded: 0,
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
    });
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
      category: "recreativo",
    },
    {
      nombre: "Parroquia Inmaculada Concepción",
      direccion: "Cra. 57 # 68 - 85",
      latitud: 10.998840253903447,
      longitud: -74.79810435424716,
      live: "https://goo.gl/maps/EFsNBx4pbXVm9NyWA",
      category: "iglesia",
    },
    {
      nombre: "Museo Mapuka",
      direccion: "Km 5 Vía Puerto Colombia - Bloque K Uninorte",
      latitud: 11.020223941287098,
      longitud: -74.85118295548727,
      live: "https://goo.gl/maps/S4cciJfmBYTVgMP96",
      category: "cultural",
    },
    {
      nombre: "Viva Centro Comercial",
      direccion: "Cra 51B # 87 - 50",
      latitud: 11.008288375744955,
      longitud: -74.82182617389006,
      live: "https://goo.gl/maps/jUz2DNS58WMUEqx37",
      category: "centro-comercial",
    },
    {
      nombre: "Castillo de Salgar",
      direccion: "Calle 9 # 13 - 16, Salgar, Puerto Colombia",
      latitud: 11.018237783240014,
      longitud: -74.94162060652182,
      live: "https://goo.gl/maps/nXXdHiFhNtEbtdR78",
      category: "cultural",
    },
    {
      nombre: "Museo del Caribe",
      direccion: "Calle 36 # 46 - 66",
      latitud: 10.986270502668857,
      longitud: -74.77856479861191,
      live: "https://goo.gl/maps/gtDREBeKHD9smx8f7",
      category: "cultural",
    },
    {
      nombre: "Catedral Metropolitana de Barranquilla",
      direccion: "Cra. 45 # 53 - 140",
      latitud: 10.988221919524074,
      longitud: -74.79049471057381,
      live: "https://goo.gl/maps/2Mm8fB7EDjnZL45x5",
      category: "iglesia",
    },
    {
      nombre: "Centro de Convenciones Puerta de Oro",
      direccion: "Via 40 # 79B - 06",
      latitud: 11.021585959811365,
      longitud: -74.79971341879926,
      live: "https://goo.gl/maps/er1voUUuVVz4xF686",
      category: "recreativo",
    },
    {
      nombre: "Centro Comercial Buenavista",
      direccion: "Cl. 98 # 52 - 115",
      latitud: 11.013139668933952,
      longitud: -74.82767099456795,
      live: "https://goo.gl/maps/TgihKjU1vp5P3nMW9",
      category: "centro-comercial",
    },
    {
      nombre: "Malecón Turístico Rio Magdalena ",
      direccion: "Av. del Rio",
      latitud: 10.99707652374411,
      longitud: -74.77048328218513,
      live: "https://goo.gl/maps/faxS4HRKiEBF34bq5",
      category: "recreativo",
    },
    {
      nombre: "Museo del Carnaval",
      direccion: "Carrera 54 # 49B - 03",
      latitud: 10.993046793422442,
      longitud: -74.78761138894464,
      live: "https://goo.gl/maps/AcyYPZBk9FfMKDU56",
      category: "cultural",
    },
    {
      nombre: "Casa del Carnaval",
      direccion: "Cra. 54 # 49B - 39",
      latitud: 10.992988960697799,
      longitud: -74.78782110927281,
      live: "https://goo.gl/maps/aqTJPUJqjwJQWNWN8",
      category: "cultural",
    },
    {
      nombre: "Monumento Ventana al Mundo",
      direccion: "Rotonda, Cl. 110",
      latitud: 11.03311864101431,
      longitud: -74.83140692119329,
      live: "https://goo.gl/maps/VCtLc5X9uTJmGkdR7",
      category: "recreativo",
    },
    {
      nombre: "Monumento Aleta del Tiburón",
      direccion: "Rotonda Av del Río, cerca Puente Batiente",
      latitud: 10.998226552807623,
      longitud: -74.77271119210127,
      live: "https://goo.gl/maps/Y5UGUXTasQMKEuvX8",
      category: "recreativo",
    },
    {
      nombre: "Bocas de Ceniza",
      direccion: "Destapada Bocas De Ceniza",
      latitud: 11.106334386939494,
      longitud: -74.85471714179081,
      live: "https://goo.gl/maps/qoa3LMRZGhaaGeRh9",
      category: "recreativo",
    },
    {
      nombre: "Centro Comercial Villa Country",
      direccion: "Cl. 78 # 53 - 70",
      latitud: 11.00439507069124,
      longitud: -74.80668768078363,
      live: "https://goo.gl/maps/VUeUYPU3LZVk5xY3A",
      category: "centro-comercial",
    },
    {
      nombre: "Plaza de la Intendencia Fluvial",
      direccion: "Vía 40 # 36 - 135",
      latitud: 10.98566552233177,
      longitud: -74.7758701460156,
      live: "https://goo.gl/maps/e824dGSxvr9n4hWeA",
      category: "cultural",
    },
    {
      nombre: "Plaza de la Paz",
      direccion: "Cl. 53  # 46 - 07",
      latitud: 10.987962164372274,
      longitud: -74.78883086749592,
      live: "https://goo.gl/maps/9ZGUVNYctGkqXxR9A",
      category: "recreativo",
    },
    {
      nombre: "Centro Comercial Portal del Prado",
      direccion: "Cl. 53 # 46 - 192",
      latitud: 10.989667300547147,
      longitud: -74.78859347375383,
      live: "https://goo.gl/maps/g6F7xupaagnE9aE36",
      category: "centro-comercial",
    },
    {
      nombre: "Centro Comercial Único Outlet",
      direccion: "Cl. 74 # 38D - 113",
      latitud: 10.988829272949914,
      longitud: -74.8123921043121,
      live: "https://goo.gl/maps/91VWb8wX3DJS3HKC8",
      category: "centro-comercial",
    },
    {
      nombre: "Hotel El Prado",
      direccion: "Cra. 54 #70 - 10",
      latitud: 10.998769090921023,
      longitud: -74.80015276537327,
      live: "https://goo.gl/maps/28Mhf2xtohTvUXfk8",
      category: "hotel",
    },
    {
      nombre: "Holiday Inn Express Barranquilla Buenavista",
      direccion: "Carrera 53 # 106 - 280 Manzana 22",
      latitud: 11.019346933975553,
      longitud: -74.8362345738503,
      live: "https://goo.gl/maps/DJG9jc8vcLE7ygVj6",
      category: "hotel",
    },
    {
      nombre: "GHL Collection Hotel",
      direccion: "Cl. 107 # 50-69",
      latitud: 11.014012502602283,
      longitud: -74.83682497997474,
      live: "https://goo.gl/maps/W7KYajHEKiiJyhd66",
      category: "hotel",
    },
    {
      nombre: "GHL Hotel Barranquilla",
      direccion: "Cl. 106 # 50 - 11,",
      latitud: 11.013443639687472,
      longitud: -74.83682324465046,
      live: "https://goo.gl/maps/u5geJB2uAhd2jJkZ8",
      category: "hotel",
    },
    {
      nombre: "Ribai Hotels",
      direccion: "Carrera 41 # 40 - 02,",
      latitud: 10.980708034611348,
      longitud: -74.7823222149551,
      live: "https://goo.gl/maps/3xS62wG9smRa1EGW6",
      category: "hotel",
    },
    {
      nombre: "Hotel Ibis Barranquilla",
      direccion: "Cl. 86  # 50 - 66",
      latitud: 11.00597169217367,
      longitud: -74.82059737385042,
      live: "https://goo.gl/maps/Zav4v53uUA5ZNpsG8",
      category: "hotel",
    },
    {
      nombre: "Ibis Budget",
      direccion: "Cra. 50 # 84 - 82",
      latitud: 11.004506055287209,
      longitud: -74.81855737446281,
      live: "https://goo.gl/maps/cTM33HKt2E4Zw8po8",
      category: "hotel",
    },
    {
      nombre: "Hampton by Hilton",
      direccion: "Cl. 85 # 50 - 25",
      latitud: 11.005455242873424,
      longitud: -74.81976857084895,
      live: "https://goo.gl/maps/RaMLmbJpFsjZyzih6",
      category: "hotel",
    },
    {
      nombre: "Wyndham Garden",
      direccion: "Cl. 87 # 47 - 88",
      latitud: 11.003839517098706,
      longitud: -74.82223750244046,
      live: "https://goo.gl/maps/9EAfVTmAzvPUoXFh9",
      category: "hotel",
    },
    {
      nombre: "Hotel Dann Carlton",
      direccion: "Cl. 98 # 52B - 10",
      latitud: 11.01293133396361,
      longitud: -74.82698066219514,
      live: "https://goo.gl/maps/kCM5bw11x17s63G18",
      category: "hotel",
    },
    {
      nombre: "Edificio de la Aduana",
      direccion: "Vía 40 # 36 - 135",
      latitud: 10.988374713104957,
      longitud: -74.77899332956622,
      live: "https://goo.gl/maps/EFceQJYzUjwUurV96",
      category: "cultural",
    },
    {
      nombre: "Paseo Bolívar",
      direccion: "Cra. 44 #34 - blvr",
      latitud: 10.982941967347772,
      longitud: -74.77763774816904,
      live: "https://goo.gl/maps/7btxM6SnfnDSLAZH7",
      category: "cultural",
    },
    {
      nombre: "Galería Artesanal y Comercial 72",
      direccion: "Calle 72 # 44 - 101",
      latitud: 10.995258861935909,
      longitud: -74.80701226597715,
      live: "https://goo.gl/maps/d6uY38panNB3VAac7",
      category: "cultural",
    },
    {
      nombre: "Estadio Metropolitano Roberto Meléndez",
      direccion: "Carrera 46 # 1 Sur-445",
      latitud: 10.926977515401195,
      longitud: -74.80054385682416,
      live: "https://goo.gl/maps/5URpjVMGMQAHTVap7",
      category: "recreativo",
    },
    {
      nombre: "Parroquia de San Nicolás de Tolentino",
      direccion: "Cra 42 # 33 - 45",
      latitud: 10.980135775992471,
      longitud: -74.77785730080089,
      live: "https://goo.gl/maps/m4BLKZk19PZET5iAA",
      category: "iglesia",
    },
    {
      nombre: "Iglesia de San Roque",
      direccion: "Calle 30 # 36 - 41",
      latitud: 10.975810648999564,
      longitud: -74.77783663643972,
      live: "https://goo.gl/maps/PsBhAyuodTE1zESSA",
      category: "iglesia",
    },
    {
      nombre: "Parque Paseo de la Castellana",
      direccion: "Carrera 53# 99",
      latitud: 11.019094595040949,
      longitud: -74.82459101494689,
      live: "https://goo.gl/maps/UUBRL77NXoXPDryP6",
      category: "recreativo",
    },
    {
      nombre: "Parroquia las Tres Aves Marías",
      direccion: "Cra. 70 # 81B -29",
      latitud: 11.015544519851687,
      longitud: -74.80822682783003,
      live: "https://goo.gl/maps/h14WQLgQfqDWJ3h27",
      category: "iglesia",
    },
    {
      nombre: "Parque Sagrado Corazón",
      direccion: "Cra. 42F # 80 - 117",
      latitud: 10.99380586696878,
      longitud: -74.81816919331396,
      live: "https://goo.gl/maps/kgA4JurnbWyurqLx5",
      category: "recreativo",
    },
    {
      nombre: "Centro Comercial Miramar",
      direccion: "Cra. 43 # 99 - 50",
      latitud: 11.00334929377012,
      longitud: -74.83525193507921,
      live: "https://goo.gl/maps/A44SNPQ3n8F3Wwyz8",
      category: "centro-comercial",
    },
    {
      nombre: "Biblioteca Piloto del Caribe",
      direccion: "Via 40 # 36-135",
      latitud: 10.988746239673723,
      longitud: -74.77865897597617,
      live: "https://goo.gl/maps/5pzwHFFm9Db6TyV1A",
      category: "cultural",
    },
  ];

  const position1 = [10.98982992742527, -74.80986988979193];

  // Create the Icon
  const LeafIcon = L.Icon.extend({
    options: {},
  });

  const blueIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|0275d8&chf=a,s,ee00FFFF",
    }),
    greenIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|5cb85c&chf=a,s,ee00FFFF",
    }),
    yellowIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|f0ad4e&chf=a,s,ee00FFFF",
    }),
    redIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|d9534f&chf=a,s,ee00FFFF",
    }),
    infoIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|5bc0de&chf=a,s,ee00FFFF",
    }),
    fadedIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|f7f7f7&chf=a,s,ee00FFFF",
    });

  const pin = (dataPosition) => {
    if (dataPosition.category === "recreativo") {
      return blueIcon;
    } else if (dataPosition.category === "iglesia") {
      return fadedIcon;
    } else if (dataPosition.category === "cultural") {
      return yellowIcon;
    } else if (dataPosition.category === "centro-comercial") {
      return redIcon;
    } else if (dataPosition.category === "hotel") {
      return infoIcon;
    } else {
      return greenIcon;
    }
  };

  const [icon] = useState(
    greenIcon,
    blueIcon,
    yellowIcon,
    redIcon,
    infoIcon,
    fadedIcon
  );

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
              icon={pin(dataPosition)}
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
