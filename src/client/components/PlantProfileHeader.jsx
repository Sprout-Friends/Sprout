import React from 'react';

const PlantProfileHeader = () => {
  // Temp
  const plantName = 'Nancy the Fancy';

  return (
    <div
      id="plant-profile-header-container"
      className="flex flex-col items-center pt-12"
    >
      <img
        className="h-48 w-48 border rounded-full"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LFRfn69xaXx4NzuHIIj7_AHaHZ%26pid%3DApi&f=1"
        alt=""
      />
      <p className="text-lg font-bold py-4">{plantName}</p>
    </div>
  );
};

export default PlantProfileHeader;
