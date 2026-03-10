import React from 'react';
import { useLang } from '../LanguageContext';

const productData = [
  {
    id: 1,
    nameKey: 'COLOP R 3040/R 40 (Металл)',
    descKey: 'prod1Desc',
    image: '/product-1.jpg'
  },
  {
    id: 2,
    nameKey: 'Colop R40',
    descKey: 'prod2Desc',
    image: '/product-2.jpg'
  },
  {
    id: 3,
    nameKey: 'COLOP R 2045',
    descKey: 'prod3Desc',
    image: '/product-3.jpg'
  },
  {
    id: 4,
    nameKey: 'Colop Mouse R40',
    descKey: 'prod4Desc',
    image: '/product-4.jpg'
  },
  {
    id: 5,
    nameKey: 'Цвета Colop R40',
    descKey: 'prod5Desc',
    image: '/product-5.jpg'
  },
  {
    id: 6,
    nameKey: 'Рамки для печатей',
    descKey: 'prod6Desc',
    image: '/product-6.jpg'
  },
];

export default function Products() {
  const { t } = useLang();
  return (
    <section id="products" className="py-20 px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h3 className="text-3xl font-black mb-4">{t.productsTitle}</h3>
          <p className="text-slate-500 max-w-md">{t.productsDesc}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((product) => (
            <div key={product.id} className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-primary/5 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
              <div className="aspect-square rounded-2xl bg-slate-100 dark:bg-slate-800 mb-4 overflow-hidden relative">
                <img alt={product.nameKey} className="absolute inset-0 w-full h-full object-cover" src={product.image}/>
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-lg mb-2">{product.nameKey}</h5>
                <p className="text-sm text-slate-500 mb-6">{t[product.descKey]}</p>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-primary font-black text-xl">{t.priceLabel}</span>
                <button className="bg-primary/10 text-primary p-2 rounded-lg hover:bg-primary hover:text-white transition-colors">
                  <span className="material-symbols-outlined">shopping_cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
