import React, { useState, useEffect } from "react";
import SeasonDisplay from "./SeasonDisplay";

const Location = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude),
      (err) => setErrorMessage(err.message)
    );
  }, []);

  if (errorMessage && !lat) {
    return <div>Error: {errorMessage}</div>;
  }

  if (!errorMessage && lat) {
    return <SeasonDisplay lat={lat} />;
  }

  return <div>Loading!</div>;
};

export default Location;
