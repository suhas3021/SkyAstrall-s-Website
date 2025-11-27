import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

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
              <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-100 to-primary-200 font-zain">
                SkyAstrall
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 pr-4 max-w-md">
              Transforming ambitious ideas into intelligent digital reality. We
              build the software that powers the future of business.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Github, href: "https://github.com/skyAstrall/" },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/company/skyastrall/",
                },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
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
                <a
                  href="mailto:info@skyastrall.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  info@skyastrall.com
                </a>
              </div>
              <div className="flex items-center text-slate-400 md:justify-end">
                <Phone size={20} className="mr-3 text-primary-500 shrink-0" />
                <span>+91 8309960127</span>
              </div>
              <div className="flex items-start text-slate-400 md:justify-end">
                <MapPin
                  size={20}
                  className="mr-3 text-primary-500 shrink-0 mt-1"
                />
                <div className="md:text-right">
                  <p>Maha Sais Maruthi Chaya</p>
                  <p>Flat No. 303/404, 15-1-313</p>
                  <p>Netaji Marg, Nizampura</p>
                  <p>Near Rama Krishna Theatre</p>
                  <p>Warangal, Telangana - 506007</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} SkyAstrall Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
