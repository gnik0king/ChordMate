import React, { useState } from "react";
import * as Tone from "tone";
import Dropdown from "./components/Dropdown";
import Piano from "./components/pages/PianoPage";
import PlayButton from "./components/PlayButton";
import chords from "./data/chords.json";
import './index.css';


function App() {
  const [rootNote, setRootNote] = useState("C");
  const [chordType, setChordType] = useState("major");

  const handlePlayChord = () => {
    const chordNotes = chords[rootNote][chordType].map(note =>
      note.includes("4") || note.includes("5") || note.includes("3") ? note : `${note}4`
    );
    
    const synth = new Tone.PolySynth().toDestination();
    synth.triggerAttackRelease(chordNotes, 5);
  };

  const chordNotes = chords[rootNote][chordType];

  return (
    <div className="center">
      <h1>ChordMate</h1>
      <Dropdown
        label="Root Note: "
        options={Object.keys(chords)}
        value={rootNote}
        onChange={setRootNote}
      />
      <Dropdown
        label="Chord Type: "
        options={Object.keys(chords[rootNote])}
        value={chordType}
        onChange={setChordType}
      />
      <h3>Chord Notes</h3>
      <p>{chordNotes.join(" - ")}</p>
      <Piano notes={chordNotes} />
      <PlayButton onClick={handlePlayChord} />
    </div>
  );
}


export default App;