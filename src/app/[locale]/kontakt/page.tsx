import { createMetadata, PAGE_META } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { WQFPageHero } from '@/components/layout/WQFPageHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { KontaktInfoClient } from './KontaktInfoClient';
import { BreadcrumbSchema, FAQSchema } from '@/lib/schema';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META.contact, 'kontakt');
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';

  const faqItems = isDE
    ? [
        {
          question: 'Wie kann ich BlattWerk kontaktieren?',
          answer:
            'Du kannst uns per E-Mail an info@blattwerk.dev oder telefonisch unter +49 152 33539841 erreichen. Alternativ nutze das Kontaktformular auf dieser Seite.',
        },
        {
          question: 'Wo befindet sich BlattWerk?',
          answer:
            'Unser Büro befindet sich am Wetzellplatz 2 in 31134 Hildesheim.',
        },
        {
          question: 'Kann ich auch ohne Mitgliedschaft vorbeikommen?',
          answer:
            'Ja, unsere Infoveranstaltungen sind für alle offen — auch ohne Mitgliedschaft. Schau einfach in unseren Veranstaltungskalender für die nächsten Termine.',
        },
        {
          question: 'Wie schnell bekomme ich eine Antwort?',
          answer:
            'Wir bemühen uns, alle Anfragen innerhalb von 48 Stunden zu beantworten.',
        },
        {
          question: 'Gibt es eine Möglichkeit für Presseanfragen?',
          answer:
            'Ja, Presseanfragen richte bitte per E-Mail an info@blattwerk.dev. Wir melden uns zeitnah bei dir.',
        },
      ]
    : [
        {
          question: 'How can I contact BlattWerk?',
          answer:
            'You can reach us by email at info@blattwerk.dev or by phone at +49 152 33539841. Alternatively, use the contact form on this page.',
        },
        {
          question: 'Where is BlattWerk located?',
          answer:
            'Our office is located at Wetzellplatz 2, 31134 Hildesheim, Germany.',
        },
        {
          question: 'Can I visit without being a member?',
          answer:
            'Yes, our info events are open to everyone — no membership required. Check our event calendar for upcoming dates.',
        },
        {
          question: 'How quickly will I get a response?',
          answer:
            'We aim to respond to all inquiries within 48 hours.',
        },
        {
          question: 'Is there a way for press inquiries?',
          answer:
            'Yes, please send press inquiries by email to info@blattwerk.dev. We will get back to you promptly.',
        },
      ];

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'Home', href: '' },
          { name: isDE ? 'Kontakt' : 'Contact', href: '/kontakt' },
        ]}
      />
      <FAQSchema items={faqItems} />

      <WQFPageHero
        label={isDE ? 'Kontakt' : 'Contact'}
        title={isDE ? 'Kontakt — Cannabis Social Club Hildesheim' : 'Contact — Cannabis Social Club Hildesheim'}
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
