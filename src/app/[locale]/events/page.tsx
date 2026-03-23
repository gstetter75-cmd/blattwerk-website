import { setRequestLocale } from 'next-intl/server';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isDE = locale === 'de';

  const upcomingEvents = [
    { date: '2026-04-12', time: '18:00', title: isDE ? 'Mitgliederversammlung Q2' : 'Q2 General Assembly', description: isDE ? 'Ordentliche Mitgliederversammlung mit Bericht des Vorstands, Finanzbericht und Abstimmungen.' : 'Regular general assembly with board report, financial report and votes.', location: isDE ? 'Vereinsräume' : 'Club premises', type: isDE ? 'Versammlung' : 'Assembly' },
    { date: '2026-04-26', time: '15:00', title: isDE ? 'Safer-Use Workshop' : 'Safer Use Workshop', description: isDE ? 'Interaktiver Workshop zu risikominimierendem Konsum, Dosierung und Konsumformen. Offen für alle Mitglieder.' : 'Interactive workshop on risk-minimizing consumption, dosing and consumption methods. Open to all members.', location: isDE ? 'Vereinsräume' : 'Club premises', type: 'Workshop' },
    { date: '2026-05-10', time: '14:00', title: isDE ? 'Grow-Einführung für Einsteiger' : 'Growing Introduction for Beginners', description: isDE ? 'Grundlagen des Eigenanbaus: Erde, Licht, Wasser und die ersten Schritte mit deinen drei Pflanzen.' : 'Basics of home growing: soil, light, water and the first steps with your three plants.', location: isDE ? 'Vereinsräume' : 'Club premises', type: 'Workshop' },
  ];

  const pastEvents = [
    { date: '2026-02-15', title: isDE ? 'Gründungsversammlung' : 'Founding Assembly', description: isDE ? 'Offizielle Gründung des BlattWerk e.V. mit Wahl des Vorstands und Verabschiedung der Satzung.' : 'Official founding of BlattWerk e.V. with election of the board and adoption of the statutes.', type: isDE ? 'Versammlung' : 'Assembly' },
    { date: '2026-03-01', title: isDE ? 'Informationsabend: Das KCanG' : 'Information Evening: The KCanG', description: isDE ? 'Vortrag und Diskussion zur aktuellen Rechtslage rund um Cannabis in Deutschland.' : 'Presentation and discussion on the current legal situation around cannabis in Germany.', type: isDE ? 'Vortrag' : 'Lecture' },
    { date: '2026-03-08', title: isDE ? 'Terpene-Tasting' : 'Terpene Tasting', description: isDE ? 'Sensorische Verkostung verschiedener Terpenprofile – Aromen erkennen und verstehen lernen.' : 'Sensory tasting of different terpene profiles – learning to recognize and understand aromas.', type: 'Workshop' },
  ];

  function getMonthDay(dateStr: string) {
    const date = new Date(dateStr + 'T00:00:00');
    return {
      month: date.toLocaleDateString(isDE ? 'de-DE' : 'en-US', { month: 'short' }),
      day: date.getDate().toString(),
      full: date.toLocaleDateString(isDE ? 'de-DE' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    };
  }

  const glassStyle = { background: 'var(--glass)', backdropFilter: 'blur(12px)' } as const;

  return (
    <>
      <PageHero
        title={isDE ? 'Veranstaltungen' : 'Events'}
        subtitle={isDE ? 'Workshops, Vorträge, Versammlungen und mehr – bleib informiert über unsere Vereinsaktivitäten.' : 'Workshops, lectures, assemblies and more – stay informed about our club activities.'}
      />

      {/* Upcoming */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading italic text-2xl text-ink mb-8 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-accent opacity-80" />
            {isDE ? 'Kommende Veranstaltungen' : 'Upcoming Events'}
          </h2>
          <div className="space-y-4">
            {upcomingEvents.map((event, i) => {
              const { month, day, full } = getMonthDay(event.date);
              return (
                <div
                  key={i}
                  className="flex gap-5 rounded-xl border border-[var(--border)] hover:border-accent/30 p-5 transition-all duration-200 hover:-translate-y-0.5"
                  style={glassStyle}
                >
                  <div className="w-14 h-14 rounded-lg bg-accent/15 text-accent flex flex-col items-center justify-center shrink-0">
                    <span className="text-[10px] uppercase tracking-wider opacity-70">{month}</span>
                    <span className="font-heading italic text-2xl leading-none">{day}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <h3 className="font-heading italic text-xl text-ink">{event.title}</h3>
                      <span className="px-2.5 py-0.5 bg-gold-theme/10 text-gold-theme text-xs font-medium rounded-full shrink-0 border border-gold-theme/20">
                        {event.type}
                      </span>
                    </div>
                    <p className="text-ink-muted text-sm leading-relaxed mb-3">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-ink-faint">
                      <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{full}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{event.time}{isDE ? ' Uhr' : ''}</span>
                      <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{event.location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past */}
      <section className="py-16 lg:py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading italic text-2xl text-ink mb-8 flex items-center gap-3">
            <Clock className="w-6 h-6 text-ink-muted opacity-60" />
            {isDE ? 'Vergangene Veranstaltungen' : 'Past Events'}
          </h2>
          <div className="space-y-3">
            {pastEvents.map((event, i) => {
              const { month, day } = getMonthDay(event.date);
              return (
                <div key={i} className="flex gap-5 rounded-xl border border-[var(--border)] p-5 opacity-60" style={glassStyle}>
                  <div className="w-12 h-12 rounded-lg bg-bg-elevated text-ink-muted flex flex-col items-center justify-center shrink-0">
                    <span className="text-[10px] uppercase tracking-wider opacity-70">{month}</span>
                    <span className="font-heading italic text-lg leading-none">{day}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="font-heading italic text-lg text-ink">{event.title}</h3>
                      <span className="px-2 py-0.5 bg-bg-elevated text-ink-muted text-xs rounded-full shrink-0">{event.type}</span>
                    </div>
                    <p className="text-ink-muted text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Members only */}
      <section className="py-8 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 p-4 bg-bg-elevated rounded-lg border border-[var(--border)]">
            <Users className="w-4 h-4 text-ink-muted shrink-0" />
            <p className="text-sm text-ink-muted">
              {isDE ? 'Die meisten Veranstaltungen sind nur für Mitglieder zugänglich. Informationsabende sind teilweise auch für Nicht-Mitglieder geöffnet.' : 'Most events are only accessible to members. Information evenings are partially open to non-members.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
