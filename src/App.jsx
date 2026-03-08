import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-corporate-dark text-white font-sans selection:bg-corporate-accent2/30 selection:text-white">
      <div className="noise-overlay"></div>
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
