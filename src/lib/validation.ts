import { z } from 'zod/v4';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Bitte gib deinen Namen ein (mind. 2 Zeichen)')
    .max(100, 'Name darf maximal 100 Zeichen lang sein'),
  email: z
    .email('Bitte gib eine gültige E-Mail-Adresse ein'),
  subject: z
    .string()
    .min(3, 'Bitte gib einen Betreff ein (mind. 3 Zeichen)')
    .max(200, 'Betreff darf maximal 200 Zeichen lang sein'),
  message: z
    .string()
    .min(10, 'Bitte schreibe eine Nachricht (mind. 10 Zeichen)')
    .max(5000, 'Nachricht darf maximal 5000 Zeichen lang sein'),
  privacy: z.literal(true, {
    error: 'Bitte akzeptiere die Datenschutzerklärung',
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
