import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-[2rem] px-6 py-3 flex items-center gap-8 ${
        isScrolled
          ? 'bg-corporate-primary/80 backdrop-blur-xl border border-white/10 shadow-lg'
          : 'bg-transparent border border-transparent'
      }`}
    >
      <div className="text-xl font-heading font-bold tracking-tight text-white flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gradient-accent flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-corporate-dark"></div>
        </div>
        Printaro
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
        <a href="#features" className="hover:text-white transition-colors hover:-translate-y-[1px]">Услуги</a>
        <a href="#stats" className="hover:text-white transition-colors hover:-translate-y-[1px]">О нас</a>
        <a href="#protocol" className="hover:text-white transition-colors hover:-translate-y-[1px]">Процесс</a>
      </div>

      <button className="magnetic-btn px-6 py-2 rounded-full border border-corporate-accent2/30 text-white text-sm font-medium overflow-hidden group">
        <span className="relative z-10 flex items-center gap-2">
          Связаться с нами
        </span>
      </button>
    </nav>
  );
}
