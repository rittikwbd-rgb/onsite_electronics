import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { EmergencyBanner } from '../components/EmergencyBanner';
import {
  Building2,
  ShieldCheck,
  RotateCcw,
  Network,
  Flame,
  Server,
  Database,
  CheckCircle2,
  ArrowRight,
  Phone,
  Lock,
  Zap,
  Clock,
  ShieldAlert,
} from 'lucide-react';

interface BusinessServicesPageProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: (serviceTitle?: string) => void;
}

export const BusinessServicesPage: React.FC<BusinessServicesPageProps> = ({
  onNavigate,
  onRequestQuote,
}) => {
  return (
    <div className="animate-in fade-in duration-300">
      {/* Hero Section */}
      <section className="bg-[#0B0B0B] text-white py-16 lg:py-24 px-4 relative overflow-hidden border-b border-neutral-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFCE30]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-6 relative">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FCF09C] bg-neutral-900 px-3.5 py-1 rounded-full border border-[#EFCE30]/30">
            <Building2 className="w-3.5 h-3.5 text-[#EFCE30]" />
            COMMERCIAL & SMALL BUSINESS IT INFRASTRUCTURE
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-tight">
            IT Infrastructure You Can <span className="text-[#EFCE30]">Rely On.</span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade network engineering, cybersecurity audits, SonicWall & WatchGuard firewalls, disaster recovery, and 24/7 dedicated response for businesses that cannot afford downtime.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onRequestQuote('Commercial IT Consultation')}
              className="bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-bold px-7 py-3.5 rounded-xl text-base shadow-sm transition-all flex items-center gap-2"
            >
              <span>Schedule Commercial IT Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={COMPANY_INFO.phoneTel}
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-6 py-3.5 rounded-xl text-base border border-neutral-700 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#EFCE30]" />
              <span>Direct Commercial Line: 978-887-6900</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6 Core Business Capabilities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FEA512]">
              MISSION-CRITICAL CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 mt-2 tracking-tight">
              Complete Business IT Protection & Architecture
            </h2>
            <p className="text-neutral-600 text-base mt-2">
              From physical cabling drops to perimeter firewalls and disaster recovery, On-Site Electronics manages your entire technology foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. IT Security Audits */}
            <div className="bg-neutral-50 rounded-3xl p-8 border-2 border-neutral-200 hover:border-[#EFCE30] shadow-2xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-[#EFCE30] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900">
                IT Security Audits & Compliance
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Comprehensive vulnerability assessments, penetration testing, endpoint security auditing, and compliance checks (HIPAA, PCI, Mass Data Privacy Law 201 CMR 17.00).
              </p>
              <ul className="space-y-1.5 text-xs text-neutral-700 pt-2 border-t border-neutral-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FEA512]" />
                  <span>External & internal attack surface analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FEA512]" />
                  <span>Staff phishing & cybersecurity protocols</span>
                </li>
              </ul>
            </div>

            {/* 2. Disaster Recovery & Backups */}
            <div className="bg-neutral-50 rounded-3xl p-8 border-2 border-neutral-200 hover:border-[#EFCE30] shadow-2xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-[#EFCE30] flex items-center justify-center">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900">
                Disaster Recovery & Continuity
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Automated 3-2-1 hybrid backup architectures combining local encrypted appliances with redundant immutable cloud storage. Near-zero RTO (Recovery Time Objective).
              </p>
              <ul className="space-y-1.5 text-xs text-neutral-700 pt-2 border-t border-neutral-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FEA512]" />
                  <span>Ransomware-proof immutable image snapshots</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FEA512]" />
                  <span>Regular failover testing & verified restore drills</span>
                </li>
              </ul>
            </div>

            {/* 3. Network Infrastructure & Cabling */}
            <div className="bg-neutral-50 rounded-3xl p-8 border-2 border-neutral-200 hover:border-[#EFCE30] shadow-2xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-[#EFCE30] flex items-center justify-center">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900">
                Network Cabling & Infrastructure
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Structured physical cabling (Cat-6, Cat-6A, Cat-7, Single & Multi-Mode Fiber), patch panel cleanups, managed PoE switches, and high-density commercial Wi-Fi 6/7 access points.
              </p>
              <ul className="space-y-1.5 text-xs text-neutral-700 pt-2 border-t border-neutral-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FEA512]" />
                  <span>Certified fluking & wire-mapping tests</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FEA512]" />
                  <span>Office relocations & new building buildouts</span>
                </li>
              </ul>
            </div>

            {/* 4. Firewall & Perimeter Protection */}
            <div className="bg-neutral-50 rounded-3xl p-8 border-2 border-neutral-200 hover:border-[#EFCE30] shadow-2xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-[#EFCE30] flex items-center justify-center">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900">
                Firewalls: SonicWall & WatchGuard
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Authorized reseller deployment of Next-Generation Firewalls (NGFW). Deep Packet Inspection, IPS/IDS, geo-blocking, content filtering, and secure Site-to-Site VPN tunnels.
              </p>
              <ul className="space-y-1.5 text-xs text-neutral-700 pt-2 border-t border-neutral-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FEA512]" />
                  <span>Zero-day threat inspection (SonicWall Capture ATP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FEA512]" />
                  <span>Encrypted multi-branch remote office links</span>
                </li>
              </ul>
            </div>

            {/* 5. Server Installation & Active Directory */}
            <div className="bg-neutral-50 rounded-3xl p-8 border-2 border-neutral-200 hover:border-[#EFCE30] shadow-2xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-[#EFCE30] flex items-center justify-center">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900">
                Server Installation & Management
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Windows Server (2019/2022/2025), Microsoft Exchange, Domain Controllers (Active Directory), Microsoft 365 migrations, and hardware RAID array configuration.
              </p>
              <ul className="space-y-1.5 text-xs text-neutral-700 pt-2 border-t border-neutral-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FEA512]" />
                  <span>Non-RAID ($179) & Hardware RAID ($209) setups</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FEA512]" />
                  <span>Virtualization (Hyper-V / VMware ESXi)</span>
                </li>
              </ul>
            </div>

            {/* 6. Commercial Data Recovery */}
            <div className="bg-neutral-50 rounded-3xl p-8 border-2 border-neutral-200 hover:border-[#EFCE30] shadow-2xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-[#EFCE30] flex items-center justify-center">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900">
                Commercial Storage & RAID Recovery
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Critical RAID 5, RAID 6, RAID 10, SAN, and NAS recovery. Authorized Seagate Recovery Services partner for proprietary mechanical breakdowns and SQL database reconstitution.
              </p>
              <ul className="space-y-1.5 text-xs text-neutral-700 pt-2 border-t border-neutral-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FEA512]" />
                  <span>Priority emergency expediting available</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FEA512]" />
                  <span>Strict NDA and compliance data handling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Consultation Box */}
      <section className="py-16 px-4 bg-[#E7EDF1]/60">
        <div className="max-w-4xl mx-auto bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 border-2 border-[#EFCE30]/60 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#EFCE30] block mb-1">
              REQUEST AN ON-SITE NETWORK & SECURITY AUDIT
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Prevent Outages Before They Happen
            </h3>
            <p className="text-sm text-neutral-300 mt-2 max-w-lg leading-relaxed">
              Our senior IT engineers will inspect your server room, test firewall throughput, review backup integrity, and deliver an actionable security report.
            </p>
          </div>

          <div className="w-full md:w-auto flex-shrink-0">
            <button
              onClick={() => onRequestQuote('Business IT Audit')}
              className="w-full md:w-auto bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-bold px-7 py-3.5 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Schedule Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 24/7 Emergency Banner */}
      <EmergencyBanner onRequestQuote={() => onRequestQuote('Business IT Emergency Outage')} />
    </div>
  );
};
