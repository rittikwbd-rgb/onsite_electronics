import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { ContactForm } from '../components/ContactForm';
import { GoogleMapLocation } from '../components/GoogleMapLocation';
import { Badge247 } from '../components/Badge247';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  initialService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, initialService }) => {
  return (
    <div className="animate-in fade-in duration-300">
      {/* Hero Header */}
      <section className="bg-neutral-900 text-white py-14 lg:py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFCE30]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-4 relative">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#EFCE30] bg-neutral-800 px-3.5 py-1 rounded-full border border-[#EFCE30]/30">
            <Clock className="w-3.5 h-3.5" />
            24/7 DEDICATED TECHNICAL SERVICE
          </span>

          <h1 className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
            Get in Touch With <span className="text-[#EFCE30]">On-Site Electronics</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Need urgent technical help, diagnostic scheduling, or a quote? Our Boxford, MA lab and 24/7 on-call engineers are ready to assist.
          </p>
        </div>
      </section>

      {/* Main Two-Column Contact Layout */}
      <section className="py-16 px-4 bg-white" id="main-contact-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Location & 24/7 Callout (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Emergency Call Box */}
              <div className="p-6 sm:p-7 bg-[#0B0B0B] text-white rounded-3xl border-2 border-[#EFCE30] shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FCF09C] bg-neutral-900 px-2.5 py-0.5 rounded-full border border-[#EFCE30]/40">
                    24/7 Urgent IT Line
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EFCE30] animate-ping" />
                </div>

                <h3 className="text-xl font-bold font-display text-white">
                  Technology Outage or Emergency?
                </h3>
                <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                  Call our live dispatch line directly. No automated phone trees.
                </p>

                <a
                  href={COMPANY_INFO.phoneTel}
                  className="mt-4 inline-flex items-center gap-2 bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-black font-display text-xl sm:text-2xl px-5 py-3 rounded-2xl w-full justify-center transition-all shadow-md active:scale-98"
                >
                  <Phone className="w-6 h-6 fill-neutral-950" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>

              {/* Google Map & Boxford Lab Details */}
              <GoogleMapLocation />
            </div>

            {/* Right Column: AI Triage Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm initialService={initialService} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
