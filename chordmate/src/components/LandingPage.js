import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <h1>Welcome to ChordMate</h1>
      <p>Choose your instrument to explore chords:</p>
      <div className="button-container">
        <Link to="/piano">
          <button className="landing-button">Piano Version</button>
        </Link>
        <Link to="/guitar">
          <button className="landing-button">Guitar Version</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
