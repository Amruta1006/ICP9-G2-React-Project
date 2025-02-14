import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { toast, Toaster } from 'react-hot-toast'  

function AdoptPet() {
  const pets = [
    {
      id: 1,
      name: 'Bella',
      type: 'Dog',
      age: '2 years',
      image: 'https://tse1.mm.bing.net/th?id=OIP.SJfkwPs7CPz7JpHvT2iH9wHaEJ&pid=Api&P=0&h=220',
      description: 'A playful and friendly dog looking for a loving home.',
    },
    {
      id: 2,
      name: 'Whiskers',
      type: 'Cat',
      age: '1 year',
      image: 'https://iheartcats.com/wp-content/uploads/2020/06/cat-2301015_1280-e1592928545934.jpg',
      description: 'A curious cat who loves to explore and cuddle.',
    },
    {
      id: 3,
      name: 'Nibbles',
      type: 'Rabbit',
      age: '6 months',
      image: 'http://upload.wikimedia.org/wikipedia/commons/a/a5/European_Rabbit,_Lake_District,_UK_-_August_2011.jpg',
      description: 'An energetic bunny who loves to hop around and play.',
    },
    {
      id: 4,
      name: 'Buddy',
      type: 'Dog',
      age: '3 years',
      image: 'https://tse3.mm.bing.net/th?id=OIP.qhH4E0xTI8j85u5lBEK0bwHaEK&pid=Api&P=0&h=220',
      description: 'A loyal companion with a playful spirit.',
    },
    {
      id: 5,
      name: 'Shadow',
      type: 'Cat',
      age: '2 years',
      image: 'https://tse1.mm.bing.net/th?id=OIP.rQBkREchNA_ThoALOqeYVAHaE9&pid=Api&P=0&h=220',
      description: 'A quiet cat who loves to nap in sunny spots.',
    },
    {
      id: 6,
      name: 'Fluffy',
      type: 'Rabbit',
      age: '1 year',
      image: 'https://tse3.mm.bing.net/th?id=OIP.5-hLeijT1xCxJGRrkBETtQHaE8&pid=Api&P=0&h=220',
      description: 'A fluffy bunny that enjoys hopping around.',
    },
    {
      id: 7,
      name: 'Max',
      type: 'Dog',
      age: '4 years',
      image: 'https://tse4.mm.bing.net/th?id=OIP.Eb5KOJEIbQ9p6-KVdRZRhwHaE8&pid=Api&P=0&h=220',
      description: 'Loyal and energetic, loves to play fetch.',
    },
    {
      id: 8,
      name: 'Mittens',
      type: 'Cat',
      age: '3 years',
      image: 'https://tse2.mm.bing.net/th?id=OIP.C5dhvdCSY5eZVumBau-cSQHaE8&pid=Api&P=0&h=220',
      description: 'Calm and loving, enjoys cozying up.',
    },
    {
      id: 9,
      name: 'Snowball',
      type: 'Rabbit',
      age: '8 months',
      image: 'https://www.thesprucepets.com/thmb/6QlPa95jJ6LsWWmFaCaFZSFuhYE=/3300x2190/filters:no_upscale():max_bytes(150000):strip_icc()/white-hotot-rabbit-eating-grass-509265984-5c0da06546e0fb0001366ac0.jpg',
      description: 'Fluffy and curious, loves carrots!',
    },
  ]

  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
    setFavorites(savedFavorites)
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (petId) => {
    if (favorites.includes(petId)) {
      setFavorites(favorites.filter((id) => id !== petId))
      toast.success('Removed from Favorites!')  
    } else {
      setFavorites([...favorites, petId])
      toast.success('Added to Favorites!')  
    }
  }

  const addToCart = (pet) => {
    toast.success(`${pet.name} added to your cart!`)  
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
                  disabled={false}
                  className={`mt-4 w-full py-2 rounded-lg font-semibold transition-colors duration-300 bg-green-500 text-white hover:bg-green-600`}
                >
                  Adopt Me
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
      <Toaster /> 
    </div>
  )
}

export default AdoptPet
