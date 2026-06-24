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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
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

