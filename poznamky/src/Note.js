import React from 'react';
import './Note.css';

function Note({ id, text, deleteNote }) {
  const handleDelete = () => {
    deleteNote(id);
  };

  return (
    <div className="note">
      <p className="note-text">{text}</p>
      <button className='btns' onClick={handleDelete}>Smazat</button>
    </div>
  );
}

export default Note;
