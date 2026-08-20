import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { OseLogo } from './OseLogo';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestQuote }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0B] text-neutral-400 pt-16 pb-12 border-t border-neutral-800" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-800">
          {/* Col 1: Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <OseLogo variant="dark" onClick={() => handleNav('home')} />
            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm pt-2">
              <strong className="text-white font-semibold">Computing Specialists Since 1985.</strong> We help consumers and small businesses solve difficult technology problems with reliable local computer support, structured networking, data recovery, and 24/7 emergency response.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs bg-neutral-900 border border-neutral-800 text-[#FCF09C] px-3 py-1.5 rounded-full font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EFCE30] animate-pulse"></span>
                24/7 IT Availability
              </span>
              <span className="inline-flex items-center gap-1 text-xs bg-neutral-900 border border-neutral-800 text-neutral-300 px-3 py-1.5 rounded-full font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FEA512]" />
                Seagate Partner
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#EFCE30]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-white transition-colors"
                >
                  Products & Resellers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('consumer-services')}
                  className="hover:text-white transition-colors"
                >
                  Consumer Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('business-services')}
                  className="hover:text-white transition-colors"
                >
                  Small Business IT
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#EFCE30]">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('consumer-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  PC & Apple Computer Repair
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('business-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Data Recovery (Cleanroom)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('business-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  IT Security & Perimeter Audits
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('business-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Disaster Recovery & Hybrid Backups
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('business-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Cat-6 / Cat-7 / Fiber Cabling
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('consumer-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Encrypted Remote Technical Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#EFCE30]">
              Contact OSE
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-white">OSE, INC / On-Site Electronics, INC</p>
                <a
                  href={COMPANY_INFO.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white flex items-start gap-2 mt-1 group"
                >
                  <MapPin className="w-4 h-4 text-[#EFCE30] flex-shrink-0 mt-0.5" />
                  <span>
                    {COMPANY_INFO.address.street}
                    <br />
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                  </span>
                </a>
              </div>

              <div className="pt-1">
                <a
                  href={COMPANY_INFO.phoneTel}
                  id="footer-phone-call-link"
                  className="inline-flex items-center gap-2 text-base font-bold text-white hover:text-[#EFCE30] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#EFCE30]" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <p className="text-xs text-[#FCF09C]/80 mt-0.5">24/7 Emergency & General Service</p>
              </div>

              <div>
                <a
                  href={COMPANY_INFO.emailMailto}
                  className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#FEA512]" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onRequestQuote}
                  id="footer-quote-btn"
                  className="w-full bg-neutral-800 hover:bg-neutral-700 text-[#FCF09C] border border-[#EFCE30]/40 font-semibold py-2 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Request a Service Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {currentYear} On-Site Electronics, INC. All Rights Reserved. Computing Specialists Since 1985.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-neutral-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-neutral-300 transition-colors"
            >
              Terms of Service
            </button>
            <span>•</span>
            <a
              href={COMPANY_INFO.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              Location & Map
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
