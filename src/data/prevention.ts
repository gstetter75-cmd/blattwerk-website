/**
 * Addiction prevention content data.
 * Extracted from SuchtpraeventionClient for reuse and testability.
 */

export interface PreventionItem {
  readonly title_de: string;
  readonly title_en: string;
  readonly text_de: string;
  readonly text_en: string;
}

export interface HelpResource {
  readonly name_de: string;
  readonly name_en: string;
  readonly contact: string;
  readonly tel: string | null;
  readonly url: string | null;
}

export const conceptItems: readonly PreventionItem[] = [
  {
    title_de: 'Aufklärung statt Verharmlosung',
    title_en: 'Education Instead of Trivialization',
    text_de: 'Evidenzbasierte Aufklärung über Wirkungen, Risiken und Nebenwirkungen — sachlich, ohne zu verharmlosen oder zu dramatisieren.',
    text_en: 'Evidence-based education about effects, risks and side effects — objective, without trivializing or dramatizing.',
  },
  {
    title_de: 'Früherkennung & Intervention',
    title_en: 'Early Detection & Intervention',
    text_de: 'Geschulte Beauftragte beobachten aufmerksam und sprechen Mitglieder bei Anzeichen problematischen Konsums an.',
    text_en: 'Trained officers observe attentively and approach members showing signs of problematic consumption.',
  },
  {
    title_de: 'Beratung & Vermittlung',
    title_en: 'Counseling & Referral',
    text_de: 'Vertrauliche Beratung und bei Bedarf Vermittlung an professionelle Suchtberatungsstellen.',
    text_en: 'Confidential counseling and referral to professional addiction counseling services when needed.',
  },
  {
    title_de: 'Mitgliedschaft ab 21 Jahren',
    title_en: 'Membership from Age 21',
    text_de: 'Wir nehmen ausschließlich Mitglieder ab 21 Jahren auf — eine bewusste Entscheidung zum Schutz junger Menschen.',
    text_en: 'We only accept members aged 21 and over — a deliberate decision to protect young people.',
  },
];

export const riskTopics: readonly PreventionItem[] = [
  {
    title_de: 'Gehirnentwicklung',
    title_en: 'Brain Development',
    text_de: 'Das Gehirn entwickelt sich bis etwa zum 25. Lebensjahr. Regelmäßiger Cannabiskonsum in dieser Phase kann kognitive Fähigkeiten, Gedächtnis und Lernfähigkeit nachhaltig beeinträchtigen. Je jünger der Einstieg, desto höher das Risiko.',
    text_en: 'The brain continues developing until around age 25. Regular cannabis use during this phase can permanently affect cognitive abilities, memory and learning capacity. The younger the onset, the higher the risk.',
  },
  {
    title_de: 'Psychische Gesundheit',
    title_en: 'Mental Health',
    text_de: 'Cannabis kann bei veranlagten Personen Angststörungen, Depressionen oder in seltenen Fällen Psychosen auslösen oder verstärken. Besonders THC-reiche Sorten und hohe Dosierungen erhöhen dieses Risiko. Wer familiär vorbelastet ist, sollte besonders vorsichtig sein.',
    text_en: 'Cannabis can trigger or worsen anxiety disorders, depression or, in rare cases, psychosis in predisposed individuals. THC-rich strains and high doses increase this risk. Those with a family history should be particularly cautious.',
  },
  {
    title_de: 'Abhängigkeitspotenzial',
    title_en: 'Addiction Potential',
    text_de: 'Etwa 9% aller Cannabiskonsumenten entwickeln im Laufe ihres Lebens eine Abhängigkeit. Bei täglichem Konsum steigt das Risiko auf etwa 25–50%. Typische Anzeichen: Toleranzentwicklung, Entzugssymptome (Schlafstörungen, Reizbarkeit), erfolglose Reduktionsversuche.',
    text_en: 'About 9% of all cannabis users develop a dependence over their lifetime. With daily use, the risk rises to about 25–50%. Typical signs: tolerance development, withdrawal symptoms (sleep disturbances, irritability), unsuccessful attempts to reduce.',
  },
  {
    title_de: 'Mischkonsum',
    title_en: 'Poly-Drug Use',
    text_de: 'Die Kombination von Cannabis mit Alkohol, Medikamenten oder anderen Substanzen kann unvorhersehbare und gefährliche Wechselwirkungen verursachen. Besonders die Mischung mit Alkohol verstärkt die Wirkung beider Substanzen erheblich.',
    text_en: 'Combining cannabis with alcohol, medications or other substances can cause unpredictable and dangerous interactions. The combination with alcohol in particular significantly amplifies the effects of both substances.',
  },
  {
    title_de: 'Schwangerschaft & Stillzeit',
    title_en: 'Pregnancy & Breastfeeding',
    text_de: 'Cannabiskonsum während der Schwangerschaft kann die Entwicklung des Kindes beeinträchtigen. THC geht in die Muttermilch über. Während Schwangerschaft und Stillzeit sollte vollständig auf Cannabis verzichtet werden.',
    text_en: 'Cannabis use during pregnancy can affect child development. THC passes into breast milk. Cannabis should be completely avoided during pregnancy and breastfeeding.',
  },
];

export const warningSigns = {
  de: [
    'Du konsumierst häufiger oder mehr als du eigentlich vorhast.',
    'Du hast versucht, weniger zu konsumieren — aber es klappt nicht.',
    'Dein Alltag, deine Arbeit oder deine Beziehungen leiden unter dem Konsum.',
    'Du brauchst immer mehr für die gleiche Wirkung.',
    'Du fühlst dich gereizt, unruhig oder schlaflos, wenn du nicht konsumierst.',
    'Du ziehst dich von Freunden oder Aktivitäten zurück.',
    'Du konsumierst, um mit Stress, Angst oder Traurigkeit umzugehen.',
  ],
  en: [
    'You use more frequently or more than you intended.',
    'You have tried to cut down — but can\'t.',
    'Your daily life, work or relationships suffer because of your use.',
    'You need increasing amounts for the same effect.',
    'You feel irritable, restless or sleepless when not using.',
    'You withdraw from friends or activities.',
    'You use cannabis to cope with stress, anxiety or sadness.',
  ],
} as const;

export const localResources: readonly HelpResource[] = [
  { name_de: 'DROBS – Drogenhilfe Hildesheim', name_en: 'DROBS – Drug Counseling Hildesheim', contact: '05121 69605-0', tel: '+495121696050', url: 'https://drobs-hi.de' },
  { name_de: 'Caritas Suchthilfe Hildesheim', name_en: 'Caritas Addiction Services Hildesheim', contact: '05121 1677-230', tel: '+49512116772300', url: 'https://www.caritas-hildesheim.de/suchthilfe' },
  { name_de: 'Ökumenische Suchthilfe (Diakonie/Caritas)', name_en: 'Ecumenical Addiction Services (Diakonie/Caritas)', contact: '05121 1677-230', tel: '+49512116772300', url: 'https://www.diakonie-hildesheim.de/beratung' },
];

export const helpResources: readonly HelpResource[] = [
  { name_de: 'BZgA – Bundeszentrale für gesundheitliche Aufklärung', name_en: 'BZgA – Federal Centre for Health Education', contact: '0221 89 20 31', tel: '+492218920310', url: 'https://www.bzga.de' },
  { name_de: 'Drogen-Hotline', name_en: 'Drug Hotline', contact: '01806 313031', tel: '+4918063130310', url: null },
  { name_de: 'Telefonseelsorge', name_en: 'Telefonseelsorge', contact: '0800 111 0 111', tel: '+498001110111', url: 'https://www.telefonseelsorge.de' },
  { name_de: 'Drugcom.de (BZgA)', name_en: 'Drugcom.de (BZgA)', contact: 'drugcom.de', tel: null, url: 'https://www.drugcom.de' },
  { name_de: 'Quit the Shit (BZgA)', name_en: 'Quit the Shit (BZgA)', contact: 'quit-the-shit.net', tel: null, url: 'https://www.quit-the-shit.net' },
];
