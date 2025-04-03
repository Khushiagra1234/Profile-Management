import React, { createContext, useState, useEffect } from "react";

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        // Fetch profiles from backend
        fetch("http://localhost:5000/api/profiles")
            .then((response) => response.json())
            .then((data) => setProfiles(data))
            .catch((error) => console.error("Error fetching profiles:", error));
    }, []);

    return (
        <ProfileContext.Provider value={{ profiles, setProfiles }}>
            {children}
        </ProfileContext.Provider>
    );
};

export default ProfileProvider;
