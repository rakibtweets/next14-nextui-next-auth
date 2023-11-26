import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import { Providers } from './providers';
import NavMenu from '@/component/NavMenu/NavMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Auth - Next Ui',
  description: 'Learning Next Auth and Next Ui'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers
          themeProps={{
            attribute: 'class',
            defaultTheme: 'dark',
            themes: ['light', 'dark']
          }}
        >
          <NavMenu />
          {children}
        </Providers>
      </body>
    </html>
  );
}
