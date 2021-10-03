import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MapImgIcon from '../images/MapIcon.svg';
import React from 'react';

import L from 'leaflet';

const iconStyle = L.icon({
  iconUrl: MapImgIcon,
  iconSize: [50, 50],
});

function Map({ lat, lng }) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={iconStyle}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
