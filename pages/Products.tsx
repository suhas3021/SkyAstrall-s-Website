import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../constants';

export const Products: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-primary-50/30 via-slate-50/50 to-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="bg-gradient-to-br from-white to-slate-50/30 rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:from-primary-600 group-hover:to-primary-700 group-hover:text-white transition-all duration-300">
                <product.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary-950 mb-3">{product.name}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              <a 
                href={product.link} 
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group-hover:underline"
              >
                Learn More <ArrowUpRight size={18} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};