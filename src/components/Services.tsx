import React from 'react';
import { Compass, BookA, Users, MessageCircleHeart, ArrowUpRight, Sparkles } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  badge: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'education-counselling',
    number: '01',
    title: 'Education Counselling',
    description:
      'Helping students understand learning opportunities, identify suitable training paths, and make informed educational decisions.',
    icon: Compass,
    badge: 'Guidance & Admissions',
  },
  {
    id: 'english-teaching',
    number: '02',
    title: 'English Teaching',
    description:
      'Supporting learners in improving English communication, confidence, vocabulary, pronunciation, and everyday speaking skills.',
    icon: BookA,
    badge: 'Language & Fluency',
  },
  {
    id: 'interpersonal-skills',
    number: '03',
    title: 'Interpersonal Skills',
    description:
      'Helping learners develop confidence, interpersonal awareness, teamwork, and professional interaction skills.',
    icon: Users,
    badge: 'Soft Skills Coaching',
  },
  {
    id: 'communication-skills',
    number: '04',
    title: 'Communication Skills',
    description:
      'Helping students improve verbal communication, presentation, conversation, and professional communication.',
    icon: MessageCircleHeart,
    badge: 'Confidence & Articulation',
  },
];

export const Services: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full neu-inset-sm text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Learner & Student Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Services & Mentorship
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Tailored guidance programs empowering students and early-career learners with confidence, language fluency, and career clarity.
          </p>
        </div>

        {/* 4 3D Neumorphic Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <TiltCard
                key={service.id}
                maxTilt={9}
                depth={20}
                className="neu-raised rounded-3xl p-7 sm:p-8 flex flex-col justify-between group cursor-pointer hover:neu-raised-lg transition-all"
                onClick={scrollToContact}
              >
                <div>
                  {/* Top Bar with Number & 3D Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl neu-inset flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 stroke-[1.8]" />
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-300 dark:text-slate-700 select-none">
                      {service.number}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {service.badge}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-6 border-t border-slate-300/40 dark:border-slate-700/40 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Connect for guidance
                  </span>
                  <div className="w-8 h-8 rounded-full neu-raised-sm flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
