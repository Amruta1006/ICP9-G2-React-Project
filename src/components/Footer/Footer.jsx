import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-6 mt-10 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section - About */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">The Pet Connection 🐾</h2>
          <p className="mt-2 text-sm">
            Connecting loving homes with adorable pets. Adopt, love, and make a difference today!
          </p>
        </div>

        {/* Center Section - Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/adoptpet" className="hover:text-blue-500">Adopt a Pet</Link></li>
            <li><Link to="/howtoadopt" className="hover:text-blue-500">How to Adopt</Link></li>
            <li><Link to="/contactus" className="hover:text-blue-500">Contact Us</Link></li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center space-x-2">
              <MapPin size={18} /> <span>123 Pet Street, Paw City, USA</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={18} /> <span>+1 234 567 890</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} /> <span>contact@petconnection.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="text-center mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Follow Us</h3>
        <div className="flex justify-center space-x-4 mt-3">
          <a href="#" className="text-gray-600 hover:text-blue-500"><Facebook size={24} /></a>
          <a href="#" className="text-gray-600 hover:text-blue-500"><Twitter size={24} /></a>
          <a href="#" className="text-gray-600 hover:text-blue-500"><Instagram size={24} /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-6">
        &copy; 2025 The Pet Connection. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
