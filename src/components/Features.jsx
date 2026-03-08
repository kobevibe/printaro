import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ShufflerCard = () => {
  const [cards, setCards] = useState([
    { id: 1, text: 'Прием заявки' },
    { id: 2, text: 'Изготовление' },
    { id: 3, text: 'Выдача заказа' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newCards = [...prev];
        newCards.unshift(newCards.pop());
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-64 relative flex items-center justify-center">
      {cards.map((card, i) => {
        const scale = 1 - i * 0.1;
        const translateY = i * 20;
        const opacity = 1 - i * 0.3;
        const zIndex = 3 - i;
        
        return (
          <div
            key={card.id}
            className="absolute p-4 w-48 bg-corporate-primary border border-white/10 rounded-2xl shadow-xl flex items-center justify-center font-mono text-sm text-corporate-accent2"
            style={{
              transform: `translateY(${translateY}px) scale(${scale})`,
              opacity,
              zIndex,
              transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            {card.text}
          </div>
        );
      })}
    </div>
  );
};

const TypewriterCard = () => {
  const [text, setText] = useState('');
  const fullText = "> Анализ ТЗ...\n> Подготовка линий...\n> Утверждение макета.\n> ГОТОВО.";
  
  useEffect(() => {
    let currentIndex = 0;
    let timeout;
    
    const type = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(type, 100 + Math.random() * 50);
      } else {
        timeout = setTimeout(() => {
          currentIndex = 0;
          setText('');
          type();
        }, 4000);
      }
    };
    
    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-64 bg-corporate-dark/80 rounded-2xl p-6 border border-white/5 relative overflow-hidden flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-corporate-accent2 animate-pulse" />
        <span className="text-xs font-mono text-white/50 tracking-widest uppercase">Live Feed</span>
      </div>
      <pre className="font-mono text-sm text-corporate-accent2 whitespace-pre-wrap leading-relaxed">
        {text}
        <span className="w-2 h-4 bg-corporate-accent2 inline-block ml-1 animate-pulse align-middle" />
      </pre>
    </div>
  );
};

const SchedulerCard = () => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      tl.set(cursorRef.current, { x: 0, y: 150, opacity: 0 })
        .to(cursorRef.current, { opacity: 1, duration: 0.3 })
        .to(cursorRef.current, { x: 120, y: 40, duration: 1, ease: 'power2.inOut' })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to('.day-3', { backgroundColor: '#0055FF', color: '#fff', duration: 0.2 }, "-=0.2")
        .to(cursorRef.current, { x: 220, y: 180, duration: 1, ease: 'power2.inOut', delay: 0.5 })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to('.save-btn', { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 }, "-=0.2")
        .to('.save-btn', { backgroundColor: '#00C2FF', duration: 0.2 }, "-=0.1")
        .to(cursorRef.current, { opacity: 0, duration: 0.3, delay: 0.5 })
        .set('.day-3', { backgroundColor: 'transparent', color: 'rgba(255,255,255,0.5)' })
        .set('.save-btn', { backgroundColor: 'rgba(255,255,255,0.05)' });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-64 relative flex flex-col items-center justify-center w-full px-6">
      <div className="grid grid-cols-7 gap-2 w-full mb-8">
        {days.map((day, i) => (
          <div key={day} className={`day-${i} flex items-center justify-center h-10 rounded-lg text-xs font-mono text-white/50 border border-white/5 transition-colors`}>
            {day}
          </div>
        ))}
      </div>
      <div className="save-btn px-6 py-2 rounded-full border border-white/10 text-xs font-mono text-white/80 bg-white/5 transition-all">
        СОХРАНИТЬ ГАРАНТИЮ
      </div>
      
      {/* SVG Cursor */}
      <div ref={cursorRef} className="absolute top-0 left-0 w-8 h-8 z-10 pointer-events-none" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4L11 22L13.5 15.5L20 13L4 4Z" fill="#00C2FF" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default function Features() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.feature-card', 
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 0.8, 
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-24 px-6 lg:px-24 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="feature-card group relative bg-corporate-primary/40 border border-white/5 hover:border-corporate-accent1/50 rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 shadow-2xl hover:shadow-[0_10px_30px_rgba(0,85,255,0.15)] flex flex-col">
          <div className="mb-8">
            <h3 className="text-xl font-heading font-bold text-white mb-2">От 30 минут без задержек</h3>
            <p className="text-sm text-white/60 leading-relaxed font-sans">
              Настроенный конвейер производства. Мы не тратим время на бюрократию, ваш заказ идет в работу сразу после утверждения.
            </p>
          </div>
          <div className="mt-auto">
            <ShufflerCard />
          </div>
        </div>

        {/* Card 2 */}
        <div className="feature-card group relative bg-corporate-primary/40 border border-white/5 hover:border-corporate-accent2/50 rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 shadow-2xl hover:shadow-[0_10px_30px_rgba(0,194,255,0.15)] flex flex-col">
          <div className="mb-8">
            <h3 className="text-xl font-heading font-bold text-white mb-2">Бесплатно подготовим макет</h3>
            <p className="text-sm text-white/60 leading-relaxed font-sans">
              Вам не нужно быть дизайнером. Наши специалисты оперативно сверстают макет печати по корпоративным стандартам.
            </p>
          </div>
          <div className="mt-auto">
            <TypewriterCard />
          </div>
        </div>

        {/* Card 3 */}
        <div className="feature-card group relative bg-corporate-primary/40 border border-white/5 hover:border-corporate-accent1/50 rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 shadow-2xl hover:shadow-[0_10px_30px_rgba(0,85,255,0.15)] flex flex-col">
          <div className="mb-8">
            <h3 className="text-xl font-heading font-bold text-white mb-2">Гарантия качества</h3>
            <p className="text-sm text-white/60 leading-relaxed font-sans">
              Официальное изготовление. Мы гарантируем четкость оттиска и долговечность оснастки на каждую произведенную нами печать.
            </p>
          </div>
          <div className="mt-auto border border-white/5 rounded-2xl bg-corporate-dark">
            <SchedulerCard />
          </div>
        </div>

      </div>
    </section>
  );
}
