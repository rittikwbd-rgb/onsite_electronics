import React from 'react';
import { PageId } from '../types';
import { ProductBrands } from '../components/ProductBrands';
import { COMPANY_INFO } from '../data/companyData';
import {
  Tag,
  Laptop,
  Printer,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
  Server,
  DollarSign,
  PackageCheck,
} from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: (brandName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <div className="animate-in fade-in duration-300">
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white py-16 lg:py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFCE30]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-6 relative">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#EFCE30] bg-neutral-800 px-3.5 py-1 rounded-full border border-[#EFCE30]/30">
            <Tag className="w-3.5 h-3.5" />
            AUTHORIZED PROCUREMENT & RESELLER PARTNERSHIPS
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-tight">
            Hardware & Software at <span className="text-[#EFCE30]">Competitive Pricing.</span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            We buy and sell desktops, laptops, servers, and commercial printers. As authorized resellers for the world's leading technology manufacturers, we deliver products at or below direct manufacturer pricing.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onRequestQuote('Hardware Procurement Quote')}
              className="bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-bold px-7 py-3.5 rounded-xl text-base shadow-sm transition-all flex items-center gap-2"
            >
              <span>Request Equipment Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={COMPANY_INFO.phoneTel}
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-6 py-3.5 rounded-xl text-base border border-neutral-700 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#EFCE30]" />
              <span>Talk to Sales: 978-887-6900</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3 Equipment Service Cards */}
      <section className="py-16 px-4 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border-2 border-neutral-200 hover:border-[#EFCE30] shadow-sm transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-[#EFCE30] flex items-center justify-center">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900">
                Laptops & Custom Desktops
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Brand-new Dell, HP, Lenovo, and Apple systems tailored to your specific performance requirements, pre-configured with security and clean Windows/macOS installations.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border-2 border-neutral-200 hover:border-[#EFCE30] shadow-sm transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-[#EFCE30] flex items-center justify-center">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900">
                Servers & Network Hardware
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                SonicWall and WatchGuard firewalls, APC smart battery backup UPS systems, and enterprise Dell PowerEdge server hardware built for reliability.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border-2 border-neutral-200 hover:border-[#EFCE30] shadow-sm transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-[#EFCE30] flex items-center justify-center">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900">
                Printers & Office Equipment
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                High-volume laser printers, multi-function copiers, scanners, and high-speed network switches with professional on-site deployment and setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reseller Showcase */}
      <ProductBrands onRequestQuote={onRequestQuote} />

      {/* Trade-in & Buy/Sell policy */}
      <section className="py-16 px-4 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FEA512]">
            TRADE-IN & HARDWARE BUYBACK
          </span>
          <h2 className="text-3xl font-extrabold font-display text-neutral-900">
            Upgrading Your Office Fleet or Personal PC?
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            We offer fair buyback credit on used desktops, laptops, and networking gear when upgrading to current generation hardware with On-Site Electronics.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onRequestQuote('Hardware Upgrade Consultation')}
              className="bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-bold px-7 py-3.5 rounded-xl text-sm shadow-sm transition-all inline-flex items-center gap-2"
            >
              <span>Get an Upgrade Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
