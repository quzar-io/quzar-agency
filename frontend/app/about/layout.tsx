import { Metadata } from 'next';

const title = 'About | Quzar';
const description = 'Learn more about Quzar and our mission to build premium digital products.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title,
    description,
    url: '/about',
  },
  twitter: {
    title,
    description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
