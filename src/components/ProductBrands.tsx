import React, { useState } from 'react';
import { RESELLER_BRANDS, COMPANY_INFO } from '../data/companyData';
import { ResellerBrand } from '../types';
import { ShieldCheck, ArrowRight, Phone, Laptop, Server, Check, Tag } from 'lucide-react';

interface ProductBrandsProps {
  onRequestQuote: (brandName?: string) => void;
}

export const ProductBrands: React.FC<ProductBrandsProps> = ({ onRequestQuote }) => {
  const [activeBrand, setActiveBrand] = useState<ResellerBrand | null>(null);

  return (
    <section className="py-20 px-4 bg-white relative" id="reseller-brands-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-800 bg-[#FCF09C] px-3.5 py-1 rounded-full border border-[#EFCE30]/60">
            AUTHORIZED HARDWARE & SOFTWARE RESELLERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 mt-3 tracking-tight">
            Technology From Brands You Know
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-3 leading-relaxed">
            We buy and sell desktops, laptops, and printers. Giving the customer the lowest price is always our goal. We are resellers for the following industry-leading companies, providing genuine hardware and software at or below manufacturer direct pricing.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {RESELLER_BRANDS.map((brand) => (
            <div
              key={brand.id}
              onClick={() => setActiveBrand(brand)}
              id={`brand-card-${brand.id}`}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col justify-between cursor-pointer group text-center relative overflow-hidden ${
                activeBrand?.id === brand.id
                  ? 'border-[#EFCE30] bg-[#FCF09C]/20 shadow-md scale-102'
                  : 'border-neutral-200/80 hover:border-[#EFCE30] bg-neutral-50/70 hover:bg-white shadow-2xs hover:shadow-lg'
              }`}
            >
              {/* Subtle top yellow accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#EFCE30] transition-colors duration-200" />

              <div>
                {/* Brand Name Emblem */}
                <div className="h-14 flex items-center justify-center mb-3">
                  <div className="text-xl sm:text-2xl font-black font-display text-neutral-800 group-hover:text-neutral-950 tracking-tight transition-colors">
                    {brand.name}
                  </div>
                </div>

                <span className="text-[11px] font-bold text-[#FEA512] uppercase tracking-wide block mb-1">
                  {brand.category}
                </span>

                <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                  {brand.tagline}
                </p>
              </div>

              {/* View details prompt */}
              <div className="pt-4 mt-4 border-t border-neutral-200/60 flex items-center justify-center gap-1 text-[11px] font-bold text-neutral-600 group-hover:text-neutral-950">
                <span>View Products</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Selected Brand Detail Spotlight (if selected) */}
        {activeBrand && (
          <div className="mt-8 p-6 sm:p-8 bg-neutral-900 text-white rounded-3xl border-2 border-[#EFCE30] shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EFCE30] bg-neutral-800 px-3 py-1 rounded-full border border-[#EFCE30]/30">
                    Official Reseller Program
                  </span>
                  <span className="text-xs text-neutral-300 font-medium">{activeBrand.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                  {activeBrand.name} Solutions & Equipment
                </h3>
                <p className="text-sm text-neutral-300 max-w-2xl leading-relaxed">
                  {activeBrand.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {activeBrand.products.map((prod, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-xs bg-neutral-800 text-neutral-200 px-3 py-1 rounded-lg border border-neutral-700 font-medium"
                    >
                      <Check className="w-3 h-3 text-[#EFCE30]" />
                      {prod}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto flex-shrink-0">
                <button
                  type="button"
                  onClick={() => onRequestQuote(activeBrand.name)}
                  className="bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Request {activeBrand.name} Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={COMPANY_INFO.phoneTel}
                  className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold px-5 py-3 rounded-xl text-sm border border-neutral-700 transition-colors text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#EFCE30]" />
                  <span>Talk with Equipment Specialist</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Equipment Consultation CTA Box */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#E7EDF1]/50 border border-neutral-200 text-center max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-900">
            Need Help Choosing the Right Hardware or Software?
          </h3>
          <p className="text-neutral-600 text-sm sm:text-base mt-2 leading-relaxed max-w-xl mx-auto">
            Avoid costly sizing mistakes. Our certified technicians evaluate your workload, recommend the exact model, and handle full on-site setup and data migration.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <button
              onClick={() => onRequestQuote('Hardware Consultation')}
              className="bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-bold px-6 py-3 rounded-xl text-sm shadow-xs transition-all flex items-center gap-2"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={COMPANY_INFO.phoneTel}
              className="inline-flex items-center gap-2 font-bold text-neutral-900 hover:text-[#FEA512] text-sm px-5 py-3 rounded-xl bg-white border border-neutral-300 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FEA512]" />
              <span>Call 978-887-6900</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
