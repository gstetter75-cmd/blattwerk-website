import { describe, it, expect } from 'vitest';
import { createContactSchema } from '@/lib/validation';

describe('Contact Form Validation', () => {
  const schemaDE = createContactSchema('de');
  const schemaEN = createContactSchema('en');

  const validData = {
    name: 'Max Mustermann',
    email: 'max@example.com',
    subject: 'Frage zur Mitgliedschaft',
    message: 'Ich möchte gerne mehr über den Verein erfahren.',
    privacy: true as const,
  };

  it('accepts valid data', () => {
    const result = schemaDE.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('rejects empty name', () => {
    const result = schemaDE.safeParse({ ...validData, name: '' });
    expect(result.success).toBe(false);
  });

  it('rejects invalid email', () => {
    const result = schemaDE.safeParse({ ...validData, email: 'not-an-email' });
    expect(result.success).toBe(false);
  });

  it('rejects short subject', () => {
    const result = schemaDE.safeParse({ ...validData, subject: 'ab' });
    expect(result.success).toBe(false);
  });

  it('rejects short message', () => {
    const result = schemaDE.safeParse({ ...validData, message: 'short' });
    expect(result.success).toBe(false);
  });

  it('rejects unchecked privacy', () => {
    const result = schemaDE.safeParse({ ...validData, privacy: false });
    expect(result.success).toBe(false);
  });

  it('returns German error messages for DE schema', () => {
    const result = schemaDE.safeParse({ ...validData, name: '' });
    if (!result.success) {
      const nameError = result.error.issues.find((i) => i.path?.[0] === 'name');
      expect(nameError?.message).toContain('Bitte');
    }
  });

  it('returns English error messages for EN schema', () => {
    const result = schemaEN.safeParse({ ...validData, name: '' });
    if (!result.success) {
      const nameError = result.error.issues.find((i) => i.path?.[0] === 'name');
      expect(nameError?.message).toContain('Please');
    }
  });
});
