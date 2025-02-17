import React from "react";
import { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

function AdoptPet() {
  const pets = [
    {
      id: 1,
      name: "Bella",
      type: "Dog",
      age: "2 years",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.hBSdv6uERuxqdx0yV7vxMgHaEJ&pid=Api&P=0&h=220",
      description: "A playful and friendly dog looking for a loving home.",
      price: "5000",
    },
    {
      id: 2,
      name: "Whiskers",
      type: "Cat",
      age: "1 year",
      image:
        "https://iheartcats.com/wp-content/uploads/2020/06/cat-2301015_1280-e1592928545934.jpg",
      description: "A curious cat who loves to explore and cuddle.",
      price: "4000",
    },
    {
      id: 3,
      name: "Nibbles",
      type: "Rabbit",
      age: "6 months",
      image:
        "http://upload.wikimedia.org/wikipedia/commons/a/a5/European_Rabbit,Lake_District,_UK-_August_2011.jpg",
      description: "An energetic bunny who loves to hop around and play.",
      price: "2000",
    },
    {
      id: 4,
      name: "Buddy",
      type: "Dog",
      age: "3 years",
      image:
        "https://images.hindustantimes.com/img/2021/10/10/1600x900/b76810b0-2999-11ec-8390-9108a6051a41_1633850275074.jpg",
      description: "A loyal companion with a playful spirit.",
      price: "8000",
    },
    {
      id: 5,
      name: "Shadow",
      type: "Cat",
      age: "2 years",
      image:
        "https://shadowcats.net/wp-content/uploads/2018/06/Freya_9183s.jpg",
      description: "A quiet cat who loves to nap in sunny spots.",
      price: "6000",
    },
    {
      id: 6,
      name: "Fluffy",
      type: "Rabbit",
      age: "1 year",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.UJRK6ikK8prsRgaLn5Xb8QHaEc&pid=Api&P=0&h=220",
      description: "A fluffy bunny that enjoys hopping around.",
      price: "2500",
    },
    {
      id: 7,
      name: "Max",
      type: "Dog",
      age: "4 years",
      image:
        "http://pm1.narvii.com/7991/f8a2b93a5d09436249595497ef2276b0647b07aer1-2048-1366v2_uhq.jpg",
      description: "Loyal and energetic, loves to play fetch.",
      price: "9000",
    },
    {
      id: 8,
      name: "Mittens",
      type: "Cat",
      age: "3 years",
      image:
        "https://static.boredpanda.com/blog/wp-content/uploads/2020/03/adventures-of-cat-celebrity-mittens-new-zealand-wellington-5e61011dbf6eb__700.jpg ",
      description: "Calm and loving, enjoys cozying up.",
      price: "6500",
    },
    {
      id: 9,
      name: "Snowball",
      type: "Rabbit",
      age: "8 months",
      image:
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/01/07/11/bunny-rabbit.jpg",
      description: "Fluffy and curious, loves carrots!",
      price: "1500",
    },
    {
      id: 10,
      name: "Rocky",
      type: "Dog",
      age: "3 years",
      image:
        "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg",
      description: "Energetic and playful, loves fetch.",
      price: "7000",
    },
    {
      id: 11,
      name: "Ginger",
      type: "Cat",
      age: "4 years",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.n7MSLGvaltnyR6Wb2jOH4AHaE7&pid=Api&P=0&h=220",
      description: "Independent and curious, loves climbing.",
      price: "3000",
    },
    {
      id: 12,
      name: "Coco",
      type: "Rabbit",
      age: "2 years",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.CfvqGqOfsrtM6_IAvJ4WAgHaEK&pid=Api&P=0&h=220",
      description: "Fluffy and cuddly, loves leafy greens.",
      price: "5000",
    },
    {
      id: 13,
      name: "Bruno",
      type: "Dog",
      age: "2 years",
      image:
        "https://cdn.britannica.com/10/234210-050-63CB0F2E/American-pit-bull-terrier.jpg",
      description: "Friendly and loyal, great with children.",
      price: "10000",
    },
    {
      id: 14,
      name: "Milo",
      type: "Cat",
      age: "3 years",
      image:
        "https://images.pond5.com/white-cat-scared-and-angry-footage-045695674_iconl.jpeg",
      description: "Calm and affectionate, enjoys cozy spots.",
      price: "8000",
    },
    {
      id: 15,
      name: "Thumper",
      type: "Rabbit",
      age: "2 years",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.v_8-abgP-IL_bu3GifISVgHaEK&pid=Api&P=0&h=220",
      description: "Energetic and playful, loves hopping around.",
      price: "3000",
    },
    {
      id: 16,
      name: "Roxy",
      type: "Dog",
      age: "1 year",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-teacup-dog-breeds-pug-1565993972.jpg",
      description: "Playful and energetic, loves to run around.",
      price: "9000",
    },
    {
      id: 17,
      name: "Tiger",
      type: "Cat",
      age: "4 years",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.XrujuAmxxJLC2_FmwN4-0QHaE7&pid=Api&P=0&h=220",
      description: "Independent and curious, loves exploring.",
      price: "7000",
    },
    {
      id: 18,
      name: "BunBun",
      type: "Rabbit",
      age: "1 year",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.xLadakoesIZC3fJO8qog0AHaE8&pid=Api&P=0&h=220",
      description: "Soft and cuddly, loves leafy greens.",
      price: "3000",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");

  const [favorites, setFavorites] = useState([]);
  const [adoptedPets, setAdoptedPets] = useState([]);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Save adopted pets to localStorage
  useEffect(() => {
    localStorage.setItem("adoptedPets", JSON.stringify(adoptedPets));
  }, [adoptedPets]);

  // Adopt a pet
  const adoptPet = (pet) => {
    const petInfo = {
      id: pet.id,
      name: pet.name,
      type: pet.type,
      age: pet.age,
      image: pet.image,
      price: pet.price,
    };
    if (adoptedPets.find((adopted) => adopted.id === pet.id)) {
      toast.error(`${pet.name} is already adopted!`);
    } else {
      setAdoptedPets([...adoptedPets, petInfo]);
      toast.success(`${pet.name} adopted successfully!`);
    }
  };

  const toggleFavorite = (pet) => {
    if (favorites.some((fav) => fav.id === pet.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== pet.id));
      toast.success(`${pet.name} removed from favorites!`);
    } else {
      setFavorites([...favorites, pet]);
      toast.success(`${pet.name} added to favorites!`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-b from-pink-100 to-white py-16 flex-grow">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
          Find Your Furry Friend
        </h1>

        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300 ease-in-out hover:shadow-md"
          />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full mt-4 px-4 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300 ease-in-out hover:shadow-md"
          >
            <option value="">All Pets</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Rabbit">Rabbit</option>
          </select>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {pets
            .filter(
              (pet) =>
                pet.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (filterType === "" || pet.type === filterType)
            )
            .map((pet) => (
              <div
                key={pet.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden relative flex flex-col"
              >
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-3xl font-bold text-gray-800">
                    {pet.name}
                  </h2>
                  <p className="text-gray-500 text-lg">
                    {pet.type} - {pet.age}
                  </p>
                  <p className="text-gray-600 mt-4 flex-grow">
                    {pet.description}
                  </p>
                  <p className="text-pink-600 font-semibold text-xl mt-2">
                    Price: ₹{pet.price}
                  </p>
                  <button
                    onClick={() => adoptPet(pet)}
                    className="mt-4 w-full py-2 rounded-lg font-semibold transition-colors duration-300 bg-[#F5E6CA] text-black hover:bg-[#8B5E3C] hover:text-white"
                  >
                    Adopt Me
                  </button>
                </div>
                <button
                  onClick={() => toggleFavorite(pet)}
                  className={`absolute top-4 right-4 text-2xl transition-transform duration-300 ${
                    favorites.some((fav) => fav.id === pet.id)
                      ? "text-red-500 scale-110"
                      : "text-gray-400 hover:text-red-400 hover:scale-110"
                  }`}
                >
                  {favorites.some((fav) => fav.id === pet.id) ? "❤" : "🤍"}
                </button>
              </div>
            ))}
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default AdoptPet;
