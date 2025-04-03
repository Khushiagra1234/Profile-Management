import React, { useContext, useState } from "react";
import { ProfileContext } from "../context/ProfileContext";
import ProfileCard from "../components/ProfileCard";
import MapComponent from "../components/Map";
import "../App.css";

const HomePage = () => {
  const { profiles, loading } = useContext(ProfileContext);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) return <h2>Loading Profiles...</h2>;

  // Filter profiles based on search query
  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Profile Management System</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search profiles..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      {/* Profile List */}
      <div className="profile-container">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onSelect={() => setSelectedProfile(profile)}
            />
          ))
        ) : (
          <p>No profiles found.</p>
        )}
      </div>

      {/* Interactive Map */}
      {selectedProfile && <MapComponent profile={selectedProfile} />}
    </div>
  );
};

export default HomePage;
