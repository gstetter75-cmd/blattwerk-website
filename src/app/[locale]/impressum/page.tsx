import { createMetadata, PAGE_META } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { Building2, Mail, Phone, ScrollText, AlertTriangle, Globe, UserCheck, Shield } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META.impressum, 'impressum');
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';

  const glassCard = 'bg-bg-elevated border border-[var(--border)] rounded-xl p-6';

  return (
    <>
      <PageHero
        title={isDE ? 'Impressum' : 'Legal Notice'}
        subtitle={isDE
          ? 'Angaben gemäß § 5 TMG'
          : 'Information according to § 5 TMG (German Telemedia Act)'}
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

          {/* Geltungsbereich */}
          <p className="text-sm text-ink-muted leading-relaxed px-1">
            {isDE
              ? 'Dieses Impressum gilt für alle Angebote unter der Domain www.blattwerk.dev inklusive aller Subdomains sowie die WhatsApp-, Instagram- und Facebook-Auftritte von BlattWerk e.V.'
              : 'This legal notice applies to all services under the domain www.blattwerk.dev including all subdomains as well as the WhatsApp, Instagram and Facebook presences of BlattWerk e.V.'}
          </p>

          {/* Verein */}
          <div className={glassCard}>
            <div className="flex items-center gap-3 mb-5">
              <Building2 className="w-5 h-5 text-accent opacity-70" />
              <h2 className="font-heading italic text-xl text-ink">
                {isDE ? 'Angaben zum Verein' : 'Association Details'}
              </h2>
            </div>
            <dl className="space-y-3 text-sm">
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="text-ink-muted">{isDE ? 'Name' : 'Name'}</dt>
                <dd className="text-ink">BlattWerk e. V.</dd>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="text-ink-muted">{isDE ? 'Rechtsform' : 'Legal form'}</dt>
                <dd className="text-ink">{isDE ? 'Eingetragener Verein (e.V.)' : 'Registered association (e.V.)'}</dd>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="text-ink-muted">{isDE ? 'Anschrift' : 'Address'}</dt>
                <dd className="text-ink">
                  Wetzellplatz 2<br />31137 Hildesheim<br />{isDE ? 'Deutschland' : 'Germany'}
                </dd>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="text-ink-muted">{isDE ? 'Registergericht' : 'Registration court'}</dt>
                <dd className="text-ink">{isDE ? 'Amtsgericht Hildesheim' : 'District Court of Hildesheim'}</dd>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="text-ink-muted">{isDE ? 'Registernummer' : 'Registration number'}</dt>
                <dd className="text-ink">VR 201878</dd>
              </div>
            </dl>
          </div>

          {/* Vorstand */}
          <div className={glassCard}>
            <div className="flex items-center gap-3 mb-5">
              <ScrollText className="w-5 h-5 text-accent opacity-70" />
              <h2 className="font-heading italic text-xl text-ink">
                {isDE ? 'Vertretungsberechtigter Vorstand' : 'Authorized Board'}
              </h2>
            </div>
            <p className="text-sm text-ink-muted mb-3">
              {isDE
                ? 'Der Verein wird gesetzlich durch den Vorstand vertreten.'
                : 'The association is legally represented by the board.'}
            </p>
            <dl className="space-y-3 text-sm">
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="text-ink-muted">1. {isDE ? 'Vorsitzender' : 'Chairperson'}</dt>
                <dd className="text-ink">Gero Stetter</dd>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="text-ink-muted">{isDE ? 'Stell. Vorsitzender' : 'Vice-Chairperson'}</dt>
                <dd className="text-ink">Salvatore Runza</dd>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="text-ink-muted">{isDE ? 'Kassenwart' : 'Treasurer'}</dt>
                <dd className="text-ink">Thomas Andreas</dd>
              </div>
            </dl>
          </div>

          {/* Kontakt */}
          <div className={glassCard}>
            <div className="flex items-center gap-3 mb-5">
              <Mail className="w-5 h-5 text-accent opacity-70" />
              <h2 className="font-heading italic text-xl text-ink">
                {isDE ? 'Kontakt' : 'Contact'}
              </h2>
            </div>
            <dl className="space-y-3 text-sm">
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="text-ink-muted flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" /> E-Mail
                </dt>
                <dd>
                  <a href="mailto:info@blattwerk.dev" className="text-accent hover:text-accent/80 transition-colors">
                    info@blattwerk.dev
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="text-ink-muted flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> {isDE ? 'Telefon' : 'Phone'}
                </dt>
                <dd>
                  <a href="tel:+4915233539841" className="text-accent hover:text-accent/80 transition-colors">
                    +49 15233539841
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="text-ink-muted flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" /> Website
                </dt>
                <dd className="text-ink">blattwerk.dev</dd>
              </div>
            </dl>
          </div>

          {/* Verantwortlicher für Inhalte */}
          <div className={glassCard}>
            <div className="flex items-center gap-3 mb-5">
              <UserCheck className="w-5 h-5 text-accent opacity-70" />
              <h2 className="font-heading italic text-xl text-ink">
                {isDE ? 'Verantwortlicher für Inhalte' : 'Responsible for Content'}
              </h2>
            </div>
            <dl className="space-y-3 text-sm">
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="text-ink-muted">{isDE ? 'Name' : 'Name'}</dt>
                <dd className="text-ink">Gero Stetter</dd>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="text-ink-muted">{isDE ? 'Anschrift' : 'Address'}</dt>
                <dd className="text-ink">
                  Grabenstraße 19<br />31020 Salzhemmendorf<br />{isDE ? 'Deutschland' : 'Germany'}
                </dd>
              </div>
            </dl>
          </div>

          {/* Datenschutzbeauftragter */}
          <div className={glassCard}>
            <div className="flex items-center gap-3 mb-5">
              <Shield className="w-5 h-5 text-accent opacity-70" />
              <h2 className="font-heading italic text-xl text-ink">
                {isDE ? 'Datenschutz' : 'Data Protection'}
              </h2>
            </div>
            <p className="text-sm text-ink-muted mb-3">
              {isDE
                ? 'Bei Fragen zum Datenschutz wenden Sie sich bitte an:'
                : 'For data protection inquiries, please contact:'}
            </p>
            <dl className="space-y-3 text-sm">
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="text-ink-muted">{isDE ? 'Ansprechpartner' : 'Contact person'}</dt>
                <dd className="text-ink">Thomas Andreas</dd>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="text-ink-muted flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" /> E-Mail
                </dt>
                <dd>
                  <a href="mailto:praevention@blattwerk.dev" className="text-accent hover:text-accent/80 transition-colors">
                    praevention@blattwerk.dev
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Haftung für Inhalte */}
          <div className={glassCard}>
            <h2 className="font-heading italic text-xl text-ink mb-4">
              {isDE ? 'Haftung für Inhalte' : 'Liability for Content'}
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed">
              {isDE
                ? 'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.'
                : 'As a service provider, we are responsible for our own content on these pages in accordance with § 7 para. 1 TMG and general laws. According to §§ 8 to 10 TMG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the point in time at which a concrete infringement of the law becomes known. If we become aware of any such infringements, we will remove this content immediately.'}
            </p>
          </div>

          {/* Haftung für Links */}
          <div className={glassCard}>
            <h2 className="font-heading italic text-xl text-ink mb-4">
              {isDE ? 'Haftung für Links' : 'Liability for Links'}
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed">
              {isDE
                ? 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.'
                : 'Our offering contains links to external third-party websites, over whose content we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the linked pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent content control of the linked pages is not reasonable without concrete evidence of a legal violation. If we become aware of legal violations, we will remove such links immediately.'}
            </p>
          </div>

          {/* Urheberrecht */}
          <div className={glassCard}>
            <h2 className="font-heading italic text-xl text-ink mb-4">
              {isDE ? 'Urheberrecht' : 'Copyright'}
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed">
              {isDE
                ? 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.'
                : 'The content and works created by the site operators on these pages are subject to German copyright law. The reproduction, editing, distribution and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected.'}
            </p>
          </div>

          {/* Gültigkeitsdatum */}
          <p className="text-xs text-ink-muted text-center px-1">
            {isDE
              ? 'Dieses Impressum gilt ab dem 30. April 2025.'
              : 'This legal notice is effective as of April 30, 2025.'}
          </p>

          {/* KCanG Hinweis */}
          <div className="flex gap-3 p-4 bg-gold-theme/5 border border-gold-theme/20 rounded-lg">
            <AlertTriangle className="w-4 h-4 text-gold-theme shrink-0 mt-0.5 opacity-80" />
            <p className="text-xs text-ink-muted leading-relaxed">
              {isDE
                ? 'BlattWerk e.V. handelt im Rahmen des Konsumcannabisgesetzes (KCanG). Die Abgabe von Cannabis erfolgt ausschließlich an Vereinsmitglieder ab 21 Jahren gemäß den gesetzlichen Vorgaben.'
                : 'BlattWerk e.V. operates within the framework of the Consumer Cannabis Act (KCanG). Cannabis is only dispensed to club members aged 21 and over in accordance with legal requirements.'}
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
