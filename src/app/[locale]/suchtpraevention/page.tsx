import { createMetadata, PAGE_META } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { SuchtpraeventionClient } from './SuchtpraeventionClient';
import { HeroImage } from '@/components/decorative/HeroImage';
import { BreadcrumbSchema, FAQSchema } from '@/lib/schema';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META.prevention, 'suchtpraevention');
}

export default async function PreventionPage({
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
          { name: isDE ? 'Suchtprävention' : 'Addiction Prevention', href: '/suchtpraevention' },
        ]}
      />
      <FAQSchema items={isDE ? [
        { question: 'Woran erkenne ich problematischen Cannabiskonsum?', answer: 'Warnsignale sind: täglicher Konsum trotz negativer Folgen, Kontrollverlust über Menge und Häufigkeit, Vernachlässigung von Pflichten und sozialen Kontakten, Toleranzentwicklung und Entzugssymptome bei Konsumpausen.' },
        { question: 'Wo finde ich Hilfe bei Cannabisabhängigkeit in Hildesheim?', answer: 'Lokale Anlaufstellen sind die Suchtberatung der Diakonie Hildesheim, die Drogenberatung des Caritasverbands und dein Hausarzt. Überregional erreichst du die Sucht & Drogen Hotline unter 01805-313031.' },
        { question: 'Ist Cannabis süchtig machend?', answer: 'Ja, Cannabis kann psychisch abhängig machen. Etwa 9% der regelmäßigen Konsumenten entwickeln eine Abhängigkeit. Das Risiko steigt bei frühem Einstieg (unter 18), täglichem Konsum und hochpotentem Cannabis (über 15% THC).' },
        { question: 'Was bedeutet Suchtprävention in einem Cannabis Social Club?', answer: 'Jede Anbauvereinigung ist gesetzlich verpflichtet, ein Suchtpräventionskonzept umzusetzen. Bei BlattWerk umfasst das einen Selbsteinschätzungstest, interne Ansprechpersonen, Kooperationen mit lokalen Beratungsstellen und regelmäßige Aufklärung.' },
      ] : [
        { question: 'How do I recognize problematic cannabis use?', answer: 'Warning signs include: daily consumption despite negative consequences, loss of control over amount and frequency, neglect of responsibilities and social contacts, tolerance development and withdrawal symptoms during breaks.' },
        { question: 'Where can I find help for cannabis dependency in Hildesheim?', answer: 'Local contacts include the addiction counseling of Diakonie Hildesheim, the drug counseling of Caritas, and your GP. Nationally, you can reach the Addiction & Drugs Hotline at 01805-313031.' },
        { question: 'Is cannabis addictive?', answer: 'Yes, cannabis can cause psychological dependence. About 9% of regular users develop a dependency. The risk increases with early onset (under 18), daily use and high-potency cannabis (over 15% THC).' },
        { question: 'What does addiction prevention mean in a Cannabis Social Club?', answer: 'Every cultivation association is legally required to implement an addiction prevention concept. At BlattWerk, this includes a self-assessment test, internal contacts, cooperation with local counseling centers and regular education.' },
      ]} />
      <SuchtpraeventionClient isDE={isDE} />
      <HeroImage
        src="/images/knowledge/prevention.jpg"
        alt={isDE ? 'Prävention und Gesundheit' : 'Prevention and health'}
        height="200px"
        gradient="top"
      />
    </>
  );
}
