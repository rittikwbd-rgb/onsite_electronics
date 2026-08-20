import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation, CheckCircle2 } from 'lucide-react';

export const GoogleMapLocation: React.FC = () => {
  return (
    <div className="bg-neutral-900 text-white rounded-3xl border-2 border-neutral-800 shadow-xl overflow-hidden" id="google-map-location-block">
      {/* Map visual / header */}
      <div className="relative h-64 bg-neutral-800 border-b border-neutral-800 overflow-hidden">
        {/* Styled SVG map representation centered on Boxford, MA with landmark pins */}
        <div className="absolute inset-0 bg-[#171c24] flex items-center justify-center">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#EFCE30_1px,transparent_1px)] [background-size:16px_16px]" />
          
          {/* Simplified vector road lines */}
          <svg className="w-full h-full opacity-40" viewBox="0 0 600 300">
            <path d="M0,150 Q150,80 300,150 T600,120" stroke="#334155" strokeWidth="6" fill="none" />
            <path d="M200,0 L350,300" stroke="#334155" strokeWidth="4" fill="none" />
            <path d="M50,280 L550,20" stroke="#1e293b" strokeWidth="3" fill="none" />
            <path d="M300,50 L300,250" stroke="#EFCE30" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          </svg>

          {/* Interactive map pin */}
          <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
            <div className="w-12 h-12 rounded-full bg-[#EFCE30] border-4 border-[#0B0B0B] shadow-2xl flex items-center justify-center text-neutral-950">
              <MapPin className="w-6 h-6 fill-neutral-950" />
            </div>
            <div className="bg-neutral-900/90 text-white text-[11px] font-extrabold px-3 py-1 rounded-full border border-[#EFCE30] mt-1 shadow-lg whitespace-nowrap">
              37 Georgetown Rd, Boxford, MA
            </div>
          </div>
        </div>

        {/* Floating Google Maps directions badge */}
        <a
          href={COMPANY_INFO.address.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 bg-white/95 hover:bg-[#EFCE30] text-neutral-950 text-xs font-bold px-3.5 py-2 rounded-xl shadow-md flex items-center gap-1.5 transition-colors"
        >
          <Navigation className="w-3.5 h-3.5 text-neutral-950" />
          <span>Open Google Maps</span>
          <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
        </a>
      </div>

      {/* Contact Details Content */}
      <div className="p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#EFCE30] block mb-1">
            HEADQUARTERS & SERVICE LAB
          </span>
          <h4 className="text-xl sm:text-2xl font-extrabold font-display text-white">
            {COMPANY_INFO.name}
          </h4>
          <p className="text-xs text-neutral-400 font-mono mt-0.5">{COMPANY_INFO.legalName}</p>
        </div>

        <div className="space-y-4 text-sm text-neutral-300">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center flex-shrink-0 text-[#EFCE30]">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white">Address:</p>
              <p className="text-neutral-300">
                {COMPANY_INFO.address.street}
                <br />
                {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center flex-shrink-0 text-[#EFCE30]">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white">24/7 Telephone:</p>
              <a
                href={COMPANY_INFO.phoneTel}
                className="text-base font-bold text-[#FCF09C] hover:text-[#EFCE30] transition-colors"
              >
                {COMPANY_INFO.phone}
              </a>
              <span className="text-[11px] text-neutral-400 block">Emergency & General Scheduling</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center flex-shrink-0 text-[#FEA512]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white">Email Address:</p>
              <a
                href={COMPANY_INFO.emailMailto}
                className="text-neutral-300 hover:text-white transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center flex-shrink-0 text-[#EFCE30]">
              <Clock className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <p className="font-semibold text-white">Service Hours:</p>
              <p className="text-neutral-300 font-medium text-[#EFCE30]">{COMPANY_INFO.hours.emergency}</p>
              <p className="text-neutral-400">{COMPANY_INFO.hours.standard}</p>
              <p className="text-neutral-400">{COMPANY_INFO.hours.weekend}</p>
            </div>
          </div>
        </div>

        {/* Service Coverage info */}
        <div className="pt-4 border-t border-neutral-800">
          <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-2">
            Coverage Area
          </span>
          <div className="flex flex-wrap gap-1.5 text-xs">
            {['Boxford, MA', 'North Shore', 'Essex County', 'Greater Boston', 'Remote Support USA'].map((area) => (
              <span
                key={area}
                className="bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-full border border-neutral-700"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
