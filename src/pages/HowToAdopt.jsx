import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function HowToAdopt() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gradient-to-b from-pink-100 to-white py-16 flex-grow">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Find Your Furry Friend</h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {pets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden relative flex flex-col">
              <img src={pet.image} alt={pet.name} className="w-full h-64 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-3xl font-bold text-gray-800">{pet.name}</h2>
                <p className="text-gray-500 text-lg">{pet.type} - {pet.age}</p>
                <p className="text-gray-600 mt-4 flex-grow">{pet.description}</p>
                <button
                  onClick={() => addToCart(pet)}
                  disabled={false}
                  className={`mt-4 w-full py-2 rounded-lg font-semibold transition-colors duration-300 bg-green-500 text-white hover:bg-green-600`}
                >
                  HowToAdap
                </button>
              </div>
            
              <button
                onClick={() => toggleFavorite(pet.id)}
                className={`absolute top-4 right-4 text-2xl transition-transform duration-300 ${favorites.includes(pet.id) ? 'text-red-500 scale-110' : 'text-gray-400 hover:text-red-400 hover:scale-110'}`}
              >
                {favorites.includes(pet.id) ? '✨' : '✨'}
              </button>
            </div>
            
          ))}
        </div>
      </div>
      <Footer />
      <Toaster /> 
    </div>
  );
};
  

export default HowToAdopt;
