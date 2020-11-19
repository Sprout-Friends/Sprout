import React from 'react';

const PlantProfileHeader = ({ plantProfilePic }) => {
  // Temp
  const plantName = 'Nancy the Fancy';

  return (
    <div
      id="plant-profile-header-container"
      className="flex flex-col items-center pt-12"
    >
      <img
        className="h-48 w-48 border rounded-full bg-gray-200"
        src={plantProfilePic}
        alt=""
      />
      <p className="text-lg font-bold py-4">{plantName}</p>
    </div>
  );
};

export default PlantProfileHeader;
