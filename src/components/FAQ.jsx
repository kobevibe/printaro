import React from 'react';
import { useLang } from '../LanguageContext';

export default function FAQ() {
  const { t } = useLang();
  return (
    <section className="py-20 px-4 max-w-3xl mx-auto">
      <h3 className="text-3xl font-black mb-12 text-center">{t.faqTitle}</h3>
      <div className="space-y-4">
        <div className="p-6 rounded-2xl border border-primary/10 bg-white dark:bg-slate-900">
          <h5 className="font-bold mb-4">{t.faq1Q}</h5>
          <p className="text-slate-500 text-sm leading-relaxed">{t.faq1A}</p>
        </div>
        <div className="p-6 rounded-2xl border border-primary/10 bg-white dark:bg-slate-900">
          <h5 className="font-bold mb-4">{t.faq2Q}</h5>
          <p className="text-slate-500 text-sm leading-relaxed">{t.faq2A}</p>
        </div>
        <div className="p-6 rounded-2xl border border-primary/10 bg-white dark:bg-slate-900">
          <h5 className="font-bold mb-4">{t.faq3Q}</h5>
          <p className="text-slate-500 text-sm leading-relaxed">{t.faq3A}</p>
        </div>
      </div>
    </section>
  );
}
