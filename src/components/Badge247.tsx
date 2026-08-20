import React from 'react';
import { PhoneCall, ShieldAlert, Clock } from 'lucide-react';

interface Badge247Props {
  size?: 'sm' | 'md' | 'lg';
  showPhone?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Badge247: React.FC<Badge247Props> = ({
  size = 'md',
  showPhone = true,
  className = '',
  onClick,
}) => {
  const sizeClasses = {
    sm: 'w-20 h-20 text-xs',
    md: 'w-28 h-28 text-sm',
    lg: 'w-36 h-36 text-base',
  };

  return (
    <div
      onClick={onClick}
      id="badge-24-7-emergency"
      className={`relative inline-flex items-center justify-center select-none group cursor-pointer ${className}`}
    >
      {/* Outer rotating dashed border */}
      <div
        className={`absolute rounded-full border-2 border-dashed border-[#EFCE30]/60 animate-spin-slow ${
          size === 'sm' ? 'w-24 h-24' : size === 'md' ? 'w-32 h-32' : 'w-40 h-40'
        }`}
      />

      {/* Pulse glow circle */}
      <div className="absolute inset-0 rounded-full bg-[#EFCE30]/20 blur-md group-hover:bg-[#EFCE30]/35 transition-all duration-500 animate-pulse-subtle" />

      {/* Main badge circle */}
      <div
        className={`relative z-10 rounded-full bg-[#0B0B0B] border-2 border-[#EFCE30] flex flex-col items-center justify-center p-2 text-center shadow-xl group-hover:scale-105 group-hover:border-[#FEA512] transition-transform duration-300 ${sizeClasses[size]}`}
      >
        <div className="flex items-center gap-1 text-[#EFCE30] mb-0.5">
          <Clock className="w-3.5 h-3.5 animate-spin-slow" />
          <span className="font-extrabold text-[11px] tracking-wider uppercase">SERVICE</span>
        </div>

        <div className="font-black font-display text-white leading-none tracking-tight flex items-baseline justify-center">
          <span className={size === 'sm' ? 'text-lg' : size === 'md' ? 'text-2xl' : 'text-3xl'}>
            24
          </span>
          <span className="text-[#EFCE30] text-sm font-bold mx-0.5">/</span>
          <span className={size === 'sm' ? 'text-lg' : size === 'md' ? 'text-2xl' : 'text-3xl'}>
            7
          </span>
        </div>

        <span className="text-[10px] font-semibold text-[#FCF09C] mt-0.5 tracking-tight uppercase">
          EMERGENCY IT
        </span>

        {showPhone && size !== 'sm' && (
          <div className="mt-1 flex items-center gap-1 text-[10px] font-bold text-neutral-300 bg-neutral-900/80 px-2 py-0.5 rounded-full border border-neutral-700 group-hover:border-[#EFCE30]/50">
            <PhoneCall className="w-2.5 h-2.5 text-[#EFCE30]" />
            <span>978-887-6900</span>
          </div>
        )}
      </div>
    </div>
  );
};
