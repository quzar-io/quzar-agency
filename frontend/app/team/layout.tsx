import { Metadata } from 'next';

const title = 'Team // Piyush Ratan';
const description =
  'Quzar is a single-principal software engineering studio. Piyush Ratan is the sole founder, systems architect, and full-stack AI engineer in the company.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/team',
  },
  openGraph: {
    title: 'Team // Piyush Ratan | Quzar',
    description,
    url: '/team',
  },
  twitter: {
    title: 'Team // Piyush Ratan | Quzar',
    description,
  },
};

const teamJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': 'https://quzar.in/team#profilepage',
  url: 'https://quzar.in/team',
  name: 'Quzar Team // Piyush Ratan',
  description,
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://piyushratan.in#person',
    name: 'Piyush Ratan',
    jobTitle: 'Founder & Principal Engineer',
    url: 'https://piyushratan.in',
    worksFor: {
      '@type': 'Organization',
      '@id': 'https://quzar.in#organization',
      name: 'Quzar',
      url: 'https://quzar.in',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: 1,
      },
    },
    sameAs: [
      'https://piyushratan.in',
      'https://github.com/PiyushRatan',
      'https://x.com/Piyush__Ratan',
      'https://linkedin.com/in/piyushratan',
    ],
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamJsonLd) }}
      />
      {children}
    </>
  );
}
