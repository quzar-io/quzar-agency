import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ServicesBento } from '@/components/sections/ServicesBento';
import { ValueProp } from '@/components/sections/ValueProp';

const title = 'Quzar | Premium AI & Full-Stack Agency';
const description = 'Build like the best. AI-powered MVPs and full-stack products shipped in 2 weeks.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    url: '/',
  },
  twitter: {
    title,
    description,
  },
};

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-start overflow-visible w-full">
      <Hero />
      <ServicesBento />
      <ValueProp />
    </div>
  );
}
