import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const btnRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        [textRef1.current, textRef2.current, textRef3.current],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15 }
      ).fromTo(
        btnRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.6"
      );

      // Interactive Gradient
      const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        gsap.to('.hero-gradient', {
          x: x + '%',
          y: y + '%',
          duration: 1.5,
          ease: 'power2.out'
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] flex items-end overflow-hidden pb-24 md:pb-32 px-6 lg:px-24">
      {/* Background with Gradient Mesh */}
      <div className="absolute inset-0 z-0 bg-corporate-dark">
        <div 
          className="hero-gradient absolute -top-[20%] -right-[10%] w-[80vw] h-[80vw] rounded-full blur-[120px] opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00C2FF 0%, #0055FF 50%, transparent 80%)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark via-corporate-dark/80 to-transparent z-0" />
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        <div ref={textRef1} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
          <div className="w-2 h-2 rounded-full bg-corporate-accent2 animate-pulse" />
          <span className="text-sm font-mono text-corporate-accent2 tracking-wide uppercase">Printaro Official</span>
        </div>

        <h1 className="text-white max-w-4xl flex flex-col gap-2 mb-8">
          <span ref={textRef2} className="text-4xl md:text-6xl font-heading font-bold tracking-tight">
            Изготовим печать за
          </span>
          <span ref={textRef3} className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-corporate-accent2 to-corporate-accent1 pr-4 py-2">
            30 минут.
          </span>
        </h1>

        <div ref={btnRef}>
          <a href="#features" className="magnetic-btn inline-flex items-center justify-center px-8 py-4 rounded-full bg-corporate-light text-corporate-dark font-semibold group cursor-pointer">
            <span className="relative z-10 flex items-center gap-2">
              Заказать срочно
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
