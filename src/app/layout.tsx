import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Snaptube Web - تحميل فيديوهات وموسيقى فاخر',
  description: 'تطبيق تحميل فيديوهات وموسيقى من الإنترنت بأداء فاخر وتصميم أنيق. دعم كامل للغة العربية.',
  keywords: ['snaptube', 'تحميل فيديو', 'تحميل موسيقى', 'يوتيوب', 'فيسبوك', 'أنغامي'],
  openGraph: {
    title: 'Snaptube Web',
    description: 'تحميل فيديوهات وموسيقى بأداء فاخر',
    type: 'website',
    locale: 'ar_SA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="h-full">
      <body className={`h-full ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
