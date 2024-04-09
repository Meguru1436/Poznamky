
import React, { useState } from 'react';
import './NoteForm.css';

function NoteForm({ addNote }) {
  const [noteText, setNoteText] = useState('');

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!noteText.trim()) return;
    addNote(noteText);
    setNoteText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        class="inp"
        type="text"
        placeholder="Zadejte poznámku"
        value={noteText}
        onChange={handleChange}
      />
      <button class="btn" type="submit">Přidat poznámku</button>
    </form>
  );
}

export default NoteForm;
