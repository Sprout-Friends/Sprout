import React from 'react';
import UserInfo from '../components/UserInfo';
import Gallery from '../components/Gallery';
import Navigation from '../components/Navigation';
import NewPost from '../components/NewPost';

const DashboardContainer = () => {
  return (
    <div id="dashboard-container">
      {/* <UserInfo /> */}
      {/* <Gallery /> */}
      <NewPost />
      <Navigation />
    </div>
  );
};

export default DashboardContainer;
