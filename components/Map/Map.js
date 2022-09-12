/** @format */

import React from "react";
import { GetServerSideProps } from "next";
import L from "leaflet";
import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});
// import { icon } from "leaflet"
/*
const ICON = icon({
  iconUrl: "/marker.png",
  iconSize: [32, 32],
})
*/
function Map({ data }) {
  return (
    <MapContainer center={[9.145, 40.4897]} zoom={2} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((item) => (
        <Marker
          key={item}
          position={[item.countryInfo.lat, item.countryInfo.long]}
        >
          <Popup>
            <b>{item.country} </b>
            <br />
            Total Cases: {item.cases}
            <br />
            Active : {item.active}
            <br />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
