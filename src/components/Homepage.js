// In src/components/Homepage.js
import React from 'react';
import backgroundImage from '../assets/backround.jpg'; 

const Homepage = () => {
  return (
    <div
      className="min-h-screen bg-gray-900 text-white"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Navbar */}
      <nav className="flex justify-center items-center px-8 py-6 bg-gray-600 bg-opacity-100 width-3/5 backdrop-filter backdrop-blur-md rounded-lg">
        <div className="flex items-center space-x-4">
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

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h1 className="text-6xl font-semibold text-black mb-4 tracking-wider">
          Made for Creatives
        </h1>
        <p className="text-lg text-black mb-6">
          A discovery engine for creatives
        </p>
        <button className="px-6 py-2 text-lg font-medium rounded-full bg-green-200 text-black hover:bg-green-300 transition">
          Get Inspired
        </button>
      </main>
    </div>
  );
};

export default Homepage;