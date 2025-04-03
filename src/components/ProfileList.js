import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/profiles")
      .then((res) => res.json())
      .then((data) => setProfiles(data))
      .catch((err) => console.error("Error fetching profiles:", err));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {profiles.map((profile) => (
        <ProfileCard key={profile._id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;
