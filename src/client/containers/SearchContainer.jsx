import React from 'react';
import Gallery from '../components/Gallery';
import SearchBar from '../components/SearchBar';
import Navigation from '../components/Navigation';

const SearchContainer = () => {
  const images = [
    {
      id: 1,
      url:
        'https://lh3.googleusercontent.com/proxy/ezwH76LrjxYvyxGdkUgVL7Nq5dq64V2kq5pP5cY3Yq9jVFCPi2J_xeiHHHagBqWihwsrQNaLGW_WtM-mxCDlAerx',
    },
    {
      id: 2,
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBY94BJHYCsL8eDGfW2MTyGSw3WCrMG2rQXQ&usqp=CAU',
    },
  ];

  return (
    <div className="flex flex-col h-screen" id="search-container">
      <SearchBar />
      <Gallery images={images} type="searchPage" />
      <Navigation />
    </div>
  );
};

export default SearchContainer;
