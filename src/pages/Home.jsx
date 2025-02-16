import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n"; // Import i18n configuration

const images = [
  "/assets/HomeImages/Pet-2.jpg",
  "/assets/HomeImages/Pet-3.jpg",
  "/assets/HomeImages/Pet-4.jpg",
  "/assets/HomeImages/Pet-5.jpg",
  "/assets/HomeImages/Pet-6.jpg",
  "/assets/HomeImages/Pet-7.jpg",
];

const Home = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-[#fdfaf3]">
      {/* Hero Section */}
      <div className="relative w-full">
        <div
          className="w-full h-[450px] md:h-[550px] bg-cover bg-center brightness-95"
          style={{ backgroundImage: "url('/assets/HomeImages/Pet-1.jpg')" }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold drop-shadow-lg">
            {t("welcome")}
          </h1>
          <p className="mt-3 text-md md:text-lg drop-shadow-md max-w-2xl">
            {t("intro")}
          </p>

          {/* Language Dropdown (Now Below Welcome Message) */}
          <div className="mt-4 bg-white px-3 py-1 rounded-lg shadow-md border border-gray-300">
            <select
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="border rounded px-2 py-1 text-gray-800 font-medium text-sm bg-gray-100 hover:bg-gray-200 cursor-pointer"
            >
              <option value="en">English</option>
              <option value="mr">मराठी</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full max-w-7xl px-6 md:px-12 lg:px-16 mt-10 flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
        {/* Left Side - Adoption Info */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("why_adopt")}
          </h2>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            {t("adopt_info")}
          </p>
        </div>

        {/* Right Side - Slider Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          {/* Slider Container */}
          <div className="relative w-full max-w-lg h-64 md:h-96 overflow-hidden rounded-2xl shadow-2xl bg-[#eae0d5]">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 rounded-2xl ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition"
            >
              ⬅
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition"
            >
              ➡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
