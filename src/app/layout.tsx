import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import type { ReactNode } from 'react';
import { headers } from 'next/headers';
import './globals.css';
import AppHeader from '@/src/components/AppHeader';
import ContactHub from '@/src/components/ContactHub';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lngrupoveritas.es';

const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'LN Grupo Veritas | 30 años de Excelencia Legal',
    template: '%s | LN Grupo Veritas',
  },
  description:
    'Despacho de abogados con más de 30 años de trayectoria. Especialistas en asesoría jurídica, fiscal, laboral y contable en Madrid.',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: 'LN Grupo Veritas',
    title: 'LN Grupo Veritas | 30 años de Excelencia Legal',
    description:
      'Despacho de abogados con más de 30 años de trayectoria. Especialistas en asesoría jurídica, fiscal, laboral y contable en Madrid.',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'LN Grupo Veritas – Abogados y Asesores',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LN Grupo Veritas | 30 años de Excelencia Legal',
    description:
      'Despacho de abogados con más de 30 años de trayectoria. Especialistas en asesoría jurídica, fiscal, laboral y contable en Madrid.',
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 },
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') ?? '/';
  return {
    ...baseMetadata,
    alternates: {
      canonical: `${SITE_URL}${pathname}`,
    },
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen overflow-x-hidden selection:bg-veritas-red selection:text-white">
        <AppHeader />
        {children}
        <Footer />
        <ContactHub />
        <CookieConsent />
      </body>
    </html>
  );
}
