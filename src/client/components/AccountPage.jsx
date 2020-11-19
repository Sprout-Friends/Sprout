import React from 'react';
import axios from 'axios';
import { Logout } from 'heroicons-react';

const AccountPage = () => {
  const handleSignOut = (e) => {
    e.preventDefault();

    axios.delete('/signout', {}).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="flex-grow mt-8 overflow-scroll">
      <div className="flex flex-col items-center w-full px-px text-center">
        <div className="px-4 py-2 font-bold text-center text-white bg-green-600 border rounded-lg sm:w-auto hover:bg-green-700">
          <label
            htmlFor="profilePicture"
            className="text-xl text-white align-middle cursor-pointer"
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
          className="px-4 py-2 mt-2 text-xl font-bold text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
