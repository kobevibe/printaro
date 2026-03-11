import React from 'react';
import { useLang } from '../LanguageContext';

export default function Footer() {
  const { t } = useLang();
  return (
    <>
      <footer className="bg-slate-900 text-white pt-16 pb-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/src/assets/logo.png" alt="Printaro Logo" className="h-12 w-auto rounded-full" />
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
    </>
  );
}
