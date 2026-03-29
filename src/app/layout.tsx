import type { Metadata, Viewport } from 'next';
import './globals.css';
import { BASE_URL } from '@/lib/config';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'BlattWerk e.V. – Cannabis Social Club Hildesheim',
    template: '%s | BlattWerk e.V.',
  },
  description: 'BlattWerk e.V. ist ein Cannabis Social Club in Hildesheim. Gemeinschaft, Aufklärung und verantwortungsvoller Umgang mit Cannabis im Rahmen des Konsumcannabisgesetzes (KCanG).',
  keywords: ['Cannabis Social Club', 'Hildesheim', 'BlattWerk', 'KCanG', 'Anbauvereinigung', 'Cannabis', 'Niedersachsen', 'Cannabis Club Hildesheim'],
  other: {
    'geo.region': 'DE-NI',
    'geo.placename': 'Hildesheim',
    'geo.position': '52.1535;9.9515',
    ICBM: '52.1535, 9.9515',
  },
  authors: [{ name: 'BlattWerk e.V.' }],
  creator: 'BlattWerk e.V.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: 'en_US',
    url: BASE_URL,
    siteName: 'BlattWerk e.V.',
    title: 'BlattWerk e.V. – Cannabis Social Club Hildesheim',
    description: 'Gemeinschaft, Aufklärung und verantwortungsvoller Umgang mit Cannabis. Cannabis Social Club in Hildesheim.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BlattWerk e.V. – Cannabis Social Club Hildesheim',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlattWerk e.V. – Cannabis Social Club Hildesheim',
    description: 'Gemeinschaft, Aufklärung und verantwortungsvoller Umgang mit Cannabis.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0e1a12',
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
