import './App.css';

import React from 'react';
import Homepage from './components/Homepage';
import './index.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Homepage />
      <Navbar />
      <SearchBar />
      <ImageGrid />
    </div>
  );
}


export default App;