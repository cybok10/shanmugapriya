import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenResume: () => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'services', label: 'SERVICES' },
  { id: 'interests', label: 'INTERESTS' },
  { id: 'contact', label: 'CONTACT' },
];

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenResume,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 px-3 sm:px-6 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Floating 3D Neumorphic Capsule Container */}
        <div
          className={`neu-raised rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 flex items-center justify-between gap-3 ${
            scrolled ? 'scale-[0.98] neu-raised-lg' : ''
          }`}
        >
          {/* Brand Name / Wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Shanmugapriya R Homepage"
          >
            {/* 3D Neumorphic Avatar Icon */}
            <div className="w-8 h-8 rounded-full neu-inset flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs group-hover:scale-105 transition-transform">
              SR
            </div>
            <span className="text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Desktop Navigation Items */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1.5"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 text-xs font-bold tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'neu-inset text-blue-600 dark:text-blue-400 font-extrabold scale-95'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:neu-raised-sm'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions: Resume + 3D Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* 3D Resume Button */}
            <button
              onClick={onOpenResume}
              className="neu-button px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 rounded-full flex items-center gap-1.5 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
              title="View & Download Official Resume"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span className="hidden sm:inline">Resume</span>
            </button>

            {/* 3D Neumorphic Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-8 h-8 rounded-full neu-button flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            {/* 3D Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="lg:hidden w-8 h-8 rounded-full neu-button flex items-center justify-center text-slate-700 dark:text-slate-200 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* 3D Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 neu-raised rounded-2xl p-4 animate-in fade-in zoom-in-95 duration-200 preserve-3d">
            <div className="space-y-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-150 flex items-center justify-between ${
                      isActive
                        ? 'neu-inset text-blue-600 dark:text-blue-400 font-extrabold'
                        : 'text-slate-700 dark:text-slate-200 hover:neu-raised-sm'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shadow-xs" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
