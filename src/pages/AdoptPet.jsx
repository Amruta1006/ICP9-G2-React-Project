import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function AdoptPet() {
  const pets = [
    {
      id: 1,
      name: 'Bella',
      type: 'Dog',
      age: '2 years',
      image: 'https://via.placeholder.com/400',
      description: 'A playful and friendly dog looking for a loving home.',
    },
    {
      id: 2,
      name: 'Whiskers',
      type: 'Cat',
      age: '1 year',
      image: 'https://via.placeholder.com/400',
      description: 'A curious cat who loves to explore and cuddle.',
    },
    {
      id: 3,
      name: 'Nibbles',
      type: 'Rabbit',
      age: '6 months',
      image: 'https://via.placeholder.com/400',
      description: 'An energetic bunny who loves to hop around and play.',
    },
    {
      id: 4,
      name: 'Buddy',
      type: 'Dog',
      age: '3 years',
      image: 'https://via.placeholder.com/400',
      description: 'A loyal companion with a playful spirit.',
    },
    {
      id: 5,
      name: 'Shadow',
      type: 'Cat',
      age: '2 years',
      image: 'https://via.placeholder.com/400',
      description: 'A quiet cat who loves to nap in sunny spots.',
    },
    {
      id: 6,
      name: 'Fluffy',
      type: 'Rabbit',
      age: '1 year',
      image: 'https://via.placeholder.com/400',
      description: 'A fluffy bunny that enjoys hopping around.',
    },
    {
      id: 7,
      name: 'Max',
      type: 'Dog',
      age: '4 years',
      image: 'https://via.placeholder.com/400',
      description: 'Loyal and energetic, loves to play fetch.',
    },
    {
      id: 8,
      name: 'Mittens',
      type: 'Cat',
      age: '3 years',
      image: 'https://via.placeholder.com/400',
      description: 'Calm and loving, enjoys cozying up.',
    },
    {
      id: 9,
      name: 'Snowball',
      type: 'Rabbit',
      age: '8 months',
      image: 'https://via.placeholder.com/400',
      description: 'Fluffy and curious, loves carrots!',
    },
  ]

  const [favorites, setFavorites] = useState([])
  const [cart, setCart] = useState([])

  // Load favorites and cart from local storage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
    const savedCart = JSON.parse(localStorage.getItem('cart')) || []
    setFavorites(savedFavorites)
    setCart(savedCart)
  }, [])

  // Save favorites and cart to local storage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const toggleFavorite = (petId) => {
    if (favorites.includes(petId)) {
      setFavorites(favorites.filter((id) => id !== petId))
    } else {
      setFavorites([...favorites, petId])
    }
  }

  const addToCart = (pet) => {
    const isAlreadyInCart = cart.some((item) => item.id === pet.id)
    if (!isAlreadyInCart) {
      setCart([...cart, pet])
    } else {
      alert('This pet is already in your cart!')
    }
  }

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
                  disabled={cart.some((item) => item.id === pet.id)}
                  className={`mt-4 w-full py-2 rounded-lg font-semibold transition-colors duration-300 ${cart.some((item) => item.id === pet.id) ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-green-500 text-white hover:bg-green-600'}`}
                >
                  {cart.some((item) => item.id === pet.id) ? 'Added' : 'Adopt Me'}
                </button>
              </div>
              <button
                onClick={() => toggleFavorite(pet.id)}
                className={`absolute top-4 right-4 text-2xl transition-transform duration-300 ${favorites.includes(pet.id) ? 'text-red-500 scale-110' : 'text-gray-400 hover:text-red-400 hover:scale-110'}`}
              >
                {favorites.includes(pet.id) ? '❤️' : '🤍'}
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AdoptPet
