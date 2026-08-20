import React from 'react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-white border-y border-gray-100 py-8 px-6 lg:px-10" id="trust-strip-section">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center">
        {/* Metric 1: 40+ Years */}
        <div className="flex flex-col">
          <span className="text-3xl sm:text-4xl font-black text-[#0B0B0B] tracking-tight font-display">
            40+
          </span>
          <span className="text-xs font-bold uppercase text-gray-400 tracking-tighter mt-0.5">
            Years Experience
          </span>
        </div>

        {/* Metric 2: 24/7 On-Site Response */}
        <div className="flex flex-col">
          <span className="text-3xl sm:text-4xl font-black text-[#EFCE30] tracking-tight font-display">
            24/7
          </span>
          <span className="text-xs font-bold uppercase text-gray-400 tracking-tighter mt-0.5">
            On-Site Response
          </span>
        </div>

        {/* Metric 3: 5,000+ Issues Resolved */}
        <div className="flex flex-col">
          <span className="text-3xl sm:text-4xl font-black text-[#0B0B0B] tracking-tight font-display">
            5,000+
          </span>
          <span className="text-xs font-bold uppercase text-gray-400 tracking-tighter mt-0.5">
            Issues Resolved
          </span>
        </div>

        {/* Partner Badges Cluster */}
        <div className="flex items-center space-x-3 sm:space-x-4 border-l border-gray-200 pl-4 sm:pl-6">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[9px] font-bold text-neutral-800 shadow-xs">
              HP
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[9px] font-bold text-neutral-800 shadow-xs">
              DELL
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[9px] font-bold text-neutral-800 shadow-xs">
              MS
            </div>
            <div className="w-8 h-8 rounded-full bg-[#FCF09C] border-2 border-white flex items-center justify-center text-[9px] font-bold text-neutral-900 shadow-xs">
              APL
            </div>
          </div>
          <div className="text-[10px] font-bold text-[#505050] max-w-[130px] leading-tight">
            Authorized Partners & Brand Specialists
          </div>
        </div>
      </div>
    </section>
  );
};
