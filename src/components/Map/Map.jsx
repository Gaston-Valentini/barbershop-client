// Mapa.js
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useState } from "react";

export default function Map() {
    const [map, setMap] = useState(null);

    const mapContainerStyle = {
        width: "100%",
        height: "100%",
    };

    const center = {
        lat: -34.603722,
        lng: -58.381592,
    };

    const onLoad = (map) => {
        setMap(map);
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyAmqns69u9M576urM4bj05Pfj-eK-8txU0" loadingElement={<div>Loading...</div>}>
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13} onLoad={onLoad}>
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
}
