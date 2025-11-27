import React from 'react';
import { CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. Hero / Who We Are Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary-50/20 via-white to-white overflow-hidden">
        {/* Abstract Background Pattern (Same as Home) */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary-50 to-primary-100 text-primary-800 text-xs font-semibold uppercase tracking-wide mb-6 border border-primary-100">
                Established 2018
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-950 mb-6 tracking-tight leading-tight">
                We are <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-primary-800">SkyAstrall</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Great software requires more than just code. It requires a deep understanding of the business problems we are solving. We are a team of engineers, designers, and strategists passionate about digital transformation.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                 {[
                  'Client-Centric Approach', 
                  'Agile Methodology', 
                  'Top-Tier Engineering Talent',
                  'Transparent Communication'
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-slate-800 font-medium">
                    <CheckCircle className="text-primary-600 mr-3 flex-shrink-0" size={20} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 transform rotate-3 rounded-3xl opacity-20 blur-lg"></div>
              <img 
                src="https://picsum.photos/600/600?random=20" 
                alt="Office team working" 
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square border border-white/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
                { label: 'Years Experience', value: '15+' },
                { label: 'Projects Delivered', value: '100+' },
                { label: 'Team Members', value: '45' },
                { label: 'Global Clients', value: '30+' }
            ].map((stat, i) => (
                <div key={i} className="group">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800 mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Founder Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Leadership</h2>
            <p className="mt-4 text-lg text-slate-600">Meet the visionary behind SkyAstrall.</p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col md:flex-row group hover:shadow-2xl transition-shadow duration-300">
            {/* Image Side */}
            <div className="md:w-2/5 relative h-96 md:h-auto overflow-hidden">
              <img 
                src="https://picsum.photos/800/800?random=founder" 
                alt="Elena Rostova" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent md:bg-none"></div>
              <div className="absolute bottom-6 left-6 md:hidden text-white">
                <h3 className="text-2xl font-bold">Elena Rostova</h3>
                <p className="opacity-90">Founder & CEO</p>
              </div>
            </div>

            {/* Text Side */}
            <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
              <div className="hidden md:block mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Elena Rostova</h3>
                <p className="text-primary-600 font-semibold text-lg tracking-wide uppercase">Founder & CEO</p>
              </div>
              
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Elena began her career as a backend engineer at major Silicon Valley tech giants before realizing her true passion lay in building products from zero to one.
                </p>
                <p>
                  With a Masters in Computer Science from MIT and over 15 years of industry experience, Elena founded SkyAstrall to bring enterprise-grade engineering practices to ambitious startups and growing businesses.
                </p>
                <blockquote className="border-l-4 border-primary-300 pl-4 italic text-slate-700 my-6">
                  "I believe that technology should empower people, not complicate their lives. At SkyAstrall, every line of code we write is aimed at simplifying the complex."
                </blockquote>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                 <img src="https://picsum.photos/60/60?random=sig" alt="Signature" className="h-10 opacity-40 grayscale" /> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};