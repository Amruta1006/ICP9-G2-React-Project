import React from 'react'

const SuccessCard = ({ story }) => {
    return (
      <div className="bg-gray-200 rounded-lg shadow-lg p-4">
        <img src={story.image} alt={story.petName} className="w-full h-40 object-cover rounded-lg" />
        <h2 className="text-xl font-semibold mt-4">{story.petName}</h2>
        <p className="text-gray-700">Adopted by {story.owner}</p>
        <p className="text-gray-600 mt-2">{story.story}</p>
      </div>
);
};

export default SuccessCard;
