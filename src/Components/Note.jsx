// src/components/Note.js
import React from 'react';
import './Note.css';

const Note = ({ note, deleteNote, index }) => {
  return (
    <div className="note">
      <p>{note}</p>
      <button onClick={() => deleteNote(index)}>Delete</button>
    </div>
  );
};

export default Note;
