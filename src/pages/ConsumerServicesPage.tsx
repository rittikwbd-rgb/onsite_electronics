import React from 'react';
import { PageId } from '../types';
import { PricingCards } from '../components/PricingCards';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { COMPANY_INFO } from '../data/companyData';
import {
  Laptop,
  Apple,
  HardDrive,
  Headphones,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Sparkles,
  Zap,
  Clock,
} from 'lucide-react';

interface ConsumerServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAI: () => void;
  onRequestQuote: (serviceTitle?: string) => void;
}

export const ConsumerServicesPage: React.FC<ConsumerServicesPageProps> = ({
  onNavigate,
  onOpenAI,
  onRequestQuote,
}) => {
  return (
    <div className="animate-in fade-in duration-300">
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white py-16 lg:py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFCE30]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-6 relative">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#EFCE30] bg-neutral-800 px-3.5 py-1 rounded-full border border-[#EFCE30]/30">
            <Laptop className="w-3.5 h-3.5" />
            RESIDENTIAL & CONSUMER IT SOLUTIONS
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-tight">
            Computer Help Without the <span className="text-[#EFCE30]">Headache.</span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Fast, honest diagnostic and repair services for Windows PCs, Apple MacBooks, iMacs, laptops, and hard drive data loss. Serving your home with drop-off, on-site, and instant remote support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onRequestQuote('Consumer PC / Mac Repair')}
              className="bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-bold px-7 py-3.5 rounded-xl text-base shadow-sm transition-all flex items-center gap-2"
            >
              <span>Book Repair Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenAI}
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-6 py-3.5 rounded-xl text-base border border-neutral-700 hover:border-[#EFCE30]/40 transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#EFCE30]" />
              <span>Ask AI Symptom Checker</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4 Core Consumer Service Breakdown */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 tracking-tight">
              Our Consumer Specialties
            </h2>
            <p className="text-neutral-600 text-base mt-2">
              Everything you need to keep your personal technology fast, clean, secure, and fully operational.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. PC & Laptop Repair */}
            <div className="bg-white rounded-3xl p-8 border-2 border-neutral-200 hover:border-[#EFCE30] shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-[#EFCE30] flex items-center justify-center">
                <Laptop className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FEA512] block">
                Flat Rate $120 Standard
              </span>
              <h3 className="text-2xl font-bold font-display text-neutral-900">
                Windows PC & Laptop Repair
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Complete hardware and software diagnostics. We fix broken power jacks, cracked screens, blue-screen crashes, virus infections, overheating fans, and sluggish startup issues across HP, Dell, Lenovo, ASUS, Acer, and custom desktop towers.
              </p>
              <ul className="space-y-2 text-xs text-neutral-700 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FEA512]" />
                  <span>Hardware replacement & component level repair</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FEA512]" />
                  <span>Full malware/spyware eradication & OS optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FEA512]" />
                  <span>SSD solid-state speed upgrades (10x performance boost)</span>
                </li>
              </ul>
            </div>

            {/* 2. Apple MacBook & iMac Specialists */}
            <div className="bg-white rounded-3xl p-8 border-2 border-neutral-200 hover:border-[#EFCE30] shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-[#EFCE30] flex items-center justify-center">
                <Apple className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FEA512] block">
                Flat Rate $169 ($179 for &gt;27")
              </span>
              <h3 className="text-2xl font-bold font-display text-neutral-900">
                Apple Mac & MacBook Repair
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Specialized repair for Apple MacBook Pro, MacBook Air, iMac, and Mac mini systems. Whether you have a spinning beachball, kernel panics, macOS upgrade errors, or failing hardware, our technicians handle Apple architectures with precision.
              </p>
              <ul className="space-y-2 text-xs text-neutral-700 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FEA512]" />
                  <span>MacBook battery, keyboard, trackpad, and screen service</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FEA512]" />
                  <span>Time Machine backup setup & macOS reinstallation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FEA512]" />
                  <span>Intel & Apple Silicon (M1/M2/M3) troubleshooting</span>
                </li>
              </ul>
            </div>

            {/* 3. Seagate Data Recovery */}
            <div className="bg-white rounded-3xl p-8 border-2 border-neutral-200 hover:border-[#EFCE30] shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-[#EFCE30] flex items-center justify-center">
                <HardDrive className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FEA512] block">
                Official Seagate Partner
              </span>
              <h3 className="text-2xl font-bold font-display text-neutral-900">
                Hard Drive & Photo Data Recovery
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Did your external drive stop mounting? Is your laptop drive clicking? We perform in-house forensic extraction for corrupted files and route severe mechanical head-crash cases directly to authorized Seagate cleanroom laboratories.
              </p>
              <ul className="space-y-2 text-xs text-neutral-700 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FEA512]" />
                  <span>Accidentally deleted photos, tax documents & family videos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FEA512]" />
                  <span>Non-destructive cloning of failing hard disks and SSDs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FEA512]" />
                  <span>Secure external backup drive setup to prevent future loss</span>
                </li>
              </ul>
            </div>

            {/* 4. Remote Support & Home Wi-Fi */}
            <div className="bg-white rounded-3xl p-8 border-2 border-neutral-200 hover:border-[#EFCE30] shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-[#EFCE30] flex items-center justify-center">
                <Headphones className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FEA512] block">
                Instant Screen-Share Assistance
              </span>
              <h3 className="text-2xl font-bold font-display text-neutral-900">
                Remote Technical Support
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                No need to unplug your computer. With your explicit permission, our technician connects securely over an encrypted connection to diagnose error popups, configure printer drivers, clean email issues, and install software in real-time.
              </p>
              <ul className="space-y-2 text-xs text-neutral-700 pt-2 border-t border-neutral-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FEA512]" />
                  <span>Immediate support without leaving your house</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FEA512]" />
                  <span>Printer, scanner & Wi-Fi peripheral pairing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FEA512]" />
                  <span>Encrypted 256-bit connection that expires after session</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing Cards */}
      <PricingCards onRequestQuote={onRequestQuote} onOpenAI={onOpenAI} />

      {/* 24/7 Emergency Section */}
      <EmergencyBanner onRequestQuote={() => onRequestQuote('Consumer Emergency')} />
    </div>
  );
};
