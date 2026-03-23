import { setRequestLocale } from 'next-intl/server';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { WQFPageHero } from '@/components/layout/WQFPageHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { KontaktInfoClient } from './KontaktInfoClient';

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
      {/* Hidden form for Netlify Forms detection during build */}
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input name="form-name" />
        <input name="bot-field" />
        <input name="name" />
        <input name="email" />
        <input name="subject" />
        <textarea name="message" />
        <input name="privacy" type="checkbox" />
      </form>

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
