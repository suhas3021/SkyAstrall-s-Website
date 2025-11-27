import { ReactNode } from 'react';

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  animationClass: string;
}

export const FloatingCard = ({ children, className = '', animationClass }: FloatingCardProps) => (
  <div
    className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 ${animationClass} ${className}`}
  >
    {children}
  </div>
);
