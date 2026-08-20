import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import {
  Sparkles,
  X,
  Send,
  Phone,
  ArrowRight,
  ShieldCheck,
  Bot,
  User,
  RotateCcw,
  Info,
} from 'lucide-react';

interface AIServiceNavigatorProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
  onRequestQuote: (serviceTitle?: string) => void;
}

const QUICK_OPTIONS = [
  "My computer isn't working",
  'I need data recovery',
  'I need business IT support',
  'I need cybersecurity help',
  'I need a network installed',
  'I need a quote',
  "I'm not sure what I need",
];

export const AIServiceNavigator: React.FC<AIServiceNavigatorProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onRequestQuote,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        "Hi! I'm the OSE Service Assistant. What technology problem can I help you with today?",
      timestamp: 'Just now',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{
    category: string;
    why: string;
    nextStep: string;
    serviceTitle: string;
  } | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputVal.trim();
    if (!query || loading) return;

    setInputVal('');

    const newMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: 'Just now',
    };

    const updatedHistory = [...messages, newMsg];
    setMessages(updatedHistory);
    setLoading(true);

    try {
      const response = await fetch('/api/ai/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedHistory.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      const assistantReply =
        data.reply ||
        "Based on what you've described, our team at On-Site Electronics can solve this. Would you like to schedule a diagnosis or speak with an engineer?";

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: assistantReply,
          timestamp: 'Just now',
        },
      ]);

      // Detect recommendation opportunity
      const lower = query.toLowerCase();
      if (lower.includes('data') || lower.includes('lost') || lower.includes('drive')) {
        setRecommendation({
          category: 'Data Recovery Services',
          why: 'Failing drives or deleted files require authorized Seagate cleanroom procedures to prevent permanent loss.',
          nextStep: 'Power down the drive and bring or ship to OSE for non-destructive data recovery.',
          serviceTitle: 'Data Recovery',
        });
      } else if (lower.includes('mac') || lower.includes('apple') || lower.includes('imac') || lower.includes('macbook')) {
        setRecommendation({
          category: 'Apple / Mac Support',
          why: 'Specialized Apple hardware diagnostics and macOS configuration starting at $169.',
          nextStep: 'Schedule a drop-off or on-site diagnostic session.',
          serviceTitle: 'Apple Products Support',
        });
      } else if (lower.includes('network') || lower.includes('cable') || lower.includes('fiber') || lower.includes('switch')) {
        setRecommendation({
          category: 'Network Infrastructure',
          why: 'Professional Cat-6/Cat-7/Fiber pulling, patch panel termination, and commercial switch installation.',
          nextStep: 'Request an on-site physical network survey and estimate.',
          serviceTitle: 'Network Infrastructure',
        });
      } else if (lower.includes('business') || lower.includes('security') || lower.includes('server') || lower.includes('firewall')) {
        setRecommendation({
          category: 'Small Business IT Services',
          why: 'End-to-end security audits, SonicWall firewalls, Exchange servers, and 24/7 disaster readiness.',
          nextStep: 'Connect with a commercial IT architect for consultation.',
          serviceTitle: 'Small Business IT',
        });
      } else if (updatedHistory.length >= 4 && !recommendation) {
        setRecommendation({
          category: 'Comprehensive Computer Support',
          why: 'Our technicians have over 40 years of experience troubleshooting difficult PC and hardware issues.',
          nextStep: 'Book a standard diagnostic ($120 for PCs/laptops) or request remote support.',
          serviceTitle: 'Computer Repair',
        });
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-err-${Date.now()}`,
          role: 'assistant',
          content:
            'We can help resolve that technology issue! For immediate assistance, feel free to call our 24/7 hotline at 978-887-6900.',
          timestamp: 'Just now',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content:
          "Hi! I'm the OSE Service Assistant. What technology problem can I help you with today?",
        timestamp: 'Just now',
      },
    ]);
    setRecommendation(null);
    setInputVal('');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-neutral-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col h-[640px] max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        id="ask-ose-ai-modal"
      >
        {/* Header */}
        <div className="bg-neutral-900 text-white px-6 py-4 border-b border-neutral-800 flex items-center justify-between relative">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#EFCE30]" />

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EFCE30] text-neutral-950 flex items-center justify-center font-bold">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base font-display text-white">Ask OSE Assistant</h3>
                <span className="text-[10px] font-bold text-[#FCF09C] bg-neutral-800 px-2 py-0.5 rounded-full border border-[#EFCE30]/30">
                  AI Navigator
                </span>
              </div>
              <p className="text-xs text-neutral-400">On-Site Electronics • Est. 1985</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              title="Reset conversation"
              className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              aria-label="Close Assistant"
              className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-neutral-50/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${
                msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${
                  msg.role === 'user'
                    ? 'bg-neutral-900 text-white'
                    : 'bg-[#EFCE30] text-neutral-950'
                }`}
              >
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`rounded-2xl px-4 py-3 text-sm max-w-[82%] leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-neutral-900 text-white rounded-tr-xs'
                    : 'bg-white text-neutral-800 border border-neutral-200/80 shadow-xs rounded-tl-xs'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-neutral-500 bg-white border border-neutral-200 px-3.5 py-2 rounded-xl w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#FEA512] animate-spin" />
              <span>Analyzing technology issue...</span>
            </div>
          )}

          {/* Quick Options Pill Row if start */}
          {messages.length === 1 && (
            <div className="pt-2">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                Suggested Topics:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_OPTIONS.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(opt)}
                    className="text-xs bg-white hover:bg-[#FCF09C] text-neutral-700 hover:text-neutral-950 font-medium px-3 py-1.5 rounded-full border border-neutral-200 hover:border-[#EFCE30] transition-all shadow-2xs"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Recommendation Card */}
          {recommendation && (
            <div className="p-5 rounded-2xl bg-neutral-900 text-white border-2 border-[#EFCE30] shadow-xl animate-in zoom-in-95 duration-200 mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#EFCE30] bg-neutral-800 px-2.5 py-0.5 rounded-full border border-[#EFCE30]/30">
                  Recommended OSE Service
                </span>
                <span className="text-xs text-emerald-400 font-semibold">Match Found</span>
              </div>

              <h4 className="text-lg font-bold font-display text-white">
                {recommendation.category}
              </h4>
              <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                {recommendation.why}
              </p>

              <div className="p-3 bg-neutral-800 rounded-xl mt-3 text-xs text-neutral-200 border border-neutral-700">
                <strong className="text-[#FCF09C] block mb-0.5 font-semibold">Recommended Next Step:</strong>
                {recommendation.nextStep}
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4">
                <a
                  href={COMPANY_INFO.phoneTel}
                  className="inline-flex items-center justify-center gap-1.5 bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-2 px-3 rounded-xl text-xs border border-neutral-600 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#EFCE30]" />
                  <span>Call 978-887-6900</span>
                </a>

                <button
                  onClick={() => {
                    onClose();
                    onRequestQuote(recommendation.serviceTitle);
                  }}
                  className="inline-flex items-center justify-center gap-1.5 bg-[#EFCE30] hover:bg-[#FEA512] text-neutral-950 font-bold py-2 px-3 rounded-xl text-xs shadow-xs transition-colors"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-neutral-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Describe your computer or IT issue..."
              className="flex-1 px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#EFCE30] focus:border-neutral-900 text-sm"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={!inputVal.trim() || loading}
              className="bg-[#EFCE30] hover:bg-[#FEA512] disabled:opacity-40 disabled:cursor-not-allowed text-neutral-950 p-2.5 rounded-xl font-bold transition-all shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* AI Guidance Disclaimer */}
          <div className="flex items-center justify-between text-[10px] text-neutral-400 mt-2 px-1">
            <span className="flex items-center gap-1">
              <Info className="w-3 h-3 text-neutral-400" />
              General guidance only. Professional diagnostics confirm exact scope.
            </span>
            <span className="font-semibold text-neutral-500">24/7 Hotline: 978-887-6900</span>
          </div>
        </div>
      </div>
    </div>
  );
};
