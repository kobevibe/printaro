import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#030812] rounded-t-[4rem] px-6 lg:px-24 py-16 mt-12 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
          <div className="text-2xl font-heading font-bold tracking-tight text-white flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-corporate-accent2 to-corporate-accent1 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#030812]"></div>
            </div>
            Printaro
          </div>
          <p className="text-white/50 text-sm max-w-sm font-sans leading-relaxed">
            Премиальное изготовление печатей и штампов в Ташкенте. Мы ценим ваше время и корпоративные стандарты. Работаем без задержек.
          </p>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 w-fit mt-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono text-white/50 tracking-widest uppercase">System Operational</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold mb-2">Навигация</h4>
          <a href="#features" className="text-white/50 hover:text-white transition-colors text-sm">Услуги</a>
          <a href="#protocol" className="text-white/50 hover:text-white transition-colors text-sm">Процесс</a>
          <a href="#stats" className="text-white/50 hover:text-white transition-colors text-sm">О компании</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold mb-2">Контакты</h4>
          <a href="tel:+998900000000" className="text-white/50 hover:text-white transition-colors text-sm">+998 (90) 000-00-00</a>
          <a href="mailto:info@printaro.uz" className="text-white/50 hover:text-white transition-colors text-sm">info@printaro.uz</a>
          <span className="text-white/50 text-sm">г. Ташкент, Сергелийский район</span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-white/30 text-xs gap-4">
        <p>© {new Date().getFullYear()} Printaro. Все права защищены.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
          <a href="#" className="hover:text-white transition-colors">Договор оферты</a>
        </div>
      </div>
    </footer>
  );
}
