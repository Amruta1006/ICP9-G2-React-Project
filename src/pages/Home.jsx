import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer"; 
const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/HomeImages/Pet-1.jpg')" }} 
      >
      </div>
    </div>
  );
};

export default Home;
