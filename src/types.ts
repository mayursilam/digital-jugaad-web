export type NavSection = 
  | 'home'
  | 'what-we-do'
  | 'how-it-works'
  | 'about'
  | 'faq'
  | 'seo'
  | 'contact';

export interface FAQItem {
  question: string;
  answer: string;
}
