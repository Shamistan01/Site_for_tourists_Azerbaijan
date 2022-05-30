import React from "react";
import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { statesData } from "./data";
import "./Map.css";
import L from "leaflet";

const markerIcon = L.icon({
  iconUrl: require("../../assets/Icons/icon2.png"),
  iconSize: [35, 40],
});

const center = [40.367421050763554, 48.15512358371176];

function Map() {
  return (
    <MapContainer
      center={center}
      zoom={8}
      style={{
        width: "100vw",
        height: "80vh",
        margin: "0 auto",
        // zIndex: "-1",
      }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=dZOt5h8VzjgQ9hrjLbT7"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      <Marker
        position={[39.27187552341733, 45.40949814987457]}
        icon={markerIcon}
      >
        <Popup>
          <a href="https://en.wikipedia.org/wiki/Nakhchivan_Autonomous_Republic">
            Nakhchivan Autonomous Republic
          </a>
        </Popup>
      </Marker>

      <Marker
        position={[41.37480125307747, 48.539552838440464]}
        icon={markerIcon}
      >
        <Popup>
          <a href="https://en.wikipedia.org/wiki/Quba">Quba</a>
        </Popup>
      </Marker>

      <Marker
        position={[40.411089277947596, 49.876886131147195]}
        icon={markerIcon}
      >
        <Popup>
          <a href="https://en.wikipedia.org/wiki/Baku">Baku</a>
        </Popup>
      </Marker>

      <Marker
        position={[39.75329240226435, 46.74566736831197]}
        icon={markerIcon}
      >
        <Popup>
          <a href="https://en.wikipedia.org/wiki/Shusha">Shusha</a>
        </Popup>
      </Marker>
      {statesData.features.map((state) => {
        const coordinates = state.geometry.coordinates[0].map((item) => [
          item[1],
          item[0],
        ]);

        return (
          <Polygon
            pathOptions={{
              fillColor: "orange",
              fillOpacity: 1,
              weight: 2,
              opacity: 1,
              dashArray: 3,
              color: "white",
            }}
            positions={coordinates}
            eventHandlers={{
              mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillColor: "green",
                  fillOpacity: 1,
                  weight: 2,
                  opacity: 1,
                  color: "white",
                });
              },
              mouseout: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillOpacity: 1,
                  weight: 2,
                  dashArray: "3",
                  color: "white",
                  fillColor: "orange",
                });
              },
              click: (e) => {},
            }}
          />
        );
      })}
    </MapContainer>
  );
}
export default Map;