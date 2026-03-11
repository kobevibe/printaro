import React from 'react';
import { useLang } from '../LanguageContext';

export default function Location() {
  const { t } = useLang();
  return (
    <section id="location" className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">{t.locationTitle}</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Card */}
          <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl shadow-primary/5 overflow-hidden border border-primary/10">
            <div className="relative h-64 bg-slate-100 dark:bg-slate-700">
              {/* Using a real Google Maps Embed for functionality */}
              <iframe
                title="Google Maps"
                className="w-full h-full grayscale-[0.2] contrast-125"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.6385750000003!2d69.1916!3d41.2588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE1JzMxLjctTiA2OcKwMTEnMjkuOCJF!5e0!3m2!1sen!2suz!4v1700000000000"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Live Workshop
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-start gap-5 mb-8">
                <div className="bg-primary/10 p-4 rounded-2xl">
                  <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Printaro Workshop</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    улица Сугалли-ота, 69, Чиланзарский район<br />
                    Ташкент, Узбекистан
                  </p>
                </div>
              </div>
              
              <a 
                href="https://maps.app.goo.gl/Q4fixZNx1eN5wRXM9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary/95 transition-all shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95"
              >
                <span className="material-symbols-outlined">directions</span>
                {t.directionsBtn}
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-8 space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="h-8 w-1 bg-primary rounded-full"></span>
                Contact Details
              </h3>
              
              <div className="grid gap-6">
                <div className="flex items-center gap-6 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-primary/5 shadow-sm">
                  <div className="bg-primary/10 p-4 rounded-2xl">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">{t.hoursLabel}</p>
                    <p className="font-bold text-lg">{t.hoursValue}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-primary/5 shadow-sm">
                  <div className="bg-primary/10 p-4 rounded-2xl">
                    <span className="material-symbols-outlined text-primary">call</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">{t.phoneLabel}</p>
                    <div className="space-y-1">
                      <a href="tel:+998900273535" className="block font-bold text-lg hover:text-primary transition-colors">+998 90 027 35 35</a>
                      <a href="tel:+998903505766" className="block font-bold text-lg hover:text-primary transition-colors">+998 90 350 57 66</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary to-blue-700 text-white shadow-2xl shadow-primary/20">
              <h4 className="text-xl font-bold mb-3">Questions?</h4>
              <p className="text-white/80 mb-6 text-sm">Our team is ready to help you with your layout and order via Phone.</p>
              <a 
                href="tel:+998900273535" 
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors"
              >
                <span className="material-symbols-outlined text-xl">call</span>
                Call for Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
