import React from "react";
import "./Piano.css"; // Add styles for better visualization

function Piano({ notes }) {
  const allKeys = [
    "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C5"
  ];

  return (
    <div className="piano">
      {allKeys.map((key) => (
        <div
          key={key}
          className={`key ${key.includes("#") ? "black" : "white"} ${
            notes.includes(key) ? "active" : ""
          }`}
        >
          {key}
        </div>
      ))}
    </div>
  );
}

export default Piano;
