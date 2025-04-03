import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AdminPanel from "./pages/AdminPanel";
import { ProfileContext } from "./context/ProfileContext";
import "./App.css";

function App() {
  return (
    <ProfileContext>
      <Router>
        <div className="navbar">
          <h2>Profile Management</h2>
          <nav>
            <Link to="/">Profiles</Link>
            <Link to="/admin">Admin Panel</Link>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </ProfileContext>
  );
}

export default App;
