import React, { useState } from 'react';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, MapPin, Award } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface TimelineItem {
  year: string;
  role: string;
  company: string;
  period: string;
  isCurrent: boolean;
  points: string[];
  tag: string;
}

const MILESTONES: TimelineItem[] = [
  {
    year: '2026 – PRESENT',
    role: 'Academy Counsellor – Cybersecurity',
    company: 'Cybersecurity Training Academy',
    period: 'April 2, 2026 – Present',
    isCurrent: true,
    tag: 'Current Role',
    points: [
      'Student counselling',
      'Admissions & enrolment',
      'Student ID creation',
      'Lead follow-up',
      'Student onboarding',
      'Target achievement (met in month 1 & sustained)',
    ],
  },
  {
    year: '2024 – 2025',
    role: 'Sales Officer – Data Handling & Analysis',
    company: 'HDFC Bank Ltd., Chennai',
    period: 'August 2024 – July 2025',
    isCurrent: false,
    tag: 'Banking Operations',
    points: [
      'SQL & data handling',
      'MIS reporting to Zonal Head',
      'Excel analysis & PivotTables',
      'Dashboard preparation',
      'KPI tracking',
      'Financial reporting & Silver Star Award',
    ],
  },
];

export const Experience: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number>(0);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full neu-inset-sm text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Concise interactive 3D timeline highlighting leadership in educational counselling and banking analytics.
          </p>
        </div>

        {/* 3D Vertical Timeline */}
        <div className="relative">
          {/* Central Neumorphic Vertical Bar */}
          <div
            aria-hidden="true"
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-3 rounded-full neu-inset hidden sm:block"
          />

          <div className="space-y-12 sm:space-y-16">
            {MILESTONES.map((item, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeNode === index;

              return (
                <div
                  key={item.year}
                  onMouseEnter={() => setActiveNode(index)}
                  className={`relative flex flex-col sm:flex-row items-center gap-6 sm:gap-12 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline 3D Center Node */}
                  <div
                    className={`z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'neu-raised-lg scale-110 text-blue-600 dark:text-blue-400 ring-4 ring-blue-500/20'
                        : 'neu-raised text-slate-500 dark:text-slate-400'
                    } hidden sm:flex absolute left-1/2 -translate-x-1/2`}
                  >
                    <Briefcase className="w-5 h-5" />
                  </div>

                  {/* Date & Period Indicator */}
                  <div
                    className={`w-full sm:w-1/2 text-left ${
                      isEven ? 'sm:text-left sm:pl-8' : 'sm:text-right sm:pr-8'
                    }`}
                  >
                    <span className="inline-block px-3 py-1 rounded-full neu-inset-sm font-mono text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {item.year}
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {item.period}
                    </p>
                  </div>

                  {/* 3D Neumorphic Experience Card */}
                  <div className="w-full sm:w-1/2">
                    <TiltCard
                      maxTilt={8}
                      depth={16}
                      className={`neu-raised rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
                        item.isCurrent
                          ? 'ring-2 ring-blue-500/30'
                          : ''
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div>
                          <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                            {item.tag}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                            {item.role}
                          </h3>
                        </div>
                        <div className="w-8 h-8 rounded-full neu-inset flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                      </div>

                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                        {item.company}
                      </p>

                      {/* Concise Points List */}
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </TiltCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
