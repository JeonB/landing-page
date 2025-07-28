import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { Pretendard } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'inPHR',
  description: 'inPHR 리뉴얼',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Pretendard.className} ${Pretendard.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
