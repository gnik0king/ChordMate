import React from "react";

function PlayButton({onClick}){
    return(
        <button onClick={onClick}>
            Play Chord
        </button>
    );
}

export default PlayButton;