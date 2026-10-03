import React from 'react';
import { BookOpen, GraduationCap, BookMarked, Puzzle, Sparkles, MessageSquareHeart, Heart } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface InterestItem {
  name: string;
  emoji: string;
  tag: string;
  icon: React.ElementType;
  description: string;
}

const INTERESTS_DATA: InterestItem[] = [
  {
    name: 'Reading Books',
    emoji: '📚',
    tag: 'Knowledge Expansion',
    icon: BookOpen,
    description: 'Immersing in literature, non-fiction, and professional development to continually broaden perspectives.',
  },
  {
    name: 'Training & Studying',
    emoji: '🎓',
    tag: 'Academic Focus',
    icon: GraduationCap,
    description: 'Engaging with structured cybersecurity training, educational methodologies, and learner mentorship.',
  },
  {
    name: 'Narrating Stories',
    emoji: '📖',
    tag: 'Communication Art',
    icon: BookMarked,
    description: 'Using narrative techniques to explain complex concepts simply, engage students, and build conversational rapport.',
  },
  {
    name: 'Solving Puzzles',
    emoji: '🧩',
    tag: 'Analytical Mindset',
    icon: Puzzle,
    description: 'Exercising pattern recognition, algorithmic deduction, and systematic problem solving.',
  },
  {
    name: 'Learning New Skills',
    emoji: '🌱',
    tag: 'Continuous Growth',
    icon: Sparkles,
    description: 'Proactively acquiring fresh technical tools, reporting frameworks, and teaching practices.',
  },
  {
    name: 'Communication & Personal Development',
    emoji: '💬',
    tag: 'Human Connection',
    icon: MessageSquareHeart,
    description: 'Cultivating emotional intelligence, active listening, and empowering young professionals to speak with conviction.',
  },
];

export const Interests: React.FC = () => {
  return (
    <section id="interests" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full neu-inset-sm text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-rose-500" />
            <span>Passions & Curiosities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Interests & Learning
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            The intellectual and personal pursuits that inform empathetic counselling, analytical discipline, and lifelong learning.
          </p>
        </div>

        {/* 3D Floating Interactive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERESTS_DATA.map((item) => {
            const Icon = item.icon;
            return (
              <TiltCard
                key={item.name}
                maxTilt={12}
                depth={22}
                className="neu-raised rounded-3xl p-7 flex flex-col justify-between group cursor-default hover:neu-raised-lg transition-all"
              >
                <div>
                  {/* Top Bar with Emoji & 3D Neumorphic Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl neu-inset flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-2xl filter drop-shadow-sm group-hover:scale-125 transition-transform duration-300 select-none">
                      {item.emoji}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-300/40 dark:border-slate-700/40 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Lifelong Pursuit</span>
                  <span className="text-blue-600 dark:text-blue-400">● Active</span>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
