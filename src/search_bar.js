// ./src/SearchBar.js
import React from 'react';
import "./search_bar.css"


const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="rechercher..." />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;