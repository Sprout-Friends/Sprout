import React from 'react';
const NewPost = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-8 font-bold text-center text-white bg-green-600 border rounded-lg shadow-lg">
        <label
          htmlFor="imageFile"
          className="p-8 text-xl text-white align-middle"
        >
          Click here to upload Image
        </label>
        <input
          className="hidden opacity-0"
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
