import { setRequestLocale } from 'next-intl/server';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isDE = locale === 'de';

  const upcomingEvents = [
    {
      date: '2026-04-12',
      time: '18:00',
      title: isDE ? 'Mitgliederversammlung Q2' : 'Q2 General Assembly',
      description: isDE
        ? 'Ordentliche Mitgliederversammlung mit Bericht des Vorstands, Finanzbericht und Abstimmungen.'
        : 'Regular general assembly with board report, financial report and votes.',
      location: isDE ? 'Vereinsräume' : 'Club premises',
      type: isDE ? 'Versammlung' : 'Assembly',
    },
    {
      date: '2026-04-26',
      time: '15:00',
      title: isDE ? 'Safer-Use Workshop' : 'Safer Use Workshop',
      description: isDE
        ? 'Interaktiver Workshop zu risikominimierendem Konsum, Dosierung und Konsumformen. Offen für alle Mitglieder.'
        : 'Interactive workshop on risk-minimizing consumption, dosing and consumption methods. Open to all members.',
      location: isDE ? 'Vereinsräume' : 'Club premises',
      type: 'Workshop',
    },
    {
      date: '2026-05-10',
      time: '14:00',
      title: isDE ? 'Grow-Einführung für Einsteiger' : 'Growing Introduction for Beginners',
      description: isDE
        ? 'Grundlagen des Eigenanbaus: Erde, Licht, Wasser und die ersten Schritte mit deinen drei Pflanzen.'
        : 'Basics of home growing: soil, light, water and the first steps with your three plants.',
      location: isDE ? 'Vereinsräume' : 'Club premises',
      type: 'Workshop',
    },
  ];

  const pastEvents = [
    {
      date: '2026-02-15',
      title: isDE ? 'Gründungsversammlung' : 'Founding Assembly',
      description: isDE
        ? 'Offizielle Gründung des BlattWerk e.V. mit Wahl des Vorstands und Verabschiedung der Satzung.'
        : 'Official founding of BlattWerk e.V. with election of the board and adoption of the statutes.',
      type: isDE ? 'Versammlung' : 'Assembly',
    },
    {
      date: '2026-03-01',
      title: isDE ? 'Informationsabend: Das KCanG' : 'Information Evening: The KCanG',
      description: isDE
        ? 'Vortrag und Diskussion zur aktuellen Rechtslage rund um Cannabis in Deutschland.'
        : 'Presentation and discussion on the current legal situation around cannabis in Germany.',
      type: isDE ? 'Vortrag' : 'Lecture',
    },
    {
      date: '2026-03-08',
      title: isDE ? 'Terpene-Tasting' : 'Terpene Tasting',
      description: isDE
        ? 'Sensorische Verkostung verschiedener Terpenprofile – Aromen erkennen und verstehen lernen.'
        : 'Sensory tasting of different terpene profiles – learning to recognize and understand aromas.',
      type: 'Workshop',
    },
  ];

  function formatDate(dateStr: string): string {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  function getMonthDay(dateStr: string): { month: string; day: string } {
    const date = new Date(dateStr + 'T00:00:00');
    const month = date.toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-US', {
      month: 'short',
    });
    const day = date.getDate().toString();
    return { month, day };
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-deep-forest text-warm-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl mb-4">
            {isDE ? 'Veranstaltungen' : 'Events'}
          </h1>
          <p className="text-warm-white/70 text-lg max-w-2xl mx-auto">
            {isDE
              ? 'Workshops, Vorträge, Versammlungen und mehr – bleib informiert über unsere Vereinsaktivitäten.'
              : 'Workshops, lectures, assemblies and more – stay informed about our club activities.'}
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-deep-forest mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-amber" />
            {isDE ? 'Kommende Veranstaltungen' : 'Upcoming Events'}
          </h2>

          <div className="space-y-6">
            {upcomingEvents.map((event, i) => {
              const { month, day } = getMonthDay(event.date);
              return (
                <div
                  key={i}
                  className="flex gap-5 bg-warm-white rounded-xl border border-sand/50 shadow-sm p-6 hover:border-amber/30 transition-colors"
                >
                  {/* Date badge */}
                  <div className="w-16 h-16 rounded-lg bg-deep-forest text-warm-white flex flex-col items-center justify-center shrink-0">
                    <span className="text-xs uppercase tracking-wider opacity-70">
                      {month}
                    </span>
                    <span className="font-heading text-2xl leading-none">
                      {day}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-heading text-xl text-deep-forest">
                        {event.title}
                      </h3>
                      <span className="px-3 py-1 bg-amber/10 text-amber text-xs font-medium rounded-full shrink-0">
                        {event.type}
                      </span>
                    </div>
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-3">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs text-sage">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(event.date)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {event.time} {isDE ? 'Uhr' : ''}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-sand/30 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-deep-forest mb-8 flex items-center gap-3">
            <Clock className="w-8 h-8 text-sage" />
            {isDE ? 'Vergangene Veranstaltungen' : 'Past Events'}
          </h2>

          <div className="space-y-4">
            {pastEvents.map((event, i) => {
              const { month, day } = getMonthDay(event.date);
              return (
                <div
                  key={i}
                  className="flex gap-5 bg-warm-white/60 rounded-xl border border-sand/50 p-5"
                >
                  <div className="w-14 h-14 rounded-lg bg-sage/20 text-sage flex flex-col items-center justify-center shrink-0">
                    <span className="text-xs uppercase tracking-wider opacity-70">
                      {month}
                    </span>
                    <span className="font-heading text-xl leading-none">
                      {day}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="font-heading text-lg text-charcoal/80">
                        {event.title}
                      </h3>
                      <span className="px-2 py-0.5 bg-sage/10 text-sage text-xs rounded-full shrink-0">
                        {event.type}
                      </span>
                    </div>
                    <p className="text-charcoal/50 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Members only note */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-sand/30 rounded-lg p-6 flex items-center justify-center gap-3">
            <Users className="w-5 h-5 text-sage shrink-0" />
            <p className="text-sm text-sage">
              {isDE
                ? 'Die meisten Veranstaltungen sind nur für Mitglieder zugänglich. Informationsabende sind teilweise auch für Nicht-Mitglieder geöffnet.'
                : 'Most events are only accessible to members. Information evenings are partially open to non-members.'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
