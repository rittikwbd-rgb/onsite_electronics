import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Badge247 } from './Badge247';
import { Phone, AlertCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface EmergencyBannerProps {
  onRequestQuote: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onRequestQuote }) => {
  return (
    <section
      className="bg-[#0B0B0B] text-white py-20 px-4 relative overflow-hidden border-y border-neutral-800"
      id="emergency-247-section"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFCE30]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FEA512]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left / Center content (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-[#EFCE30]/40 text-[#EFCE30] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#EFCE30] animate-ping" />
              24/7 RAPID RESPONSE IT LINE
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
              When Technology Can't Wait,{' '}
              <span className="text-[#EFCE30]">Neither Can We.</span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Need help with an urgent technology problem? Our 24/7 service line gives you a direct way to reach On-Site Electronics. Whether your office server is down, ransomware is suspected, or critical hardware has crashed, we're ready around the clock.
            </p>

            {/* Large Phone Call Box */}
            <div className="p-6 sm:p-8 bg-neutral-900/90 rounded-3xl border-2 border-[#EFCE30]/40 hover:border-[#EFCE30] shadow-2xl transition-all max-w-xl group">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FCF09C] mb-1">
                Direct Emergency & General Assistance Line
              </div>
              <a
                href={COMPANY_INFO.phoneTel}
                id="emergency-banner-phone-link"
                className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white group-hover:text-[#EFCE30] tracking-tight flex items-center gap-3 transition-colors"
              >
                <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-[#EFCE30] fill-[#EFCE30]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#EFCE30] flex-shrink-0" />
                <span>No automated maze — speak with knowledgeable technical staff.</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={COMPANY_INFO.phoneTel}
                id="emergency-call-now-btn"
                className="inline-flex items-center gap-2 bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-bold px-7 py-3.5 rounded-xl text-base shadow-md transition-all active:scale-98"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us Now</span>
              </a>

              <button
                onClick={onRequestQuote}
                id="emergency-request-quote-btn"
                className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-6 py-3.5 rounded-xl text-base border border-neutral-700 hover:border-[#EFCE30]/40 transition-colors"
              >
                <span>Request Non-Emergency Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right badge graphic (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
            <Badge247 size="lg" showPhone={false} className="mb-4" />
            <div className="bg-neutral-900/80 border border-neutral-800 p-4 rounded-2xl max-w-xs text-xs text-neutral-300">
              <strong className="text-white block font-bold text-sm mb-1">
                Boxford, MA & Beyond
              </strong>
              On-site technicians for Essex County & Greater Boston, plus instant remote support nationwide.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
