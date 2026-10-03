import React from 'react';
import { Languages as LanguagesIcon, Globe } from 'lucide-react';
import { LANGUAGES } from '../data/portfolioData';

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-20 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
            Multilingual Communication
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Languages
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Proficiency across regional and national languages enabling seamless engagement with diverse student cohorts and pan-India professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LANGUAGES.map((lang) => (
            <div
              key={lang.language}
              className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900/40">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded">
                    {lang.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {lang.language}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {lang.proficiency}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 dark:text-slate-500">
                Verified Proficiency
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
