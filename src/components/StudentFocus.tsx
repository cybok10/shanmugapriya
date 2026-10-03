import React from 'react';
import { BookOpen, Repeat, MessageSquare, ShieldCheck, TrendingUp, ArrowRight, ArrowDown } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface StepItem {
  step: string;
  title: string;
  icon: React.ElementType;
  description: string;
}

const STEPS: StepItem[] = [
  {
    step: '01',
    title: 'LEARN',
    icon: BookOpen,
    description: 'Understand foundational concepts & cybersecurity career tracks.',
  },
  {
    step: '02',
    title: 'PRACTICE',
    icon: Repeat,
    description: 'Active drills, real-world case simulations & hands-on problem solving.',
  },
  {
    step: '03',
    title: 'COMMUNICATE',
    icon: MessageSquare,
    description: 'Express ideas clearly, master professional English & converse with ease.',
  },
  {
    step: '04',
    title: 'BUILD CONFIDENCE',
    icon: ShieldCheck,
    description: 'Overcome self-doubt through constructive feedback & mentorship.',
  },
  {
    step: '05',
    title: 'GROW',
    icon: TrendingUp,
    description: 'Advance in education, secure admissions & excel in team environments.',
  },
];

export const StudentFocus: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full neu-inset-sm text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Learner Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Helping Students Learn & Grow
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            A structured developmental pathway designed to take learners from uncertainty to articulation and long-term career confidence.
          </p>
        </div>

        {/* 3D Visual Flow Pipeline: LEARN -> PRACTICE -> COMMUNICATE -> BUILD CONFIDENCE -> GROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <TiltCard
                key={step.title}
                maxTilt={10}
                depth={14}
                className="neu-raised rounded-3xl p-6 flex flex-col justify-between text-center relative group"
              >
                <div>
                  {/* Step Badge */}
                  <div className="w-8 h-8 rounded-full neu-inset mx-auto flex items-center justify-center font-mono text-xs font-black text-blue-600 dark:text-blue-400 mb-4">
                    {step.step}
                  </div>

                  {/* 3D Icon */}
                  <div className="w-12 h-12 rounded-2xl neu-raised mx-auto flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="text-sm font-extrabold tracking-wider text-slate-900 dark:text-white mb-2 uppercase">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Flow indicator between steps on desktop */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full neu-inset items-center justify-center text-blue-600 dark:text-blue-400">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
