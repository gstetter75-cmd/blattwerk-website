import { createMetadata, PAGE_META } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { Shield, Mail, Server, Cookie, Eye, UserCheck, FileText } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { BreadcrumbSchema } from '@/lib/schema';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return createMetadata(locale, PAGE_META.privacy, 'datenschutz');
}

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';

  const glassCard = 'bg-bg-elevated border border-[var(--border)] rounded-xl p-6';

  const sections = isDE ? [
    {
      icon: Shield,
      title: '1. Verantwortlicher',
      content: `Verantwortlicher im Sinne der DSGVO ist:\n\nBlattWerk e.V.\nAdresse: Wetzellplatz 2, 31137 Hildesheim\nE-Mail: info@blattwerk.dev\n\nBei Fragen zum Datenschutz wende dich direkt an uns unter der oben genannten E-Mail-Adresse.`,
    },
    {
      icon: Server,
      title: '2. Hosting',
      content: `Diese Website wird bei Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, USA gehostet.\n\nNetlify verarbeitet im Rahmen des Hostings technische Verbindungsdaten (IP-Adresse, Zeitstempel, aufgerufene Seite, Browsertyp). Diese Daten werden für maximal 30 Tage gespeichert und dienen der Sicherheit und dem fehlerfreien Betrieb der Website.\n\nRechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website).\n\nNetlify ist nach dem EU-US Data Privacy Framework zertifiziert; die Übermittlung in die USA stützt sich auf den Angemessenheitsbeschluss der EU-Kommission (Art. 45 DSGVO). Weitere Informationen: https://www.netlify.com/gdpr-ccpa`,
    },
    {
      icon: FileText,
      title: '3. Kontaktformular',
      content: `Wenn du unser Kontaktformular nutzt, werden die eingegebenen Daten (Name, E-Mail, Betreff, Nachricht) verarbeitet, um deine Anfrage zu beantworten. Pflichtfelder sind gekennzeichnet; ohne sie können wir deine Anfrage nicht bearbeiten.\n\nDie Formulardaten werden über den Dienst Formspree, Inc. (USA) verarbeitet und an uns per E-Mail weitergeleitet. Formspree speichert die übermittelten Daten auf Servern in den USA. Die Übermittlung stützt sich auf den Angemessenheitsbeschluss der EU-Kommission (EU-US Data Privacy Framework). Die Daten werden nicht für andere Zwecke verwendet und nach Abschluss der Anfrage gelöscht, spätestens nach 6 Monaten. Weitere Informationen: https://formspree.io/legal/privacy-policy\n\nRechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO, soweit deine Anfrage auf eine Mitgliedschaft abzielt, im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).`,
    },
    {
      icon: Mail,
      title: '4. Kontakt per E-Mail, Telefon und WhatsApp',
      content: `Wenn du uns per E-Mail, telefonisch oder über WhatsApp kontaktierst, verarbeiten wir deine Angaben (z. B. Name, Telefonnummer, E-Mail-Adresse, Inhalt der Nachricht), um dein Anliegen zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.\n\nWhatsApp ist ein Dienst der WhatsApp Ireland Limited (Irland), einem Unternehmen der Meta-Gruppe. Bei der Nutzung von WhatsApp erhält Meta unter anderem deine Telefonnummer und Metadaten der Kommunikation; eine Übermittlung in die USA ist möglich (Meta ist nach dem EU-US Data Privacy Framework zertifiziert). Die Nachrichteninhalte sind Ende-zu-Ende-verschlüsselt. Für die Verarbeitung durch WhatsApp gilt dessen Datenschutzrichtlinie: https://www.whatsapp.com/legal/privacy-policy-eea\n\nWenn du das nicht möchtest, schreib uns gern per E-Mail oder über das Kontaktformular.\n\nWir löschen deine Anfrage, sobald sie erledigt ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.`,
    },
    {
      icon: UserCheck,
      title: '5. Mitgliedsanfrage über die Hanf-App',
      content: `Mitgliedsanfragen laufen über die „Hanf-App“ der Signature Services Ltd., Fawwara Building, Triq L-Imsida, Gzira GZR 1401, Malta. Auf unserer Website verlinken wir lediglich auf die App; beim Aufruf des Links werden keine Daten von uns an den Anbieter übermittelt.\n\nWenn du dich in der App registrierst, verarbeitet der Anbieter deine Daten nach seiner eigenen Datenschutzerklärung: https://diehanfapp.de/datenschutzerklaerung/\n\nDie Angaben deines Aufnahmeantrags erhalten wir über die App und verarbeiten sie zur Durchführung der Mitgliedschaft (Art. 6 Abs. 1 lit. b DSGVO; siehe Abschnitt 8).`,
    },
    {
      icon: Cookie,
      title: '6. Cookies und lokaler Speicher',
      content: `Wir verwenden keine Tracking- oder Werbe-Cookies und keine Analyse-Tools. Es werden keine Daten an Werbenetze übermittelt.\n\nFolgende Einträge werden im lokalen Speicher (localStorage) deines Browsers abgelegt. Sie enthalten keine personenbezogenen Daten und verlassen dein Gerät nicht:\n\n• blattwerk-cookie-consent – merkt sich, dass du den Datenschutz-Hinweis gesehen hast\n• blattwerk-theme – speichert deine Wahl zwischen hellem und dunklem Design\n• bw_contact_last_submit – Zeitpunkt der letzten Absendung des Kontaktformulars (Schutz vor Mehrfachversand, ohne Formularinhalte)\n\nDu kannst diese Einträge jederzeit über die Einstellungen deines Browsers löschen.\n\nRechtsgrundlage: § 25 Abs. 2 Nr. 2 TDDDG (unbedingt erforderlich für den von dir gewünschten Dienst) sowie Art. 6 Abs. 1 lit. f DSGVO.`,
    },
    {
      icon: Eye,
      title: '7. Google Maps',
      content: `Auf unserer Kontaktseite nutzen wir Google Maps zur Darstellung unseres Standorts. Google Maps wird erst nach deiner ausdrücklichen Einwilligung geladen (Klick auf „Karte laden“).\n\nBeim Laden von Google Maps wird eine Verbindung zu Servern der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, bzw. der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA hergestellt. Dabei können personenbezogene Daten (insbesondere IP-Adresse und Standortdaten) an Google übermittelt und Informationen auf deinem Gerät gespeichert oder ausgelesen werden. Google ist nach dem EU-US Data Privacy Framework zertifiziert.\n\nRechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG (Einwilligung). Deine Einwilligung gilt nur für den aktuellen Seitenaufruf; du kannst sie jederzeit widerrufen, indem du die Seite neu lädst.`,
    },
    {
      icon: UserCheck,
      title: '8. Mitgliederdaten',
      content: `Für Vereinsmitglieder verarbeiten wir zusätzlich die zur Vereinsmitgliedschaft und zur Erfüllung der Pflichten nach dem KCanG erforderlichen Daten (Name, Geburtsdatum, Adresse, Ausweisdaten, Bankverbindung für den Beitragseinzug, Abgabedaten).\n\nDiese Daten werden gesondert erhoben und in einer separaten Datenschutzerklärung für Mitglieder geregelt, die bei der Aufnahme ausgehändigt wird.\n\nRechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Mitgliedschaftsverhältnis), Art. 6 Abs. 1 lit. c DSGVO (gesetzliche Pflichten nach dem KCanG) und, soweit Gesundheitsdaten betroffen sind, Art. 9 Abs. 2 lit. a DSGVO (ausdrückliche Einwilligung).`,
    },
    {
      icon: FileText,
      title: '9. Speicherdauer',
      content: `Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist. Danach werden sie gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten (z. B. nach Handels- und Steuerrecht oder dem KCanG) entgegenstehen. Die konkreten Fristen findest du in den jeweiligen Abschnitten.`,
    },
    {
      icon: Eye,
      title: '10. Deine Rechte',
      content: `Du hast gegenüber uns folgende Rechte bezüglich deiner personenbezogenen Daten:\n\n• Recht auf Auskunft (Art. 15 DSGVO)\n• Recht auf Berichtigung (Art. 16 DSGVO)\n• Recht auf Löschung (Art. 17 DSGVO)\n• Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)\n• Recht auf Datenübertragbarkeit (Art. 20 DSGVO)\n• Recht auf Widerspruch (Art. 21 DSGVO, siehe Abschnitt 11)\n• Recht auf Widerruf einer Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)\n\nZur Ausübung deiner Rechte wende dich an: info@blattwerk.dev\n\nDu hast außerdem das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren. Die zuständige Aufsichtsbehörde für Niedersachsen ist:\n\nDie Landesbeauftragte für den Datenschutz Niedersachsen\nPrinzenstraße 5, 30159 Hannover\nwww.lfd.niedersachsen.de`,
    },
    {
      icon: Shield,
      title: '11. Widerspruchsrecht',
      content: `Soweit wir deine Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) verarbeiten, hast du das Recht, aus Gründen, die sich aus deiner besonderen Situation ergeben, jederzeit Widerspruch gegen diese Verarbeitung einzulegen (Art. 21 Abs. 1 DSGVO). Wir verarbeiten deine Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe nachweisen, die deine Interessen überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.\n\nDer Widerspruch ist formlos möglich, z. B. per E-Mail an info@blattwerk.dev.`,
    },
    {
      icon: Shield,
      title: '12. Datensicherheit',
      content: `Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um deine Daten gegen Manipulation, Verlust oder unberechtigten Zugriff zu schützen.\n\nDie Verbindung zu unserer Website ist mit TLS/SSL verschlüsselt (HTTPS). Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.`,
    },
  ] : [
    {
      icon: Shield,
      title: '1. Data Controller',
      content: `The data controller within the meaning of the GDPR is:\n\nBlattWerk e.V.\nAddress: Wetzellplatz 2, 31137 Hildesheim, Germany\nEmail: info@blattwerk.dev\n\nFor questions about data protection, please contact us directly at the email address above.`,
    },
    {
      icon: Server,
      title: '2. Hosting',
      content: `This website is hosted by Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, USA.\n\nNetlify processes technical connection data (IP address, timestamp, page accessed, browser type) as part of hosting. This data is stored for a maximum of 30 days and serves the security and error-free operation of the website.\n\nLegal basis: Art. 6 para. 1 lit. f GDPR (legitimate interest in secure operation of the website).\n\nNetlify is certified under the EU-US Data Privacy Framework; the transfer to the USA is based on the European Commission's adequacy decision (Art. 45 GDPR). More information: https://www.netlify.com/gdpr-ccpa`,
    },
    {
      icon: FileText,
      title: '3. Contact Form',
      content: `When you use our contact form, the entered data (name, email, subject, message) is processed to respond to your inquiry. Required fields are marked; without them we cannot process your inquiry.\n\nForm data is processed via Formspree, Inc. (USA) and forwarded to us by email. Formspree stores the submitted data on servers in the USA. The transfer is based on the European Commission's adequacy decision (EU-US Data Privacy Framework). The data is not used for other purposes and is deleted after the inquiry is completed, at the latest after 6 months. More information: https://formspree.io/legal/privacy-policy\n\nLegal basis: Art. 6 para. 1 lit. b GDPR where your inquiry concerns a membership, otherwise Art. 6 para. 1 lit. f GDPR (legitimate interest in responding to inquiries).`,
    },
    {
      icon: Mail,
      title: '4. Contact by Email, Phone and WhatsApp',
      content: `If you contact us by email, phone or WhatsApp, we process your details (e.g. name, phone number, email address, content of the message) to handle your request. The legal basis is Art. 6 para. 1 lit. b or lit. f GDPR.\n\nWhatsApp is a service of WhatsApp Ireland Limited (Ireland), a Meta company. When you use WhatsApp, Meta receives, among other things, your phone number and communication metadata; a transfer to the USA is possible (Meta is certified under the EU-US Data Privacy Framework). Message contents are end-to-end encrypted. WhatsApp's own privacy policy applies to its processing: https://www.whatsapp.com/legal/privacy-policy-eea\n\nIf you prefer not to use WhatsApp, feel free to contact us by email or via the contact form.\n\nWe delete your request once it has been dealt with, unless statutory retention obligations apply.`,
    },
    {
      icon: UserCheck,
      title: '5. Membership Requests via the Hanf-App',
      content: `Membership requests are handled via the "Hanf-App" operated by Signature Services Ltd., Fawwara Building, Triq L-Imsida, Gzira GZR 1401, Malta. Our website only links to the app; no data is transmitted from us to the provider when you follow the link.\n\nWhen you register in the app, the provider processes your data under its own privacy policy: https://diehanfapp.de/datenschutzerklaerung/\n\nWe receive the details of your membership application via the app and process them to administer your membership (Art. 6 para. 1 lit. b GDPR; see section 8).`,
    },
    {
      icon: Cookie,
      title: '6. Cookies and Local Storage',
      content: `We do not use tracking or advertising cookies or analytics tools. No data is transmitted to advertising networks.\n\nThe following entries are stored in your browser's local storage (localStorage). They contain no personal data and never leave your device:\n\n• blattwerk-cookie-consent – remembers that you have seen the privacy notice\n• blattwerk-theme – stores your choice of light or dark design\n• bw_contact_last_submit – time of your last contact form submission (protection against repeated submissions, no form contents)\n\nYou can delete these entries at any time in your browser settings.\n\nLegal basis: § 25 para. 2 no. 2 TDDDG (strictly necessary for the service you requested) and Art. 6 para. 1 lit. f GDPR.`,
    },
    {
      icon: Eye,
      title: '7. Google Maps',
      content: `On our contact page, we use Google Maps to display our location. Google Maps is only loaded after your explicit consent (click on "Load map").\n\nWhen loading Google Maps, a connection is established to servers of Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland, or Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Personal data (in particular IP address and location data) may be transmitted to Google, and information may be stored on or read from your device. Google is certified under the EU-US Data Privacy Framework.\n\nLegal basis: Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TDDDG (consent). Your consent only applies to the current page view; you can revoke it at any time by reloading the page.`,
    },
    {
      icon: UserCheck,
      title: '8. Member Data',
      content: `For club members, we additionally process the data required for club membership and for fulfilling our obligations under the KCanG (name, date of birth, address, ID data, bank details for collecting fees, distribution records).\n\nThis data is collected separately and governed by a separate privacy policy for members, which is provided upon admission.\n\nLegal basis: Art. 6 para. 1 lit. b GDPR (membership relationship), Art. 6 para. 1 lit. c GDPR (legal obligations under the KCanG) and, where health data is concerned, Art. 9 para. 2 lit. a GDPR (explicit consent).`,
    },
    {
      icon: FileText,
      title: '9. Storage Period',
      content: `We only store personal data for as long as is necessary for the respective purpose. It is then deleted unless statutory retention obligations (e.g. under commercial and tax law or the KCanG) apply. Specific periods are stated in the respective sections.`,
    },
    {
      icon: Eye,
      title: '10. Your Rights',
      content: `You have the following rights regarding your personal data:\n\n• Right of access (Art. 15 GDPR)\n• Right to rectification (Art. 16 GDPR)\n• Right to erasure (Art. 17 GDPR)\n• Right to restriction of processing (Art. 18 GDPR)\n• Right to data portability (Art. 20 GDPR)\n• Right to object (Art. 21 GDPR, see section 11)\n• Right to withdraw consent with effect for the future (Art. 7 para. 3 GDPR)\n\nTo exercise your rights, contact: info@blattwerk.dev\n\nYou also have the right to lodge a complaint with a data protection supervisory authority. The competent authority for Lower Saxony is:\n\nDie Landesbeauftragte für den Datenschutz Niedersachsen\nPrinzenstraße 5, 30159 Hannover, Germany\nwww.lfd.niedersachsen.de`,
    },
    {
      icon: Shield,
      title: '11. Right to Object',
      content: `Where we process your data on the basis of Art. 6 para. 1 lit. f GDPR (legitimate interest), you have the right to object to this processing at any time on grounds relating to your particular situation (Art. 21 para. 1 GDPR). We will then no longer process your data unless we can demonstrate compelling legitimate grounds that override your interests, or the processing serves the establishment, exercise or defence of legal claims.\n\nYou can object informally, e.g. by email to info@blattwerk.dev.`,
    },
    {
      icon: Shield,
      title: '12. Data Security',
      content: `We use technical and organizational security measures to protect your data against manipulation, loss or unauthorized access.\n\nThe connection to our website is encrypted with TLS/SSL (HTTPS). Our security measures are continuously improved in line with technological developments.`,
    },
  ];

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: 'Home', href: '' },
          { name: isDE ? 'Datenschutz' : 'Privacy Policy', href: '/datenschutz' },
        ]}
      />
      <PageHero
        title={isDE ? 'Datenschutzerklärung' : 'Privacy Policy'}
        subtitle={isDE
          ? 'Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO'
          : 'Information on the processing of personal data in accordance with GDPR'}
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">

          {/* Last updated */}
          <p className="text-xs text-ink-faint text-right">
            {isDE ? 'Stand: Oktober 2026' : 'As of: October 2026'}
          </p>

          {/* Intro */}
          <div className={`${glassCard} border-accent/20`}>
            <p className="text-sm text-ink-muted leading-relaxed">
              {isDE
                ? 'Der Schutz deiner personenbezogenen Daten ist uns wichtig. Diese Datenschutzerklärung informiert dich darüber, wie wir mit deinen Daten umgehen, wenn du unsere Website besuchst. Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst.'
                : 'Protecting your personal data is important to us. This privacy policy informs you about how we handle your data when you visit our website. Personal data is all data with which you can be personally identified.'}
            </p>
          </div>

          {sections.map(({ icon: Icon, title, content }) => (
            <div key={title} className={glassCard}>
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-4 h-4 text-accent opacity-70 shrink-0" />
                <h2 className="font-heading italic text-lg text-ink">{title}</h2>
              </div>
              <div className="space-y-2">
                {content.split('\n').map((line, i) => (
                  line.trim() === ''
                    ? <div key={i} className="h-2" />
                    : <p key={i} className={`text-sm leading-relaxed ${line.startsWith('•') ? 'pl-4 text-ink-muted' : 'text-ink-muted'}`}>
                        {line}
                      </p>
                ))}
              </div>
            </div>
          ))}

          {/* Änderungen */}
          <div className="p-4 bg-bg-elevated rounded-lg border border-[var(--border)]">
            <p className="text-xs text-ink-muted leading-relaxed">
              {isDE
                ? 'Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte Rechtslagen oder Änderungen unserer Dienste anzupassen. Die jeweils aktuelle Version ist auf dieser Seite abrufbar.'
                : 'We reserve the right to adapt this privacy policy as needed to bring it into line with changed legal situations or changes to our services. The current version is available on this page.'}
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
