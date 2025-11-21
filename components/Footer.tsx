import React from 'react';
import { Github, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 relative overflow-hidden border-t border-white/5">
       {/* Subtle background glow */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* Brand Column */}
          <div>
             <div className="mb-6">
              <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-100 to-primary-200 font-zain">SkyAstrall</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 pr-4 max-w-md">
              Transforming ambitious ideas into intelligent digital reality. We build the software that powers the future of business.
            </p>
            <div className="flex space-x-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="md:flex md:flex-col md:items-end">
            <h3 className="text-white font-bold text-lg mb-6">Get in Touch</h3>
            <div className="space-y-4">
                <div className="flex items-center text-slate-400 md:justify-end">
                    <Mail size={20} className="mr-3 text-primary-500 shrink-0" />
                    <a href="mailto:contact@skyastrall.com" className="hover:text-primary-400 transition-colors">contact@skyastrall.com</a>
                </div>
                 <div className="flex items-center text-slate-400 md:justify-end">
                    <Phone size={20} className="mr-3 text-primary-500 shrink-0" />
                    <span>+1 (555) 123-4567</span>
                </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} SkyAstrall Inc. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};