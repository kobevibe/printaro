import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Background
      gsap.to('.parallax-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Line Reveal
      gsap.fromTo('.reveal-line',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.manifesto-text',
            start: 'top 80%'
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-32 px-6 lg:px-24 bg-corporate-dark overflow-hidden flex items-center min-h-[80vh]">
      <div 
        className="parallax-bg absolute inset-0 z-0 bg-cover bg-center opacity-[0.03]" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2070&auto=format&fit=crop")' }}
      />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto manifesto-text flex flex-col gap-12">
        <div className="overflow-hidden">
          <p className="reveal-line text-2xl md:text-3xl text-white/50 font-sans tracking-wide">
            Большинство компаний сфокусированы на: <span className="text-white/80">бюрократии и долгих сроках.</span>
          </p>
        </div>
        
        <div className="overflow-hidden">
          <h2 className="reveal-line text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tight leading-tight">
            Мы сфокусированы на:{' '}
            <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-corporate-accent2 to-corporate-accent1 italic pr-4 pb-4">
              скорости и качестве.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
