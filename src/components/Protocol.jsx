import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Выбор Формата',
    desc: 'Определение типа печати и оснастки под ваши задачи. От карманных до профессиональных автоматических с высоким ресурсом.',
    Animation: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-32 h-32 animate-spin-slow">
          <div className="absolute inset-0 border-2 border-corporate-accent2/30 rounded-full border-t-corporate-accent2" />
          <div className="absolute inset-4 border-2 border-corporate-accent1/30 rounded-full border-b-corporate-accent1" style={{ animationDirection: 'reverse' }} />
        </div>
      </div>
    )
  },
  {
    num: '02',
    title: 'Подготовка Макета',
    desc: 'Наши дизайнеры бесплатно сверстают макет по всем стандартам ГОСТ и вашим корпоративным требованиям без лишних задержек.',
    Animation: () => (
      <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
        <div className="w-full h-48 relative" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
          <div className="absolute top-0 left-0 w-full h-[2px] bg-corporate-accent2 shadow-[0_0_20px_#00C2FF] animate-scan" />
        </div>
      </div>
    )
  },
  {
    num: '03',
    title: 'Производство',
    desc: 'Высокоточная лазерная гравировка резины и сборка печати. Ваш заказ готов к официальной работе уже через 30 минут.',
    Animation: () => (
      <div className="w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 100 50" className="w-64 stroke-corporate-accent1 fill-transparent stroke-2 drop-shadow-[0_0_10px_#0055FF]">
          <path d="M0,25 L20,25 L30,5 L40,45 L50,15 L60,35 L70,25 L100,25" className="animate-pulse-path" />
        </svg>
      </div>
    )
  }
];

export default function Protocol() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;
        
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          endTrigger: cards[cards.length - 1],
          end: 'top top',
          animation: gsap.to(card.querySelector('.card-inner'), {
            scale: 0.92,
            opacity: 0.4,
            filter: 'blur(10px)',
            ease: 'none'
          }),
          scrub: true
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="bg-corporate-dark pt-12">
      <style dangerouslySetInnerHTML={{__html: `
        .animate-spin-slow { animation: spin 8s linear infinite; }
        .animate-scan { animation: scan 2.5s linear infinite; }
        @keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
        .animate-pulse-path { stroke-dasharray: 200; stroke-dashoffset: 200; animation: dash 2s ease-in-out infinite alternate; }
        @keyframes dash { to { stroke-dashoffset: 0; } }
      `}} />
      <div className="relative">
        {steps.map((step, i) => (
          <div 
            key={i} 
            ref={el => cardsRef.current[i] = el}
            className="h-screen w-full flex items-center justify-center sticky top-0 px-4 md:px-12 lg:px-24"
          >
            <div className="card-inner w-full max-w-6xl h-[65vh] md:h-[75vh] bg-corporate-primary border border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row transform-gpu">
              <div className="flex-1 p-8 md:p-16 lg:p-20 flex flex-col justify-center gap-4 md:gap-6 z-10">
                <div className="text-corporate-accent2 font-mono text-xl md:text-2xl tracking-widest">[{step.num}]</div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">{step.title}</h2>
                <p className="text-base md:text-lg text-white/70 max-w-md font-sans leading-relaxed">{step.desc}</p>
              </div>
              <div className="flex-1 bg-[#050D20] border-t md:border-t-0 md:border-l border-white/5 relative flex items-center justify-center p-8 md:p-12 overflow-hidden">
                <step.Animation />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
