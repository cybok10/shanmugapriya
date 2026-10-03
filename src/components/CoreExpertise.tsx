import React, { useState } from 'react';
import {
  GraduationCap,
  UserCheck,
  Target,
  MessageSquare,
  BarChart3,
  Database,
  FileText,
  FileSpreadsheet,
} from 'lucide-react';
import { CORE_EXPERTISE, CoreExpertiseItem } from '../data/portfolioData';

const iconMap = {
  GraduationCap,
  UserCheck,
  Target,
  MessageSquare,
  BarChart3,
  Database,
  FileText,
  FileSpreadsheet,
};

export const CoreExpertise: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Counselling & Sales' | 'Data & Technical'>('All');

  const filteredItems = activeFilter === 'All'
    ? CORE_EXPERTISE
    : CORE_EXPERTISE.filter((item) => item.category === activeFilter);

  return (
    <section id="expertise" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Core Expertise
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              Specialized skill set combining proactive student guidance and admissions workflow with analytical data reporting.
            </p>
          </div>

          {/* Interactive filter control (functional button tabs) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg self-start md:self-auto border border-slate-200/80 dark:border-slate-800">
            {(['All', 'Counselling & Sales', 'Data & Technical'] as const).map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const IconComponent = iconMap[item.iconName];
            return (
              <div
                key={item.id}
                className="group p-6 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-blue-100/70 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 tracking-[-0.02em] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-[1.62] tracking-[-0.011em]">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-800/60 text-[11px] font-medium text-slate-400 dark:text-slate-500">
                  {item.category}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
