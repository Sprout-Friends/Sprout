import { Search } from 'heroicons-react';
import React from 'react';

const SearchBar = () => {
  const buttonStyle = {
    background: 'blue',
    width: '20%',
    cursor: 'pointer',
  };
  const formStyle = {
    margin: 'auto',
    width: '500px',
  };
  return (
    <div>
      <form className="searchBar" action="search_page.php" style={formStyle}>
        <input
          type="text"
          placeholder="Search for Other Plants..."
          name="SearchBar"
        />
        <button type="submit" style={buttonStyle}>
          {/* <i className="fa fa-search"></i> */}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
