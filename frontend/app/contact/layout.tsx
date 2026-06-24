import { Metadata } from 'next';

const title = 'Contact | Quzar';
const description = 'Get in touch with Quzar to start your MVP or full-stack project.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title,
    description,
    url: '/contact',
  },
  twitter: {
    title,
    description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
