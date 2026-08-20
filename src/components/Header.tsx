import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { OseLogo } from './OseLogo';
import { Phone, Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
  onOpenAI: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onRequestQuote,
  onOpenAI,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'consumer-services', label: 'Consumer Services' },
    { id: 'business-services', label: 'Small Business Services' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Notification / Emergency Utility Bar */}
      <div className="bg-[#0B0B0B] text-neutral-300 text-xs py-1.5 px-4 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#EFCE30]/20 text-[#EFCE30] font-semibold text-[11px] border border-[#EFCE30]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EFCE30] animate-pulse"></span>
              24/7 ON-CALL
            </span>
            <span className="hidden sm:inline text-neutral-300">
              Emergency IT & Hardware Support Available 24 Hours:
            </span>
            <a
              href={COMPANY_INFO.phoneTel}
              id="top-emergency-phone-link"
              className="font-bold text-[#FCF09C] hover:text-[#EFCE30] transition-colors underline decoration-[#EFCE30]/40 flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#EFCE30]" />
              {COMPANY_INFO.phone}
            </a>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-neutral-400">
            <span className="hidden md:inline">Boxford, MA • North Shore & Remote IT</span>
            <button
              onClick={onOpenAI}
              id="top-bar-ask-ai-btn"
              className="inline-flex items-center gap-1 text-[#EFCE30] hover:text-white font-medium transition-colors"
            >
              <Sparkles className="w-3 h-3" />
              <span>Ask OSE Service Assistant</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-gray-200'
            : 'bg-white py-3 sm:py-3.5 border-b border-gray-100 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <OseLogo onClick={() => handleNavClick('home')} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-semibold text-[#505050]" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#0B0B0B] font-bold'
                      : 'hover:text-[#EFCE30] text-[#505050]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EFCE30] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Far Right Call & CTA Area matching theme */}
          <div className="hidden md:flex items-center space-x-6 flex-shrink-0">
            {/* Phone badge */}
            <div className="text-right">
              <a
                href={COMPANY_INFO.phoneTel}
                id="header-phone-box"
                className="text-[#FEA512] font-black text-lg sm:text-xl leading-none hover:text-[#EFCE30] transition-colors block"
              >
                {COMPANY_INFO.phone}
              </a>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">
                24/7 Emergency Support
              </div>
            </div>

            {/* Request Service CTA matching theme */}
            <button
              onClick={onRequestQuote}
              id="header-request-service-btn"
              className="bg-[#EFCE30] hover:bg-[#FEA512] text-[#0B0B0B] px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-98"
            >
              Get Service
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={COMPANY_INFO.phoneTel}
              id="header-mobile-call-btn"
              aria-label="Call 24/7 line"
              className="p-2.5 rounded-full bg-[#EFCE30] text-neutral-950 font-bold flex items-center justify-center shadow-xs"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="header-mobile-toggle-btn"
              aria-label="Toggle Navigation Menu"
              className="p-2.5 rounded-xl border border-gray-200 text-neutral-700 hover:bg-neutral-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-1 mb-5">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold flex items-center justify-between ${
                      isActive
                        ? 'bg-[#FCF09C] text-neutral-950 border-l-4 border-[#EFCE30]'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                  </button>
                );
              })}
            </div>

            {/* Mobile Contact & CTA Block */}
            <div className="pt-4 border-t border-neutral-100 space-y-3">
              <div className="p-3 bg-neutral-900 rounded-xl text-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-[#EFCE30] font-bold tracking-wider uppercase">24/7 IT Hotline</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-medium">On-Call</span>
                </div>
                <a
                  href={COMPANY_INFO.phoneTel}
                  id="mobile-drawer-call-link"
                  className="text-lg font-black text-white hover:text-[#EFCE30] flex items-center gap-2 mt-1"
                >
                  <Phone className="w-4 h-4 text-[#EFCE30]" />
                  {COMPANY_INFO.phone}
                </a>
                <p className="text-xs text-neutral-400 mt-1">
                  For Emergency, Non-Emergency & Quote Requests
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onRequestQuote();
                  }}
                  id="mobile-drawer-quote-btn"
                  className="w-full bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-bold py-2.5 px-3 rounded-xl text-sm text-center shadow-xs"
                >
                  Request Service
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAI();
                  }}
                  id="mobile-drawer-ai-btn"
                  className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold py-2.5 px-3 rounded-xl text-sm flex items-center justify-center gap-1.5 border border-neutral-300"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#FEA512]" />
                  <span>Ask OSE</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
