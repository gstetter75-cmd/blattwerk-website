'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { contactSchema, type ContactFormData } from '@/lib/validation';
import { RATE_LIMIT } from '@/lib/constants';

interface ContactFormProps {
  readonly isDE: boolean;
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error' | 'rate-limited';

function isRateLimited(): boolean {
  try {
    const last = localStorage.getItem(RATE_LIMIT.STORAGE_KEY);
    if (!last) return false;
    const elapsed = (Date.now() - Number(last)) / 1000;
    return elapsed < RATE_LIMIT.COOLDOWN_SECONDS;
  } catch {
    return false;
  }
}

function markSubmitted(): void {
  try {
    localStorage.setItem(RATE_LIMIT.STORAGE_KEY, String(Date.now()));
  } catch {
    // localStorage unavailable
  }
}

export function ContactForm({ isDE }: ContactFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [honeypot, setHoneypot] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const inputClass =
    'w-full px-4 py-3 bg-bg-elevated border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 text-ink placeholder:text-ink-faint text-sm transition-colors';

  async function onSubmit(data: ContactFormData) {
    if (honeypot) return;

    if (isRateLimited()) {
      setSubmitState('rate-limited');
      return;
    }

    setSubmitState('loading');

    try {
      const res = await fetch('https://formspree.io/f/xdkozqpl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          _subject: `BlattWerk Kontakt: ${data.subject}`,
        }),
      });

      if (res.ok) {
        markSubmitted();
        setSubmitState('success');
        reset();
      } else {
        setSubmitState('error');
      }
    } catch {
      setSubmitState('error');
    }
  }

  if (submitState === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 rounded-xl border border-accent/20 bg-accent/5 text-center">
        <CheckCircle className="w-10 h-10 text-accent" />
        <h3 className="font-heading italic text-xl text-ink">
          {isDE ? 'Nachricht gesendet!' : 'Message sent!'}
        </h3>
        <p className="text-ink-muted text-sm max-w-xs">
          {isDE
            ? 'Wir melden uns so schnell wie möglich bei dir.'
            : 'We will get back to you as soon as possible.'}
        </p>
        <button
          onClick={() => setSubmitState('idle')}
          className="mt-2 text-sm text-accent hover:text-accent/80 transition-colors"
          type="button"
        >
          {isDE ? 'Weitere Nachricht senden' : 'Send another message'}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      noValidate
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="bot-field">
          Do not fill this out
          <input
            id="bot-field"
            name="bot-field"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink-muted mb-1.5">
          {isDE ? 'Name' : 'Name'} *
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className={inputClass}
          placeholder={isDE ? 'Dein Name' : 'Your name'}
          aria-invalid={errors.name ? 'true' : undefined}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-400" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink-muted mb-1.5">
          E-Mail *
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className={inputClass}
          placeholder={isDE ? 'deine@email.de' : 'your@email.com'}
          aria-invalid={errors.email ? 'true' : undefined}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-400" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-ink-muted mb-1.5">
          {isDE ? 'Betreff' : 'Subject'} *
        </label>
        <input
          type="text"
          id="subject"
          {...register('subject')}
          className={inputClass}
          placeholder={isDE ? 'Worum geht es?' : 'What is it about?'}
          aria-invalid={errors.subject ? 'true' : undefined}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-xs text-red-400" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-muted mb-1.5">
          {isDE ? 'Nachricht' : 'Message'} *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={`${inputClass} resize-y`}
          placeholder={isDE ? 'Deine Nachricht...' : 'Your message...'}
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-400" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          {...register('privacy')}
          className="mt-1 w-4 h-4 rounded border-[var(--border)] accent-accent bg-bg-elevated"
          aria-invalid={errors.privacy ? 'true' : undefined}
          aria-describedby={errors.privacy ? 'privacy-error' : undefined}
        />
        <label htmlFor="privacy" className="text-xs text-ink-muted leading-relaxed">
          {isDE
            ? 'Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage einverstanden. *'
            : 'I have read the privacy policy and agree to the processing of my data to handle my inquiry. *'}
        </label>
      </div>
      {errors.privacy && (
        <p id="privacy-error" className="text-xs text-red-400" role="alert">
          {errors.privacy.message}
        </p>
      )}

      {submitState === 'error' && (
        <div className="flex items-center gap-2 p-3 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-sm" role="alert">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {isDE
            ? 'Fehler beim Senden. Bitte versuche es erneut oder schreib uns direkt an info@blattwerk.dev'
            : 'Error sending. Please try again or email us directly at info@blattwerk.dev'}
        </div>
      )}

      {submitState === 'rate-limited' && (
        <div className="flex items-center gap-2 p-3 rounded-md bg-gold-theme/10 border border-gold-theme/20 text-gold-theme text-sm" role="alert">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {isDE
            ? 'Bitte warte einen Moment, bevor du eine weitere Nachricht sendest.'
            : 'Please wait a moment before sending another message.'}
        </div>
      )}

      <button
        type="submit"
        disabled={submitState === 'loading'}
        className="inline-flex items-center justify-center gap-2 px-7 py-3 font-semibold text-void rounded-md text-sm transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        style={{
          background: 'linear-gradient(135deg, #22c55e, #86efac)',
          boxShadow: '0 0 16px rgba(34,197,94,0.2)',
        }}
      >
        <Send className="w-4 h-4" />
        {submitState === 'loading'
          ? isDE ? 'Wird gesendet...' : 'Sending...'
          : isDE ? 'Nachricht senden' : 'Send Message'}
      </button>
    </form>
  );
}
