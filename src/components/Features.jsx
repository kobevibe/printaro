import React from 'react';
import { useLang } from '../LanguageContext';

export default function Features() {
  const { t } = useLang();
  return (
    <section className="bg-white dark:bg-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-10 text-center">{t.featuresTitle}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-primary/5 flex flex-col items-center text-center group">
            <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">timer</span>
            <h4 className="font-bold mb-2">{t.feat1Title}</h4>
            <p className="text-sm text-slate-500">{t.feat1Desc}</p>
          </div>
          <div className="p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-primary/5 flex flex-col items-center text-center group">
            <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">draw</span>
            <h4 className="font-bold mb-2">{t.feat2Title}</h4>
            <p className="text-sm text-slate-500">{t.feat2Desc}</p>
          </div>
          <div className="p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-primary/5 flex flex-col items-center text-center group">
            <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">shield</span>
            <h4 className="font-bold mb-2">{t.feat3Title}</h4>
            <p className="text-sm text-slate-500">{t.feat3Desc}</p>
          </div>
          <div className="p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-primary/5 flex flex-col items-center text-center group">
            <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">gavel</span>
            <h4 className="font-bold mb-2">{t.feat4Title}</h4>
            <p className="text-sm text-slate-500">{t.feat4Desc}</p>
          </div>
          <div className="p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-primary/5 flex flex-col items-center text-center group">
            <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">calendar_today</span>
            <h4 className="font-bold mb-2">{t.feat5Title}</h4>
            <p className="text-sm text-slate-500">{t.feat5Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
