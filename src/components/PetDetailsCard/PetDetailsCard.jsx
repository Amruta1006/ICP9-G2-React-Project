import React from 'react';
import { Link } from 'react-router';

function PetDetailsCard({ id, imgUrl, name, age, breed }) {
    return (

        <div className="w-[400px] m-5 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img
                src={imgUrl}
                alt={name}
                className="w-full h-60 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-2xl mb-2 font-bold text-black">{name}</h2>
                <p className="text-gray-700 text-md">Breed: {breed}</p>
                <p className="text-gray-700 text-md">Age: {age} Years</p>
                <div className="mt-5">
                    <Link to={`/petdetailedview/${id}`}>
                        <button className="w-full cursor-pointer py-2 rounded-lg font-semibold transition-colors duration-300 bg-[#8B5E3C] text-white hover:bg-[#6F4B2E]">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PetDetailsCard;
