import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Garrett Cox',
  description: "Garrett Cox's Personal Website",
  keywords: 'Garrett Joe Cox personal website github linkedin',
  authors: [{ name: 'Garrett Cox' }],
  verification: {
    google: 'QKaBf-q9jtSoWsWHrzudNrFiJ70f3xbvvpbASCjtNdQ',
  },
  openGraph: {
    title: 'Garrett Cox',
    description: "Garrett Cox's Personal Website",
    type: 'website',
    url: 'https://garrettcox.dev/',
    images: ['https://garrettcox.dev/og.png'],
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
