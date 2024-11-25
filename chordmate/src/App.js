import React, { useState } from "react";
import ChordVisualizer from "./components/ChordVisualizer";
import Dropdown from "./components/Dropdown";
import PlayButton from "./components/PlayButton";

function App(){
  const [rootNote, setRootNote] = useState("C");
  const [chordType, setChordType] = useState("major");

  const handlePlayChord = () => {
    const chordNotes = chords[rootNote][chordType];
    console.log('Playing: ${chordNotes.join(", ")}');
  };

  return(
    <div>
      <h1>
        ChordMate
      </h1>
      <Dropdown
        label="Root Note"
        options={Object.keys(chords)}
        value={rootNote}
        onChange={setRootNote}
      />
      <Dropdown
        label="Chord Type"
        options={Object.keys(chords[rootNote])}
        value={chordType}
        onChange={setChordType}
      />
      <ChordVisualizer notes={chords[rootNote][chordType]}/>
      <PlayButton onClick={handlePlayChord}/>
    </div>
  );
}

export default App;