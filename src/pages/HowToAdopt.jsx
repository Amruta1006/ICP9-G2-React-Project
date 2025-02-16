import React from "react";
import { FaPaw, FaSearch, FaClipboardCheck, FaHome } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

function HowToAdopt() {
  return(
    <div className="min-h-screen flex flex-col">
    
    <div className="bg-gradient-to-b from-pink-100 to-white py-16 flex-grow">
      <h1 className="text-5xl font-bold text-center text-black mb-6">How to Adopt a Pet</h1>

      <p className="text-center text-black text-lg max-w-3xl mx-auto mb-12">
          Adopting a pet is a life-changing experience. Follow these simple
           steps to bring home a new furry friend! 🐶🐱🐰
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2
         lg:grid-cols-4 gap-10 px-4">

        {[
            { icon: FaSearch, title: "1. Find a Pet", description: 
                "Browse our pets and choose the one that fits your home & lifestyle." },
            { icon: FaClipboardCheck, title: "2. Submit an Application", 
                description: "Fill out an adoption form to help us understand your needs." },

                { icon: FaPaw, title: "3. Meet & Greet", description: 
                  "Meet the pet in person to see if it's the perfect match!" },
                { icon: FaHome, title: "4. Welcome Home!", description:
                   "Finalize the adoption and bring your new pet home. 🎉" }

              ].map((step, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 flex 
                flex-col items-center text-center hover:shadow-xl transition 
                transform hover:-translate-y-2">
                <step.icon className="text-5xl text-black" />
                <h3 className="text-2xl font-bold mt-4 text-black">{step.title}</h3>
                <p className="text-black mt-2">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-[#F5E6CA] py-12 text-center rounded-xl max-w-4xl
         mx-auto px-6 shadow-lg hover:shadow-xl transition">
        <h2 className="text-4xl font-bold text-black">Start Your Adoption Journey Today!</h2>
        <p className="text-lg mt-2 text-black">Find your perfect furry friend and give them
           a loving home.</p>
          <button
            onClick={() => toast.success("Redirecting to pet listings...")}
            className="mt-6 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800
             hover:scale-105 transition duration-300 shadow-md"
            >
                  Browse Pets
          </button>
        </div>
      </div>

    
      <Toaster />
    </div>
  );
}

export default HowToAdopt;
