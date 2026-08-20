import React from 'react';
import { PageId } from '../types';
import { Laptop, Building2, ArrowRight, CheckCircle2, Shield, Wrench, Network, HardDrive } from 'lucide-react';

interface AudienceCardsProps {
  onNavigate: (page: PageId) => void;
}

export const AudienceCards: React.FC<AudienceCardsProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 px-4 bg-white relative" id="audience-cards-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-800 bg-[#FCF09C] px-3.5 py-1 rounded-full border border-[#EFCE30]/60">
            TAILORED TECHNICAL SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 mt-3 tracking-tight">
            Technology Support for Everyone
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-3 leading-relaxed">
            Whether you need personal laptop repair at home or mission-critical server infrastructure for your business, On-Site Electronics delivers straightforward, expert IT service.
          </p>
        </div>

        {/* 2 Big Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Consumer Services */}
          <div
            onClick={() => onNavigate('consumer-services')}
            id="card-consumer-services"
            className="group relative bg-neutral-50 hover:bg-white rounded-3xl p-8 sm:p-10 border-2 border-neutral-200/80 hover:border-[#EFCE30] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            {/* Top yellow accent animated line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-neutral-200 group-hover:bg-[#EFCE30] transition-colors duration-300" />
            
            {/* Subtle corner badge */}
            <div className="absolute top-6 right-6 w-24 h-24 bg-[#EFCE30]/10 rounded-full blur-2xl group-hover:bg-[#EFCE30]/25 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-neutral-900 text-[#EFCE30] flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-[#0B0B0B] transition-transform">
                  <Laptop className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 bg-white border border-neutral-200 px-3 py-1 rounded-full group-hover:border-[#EFCE30]/50 group-hover:text-neutral-900 transition-colors">
                  Home & Personal
                </span>
              </div>

              <span className="text-sm font-bold text-[#FEA512] uppercase tracking-wide">
                Consumer Services
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-neutral-900 mt-1 mb-3">
                Computer help without the headache.
              </h3>

              <p className="text-neutral-600 text-base leading-relaxed mb-6">
                From laptops and PCs to Apple products, servers and data recovery, our consumer services help keep your technology working smoothly and reliably.
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                <div className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FEA512] flex-shrink-0" />
                  <span>PC & Mac Diagnostics</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FEA512] flex-shrink-0" />
                  <span>Virus & Malware Removal</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FEA512] flex-shrink-0" />
                  <span>Seagate Data Recovery</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FEA512] flex-shrink-0" />
                  <span>Transparent Flat Rates</span>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="pt-6 border-t border-neutral-200/80 flex items-center justify-between">
              <span className="text-sm font-semibold text-neutral-500">
                Starting at <strong className="text-neutral-900 font-bold">$120</strong> for PC repair
              </span>
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-[#EFCE30] group-hover:bg-[#FEA512] text-neutral-950 font-bold px-5 py-2.5 rounded-xl shadow-xs transition-all duration-200"
              >
                <span>Explore Consumer Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Small Business Services */}
          <div
            onClick={() => onNavigate('business-services')}
            id="card-business-services"
            className="group relative bg-[#0B0B0B] hover:bg-neutral-950 text-white rounded-3xl p-8 sm:p-10 border-2 border-neutral-800 hover:border-[#EFCE30] shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            {/* Top yellow accent animated line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-neutral-800 group-hover:bg-[#EFCE30] transition-colors duration-300" />

            {/* Background tech glow */}
            <div className="absolute top-6 right-6 w-32 h-32 bg-[#EFCE30]/10 rounded-full blur-2xl group-hover:bg-[#EFCE30]/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-neutral-800 border border-[#EFCE30]/40 text-[#EFCE30] flex items-center justify-center shadow-md group-hover:scale-105 group-hover:border-[#EFCE30] transition-transform">
                  <Building2 className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FCF09C] bg-neutral-800 border border-neutral-700 px-3 py-1 rounded-full group-hover:border-[#EFCE30]/50 transition-colors">
                  Commercial & Enterprise
                </span>
              </div>

              <span className="text-sm font-bold text-[#EFCE30] uppercase tracking-wide">
                Small Business Services
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mt-1 mb-3">
                IT infrastructure you can rely on.
              </h3>

              <p className="text-neutral-300 text-base leading-relaxed mb-6">
                Security audits, disaster recovery, data recovery, firewalls, servers and network infrastructure for small businesses that cannot afford downtime.
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                <div className="flex items-center gap-2 text-sm text-neutral-200 font-medium">
                  <Shield className="w-4 h-4 text-[#EFCE30] flex-shrink-0" />
                  <span>IT Security & Audits</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-200 font-medium">
                  <Network className="w-4 h-4 text-[#EFCE30] flex-shrink-0" />
                  <span>Cat-6/Cat-7 & Fiber Cabling</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-200 font-medium">
                  <HardDrive className="w-4 h-4 text-[#EFCE30] flex-shrink-0" />
                  <span>Exchange & Domain Controllers</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#EFCE30] flex-shrink-0" />
                  <span>SonicWall / WatchGuard Firewalls</span>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-sm font-semibold text-neutral-400">
                24/7 on-call dispatch & SLA options
              </span>
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-[#EFCE30] group-hover:bg-[#FEA512] text-neutral-950 font-bold px-5 py-2.5 rounded-xl shadow-xs transition-all duration-200"
              >
                <span>Explore Business Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
