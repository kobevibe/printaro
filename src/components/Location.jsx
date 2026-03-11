import React from 'react';
import { useLang } from '../LanguageContext';

export default function Location() {
  const { t } = useLang();
  return (
    <section className="py-20 px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl font-black mb-10">{t.locationTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
              <div>
                <p className="font-bold">{t.addressLabel}</p>
                <a href="https://maps.app.goo.gl/Q4fixZNx1eN5wRXM9" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">улица Сугалли-ота, 69</a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-primary text-4xl">schedule</span>
              <div>
                <p className="font-bold">{t.hoursLabel}</p>
                <p className="text-slate-500">{t.hoursValue}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-primary text-4xl">call</span>
              <div>
                <p className="font-bold">{t.phoneLabel}</p>
                <a href="tel:+998900273535" className="block text-slate-500 hover:text-primary transition-colors">+998 90 027 35 35</a>
                <a href="tel:+998903505766" className="block text-slate-500 hover:text-primary transition-colors">+998 90 350 57 66</a>
              </div>
            </div>
          </div>
          <a href="https://maps.app.goo.gl/Q4fixZNx1eN5wRXM9" target="_blank" rel="noopener noreferrer" className="bg-primary text-white h-14 px-12 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-shadow shadow-lg shadow-primary/30 w-full md:w-auto">
            <span className="material-symbols-outlined">navigation</span> {t.directionsBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
