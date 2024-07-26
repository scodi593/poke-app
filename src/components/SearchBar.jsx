// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search Pokémon..."
      onChange={handleChange}
    />
  );
};

export default SearchBar;
