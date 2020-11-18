import React from 'react';
import { useParams } from 'react-router';
import PlantProfileHeader from '../components/PlantProfileHeader';
import Gallery from '../components/Gallery';
import Navigation from '../components/Navigation';

const PlantProfileContainer = () => {
  const { plantId } = useParams();

  const images = [
    {
      plantId: '1',
      url:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LFRfn69xaXx4NzuHIIj7_AHaHZ%26pid%3DApi&f=1',
    },
    {
      plantId: '2',
      url:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LFRfn69xaXx4NzuHIIj7_AHaHZ%26pid%3DApi&f=1',
    },
    {
      plantId: '3',
      url:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LFRfn69xaXx4NzuHIIj7_AHaHZ%26pid%3DApi&f=1',
    },
  ];

  // TOOD: Query for plant information and all posts related to plant with plantId

  return (
    <div className="flex flex-col h-screen" id="plant-profile-container">
      <PlantProfileHeader />
      <Gallery images={images} type="plantProfile" />
      <Navigation />
    </div>
  );
};

export default PlantProfileContainer;
