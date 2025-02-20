import React, { useState, useEffect } from "react";
import petimg from "../assets/HomeImages/Petimg.jpg";

const UserDashboard = () => {
  const [user, setUser] = useState({ name: "", email: "", contact: "", profilePic: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProfilePic, setNewProfilePic] = useState("");
  const [editedUser, setEditedUser] = useState({ ...user });
  const [favorites, setFavorites] = useState([]);
  const [adoptedPets, setAdoptedPets] = useState([]);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
      setNewProfilePic(savedUser.profilePic || "https://via.placeholder.com/100");
    }

    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const storedAdoptedPets = JSON.parse(localStorage.getItem("adoptedPets")) || [];
    setFavorites(storedFavorites);
    setAdoptedPets(storedAdoptedPets);
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

  const handleCloseModal = () => setIsModalOpen(false);

  const handleChange = (e) => setEditedUser({ ...editedUser, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setNewProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const updatedUser = { ...editedUser, profilePic: newProfilePic };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsModalOpen(false);
  };

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((pet) => pet.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeAdoptedPet = (id) => {
    const updatedAdoptedPets = adoptedPets.filter((pet) => pet.id !== id);
    setAdoptedPets(updatedAdoptedPets);
    localStorage.setItem("adoptedPets", JSON.stringify(updatedAdoptedPets));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fdfaf3] p-5 md:p-10">
      <div className="flex flex-col md:flex-row md:justify-between items-center bg-[#fffdf9] shadow-lg rounded-lg p-5 border-1 border-gray-400">
        <div className="text-center md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Your Dashboard</h2>
          <div className="flex flex-col items-center mt-4">
            <img src={user.profilePic || "https://via.placeholder.com/100"} alt="Profile" className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-gray-300 shadow-md" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mt-2">{user.name || "Guest User"}</h3>
            <p className="text-gray-600">{user.email || "No email available"}</p>
            <p className="text-gray-600">Contact: {user.contact || "Not provided"}</p>
          </div>
          <div className="mt-4 flex flex-col justify-center md:flex-row md:space-x-4">
            <button onClick={handleEditClick} className="bg-[#efd394] px-4 py-2 rounded-lg shadow-md text-black hover:bg-[#8B5E3C] hover:text-white transition">Edit Profile</button>
            <button onClick={handleSignOut} className="bg-red-400 text-black px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition mt-2 md:mt-0">Sign Out</button>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img src={petimg} alt="Pet" className="w-full rounded-2xl" />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold text-center">Edit Profile</h2>
            <div className="flex flex-col items-center mt-4">
              <img src={newProfilePic} alt="Profile Preview" className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4" />
              <input type="file" accept="image/*" onChange={handleImageChange} className="w-full border px-3 py-2 rounded-md mb-4" />
            </div>
            <input type="text" name="name" value={editedUser.name} onChange={handleChange} placeholder="Enter Name" className="w-full p-2 border rounded-md mb-2" />
            <input type="email" name="email" value={editedUser.email} onChange={handleChange} placeholder="Enter Email" className="w-full p-2 border rounded-md mb-2" />
            <input type="text" name="contact" value={editedUser.contact} onChange={handleChange} placeholder="Enter Contact" className="w-full p-2 border rounded-md mb-2" />
            <div className="flex justify-end space-x-2">
              <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save</button>
              <button onClick={handleCloseModal} className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;