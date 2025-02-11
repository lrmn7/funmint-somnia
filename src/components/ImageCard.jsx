import React from 'react';

export const ImageCard = ({ imageUrl, altText = "image", title, description }) => {
    return (
      <div className="max-w-sm mx-auto overflow-hidden shadow-lg bg-white rounded-lg h-[36rem]">
        <div className="relative w-full h-[25rem]">
          <img
            src={imageUrl}
            alt={altText}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2">
          <h2 className="mb-2 text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  };
  