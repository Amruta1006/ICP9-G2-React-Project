import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-md py-4 px-6 flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-800">PetAdopt</h2>
      <ul className="flex space-x-6">
        <li><Link to="/" className="text-gray-700 hover:text-blue-500 font-medium">Home</Link></li>
        <li><Link to="/adoptpet" className="text-gray-700 hover:text-blue-500 font-medium">Adopt a Pet</Link></li>
        <li><Link to="/howtoadopt" className="text-gray-700 hover:text-blue-500 font-medium">How to Adopt</Link></li>
        <li><Link to="/petdetails" className="text-gray-700 hover:text-blue-500 font-medium">Pet Details</Link></li>
        <li><Link to="/successstories" className="text-gray-700 hover:text-blue-500 font-medium">Success Stories</Link></li>
        <li><Link to="/userdashboard" className="text-gray-700 hover:text-blue-500 font-medium">Dashboard</Link></li>
        <li><Link to="/contactus" className="text-gray-700 hover:text-blue-500 font-medium">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
