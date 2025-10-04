import type { Metadata } from 'next';
import './globals.css';
import '../styles/background-fx.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Inter, Outfit, Space_Grotesk, DM_Sans } from 'next/font/google';
import { BackgroundFX } from '@/components/background-fx';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: 'Abdullah Mubasir — FullStack Developer & AI Engineer',
  description: 'A FullStack Developer and AI Engineer specializing in building intelligent, scalable, and user-centric AI-powered products.',
  openGraph: {
    title: 'Abdullah Mubasir — FullStack Developer & AI Engineer',
    description: 'A FullStack Developer and AI Engineer specializing in building intelligent, scalable, and user-centric AI-powered products.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body className={cn(inter.variable, outfit.variable, spaceGrotesk.variable, dmSans.variable, 'font-body antialiased min-h-screen text-foreground flex flex-col animated-gradient')}>
        <BackgroundFX />
        <div className="relative z-10 flex flex-col flex-grow">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
