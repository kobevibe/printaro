import React from 'react';
import { useLang } from '../LanguageContext';

export default function Footer() {
  const { t } = useLang();
  return (
    <>
      <footer className="bg-slate-900 text-white pt-16 pb-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">sticker</span>
              <h2 className="text-2xl font-black tracking-tight">Printaro</h2>
            </div>
            <p className="text-slate-400 max-w-md">{t.footerDesc}</p>
          </div>
          <div>
            <h6 className="font-bold mb-6 uppercase text-sm tracking-widest text-primary">{t.navLabel}</h6>
            <ul className="space-y-4 text-slate-400">
              <li><a className="hover:text-white transition-colors" href="#">{t.nav1}</a></li>
              <li><a className="hover:text-white transition-colors" href="#">{t.nav2}</a></li>
              <li><a className="hover:text-white transition-colors" href="#">{t.nav3}</a></li>
              <li><a className="hover:text-white transition-colors" href="#">{t.nav4}</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-6 uppercase text-sm tracking-widest text-primary">{t.legalLabel}</h6>
            <ul className="space-y-4 text-slate-400">
              <li><a className="hover:text-white transition-colors" href="#">{t.legal1}</a></li>
              <li><a className="hover:text-white transition-colors" href="#">{t.legal2}</a></li>
              <li><a className="hover:text-white transition-colors" href="#">{t.legal3}</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>{t.copyright}</p>
        </div>
      </footer>

      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-t border-primary/10 md:hidden">
        <div className="flex justify-around items-center h-16">
          <a className="flex flex-col items-center justify-center text-primary" href="#">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-bold">{t.mobileHome}</span>
          </a>
          <a className="flex flex-col items-center justify-center text-slate-400" href="#">
            <span className="material-symbols-outlined">grid_view</span>
            <span className="text-[10px] font-bold">{t.mobileProducts}</span>
          </a>
          <div className="relative -top-6">
            <button className="bg-primary text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center">
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
          <a className="flex flex-col items-center justify-center text-slate-400" href="#">
            <span className="material-symbols-outlined">chat</span>
            <span className="text-[10px] font-bold">{t.mobileOrder}</span>
          </a>
          <a className="flex flex-col items-center justify-center text-slate-400" href="#">
            <span className="material-symbols-outlined">location_on</span>
            <span className="text-[10px] font-bold">{t.mobileContact}</span>
          </a>
        </div>
      </nav>
    </>
  );
}
