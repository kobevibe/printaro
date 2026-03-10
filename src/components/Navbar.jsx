import React from 'react';
import { useLang } from '../LanguageContext';

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="flex items-center p-4 justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl">sticker</span>
          <h1 className="text-xl font-black tracking-tight text-primary">Printaro</h1>
        </div>
        <div className="flex items-center gap-3">
          <a className="flex items-center justify-center p-2 text-primary" href="tel:+998900273535">
            <span className="material-symbols-outlined">call</span>
          </a>
          <button
            onClick={toggleLang}
            className="border-2 border-primary text-primary px-3 py-1.5 rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-colors"
          >
            {t.langToggle}
          </button>
        </div>
      </div>
    </header>
  );
}
