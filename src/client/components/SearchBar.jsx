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
    border: '3px',
  };
  function searchForUser() {
    fetch('/search_page')
      .then((res) => {
        return res.json;
      })
      .then((data) => {
        return data;
      });
  }
  return (
    <div>
      <form
        className="searchBar"
        action="search_page"
        style={formStyle}
        onSubmit={searchForUser()}
      >
        <input type="text" placeholder="Search..." name="SearchBar" />
        <button type="submit" style={buttonStyle}>
          {/* <i className="fa fa-search"></i> */}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
