export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  liveLink: string;
  fullDescription: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: 'ncertgpt',
    title: 'NCERTGPT',
    category: 'AI / Education',
    description: 'An AI tutor fine-tuned on the NCERT curriculum.',
    tech: ['LLMs', 'React', 'Vector DB'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    liveLink: '#',
    fullDescription: 'NCERTGPT is an educational co-pilot designed to instantly clarify doubts for students using official NCERT textbooks as the golden source of truth. Built with vector search for high-accuracy retrieval.',
    features: [
      'Retrieval-Augmented Generation pipeline',
      'Context-aware chat history',
      'Citation linking to textbook chapters',
      'Adaptive difficulty levels'
    ]
  },
  {
    id: 'cyberalert',
    title: 'CyberAlert',
    category: 'Cybersecurity',
    description: 'Real-time threat monitoring dashboard.',
    tech: ['Next.js', 'Python', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    liveLink: '#',
    fullDescription: 'A comprehensive SOC monitoring interface that consolidates threat intelligence feeds and highlights anomalies using an underlying machine learning model.',
    features: [
      'Live WebSocket event streaming',
      'Visualized threat origins on interactive maps',
      'Automated incident report generation',
      'Role-based access control'
    ]
  },
  {
    id: 'vaultera',
    title: 'Vaultera',
    category: 'Fintech',
    description: 'Secure digital asset management vault.',
    tech: ['TypeScript', 'Node.js', 'AWS'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    liveLink: '#',
    fullDescription: 'Vaultera provides institutional-grade security for managing digital portfolios, with comprehensive audit trails and multi-signature transaction workflows.',
    features: [
      'Military-grade encryption standards',
      'Multi-sig transaction approvals',
      'Compliance and reporting engines',
      'Real-time portfolio valuation'
    ]
  },
  {
    id: 'sdrp',
    title: 'SDRP Inter College',
    category: 'Institution',
    description: 'A complete digital transformation portal.',
    tech: ['React', 'Firebase', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
    liveLink: '#',
    fullDescription: 'Modernizing the campus experience, this platform replaces legacy paper workflows with a unified digital interface for students, faculty, and administration.',
    features: [
      'Digital attendance tracking',
      'Online fee payment gateway',
      'Automated result generation',
      'Centralized notification system'
    ]
  }
];
