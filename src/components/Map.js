import React, { useEffect } from "react";

const Map = ({ latitude, longitude }) => {
  useEffect(() => {
    if (!window.google) {
      console.error("Google Maps API is not loaded!");
      return;
    }

    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: latitude, lng: longitude },
      zoom: 12,
    });

    new window.google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
    });
  }, [latitude, longitude]);

  return <div id="map" style={{ height: "400px", width: "100%" }} />;
};

export default Map;
