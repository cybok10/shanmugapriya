import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="neu-raised rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand & Titles */}
          <div className="space-y-1.5">
            <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
              Academy Counsellor | Trainer | Mentor
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">
              © 2026 {PERSONAL_INFO.name} · All Rights Reserved
            </p>
          </div>

          {/* Quick Actions & Back to top */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="neu-button px-4 py-2 rounded-full text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
            >
              Official Resume
            </button>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 rounded-full neu-button flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
