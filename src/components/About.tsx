import React from 'react';
import { UserCheck, ShieldCheck, HeartHandshake, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { PERSONAL_INFO, PROFESSIONAL_SUMMARY } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full neu-inset-sm text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Discover My Mission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Empowering students and aspiring professionals to find clarity, build confidence, and master communication in the technology and cybersecurity landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 3D Profile Card */}
          <div className="lg:col-span-5 flex">
            <TiltCard
              maxTilt={8}
              depth={16}
              className="w-full neu-raised rounded-3xl p-7 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-300/40 dark:border-slate-700/40 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {PERSONAL_INFO.title}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-2xl neu-inset flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <UserCheck className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {PROFESSIONAL_SUMMARY}
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Cybersecurity learning pathway advisory</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Student onboarding & ID management</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Target-driven counselling with consistent track record</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-300/40 dark:border-slate-700/40 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span>{PERSONAL_INFO.location.split(',')[0]}, India</span>
                <span>B.E. Comp Sci (8.3 CGPA)</span>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: 3 Floating Information Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Floating Card 1: Educational Counselling */}
            <TiltCard
              maxTilt={9}
              depth={14}
              className="neu-raised rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl neu-inset flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Student Guidance
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Advising prospective learners on foundational and advanced cybersecurity tracks, resolving career uncertainties, and orchestrating smooth admissions.
                </p>
              </div>
              <div className="pt-4 text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Career Advisory
              </div>
            </TiltCard>

            {/* Floating Card 2: Communication & Confidence */}
            <TiltCard
              maxTilt={9}
              depth={14}
              className="neu-raised rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl neu-inset flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Communication & Growth
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Fostering strong interpersonal communication, conversational confidence, and empathetic follow-up to support student retention and personal development.
                </p>
              </div>
              <div className="pt-4 text-[11px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                Soft Skills & Mentorship
              </div>
            </TiltCard>

            {/* Floating Card 3: Analytical Operations */}
            <TiltCard
              maxTilt={9}
              depth={14}
              className="neu-raised rounded-2xl p-6 flex flex-col justify-between sm:col-span-2"
            >
              <div className="sm:flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl neu-inset flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 sm:mb-0 shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                    Data Grounding & Problem Solving
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Bringing structured analytical discipline from banking operations at HDFC Bank (SQL queries, MIS reporting, Excel dashboards), applying precise metrics to educational workflow and lead management.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-300/40 dark:border-slate-700/40 flex items-center justify-between text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                <span>Silver Star Award Credential</span>
                <span className="font-mono text-slate-500 dark:text-slate-400">Structured Rigor</span>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};
