import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import type { ReactNode } from 'react';
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

export const metadata: Metadata = {
  title: 'LN Grupo Veritas | Abogados y Asesores',
  description:
    'Despacho de abogados con más de 30 años de trayectoria. Especialistas en asesoría jurídica, fiscal, laboral y contable en Madrid.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen selection:bg-veritas-red selection:text-white">
        <AppHeader />
        {children}
        <Footer />
        <ContactHub />
        <CookieConsent />
      </body>
    </html>
  );
}
