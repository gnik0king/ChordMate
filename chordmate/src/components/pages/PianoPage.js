import React from "react";
import "./styles/PianoPage.css";

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

  // Reverse mapping to recover the original note
  const sharpToFlat = Object.fromEntries(
    Object.entries(flatToSharp).map(([flat, sharp]) => [sharp, flat])
  );

  // Convert flat notes to sharps for matching and keep the original key
  const convertedNotes = notes.map(note => ({
    original: note, // Store the original note (e.g., Db)
    sharp: flatToSharp[note] || note // Convert to sharp if needed
  }));

  // Check if a key is active based on the sharp conversion
  const isActive = (key) =>
    convertedNotes.some(note => note.sharp === key);

  // Get the original note for a given key
  const getOriginalNote = (key) => {
    const match = convertedNotes.find(note => note.sharp === key);
    return match ? match.original : null;
  };

  return (
    <div className="piano">
      {whiteKeys.map((key) => (
        <div
          key={key}
          className={`key white ${isActive(key) ? "active" : ""}`}
        >
          {isActive(key) && <span className="key-label">{getOriginalNote(key)}</span>}
          {blackKeys[key] && (
            <div
              className={`key black ${isActive(blackKeys[key]) ? "active" : ""}`}
            >
              {isActive(blackKeys[key]) && (
                <span className="key-label">{getOriginalNote(blackKeys[key])}</span>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Piano;
