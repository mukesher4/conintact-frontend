import React, { useState } from 'react';

const Dropdown = ({ options, selectedOption, onSelect }) => {
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {selectedOption || 'Select'}
      </button>
      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 text-white border border-gray-300 rounded-lg shadow-lg z-10 w-max">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
