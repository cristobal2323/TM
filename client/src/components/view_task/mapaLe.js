import React from "react";

import { Map, Marker, TileLayer } from "react-leaflet";

const MapLef = (props) => {
  const position = [props.latitud, props.longitud];
  return (
    <Map center={position} zoom={13}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} />
    </Map>
  );
};

export default MapLef;
