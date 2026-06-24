import { Brain, Globe, Link2, BarChart3, type LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: 'ai-mvp',
    title: 'AI-Powered MVPs',
    description: 'Turn your idea into a working AI product in 2 weeks.',
    icon: Brain,
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Development',
    description: 'React, Next.js, Firebase, modern web stack.',
    icon: Globe,
  },
  {
    id: 'api-integrations',
    title: 'Custom API Integration',
    description: 'Payment gateways, third-party APIs, webhooks.',
    icon: Link2,
  },
  {
    id: 'product-strategy',
    title: 'Product Strategy',
    description: 'Roadmap planning, feature prioritization, tech advisory.',
    icon: BarChart3,
  }
];
