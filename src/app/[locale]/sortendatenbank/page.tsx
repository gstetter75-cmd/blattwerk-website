import { createMetadata, PAGE_META } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { StrainOverview } from '@/components/strains/StrainOverview';
import { BreadcrumbSchema, FAQSchema } from '@/lib/schema';
import { HeroImage } from '@/components/decorative/HeroImage';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META.strains, 'sortendatenbank');
}

export default async function StrainsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'Home', href: '' },
          { name: locale === 'de' ? 'Sortendatenbank' : 'Strain Database', href: '/sortendatenbank' },
        ]}
      />
      <FAQSchema items={locale === 'de' ? [
        { question: 'Was ist der Unterschied zwischen Indica, Sativa und Hybrid?', answer: 'Indica-Sorten wirken tendenziell körperlich entspannend, Sativa-Sorten eher anregend und kreativ, Hybrid-Sorten kombinieren beide Eigenschaften. Der tatsächliche Unterschied liegt aber weniger in der botanischen Klassifizierung als im Terpenprofil und Cannabinoidverhältnis jeder Sorte.' },
        { question: 'Welche Sorte eignet sich für Anfänger?', answer: 'Sorten mit moderatem THC-Gehalt (10–15%) und etwas CBD sind ideal für Einsteiger. Empfohlene Sorten: Blue Dream, Northern Lights oder CBD-reiche Sorten wie Cannatonic. Wichtig: niedrig dosieren und langsam steigern.' },
        { question: 'Was sagt der THC-Gehalt über die Wirkung aus?', answer: 'Der THC-Gehalt bestimmt die Intensität der psychoaktiven Wirkung, aber nicht die Art der Wirkung. Ob eine Sorte entspannend, anregend oder kreativ wirkt, hängt primär vom Terpenprofil ab — insbesondere von Myrcen, Limonen und Pinene.' },
        { question: 'Kann ich die Sorten von BlattWerk direkt beziehen?', answer: 'Die Sortendatenbank dient als Planungsgrundlage. Als Mitglied von BlattWerk e.V. kannst du Cannabis zum Selbstkostenpreis beziehen, sobald die erste Ernte abgeschlossen ist. Die finale Sortenauswahl richtet sich auch nach Mitgliederwünschen.' },
      ] : [
        { question: 'What is the difference between indica, sativa and hybrid?', answer: 'Indica strains tend to be physically relaxing, sativa strains more stimulating and creative, hybrid strains combine both properties. The actual difference lies less in botanical classification than in the terpene profile and cannabinoid ratio of each strain.' },
        { question: 'Which strain is suitable for beginners?', answer: 'Strains with moderate THC content (10–15%) and some CBD are ideal for beginners. Recommended: Blue Dream, Northern Lights or CBD-rich strains like Cannatonic. Important: start low and go slow.' },
        { question: 'What does THC content tell you about the effects?', answer: 'THC content determines the intensity of psychoactive effects, but not the type of effect. Whether a strain is relaxing, stimulating or creative depends primarily on the terpene profile — especially myrcene, limonene and pinene.' },
        { question: 'Can I obtain strains from BlattWerk directly?', answer: 'The strain database serves as a planning basis. As a member of BlattWerk e.V., you can obtain cannabis at cost price once the first harvest is complete. The final strain selection also considers member preferences.' },
      ]} />
      <StrainOverview />
      <HeroImage
        src="/images/cannabis-indoor.jpg"
        alt={locale === 'de' ? 'Cannabis Indoor-Anbau' : 'Cannabis indoor cultivation'}
        height="200px"
        gradient="top"
      />
    </>
  );
}
