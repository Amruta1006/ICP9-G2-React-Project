import React from "react";
import { Link } from "react-router-dom";
import { Home, PawPrint, User, BookOpen, Phone, Heart, LayoutDashboard } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
          <PawPrint className="w-6 h-6 mr-2" />
          PetAdopt
        </Link>

        {/* Nav Links */}
        <div className="flex space-x-6">
          <Link to="/" className="flex items-center text-gray-700 hover:text-blue-600">
            <Home className="w-5 h-5 mr-1" /> Home
          </Link>
          <Link to="/adoptpet" className="flex items-center text-gray-700 hover:text-blue-600">
            <PawPrint className="w-5 h-5 mr-1" /> Adopt Pet
          </Link>
          <Link to="/howtoadopt" className="flex items-center text-gray-700 hover:text-blue-600">
            <BookOpen className="w-5 h-5 mr-1" /> How to Adopt
          </Link>
          <Link to="/petdetails" className="flex items-center text-gray-700 hover:text-blue-600">
            <Heart className="w-5 h-5 mr-1" /> Pet Details
          </Link>
          <Link to="/successstories" className="flex items-center text-gray-700 hover:text-blue-600">
            <Heart className="w-5 h-5 mr-1" /> Success Stories
          </Link>
          <Link to="/contactus" className="flex items-center text-gray-700 hover:text-blue-600">
            <Phone className="w-5 h-5 mr-1" /> Contact Us
          </Link>
          <Link to="/userdashboard" className="flex items-center text-gray-700 hover:text-blue-600">
            <LayoutDashboard className="w-5 h-5 mr-1" /> Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
