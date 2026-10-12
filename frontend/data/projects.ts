export interface CaseStudyBlock {
  title: string;
  body: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  images?: string[];
  liveLink: string;
  githubLink?: string;
  fullDescription: string;
  features: string[];
  caseStudy?: CaseStudyBlock[];
}

export const projects: Project[] = [
  {
    id: 'darpan360',
    title: 'Darpan360',
    category: 'AI SaaS / Chatbot Platform',
    description: 'Managed Chatbot-as-a-Service platform with domain locking, multi-key Gemini/Groq failover, and embeddable iframe widgets.',
    tech: ['React', 'Node.js', 'Express', 'Firebase Auth', 'Cloud Firestore', 'Gemini & Groq'],
    image: '/assets/images/darpan360.png',
    images: [
      '/assets/images/screenshots/darpan360/Screenshot 2026-05-03 125336.png',
      '/assets/images/screenshots/darpan360/Screenshot 2026-05-03 125349.png',
      '/assets/images/screenshots/darpan360/Screenshot 2026-05-03 125431.png',
      '/assets/images/screenshots/darpan360/Screenshot 2026-05-03 125709.png',
    ],
    liveLink: 'https://darpan.quzar.in',
    githubLink: 'https://github.com/PiyushRatan/OnlineChatbotIntegration',
    fullDescription:
      'Darpan360 is a Chatbot-as-a-Service platform built to deploy domain-specific AI assistants on client websites. Businesses configure their assistant role, knowledge base, and approved domains in an operator dashboard, then embed a lightweight script widget with automatic AI key rotation and provider failover.',
    features: [
      'Embeddable iframe widget isolated from host website CSS conflicts',
      'Smart API key rotator across Gemini Flash-Lite pool with automatic Groq Llama 3 failover on HTTP 429 limits',
      'Strict dynamic CORS validation locking each bot to its approved client domains',
      'Per-bot Firestore transaction rate limiting and automated 4-hour stale session cleanup',
      'AI-assisted reference writer and 13+ guided business assistant personas'
    ],
    caseStudy: [
      {
        title: 'Problem & Motivation',
        body: 'Most chatbot demos look simple until they touch a production client domain. Real deployments require widget CSS isolation, strict origin checks so bots cannot be hijacked, session garbage collection, and automatic failover when AI APIs hit rate limits.'
      },
      {
        title: 'Architecture & System Design',
        body: 'The platform splits dashboard control, widget runtime, and AI routing. Dynamic CORS checks validate incoming origins against each bot’s allowedDomains in Cloud Firestore. The AI engine loops through a pool of Gemini keys and hot-swaps to Groq Llama 3 if rate limits are hit.'
      },
      {
        title: 'Outcome',
        body: 'A production-ready Chatbot-as-a-Service system capable of powering customer support, reception, and lead-capture assistants across client websites with near-zero downtime.'
      }
    ]
  },
  {
    id: 'orlin-ai',
    title: 'Orlin AI',
    category: 'AI Automation / Real Estate',
    description: 'AI automation agency platform for real estate lead capture, dynamic service discovery, checkout, and onboarding handoff.',
    tech: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'AI Workflows'],
    image: '/assets/images/screenshots/orlin-ai/Screenshot 2026-05-03 130104.png',
    images: [
      '/assets/images/screenshots/orlin-ai/Screenshot 2026-05-03 130104.png',
      '/assets/images/screenshots/orlin-ai/Screenshot 2026-05-03 130113.png',
      '/assets/images/screenshots/orlin-ai/Screenshot 2026-05-03 130132.png',
      '/assets/images/screenshots/orlin-ai/Screenshot 2026-05-03 130137.png',
    ],
    liveLink: 'https://orlin-ai.web.app',
    githubLink: 'https://github.com/PiyushRatan/orlin-ai-enterprise',
    fullDescription:
      'Orlin AI is a deployed platform for an AI automation agency specializing in real estate workflows. It maps 19 enterprise automation offerings with dynamic service routing, conversion-focused checkout flows, and automated post-purchase onboarding handoffs.',
    features: [
      'Dynamic routing across 19+ enterprise AI automation service offerings',
      'Real-time lead capture and qualification workflows for real estate teams',
      'State-preserving checkout and post-purchase client onboarding handoff',
      'Responsive custom UI deployed on Firebase Hosting'
    ],
    caseStudy: [
      {
        title: 'Problem & Motivation',
        body: 'Real estate agencies lose leads when follow-ups take hours. The client needed a web platform that clearly communicates automation value, qualifies buyers, and transitions them smoothly from service selection to checkout and onboarding.'
      },
      {
        title: 'Architecture & System Design',
        body: 'Built with a modular React frontend and Firebase deployment. Service discovery, conversion actions, and onboarding flows share unified state so users never lose context while moving across 19 specialized service routes.'
      },
      {
        title: 'Outcome',
        body: 'Delivered a live, high-converting enterprise web presence that automates client discovery and onboarding 24/7.'
      }
    ]
  },
  {
    id: 'sdrp',
    title: 'SDRP Inter College',
    category: 'Institution / EdTech Portal',
    description: 'Complete digital campus portal for SDRP Inter College with admissions workflows, academic pages, galleries, and local SEO.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'Technical SEO'],
    image: '/assets/images/screenshots/sdrp-inter-college/Screenshot 2026-05-03 130420.png',
    images: [
      '/assets/images/screenshots/sdrp-inter-college/Screenshot 2026-05-03 130420.png',
      '/assets/images/screenshots/sdrp-inter-college/Screenshot 2026-05-03 130444.png',
      '/assets/images/screenshots/sdrp-inter-college/Screenshot 2026-05-03 130459.png',
    ],
    liveLink: 'https://sdrpintercollege.com',
    fullDescription:
      'SDRP Inter College is a production institutional website giving parents and students instant access to admissions details, fee structures, academic programs, faculty directories, and campus event galleries without relying on offline paperwork.',
    features: [
      'Structured admissions, academics, faculty, and campus gallery portals',
      'Local SEO architecture optimized for regional parent & student search intent',
      'Mobile-first responsive layout for fast loading on cellular networks',
      'Custom domain deployment with automated SSL on Firebase Hosting'
    ],
    caseStudy: [
      {
        title: 'Problem & Motivation',
        body: 'A physical institution without a structured digital presence is invisible to parents searching online. The school needed an accessible portal for admissions, academic transparency, and local search discoverability.'
      },
      {
        title: 'Architecture & System Design',
        body: 'Designed clean information architecture separated by parent and student intent—admissions, academics, staff, events, and contact—backed by local SEO schema and fast static asset delivery.'
      },
      {
        title: 'Outcome',
        body: 'Transformed the school from offline-only to a searchable, parent-friendly digital campus at sdrpintercollege.com.'
      }
    ]
  },
  {
    id: 'vaultera',
    title: 'Vaultera',
    category: 'Smart Hardware / Product Platform',
    description: 'Interactive product platform and smart vault interface featuring biometric, phone, and NFC access workflows.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    image: '/assets/images/screenshots/vaultera/Screenshot 2026-05-03 130237.png',
    images: [
      '/assets/images/screenshots/vaultera/Screenshot 2026-05-03 130237.png',
      '/assets/images/screenshots/vaultera/Screenshot 2026-05-03 130311.png',
      '/assets/images/screenshots/vaultera/Screenshot 2026-05-03 130317.png',
      '/assets/images/screenshots/vaultera/Screenshot 2026-05-03 130323.png',
    ],
    liveLink: 'https://vaultera.in',
    githubLink: 'https://github.com/PiyushRatan/vaultera-website',
    fullDescription:
      'Vaultera is a live product showcase and interface platform centered around smart drawer locks and vault systems—featuring phone, fingerprint, and NFC unlock workflows alongside modular UI experiments.',
    features: [
      'Interactive smart-lock product showcase (Fingerprint, NFC, and Mobile App flows)',
      'Modular component architecture for rapid product experimentation',
      'High-contrast dark UI with smooth micro-interactions',
      'Custom domain deployment at vaultera.in'
    ],
    caseStudy: [
      {
        title: 'Problem & Motivation',
        body: 'Hardware-adjacent and security products require high visual trust and clear interactive demonstrations of how physical unlocking workflows operate in real life.'
      },
      {
        title: 'Architecture & System Design',
        body: 'Built as a clean, reusable web platform under vaultera.in that pairs smart-vault purchase flows with responsive visual state demonstrations.'
      },
      {
        title: 'Outcome',
        body: 'Serves as a live product surface for Vaultera smart locks and ongoing interface engineering.'
      }
    ]
  },
  {
    id: 'jmd-agency',
    title: 'JMD Production & Casting',
    category: 'Media & Casting Platform',
    description: 'High-performance portfolio and casting hub for JMD Production Agency in Noida.',
    tech: ['React', 'Tailwind CSS', 'Image Optimization', 'Responsive UI'],
    image: '/assets/images/screenshots/jmd-agency/Screenshot 2026-05-03 125858.png',
    images: [
      '/assets/images/screenshots/jmd-agency/Screenshot 2026-05-03 125858.png',
      '/assets/images/screenshots/jmd-agency/Screenshot 2026-05-03 125908.png',
      '/assets/images/screenshots/jmd-agency/Screenshot 2026-05-03 125918.png',
    ],
    liveLink: 'https://jmdagency.in',
    fullDescription:
      'A unified portfolio and casting platform built for JMD Production and Casting Agency in Noida, organizing kids, fashion, and commercial modeling categories into a fast, mobile-optimized web experience.',
    features: [
      'Categorized talent & casting showcases (Fashion, Commercial, Kids)',
      'Performance-optimized media rendering for high-resolution photography',
      'Streamlined casting inquiry and talent onboarding flow',
      'Deployed on custom domain jmdagency.in'
    ],
    caseStudy: [
      {
        title: 'Problem & Motivation',
        body: 'Casting agencies often have portfolios scattered across WhatsApp chats and social feeds. They needed a single professional hub that loads high-resolution photography quickly on mobile devices.'
      },
      {
        title: 'Architecture & System Design',
        body: 'Structured around visual hierarchy and lazy-loaded media assets so heavy modeling galleries maintain fast Core Web Vitals and smooth scrolling.'
      },
      {
        title: 'Outcome',
        body: 'Gave JMD Agency a cohesive brand hub in Noida for talent discovery and client bookings.'
      }
    ]
  },
  {
    id: 'pcm-tracker',
    title: 'PCM Syllabus Tracker',
    category: 'EdTech / Productivity Web App',
    description: 'Brutalist spaced-repetition syllabus tracker for JEE Mains, JEE Advanced, and Class 11–12 PCM students.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Spaced Repetition'],
    image: '/assets/images/pcm-tracker.png',
    liveLink: 'https://pcm-syllabus-tracker-eight.vercel.app',
    githubLink: 'https://github.com/PiyushRatan/PCM-Syllabus-Tracker',
    fullDescription:
      'Built for competitive exam aspirants (JEE Mains/Advanced & CBSE Boards), PCM Syllabus Tracker replaces static checklists with an automated spaced-repetition engine (3d, 7d, 14d, 30d, 90d intervals) in a zero-distraction brutalist interface.',
    features: [
      'Automated spaced-repetition scheduling (3d, 7d, 14d, 30d, 90d revision intervals)',
      'Subject-wise progress analytics across Physics, Chemistry, and Mathematics',
      'Distraction-free brutalist UI with Mastered vs. Due revision states',
      'Reset-protection verification modals to safeguard student progress'
    ],
    caseStudy: [
      {
        title: 'Problem & Motivation',
        body: 'Standard to-do lists ignore the human forgetting curve. Students complete a chapter once and forget it two months before exams.'
      },
      {
        title: 'Architecture & System Design',
        body: 'Implemented a deterministic spaced-repetition state machine in Next.js that automatically resurfaces completed PCM topics at expanding intervals.'
      },
      {
        title: 'Outcome',
        body: 'Live daily-use study utility deployed on Vercel and open-sourced on GitHub.'
      }
    ]
  },
  {
    id: 'ncertgpt',
    title: 'NCERTGPT',
    category: 'AI / RAG Education',
    description: 'Retrieval-Augmented Generation (RAG) study assistant grounded in Class 12 NCERT textbooks.',
    tech: ['Python', 'LLMs', 'RAG Pipeline', 'Vector Embeddings', 'NLP'],
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=900',
    liveLink: 'https://piyushratan.in/work/ncertgpt',
    githubLink: 'https://github.com/PiyushRatan',
    fullDescription:
      'NCERTGPT is an AI study co-pilot designed to clarify doubts for Class 12 students using official NCERT textbooks as the single source of truth—combining PDF ingestion, semantic chunking, vector embeddings, and source-grounded answer generation.',
    features: [
      'End-to-end PDF ingestion, text extraction, and semantic chunking pipeline',
      'Vector embedding search for high-accuracy textbook retrieval',
      'Strict source-grounded prompting to prevent LLM hallucinations',
      'Designed specifically for CBSE Class 12 curriculum revision'
    ],
    caseStudy: [
      {
        title: 'Problem & Motivation',
        body: 'Generic AI chatbots hallucinate or give answers outside the CBSE syllabus. Students need answers strictly grounded in NCERT textbook chapters.'
      },
      {
        title: 'Architecture & System Design',
        body: 'Built around a clean RAG pipeline: textbook PDF extraction → semantic chunking → vector embeddings → top-k context retrieval → grounded LLM synthesis.'
      },
      {
        title: 'Outcome',
        body: 'Establishes a reliable retrieval foundation for curriculum-accurate Q&A.'
      }
    ]
  },
  {
    id: 'cyberalert',
    title: 'CyberAlert',
    category: 'AI Cybersecurity',
    description: 'AI-assisted spam and phishing risk detector that classifies suspicious messages and explains threat indicators.',
    tech: ['Python', 'Flask', 'AI APIs', 'Prompt Engineering'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=900',
    liveLink: 'https://github.com/PiyushRatan/CyberAlert',
    githubLink: 'https://github.com/PiyushRatan/CyberAlert',
    fullDescription:
      'CyberAlert analyzes suspicious SMS, WhatsApp, and email messages to detect phishing and scam patterns. Instead of a black-box yes/no label, it returns a severity score and explains the exact manipulation triggers in plain language.',
    features: [
      'Spam, phishing, and scam pattern classification via structured AI prompts',
      'Risk severity scoring to prioritize dangerous messages',
      'Plain-language breakdown of red flags (urgency, spoofed links, payment coercion)',
      'Lightweight Python & Flask API backend'
    ],
    caseStudy: [
      {
        title: 'Problem & Motivation',
        body: 'Everyday users receive sophisticated payment and phishing scams but lack a quick tool that explains *why* a message is dangerous.'
      },
      {
        title: 'Architecture & System Design',
        body: 'A Flask backend validates message input and routes it through a structured security analysis prompt that outputs threat category, severity score, evidence, and recommended action.'
      },
      {
        title: 'Outcome',
        body: 'Open-source cybersecurity prototype providing explainable scam detection.'
      }
    ]
  }
];
