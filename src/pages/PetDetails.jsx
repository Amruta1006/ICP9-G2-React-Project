import { Search } from 'lucide-react';
import React, { useState } from 'react';
import PetData from '../data/petDetails.json';
import PetDetailsCard from '../components/PetDetailsCard/PetDetailsCard';

function PetDetails() {

    const [searchText, setSearchText] = useState('');

    const filteredPets = PetData.filter((pet) =>
        pet.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="bg-amber-50 pt-10 min-h-screen">
            <div className="relative w-1/3 mx-auto">
                <input
                    type="text"
                    className="bg-white w-full h-10 pl-10 pr-5 block mx-auto border border-black rounded-lg focus:outline-none"
                    placeholder="Search pet here..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Search className="absolute left-3 top-[10.5px] text-gray-500" size={20} />
            </div>

            <div className="flex flex-wrap justify-center p-10">
                {filteredPets.length > 0 ? (
                    filteredPets.map((pet, id) => (
                        <PetDetailsCard
                            key={id}
                            id={pet.id}
                            imgUrl={pet.imgUrl}
                            name={pet.name}
                            breed={pet.breed}
                            age={pet.age}
                        />
                    ))
                ) : (
                    <p className="text-gray-500 text-lg mt-5">No pets found</p>
                )}
            </div>
        </div>
    );
}

export default PetDetails;