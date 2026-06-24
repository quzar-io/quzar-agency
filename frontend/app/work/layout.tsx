import { Metadata } from 'next';

const title = 'Work | Quzar';
const description = 'View our portfolio of shipped products and case studies.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title,
    description,
    url: '/work',
  },
  twitter: {
    title,
    description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
