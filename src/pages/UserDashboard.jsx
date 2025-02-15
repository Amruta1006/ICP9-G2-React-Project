import React, { useState, useEffect } from "react";
import SignUp from "./SignUp";

const UserDashboard = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    profilePic: "",
  });

 
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Dashboard</h2>
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
        <div className="mt-6 space-x-4">
          <button
            onClick={handleEditClick}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Edit Profile
          </button>
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
          >
            Sign Out
          </button>
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



<div className="min-h-screen bg-gray-100 py-10 px-5">

      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-4 text-green-600">🐶 Adopted Pets</h2>
       
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-pink-600">❤️ Favorite Pets</h2>
       
      </div>
    </div>



</div>
  );
};

export default UserDashboard;

