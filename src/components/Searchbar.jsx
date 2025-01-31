import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({
  theme,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="relative w-full max-w-lg">
      <FaSearch
      style={{ 
        color: theme ? '#ffffff' : '#000000',
      }}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl" />
      <input
        style={{ 
          color: theme ? '#ffffff' : '#000000',
          backgroundColor: theme ? `#121212` : `#eeeeee`,
        }}
        type="text"
        className="w-full pl-12 pr-4 py-4 text-xl rounded-lg"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
