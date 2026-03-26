import { z } from 'zod/v4';

const messages = {
  de: {
    nameMin: 'Bitte gib deinen Namen ein (mind. 2 Zeichen)',
    nameMax: 'Name darf maximal 100 Zeichen lang sein',
    email: 'Bitte gib eine gültige E-Mail-Adresse ein',
    subjectMin: 'Bitte gib einen Betreff ein (mind. 3 Zeichen)',
    subjectMax: 'Betreff darf maximal 200 Zeichen lang sein',
    messageMin: 'Bitte schreibe eine Nachricht (mind. 10 Zeichen)',
    messageMax: 'Nachricht darf maximal 5000 Zeichen lang sein',
    privacy: 'Bitte akzeptiere die Datenschutzerklärung',
  },
  en: {
    nameMin: 'Please enter your name (at least 2 characters)',
    nameMax: 'Name must be at most 100 characters',
    email: 'Please enter a valid email address',
    subjectMin: 'Please enter a subject (at least 3 characters)',
    subjectMax: 'Subject must be at most 200 characters',
    messageMin: 'Please write a message (at least 10 characters)',
    messageMax: 'Message must be at most 5000 characters',
    privacy: 'Please accept the privacy policy',
  },
} as const;

export function createContactSchema(locale: string = 'de') {
  const t = messages[locale === 'en' ? 'en' : 'de'];

  return z.object({
    name: z.string().min(2, t.nameMin).max(100, t.nameMax),
    email: z.email(t.email),
    subject: z.string().min(3, t.subjectMin).max(200, t.subjectMax),
    message: z.string().min(10, t.messageMin).max(5000, t.messageMax),
    privacy: z.literal(true, { error: t.privacy }),
  });
}

export const contactSchema = createContactSchema('de');

export type ContactFormData = z.infer<typeof contactSchema>;
