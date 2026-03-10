import React from 'react';
import { useLang } from '../LanguageContext';

export default function Location() {
  const { t } = useLang();
  return (
    <section className="py-20 px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div className="rounded-3xl overflow-hidden shadow-xl border border-primary/10 h-[400px]">
          <img alt="Наш адрес в Ташкенте" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1NHN3kBVclAUgErc_CIpwueO5c4-PfgqOEwVlMQKjcJHIJafeL-x1E96RVCPdeKG2cFZFCls2WrrN7cknYa7yjBeem7y3FykMC4H7uvGkAnvwelNcbldKgfa43tXBHlu8XPx2Nw7ZVLgGGm-p6LriOCz07Vt5ZIaPzIItVrEljbB-k_n-pONZPSEbV4-BfJKhkALxb-yDA_p9PKJnmcM2ZyZZ2WuxgfrggqGZYUYwUcds5Z28fS2bCtSKNdmwrDnZb7S1Xcccv23i"/>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-black mb-6">{t.locationTitle}</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div>
                <p className="font-bold">{t.addressLabel}</p>
                <a href="https://maps.app.goo.gl/Q4fixZNx1eN5wRXM9" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">улица Сугалли-ота, 69</a>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <div>
                <p className="font-bold">{t.hoursLabel}</p>
                <p className="text-slate-500">{t.hoursValue}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary">call</span>
              <div>
                <p className="font-bold">{t.phoneLabel}</p>
                <a href="tel:+998900273535" className="block text-slate-500 hover:text-primary transition-colors">+998 90 027 35 35</a>
                <a href="tel:+998903505766" className="block text-slate-500 hover:text-primary transition-colors">+998 90 350 57 66</a>
              </div>
            </div>
          </div>
          <a href="https://maps.app.goo.gl/Q4fixZNx1eN5wRXM9" target="_blank" rel="noopener noreferrer" className="mt-10 bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-shadow shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined">navigation</span> {t.directionsBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
