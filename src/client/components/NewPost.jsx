import React from 'react';

const NewPost = () => {
  return (
    <div class="flex items-center justify-center h-screen">
      <div class="bg-green-600 text-white text-center font-bold rounded-lg border shadow-lg p-8">
        <label
          htmlFor="imageFile"
          className="text-white align-middle text-xl p-8"
        >
          Click here to upload Image
        </label>
        <input
          className="opacity-0 hidden"
          type="file"
          id="imageFile"
          capture="user"
          accept="image/*"
        ></input>
      </div>
    </div>
  );
};

export default NewPost;
