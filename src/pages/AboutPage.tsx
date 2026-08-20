import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { CompanyTimeline } from '../components/CompanyTimeline';
import { TrustStrip } from '../components/TrustStrip';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Users,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  HardDrive,
  HeartHandshake,
  Zap,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <div className="animate-in fade-in duration-300">
      {/* Hero Header */}
      <section className="bg-neutral-900 text-white py-16 lg:py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFCE30]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-6 relative">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#EFCE30] bg-neutral-800 px-3.5 py-1 rounded-full border border-[#EFCE30]/30">
            <Award className="w-3.5 h-3.5" />
            COMPUTING SPECIALISTS SINCE 1985
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-tight">
            Four Decades of Dependable{' '}
            <span className="text-[#EFCE30]">Technical Craftsmanship.</span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Since 1985, On-Site Electronics (OSE, INC) has helped thousands of residential clients and small businesses navigate computer breakdowns, network overhauls, and catastrophic data loss.
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Narrative Section: Deep Problem Solving & Local Roots */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FEA512]">
                OUR HERITAGE & PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 tracking-tight">
                Solving the Problems Other Shops Give Up On
              </h2>

              <p className="text-neutral-700 leading-relaxed text-base">
                When On-Site Electronics was established in 1985 in Boxford, Massachusetts, computing was in its infancy. Over the past 40 years, we have adapted through every generation of operating systems, hardware architectures, network standards, and cybersecurity threats.
              </p>

              <p className="text-neutral-700 leading-relaxed text-base">
                Unlike big-box retail stores with revolving door staff, On-Site Electronics is built on deep technical knowledge and long-term customer relationships. When you bring your system to us or call our 24/7 hotline, you work directly with seasoned specialists who treat your data, hardware, and downtime with the utmost urgency.
              </p>

              <div className="p-5 rounded-2xl bg-neutral-50 border-2 border-neutral-200 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EFCE30] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-950" />
                  </div>
                  <div>
                    <strong className="text-neutral-900 block text-sm">Honest, Non-Pushy Advice</strong>
                    <span className="text-xs text-neutral-600">If a machine is beyond economical repair, we tell you frankly and help you recover data safely.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EFCE30] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-950" />
                  </div>
                  <div>
                    <strong className="text-neutral-900 block text-sm">24/7 Rapid Response Commitment</strong>
                    <span className="text-xs text-neutral-600">Disasters don't wait for business hours. Our on-call engineers are available day and night.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EFCE30] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-950" />
                  </div>
                  <div>
                    <strong className="text-neutral-900 block text-sm">Authorized Seagate Recovery & Reseller Status</strong>
                    <span className="text-xs text-neutral-600">Official partnerships with Dell, HP, Microsoft, SonicWall, and Seagate cleanroom facilities.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Pillars Box */}
            <div className="lg:col-span-6">
              <div className="bg-[#0B0B0B] text-white rounded-3xl p-8 sm:p-10 border-2 border-neutral-800 shadow-2xl relative">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#EFCE30]" />

                <span className="text-xs font-bold uppercase tracking-wider text-[#FCF09C] block mb-2">
                  THE OSE PILLARS
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-6">
                  Why Customers Stay With Us for Decades
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[#EFCE30] flex-shrink-0">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Trust & Stability</h4>
                      <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
                        Operating continuously under the same corporate entity (OSE, INC / On-Site Electronics, INC) since 1985. We stand firmly behind every warranty and repair.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[#EFCE30] flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Local North Shore Roots</h4>
                      <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
                        Based in Boxford, MA with technicians available for swift on-site dispatch across Essex County, Middlesex County, and Greater Boston.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[#EFCE30] flex-shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Confidentiality & Data Integrity</h4>
                      <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
                        Your private documents, family photos, and proprietary corporate databases are handled under strict non-disclosure protocols and encrypted transfers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1985 to Present Timeline */}
      <CompanyTimeline />

      {/* Call to action section */}
      <section className="py-16 px-4 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-extrabold font-display text-neutral-900">
            Ready to Experience 40+ Years of IT Expertise?
          </h3>
          <p className="text-neutral-600 text-base max-w-xl mx-auto">
            Get in touch with our Boxford technical team today for computer repairs, security consultations, or equipment quotes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onRequestQuote}
              className="bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-bold px-7 py-3.5 rounded-xl text-base shadow-sm transition-all flex items-center gap-2"
            >
              <span>Request Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={COMPANY_INFO.phoneTel}
              className="bg-neutral-900 hover:bg-black text-white font-bold px-6 py-3.5 rounded-xl text-base transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#EFCE30]" />
              <span>Call 24/7: 978-887-6900</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
