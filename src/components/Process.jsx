import React from 'react';
import { useLang } from '../LanguageContext';

export default function Process() {
  const { t } = useLang();
  return (
    <>
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-black mb-16">{t.processTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-6 backdrop-blur-sm border border-white/30">1</div>
              <h4 className="text-xl font-bold mb-4">{t.step1Title}</h4>
              <p className="text-white/80">{t.step1Desc}</p>
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-6 backdrop-blur-sm border border-white/30">2</div>
              <h4 className="text-xl font-bold mb-4">{t.step2Title}</h4>
              <p className="text-white/80">{t.step2Desc}</p>
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-6 backdrop-blur-sm border border-white/30">3</div>
              <h4 className="text-xl font-bold mb-4">{t.step3Title}</h4>
              <p className="text-white/80">{t.step3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-slate-900 border-y border-primary/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around gap-12 text-center">
          <div>
            <p className="text-5xl font-black text-primary mb-2">15</p>
            <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">{t.stat1Label}</p>
          </div>
          <div>
            <p className="text-5xl font-black text-primary mb-2">10 500+</p>
            <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">{t.stat2Label}</p>
          </div>
          <div>
            <p className="text-5xl font-black text-primary mb-2">100%</p>
            <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">{t.stat3Label}</p>
          </div>
        </div>
      </section>
    </>
  );
}
