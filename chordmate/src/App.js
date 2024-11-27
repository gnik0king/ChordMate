import React, { useState } from "react";
import * as Tone from "tone";
import ChordVisualizer from "./components/ChordVisualizer";
import Dropdown from "./components/Dropdown";
import Piano from "./components/Piano";
import PlayButton from "./components/PlayButton";
import chords from "./data/chords.json";

function App(){
  const [rootNote, setRootNote] = useState("C");
  const [chordType, setChordType] = useState("major");

  const handlePlayChord = () => {
    const chordNotes = chords[rootNote][chordType].map(note => `${note}4`); // Default to octave 4
    const synth = new Tone.PolySynth().toDestination();
    synth.triggerAttackRelease(chordNotes, 5); // Play chord for 5 seconds
  };
  

  return(
    <div className="page">
      <h1>
        ChordMate
      </h1>
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
      <ChordVisualizer notes={chords[rootNote][chordType]}/>
      <Piano notes={chords[rootNote][chordType]}/>
      <PlayButton onClick={handlePlayChord}/>
    </div>
  );
}

export default App;