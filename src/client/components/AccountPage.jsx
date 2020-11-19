import React from 'react';
import axios from 'axios';

const AccountPage = () => {
  const handleSignOut = (e) => {
    e.preventDefault();

    axios.delete('/signout', {}).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="flex-grow overflow-scroll">
      <div className="flex flex-col items-center w-full px-px text-center">
        <div className="px-4 py-2 font-bold text-center text-white bg-green-600 border rounded-lg">
          <label
            htmlFor="profilePicture"
            className="p-8 text-xl text-white align-middle"
          >
            Upload Profile Picture
          </label>
          <input
            className="hidden opacity-0"
            type="file"
            id="profilePicture"
            capture="user"
            accept="image/*"
          ></input>
        </div>

        <button
          type="button"
          onClick={handleSignOut}
          className="w-1/3 px-4 py-2 mt-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
