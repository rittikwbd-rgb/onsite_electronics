export type PageId =
  | 'home'
  | 'about'
  | 'products'
  | 'consumer-services'
  | 'business-services'
  | 'contact'
  | 'privacy'
  | 'terms';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'consumer' | 'business' | 'both';
  icon: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  pricing?: string;
  idealFor: string;
  is247Available?: boolean;
}

export interface PricingCardItem {
  id: string;
  title: string;
  price: string;
  category: 'pc' | 'apple' | 'server';
  description: string;
  features: string[];
  popular?: boolean;
}

export interface ResellerBrand {
  id: string;
  name: string;
  category: string;
  description: string;
  tagline: string;
  products: string[];
  logoSvgType: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  highlight?: string;
}

export interface TriageResult {
  category: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical (24/7 Emergency)';
  suggestedNextStep: string;
  urgencyReason: string;
  is247EmergencyCandidate: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  recommendedService?: string;
  actionCta?: {
    type: 'call' | 'quote' | 'page';
    label: string;
    target?: string;
  };
}

export interface QuoteFormData {
  deviceType: string;
  audience: 'home' | 'business';
  issueType: string;
  urgency: 'flexible' | 'standard' | 'emergency';
  serviceLocation: 'on-site' | 'remote' | 'drop-off';
  notes?: string;
}
