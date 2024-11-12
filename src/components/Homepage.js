// In src/components/Homepage.js
import React from 'react';
import backgroundImage from '../assets/backround.jpg';

const Homepage = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      ></div>
      <div className=" relative z-10">
        <nav className="absolute top-0 left-0 right-0 w-1/2 mx-auto mt-8 px-6 py-3 bg-black bg-opacity-60 backdrop-filter backdrop-blur-md text-xl font-semibold text-white tracking-wider rounded-full">
          <div className="flex justify-center items-center space-x-6">
            <span className="text-lg font-bold">🌟 comet</span>
            <ul className="flex space-x-6 text-gray-300">
              <li><a href="#manifesto">Manifesto</a></li>
              <li><a href="#discover">Discover</a></li>
              <li><a href="#login">Login</a></li>
            </ul>
            <button className="px-4 py-2 rounded-full bg-green-200 text-gray-800 font-semibold hover:bg-green-300">
              Signup
            </button>
          </div>
        </nav>


        <main className="flex flex-col items-center justify-center h-[80vh] text-center ">
          <h1 className="text-6xl font-semibold text-white mb-4 tracking-wider mt-60">
            Made for Creatives
          </h1>
          <p className="text-lg text-white mb-6">
            A discovery engine for <button className="text-xl font-semibold text-white mb-4 tracking-wider bg-black bg-opacity-20 rounded-full px-4 py-2 border border-white">
              Creatives
            </button>
          </p>
          <button className="px-6 py-2 text-lg font-medium rounded-full bg-white text-black hover:bg-green-300 transition">
            Get Inspired
          </button>
        </main>
      </div>
    </div>
  );
};

export default Homepage;
