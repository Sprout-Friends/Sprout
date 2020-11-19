import React, { useState } from 'react';
const NewPost = () => {
  const [imageUrl, setImageUrl] = useState('');

  const handleAddNewPost = () => {
    const body = {
      plant_id: Date.now().toString(),
      url: imageUrl,
    };

    fetch('/plants/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-4 py-2 font-bold text-center text-white bg-green-600 border rounded-lg shadow-lg">
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
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        ></input>
        {imageUrl ? (
          <button type="submit" onClick={handleAddNewPost}>
            Submit
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default NewPost;
