import React from 'react';
import Navigation from '../components/Navigation';
import NewPost from '../components/NewPost';

const NewPostContainer = () => {
  return (
    <div className="flex flex-col h-screen">
      <NewPost />
      <Navigation />
    </div>
  );
};

export default NewPostContainer;
