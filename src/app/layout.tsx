import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Abrar Jaman Gazi | Software Developer & CSE Student at UIU',
  description:
    'Personal portfolio of Abrar Jaman Gazi, a Computer Science and Engineering student at United International University (UIU), Dhaka. Specializing in full-stack development, software engineering, and multimodal AI/ML systems.',
  keywords: [
    'Abrar Jaman Gazi',
    'Abrar Jaman',
    'United International University',
    'UIU CSE',
    'Software Developer Portfolio',
    'Full-Stack Developer Dhaka',
    'Multimodal Meme Analysis FYDP',
    'Next.js Portfolio',
    'React Developer',
    'Machine Learning Bangladesh',
  ],
  authors: [{ name: 'Abrar Jaman Gazi', url: 'https://github.com/abrar-jaman-gazi' }],
  creator: 'Abrar Jaman Gazi',
  metadataBase: new URL('https://abrarjamangazi.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abrarjamangazi.dev',
    title: 'Abrar Jaman Gazi | Software Developer & CSE Student',
    description:
      'Computer Science & Engineering student at UIU. Building thoughtful full-stack software and exploring intelligent AI/ML systems.',
    siteName: 'Abrar Jaman Gazi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abrar Jaman Gazi | Portfolio',
    description:
      'CSE student at United International University (UIU), Dhaka. Full-stack development & multimodal AI research.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0B0F17" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className="min-h-screen font-sans bg-white dark:bg-charcoal-900 text-zinc-900 dark:text-zinc-100 antialiased selection:bg-accent-blue selection:text-charcoal-950"
      >
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
