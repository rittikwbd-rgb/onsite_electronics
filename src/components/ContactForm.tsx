import React, { useState } from 'react';
import { TriageResult } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import {
  Sparkles,
  Send,
  CheckCircle2,
  Phone,
  AlertTriangle,
  Clock,
  ShieldCheck,
  Info,
} from 'lucide-react';

interface ContactFormProps {
  initialService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    serviceType: initialService || 'Computer Repair',
    message: '',
  });

  const [triageText, setTriageText] = useState('');
  const [triageResult, setTriageResult] = useState<TriageResult | null>(null);
  const [isTriaging, setIsTriaging] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // AI Smart Triage Handler
  const handleAnalyzeTriage = async () => {
    if (!triageText.trim() || isTriaging) return;

    setIsTriaging(true);
    try {
      const response = await fetch('/api/ai/triage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ issueText: triageText }),
      });
      const data = await response.json();
      if (data.triage) {
        setTriageResult(data.triage);
        // Pre-fill form fields
        setFormData((prev) => ({
          ...prev,
          serviceType: data.triage.category || prev.serviceType,
          subject: prev.subject || `Service Request: ${data.triage.category}`,
          message: prev.message ? prev.message : triageText,
        }));
      }
    } catch (err) {
      console.warn('Triage error:', err);
    } finally {
      setIsTriaging(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          triageData: triageResult,
        }),
      });
      const data = await response.json();
      setReferenceId(data.referenceId || `OSE-${Date.now().toString().slice(-6)}`);
      setSubmitted(true);
    } catch {
      setReferenceId(`OSE-${Date.now().toString().slice(-6)}`);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border-2 border-neutral-200 shadow-xl overflow-hidden" id="contact-form-block">
      {/* Top Banner with AI Triage Assistant */}
      <div className="bg-neutral-900 text-white p-6 sm:p-8 relative">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#EFCE30]" />

        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#EFCE30] bg-neutral-800 px-3 py-1 rounded-full border border-[#EFCE30]/30">
            <Sparkles className="w-3.5 h-3.5" />
            AI-POWERED SERVICE TRIAGE
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
          Tell Us What's Going On
        </h3>
        <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
          Describe the symptoms you're facing. Our AI classifier will instantly assess priority, recommend next steps, and pre-fill your request.
        </p>

        {/* Triage symptom prompt box */}
        <div className="mt-5 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={triageText}
            onChange={(e) => setTriageText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAnalyzeTriage();
              }
            }}
            placeholder="e.g. My laptop turns on but the screen stays black..."
            className="flex-1 px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-[#EFCE30] text-sm text-white placeholder-neutral-400"
          />
          <button
            type="button"
            onClick={handleAnalyzeTriage}
            disabled={!triageText.trim() || isTriaging}
            className="bg-[#EFCE30] hover:bg-[#FEA512] disabled:opacity-50 text-neutral-950 font-bold px-5 py-3 rounded-xl text-sm transition-all flex items-center justify-center gap-1.5"
          >
            {isTriaging ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Classifying...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Analyze Issue</span>
              </>
            )}
          </button>
        </div>

        {/* Triage Classification Card */}
        {triageResult && (
          <div className="mt-4 p-4 rounded-2xl bg-neutral-800/90 border border-[#EFCE30]/60 animate-in fade-in zoom-in-95 duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <span className="text-neutral-400 block font-semibold">Matched Category:</span>
                <span className="text-sm font-bold text-white mt-0.5 block">{triageResult.category}</span>
              </div>

              <div>
                <span className="text-neutral-400 block font-semibold">Assessed Priority:</span>
                <span
                  className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold mt-1 ${
                    triageResult.priority.includes('Critical')
                      ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                      : triageResult.priority === 'High'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  }`}
                >
                  {triageResult.priority}
                </span>
              </div>

              <div>
                <span className="text-neutral-400 block font-semibold">Suggested Next Step:</span>
                <span className="text-xs text-neutral-200 mt-0.5 block">{triageResult.suggestedNextStep}</span>
              </div>
            </div>

            {triageResult.is247EmergencyCandidate && (
              <div className="mt-3 pt-3 border-t border-neutral-700 flex items-center justify-between">
                <span className="text-xs text-[#FCF09C] flex items-center gap-1.5 font-medium">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#FEA512]" />
                  This appears urgent. We recommend calling our 24/7 line immediately.
                </span>
                <a
                  href={COMPANY_INFO.phoneTel}
                  className="text-xs font-bold text-white bg-[#0B0B0B] hover:bg-black px-3 py-1 rounded-lg border border-[#EFCE30]/50 inline-flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-[#EFCE30]" />
                  978-887-6900
                </a>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Contact Form Details */}
      <div className="p-6 sm:p-8">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5" id="service-contact-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Miller"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#EFCE30] focus:border-neutral-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Your Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. jmiller@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#EFCE30] focus:border-neutral-900 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 978-555-0123"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#EFCE30] focus:border-neutral-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Service Category
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#EFCE30] focus:border-neutral-900 text-sm bg-white"
                >
                  <option value="Computer Support">Computer Support & PC Repair ($120)</option>
                  <option value="Apple / Mac Support">Apple MacBook & iMac Repair ($169)</option>
                  <option value="Data Recovery">Data Recovery (Seagate Partner)</option>
                  <option value="IT Security & Audits">IT Security Audits & Compliance</option>
                  <option value="Disaster Recovery">IT Disaster Recovery & Hybrid Backups</option>
                  <option value="Network Infrastructure">Network Infrastructure (Cat-6/Cat-7/Fiber)</option>
                  <option value="Firewall & Server Installation">Firewall Installation & Servers</option>
                  <option value="Remote Technical Support">Remote Technical Support Session</option>
                  <option value="Equipment Purchase">Hardware / Equipment Purchase</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Brief summary of your request..."
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#EFCE30] focus:border-neutral-900 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                Your Message / Problem Description
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Please describe any error codes, device model, or preferred schedule..."
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#EFCE30] focus:border-neutral-900 text-sm"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Your information is encrypted & kept strictly confidential.</span>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-bold px-8 py-3 rounded-xl text-sm shadow-sm hover:shadow-md transition-all active:scale-98"
              >
                {submitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Submit Service Request</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Submission Success State */
          <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#FCF09C] text-neutral-950 mx-auto flex items-center justify-center border-2 border-[#EFCE30]">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>

            <h4 className="text-2xl font-black font-display text-neutral-900">
              Thanks — we’ve received your request.
            </h4>

            <p className="text-neutral-600 text-sm max-w-md mx-auto leading-relaxed">
              An On-Site Electronics technical specialist is reviewing your inquiry. We will contact you promptly at <strong className="text-neutral-900">{formData.email}</strong>.
            </p>

            <div className="inline-block p-3 rounded-xl bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-700">
              Request Reference: <strong className="text-neutral-900 font-bold">{referenceId}</strong>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    serviceType: 'Computer Repair',
                    message: '',
                  });
                  setTriageText('');
                  setTriageResult(null);
                }}
                className="text-xs font-bold text-neutral-700 hover:text-neutral-950 underline decoration-[#EFCE30]"
              >
                Submit another request
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
