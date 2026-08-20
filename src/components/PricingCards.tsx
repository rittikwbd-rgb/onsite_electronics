import React, { useState } from 'react';
import { CONSUMER_PRICING, COMPANY_INFO } from '../data/companyData';
import { Check, Sparkles, Phone, ArrowRight, ShieldCheck, Laptop, Apple, Server } from 'lucide-react';

interface PricingCardsProps {
  onRequestQuote: (serviceTitle?: string) => void;
  onOpenAI: () => void;
}

export const PricingCards: React.FC<PricingCardsProps> = ({
  onRequestQuote,
  onOpenAI,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'pc' | 'apple' | 'server'>('all');

  const filteredPricing = CONSUMER_PRICING.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section className="py-20 px-4 bg-white relative" id="consumer-pricing-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-800 bg-[#FCF09C] px-3.5 py-1 rounded-full border border-[#EFCE30]/60">
            TRANSPARENT SERVICE PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 mt-3 tracking-tight">
            Clear Flat-Rate Diagnostic & Repair Pricing
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-3 leading-relaxed">
            No surprise diagnostic fees. We provide honest, upfront benchmark pricing for PC towers, laptops, Apple iMacs, MacBooks, and standalone servers.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === 'all'
                  ? 'bg-neutral-900 text-[#EFCE30] shadow-sm'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              All Consumer Devices
            </button>
            <button
              onClick={() => setActiveCategory('pc')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeCategory === 'pc'
                  ? 'bg-neutral-900 text-[#EFCE30] shadow-sm'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>PC Based Computers</span>
            </button>
            <button
              onClick={() => setActiveCategory('apple')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeCategory === 'apple'
                  ? 'bg-neutral-900 text-[#EFCE30] shadow-sm'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              <Apple className="w-3.5 h-3.5" />
              <span>Apple Products</span>
            </button>
            <button
              onClick={() => setActiveCategory('server')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeCategory === 'server'
                  ? 'bg-neutral-900 text-[#EFCE30] shadow-sm'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              <span>Home & Office Servers</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPricing.map((item) => (
            <div
              key={item.id}
              id={`pricing-card-${item.id}`}
              className={`rounded-3xl p-6 border-2 transition-all duration-300 flex flex-col justify-between relative group ${
                item.popular
                  ? 'border-[#EFCE30] bg-[#FCF09C]/10 shadow-lg'
                  : 'border-neutral-200 hover:border-[#EFCE30] bg-white shadow-2xs hover:shadow-xl'
              }`}
            >
              {item.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#EFCE30] text-neutral-950 text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                    {item.category === 'apple' ? 'Apple Product' : item.category === 'server' ? 'Server System' : 'PC Hardware'}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center">
                    {item.category === 'apple' ? (
                      <Apple className="w-4 h-4" />
                    ) : item.category === 'server' ? (
                      <Server className="w-4 h-4" />
                    ) : (
                      <Laptop className="w-4 h-4" />
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold font-display text-neutral-900">
                  {item.title}
                </h3>

                <div className="my-4 flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black font-display text-neutral-900">
                    {item.price}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">/ flat service</span>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 text-xs text-neutral-700 mb-6 border-t border-neutral-100 pt-4">
                  {item.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#EFCE30]/60 text-neutral-950 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onRequestQuote(item.title)}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  item.popular
                    ? 'bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 shadow-xs'
                    : 'bg-neutral-900 hover:bg-[#EFCE30] hover:text-neutral-950 text-white'
                }`}
              >
                <span>Book Service ({item.price})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* AI Assistant Help Prompt Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-neutral-900 text-white rounded-3xl border-2 border-[#EFCE30]/60 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EFCE30] text-neutral-950 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold font-display text-white">
                Not sure what service or pricing applies to your device?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 mt-0.5">
                Our AI Service Assistant can diagnose your symptoms in under 60 seconds.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto flex-shrink-0">
            <button
              onClick={onOpenAI}
              className="w-full md:w-auto bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-bold px-6 py-3 rounded-xl text-sm transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ask our AI Assistant</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
