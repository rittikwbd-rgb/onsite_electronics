import React from 'react';
import { ServiceItem } from '../types';
import { X, Check, Phone, ArrowRight, ShieldCheck, Clock, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        id="service-detail-modal"
      >
        {/* Header strip */}
        <div className="bg-neutral-900 text-white p-6 sm:p-8 relative">
          {/* Top Yellow line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#EFCE30]" />

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#EFCE30] bg-neutral-800 px-2.5 py-0.5 rounded-full border border-[#EFCE30]/30">
              {service.category === 'consumer'
                ? 'Consumer Service'
                : service.category === 'business'
                ? 'Business IT Service'
                : 'Consumer & Business'}
            </span>
            {service.is247Available && (
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                24/7 Available
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            {service.title}
          </h3>
          <p className="text-neutral-300 text-sm sm:text-base mt-2 leading-relaxed">
            {service.shortDesc}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
              Overview & Technical Scope
            </h4>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#FEA512]" />
              What We Deliver
            </h4>
            <ul className="space-y-2.5">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <div className="w-4 h-4 rounded-full bg-[#EFCE30] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-neutral-950 stroke-[3]" />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal For & Pricing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#FCF09C]/30 border border-[#EFCE30]/40">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                Ideal For
              </span>
              <p className="text-xs sm:text-sm font-medium text-neutral-800">
                {service.idealFor}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-100 border border-neutral-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-600 block mb-1">
                Pricing Structure
              </span>
              <p className="text-xs sm:text-sm font-bold text-neutral-900">
                {service.pricing || 'Custom tailored estimate based on needs'}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-6 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={COMPANY_INFO.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-neutral-900 hover:text-[#FEA512] font-bold text-sm py-2 px-4 rounded-xl border border-neutral-300 hover:border-neutral-400 bg-white transition-colors"
          >
            <Phone className="w-4 h-4 text-[#FEA512]" />
            <span>Call 24/7 ({COMPANY_INFO.phone})</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onRequestQuote(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-bold py-2.5 px-6 rounded-xl shadow-xs transition-all text-sm group"
          >
            <span>Request {service.title}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
