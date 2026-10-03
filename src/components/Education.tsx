import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, BookCheck } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Technical undergraduate engineering foundation providing algorithmic and database rigor.
          </p>
        </div>

        <div className="max-w-3xl">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/40">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-[-0.025em]">
                    {EDUCATION_DATA.degree}
                  </h3>
                  <p className="text-base font-semibold text-blue-700 dark:text-blue-400 tracking-[-0.01em]">
                    {EDUCATION_DATA.field}
                  </p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 tracking-[-0.01em] mt-0.5">
                    {EDUCATION_DATA.institution}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{EDUCATION_DATA.location}</span>
                  </div>
                </div>
              </div>

              {/* Graduation date & CGPA */}
              <div className="flex flex-row sm:flex-col items-start sm:items-end justify-between sm:justify-start gap-2 pt-2 sm:pt-0">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Graduated {EDUCATION_DATA.graduationDate}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded text-xs font-bold text-blue-800 dark:text-blue-300">
                  <Award className="w-3.5 h-3.5" />
                  <span>CGPA: {EDUCATION_DATA.cgpa} / 10.0</span>
                </div>
              </div>
            </div>

            {/* Academic highlights */}
            <div className="pt-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <BookCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Foundational Technical Competencies</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Coursework in Computer Science Engineering emphasizing database management systems, relational structures, data structures, and computer networking. This foundational training provides analytical discipline for both banking SQL data analysis and cybersecurity academy advisory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
