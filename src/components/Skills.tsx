import React, { useState } from 'react';
import {
  GraduationCap,
  UserCheck,
  MessageSquare,
  Target,
  Trophy,
  Database,
  FileSpreadsheet,
  BarChart3,
  FileText,
  Layers,
  PenTool,
  BrainCircuit,
  Filter,
} from 'lucide-react';
import { TiltCard } from './TiltCard';

interface SkillItem {
  id: string;
  name: string;
  category: 'Counselling & Business' | 'Data & Technical' | 'Professional';
  icon: React.ElementType;
  description: string;
}

const SKILLS_LIST: SkillItem[] = [
  {
    id: 'student-counselling',
    name: 'Student Counselling',
    category: 'Counselling & Business',
    icon: GraduationCap,
    description: 'Guiding learners toward suitable cybersecurity and technical learning paths with empathetic advice.',
  },
  {
    id: 'admissions-enrolment',
    name: 'Admissions & Enrolment',
    category: 'Counselling & Business',
    icon: UserCheck,
    description: 'Overseeing student onboarding, batch allocation, student ID creation, and record management.',
  },
  {
    id: 'communication',
    name: 'Communication',
    category: 'Professional',
    icon: MessageSquare,
    description: 'Articulate verbal and written communication across student advisories, team syncs, and follow-ups.',
  },
  {
    id: 'sales',
    name: 'Sales & Advisory',
    category: 'Counselling & Business',
    icon: Target,
    description: 'Consultative educational sales identifying student aspirations and matching specialized programs.',
  },
  {
    id: 'target-achievement',
    name: 'Target Achievement',
    category: 'Counselling & Business',
    icon: Trophy,
    description: 'Met monthly goals in month 1 and consistently sustained targets through systematic enquiry follow-up.',
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Data & Technical',
    icon: Database,
    description: 'Writing and optimizing advanced SQL queries for accurate data extraction and database integrity.',
  },
  {
    id: 'ms-excel',
    name: 'MS Excel & PivotTables',
    category: 'Data & Technical',
    icon: FileSpreadsheet,
    description: 'Advanced spreadsheets, PivotTables, formula logic, and daily recovery performance tracking.',
  },
  {
    id: 'data-handling',
    name: 'Data Handling',
    category: 'Data & Technical',
    icon: Layers,
    description: 'Managing complex datasets, maintaining transactional records, and ensuring zero-defect data hygiene.',
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    category: 'Data & Technical',
    icon: BarChart3,
    description: 'Evaluating recovery performance, loss exposure metrics, and reporting key performance indicators.',
  },
  {
    id: 'mis-reporting',
    name: 'MIS Reporting',
    category: 'Data & Technical',
    icon: FileText,
    description: 'Synthesizing executive Management Information System reports presented directly to Zonal leadership.',
  },
  {
    id: 'database-mgmt',
    name: 'Database Management',
    category: 'Data & Technical',
    icon: Database,
    description: 'Relational database schema understanding and data extraction founded on Computer Science degree.',
  },
  {
    id: 'technical-writing',
    name: 'Technical Writing',
    category: 'Professional',
    icon: PenTool,
    description: 'Drafting structured documentation, report briefs, learner communication notes, and guidelines.',
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    category: 'Professional',
    icon: BrainCircuit,
    description: 'Deconstructing student doubts, operational bottlenecks, and reporting discrepancies with logic.',
  },
];

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredSkills = activeFilter === 'All'
    ? SKILLS_LIST
    : SKILLS_LIST.filter((s) => s.category === activeFilter);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full neu-inset-sm text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & Proficiencies
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Interactive 3D representation of verified capabilities in student counselling, communication, data analysis, and SQL.
          </p>

          {/* 3D Segmented Category Filter Tabs */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {['All', 'Counselling & Business', 'Data & Technical', 'Professional'].map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'neu-button-pressed text-blue-600 dark:text-blue-400 font-extrabold scale-95'
                      : 'neu-button text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Skills Grid with Dynamic Hover Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <TiltCard
                key={skill.id}
                maxTilt={10}
                depth={18}
                className="neu-raised rounded-2xl p-6 flex flex-col justify-between cursor-default group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl neu-inset flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-300/40 dark:border-slate-700/40 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="font-medium">{skill.category}</span>
                  <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400">Verified</span>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
