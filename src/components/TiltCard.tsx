import React, { useRef, useState, useEffect } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  depth?: number;
  as?: React.ElementType;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 7,
  depth = 12,
  as: Component = 'div',
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(${depth}px)`
    );
  };

  const handleMouseEnter = () => {
    if (reducedMotion) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (reducedMotion) return;
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
  };

  return (
    <Component
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered
          ? 'transform 0.1s ease-out'
          : 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease',
      }}
      className={`preserve-3d ${className}`}
    >
      {children}
    </Component>
  );
};
