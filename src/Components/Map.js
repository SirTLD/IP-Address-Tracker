import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React from 'react';
import { Icon } from 'leaflet';

const iconStyle = new Icon({
  iconUrl: '../images/SearchIcon.svg',
  iconSize: [25, 25],
});

function Map({ lat, lng }) {
  return (
    <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[51.505, -0.09]}> */}
      <Marker position={[lng, lat]} icon={iconStyle}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
