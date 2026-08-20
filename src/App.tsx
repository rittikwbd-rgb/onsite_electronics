import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ConsumerServicesPage } from './pages/ConsumerServicesPage';
import { BusinessServicesPage } from './pages/BusinessServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { AIServiceNavigator } from './components/AIServiceNavigator';
import { QuoteModal } from './components/QuoteModal';
import { Sparkles, Phone, Bot } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
  };

  const handleOpenQuoteModal = (serviceTitle?: string) => {
    setSelectedServiceForQuote(serviceTitle || '');
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-[#FCF09C] selection:text-neutral-900">
      {/* Universal Sticky Header with 24/7 Hotline Bar */}
      <Header
        activePage={currentPage}
        onNavigate={handleNavigate}
        onOpenAI={() => setIsAIOpen(true)}
      />

      {/* Main Page Routing Views */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenAI={() => setIsAIOpen(true)}
            onRequestQuote={handleOpenQuoteModal}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onRequestQuote={() => handleOpenQuoteModal('General Inquiry')}
          />
        )}

        {currentPage === 'consumer-services' && (
          <ConsumerServicesPage
            onNavigate={handleNavigate}
            onOpenAI={() => setIsAIOpen(true)}
            onRequestQuote={handleOpenQuoteModal}
          />
        )}

        {currentPage === 'business-services' && (
          <BusinessServicesPage
            onNavigate={handleNavigate}
            onRequestQuote={handleOpenQuoteModal}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={handleNavigate}
            onRequestQuote={handleOpenQuoteModal}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            initialService={selectedServiceForQuote}
          />
        )}
      </main>

      {/* Universal Dark Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating "Ask OSE" AI Assistant Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <button
          onClick={() => setIsAIOpen(true)}
          id="floating-ask-ose-btn"
          aria-label="Ask OSE AI Assistant"
          className="group relative flex items-center gap-2.5 bg-neutral-900 hover:bg-black text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl border-2 border-[#EFCE30] transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <div className="w-8 h-8 rounded-full bg-[#EFCE30] text-neutral-950 flex items-center justify-center font-bold shadow-xs group-hover:rotate-12 transition-transform">
            <Bot className="w-4 h-4" />
          </div>
          <div className="text-left">
            <span className="text-xs font-black font-display tracking-tight text-white block">
              Ask OSE Assistant
            </span>
            <span className="text-[10px] text-[#FCF09C] font-semibold flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              Instant AI Triage
            </span>
          </div>
        </button>
      </div>

      {/* AI Service Navigator Modal */}
      <AIServiceNavigator
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
        onNavigate={handleNavigate}
        onRequestQuote={handleOpenQuoteModal}
      />

      {/* Universal Quote / Service Request Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialService={selectedServiceForQuote}
      />
    </div>
  );
}
