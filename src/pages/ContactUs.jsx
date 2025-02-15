import React from "react";
import Navbar from "../components/Navbar/Navbar";

function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <Navbar />
      <div className="container mx-auto p-6 max-w-5xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8 underline decoration-wavy decoration-pink-400">
          Contact Us
        </h1>
      </div>
    </div>
  );
}

export default ContactUs;
