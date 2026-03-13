import React from 'react';
import { useLang } from '../LanguageContext';

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden pt-12 pb-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">{t.expressBadge}</span>
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            {t.heroTitle1} <span className="text-primary">{t.heroTime}</span> {t.heroTitle2}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
            {t.heroDesc}
          </p>
          <a
            href="tel:+998900273535"
            className="bg-primary text-white h-14 px-8 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
          >
            {t.nav4} <span className="material-symbols-outlined">call</span>
          </a>        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-primary/5 border border-primary/10">
            <img alt="Коллекция профессиональных печатей COLOP" className="w-full h-full object-cover" src="/hero-stamps.png"/>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-primary/10 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                <span className="material-symbols-outlined text-green-600">verified</span>
              </div>
              <div>
                <p className="text-sm font-bold">{t.officialBadge}</p>
                <p className="text-xs text-slate-500">{t.certifiedBadge}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
