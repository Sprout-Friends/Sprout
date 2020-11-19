import React from 'react';
import { Plus } from 'heroicons-react';

const UserProfileHeader = ({ numOfPlants }) => {
  // Temp state
  const followers = 24;
  const following = 12;
  const profilePhoto =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vibe.com%2Ffiles%2F2018%2F04%2Fkendrick-lamar-pulitzer-1523907357-compressed.jpg&f=1&nofb=1';
  const userName = 'Kendrick Lamar';

  return (
    <div id="user-profile-header-container" className="pt-12 pb-3">
      <div className="flex items-center" id="user-header">
        <img
          className="h-20 w-20 m-4 bg-gray-300 rounded-full object-cover"
          src={profilePhoto}
          alt="Profile"
        />
        <p className="flex-grow font-bold text-lg ml-1">{userName}</p>
        <Plus className="text-green-700 ml-2 mr-3" size={42} />
      </div>
      <div className="flex m-2" id="user-social-info">
        <div className="flex flex-col items-center w-1/3" id="social-info-box">
          <p className="font-bold">{numOfPlants}</p>
          <p>Plants</p>
        </div>
        <div className="flex flex-col items-center w-1/3" id="social-info-box">
          <p className="font-bold">{followers}</p>
          <p>Followers</p>
        </div>
        <div className="flex flex-col items-center w-1/3" id="social-info-box">
          <p className="font-bold">{following}</p>
          <p>Following</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileHeader;
