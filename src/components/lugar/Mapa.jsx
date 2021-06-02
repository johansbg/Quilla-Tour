import React from "react";
//Librerias
import { useState } from "react";
import {MapContainer, TileLayer,  Marker, Popup, useMapEvents, useMap} from "react-leaflet";
import * as L from "leaflet";
//Components
import CartaSite from "./cartaSite";
import {sites as position} from "../../shared/sites" ;

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


    const position1 = [10.98982992742527, -74.80986988979193];

    // Create the Icon
    const LeafIcon = L.Icon.extend({
        options: {},
    });

    
    const greenIcon = new LeafIcon({
        iconUrl:
        "http://maps.google.com/mapfiles/kml/paddle/blu-blank-lv.png",
    });

    const [icon] = useState(greenIcon);

  return (
    <div className="mapaTop">
        <div className="align-items-center">
            <MapContainer
              className="main1" 
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
                 position={[dataPosition.latitud, dataPosition.longitud]}
                >
                    <Popup className="m-0 p-0">
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
