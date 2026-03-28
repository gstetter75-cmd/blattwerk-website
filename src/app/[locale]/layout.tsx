import type { Metadata } from 'next';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { Lora, Nunito, Fira_Code } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/CookieBanner';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://blattwerk.dev';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${lora.variable} ${nunito.variable} ${firaCode.variable}`}
    >
      {/* hreflang links are now rendered per-page via generateMetadata alternates.languages */}
      <body className="bg-bg text-ink font-body antialiased">
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md focus:text-sm focus:font-bold"
          >
            {locale === 'de' ? 'Zum Inhalt springen' : 'Skip to content'}
          </a>
          <Header />
          <main id="main-content" className="min-h-screen">{children}</main>
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
