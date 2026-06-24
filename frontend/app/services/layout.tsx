import { Metadata } from 'next';

const title = 'Services | Quzar';
const description = 'Our premium AI & full-stack development services.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title,
    description,
    url: '/services',
  },
  twitter: {
    title,
    description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
