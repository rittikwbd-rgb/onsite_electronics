import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import {
  Calculator,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Phone,
  ShieldAlert,
  Sparkles,
  Info,
  Laptop,
  Building2,
  HardDrive,
  Wrench,
  Clock,
} from 'lucide-react';

interface SmartQuoteAssistantProps {
  onCompleteQuote: (quoteData: any) => void;
}

export const SmartQuoteAssistant: React.FC<SmartQuoteAssistantProps> = ({ onCompleteQuote }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    deviceType: 'Windows PC / Laptop',
    audience: 'Home / Personal',
    issueType: 'Slow performance / Virus infection',
    urgency: 'Standard (Next 24-48 hours)',
    serviceMode: 'Drop-off / On-Site',
  });

  const [estimateGenerated, setEstimateGenerated] = useState(false);

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      setEstimateGenerated(true);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const getMatchedService = () => {
    if (formData.deviceType.includes('Apple')) {
      return {
        title: 'Apple / Mac Specialist Repair',
        basePrice: '$169',
        category: 'Consumer Apple Service',
        notes: 'Flat diagnostic benchmark for MacBook and iMac devices with certified Apple hardware protocols.',
      };
    }
    if (formData.issueType.includes('Data Loss') || formData.issueType.includes('Clicking')) {
      return {
        title: 'Seagate Cleanroom Data Recovery',
        basePrice: 'Custom Quote via Seagate Partner',
        category: 'Data Recovery Service',
        notes: 'Priority recovery evaluation. Keep the drive powered down to maximize success.',
      };
    }
    if (formData.audience.includes('Business') || formData.deviceType.includes('Server')) {
      return {
        title: 'Small Business IT Infrastructure Support',
        basePrice: 'Starting at $179 (Non-RAID) / $209 (RAID)',
        category: 'Commercial Business IT',
        notes: 'Includes server diagnostics, firewall audit, and on-site commercial network assessment.',
      };
    }
    return {
      title: 'Standard PC & Laptop Repair',
      basePrice: '$120',
      category: 'Consumer PC Service',
      notes: 'Includes complete hardware inspection, virus cleanup, and Windows OS tune-up.',
    };
  };

  const matched = getMatchedService();

  return (
    <div className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl overflow-hidden" id="smart-quote-wizard">
      {/* Header */}
      <div className="bg-neutral-900 text-white p-6 sm:p-8 relative">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#EFCE30]" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#EFCE30] bg-neutral-800 px-3 py-1 rounded-full border border-[#EFCE30]/30 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              INTERACTIVE SERVICE ESTIMATE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Get a Service Estimate
            </h3>
            <p className="text-neutral-300 text-xs sm:text-sm mt-1">
              Answer 5 quick questions to identify the ideal OSE service and standard benchmark pricing.
            </p>
          </div>

          {/* Step Indicator */}
          {!estimateGenerated && (
            <div className="flex items-center gap-1.5 bg-neutral-800 px-3.5 py-1.5 rounded-full border border-neutral-700 text-xs font-semibold text-[#FCF09C]">
              <span>Step {step} of 5</span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {!estimateGenerated && (
          <div className="w-full bg-neutral-800 h-1.5 rounded-full mt-6 overflow-hidden">
            <div
              className="bg-[#EFCE30] h-full transition-all duration-300 rounded-full"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        )}
      </div>

      {/* Wizard Body */}
      <div className="p-6 sm:p-8">
        {!estimateGenerated ? (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Step 1: Device Type */}
            {step === 1 && (
              <div>
                <h4 className="text-lg font-bold font-display text-neutral-900 mb-1">
                  1. What device or service do you need help with?
                </h4>
                <p className="text-xs text-neutral-500 mb-4">
                  Select the primary hardware type or computing category.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'Windows PC / Laptop', label: 'Windows Desktop or Laptop', desc: 'HP, Dell, Lenovo, Custom PCs' },
                    { id: 'Apple iMac / MacBook', label: 'Apple Mac / MacBook / iMac', desc: 'macOS, Retina iMac, M-Series' },
                    { id: 'Server / RAID System', label: 'Office Server or RAID Array', desc: 'Exchange, Windows Server, NAS' },
                    { id: 'Network / Cabling / Firewall', label: 'Network, Wi-Fi & Firewalls', desc: 'SonicWall, WatchGuard, Cabling' },
                    { id: 'Hard Drive Data Recovery', label: 'Hard Drive / SSD Data Recovery', desc: 'Seagate cleanroom & logical recovery' },
                    { id: 'Other / Not Sure', label: 'Other / Not Sure', desc: 'General technology troubleshooting' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, deviceType: item.id })}
                      className={`text-left p-4 rounded-2xl border-2 transition-all ${
                        formData.deviceType === item.id
                          ? 'border-[#EFCE30] bg-[#FCF09C]/20 shadow-xs'
                          : 'border-neutral-200 hover:border-neutral-300 bg-neutral-50/60'
                      }`}
                    >
                      <span className="font-bold text-sm text-neutral-900 block">{item.label}</span>
                      <span className="text-xs text-neutral-500">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Audience */}
            {step === 2 && (
              <div>
                <h4 className="text-lg font-bold font-display text-neutral-900 mb-1">
                  2. Is this for home or business?
                </h4>
                <p className="text-xs text-neutral-500 mb-4">
                  Helps us assign either consumer technical support or enterprise commercial infrastructure.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      id: 'Home / Personal',
                      title: 'Home & Personal Use',
                      desc: 'Individual computers, family laptops, home Wi-Fi, personal photo recovery.',
                      icon: <Laptop className="w-6 h-6 text-[#FEA512]" />,
                    },
                    {
                      id: 'Small Business / Commercial',
                      title: 'Small Business / Commercial',
                      desc: 'Office workstations, commercial firewalls, multi-user servers, structured cabling.',
                      icon: <Building2 className="w-6 h-6 text-neutral-900" />,
                    },
                  ].map((aud) => (
                    <button
                      key={aud.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, audience: aud.id })}
                      className={`text-left p-5 rounded-2xl border-2 transition-all ${
                        formData.audience === aud.id
                          ? 'border-[#EFCE30] bg-[#FCF09C]/20 shadow-xs'
                          : 'border-neutral-200 hover:border-neutral-300 bg-neutral-50/60'
                      }`}
                    >
                      <div className="mb-2">{aud.icon}</div>
                      <span className="font-bold text-base text-neutral-900 block">{aud.title}</span>
                      <span className="text-xs text-neutral-500 leading-relaxed block mt-1">{aud.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Issue */}
            {step === 3 && (
              <div>
                <h4 className="text-lg font-bold font-display text-neutral-900 mb-1">
                  3. What issue are you experiencing?
                </h4>
                <p className="text-xs text-neutral-500 mb-4">
                  Select the closest symptom or challenge.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Computer won’t turn on / Black screen',
                    'Slow performance / Virus infection',
                    'Clicking hard drive / Lost files',
                    'Cracked screen / Liquid spill / Hardware damage',
                    'Network down / Internet & Wi-Fi issues',
                    'Email / Outlook / Server configuration',
                    'Security audit / Firewall installation',
                    'Need new computer or hardware purchase',
                  ].map((iss) => (
                    <button
                      key={iss}
                      type="button"
                      onClick={() => setFormData({ ...formData, issueType: iss })}
                      className={`text-left p-3.5 rounded-xl border-2 text-sm font-medium transition-all ${
                        formData.issueType === iss
                          ? 'border-[#EFCE30] bg-[#FCF09C]/30 text-neutral-950 font-bold'
                          : 'border-neutral-200 hover:border-neutral-300 bg-white text-neutral-700'
                      }`}
                    >
                      {iss}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Urgency */}
            {step === 4 && (
              <div>
                <h4 className="text-lg font-bold font-display text-neutral-900 mb-1">
                  4. How urgent is this problem?
                </h4>
                <p className="text-xs text-neutral-500 mb-4">
                  We offer standard scheduling and 24/7 on-call emergency response.
                </p>
                <div className="space-y-3">
                  {[
                    {
                      id: 'Critical (24/7 Emergency Dispatch Needed)',
                      title: 'Critical (24/7 Emergency Dispatch Needed)',
                      desc: 'Business is down, active ransomware attack, or severe mission-critical outage.',
                      badge: '24/7 Priority Line',
                    },
                    {
                      id: 'Standard (Next 24-48 hours)',
                      title: 'Standard (Next 24-48 hours)',
                      desc: 'Regular troubleshooting, prompt turnaround during business hours.',
                      badge: 'Standard Turnaround',
                    },
                    {
                      id: 'Flexible / General Planning',
                      title: 'Flexible / General Planning & Quotes',
                      desc: 'Planning future upgrades, network survey, or price comparisons.',
                      badge: 'Consultation',
                    },
                  ].map((urg) => (
                    <button
                      key={urg.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, urgency: urg.id })}
                      className={`w-full text-left p-4 rounded-2xl border-2 flex items-center justify-between transition-all ${
                        formData.urgency === urg.id
                          ? 'border-[#EFCE30] bg-[#FCF09C]/20'
                          : 'border-neutral-200 hover:border-neutral-300 bg-white'
                      }`}
                    >
                      <div>
                        <span className="font-bold text-sm text-neutral-900 block">{urg.title}</span>
                        <span className="text-xs text-neutral-500">{urg.desc}</span>
                      </div>
                      <span className="text-xs font-bold text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full border border-neutral-200">
                        {urg.badge}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Service Mode */}
            {step === 5 && (
              <div>
                <h4 className="text-lg font-bold font-display text-neutral-900 mb-1">
                  5. Do you need on-site or remote assistance?
                </h4>
                <p className="text-xs text-neutral-500 mb-4">
                  Choose your preferred service delivery method.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'On-Site Dispatch (Boxford & North Shore)', label: 'On-Site Dispatch', desc: 'Technician comes to your home or office.' },
                    { id: 'Encrypted Remote Support', label: 'Remote Technical Support', desc: 'Instant screen sharing session.' },
                    { id: 'Drop-off at Boxford Lab', label: 'Drop-Off Service', desc: 'Bring equipment to 37 Georgetown Rd.' },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceMode: mode.id })}
                      className={`text-left p-4 rounded-2xl border-2 transition-all ${
                        formData.serviceMode === mode.id
                          ? 'border-[#EFCE30] bg-[#FCF09C]/30 shadow-xs'
                          : 'border-neutral-200 hover:border-neutral-300 bg-white'
                      }`}
                    >
                      <span className="font-bold text-sm text-neutral-900 block">{mode.label}</span>
                      <span className="text-xs text-neutral-500 mt-1 block">{mode.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-1.5 text-neutral-600 hover:text-neutral-900 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-neutral-100 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-bold px-6 py-2.5 rounded-xl shadow-xs transition-all text-sm group"
              >
                <span>{step === 5 ? 'Generate Estimate' : 'Continue'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ) : (
          /* Estimate Results Screen */
          <div className="space-y-6 animate-in zoom-in-95 duration-200">
            <div className="p-6 sm:p-8 bg-neutral-900 text-white rounded-3xl border-2 border-[#EFCE30] shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#EFCE30] bg-neutral-800 px-3 py-1 rounded-full border border-[#EFCE30]/30">
                  ESTIMATE SUMMARY
                </span>
                <span className="text-xs text-emerald-400 font-semibold">Matched Service Profile</span>
              </div>

              <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold block">
                Based on the information provided, the appropriate OSE service appears to be:
              </span>
              <h4 className="text-2xl sm:text-3xl font-black font-display text-white mt-1">
                {matched.title}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-neutral-800 rounded-2xl border border-neutral-700">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                    Standard Benchmark Rate
                  </span>
                  <span className="text-2xl font-black text-[#EFCE30] font-display">
                    {matched.basePrice}
                  </span>
                  <p className="text-xs text-neutral-300 mt-1">
                    {matched.notes}
                  </p>
                </div>

                <div className="p-4 bg-neutral-800 rounded-2xl border border-neutral-700 space-y-2 text-xs text-neutral-300">
                  <div>
                    <strong className="text-white">Device & Scope:</strong> {formData.deviceType} ({formData.audience})
                  </div>
                  <div>
                    <strong className="text-white">Reported Issue:</strong> {formData.issueType}
                  </div>
                  <div>
                    <strong className="text-white">Delivery Mode:</strong> {formData.serviceMode}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => onCompleteQuote(formData)}
                  className="inline-flex items-center gap-2 bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-all flex-1 justify-center"
                >
                  <span>Request Official Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={COMPANY_INFO.phoneTel}
                  className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-5 py-3 rounded-xl text-sm border border-neutral-600 transition-colors justify-center"
                >
                  <Phone className="w-4 h-4 text-[#EFCE30]" />
                  <span>Call 978-887-6900</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setEstimateGenerated(false);
                  }}
                  className="text-xs text-neutral-400 hover:text-white px-3 py-2 transition-colors"
                >
                  Recalculate
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#FEA512] flex-shrink-0 mt-0.5" />
              <span>
                <strong>Note on Estimates:</strong> AI service estimates provide benchmark reference pricing and recommendations. Official pricing and hardware parts are confirmed following direct physical or remote diagnostic evaluation by an On-Site Electronics technician.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
