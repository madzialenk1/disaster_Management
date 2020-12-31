import React from "react";
import { useGoogleMaps } from "react-hook-google-maps";

const uluru = { lat: 52.237049, lng: 21.017532 };
const coo = { lat: 51.759445, lng: 19.457216};

export const MapWithMarker = React.memo(function Map() {
  const { ref, map, google } = useGoogleMaps(
    "AIzaSyBL6xBj2jWN1nquJ7qlIkyZBLKFbTrXQEw",
    {
      zoom: 4,
      center: uluru,
    },
  );

  if (map) {

    new google.maps.Marker({ position: uluru, map });
    new google.maps.Marker({position:coo,map});
  }

  return (
    <div>
      <div ref={ref} style={{ width: 400, height: 300 }} />
    </div>
  );
});