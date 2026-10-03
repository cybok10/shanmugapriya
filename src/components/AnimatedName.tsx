import React, { useState, useEffect, useRef } from 'react';

interface AnimatedNameProps {
  name?: string;
  className?: string;
}

export const AnimatedName: React.FC<AnimatedNameProps> = ({
  name = 'Shanmugapriya R',
  className = '',
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [transform, setTransform] = useState<string>('perspective(800px) rotateX(0deg) rotateY(0deg)');
  const [isHovered, setIsHovered] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAppeared(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((centerY - y) / centerY) * 10;
    const rotY = ((x - centerX) / centerX) * 12;

    setTransform(`perspective(800px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(10px)`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
  };

  const letters = name.split('');

  return (
    <h1
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      className={`preserve-3d cursor-default select-none inline-block font-extrabold tracking-[-0.035em] text-slate-900 dark:text-white leading-[1.1] ${className}`}
      aria-label={name}
    >
      <span className="flex flex-wrap items-center">
        {letters.map((char, index) => {
          if (char === ' ') {
            return (
              <span key={index} className="inline-block w-3 sm:w-4">
                &nbsp;
              </span>
            );
          }

          // Delay calculation for staggered wave reveal
          const delayMs = index * 45;

          return (
            <span
              key={index}
              style={{
                display: 'inline-block',
                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: `${delayMs}ms`,
                opacity: hasAppeared ? 1 : 0,
                transform: hasAppeared
                  ? 'translateY(0px) rotateX(0deg) translateZ(0px)'
                  : 'translateY(28px) rotateX(45deg) translateZ(-40px)',
              }}
              className="hover:text-blue-600 dark:hover:text-blue-400 hover:translate-y-[-4px] hover:scale-105 transition-transform"
            >
              {char}
            </span>
          );
        })}
      </span>
    </h1>
  );
};
