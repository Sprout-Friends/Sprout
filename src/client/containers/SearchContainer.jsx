import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import Gallery from '../components/Gallery';

const SearchContainer = () => {
  const images = [
    {
      id: 1,
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGbZTYvGPrHKfDNpMBsPflT7D5U4r_XKo8NQ&usqp=CAU',
    },
    {
      id: 2,
      url:
        'https://toppng.com/uploads/preview/plants-with-sunglasses-cartoon-11550169867suwayop8om.png',
    },
  ];

  return (
    <div className="flex flex-col h-screen" id="search-container">
      <SearchBar />
      <Gallery images={images} type="SearchPage" />
      <Navigation />
    </div>
  );
};

export default SearchContainer;
