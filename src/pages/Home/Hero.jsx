// Clean & simple arrow function HeroPage.jsx
import React, { useState } from "react";
const Hero = () => {
    const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    
  }
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden mt-[60px]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-[url('https://i.ibb.co/SDcxBNsZ/Rectangle-1.png')]" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold">
          Find Your Perfect Home
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90">
          Browse thousands of listings in your favorite city.
        </p>

        <div className="mt-8 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-full shadow-xl overflow-hidden w-full">
            <input
            value={query}
              type="text"
              placeholder="Search city..."
              className="flex-1 px-4 py-3 text-gray-700 outline-none"
              onChange={(e) => setQuery(e.target.value)}
            />

            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
