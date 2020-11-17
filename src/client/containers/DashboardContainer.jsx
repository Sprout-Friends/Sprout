import React from 'react';
import UserInfo from '../components/UserInfo';
import Gallery from '../components/Gallery';
import Navigation from '../components/Navigation';

const DashboardContainer = () => {
  return (
    <div id="dashboard-container">
      <UserInfo />
      <Gallery />
      <Navigation />
    </div>
  );
};

export default DashboardContainer;
