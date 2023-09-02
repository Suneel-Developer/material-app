"use client";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import Data from "./features.json";
interface CardProps {
  title: string;
  mapName: string;
  width: number;
  height: number;
}

interface MarkerInfo {
  markerOffset: number;
  name: string;
  coordinates: [number, number]; // Specify the coordinates type as a tuple
}

const Card: React.FC<CardProps> = ({ title }) => {
  const markers: MarkerInfo[] = [
    {
      markerOffset: -15,
      name: "Buenos Aires",
      coordinates: [-58.3816, -34.6037],
    },
    { markerOffset: -15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
    { markerOffset: 25, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
    { markerOffset: 25, name: "Santiago", coordinates: [-70.6693, -33.4489] },
    { markerOffset: 25, name: "Bogota", coordinates: [-74.0721, 4.711] },
    { markerOffset: 25, name: "Quito", coordinates: [-78.4678, -0.1807] },
    { markerOffset: -15, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  ];

  return (
    <div className="bg-white rounded">
      <div className="flex items-center justify-between p-4 pb-0">
        <p className="font-medium">{title}</p>
        <BsThreeDotsVertical />
      </div>
      <div className="flex justify-center">
        <ComposableMap style={{ maxHeight: "440" }}>
          <Geographies geography={Data}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          {markers.map((v,i) => (
            <Marker key={i} coordinates={v.coordinates}>
              <circle
                r={10}
                fill="#0089e9"
                stroke="#0089e975"
                strokeWidth={2}
              />
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
};

export default Card;
