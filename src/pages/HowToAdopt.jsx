import React from "react";
import { FaPaw, FaSearch, FaClipboardCheck, FaHome } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

function HowToAdopt() {
    <div className="min-h-screen flex flex-col">
    {/* Main Content */}
    <div className="bg-gradient-to-b from-pink-100 to-white py-16 flex-grow">
      <h1 className="text-5xl font-bold text-center text-black mb-6">How to Adopt a Pet</h1>

      <p className="text-center text-black text-lg max-w-3xl mx-auto mb-12">
          Adopting a pet is a life-changing experience. Follow these simple
           steps to bring home a new furry friend! 🐶🐱🐰...
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4">

        {[
            { icon: FaSearch, title: "1. Find a Pet", description: 
                "Browse our pets and choose the one that fits your home & lifestyle." },
            { icon: FaClipboardCheck, title: "2. Submit an Application", 
                description: "Fill out an adoption form to help us understand your needs." },

}