
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Default marker fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png"
});

const MapView = ({ data }) => {
  const geoTagged = data.filter(d => d.lat && d.lng);

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-2">Live Geo-IP Threat Map</h2>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={true}
        style={{ height: "400px", width: "100%", borderRadius: "10px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {geoTagged.map((threat, idx) => (
          <Marker key={idx} position={[threat.lat, threat.lng]}>
            <Popup>
              <strong>{threat.threat}</strong><br />
              {threat.severity} — {threat.origin_ip}<br />
              {threat.location}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
