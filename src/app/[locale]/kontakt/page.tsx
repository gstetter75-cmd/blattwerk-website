import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { WQFPageHero } from '@/components/layout/WQFPageHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { KontaktInfoClient } from './KontaktInfoClient';
import { BreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontaktiere BlattWerk e.V. – Cannabis Social Club Hildesheim. Schreib uns eine Nachricht oder besuche uns vor Ort.',
  robots: { index: true, follow: true },
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'Home', href: '' },
          { name: isDE ? 'Kontakt' : 'Contact', href: '/kontakt' },
        ]}
      />

      <WQFPageHero
        label={isDE ? 'Kontakt' : 'Contact'}
        title={isDE ? 'Kontakt' : 'Contact'}
        subtitle={
          isDE
            ? 'Du hast Fragen? Schreib uns eine Nachricht oder komm vorbei.'
            : 'Have questions? Send us a message or visit us.'
        }
        accentColor="green"
      />

      <KontaktInfoClient isDE={isDE} />
    </>
  );
}
