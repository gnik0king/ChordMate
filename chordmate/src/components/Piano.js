import React from "react";
import "./Piano.css";

function Piano({ notes }) {
  // Define piano keys from C to B
  const allKeys = [
    "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"
  ];

  // Map sharps to flats for easier detection
  const flatMapping = {
    "C#": "Db",
    "D#": "Eb",
    "F#": "Gb",
    "G#": "Ab",
    "A#": "Bb"
  };

  return (
    <div className="piano">
      {allKeys.map((key) => (
        <div
          key={key}
          className={`key ${key.includes("#") ? "black" : "white"} ${
            notes.includes(key) || notes.includes(flatMapping[key]) ? "active" : ""
          }`}
        >
          {key}
        </div>
      ))}
    </div>
  );
}

export default Piano;
