import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/CookieBanner';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  axes: ['opsz'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
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
      className={`${fraunces.variable} ${plusJakarta.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-ink font-body antialiased transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <CookieBanner />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
