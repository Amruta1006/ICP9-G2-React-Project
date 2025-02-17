import React from "react";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F5E6CA] text-black py-8 px-6 shadow-inner font-[Poppins]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">The Pet Connection 🐾</h2>
          <p className="mt-2 text-sm font-semibold">
            Connecting loving homes with adorable pets. Adopt, love, and make a difference today!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-2 font-semibold">
            <li><Link to="/" className="hover:text-[#8B5E3C] transition duration-300">Home</Link></li>
            <li><Link to="/adoptpet" className="hover:text-[#8B5E3C] transition duration-300">Adopt a Pet</Link></li>
            <li><Link to="/howtoadopt" className="hover:text-[#8B5E3C] transition duration-300">How to Adopt</Link></li>
            <li><Link to="/contactus" className="hover:text-[#8B5E3C] transition duration-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>
          <ul className="mt-2 space-y-2 font-semibold">
            <li className="flex justify-center md:justify-start items-center space-x-2">
              <MapPin size={18} /> <span>123 Pet Street, Paw City, Pune</span>
            </li>
            <li className="flex justify-center md:justify-start items-center space-x-2">
              <Phone size={18} /> <span>8080692940</span>
            </li>
            <li className="flex justify-center md:justify-start items-center space-x-2">
              <Mail size={18} /> <span>contact@petconnection.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-[#8B5E3C] transition duration-300"><Facebook size={24} /></a>
            <a href="#" className="hover:text-[#8B5E3C] transition duration-300"><Twitter size={24} /></a>
            <a href="#" className="hover:text-[#8B5E3C] transition duration-300"><Instagram size={24} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm font-bold mt-6">
        &copy; 2025 The Pet Connection. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
