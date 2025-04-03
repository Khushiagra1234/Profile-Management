import React, { useState } from "react";
import Map from "../components/Map";

const ProfilePage = ({ profile }) => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div>
      <h1>{profile.name}</h1>
      <img src={profile.image} alt={profile.name} width="100" />
      <p>{profile.description}</p>
      <button onClick={() => setShowMap(!showMap)}>View on Map</button>

      {showMap && (
        <Map latitude={profile.latitude} longitude={profile.longitude} />
      )}
    </div>
  );
};

export default ProfilePage;
