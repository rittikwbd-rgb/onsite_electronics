import React from 'react';

interface OseLogoProps {
  variant?: 'light' | 'dark' | 'compact';
  className?: string;
  onClick?: () => void;
}

export const OseLogo: React.FC<OseLogoProps> = ({
  variant = 'light',
  className = '',
  onClick,
}) => {
  const isDark = variant === 'dark';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center space-x-3 select-none cursor-pointer group ${className}`}
      id="ose-brand-logo"
    >
      {/* Emblem / Badge Icon matching design template */}
      <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#EFCE30] rounded-xl flex items-center justify-center shadow-md group-hover:bg-[#FEA512] transition-all duration-300 flex-shrink-0">
        <span className="text-white font-black text-xl sm:text-2xl tracking-tighter drop-shadow-xs">
          OSE
        </span>
      </div>

      {/* Typography */}
      {variant !== 'compact' && (
        <div className="flex flex-col text-left">
          <span
            className={`font-bold text-lg sm:text-xl leading-none transition-colors duration-200 ${
              isDark ? 'text-white' : 'text-[#0B0B0B]'
            }`}
          >
            On-Site Electronics
          </span>
          <span
            className={`text-[10px] uppercase tracking-widest font-semibold mt-1 ${
              isDark ? 'text-neutral-400' : 'text-[#505050]'
            }`}
          >
            Computing Specialists Since 1985
          </span>
        </div>
      )}
    </div>
  );
};
