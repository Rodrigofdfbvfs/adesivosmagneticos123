import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';
import { DateBanner } from '@/components/layout/date-banner';

export const metadata: Metadata = {
  title: 'StoryBoost Stickers',
  description: 'Deixe seus Stories irresistíveis com o pack de figurinhas pensado para criar conexão e vender.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap" rel="stylesheet" />
        <Script src="https://fast.wistia.com/player.js" strategy="beforeInteractive" />
      </head>
      <body className="font-body antialiased">
        <DateBanner />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
