import React, { useContext } from 'react';
import { Plus } from 'heroicons-react';
import { SessionContext } from '../contexts/sessionContext';

const UserProfileHeader = ({ type, numOfPlants, setImages }) => {
  const { currentUser } = useContext(SessionContext);

  const handlePostNewPlant = () => {
    fetch('/plants', {
      method: 'POST',
      headers: { userid: currentUser._id },
    })
      .then((data) => data.json())
      .then((userPlants) => {
        setImages(userPlants);
      })
      .catch((e) => console.log(e));
  };

  // Temp state
  const followers = 24;
  const following = 12;
  const profilePhoto =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vibe.com%2Ffiles%2F2018%2F04%2Fkendrick-lamar-pulitzer-1523907357-compressed.jpg&f=1&nofb=1';

  return (
    <div id="user-profile-header-container" className="pt-12 pb-3">
      <div className="flex items-center" id="user-header">
        <img
          className="h-20 w-20 m-4 bg-gray-300 rounded-full object-cover"
          src={profilePhoto}
          alt="Profile"
        />
        <p className="flex-grow font-bold text-lg ml-1">
          {/* Capitalize the first letter every word in name */}
          {`${
            currentUser.first_name[0].toUpperCase() +
            currentUser.first_name.substring(1).toLowerCase()
          } ${
            currentUser.last_name[0].toUpperCase() +
            currentUser.last_name.substring(1).toLowerCase()
          }`}
        </p>
        {type === 'dashboard' && (
          <button type="button" onClick={handlePostNewPlant}>
            <Plus className="text-green-700 ml-2 mr-3" size={42} />
          </button>
        )}
      </div>
      {type === 'dashboard' && (
        <div className="flex m-2" id="user-social-info">
          <div
            className="flex flex-col items-center w-1/3"
            id="social-info-box"
          >
            <p className="font-bold">{numOfPlants}</p>
            <p>Plants</p>
          </div>
          <div
            className="flex flex-col items-center w-1/3"
            id="social-info-box"
          >
            <p className="font-bold">{followers}</p>
            <p>Followers</p>
          </div>
          <div
            className="flex flex-col items-center w-1/3"
            id="social-info-box"
          >
            <p className="font-bold">{following}</p>
            <p>Following</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileHeader;
