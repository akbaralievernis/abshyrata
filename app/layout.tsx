import type { Metadata } from 'next';

import './globals.css';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'AUB-1-24 Group Portfolio | Osh State University',
  description:
    'Official group portfolio for AUB-1-24 at Osh State University, MFTIT Institute, Department of Applied Informatics and Information Security.',
  openGraph: {
    title: 'AUB-1-24 Group Portfolio',
    description:
      'Modern academic portfolio featuring students, news, and trips from Osh State University.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
