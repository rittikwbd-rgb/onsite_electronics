import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { Badge247 } from '../components/Badge247';
import { TrustStrip } from '../components/TrustStrip';
import { AudienceCards } from '../components/AudienceCards';
import { ServicesGrid } from '../components/ServicesGrid';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { ProductBrands } from '../components/ProductBrands';
import { SmartQuoteAssistant } from '../components/SmartQuoteAssistant';
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  Wrench,
  Laptop,
  Building2,
  Lock,
  Zap,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenAI: () => void;
  onRequestQuote: (serviceTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenAI,
  onRequestQuote,
}) => {
  return (
    <div className="animate-in fade-in duration-300">
      {/* HERO SECTION matching Professional Polish layout */}
      <section className="relative overflow-hidden border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
          {/* Left Column (7 cols): Light Gradient & Main Messaging */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative bg-gradient-to-br from-white to-[#E7EDF1]">
            {/* Signature Yellow Bar */}
            <div className="w-20 h-1 bg-[#EFCE30] mb-6 rounded-full" />

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B0B0B] leading-[1.1] mb-6 tracking-tight font-display">
              Technology Problems?{' '}
              <span className="text-[#EFCE30]">We Know How</span> to Solve Them.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#505050] leading-relaxed mb-8 max-w-lg">
              On-Site Electronics has been helping consumers and small businesses solve difficult technology problems since 1985. Professional, reliable, and available 24/7.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                id="hero-request-quote-btn"
                onClick={() => onRequestQuote()}
                className="bg-[#0B0B0B] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-neutral-800 transition-all shadow-xl active:scale-98 flex items-center gap-2"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5 text-[#EFCE30]" />
              </button>

              <button
                type="button"
                onClick={() => onRequestQuote('Encrypted Remote Support')}
                className="border-2 border-gray-200 bg-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:border-[#EFCE30] hover:text-[#0B0B0B] text-[#505050] transition-all flex items-center gap-2 shadow-xs"
              >
                <span>Remote Support</span>
              </button>

              <a
                href={COMPANY_INFO.phoneTel}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FEA512] hover:text-[#EFCE30] px-4 py-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>24/7 Line: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Deep Dark Card Showcase */}
          <div className="lg:col-span-5 bg-[#0B0B0B] p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden">
            {/* Dot Matrix Ambient Background */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EFCE30_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

            <div className="relative z-10 space-y-5 sm:space-y-6">
              {/* Card 1: Consumer Services */}
              <div
                onClick={() => onNavigate('consumer-services')}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xs group hover:border-[#EFCE30]/50 hover:bg-white/8 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-[#EFCE30] rounded-xl text-[#0B0B0B] shadow-sm group-hover:scale-105 transition-transform">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] text-[#EFCE30] font-bold uppercase tracking-widest bg-neutral-900 px-2.5 py-1 rounded-full border border-[#EFCE30]/30">
                    Since 1985
                  </span>
                </div>
                <h3 className="text-white text-xl font-bold font-display mb-1.5 flex items-center justify-between">
                  <span>Consumer Services</span>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#EFCE30] group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Expert computer repair, data recovery, and Apple device support for your home and family.
                </p>
              </div>

              {/* Card 2: Small Business IT */}
              <div
                onClick={() => onNavigate('business-services')}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xs group hover:border-[#EFCE30]/50 hover:bg-white/8 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-[#FCF09C] rounded-xl text-[#0B0B0B] shadow-sm group-hover:scale-105 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] text-[#FCF09C] font-bold uppercase tracking-widest bg-neutral-900 px-2.5 py-1 rounded-full border border-[#FCF09C]/30">
                    Scalable IT
                  </span>
                </div>
                <h3 className="text-white text-xl font-bold font-display mb-1.5 flex items-center justify-between">
                  <span>Small Business IT</span>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#FCF09C] group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Network infrastructure, security audits, and server management designed for uptime and growth.
                </p>
              </div>

              {/* Card 3: AI Service Assistant Banner */}
              <div
                onClick={onOpenAI}
                className="bg-[#EFCE30] hover:bg-[#FEA512] p-5 sm:p-6 rounded-2xl flex items-center justify-between shadow-lg cursor-pointer hover:scale-[1.02] transition-all text-[#0B0B0B]"
              >
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-[#0B0B0B]/70">
                    Introducing
                  </p>
                  <h4 className="text-[#0B0B0B] font-bold font-display text-lg sm:text-xl">
                    AI Service Assistant
                  </h4>
                </div>
                <div className="w-10 h-10 bg-[#0B0B0B] rounded-full flex items-center justify-center text-[#EFCE30] shadow-md flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP WITH 40+ YEARS STATS */}
      <TrustStrip />

      {/* TWO AUDIENCE CARDS */}
      <AudienceCards onNavigate={onNavigate} />

      {/* CORE 8 SERVICES GRID */}
      <ServicesGrid onRequestQuote={onRequestQuote} />

      {/* 24/7 DARK EMERGENCY SECTION */}
      <EmergencyBanner onRequestQuote={() => onRequestQuote('Emergency 24/7 Response')} />

      {/* RESELLER BRAND SHOWCASE */}
      <ProductBrands onRequestQuote={onRequestQuote} />

      {/* INTERACTIVE QUOTE ASSISTANT WIZARD */}
      <section className="py-20 px-4 bg-white" id="quote-assistant-section">
        <div className="max-w-4xl mx-auto">
          <SmartQuoteAssistant
            onCompleteQuote={(data) => {
              onRequestQuote(`Estimated: ${data.deviceType} (${data.issueType})`);
            }}
          />
        </div>
      </section>

      {/* LOCAL BOXFORD HEADQUARTERS CALLOUT */}
      <section className="py-16 px-4 bg-[#E7EDF1]/60 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 border-2 border-[#EFCE30]/40 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#EFCE30] block mb-1">
              BOXFORD, MASSACHUSETTS HEADQUARTERS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Proudly Local. Nationwide Reach.
            </h3>
            <p className="text-sm text-neutral-300 mt-2 max-w-xl leading-relaxed">
              Located at <strong>37 Georgetown Rd, Boxford, MA 01921</strong>. Serving Boxford, Topsfield, Middleton, Georgetown, Andover, and the entire North Shore with reliable on-site technician dispatch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto flex-shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Get Directions & Contact</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={COMPANY_INFO.phoneTel}
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold px-5 py-3 rounded-xl text-sm border border-neutral-700 transition-colors text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#EFCE30]" />
              <span>978-887-6900</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
