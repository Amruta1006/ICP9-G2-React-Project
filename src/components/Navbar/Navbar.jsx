import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#F5E6CA] shadow-md py-4 px-6 flex justify-between items-center">
      <h2 className="text-2xl font-bold text-black tracking-wide">The Pet Connection 🐾</h2>
      <ul className="flex space-x-6 font-semibold">
        <li><Link to="/" className="text-black hover:text-[#8B5E3C] transition duration-300">Home</Link></li>
        <li><Link to="/adoptpet" className="text-black hover:text-[#8B5E3C] transition duration-300">Adopt a Pet</Link></li>
        <li><Link to="/howtoadopt" className="text-black hover:text-[#8B5E3C] transition duration-300">How to Adopt</Link></li>
        <li><Link to="/petdetails" className="text-black hover:text-[#8B5E3C] transition duration-300">Pet Details</Link></li>
        <li><Link to="/successstories" className="text-black hover:text-[#8B5E3C] transition duration-300">Success Stories</Link></li>
        <li><Link to="/userdashboard" className="text-black hover:text-[#8B5E3C] transition duration-300">Dashboard</Link></li>
        <li><Link to="/aboutus" className="text-black hover:text-[#8B5E3C] transition duration-300">About us</Link></li>
        <li><Link to="/contactus" className="text-black hover:text-[#8B5E3C] transition duration-300">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
