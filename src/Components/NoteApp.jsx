// src/components/NoteApp.js
import React, { useState } from 'react';
import NoteForm from './NoteForm';
import Note from './Note';
import './NoteApp.css';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([note, ...notes]);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="note-app">
      <h1>Note App</h1>
      <NoteForm addNote={addNote} />
      <div className="note-list">
        {notes.map((note, index) => (
          <Note key={index} index={index} note={note} deleteNote={deleteNote} />
        ))}
      </div>
    </div>
  );
};

export default NoteApp;
