import React from 'react';
import { useLang } from '../LanguageContext';
import logo from '../assets/logo.png';

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="flex items-center p-4 justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Printaro Logo" className="h-10 w-auto rounded-full shadow-sm" />
          <h1 className="text-xl font-black tracking-tight text-primary">Printaro</h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-xs sm:text-sm hover:bg-primary hover:text-white transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-base sm:text-lg">grid_view</span>
            <span>{t.heroBtn2}</span>
          </button>
          <button
            onClick={toggleLang}
            className="border-2 border-primary text-primary px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg font-bold text-xs sm:text-sm hover:bg-primary hover:text-white transition-colors"
          >
            {t.langToggle}
          </button>
        </div>
      </div>
    </header>
  );
}
