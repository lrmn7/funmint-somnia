import Navbar from '@/components/navbar';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ThirdwebProvider } from 'thirdweb/react';
import './globals.css';
import rootMetadata from './metadata';
import { Toaster } from '@/components/ui/sonner';

/**
 * Load Manrope font from local file
 */
const manrope = localFont({
  src: '../assets/manrope.ttf',
  variable: '--font-manrope',
  preload: true,
});

/**
 * Give metadata to the root layout app
 */
export const metadata: Metadata = rootMetadata;

/**
 * Root layout app
 * In this root layout, navbar and the main content will always be rendered
 * Thirdweb provider and Nuqs adapter will be wrapped around the main content
 * Thirdweb provider used to be provider to connect to the wallet, etc
 * Nuqs adapter used to be handle the query params with type-safe
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full h-full min-w-full w-full">
      <body
        className={`${manrope.variable} font-manrope antialiased h-full w-full flex flex-col bg-background text-foreground`}
      >
        <ThirdwebProvider>
          <NuqsAdapter>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Toaster position="top-center" theme="light" richColors />
          </NuqsAdapter>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
