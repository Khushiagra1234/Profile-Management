import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ profile, onSelect }) => {
  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} className="profile-photo" />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <button onClick={onSelect}>Show on Map</button>
      <Link to={`/profile/${profile.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default ProfileCard;
