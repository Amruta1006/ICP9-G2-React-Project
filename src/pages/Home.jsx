import React, { useState, useEffect } from "react";

const images = [
  "https://tse1.mm.bing.net/th?id=OIP.rQBkREchNA_ThoALOqeYVAHaE9&pid=Api&P=0&h=220",
  "https://tse3.mm.bing.net/th?id=OIP.qhH4E0xTI8j85u5lBEK0bwHaEK&pid=Api&P=0&h=220",
  "https://www.thesprucepets.com/thmb/6QlPa95jJ6LsWWmFaCaFZSFuhYE=/3300x2190/filters:no_upscale():max_bytes(150000):strip_icc()/white-hotot-rabbit-eating-grass-509265984-5c0da06546e0fb0001366ac0.jpg",
  "https://tse2.mm.bing.net/th?id=OIP.C5dhvdCSY5eZVumBau-cSQHaE8&pid=Api&P=0&h=220",
  "https://tse1.mm.bing.net/th?id=OIP.SJfkwPs7CPz7JpHvT2iH9wHaEJ&pid=Api&P=0&h=220",
  "https://tse3.mm.bing.net/th?id=OIP.5-hLeijT1xCxJGRrkBETtQHaE8&pid=Api&P=0&h=220",
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-[#f5f3eb]">
      {/* Hero Section */}
      <div className="relative w-full">
        <div
          className="w-full h-[450px] md:h-[550px] bg-cover bg-center brightness-95"
          style={{
            backgroundImage: "url('/assets/HomeImages/Pet-1.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white text-center px-4">
          <h1 className="text-2xl md:text-4xl font-bold drop-shadow-lg">
            Welcome to The Pet Connection 🐾
          </h1>
          <p className="mt-3 text-md md:text-lg drop-shadow-md max-w-2xl">
            Find loving homes for adorable pets. Adopt, love, and make a difference today!
          </p>
        </div>
      </div>

      {/* Slider Section */}
      <div className="mt-2 -mt-4 w-full max-w-5xl px-4 md:px-0">
  <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-800 mb-4">
    Find Your Perfect Pet Companion! 🐾
  </h2>


        {/* Slider Container */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-xl bg-[#eae0d5]">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 rounded-xl ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition"
          >
            ⬅
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition"
          >
            ➡
          </button>
        </div>

        {/* Dots Indicator */}
<div className="flex space-x-2 mt-3 mb-6 justify-center">
  {images.map((_, index) => (
    <div
      key={index}
      className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${
        index === current ? "bg-black" : "bg-gray-400"
      } transition-all duration-300`}
    />
  ))}
</div>

      </div>
    </div>
  );
};

export default Home;
