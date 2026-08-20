import React, { useState } from 'react';
import { CORE_SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';
import {
  Wrench,
  Headphones,
  Database,
  ShieldCheck,
  RotateCcw,
  Network,
  Flame,
  Server,
  ArrowRight,
  Sparkles,
  Clock,
} from 'lucide-react';

interface ServicesGridProps {
  filterCategory?: 'all' | 'consumer' | 'business';
  onRequestQuote: (serviceTitle?: string) => void;
  showAllHeader?: boolean;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  filterCategory = 'all',
  onRequestQuote,
  showAllHeader = true,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'consumer' | 'business'>(filterCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-6 h-6" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6" />;
      case 'Database':
        return <Database className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'RotateCcw':
        return <RotateCcw className="w-6 h-6" />;
      case 'Network':
        return <Network className="w-6 h-6" />;
      case 'Flame':
        return <Flame className="w-6 h-6" />;
      case 'Server':
        return <Server className="w-6 h-6" />;
      default:
        return <Wrench className="w-6 h-6" />;
    }
  };

  const filteredServices = CORE_SERVICES.filter((srv) => {
    if (activeTab === 'all') return true;
    return srv.category === activeTab || srv.category === 'both';
  });

  return (
    <section className="py-20 px-4 bg-[#E7EDF1]/30 relative" id="services-grid-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        {showAllHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-800 bg-[#FCF09C] px-3.5 py-1 rounded-full border border-[#EFCE30]/60">
              OUR EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 mt-3 tracking-tight">
              Technology Services That Keep You Moving
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 mt-3 leading-relaxed">
              From resolving sudden hardware crashes to deploying high-speed fiber backbones and enterprise security, we provide full-lifecycle computing assistance.
            </p>

            {/* Filter Tabs */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setActiveTab('all')}
                id="filter-services-all"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'all'
                    ? 'bg-neutral-900 text-[#EFCE30] shadow-sm'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                All 8 Core Services
              </button>
              <button
                onClick={() => setActiveTab('consumer')}
                id="filter-services-consumer"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'consumer'
                    ? 'bg-neutral-900 text-[#EFCE30] shadow-sm'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                Consumer & Home
              </button>
              <button
                onClick={() => setActiveTab('business')}
                id="filter-services-business"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'business'
                    ? 'bg-neutral-900 text-[#EFCE30] shadow-sm'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                Small Business IT
              </button>
            </div>
          </div>
        )}

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              onClick={() => setSelectedService(service)}
              className="group relative bg-white hover:bg-white rounded-2xl p-6 border-2 border-neutral-200/80 hover:border-[#EFCE30] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
            >
              {/* Top Accent Line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#EFCE30] transition-colors duration-300" />

              <div>
                {/* Icon & Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 text-[#EFCE30] flex items-center justify-center shadow-xs group-hover:bg-[#EFCE30] group-hover:text-neutral-950 transition-colors duration-300">
                    {getIcon(service.icon)}
                  </div>
                  {service.is247Available && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-full border border-neutral-200 group-hover:border-[#EFCE30]/40 group-hover:text-neutral-900 transition-colors">
                      <Clock className="w-2.5 h-2.5 text-[#FEA512]" />
                      24/7
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold font-display text-neutral-900 group-hover:text-neutral-950 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              {/* Bottom Action strip */}
              <div className="pt-4 mt-6 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-500 group-hover:text-neutral-900 transition-colors">
                  Learn Details
                </span>
                <div className="w-7 h-7 rounded-full bg-[#FCF09C]/40 group-hover:bg-[#EFCE30] text-neutral-900 flex items-center justify-center group-hover:translate-x-0.5 transition-all duration-200">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={onRequestQuote}
      />
    </section>
  );
};
