import React from "react";

function ChordVisualizer({notes}){
    return(
        <div>
            <h3>
                Chord Notes
            </h3>
            <p>
                {notes.join(" - ")}
            </p>
        </div>
    );
}

export default ChordVisualizer;