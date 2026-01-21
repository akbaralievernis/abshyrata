import type { Metadata } from 'next';

import './globals.css';
import { AnimatedNavbar } from '@/components/animated-navbar';
import { SiteFooter } from '@/components/site-footer';
import { Providers } from '@/app/providers';

export const metadata: Metadata = {
  title: 'АУБ-1-24 · Портфолио группы | ОшГУ',
  description:
    'Официальное портфолио группы АУБ-1-24 ОшГУ: Институт МФТИТ, кафедра ПИиИБ.',
  openGraph: {
    title: 'АУБ-1-24 · Портфолио группы',
    description:
      'Современное портфолио студентов ОшГУ с новостями, путешествиями и достижениями.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <AnimatedNavbar />
        <Providers>
          <main>{children}</main>
        </Providers>
        <SiteFooter />
      </body>
    </html>
  );
}
