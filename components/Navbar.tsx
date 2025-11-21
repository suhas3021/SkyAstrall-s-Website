import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Left: Logo */}
          <div className="flex-shrink-0 z-10">
            <Link to="/" className="flex items-center group">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-800 via-primary-600 to-primary-800 tracking-tight font-zain group-hover:from-primary-600 group-hover:to-primary-900 transition-all duration-300">SkyAstrall</span>
            </Link>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8 z-0">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-primary-600'
                    : 'text-slate-600 hover:text-primary-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: CTA & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 z-10">
            <a
              href="#contact"
              className="hidden md:block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary-600/20"
            >
              Get a Quote
            </a>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-primary-900 p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-primary-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 shadow-md"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};