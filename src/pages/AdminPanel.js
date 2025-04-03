import React, { useState, useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";

const AdminPanel = () => {
  const { profiles, setProfiles } = useContext(ProfileContext);
  const [newProfile, setNewProfile] = useState({ name: "", description: "", photo: "", address: "" });

  const addProfile = () => {
    setProfiles([...profiles, { ...newProfile, _id: Date.now() }]);
    setNewProfile({ name: "", description: "", photo: "", address: "" });
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <input placeholder="Name" value={newProfile.name} onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })} />
      <input placeholder="Description" value={newProfile.description} onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })} />
      <input placeholder="Photo URL" value={newProfile.photo} onChange={(e) => setNewProfile({ ...newProfile, photo: e.target.value })} />
      <input placeholder="Address" value={newProfile.address} onChange={(e) => setNewProfile({ ...newProfile, address: e.target.value })} />
      <button onClick={addProfile}>Add Profile</button>

      <h2>Existing Profiles</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile._id}>{profile.name} - {profile.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
