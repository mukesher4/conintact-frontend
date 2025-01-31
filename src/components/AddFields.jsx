import { useState } from 'react';

const AddFields = ({ editSet, ogNote, note, setNote }) => {
  const [field, setField] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setField(true);
  };

  return (
    <div
      id="addfields"
      onClick={handleSubmit}
      className={`flex justify-center ${editSet ? '' : 'mb-4'}`}
    >
      {field ? (
        <input
          type="text"
          className="w-full rounded-lg p-2 pb-6"
          placeholder="Notes..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      ) : (
        <>
          {ogNote === "" ? (
            <div className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300 ease-in-out text-[#d4a017] opacity-80 ">
              <span className="text-2xl font-semibold">+</span>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default AddFields;
