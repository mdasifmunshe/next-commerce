import { ReactNode, Suspense } from 'react';
import { Inter } from 'next/font/google';

import Navbar from '@/components/navbar';
import '../styles/globals.css';

export const metadata = {
  title: 'Next Commerce',
  description: 'Created by Md Asif Munshe'
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-black selection:bg-teal-300 dark:bg-black dark:text-white dark:selection:bg-fuchsia-600 dark:selection:text-white">
        {/* @ts-expect-error Server Component */}
        <Navbar />
        <Suspense>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
