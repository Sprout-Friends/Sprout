import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PlantProfileHeader from '../components/PlantProfileHeader';
import Gallery from '../components/Gallery';
import Navigation from '../components/Navigation';
import { SessionContext } from '../contexts/sessionContext';

const PlantProfileContainer = () => {
  const { currentUser } = useContext(SessionContext);
  const { plantId } = useParams();
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('/plants/posts', {
      headers: { userid: currentUser._id, plantid: plantId },
    })
      .then((data) => data.json())
      .then((plants) => {
        setImages(plants);
        setIsLoaded(true);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="flex flex-col h-screen" id="plant-profile-container">
      {/* First element of 'images' array will be the latest post of the plant.
       * Application always uses the latest image for the plant's profile photo
       */}
      <PlantProfileHeader plantProfilePic={images[0] ? images[0].url : '#'} />
      <Gallery images={images} type="plantProfile" />
      <Navigation />
    </div>
  );
};

export default PlantProfileContainer;
