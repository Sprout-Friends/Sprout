import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = ({ images, type }) => {
  const imagesComponents = images.map(({ _id, url }, i) => {
    // If url does not exist, insert placeholder gray box
    const imageContainer = url ? (
      <img
        className="absolute h-full w-full object-cover border rounded-sm"
        src={url}
        alt=""
      />
    ) : (
      <div className="absolute h-full w-full border rounded-sm bg-gray-300" />
    );

    return (
      <div className="w-1/3 p-px" key={`gallery-img-${i}`}>
        <div className="relative pb-full">
          {type === 'dashboard' ? (
            <Link to={`/plant/${_id}`}>{imageContainer}</Link>
          ) : (
            { imageContainer }
          )}
        </div>
      </div>
    );
  });

  return (
    <div id="gallery-container" className="flex-grow overflow-scroll">
      <div
        id="gallery-images-container"
        className="flex flex-wrap px-px w-full"
      >
        {imagesComponents}
      </div>
    </div>
  );
};

export default Gallery;
