import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, PERSONAL_INFO } from '../constants';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (window.location.hash === href) {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }
  };

  return (
      <>
        <nav
            className={`fixed z-50 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2
          ${scrolled
                ? 'top-4 w-[90%] md:w-auto md:min-w-[600px] rounded-full bg-navy/80 backdrop-blur-xl border border-glass-border shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-3 px-6'
                : 'top-6 w-[95%] md:w-full max-w-7xl bg-transparent border-transparent py-4 px-6'
            }`}
        >
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <span className={`font-semibold tracking-wide text-lg transition-colors ${scrolled ? 'text-white' : 'text-slate-100'}`}>
                {PERSONAL_INFO.name}
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-2 mx-5">
              <div className={`flex items-center gap-1 rounded-full px-2 py-1 ${scrolled ? 'bg-white/5 border border-white/5' : ''}`}>
                {NAV_ITEMS.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        onClick={() => handleNavClick(item.href)}                        className="px-4 py-1.5 text-gray-300 hover:text-white text-sm font-medium hover:bg-white/10 rounded-full transition-all duration-200"
                    >
                      {item.label}
                    </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <a
                  href="#contact"
                  onClick={() => handleNavClick("#contact")}                  className="bg-maroon hover:bg-maroon-glow text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-[0_0_15px_rgba(120,0,0,0.3)] hover:shadow-[0_0_25px_rgba(120,0,0,0.6)]"
              >
                Kontakt
              </a>
            </div>

            <button
              className="md:hidden text-white p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <div className="fixed inset-0 z-40 bg-navy/95 backdrop-blur-xl pt-32 px-6 flex flex-col gap-6 animate-in fade-in duration-200">
              {NAV_ITEMS.map((item) => (
                  <a
                      key={item.label}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}                      className="text-gray-200 text-2xl font-light hover:text-maroon transition-colors"
                  >
                    {item.label}
                  </a>
              ))}
              <a
                  href="#contact"
                  onClick={() => handleNavClick("#contact")}                  className="bg-maroon text-white text-center py-4 rounded-xl font-medium mt-4 text-lg"
              >
                Kontakt
              </a>
            </div>
        )}
      </>
  );
};

export default Navigation;