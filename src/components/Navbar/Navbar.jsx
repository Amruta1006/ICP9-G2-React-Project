import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F5E6CA] shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <h2 className="text-2xl font-bold text-black tracking-wide">The Pet Connection 🐾</h2>

      {/* Hamburger Icon - Mobile */}
      <button
        className="md:hidden text-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 font-semibold">
        <li><Link to="/" className="text-black hover:text-[#8B5E3C] transition duration-300">Home</Link></li>
        <li><Link to="/adoptpet" className="text-black hover:text-[#8B5E3C] transition duration-300">Adopt a Pet</Link></li>
        <li><Link to="/howtoadopt" className="text-black hover:text-[#8B5E3C] transition duration-300">How to Adopt</Link></li>
        <li><Link to="/petdetails" className="text-black hover:text-[#8B5E3C] transition duration-300">Pet Details</Link></li>
        <li><Link to="/successstories" className="text-black hover:text-[#8B5E3C] transition duration-300">Success Stories</Link></li>
        <li><Link to="/userdashboard" className="text-black hover:text-[#8B5E3C] transition duration-300">Dashboard</Link></li>
        <li><Link to="/aboutus" className="text-black hover:text-[#8B5E3C] transition duration-300">About us</Link></li>
        <li><Link to="/contactus" className="text-black hover:text-[#8B5E3C] transition duration-300">Contact Us</Link></li>
      </ul>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-[#F5E6CA] shadow-md md:hidden flex flex-col items-center space-y-4 py-4">
          <li><Link to="/" className="text-black hover:text-[#8B5E3C] transition duration-300" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/adoptpet" className="text-black hover:text-[#8B5E3C] transition duration-300" onClick={() => setIsOpen(false)}>Adopt a Pet</Link></li>
          <li><Link to="/howtoadopt" className="text-black hover:text-[#8B5E3C] transition duration-300" onClick={() => setIsOpen(false)}>How to Adopt</Link></li>
          <li><Link to="/petdetails" className="text-black hover:text-[#8B5E3C] transition duration-300" onClick={() => setIsOpen(false)}>Pet Details</Link></li>
          <li><Link to="/successstories" className="text-black hover:text-[#8B5E3C] transition duration-300" onClick={() => setIsOpen(false)}>Success Stories</Link></li>
          <li><Link to="/userdashboard" className="text-black hover:text-[#8B5E3C] transition duration-300" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
          <li><Link to="/aboutus" className="text-black hover:text-[#8B5E3C] transition duration-300" onClick={() => setIsOpen(false)}>About us</Link></li>
          <li><Link to="/contactus" className="text-black hover:text-[#8B5E3C] transition duration-300" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
