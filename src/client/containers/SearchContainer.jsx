import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import Gallery from '../components/Gallery';

const SearchContainer = () => {
  const images = [
    {
      id: 1,
      url:
        'https://static.billboard.com/files/media/Lil-Wayne-Press-Photo-2015-Billboard-650-compressed.jpg',
    },
    {
      id: 2,
      url:
        'https://static.billboard.com/files/media/Jay-Z-1996-Billboard-450-compressed.jpg',
    },
    {
      id: 3,
      url:
        'https://static.billboard.com/files/media/Notorious-BIG-Madison-Square-Garden-1995-Billboard-650-compressed.jpg',
    },
    {
      id: 4,
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/180717_%EC%97%B4%EB%A6%B0%EC%9D%8C%EC%95%85%ED%9A%8C_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_%2810%29.jpg/800px-180717_%EC%97%B4%EB%A6%B0%EC%9D%8C%EC%95%85%ED%9A%8C_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_%2810%29.jpg',
    },
    {
      id: 5,
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IU_in_%22Love_Poem%22_Concert_in_Seoul_on_23rd_November_2019.jpg/800px-IU_in_%22Love_Poem%22_Concert_in_Seoul_on_23rd_November_2019.jpg',
    },
    {
      id: 6,
      url:
        'https://upload.wikimedia.org/wikipedia/commons/a/a5/Park_Ji-min_on_the_Billboard_Music_Awards_red_carpet%2C_1_May_2019.jpg',
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
