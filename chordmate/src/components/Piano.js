import React from "react";
import "./Piano.css";

function Piano({ notes }) {
  // Define white keys and their corresponding black keys
  const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];
  const blackKeys = {
    "C": "C#", // Black key after C
    "D": "D#", // Black key after D
    "F": "F#", // Black key after F
    "G": "G#", // Black key after G
    "A": "A#"  // Black key after A
  };

  // Mapping for flat notes to their sharp equivalents
  const flatToSharp = {
    "Db": "C#",
    "Eb": "D#",
    "Gb": "F#",
    "Ab": "G#",
    "Bb": "A#"
  };

  // Convert flat notes to their sharp equivalents
  const convertedNotes = notes.map(note => flatToSharp[note] || note);

  return (
    <div className="piano">
      {whiteKeys.map((key) => (
        <div
          key={key}
          className={`key white ${convertedNotes.includes(key) ? "active" : ""}`}
        >
          {convertedNotes.includes(key) && <span className="key-label">{key}</span>}
          {blackKeys[key] && (
            <div
              className={`key black ${convertedNotes.includes(blackKeys[key]) ? "active" : ""}`}
            >
              {convertedNotes.includes(blackKeys[key]) && (
                <span className="key-label">{blackKeys[key]}</span>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Piano;
