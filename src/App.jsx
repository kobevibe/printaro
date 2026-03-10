import React from 'react';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Products />
          <Process />
          <FAQ />
          <Location />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
