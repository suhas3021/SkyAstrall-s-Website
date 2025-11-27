import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../constants";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleGetQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToContact: true } });
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-primary-900 via-primary-600 to-primary-900 text-white text-center py-3 px-4 text-sm font-medium tracking-wide relative z-50">
        <span>Try our new product Guardian MCP now</span>
        <a
          href="https://guardianmcp.dev/"
          className="ml-2 inline-flex items-center underline decoration-primary-300/50 hover:decoration-white transition-all hover:text-white"
        >
          Check it out →
        </a>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 supports-[backdrop-filter]:bg-white/60 w-full relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 relative">
            {/* Left: Logo */}
            <div className="flex-shrink-0 z-10">
              <Link to="/" className="flex items-center group">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-800 via-primary-600 to-primary-800 tracking-tight font-zain group-hover:from-primary-600 group-hover:to-primary-900 transition-all duration-300">
                  SkyAstrall
                </span>
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
                      ? "text-primary-600"
                      : "text-slate-600 hover:text-primary-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right: CTA & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4 z-10">
              <button
                type="button"
                onClick={handleGetQuote}
                className="hidden md:block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary-600/20"
              >
                Get a Quote
              </button>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  type="button"
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
                      ? "bg-primary-50 text-primary-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-primary-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleGetQuote}
                  className="block w-full text-center bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 shadow-md"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
