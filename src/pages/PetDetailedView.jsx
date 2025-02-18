import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PetJsonData from '../data/PetDetails.json';
import { toast, Toaster } from 'react-hot-toast';

// Import images
import rexImg from '../../public/assets/PetDetailsImages/rex.webp';
import labradorImg from '../../public/assets/PetDetailsImages/labrador.jpg';
import germanShepherdImg from '../../public/assets/PetDetailsImages/german-shepherd.jpg';
import bulldogImg from '../../public/assets/PetDetailsImages/bull-dog.jpg';
import borderCollieImg from '../../public/assets/PetDetailsImages/border-collie.jpg';
import huskyImg from '../../public/assets/PetDetailsImages/husky.jpg';
import hollandLopImg from '../../public/assets/PetDetailsImages/holland-lop.jpg';
import angoraImg from '../../public/assets/PetDetailsImages/angora.webp';
import netherlandDwarfImg from '../../public/assets/PetDetailsImages/netherland-dwarf.webp';
import persianCatImg from '../../public/assets/PetDetailsImages/persian-cat.jpg';
import maineCoonImg from '../../public/assets/PetDetailsImages/maine-coon.webp';
import siameseImg from '../../public/assets/PetDetailsImages/siamese.webp';


// Create an object mapping pet names to images
const petImages = {
    Rex: rexImg,
    Titan: labradorImg,
    Bruno: germanShepherdImg,
    Diesel: bulldogImg,
    Rocky: borderCollieImg,
    Shadow: huskyImg,
    Thumper: hollandLopImg,
    Snowball: angoraImg,
    cinnamon: netherlandDwarfImg,
    Luna: persianCatImg,
    Simba: maineCoonImg,
    Whiskers: siameseImg
};

function PetDetailedView() {
    const { id } = useParams();
    const [petData, setPetData] = useState(null);

    useEffect(() => {
        const pet = PetJsonData.find((pet) => pet.id.toString() === id);
        if (pet) {
            setPetData(pet);
            toast.dismiss();
            toast.success(`Viewing details of ${pet.name}! 🐾`, { duration: 3000 });
        } else {
            toast.dismiss();
            toast.error("Pet not found!", { duration: 3000 });
        }
    }, [id]);

    if (!petData) return <p className="text-center text-lg text-red-500">Pet not found!</p>;

    const handleAdoptClick = () => {
        toast.dismiss();
        toast.success(`🎉 You have adopted ${petData.name}! 🐶🐱`, { duration: 4000 });
    };

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <div className='min-h-screen p-10 bg-amber-50'>
                <div className='bg-white md:w-1/3 border-1 block mx-auto rounded-t-2xl overflow-hidden shadow-lg'>
                    <img src={petImages[petData.name]} alt={petData.name} className='w-full h-[250px] object-cover' />
                    <div className='p-5 flex flex-col'>
                        <h1 className='text-5xl font-semibold mb-2'>{petData.name}</h1>
                        <p className="text-gray-700 text-lg"><span className='font-semibold'>Breed:</span> {petData.breed}</p>
                        <p className="text-gray-700 text-lg"><span className='font-semibold'>Age:</span> {petData.age} Years</p>
                        <p className="text-gray-700 text-lg"><span className='font-semibold'>Type:</span> {petData.type} </p>
                        <p className="text-gray-700 text-lg"><span className='font-semibold'>Color:</span> {petData.color} </p>
                        <p className="text-gray-700 text-lg"><span className='font-semibold'>Gender:</span> {petData.gender} </p>
                        <p className="text-green-800 font-bold text-xl my-1.5 bg-green-200 w-fit p-1 rounded-lg">Price: <span className='font-semibold'>₹{petData.price}</span>  </p>
                        <p className="text-gray-700 text-xl font-semibold">{petData.description}</p>
                    </div>
                    <div className="m-5 mt-0">
                        <button
                            className="w-full cursor-pointer py-2 rounded-lg font-semibold transition-colors duration-300 bg-[#8B5E3C] text-white hover:bg-[#6F4B2E]"
                            onClick={handleAdoptClick}
                        >
                            Adopt Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PetDetailedView;
