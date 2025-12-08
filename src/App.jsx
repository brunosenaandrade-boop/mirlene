import { useState, useEffect } from 'react';
// Components will be imported here
import HeroSection from './components/HeroSection';
import Biography from './components/Biography';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <HeroSection />
      <Biography />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
