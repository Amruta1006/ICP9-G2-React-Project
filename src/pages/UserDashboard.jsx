import React, { useState, useEffect } from "react";
import petimg from "../../public/assets/HomeImages/petimg.jpg";
const UserDashboard = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    profilePic: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProfilePic, setNewProfilePic] = useState(""); 
  const [editedUser, setEditedUser] = useState({ ...user });


  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
      setNewProfilePic(savedUser.profilePic || "https://via.placeholder.com/100");
    }
  }, []);

  const handleSignOut = () => {
    localStorage.clear();
    setUser({ name: "", email: "", contact: "", profilePic: "" });
    setFavorites([]);
    setAdoptedPets([]);
  };

  
  const handleEditClick = () => {
    setEditedUser({ ...user });
    setNewProfilePic(user.profilePic || "https://via.placeholder.com/100");
    setIsModalOpen(true);
  };
  

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfilePic(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };



  const handleSave = () => {
    const updatedUser = { ...editedUser, profilePic: newProfilePic };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsModalOpen(false);
  };
  const [favorites, setFavorites] = useState([]);
  const [adoptedPets, setAdoptedPets] = useState([]);

  

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((pet) => pet.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeAdoptedPet = (id) => {
    const updatedAdoptedPets = adoptedPets.filter((pet) => pet.id !== id);
    setAdoptedPets(updatedAdoptedPets);
    localStorage.setItem('adoptedPets', JSON.stringify(updatedAdoptedPets));
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const storedAdoptedPets = JSON.parse(localStorage.getItem('adoptedPets')) || [];
    
    setFavorites(storedFavorites);
    setAdoptedPets(storedAdoptedPets);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#fdfaf3] ">
      <div className="flex  p-10 rounded-lg  flex-wrap ">
      <div className="md:w-[600px] md:ml-20 w-full bg-[#fffdf9] shadow-lg rounded-lg text-center border-blue-100-4 ">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-2">Your Dashboard</h2>
        <div className="flex flex-col items-center">
          <img
            src={user.profilePic || "https://via.placeholder.com/100"}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-gray-300 shadow-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-700">{user.name || "Guest User"}</h3>
          <p className="text-gray-600">{user.email || "No email available"}</p>
          <p className="text-gray-600">Contact: {user.contact || "Not provided"}</p>
        </div>
        <div className="mt-6 space-x-4 md:space-x-9">
          <button
            onClick={handleEditClick}
            className="bg-[#efd394] px-5 py-2 rounded-lg shadow-md  text-black hover:bg-[#8B5E3C] hover:text-white transition mb-2 md:mb-0"
          >
            Edit Profile
          </button>
          <button
            onClick={handleSignOut}
            className="bg-red-400 text-black px-5 py-2  rounded-lg shadow-md hover:bg-red-600 transition  mb-2 md:mb-0"
          >
            Sign Out
          </button>
        </div>
      </div>
      <div className=" shadow-lg rounded-lg ">
      <img src={petimg} alt="Pet" class="hidden md:block" />
      </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-xl font-bold mb-4 text-center">Edit Profile</h2>
            <div className="flex flex-col items-center">
              <img
                src={newProfilePic}
                alt="Profile Preview"
                className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border px-3 py-2 rounded-md mb-4"
              />
            </div>

            <input
               type="text"
               name="name"
              value={editedUser.name}
              onChange={handleChange}
               placeholder="Enter Name"
               className="w-full p-2 border rounded-md mb-2"
           />

            <input
              type="email"
              name="email"
             value={editedUser.email}
             onChange={handleChange}
            placeholder="Enter Email"
           className="w-full p-2 border rounded-md mb-2"
        />
      <input
        type="text"
        name="contact"
        value={editedUser.contact}
        onChange={handleChange}
       placeholder="Enter Contact"
      className="w-full p-2 border rounded-md mb-2"
    />
   <div className="flex justify-end space-x-2">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

<div className="min-h-screen py-10 px-5 md:mb-0">
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-4 text-green-600">🐶 Adopted Pets</h2>
        {adoptedPets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {adoptedPets.map((pet) => (
              <div key={pet.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">{pet.name}</h3>
                  <p className="text-gray-600">{pet.type} - {pet.age}</p>
                  <p className="text-pink-600 font-semibold">Price: ₹{pet.price}</p>
                  <button
                    onClick={() => removeAdoptedPet(pet.id)}
                    className="mt-3 px-4 py-2 bg-red-400 text-black rounded-lg w-full hover:bg-red-600 transition"
                  >
                    Unadopt
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No adopted pets yet.</p>
        )}
      </div>
   <div className="max-w-6xl mx-auto md:mb-0">
        <h2 className="text-3xl font-bold mb-4 text-pink-600">❤ Favorite Pets</h2>
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((pet) => (
              <div key={pet.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">{pet.name}</h3>
                  <p className="text-gray-600">{pet.type} - {pet.age}</p>
                  <p className="text-pink-600 font-semibold">Price: ₹{pet.price}</p>
                  <button
                    onClick={() => removeFavorite(pet.id)}
                    className="mt-3 px-4 py-2 bg-gray-400 text-white rounded-lg w-full hover:bg-gray-500 transition"
                  >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No favorite pets yet.</p>
        )}
      </div>
    </div>
</div>
  );
};




export default UserDashboard;
