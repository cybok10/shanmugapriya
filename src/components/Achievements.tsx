import React from 'react';
import { Award, Target, Star, CheckCircle } from 'lucide-react';
import { AWARDS_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
            Recognition
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Awards & Key Achievements
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            Demonstrated performance milestones from banking operations and academy counselling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Achievement 1: Silver Star Award */}
          <div className="relative p-6 sm:p-8 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-200/60 dark:border-amber-800/50">
                  <Star className="w-6 h-6 fill-amber-500/20" />
                </div>
                <span className="text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded border border-amber-200 dark:border-amber-800/60">
                  Team Honor
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-[-0.025em] mb-1">
                Silver Star Award
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-400 tracking-[-0.01em] mb-3">
                HDFC Bank Ltd., Chennai
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-[1.68] tracking-[-0.012em]">
                Recognition for excellent contribution to the team, acknowledging operational dedication, reliable SQL data extraction, and executive reporting support.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Awarded during tenure as Sales Officer</span>
            </div>
          </div>

          {/* Achievement 2: Consistent Target Achievement */}
          <div className="relative p-6 sm:p-8 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200/60 dark:border-emerald-800/50">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-200 dark:border-emerald-800/60">
                  Performance Milestone
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-[-0.025em] mb-1">
                Consistent Target Achievement
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-400 tracking-[-0.01em] mb-3">
                Cybersecurity Training Academy
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-[1.68] tracking-[-0.012em]">
                Achieved the assigned target during the first month in the Academy Counsellor role and continued to achieve assigned targets consistently through structured learner outreach and admissions follow-ups.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Current Role Milestone (04/2026 – Present)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
