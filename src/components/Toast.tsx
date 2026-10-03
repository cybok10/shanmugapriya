import React from 'react';
import { Check, Copy } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-full neu-raised-lg text-slate-900 dark:text-white text-xs sm:text-sm font-bold transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
    >
      <div className="flex items-center justify-center w-6 h-6 rounded-full neu-inset text-emerald-500">
        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
      </div>
      <span>{message}</span>
    </div>
  );
};
