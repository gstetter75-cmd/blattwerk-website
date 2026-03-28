import { createMetadata, PAGE_META } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { Shield, Mail, Server, Cookie, Eye, UserCheck, FileText } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';

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
      content: `Diese Website wird bei Netlify Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA gehostet.\n\nNetlify verarbeitet im Rahmen des Hostings technische Verbindungsdaten (IP-Adresse, Zeitstempel, aufgerufene Seite, Browsertyp). Diese Daten werden für maximal 30 Tage gespeichert und dienen der Sicherheit und dem fehlerfreien Betrieb der Website.\n\nRechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website).\n\nNetlify ist gemäß Data Privacy Framework für den transatlantischen Datentransfer zertifiziert. Weitere Informationen: https://www.netlify.com/gdpr-ccpa`,
    },
    {
      icon: FileText,
      title: '3. Kontaktformular',
      content: `Wenn du unser Kontaktformular nutzt, werden die eingegebenen Daten (Name, E-Mail, Betreff, Nachricht) verarbeitet, um deine Anfrage zu beantworten.\n\nDie Formulardaten werden über den Dienst Formspree Inc. (44 Tehama Street, San Francisco, CA 94105, USA) verarbeitet und an uns per E-Mail weitergeleitet. Formspree speichert die übermittelten Daten auf Servern in den USA. Es besteht ein Angemessenheitsbeschluss der EU-Kommission (EU-US Data Privacy Framework). Die Daten werden nicht für andere Zwecke verwendet und nach Abschluss der Anfrage gelöscht, spätestens nach 6 Monaten. Weitere Informationen: https://formspree.io/legal/privacy-policy\n\nRechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).`,
    },
    {
      icon: Cookie,
      title: '4. Cookies und lokaler Speicher',
      content: `Diese Website verwendet ausschließlich technisch notwendige Cookies und den lokalen Speicher (localStorage) des Browsers.\n\nWir speichern deine Cookie-Einwilligung (cookie_consent) im localStorage, um zu merken, dass du den Cookie-Hinweis bereits gesehen hast. Dieser Eintrag enthält keine personenbezogenen Daten.\n\nWir verwenden keine Tracking-Cookies, keine Analyse-Tools (z.B. Google Analytics) und kein Remarketing. Es werden keine Daten an Werbenetze übermittelt.\n\nRechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am funktionalen Betrieb der Website).`,
    },
    {
      icon: Eye,
      title: '5. Google Maps',
      content: `Auf unserer Kontaktseite nutzen wir Google Maps zur Darstellung unseres Standorts. Google Maps wird erst nach deiner ausdrücklichen Einwilligung geladen (Klick auf „Karte laden").\n\nBeim Laden von Google Maps wird eine Verbindung zu Servern der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA hergestellt. Dabei können personenbezogene Daten (insbesondere IP-Adresse und Standortdaten) an Google übermittelt werden.\n\nRechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Du kannst deine Einwilligung jederzeit widerrufen, indem du die Seite neu lädst.`,
    },
    {
      icon: FileText,
      title: '6. Schriftarten',
      content: `Diese Website verwendet Google Fonts (Lora, Nunito, Fira Code). Die Schriftarten werden beim Build-Prozess heruntergeladen und von unserem eigenen Server ausgeliefert.\n\nEs wird keine Verbindung zu Google-Servern beim Aufrufen der Website hergestellt. Es findet keine Übermittlung von Nutzerdaten an Google statt.`,
    },
    {
      icon: Eye,
      title: '7. Deine Rechte',
      content: `Du hast gegenüber uns folgende Rechte bezüglich deiner personenbezogenen Daten:\n\n• Recht auf Auskunft (Art. 15 DSGVO)\n• Recht auf Berichtigung (Art. 16 DSGVO)\n• Recht auf Löschung (Art. 17 DSGVO)\n• Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)\n• Recht auf Datenübertragbarkeit (Art. 20 DSGVO)\n• Recht auf Widerspruch (Art. 21 DSGVO)\n\nZur Ausübung deiner Rechte wende dich an: info@blattwerk.dev\n\nDu hast außerdem das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren. Die zuständige Aufsichtsbehörde für Niedersachsen ist:\n\nDie Landesbeauftragte für den Datenschutz Niedersachsen\nPrinzenstraße 5, 30159 Hannover\nwww.lfd.niedersachsen.de`,
    },
    {
      icon: UserCheck,
      title: '8. Mitgliederdaten',
      content: `Für Vereinsmitglieder verarbeiten wir zusätzlich die zur Vereinsmitgliedschaft erforderlichen Daten (Name, Geburtsdatum, Adresse, Ausweisdaten, Gesundheitsdaten gemäß KCanG-Anforderungen).\n\nDiese Daten werden gesondert erhoben und in einer separaten Datenschutzerklärung für Mitglieder geregelt, die bei der Aufnahme ausgehändigt wird.\n\nRechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung), Art. 9 Abs. 2 lit. a DSGVO (ausdrückliche Einwilligung für Gesundheitsdaten), § 26 BDSG.`,
    },
    {
      icon: Shield,
      title: '9. Datensicherheit',
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
      content: `This website is hosted by Netlify Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA.\n\nNetlify processes technical connection data (IP address, timestamp, page accessed, browser type) as part of hosting. This data is stored for a maximum of 30 days and serves the security and error-free operation of the website.\n\nLegal basis: Art. 6 para. 1 lit. f GDPR (legitimate interest in secure operation of the website).\n\nNetlify is certified under the Data Privacy Framework for transatlantic data transfer. More information: https://www.netlify.com/gdpr-ccpa`,
    },
    {
      icon: FileText,
      title: '3. Contact Form',
      content: `When you use our contact form, the entered data (name, email, subject, message) is processed to respond to your inquiry.\n\nForm data is processed via Formspree Inc. (44 Tehama Street, San Francisco, CA 94105, USA) and forwarded to us by email. Formspree stores the submitted data on servers in the USA. An adequacy decision by the EU Commission exists (EU-US Data Privacy Framework). The data is not used for other purposes and is deleted after the inquiry is completed, at the latest after 6 months. More information: https://formspree.io/legal/privacy-policy\n\nLegal basis: Art. 6 para. 1 lit. b GDPR (pre-contractual measures) or Art. 6 para. 1 lit. f GDPR (legitimate interest in answering inquiries).`,
    },
    {
      icon: Cookie,
      title: '4. Cookies and Local Storage',
      content: `This website uses only technically necessary cookies and the browser's local storage (localStorage).\n\nWe store your cookie consent (cookie_consent) in localStorage to remember that you have already seen the cookie notice. This entry contains no personal data.\n\nWe do not use tracking cookies, analytics tools (e.g. Google Analytics) or remarketing. No data is transmitted to advertising networks.\n\nLegal basis: Art. 6 para. 1 lit. f GDPR (legitimate interest in the functional operation of the website).`,
    },
    {
      icon: Eye,
      title: '5. Google Maps',
      content: `On our contact page, we use Google Maps to display our location. Google Maps is only loaded after your explicit consent (click on "Load map").\n\nWhen loading Google Maps, a connection to servers of Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA is established. Personal data (in particular IP address and location data) may be transmitted to Google.\n\nLegal basis: Art. 6 para. 1 lit. a GDPR (consent). You can revoke your consent at any time by reloading the page.`,
    },
    {
      icon: FileText,
      title: '6. Fonts',
      content: `This website uses Google Fonts (Lora, Nunito, Fira Code). The fonts are downloaded during the build process and served from our own server.\n\nNo connection to Google servers is made when visiting the website. No user data is transmitted to Google.`,
    },
    {
      icon: Eye,
      title: '7. Your Rights',
      content: `You have the following rights regarding your personal data:\n\n• Right of access (Art. 15 GDPR)\n• Right to rectification (Art. 16 GDPR)\n• Right to erasure (Art. 17 GDPR)\n• Right to restriction of processing (Art. 18 GDPR)\n• Right to data portability (Art. 20 GDPR)\n• Right to object (Art. 21 GDPR)\n\nTo exercise your rights, contact: info@blattwerk.dev\n\nYou also have the right to lodge a complaint with a data protection supervisory authority.`,
    },
    {
      icon: UserCheck,
      title: '8. Member Data',
      content: `For club members, we additionally process the data required for club membership (name, date of birth, address, ID data, health data according to KCanG requirements).\n\nThis data is collected separately and governed by a separate privacy policy for members, which is provided upon admission.\n\nLegal basis: Art. 6 para. 1 lit. b GDPR (contract performance), Art. 9 para. 2 lit. a GDPR (explicit consent for health data).`,
    },
    {
      icon: Shield,
      title: '9. Data Security',
      content: `We use technical and organizational security measures to protect your data against manipulation, loss or unauthorized access.\n\nThe connection to our website is encrypted with TLS/SSL (HTTPS). Our security measures are continuously improved in line with technological developments.`,
    },
  ];

  return (
    <>
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
            {isDE ? 'Stand: März 2026' : 'As of: March 2026'}
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
