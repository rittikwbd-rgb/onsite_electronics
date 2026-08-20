import React from 'react';
import { TIMELINE_DATA } from '../data/companyData';
import { Award, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const CompanyTimeline: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#E7EDF1]/30 relative" id="company-timeline-section">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-800 bg-[#FCF09C] px-3.5 py-1 rounded-full border border-[#EFCE30]/60">
            OUR HERITAGE & EVOLUTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 mt-3 tracking-tight">
            Four Decades of Computing Excellence
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-3 leading-relaxed">
            From the dawn of the personal computing era in 1985 to modern cybersecurity and hybrid cloud architecture, On-Site Electronics has stood the test of time.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Central Vertical line (desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-neutral-300 rounded-full" />

          {/* Left Vertical line (mobile) */}
          <div className="md:hidden absolute top-0 bottom-0 left-6 w-1 bg-neutral-300 rounded-full" />

          <div className="space-y-12 relative">
            {TIMELINE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className={`flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-12 relative group`}
                >
                  {/* Timeline Badge Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-neutral-900 border-4 border-[#EFCE30] flex items-center justify-center text-[#EFCE30] font-black font-display text-xs z-10 shadow-md group-hover:scale-110 group-hover:bg-[#0B0B0B] transition-transform">
                    {item.year.slice(0, 4)}
                  </div>

                  {/* Content Box */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0">
                    <div
                      className={`p-6 sm:p-8 bg-white rounded-3xl border-2 border-neutral-200/80 group-hover:border-[#EFCE30] shadow-2xs group-hover:shadow-xl transition-all duration-300 relative ${
                        isEven ? 'md:mr-6' : 'md:ml-6'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-black font-display text-[#FEA512] bg-[#FCF09C]/40 px-2.5 py-0.5 rounded-full">
                          {item.year}
                        </span>
                        <span className="text-xs font-bold text-neutral-400">Milestone</span>
                      </div>

                      <h3 className="text-xl font-bold font-display text-neutral-900 mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for other half on desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
