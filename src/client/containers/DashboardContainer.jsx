import React, { useState, useEffect, useContext } from 'react';
import UserProfileHeader from '../components/UserProfileHeader';
import Gallery from '../components/Gallery';
import Navigation from '../components/Navigation';
import { SessionContext } from '../contexts/sessionContext';

const DashboardContainer = () => {
  const { currentUser } = useContext(SessionContext);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/plants', { headers: { userid: currentUser._id } })
      .then((data) => data.json())
      .then((plants) => {
        setImages(plants);
      });
  }, []);

  return (
    <div className="flex flex-col h-screen" id="dashboard-container">
      <UserProfileHeader
        type="dashboard"
        numOfPlants={images.length}
        setImages={setImages}
      />
      <Gallery images={images} type="dashboard" />
      <Navigation />
    </div>
  );
};

export default DashboardContainer;
