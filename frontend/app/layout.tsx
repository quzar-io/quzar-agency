import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GalaxyBackground } from '@/components/layout/GalaxyBackground';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Quzar | Premium AI & Full-Stack Agency',
    template: '%s | Quzar',
  },
  description: 'Quzar is a premium development agency specializing in AI-powered MVPs, full-stack digital products, and high-end software solutions.',
  metadataBase: new URL('https://quzar.in'),
  openGraph: {
    type: 'website',
    url: 'https://quzar.in/',
    title: 'Quzar | AI-Powered Product Development',
    description: 'We build premium digital products, MVPs, and AI integrations.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1620912189868-30769f3ba9e4?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quzar | Premium AI Agency',
    description: 'We build premium digital products, MVPs, and AI integrations.',
    images: ['https://images.unsplash.com/photo-1620912189868-30769f3ba9e4?auto=format&fit=crop&q=80&w=1200&h=630'],
  },
  icons: {
    icon: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#09090b',
};

const quzarJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://quzar.in#organization',
    name: 'Quzar',
    alternateName: ['Quzar Agency', 'Quzar AI Studio'],
    url: 'https://quzar.in',
    email: 'hello@quzar.in',
    description:
      'Quzar is a premium AI and full-stack development agency founded by Piyush Ratan, specializing in AI-powered MVPs, Darpan360 chatbot platforms, and scalable digital products.',
    founder: {
      '@type': 'Person',
      '@id': 'https://piyushratan.in#person',
      name: 'Piyush Ratan',
      url: 'https://piyushratan.in',
    },
    sameAs: [
      'https://quzar.in',
      'https://piyushratan.in',
      'https://github.com/quzar-io',
      'https://github.com/PiyushRatan',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://quzar.in#website',
    name: 'Quzar',
    url: 'https://quzar.in',
    publisher: {
      '@id': 'https://quzar.in#organization',
    },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM profile for Quzar" />
        <link rel="alternate" type="application/json" href="/ai-profile.json" title="AI-readable profile for Quzar" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(quzarJsonLd) }}
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col relative selection:bg-brand-primary/30 selection:text-brand-heading overflow-x-hidden">
          <GalaxyBackground />
          {/* Global subtle cosmic background */}
          <div 
            className="fixed inset-0 z-0 opacity-[0.10] pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, #1e232e 0%, transparent 80%)',
            }}
          />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

