import React from 'react';
import UserInfo from '../components/UserInfo';
import Gallery from '../components/Gallery';

const DashboardContainer = () => {
  return (
    <div id="dashboard-container">
      <UserInfo />
      <Gallery />
    </div>
  );
};

export default DashboardContainer;
