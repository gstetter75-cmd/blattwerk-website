'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  isDE: boolean;
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm({ isDE }: ContactFormProps) {
  const [state, setState] = useState<SubmitState>('idle');

  const inputClass =
    'w-full px-4 py-3 bg-bg-elevated border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 text-ink placeholder:text-ink-faint text-sm transition-colors';

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('loading');

    try {
      const form = e.currentTarget;
      const body = new URLSearchParams(
        Array.from(new FormData(form).entries()) as [string, string][]
      ).toString();

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (res.ok) {
        setState('success');
        form.reset();
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
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
          onClick={() => setState('idle')}
          className="mt-2 text-sm text-accent hover:text-accent/80 transition-colors"
        >
          {isDE ? 'Weitere Nachricht senden' : 'Send another message'}
        </button>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {/* Netlify hidden fields */}
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" className="hidden" />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink-muted mb-1.5">
          {isDE ? 'Name' : 'Name'} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={inputClass}
          placeholder={isDE ? 'Dein Name' : 'Your name'}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink-muted mb-1.5">
          E-Mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputClass}
          placeholder={isDE ? 'deine@email.de' : 'your@email.com'}
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-ink-muted mb-1.5">
          {isDE ? 'Betreff' : 'Subject'} *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className={inputClass}
          placeholder={isDE ? 'Worum geht es?' : 'What is it about?'}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-muted mb-1.5">
          {isDE ? 'Nachricht' : 'Message'} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClass} resize-y`}
          placeholder={isDE ? 'Deine Nachricht...' : 'Your message...'}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          required
          className="mt-1 w-4 h-4 rounded border-[var(--border)] accent-accent bg-bg-elevated"
        />
        <label htmlFor="privacy" className="text-xs text-ink-muted leading-relaxed">
          {isDE
            ? 'Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage einverstanden. *'
            : 'I have read the privacy policy and agree to the processing of my data to handle my inquiry. *'}
        </label>
      </div>

      {state === 'error' && (
        <div className="flex items-center gap-2 p-3 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {isDE
            ? 'Fehler beim Senden. Bitte versuche es erneut oder schreib uns direkt per E-Mail.'
            : 'Error sending. Please try again or contact us directly by email.'}
        </div>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="inline-flex items-center justify-center gap-2 px-7 py-3 font-semibold text-void rounded-md text-sm transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        style={{
          background: 'linear-gradient(135deg, #22c55e, #86efac)',
          boxShadow: '0 0 16px rgba(34,197,94,0.2)',
        }}
      >
        <Send className="w-4 h-4" />
        {state === 'loading'
          ? isDE ? 'Wird gesendet…' : 'Sending…'
          : isDE ? 'Nachricht senden' : 'Send Message'}
      </button>
    </form>
  );
}
