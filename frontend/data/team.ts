export interface EngineeringMetric {
  code: string;
  label: string;
  value: string;
  detail: string;
}

export interface EngineeringDomain {
  id: string;
  code: string;
  domain: string;
  lead: string;
  roleTitle: string;
  status: 'Active' | 'Automated';
  summary: string;
  stack: string[];
  standards: string[];
  shippedSystems: {
    name: string;
    href: string;
  }[];
}

export interface ExecutionComparison {
  metric: string;
  traditionalAgency: string;
  quzarStudioModel: string;
}

export interface FounderProfile {
  name: string;
  handle: string;
  role: string;
  teamSize: string;
  location: string;
  timezone: string;
  status: 'Active';
  principle: string;
  canonicalUrl: string;
  email: string;
  bio: string[];
  links: {
    label: string;
    handle: string;
    url: string;
  }[];
  metrics: EngineeringMetric[];
  domains: EngineeringDomain[];
  comparison: ExecutionComparison[];
}

export const founderProfile: FounderProfile = {
  name: 'Piyush Ratan',
  handle: '@PiyushRatan',
  role: 'Founder & Principal Engineer',
  teamSize: '01 / 01',
  location: 'Uttar Pradesh, IN',
  timezone: 'IST (UTC+05:30)',
  status: 'Active',
  principle: 'Useful first, fancy later. Bias toward shipping, observability, and fewer mystery bugs.',
  canonicalUrl: 'https://piyushratan.in',
  email: 'hello@quzar.in',
  bio: [
    'Quzar is a single-principal software engineering studio. Piyush Ratan is the sole founder, systems architect, and full-stack engineer in the company.',
    'Clients work directly with the engineer writing the code rather than navigating account managers or rotating junior contractors. Every product specification, AI integration, backend service, and production deployment is executed end-to-end by Piyush Ratan.',
  ],
  links: [
    {
      label: 'WEBSITE',
      handle: 'piyushratan.in',
      url: 'https://piyushratan.in',
    },
    {
      label: 'GITHUB',
      handle: 'github.com/PiyushRatan',
      url: 'https://github.com/PiyushRatan',
    },
    {
      label: 'STUDIO GIT',
      handle: 'github.com/quzar-io',
      url: 'https://github.com/quzar-io',
    },
    {
      label: 'X',
      handle: '@Piyush__Ratan',
      url: 'https://x.com/Piyush__Ratan',
    },
    {
      label: 'LINKEDIN',
      handle: 'in/piyushratan',
      url: 'https://linkedin.com/in/piyushratan',
    },
  ],
  metrics: [
    {
      code: 'TEAM-01',
      label: 'COMPANY HEADCOUNT',
      value: '01',
      detail: '100% founder-executed engineering',
    },
    {
      code: 'SHIP-08',
      label: 'PRODUCTION SYSTEMS',
      value: '08+',
      detail: 'Deployed AI SaaS, RAG & client portals',
    },
    {
      code: 'SYNC-00',
      label: 'HANDOFF OVERHEAD',
      value: '0ms',
      detail: 'Direct communication with the builder',
    },
    {
      code: 'CYCLE-14',
      label: 'MVP DELIVERY TARGET',
      value: '14d',
      detail: 'Specification to live domain release',
    },
  ],
  domains: [
    {
      id: 'ai-rag',
      code: 'ENG-01',
      domain: 'AI Products & Applied LLM Systems',
      lead: 'Piyush Ratan',
      roleTitle: 'AI Systems Engineer',
      status: 'Active',
      summary:
        'Builds custom AI assistants, document-grounded Q&A systems, and automated classification tools tailored to business data and educational curricula.',
      stack: ['Python', 'LLM APIs', 'RAG Systems', 'Vector Search', 'NLP', 'REST APIs'],
      standards: [
        'High-availability conversational AI assistants for websites and customer support',
        'Source-grounded document retrieval that answers strictly from verified knowledge bases',
        'Automated risk scoring and explainable classification for security and operations',
      ],
      shippedSystems: [
        { name: 'Darpan360', href: 'https://darpan.quzar.in' },
        { name: 'NCERTGPT', href: 'https://piyushratan.in/work/ncertgpt' },
        { name: 'CyberAlert', href: 'https://github.com/PiyushRatan/CyberAlert' },
      ],
    },
    {
      id: 'fullstack',
      code: 'ENG-02',
      domain: 'Full-Stack Web Engineering',
      lead: 'Piyush Ratan',
      roleTitle: 'Principal Full-Stack Developer',
      status: 'Active',
      summary:
        'Develops production web applications, SaaS dashboards, embeddable web widgets, and conversion-focused client portals from initial wireframe to live release.',
      stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
      standards: [
        'Lightweight embeddable web widgets that integrate cleanly into any client website',
        'End-to-end service discovery, lead qualification, and client onboarding workflows',
        'Responsive, high-contrast web applications built for daily operational reliability',
      ],
      shippedSystems: [
        { name: 'Orlin AI', href: 'https://orlin-ai.web.app' },
        { name: 'Vaultera', href: 'https://vaultera.in' },
        { name: 'PCM Syllabus Tracker', href: 'https://pcm-syllabus-tracker-eight.vercel.app' },
      ],
    },
    {
      id: 'cloud-sec',
      code: 'ENG-03',
      domain: 'Cloud Deployment & Platform Security',
      lead: 'Piyush Ratan',
      roleTitle: 'Cloud & Security Engineer',
      status: 'Automated',
      summary:
        'Manages cloud hosting, authentication, access control, domain authorization, and production monitoring across client and internal deployments.',
      stack: ['Firebase', 'Cloud Databases', 'Vercel', 'Access Control', 'SSL/DNS'],
      standards: [
        'Domain-level authorization ensuring embedded widgets only run on approved client sites',
        'Managed authentication, abuse prevention, and automated session lifecycle handling',
        'Custom domain provisioning, SSL enforcement, and fast global static/edge delivery',
      ],
      shippedSystems: [
        { name: 'Darpan360 Platform', href: 'https://darpan.quzar.in' },
        { name: 'SDRP Inter College', href: 'https://sdrpintercollege.com' },
      ],
    },
    {
      id: 'ui-seo',
      code: 'ENG-04',
      domain: 'Interface Design & Technical SEO',
      lead: 'Piyush Ratan',
      roleTitle: 'UI & Technical SEO Engineer',
      status: 'Active',
      summary:
        'Crafts fast, accessible user interfaces paired with structured search engine optimization and machine-readable metadata for modern search and AI discovery.',
      stack: ['Schema.org JSON-LD', 'Technical SEO', 'Framer Motion', 'Core Web Vitals'],
      standards: [
        'Structured Schema.org markup connecting brand, founder, and service entities',
        'Search-optimized information architecture for local institutions and commercial brands',
        'WCAG-compliant contrast ratios, keyboard navigation, and reduced-motion support',
      ],
      shippedSystems: [
        { name: 'JMD Production & Casting', href: 'https://jmdagency.in' },
        { name: 'PiyushRatan.in', href: 'https://piyushratan.in' },
      ],
    },
  ],
  comparison: [
    {
      metric: 'Primary Point of Contact',
      traditionalAgency: 'Sales representative, account manager, and project manager',
      quzarStudioModel: 'Direct collaboration with Piyush Ratan (Founder & Engineer)',
    },
    {
      metric: 'Production Code Execution',
      traditionalAgency: 'Delegated to rotating junior developers or external subcontractors',
      quzarStudioModel: '100% architected, written, and verified by Piyush Ratan',
    },
    {
      metric: 'Specification Accuracy',
      traditionalAgency: 'Requirements diluted across multiple internal handoffs',
      quzarStudioModel: 'Zero translation loss between system design and implementation',
    },
    {
      metric: 'Delivery & Iteration Cadence',
      traditionalAgency: 'Multi-week sprint overhead for standard feature updates',
      quzarStudioModel: 'Same-day commits with continuous preview deployments',
    },
  ],
};
