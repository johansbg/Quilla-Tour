import React from "react";
//Librerias
import { useState } from "react";
import {MapContainer, TileLayer,  Marker, Popup, useMapEvents, useMap} from "react-leaflet";
import * as L from "leaflet";
//Components
import CartaSite from "./CartaSite";

function Mapa(props) {

    const [amplio, setAmplio] = useState(13);
    
    function ChangeView({ center, zoom }) {
        const map = useMap();
        map.setView(center, zoom);
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
            id: 0,
            title: "Casa clasica(Historica)",
            Subtitle: "Barrio el Prado",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem",
            img: "img/barrio-el-prado/barrio-el-prado-casa.jpg",
            lt:"10.999488001727359", 
            long:"-74.80220670456369"
        },
        {
            id: 1,
            title: "Jardines del Recuerdo",
            Subtitle: "Barrio el Prado",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem",
            img: "img/barrio-el-prado/barrio-el-prado-Jardines-del-Recuerdo.jpg",
            lt:"11.003995549929238", 
            long:"-74.80731363032383"
        },
        {
            id: 2,
            title: "Casa Neoclasica",
            Subtitle: "Barrio el Prado",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem",
            img: "img/barrio-el-prado/barrio-el-prado-neoclasico.jpg",
            lt:"10.993674426573692",
            long:"-74.79297990592143"
        },
        {
            id: 3,
            title: "Casa Neoclasica 2",
            Subtitle: "Barrio el Prado",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem",
            img: "img/barrio-el-prado/barrio-el-prado-neoclasica-2.jpg",
            lt:"11.00376385520722",
            long:"-74.79954595332732"
        },
        {
            id: 4,
            title: "Muelle",
            Subtitle: "Bocas de ceniza",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem",
            img: "img/bocas-de-ceniza/bocas-de-ceniza-muelle.jpg",
            lt:"11.046147027586585",
            long:"-74.82957301334582"
        },
        {
            id: 5,
            title: "Pescador",
            Subtitle: "Bocas de ceniza",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem",
            img: "img/bocas-de-ceniza/bocas-de-ceniza-pescador.jpg",
            lt:"11.047399267699559",
            long:"-74.83079466917998"
        },
        {
            id: 6,
            title: "Espolones",
            Subtitle: "Bocas de ceniza",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem",
            img: "img/bocas-de-ceniza/bocas-de-ceniza-piedras.jpg",
            lt:"11.047774938711722",
            long:"-74.83108812178233"
        },
        {
            id: 7,
            title: "Lancha de pescar",
            Subtitle: "Bocas de ceniza",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem",
            img: "img/bocas-de-ceniza/bocas-de-ceniza-lancha.jpg",
            lt:"11.050122545525214",
            long:"-74.83333711383865"
        },
        {
            id: 8,
            title: "Catedral Maria Reina",
            Subtitle: "Catedral de Barranquilla",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem",
            img: "img/catedral/catedral-metropolitana-maria-reina.jpg",
            lt:"10.988413952835979",
            long:"-74.79047727515557"
        },
        {
            id: 9,
            title: "Buques",
            Subtitle: "Puerto Velero",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem",
            img: "img/puerto-velero/puerto-velero-buque.jpg",
            lt:"10.95220946013031",
            long:"-75.02957574632032"
        },
        {
            id: 10,
            title: "Deportes Acuaticos",
            Subtitle: "Puerto Velero",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem",
            img: "img/puerto-velero/puerto-velero-deporte.jpg",
            lt:"10.948838746252658",
            long:"-75.02707592755539"
        },
        {
            id: 11,
            title: "Hospedajes / Hoteles",
            Subtitle: "Puerto Velero",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem",
            img: "img/puerto-velero/puerto-velero-hospedaje.jpg",
            lt:"10.952693997090336",
            long:"-75.02730123316663"
        },
        {
            id: 12,
            title: "Vistas Turisticas",
            Subtitle: "Puerto Velero",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem",
            img: "img/puerto-velero/puerto-velero-vista.jpg",
            lt:"10.951461586270632",
            long:"-75.03450028181173"
        },
        {
            id: 13,
            title: "Monos",
            Subtitle: "Zoologico de Barranquilla",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem",
            img: "img/zoologico/zoologico-mono.jpg",
            lt:"11.01125484504741",
            long:"-74.79860746296457"
        },
        {
            id: 14,
            title: "Rinocerontes",
            Subtitle: "Zoologico de Barranquilla",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem",
            img: "img/zoologico/zoologico-rino.jpg",
            lt:"11.010528183444563",
            long:"-74.79764186775782"
        },
        {
            id: 15,
            title: "Tigre de Bengala",
            Subtitle: "Zoologico de Barranquilla",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem",
            img: "img/zoologico/zoologico-tigre.jpg",
            lt:"11.010801998172115",
            long:"-74.79831778440254"
        },
        {
            id: 16,
            title: "Tigre Blanco",
            Subtitle: "Zoologico de Barranquilla",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem",
            img: "img/zoologico/zoologico-tigre-2.jpg",
            lt:"11.011412814723801",
            long:"-74.79816758070372"
        },
    ];

    const position1 = [10.98982992742527, -74.80986988979193];

    // Create the Icon
    const LeafIcon = L.Icon.extend({
        options: {},
    });

    
    const greenIcon = new LeafIcon({
        iconUrl:
        "http://maps.google.com/mapfiles/kml/shapes/dining.png",
    });

    const [icon] = useState(greenIcon);

  return (
    <div className="mapaTop">
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
              {position.filter(dataPosition => dataPosition.title.toLocaleLowerCase().includes(props.textoBusqueda.toLocaleLowerCase()) ).map((dataPosition, i) => (
                <Marker 
                 ey={i}  
                 icon={icon} 
                 position={[dataPosition.lt, dataPosition.long]} 
                >
                    <Popup>
                        <CartaSite data={dataPosition} urlImg={require('../../assets/'+dataPosition.img)}/>
                    </Popup>
                </Marker>
              ))}
            </MapContainer>
        </div>
    </div>
  );
}

export default Mapa;
