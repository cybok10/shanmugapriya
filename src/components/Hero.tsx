import React, { useState, useRef } from 'react';
import {
  BookOpen,
  GraduationCap,
  MessageCircle,
  Lightbulb,
  Laptop,
  ArrowRight,
  Mail,
  Sparkles,
  ShieldCheck,
  User,
} from 'lucide-react';
import { AnimatedName } from './AnimatedName';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHoveringPortrait, setIsHoveringPortrait] = useState(false);
  const portraitRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const handleMouseMovePortrait = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!portraitRef.current) return;
    const rect = portraitRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((centerY - y) / centerY) * 12;
    const rotY = ((x - centerX) / centerX) * 12;
    setTilt({ x: rotX, y: rotY });
  };

  const handleMouseLeavePortrait = () => {
    setIsHoveringPortrait(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Background Soft Lighting Gradients (Subtle & Neumorphic) */}
      <div
        aria-hidden="true"
        className="absolute top-20 left-10 w-96 h-96 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-[130px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-400/10 dark:bg-cyan-600/10 blur-[130px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Animated Name, Title, Pitch & 3D Buttons */}
          <div className="lg:col-span-7 space-y-6">
            {/* 3D Neumorphic Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset-sm text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Dedicated Educator & Guidance Mentor</span>
            </div>

            {/* Special Name Typography Animation */}
            <div className="space-y-2">
              <AnimatedName name="Shanmugapriya R" className="text-4xl sm:text-5xl lg:text-6xl" />
              <p className="text-lg sm:text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
                Academy Counsellor | Trainer | Mentor
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium leading-[1.65] max-w-xl text-balance">
              Passionate about helping students learn, communicate confidently, and develop the skills needed for their personal and professional growth.
            </p>

            {/* Core Focus Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <span className="neu-raised-sm px-3 py-1 rounded-full text-slate-700 dark:text-slate-300">
                🎓 Cybersecurity Education
              </span>
              <span className="neu-raised-sm px-3 py-1 rounded-full text-slate-700 dark:text-slate-300">
                🗣️ Communication Coaching
              </span>
              <span className="neu-raised-sm px-3 py-1 rounded-full text-slate-700 dark:text-slate-300">
                📊 Data & SQL Foundation
              </span>
            </div>

            {/* 3D CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('about')}
                className="neu-accent-button px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 cursor-pointer"
              >
                <span>Explore My Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="neu-button px-6 py-3 rounded-full text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 cursor-pointer"
              >
                <span>Get in Touch</span>
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Premium 3D Portrait Frame with Floating Educational Elements */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              ref={portraitRef}
              onMouseMove={handleMouseMovePortrait}
              onMouseEnter={() => setIsHoveringPortrait(true)}
              onMouseLeave={handleMouseLeavePortrait}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg)`,
                transition: isHoveringPortrait ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
              className="relative w-72 h-[410px] sm:w-84 sm:h-[470px] preserve-3d"
            >
              {/* Outer 3D Neumorphic Frame */}
              <div className="absolute inset-0 rounded-3xl neu-raised-lg p-3 sm:p-4 flex flex-col items-center justify-between preserve-3d">
                {/* Inner Inset Portrait Container */}
                <div className="w-full h-full rounded-2xl neu-inset p-2 flex flex-col relative overflow-hidden group">
                  <img
                    src="/src/assets/images/hero_portrait_1791055924778.jpg"
                    alt="Shanmugapriya R - Academy Counsellor & Trainer at study and guidance workstation"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-xl shadow-inner group-hover:scale-[1.03] transition-transform duration-500"
                  />

                  {/* Elegant bottom gradient caption scrim */}
                  <div className="absolute inset-x-2 bottom-2 p-3 bg-gradient-to-t from-slate-950/85 via-slate-900/50 to-transparent rounded-b-xl text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs sm:text-sm font-extrabold tracking-tight text-white drop-shadow-sm">
                          Shanmugapriya R
                        </p>
                        <p className="text-[11px] font-semibold text-blue-300 drop-shadow-sm">
                          Academy Counsellor | Trainer | Mentor
                        </p>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-blue-600/80 backdrop-blur-sm flex items-center justify-center text-white">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3D Floating Educational Element 1: Book (Top Left) */}
              <div
                style={{
                  transform: 'translateZ(35px) translateY(-14px) translateX(-18px)',
                }}
                className="absolute -top-3 -left-3 w-12 h-12 rounded-2xl neu-raised flex items-center justify-center text-blue-600 dark:text-blue-400 animate-float-slow cursor-pointer hover:scale-110 transition-transform shadow-md"
                title="Reading & Knowledge"
              >
                <BookOpen className="w-5 h-5" />
              </div>

              {/* 3D Floating Educational Element 2: Graduation Cap (Top Right) */}
              <div
                style={{
                  transform: 'translateZ(45px) translateY(-12px) translateX(18px)',
                }}
                className="absolute -top-3 -right-3 w-12 h-12 rounded-2xl neu-raised flex items-center justify-center text-indigo-600 dark:text-indigo-400 animate-float-rev cursor-pointer hover:scale-110 transition-transform shadow-md"
                title="Academic Excellence & Guidance"
              >
                <GraduationCap className="w-5 h-5" />
              </div>

              {/* 3D Floating Educational Element 3: Speech / Communication (Bottom Left) */}
              <div
                style={{
                  transform: 'translateZ(40px) translateY(14px) translateX(-16px)',
                }}
                className="absolute -bottom-3 -left-3 w-12 h-12 rounded-2xl neu-raised flex items-center justify-center text-cyan-600 dark:text-cyan-400 animate-float-rev cursor-pointer hover:scale-110 transition-transform shadow-md"
                title="English & Communication Skills"
              >
                <MessageCircle className="w-5 h-5" />
              </div>

              {/* 3D Floating Educational Element 4: Lightbulb / Innovation (Bottom Right) */}
              <div
                style={{
                  transform: 'translateZ(50px) translateY(14px) translateX(16px)',
                }}
                className="absolute -bottom-3 -right-3 w-12 h-12 rounded-2xl neu-raised flex items-center justify-center text-amber-500 animate-float-slow cursor-pointer hover:scale-110 transition-transform shadow-md"
                title="Learning & Problem Solving"
              >
                <Lightbulb className="w-5 h-5" />
              </div>

              {/* 3D Floating Educational Element 5: Laptop / Tech (Right Center) */}
              <div
                style={{
                  transform: 'translateZ(30px) translateX(26px)',
                }}
                className="hidden sm:flex absolute top-1/2 -right-6 -translate-y-1/2 w-11 h-11 rounded-2xl neu-raised items-center justify-center text-emerald-600 dark:text-emerald-400 animate-float-slow cursor-pointer hover:scale-110 transition-transform shadow-md"
                title="Technical & Data Skills"
              >
                <Laptop className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
