import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ target, suffix, title }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useLayoutEffect(() => {
    let obj = { val: 0 };
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: counterRef.current,
        start: 'top 90%',
        onEnter: () => {
          gsap.to(obj, {
            val: target,
            duration: 2.5,
            ease: 'power3.out',
            onUpdate: () => setCount(Math.floor(obj.val))
          });
        },
        once: true
      });
    }, counterRef);
    return () => ctx.revert();
  }, [target]);

  return (
    <div ref={counterRef} className="flex flex-col items-center justify-center p-8 bg-corporate-primary/30 border border-white/5 rounded-[2rem] hover:border-corporate-accent2/30 transition-colors h-full">
      <div className="text-5xl md:text-7xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-corporate-accent2 to-corporate-accent1 mb-4">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/70 font-sans text-sm md:text-base text-center font-medium max-w-[200px]">
        {title}
      </div>
    </div>
  );
};

export default function Stats() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%'
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="stats" ref={containerRef} className="py-24 px-6 lg:px-24 max-w-7xl mx-auto w-full relative z-20 bg-corporate-dark">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stat-card">
          <Counter target={15} suffix="" title="Лет на рынке Узбекистана" />
        </div>
        <div className="stat-card">
          <Counter target={10538} suffix="+" title="Изготовленных печатей и штампов" />
        </div>
        <div className="stat-card">
          <Counter target={100} suffix="%" title="Официальное изготовление по ГОСТ" />
        </div>
      </div>
    </section>
  );
}
