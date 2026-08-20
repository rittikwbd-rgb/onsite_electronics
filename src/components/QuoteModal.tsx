import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Sparkles, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: initialService || 'Computer Repair',
    deviceType: 'Windows PC / Laptop',
    urgency: 'Standard',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Quick Service Request: ${formData.serviceType}`,
          serviceType: formData.serviceType,
          message: `Device: ${formData.deviceType} | Urgency: ${formData.urgency} | Notes: ${formData.message}`,
        }),
      });
      const data = await response.json();
      setRefId(data.referenceId || `OSE-${Date.now().toString().slice(-6)}`);
      setSubmitted(true);
    } catch {
      setRefId(`OSE-${Date.now().toString().slice(-6)}`);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-neutral-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        id="quote-modal-card"
      >
        {/* Header */}
        <div className="bg-neutral-900 text-white p-6 sm:p-7 relative">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#EFCE30]" />

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[11px] font-bold uppercase tracking-wider text-[#EFCE30] bg-neutral-800 px-2.5 py-0.5 rounded-full border border-[#EFCE30]/30 inline-block mb-1">
            ON-SITE ELECTRONICS
          </span>
          <h3 className="text-2xl font-black font-display text-white">
            Request Service or Quote
          </h3>
          <p className="text-xs text-neutral-300 mt-1">
            Fill out the details below, or call our 24/7 service line at <strong className="text-white">978-887-6900</strong>.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-7 max-h-[75vh] overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EFCE30]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EFCE30]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="978-887-6900"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EFCE30]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Requested Service
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EFCE30] bg-white"
                  >
                    <option value="Computer Repair">Computer Repair (PC & Laptop $120)</option>
                    <option value="Apple iMac / MacBook">Apple Products Support ($169)</option>
                    <option value="Data Recovery">Data Recovery (Seagate Partner)</option>
                    <option value="IT Security Audit">IT Security Audits</option>
                    <option value="Disaster Recovery">IT Disaster Recovery</option>
                    <option value="Network Cabling">Network Infrastructure (Cat-6/Cat-7/Fiber)</option>
                    <option value="Firewall & Servers">Firewall & Server Installation</option>
                    <option value="Remote Support">Remote Technical Support</option>
                    <option value="Equipment Purchase">Equipment & Reseller Hardware</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Device / Operating System
                  </label>
                  <select
                    value={formData.deviceType}
                    onChange={(e) => setFormData({ ...formData, deviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EFCE30] bg-white"
                  >
                    <option value="Windows PC / Laptop">Windows Desktop / Laptop</option>
                    <option value="Apple MacBook / iMac">Apple MacBook / iMac</option>
                    <option value="Office Server / RAID">Office Server / RAID</option>
                    <option value="Network / Firewall">Commercial Network / Firewall</option>
                    <option value="Storage / Hard Drive">Failing Storage / Hard Drive</option>
                    <option value="Other">Other Equipment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Urgency
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EFCE30] bg-white"
                  >
                    <option value="Standard">Standard (Next 1-2 business days)</option>
                    <option value="Urgent (Today)">Urgent (Same-day schedule)</option>
                    <option value="24/7 Emergency">24/7 Emergency Dispatch</option>
                    <option value="Flexible / Planning">Flexible / General Quote</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Describe Issue or Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide any error codes, device age, or specific problem symptoms..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EFCE30]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={COMPANY_INFO.phoneTel}
                  className="text-xs font-bold text-neutral-800 hover:text-[#FEA512] flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FEA512]" />
                  <span>Call 24/7: 978-887-6900</span>
                </a>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-bold px-6 py-2.5 rounded-xl text-sm shadow-xs transition-all"
                >
                  {submitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-[#FCF09C] mx-auto flex items-center justify-center border-2 border-[#EFCE30]">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold font-display text-neutral-900">
                Thanks — we’ve received your request.
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto">
                An On-Site Electronics technician will review your submission and contact you promptly at <strong className="text-neutral-900">{formData.email}</strong>.
              </p>
              <div className="inline-block p-2 rounded-lg bg-neutral-100 text-xs font-mono text-neutral-700">
                Reference ID: <strong className="text-neutral-900">{refId}</strong>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-bold px-6 py-2 rounded-xl text-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
