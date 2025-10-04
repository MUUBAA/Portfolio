import { BrainCircuit, ShieldCheck, Database } from 'lucide-react';

export type Expertise = {
  category: string;
  bullets: string[];
  icon: React.ReactNode;
};

export const expertiseData: Expertise[] = [
  {
    category: 'AI & Generative Models',
    bullets: [
      'LLM Fine-Tuning',
      'Privacy-Preserving Machine Learning (PPML)',
      'Natural Language Processing (NLP)',
      'Building Generative AI Applications',
    ],
    icon: <BrainCircuit className="h-8 w-8 text-accent" />,
  },
  {
    category: 'Web Privacy & Data Protection',
    bullets: [
      'Ad/Tracker Detection & Blocking',
      'Network & DOM Analysis for Privacy Leaks',
      'Privacy-Enhancing Data Pipelines',
      'GDPR & CCPA Compliance Strategies',
    ],
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
  },
  {
    category: 'Data Engineering & Research',
    bullets: [
      'ETL/ELT Pipeline Design',
      'Batch & Real-Time Data Processing',
      'Data Quality Assurance & Validation',
      'Data Warehouse Architecture',
    ],
    icon: <Database className="h-8 w-8 text-accent" />,
  },
];
