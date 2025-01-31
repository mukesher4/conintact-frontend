import { useState } from 'react';

const NewAddFields = ({ theme, note, setNote }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // setField(true);
  };

  return (
    <div
      id="addfields"
      onClick={handleSubmit}
      className="flex justify-center mb-4"
    >
        <input
          style={{
            color: theme ? '#ffffff' : '#000000',
            backgroundColor: theme ? `#121212` : `#eeeeee`
          }} 
          type="text"
          className="w-full rounded-lg p-2 pb-6"
          placeholder="Notes..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
    </div>
  );
};

export default NewAddFields;
