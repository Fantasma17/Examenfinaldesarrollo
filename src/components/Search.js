import React from 'react';

const Search = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search superheroes..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default Search;
