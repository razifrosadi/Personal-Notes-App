import React from 'react';

function NoteHeader({ onSearch }) {
    return(
        <div className="note-app__header"> 
        <h1>Notes</h1>
        <input onChange={(event) => onSearch=(event)} placeholder="Temukan Catatan..."></input>
        </div>
    );
}

export default NoteHeader;